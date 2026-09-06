import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";

import { formatEventDate, getEventMonthKey } from "./event-dates.ts";
import { getEvents, isOngoingEvent, isUpcomingEvent } from "./events-data.ts";

for (const locale of ["en", "ro"]) {
  test(`${locale}: Hacktoberfest has dedicated artwork and an unconfirmed October date`, () => {
    const events = getEvents(locale);
    const event = events.find(({ id }) => id === "hacktoberfest-mlh-2026");
    assert.ok(event);
    assert.equal(events.filter(({ id }) => id === event.id).length, 1);
    assert.equal(event.location, "BJPIBR");
    assert.equal(event.category, "competition");
    assert.ok(event.title.includes("MLH"));
    assert.match(event.audience, /Galați–Brăila/);
    assert.match(event.summary, locale === "en" ? /one-day/ : /o zi/);
    assert.equal(getEventMonthKey(event.startAt), "2026-10");
    assert.equal(formatEventDate(event, locale), event.dateLabel);
    assert.match(event.dateLabel, locale === "en" ? /TBA/ : /va fi anunțată/);
    assert.equal(event.image, "/hacktoberfest-2026.png");
    assert.equal(event.imageFit, "contain");
    assert.equal(event.modalImage, "/hacktoberfest-bg.webp");
    for (const asset of [event.image, event.modalImage]) {
      assert.ok(existsSync(new URL(`../public${asset}`, import.meta.url)));
    }
    // Do not borrow another event's signup form while waiting for the new URL.
    assert.equal(event.link, "");
  });

  test(`${locale}: Back to School uses its dedicated registration form`, () => {
    const event = getEvents(locale).find(({ id }) => id === "scripticx-back-to-school-2026");
    assert.ok(event);
    assert.equal(event.link, "https://forms.gle/BeEBV9FJf9XKt36Z6");
  });

  test(`${locale}: Back to School has two final competitions on the platform`, () => {
    const finals = getEvents(locale).filter(({ id }) => id.startsWith("back-to-school-final-group-"));

    assert.equal(finals.length, 2);
    assert.deepEqual(finals.map(({ id }) => id), [
      "back-to-school-final-group-1-2026",
      "back-to-school-final-group-2-2026",
    ]);

    for (const event of finals) {
      assert.equal(event.category, "competition");
      assert.equal(event.link, "https://platform.scripticx.org");
      assert.equal(getEventMonthKey(event.startAt), "2026-10");
      assert.match(event.location, /ScripticX/);
      assert.match(event.dateLabel, locale === "en" ? /TBA/ : /va fi anunțată/);
      assert.equal(isOngoingEvent(event, new Date("2026-10-15T12:00:00+03:00")), false);
    }
  });

  test(`${locale}: the general ScripticX competition is grouped in November`, () => {
    const event = getEvents(locale).find(({ id }) => id === "scripticx-competition-november-2026");

    assert.ok(event);
    assert.equal(getEventMonthKey(event.startAt), "2026-11");
    assert.match(event.dateLabel, locale === "en" ? /November/ : /Noiembrie/);
    assert.ok(isUpcomingEvent(event, new Date("2026-11-15T12:00:00+02:00")));
    assert.equal(isOngoingEvent(event, new Date("2026-11-15T12:00:00+02:00")), false);
    assert.equal(isUpcomingEvent(event, new Date("2026-12-01T00:00:00+02:00")), false);
  });
}

test("a month-TBA event stays upcoming throughout October, then moves to past", () => {
  const event = getEvents("en").find(({ id }) => id === "hacktoberfest-mlh-2026");
  assert.ok(isUpcomingEvent(event, new Date("2026-10-01T12:00:00+03:00")));
  assert.ok(isUpcomingEvent(event, new Date("2026-10-31T23:59:00+02:00")));
  assert.equal(isOngoingEvent(event, new Date("2026-10-15T12:00:00+03:00")), false);
  assert.equal(isUpcomingEvent(event, new Date("2026-11-01T00:00:00+02:00")), false);
});

test("Back to School stays upcoming while it is running and moves to past only after it ends", () => {
  const event = getEvents("en").find(({ id }) => id === "scripticx-back-to-school-2026");
  assert.ok(event);

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
