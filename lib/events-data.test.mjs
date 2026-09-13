import assert from "node:assert/strict";
import { test } from "node:test";

import { events } from "../config/events.ts";
import { getEvents, isOngoingEvent, isUpcomingEvent, sortEvents } from "./events-data.ts";

function createEvent(overrides = {}) {
  return {
    id: "example-workshop",
    link: "",
    startAt: "2026-09-14T09:00:00+03:00",
    endAt: "2026-10-02T18:00:00+03:00",
    category: "workshop",
    title: "Example workshop",
    eyebrow: "Programming",
    summary: "Summary",
    description: "Description",
    location: "Example venue",
    audience: "Learners",
    highlights: ["Practice"],
    ...overrides,
  };
}

for (const locale of ["en", "ro"]) {
  test(`${locale}: events use their configured translation and preserve shared fields`, () => {
    const localizedEvents = getEvents(locale);
    assert.equal(localizedEvents.length, events.length);
    for (const definition of events) {
      const event = localizedEvents.find(event => event.id === definition.id);
      const { content, ...sharedFields } = definition;
      assert.deepEqual(event, { ...sharedFields, ...content[locale] });
    }
  });
}

test("a confirmed interval remains upcoming and ongoing until its exact end", () => {
  const event = createEvent();
  const beforeStart = new Date("2026-09-13T23:59:59+03:00");
  const duringEvent = new Date("2026-09-15T12:00:00+03:00");
  const atEnd = new Date("2026-10-02T18:00:00+03:00");
  const afterEnd = new Date("2026-10-02T18:00:00.001+03:00");

  assert.ok(isUpcomingEvent(event, beforeStart));
  assert.equal(isOngoingEvent(event, beforeStart), false);
  assert.ok(isUpcomingEvent(event, duringEvent));
  assert.ok(isOngoingEvent(event, duringEvent));
  assert.ok(isUpcomingEvent(event, atEnd));
  assert.ok(isOngoingEvent(event, atEnd));
  assert.equal(isUpcomingEvent(event, afterEnd), false);
  assert.equal(isOngoingEvent(event, afterEnd), false);
});

test("an unconfirmed month stays upcoming until expiry without appearing ongoing", () => {
  const event = createEvent({
    startAt: "2026-10-01T00:00:00+03:00",
    endAt: "2026-10-31T23:59:59+02:00",
    dateLabel: "October 2026 · Date TBA",
  });
  assert.ok(isUpcomingEvent(event, new Date("2026-10-01T12:00:00+03:00")));
  assert.ok(isUpcomingEvent(event, new Date("2026-10-31T23:59:00+02:00")));
  assert.equal(isOngoingEvent(event, new Date("2026-10-15T12:00:00+03:00")), false);
  assert.equal(isUpcomingEvent(event, new Date("2026-11-01T00:00:00+02:00")), false);
});

test("events without an end date expire after their start and are never ongoing", () => {
  const event = createEvent({ endAt: undefined });
  const atStart = new Date(event.startAt);
  assert.ok(isUpcomingEvent(event, atStart));
  assert.equal(isOngoingEvent(event, atStart), false);
  assert.equal(isUpcomingEvent(event, new Date(atStart.getTime() + 1)), false);
});

test("events sort by actual timestamps in either direction without modifying the input", () => {
  const later = createEvent({ id: "later", startAt: "2026-10-01T10:00:00+02:00" });
  const earlier = createEvent({ id: "earlier", startAt: "2026-10-01T10:00:00+03:00" });
  const original = [later, earlier];
  assert.deepEqual(sortEvents(original, "ascending"), [earlier, later]);
  assert.deepEqual(sortEvents(original, "descending"), [later, earlier]);
  assert.deepEqual(original, [later, earlier]);
});
