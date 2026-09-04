import type { MarketingLocale } from "@/lib/marketing-content";

const months = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ro: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"],
} as const;

// Event dates belong to the organiser's calendar, not the viewer's time zone.
const calendarFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Bucharest",
  calendar: "gregory",
  numberingSystem: "latn",
  day: "numeric",
  month: "numeric",
  year: "numeric",
});

function calendarDate(iso: string) {
  const parts = calendarFormatter.formatToParts(new Date(iso));
  const number = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);

  return { day: number("day"), month: number("month"), year: number("year") };
}

export function getEventMonthKey(iso: string) {
  const { year, month } = calendarDate(iso);
  return `${year}-${String(month).padStart(2, "0")}`;
}

export function formatEventMonth(iso: string, locale: MarketingLocale) {
  const month = months[locale][calendarDate(iso).month - 1];
  return month.charAt(0).toUpperCase() + month.slice(1);
}

export function formatEventYear(iso: string) {
  return String(calendarDate(iso).year);
}

export function formatEventDate(
  event: { startAt: string; endAt?: string; dateLabel?: string },
  locale: MarketingLocale,
) {
  if (event.dateLabel) return event.dateLabel;

  const start = calendarDate(event.startAt);
  const end = event.endAt ? calendarDate(event.endAt) : start;
  const startMonth = months[locale][start.month - 1];
  const endMonth = months[locale][end.month - 1];
  const startLabel = `${start.day} ${startMonth} ${start.year}`;

  // Own the punctuation: Intl.formatRange's separators differ between
  // Node and browsers/ICU versions and can cause a hydration mismatch.
  if (start.year === end.year && start.month === end.month) {
    return start.day === end.day
      ? startLabel
      : `${start.day}–${end.day} ${startMonth} ${start.year}`;
  }

  if (start.year === end.year) {
    return `${start.day} ${startMonth} – ${end.day} ${endMonth} ${start.year}`;
  }

  return `${startLabel} – ${end.day} ${endMonth} ${end.year}`;
}
