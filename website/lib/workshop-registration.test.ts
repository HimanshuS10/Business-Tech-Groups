import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { pastEvents, upcomingEvents } from "../data/events.ts";

const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd_GMn0P521RLMWyj9lucOvM9eN4bRGz3fJSTcL9SKStU2Lmg/viewform?usp=dialog";

test("the Google AI Studio Workshop keeps its unpublished date and uses the official form", () => {
  const workshop = upcomingEvents.find((event) => event.id === "google-ai-studio-workshop");
  assert.ok(workshop);
  assert.equal(workshop.dateLabel, "Date to be announced");
  assert.equal(workshop.timeLabel, null);
  assert.equal(workshop.location, undefined);
  assert.equal(workshop.registrationHref, registrationUrl);
  assert.equal(workshop.registrationLabel, "Register for the Workshop");

  const others = [...upcomingEvents, ...pastEvents].filter((event) => event.id !== workshop.id);
  assert.equal(others.some((event) => event.registrationHref), false);
});

test("registration links open in a new tab and event rich results stay off", () => {
  const card = readFileSync(new URL("../components/event-card.tsx", import.meta.url), "utf8");
  const structuredData = readFileSync(new URL("./structured-data.ts", import.meta.url), "utf8");
  assert.match(card, /target="_blank"/);
  assert.match(card, /rel="noopener noreferrer"/);
  assert.match(card, /registrationLabel \?\? "Register"/);
  assert.equal(structuredData.includes('"@type": "Event"'), false);
});
