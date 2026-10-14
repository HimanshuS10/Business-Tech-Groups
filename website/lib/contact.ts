import {
  inquiryTypes,
  type ContactFormState,
  type ContactMessage,
  type FieldErrors,
  type InquiryType,
} from "./contact-fields.ts";

export type { ContactFormState, ContactMessage, FieldErrors, InquiryType };
export { inquiryTypes };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const minSubmitMs = 2000;
const rateWindowSeconds = 600;
const rateLimitCount = 5;

export function validateContact(raw: {
  name: string;
  email: string;
  inquiry: string;
  organization: string;
  subject: string;
  message: string;
}): { ok: true; value: ContactMessage } | { ok: false; fieldErrors: FieldErrors } {
  const fieldErrors: FieldErrors = {};
  const name = stripControl(raw.name).trim();
  const email = stripControl(raw.email).trim();
  const organization = stripControl(raw.organization).trim();
  const subject = stripControl(raw.subject).replace(/[\r\n]+/g, " ").trim();
  const message = stripControl(raw.message).trim();

  if (!name) fieldErrors.name = "Enter your name.";
  else if (name.length > 80) fieldErrors.name = "Name must be 80 characters or fewer.";

  if (!email) fieldErrors.email = "Enter your email address.";
  else if (email.length > 254 || !emailPattern.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (!inquiryTypes.includes(raw.inquiry as InquiryType)) {
    fieldErrors.inquiry = "Choose an inquiry type.";
  }

  if (organization.length > 120) {
    fieldErrors.organization = "Organization must be 120 characters or fewer.";
  }

  if (!subject) fieldErrors.subject = "Enter a subject.";
  else if (subject.length > 120) fieldErrors.subject = "Subject must be 120 characters or fewer.";

  if (!message) fieldErrors.message = "Enter a message.";
  else if (message.length < 10) fieldErrors.message = "Message must be at least 10 characters.";
  else if (message.length > 4000) fieldErrors.message = "Message must be 4,000 characters or fewer.";

  if (Object.keys(fieldErrors).length > 0) return { ok: false, fieldErrors };

  return {
    ok: true,
    value: {
      name,
      email,
      inquiry: raw.inquiry as InquiryType,
      organization,
      subject,
      message,
    },
  };
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildContactEmail(message: ContactMessage) {
  const rows = [
    ["Name", message.name],
    ["Email", message.email],
    ["Inquiry", message.inquiry],
    ["Organization", message.organization || "Not provided"],
    ["Subject", message.subject],
  ];

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message.message,
  ].join("\n");

  const html = `<div style="font-family:Inter,Arial,sans-serif;color:#263135;line-height:1.5">
${rows
  .map(
    ([label, value]) =>
      `<p style="margin:0 0 12px"><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value)}</p>`,
  )
  .join("")}
<p style="margin:16px 0 0"><strong>Message</strong></p>
<p style="margin:8px 0 0;white-space:pre-wrap">${escapeHtml(message.message)}</p>
</div>`;

  return { text, html, subject: `BTG inquiry: ${message.subject}` };
}

type DeliveryEnv = {
  RESEND_API_KEY?: string;
  BTG_CONTACT_TO_EMAIL?: string;
  BTG_CONTACT_FROM_EMAIL?: string;
  UPSTASH_REDIS_REST_URL?: string;
  UPSTASH_REDIS_REST_TOKEN?: string;
};

export async function deliverContact(
  message: ContactMessage,
  options: {
    ip: string;
    now: number;
    startedAt: number;
    honeypot: string;
    env?: DeliveryEnv;
    fetchImpl?: typeof fetch;
  },
): Promise<{ ok: true } | { ok: false }> {
  if (options.honeypot.trim()) return { ok: false };
  if (
    !Number.isFinite(options.startedAt) ||
    options.startedAt <= 0 ||
    options.now - options.startedAt < minSubmitMs
  ) {
    return { ok: false };
  }

  const env: DeliveryEnv = options.env ?? {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    BTG_CONTACT_TO_EMAIL: process.env.BTG_CONTACT_TO_EMAIL,
    BTG_CONTACT_FROM_EMAIL: process.env.BTG_CONTACT_FROM_EMAIL,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  };
  const fetchImpl = options.fetchImpl ?? fetch;
  const limited = await enforceRateLimit(options.ip, env, fetchImpl);
  if (!limited) return { ok: false };

  const apiKey = env.RESEND_API_KEY?.trim();
  const to = env.BTG_CONTACT_TO_EMAIL?.trim();
  const from = env.BTG_CONTACT_FROM_EMAIL?.trim();
  if (!apiKey || !to || !from || !emailPattern.test(to) || !senderAllowed(from)) {
    return { ok: false };
  }

  const email = buildContactEmail(message);
  const response = await fetchImpl("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: formatFrom(from),
      to: [to],
      reply_to: message.email,
      subject: email.subject,
      html: email.html,
      text: email.text,
    }),
  });

  if (!response.ok) return { ok: false };
  const payload = (await response.json()) as { id?: unknown };
  return typeof payload.id === "string" && payload.id.length > 0 ? { ok: true } : { ok: false };
}

async function enforceRateLimit(ip: string, env: DeliveryEnv, fetchImpl: typeof fetch) {
  const url = env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, "");
  const token = env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return false;

  const key = `btg:contact:${ip.slice(0, 80)}`;
  const response = await fetchImpl(`${url}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify([
      ["INCR", key],
      ["EXPIRE", key, rateWindowSeconds, "NX"],
    ]),
  });
  if (!response.ok) return false;

  const payload = (await response.json()) as { result?: unknown }[];
  const count = payload[0]?.result;
  return typeof count === "number" && count <= rateLimitCount;
}

function stripControl(value: string) {
  return value.replaceAll("\0", "").replace(/[\u0001-\u0008\u000B\u000C\u000E-\u001F]/g, "");
}

function senderAllowed(from: string) {
  if (/[\r\n]/.test(from)) return false;
  const bare = from.match(/<([^>]+)>\s*$/)?.[1] ?? from;
  return emailPattern.test(bare.trim());
}

function formatFrom(from: string) {
  if (from.includes("<")) return from;
  return `Business Technologies Guelph <${from}>`;
}
