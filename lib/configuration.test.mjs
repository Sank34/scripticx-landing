import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import { events, eventSettings } from "../config/events.ts";
import { getSiteLocale, languageSettings } from "../config/languages.ts";
import { blogSettings } from "../config/blog.ts";
import { groupEventsByMonth, getEvents, sortEvents } from "./events-data.ts";

function checkImage(imagePath) {
  assert.ok(
    existsSync(new URL(`../public${imagePath}`, import.meta.url)),
    `Imagine inexistentă: ${imagePath}`,
  );
}

test("event configuration has unique identifiers, valid intervals, translations and existing images", () => {
  const identifiers = new Set();
  for (const event of events) {
    assert.ok(
      event.id && !identifiers.has(event.id),
      `ID duplicat sau gol: ${event.id}`,
    );
    identifiers.add(event.id);
    const startTime = Date.parse(event.startAt);
    assert.ok(Number.isFinite(startTime), `startAt invalid: ${event.id}`);
    if (event.endAt)
      assert.ok(
        Date.parse(event.endAt) >= startTime,
        `endAt înainte de startAt: ${event.id}`,
      );
    for (const locale of languageSettings.supportedLocales) {
      const content = event.content[locale];
      for (const field of [
        "title",
        "eyebrow",
        "summary",
        "description",
        "location",
        "audience",
      ]) {
        assert.ok(
          content[field].trim(),
          `${event.id}: lipsește ${field} în ${locale}`,
        );
      }
      assert.ok(content.highlights.every((highlight) => highlight.trim()));
    }
    for (const image of [
      event.image,
      event.modalImage,
      ...(event.gallery ?? []),
    ]) {
      if (image) checkImage(image);
    }
    if (event.link)
      assert.ok(["https:", "http:"].includes(new URL(event.link).protocol));
  }
  checkImage(eventSettings.defaultImage);
  checkImage(eventSettings.defaultModalImage);
  assert.doesNotThrow(
    () => new Intl.DateTimeFormat("en", { timeZone: eventSettings.timeZone }),
  );
});

test("sorting and grouping preserve all events without changing the original array", () => {
  const original = getEvents("ro");
  const identifiers = original.map((event) => event.id);
  const sorted = sortEvents(original, "ascending");
  const groups = groupEventsByMonth(sorted);
  assert.deepEqual(groups.flat(), sorted);
  assert.deepEqual(
    original.map((event) => event.id),
    identifiers,
  );
  assert.deepEqual(groupEventsByMonth([]), []);
});

test("unsupported locale cookies use the configured default", () => {
  assert.equal(getSiteLocale("ro"), "ro");
  assert.equal(getSiteLocale("en"), "en");
  for (const value of [undefined, "", "fr", "../../invalid"]) {
    assert.equal(getSiteLocale(value), languageSettings.defaultLocale);
  }
});

test("numeric settings accept usable positive integers", () => {
  for (const value of [
    ...Object.values(blogSettings),
    eventSettings.refreshIntervalMilliseconds,
    languageSettings.cookieMaxAgeSeconds,
  ]) {
    assert.ok(Number.isSafeInteger(value) && value > 0);
  }
});
