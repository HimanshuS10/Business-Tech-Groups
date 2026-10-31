import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { upcomingEvents } from "../data/events.ts";
import { faqGraph, organizationNode, siteGraph } from "./structured-data.ts";

const origin = "https://example.invalid";

test("organization data uses the verified club profile", () => {
  const org = organizationNode(origin);
  assert.equal(org.name, "Business Technologies Guelph");
  assert.equal(org.contactPoint.email, "lsharp03@uoguelph.ca");
  assert.deepEqual(org.sameAs, [
    "https://www.instagram.com/businesstechguelph/",
    "https://www.tiktok.com/@businesstechguelph",
    "https://www.linkedin.com/company/business-technologies-guelph/home/",
  ]);
  assert.equal(org.url, "https://example.invalid/");
  assert.equal(JSON.stringify(organizationNode(null)).includes("localhost"), false);

  const site = siteGraph(null);
  assert.equal(site["@graph"][1].name, "Business Technologies Guelph");
  const faq = faqGraph(origin, [
    { question: "What kinds of events does BTG organize?", answer: [{ text: "Workshops and panels." }] },
  ]);
  assert.equal(faq.mainEntity[0].acceptedAnswer.text, "Workshops and panels.");
  assert.equal(faq.url, "https://example.invalid/");
});

test("site structured data does not claim Event rich results", () => {
  const markup = JSON.stringify([
    siteGraph(origin),
    organizationNode(origin),
    faqGraph(origin, []),
  ]);
  assert.equal(markup.includes('"@type":"Event"'), false);
  assert.equal(markup.includes("Google AI Studio Workshop"), false);
});

test("the events listing stays visible and does not emit Event markup", () => {
  const page = readFileSync(new URL("../app/events/page.tsx", import.meta.url), "utf8");
  const structuredData = readFileSync(new URL("./structured-data.ts", import.meta.url), "utf8");
  const workshop = upcomingEvents.find((event) => event.id === "google-ai-studio-workshop");

  assert.equal(workshop?.dateLabel, "Date to be announced");
  assert.equal(page.includes("upcomingEvents"), true);
  assert.equal(page.includes("<EventList"), true);
  assert.equal(page.includes("JsonLd"), false);
  assert.equal(page.includes("eventsGraph"), false);
  assert.equal(structuredData.includes('"@type": "Event"'), false);
  assert.equal(structuredData.includes("Google AI Studio Workshop"), false);
});
