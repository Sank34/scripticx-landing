import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";

import { formatEventDate, getEventMonthKey } from "./event-dates.ts";
import { getEvents, isUpcomingEvent } from "./events-data.ts";

for (const locale of ["en", "ro"]) {
  test(`${locale}: Hacktoberfest has dedicated artwork and an unconfirmed October date`, () => {
    const events = getEvents(locale);
    const event = events.find(({ id }) => id === "hacktoberfest-mlh-2026");
    assert.ok(event);
    assert.equal(events.filter(({ id }) => id === event.id).length, 1);
    assert.equal(event.location, "BJPIBR");
    assert.ok(event.title.includes("MLH"));
    assert.ok(event.audience);
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
}

test("a month-TBA event stays upcoming throughout October, then moves to past", () => {
  const event = getEvents("en").find(({ id }) => id === "hacktoberfest-mlh-2026");
  assert.ok(isUpcomingEvent(event, new Date("2026-10-01T12:00:00+03:00")));
  assert.ok(isUpcomingEvent(event, new Date("2026-10-31T23:59:00+02:00")));
  assert.equal(isUpcomingEvent(event, new Date("2026-11-01T00:00:00+02:00")), false);
});
