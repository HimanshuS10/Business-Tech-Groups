import assert from "node:assert/strict";
import test from "node:test";
import { contactSubmissionEnabled } from "./contact-fields.ts";
import { buildContactEmail, deliverContact, escapeHtml, validateContact, type ContactMessage } from "./contact.ts";

const valid = {
  name: "Avery Chen",
  email: "avery@uoguelph.ca",
  inquiry: "General Question",
  organization: "",
  subject: "Joining an event",
  message: "I would like to know how students can get involved.",
};

const message: ContactMessage = {
  name: "Avery Chen",
  email: "avery@uoguelph.ca",
  inquiry: "General Question",
  organization: "",
  subject: "Joining an event",
  message: "I would like to know how students can get involved.",
};

test("contact submission stays off until a destination is approved", () => {
  assert.equal(contactSubmissionEnabled, false);
});

test("rejects a missing name and an invalid email", () => {
  const result = validateContact({ ...valid, name: " ", email: "not-an-email" });
  assert.equal(result.ok, false);
  if (!result.ok) {
    assert.equal(result.fieldErrors.name, "Enter your name.");
    assert.equal(result.fieldErrors.email, "Enter a valid email address.");
  }
});

test("escapes untrusted content in the email", () => {
  const built = buildContactEmail({
    ...message,
    name: `<script>alert("x")</script>`,
    message: "Hello <b>there</b> & friends",
  });
  assert.equal(built.html.includes("<script>"), false);
  assert.match(built.html, /&lt;script&gt;/);
  assert.match(built.html, /Hello &lt;b&gt;there&lt;\/b&gt; &amp; friends/);
  assert.equal(escapeHtml(`'"`), "&#39;&quot;");
});

test("does not report success when email delivery is not configured", async () => {
  let called = false;
  const result = await deliverContact(message, {
    ip: "127.0.0.1",
    now: 10_000,
    startedAt: 1_000,
    honeypot: "",
    env: {},
    fetchImpl: async () => {
      called = true;
      return new Response("{}");
    },
  });
  assert.equal(result.ok, false);
  assert.equal(called, false);
});

test("reports success only after the provider returns an id", async () => {
  const calls: string[] = [];
  const result = await deliverContact(message, {
    ip: "203.0.113.8",
    now: 10_000,
    startedAt: 1_000,
    honeypot: "",
    env: configuredEnv(),
    fetchImpl: async (input) => {
      const url = String(input);
      calls.push(url);
      if (url.includes("pipeline")) {
        return Response.json([{ result: 1 }, { result: 1 }]);
      }
      return Response.json({ id: "email_123" });
    },
  });
  assert.equal(result.ok, true);
  assert.equal(calls.some((url) => url === "https://api.resend.com/emails"), true);
});

test("reports failure when the provider rejects the email", async () => {
  const result = await deliverContact(message, {
    ip: "203.0.113.9",
    now: 10_000,
    startedAt: 1_000,
    honeypot: "",
    env: configuredEnv(),
    fetchImpl: async (input) => {
      if (String(input).includes("pipeline")) return Response.json([{ result: 1 }]);
      return new Response("no", { status: 422 });
    },
  });
  assert.equal(result.ok, false);
});

test("rejects a missing timestamp without calling the provider", async () => {
  let called = false;
  const result = await deliverContact(message, {
    ip: "203.0.113.11",
    now: 10_000,
    startedAt: 0,
    honeypot: "",
    env: configuredEnv(),
    fetchImpl: async () => {
      called = true;
      return Response.json({ id: "email_123" });
    },
  });
  assert.equal(result.ok, false);
  assert.equal(called, false);
});

test("rejects a filled honeypot without calling the provider", async () => {
  let called = false;
  const result = await deliverContact(message, {
    ip: "203.0.113.10",
    now: 10_000,
    startedAt: 1_000,
    honeypot: "https://spam.example",
    env: configuredEnv(),
    fetchImpl: async () => {
      called = true;
      return Response.json({ id: "email_123" });
    },
  });
  assert.equal(result.ok, false);
  assert.equal(called, false);
});

function configuredEnv() {
  return {
    RESEND_API_KEY: "re_test",
    BTG_CONTACT_TO_EMAIL: "inbox@example.com",
    BTG_CONTACT_FROM_EMAIL: "hello@example.com",
    UPSTASH_REDIS_REST_URL: "https://example.upstash.io",
    UPSTASH_REDIS_REST_TOKEN: "token",
  };
}
