import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { test } from "node:test";

import { formatEventDate, formatEventMonth, formatEventYear, getEventMonthKey } from "./event-dates.ts";

test("formats the reported range identically without runtime-dependent separators", () => {
  const event = { startAt: "2026-09-14T09:00:00+03:00", endAt: "2026-09-25T18:00:00+03:00" };
  assert.equal(formatEventDate(event, "en"), "14–25 September 2026");
  assert.equal(formatEventDate(event, "ro"), "14–25 septembrie 2026");
});

test("handles one-day events and preserves a custom TBA label", () => {
  const startAt = "2026-09-14T09:00:00+03:00";
  assert.equal(formatEventDate({ startAt }, "en"), "14 September 2026");
  assert.equal(formatEventDate({ startAt, endAt: "2026-09-14T18:00:00+03:00" }, "ro"), "14 septembrie 2026");
  assert.equal(formatEventDate({ startAt, dateLabel: "October 2026 · Date TBA" }, "en"), "October 2026 · Date TBA");
});

test("keeps both months and years when a range crosses calendar boundaries", () => {
  const monthly = { startAt: "2026-09-30T09:00:00+03:00", endAt: "2026-10-02T18:00:00+03:00" };
  const yearly = { startAt: "2026-12-31T09:00:00+02:00", endAt: "2027-01-02T18:00:00+02:00" };
  assert.equal(formatEventDate(monthly, "en"), "30 September – 2 October 2026");
  assert.equal(formatEventDate(monthly, "ro"), "30 septembrie – 2 octombrie 2026");
  assert.equal(formatEventDate(yearly, "en"), "31 December 2026 – 2 January 2027");
  assert.equal(formatEventDate(yearly, "ro"), "31 decembrie 2026 – 2 ianuarie 2027");
});

test("uses the Bucharest date for labels and month groups, including winter time", () => {
  const autumn = "2026-09-30T22:30:00Z";
  const winter = "2026-12-31T22:30:00Z";
  assert.equal(formatEventDate({ startAt: autumn }, "en"), "1 October 2026");
  assert.equal(getEventMonthKey(autumn), "2026-10");
  assert.equal(formatEventMonth(autumn, "ro"), "Octombrie");
  assert.equal(formatEventYear(winter), "2027");
  assert.equal(getEventMonthKey(winter), "2027-01");
});

test("does not change between server and viewer time zones", () => {
  const moduleUrl = new URL("./event-dates.ts", import.meta.url).href;
  const script = `
    import { formatEventDate, formatEventMonth, getEventMonthKey } from ${JSON.stringify(moduleUrl)};
    const event = { startAt: "2026-09-30T22:30:00Z", endAt: "2026-10-02T15:00:00Z" };
    console.log(JSON.stringify([formatEventDate(event, "en"), formatEventDate(event, "ro"), formatEventMonth(event.startAt, "en"), getEventMonthKey(event.startAt)]));
  `;
  const results = ["UTC", "Europe/Bucharest", "America/Los_Angeles", "Asia/Tokyo"].map((TZ) =>
    execFileSync(process.execPath, ["--experimental-strip-types", "--input-type=module", "-e", script], {
      env: { ...process.env, TZ, NODE_NO_WARNINGS: "1" },
      encoding: "utf8",
    }).trim(),
  );
  assert.equal(new Set(results).size, 1);
  assert.deepEqual(JSON.parse(results[0]), ["1–2 October 2026", "1–2 octombrie 2026", "October", "2026-10"]);
});
