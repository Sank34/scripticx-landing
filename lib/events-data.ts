import { getEventMonthKey } from "./event-dates.ts";
import { events } from "../config/events.ts";
import type { SiteLocale } from "../config/languages.ts";
import type { ScripticxEvent } from "../types/events.ts";

export function getEvents(locale: SiteLocale): ScripticxEvent[] {
  return events.map(({ content, ...event }) => ({
    ...event,
    ...content[locale],
  }));
}

export function isUpcomingEvent(event: ScripticxEvent, now: Date) {
  return new Date(event.endAt ?? event.startAt).getTime() >= now.getTime();
}

export function isOngoingEvent(event: ScripticxEvent, now: Date) {
  // A bounded, confirmed interval is required. Month-level TBA placeholders
  // stay upcoming, but must not look like an event that is currently running.
  if (!event.endAt || event.dateLabel) return false;

  const currentTime = now.getTime();
  const startTime = new Date(event.startAt).getTime();
  const endTime = new Date(event.endAt).getTime();

  return currentTime >= startTime && currentTime <= endTime;
}

export function sortEvents(
  events: ScripticxEvent[],
  direction: "ascending" | "descending",
) {
  return [...events].sort((first, second) => {
    const difference =
      new Date(first.startAt).getTime() - new Date(second.startAt).getTime();
    return direction === "ascending" ? difference : -difference;
  });
}

export function groupEventsByMonth(events: ScripticxEvent[]) {
  const groups = new Map<string, ScripticxEvent[]>();

  for (const event of events) {
    const key = getEventMonthKey(event.startAt);
    groups.set(key, [...(groups.get(key) ?? []), event]);
  }

  return [...groups.values()];
}
