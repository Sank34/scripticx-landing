"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { Fragment, useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DEFAULT_EVENT_IMAGE,
  DEFAULT_EVENT_MODAL_IMAGE,
  isUpcomingEvent,
  sortEvents,
  type ScripticxEvent,
} from "@/lib/events-data";
import type { MarketingLocale } from "@/lib/marketing-content";

type EventTab = "upcoming" | "past";

const copy = {
  en: {
    upcoming: "Upcoming",
    past: "Past events",
    emptyTitle: "The next date is still taking shape.",
    emptyDescription:
      "We are preparing new activities with our partners. Check back soon or tell us what kind of workshop you would like to join.",
    emptyAction: "Suggest an activity",
    date: "Date",
    location: "Location",
    audience: "Who it’s for",
    details: "Open event details",
    highlights: "What happened",
    upcomingHighlights: "What you’ll explore",
    eventEnded: "This event has ended",
    signup: "Sign up for this event",
    close: "Close event",
    category: {
      workshop: "Workshop",
      course: "Course",
      activity: "Activity",
      competition: "Competition",
    },
  },
  ro: {
    upcoming: "Urmează",
    past: "Evenimente trecute",
    emptyTitle: "Următoarea dată încă prinde contur.",
    emptyDescription:
      "Pregătim activități noi împreună cu partenerii noștri. Revino curând sau spune-ne ce fel de workshop ți-ar plăcea să găsești aici.",
    emptyAction: "Propune o activitate",
    date: "Data",
    location: "Locația",
    audience: "Cui se adresează",
    details: "Deschide detaliile evenimentului",
    highlights: "Ce am făcut",
    upcomingHighlights: "Ce vom face",
    eventEnded: "Acest eveniment s-a încheiat",
    signup: "Înscrie-te la acest eveniment",
    close: "Închide evenimentul",
    category: {
      workshop: "Workshop",
      course: "Curs",
      activity: "Activitate",
      competition: "Competiție",
    },
  },
} as const;

function capitalize(value: string) {
  return value.charAt(0).toLocaleUpperCase() + value.slice(1);
}

function formatMonth(date: Date, locale: MarketingLocale) {
  return capitalize(
    new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", {
      month: "long",
    }).format(date),
  );
}

function formatYear(date: Date, locale: MarketingLocale) {
  return new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", {
    year: "numeric",
  }).format(date);
}

function formatEventDate(event: ScripticxEvent, locale: MarketingLocale) {
  if (event.dateLabel) return event.dateLabel;

  const formatter = new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const start = new Date(event.startAt);
  const end = event.endAt ? new Date(event.endAt) : null;

  if (!end) return formatter.format(start);
  return formatter.formatRange(start, end);
}

function groupByMonth(events: ScripticxEvent[]) {
  const groups = new Map<string, ScripticxEvent[]>();

  for (const event of events) {
    const date = new Date(event.startAt);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    groups.set(key, [...(groups.get(key) ?? []), event]);
  }

  return [...groups.values()];
}

function EventArtwork({ event, priority = false }: { event: ScripticxEvent; priority?: boolean }) {
  const usesDefaultImage = !event.image;

  return (
    <Image
      src={event.image ?? DEFAULT_EVENT_IMAGE}
      alt=""
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, 42vw"
      className={usesDefaultImage
        ? "scale-[1.08] bg-[#f7f7f5] object-contain"
        : "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"}
    />
  );
}

function EventCard({
  event,
  locale,
  index,
  onSelect,
}: {
  event: ScripticxEvent;
  locale: MarketingLocale;
  index: number;
  onSelect: (event: ScripticxEvent) => void;
}) {
  const content = copy[locale];
  const date = new Date(event.startAt);

  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.42, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onSelect(event)}
      aria-label={`${content.details}: ${event.title}`}
      className="group grid w-full overflow-hidden rounded-[16px] border bg-background text-left transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_18px_50px_rgba(15,23,42,.08)] sm:grid-cols-[13rem_1fr]"
    >
      <div className="relative min-h-[13rem] overflow-hidden bg-muted sm:h-60 sm:min-h-0">
        <EventArtwork event={event} priority={index === 0} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-[10px] border border-white/20 bg-black/55 px-3.5 py-2.5 text-white backdrop-blur-md">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/75">
            {formatMonth(date, locale)}
          </p>
        </div>
      </div>
      <div className="flex min-h-[15rem] flex-col p-5 sm:h-60 sm:min-h-0">
        <div className="flex items-center justify-between gap-5">
          <span className="rounded-full border px-2.5 py-1 text-[11px] text-muted-foreground">
            {content.category[event.category]}
          </span>
          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </div>
        <div className="mt-auto pt-5">
          <p className="text-xs font-medium text-muted-foreground">{formatEventDate(event, locale)}</p>
          <h3 className="mt-2 text-balance text-2xl font-semibold tracking-[-0.03em]">{event.title}</h3>
          <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-5 text-muted-foreground">{event.summary}</p>
          <div className="mt-4 flex min-w-0 gap-5 border-t pt-3 text-xs text-muted-foreground">
            <span className="inline-flex min-w-0 items-center gap-1.5 truncate"><MapPin className="size-3.5 shrink-0" />{event.location}</span>
            <span className="inline-flex min-w-0 items-center gap-1.5 truncate"><UsersRound className="size-3.5 shrink-0" />{event.audience}</span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function EventDialog({
  event,
  locale,
  now,
  onOpenChange,
}: {
  event: ScripticxEvent | null;
  locale: MarketingLocale;
  now: Date;
  onOpenChange: (open: boolean) => void;
}) {
  const content = copy[locale];
  if (!event) return null;

  const upcoming = isUpcomingEvent(event, now);

  return (
    <Dialog open={Boolean(event)} onOpenChange={onOpenChange}>
      <DialogContent
        aria-label={content.close}
        className="max-h-[min(92svh,900px)] w-[min(calc(100vw-1.5rem),920px)] gap-0 overflow-y-auto rounded-[18px] p-0 sm:max-w-none"
      >
        <div>
          <div className="relative h-32 overflow-hidden bg-muted sm:h-40">
            <Image
              src={event.image ?? DEFAULT_EVENT_MODAL_IMAGE}
              alt=""
              fill
              sizes="920px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:left-7">
              {content.category[event.category]}
            </p>
          </div>
          <div className="p-5 sm:px-7 sm:py-6">
            <DialogHeader className="pr-8 text-left">
              <DialogTitle className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em]">{event.title}</DialogTitle>
              <DialogDescription className="max-w-3xl text-sm leading-6">{event.description}</DialogDescription>
            </DialogHeader>

          <div className="mt-5 grid gap-px overflow-hidden rounded-[12px] border bg-border sm:grid-cols-3">
            {[
              { icon: CalendarDays, label: content.date, value: formatEventDate(event, locale) },
              { icon: MapPin, label: content.location, value: event.location },
              { icon: UsersRound, label: content.audience, value: event.audience },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-background p-3.5">
                  <Icon className="size-4" />
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">{item.label}</p>
                  <p className="mt-1 text-sm leading-5">{item.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">
              {upcoming ? content.upcomingHighlights : content.highlights}
            </p>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-3">
              {event.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-sm leading-5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-emerald-600/30 text-emerald-600"><Check className="size-3" /></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

            {upcoming ? (
              <Button size="lg" className="mt-5 w-full" asChild>
                <a href={event.link} target="_blank" rel="noreferrer">
                  {content.signup}
                  <ArrowRight />
                </a>
              </Button>
            ) : (
              <div className="mt-5 flex items-center gap-2 rounded-[12px] border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                <Clock3 className="size-4" />
                {content.eventEnded}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function EventsExplorer({
  events,
  locale,
  nowIso,
}: {
  events: ScripticxEvent[];
  locale: MarketingLocale;
  nowIso: string;
}) {
  const content = copy[locale];
  const [now, setNow] = useState(() => new Date(nowIso));
  const [activeTab, setActiveTab] = useState<EventTab>("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<ScripticxEvent | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const categorized = useMemo(() => {
    const upcoming = events.filter((event) => isUpcomingEvent(event, now));
    const past = events.filter((event) => !isUpcomingEvent(event, now));
    return {
      upcoming: sortEvents(upcoming, "ascending"),
      past: sortEvents(past, "descending"),
    };
  }, [events, now]);

  const visibleEvents = categorized[activeTab];
  const groups = groupByMonth(visibleEvents);

  return (
    <>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as EventTab)}>
        <TabsList className="h-12 w-full max-w-md rounded-[12px] border bg-muted/45 p-1 sm:w-auto">
          <TabsTrigger value="upcoming" className="h-full rounded-[9px] px-5 data-active:bg-foreground data-active:text-background!">
            {content.upcoming}
            <span className="ml-1 rounded-full bg-current/10 px-1.5 py-0.5 font-mono text-[10px]">{categorized.upcoming.length}</span>
          </TabsTrigger>
          <TabsTrigger value="past" className="h-full rounded-[9px] px-5 data-active:bg-foreground data-active:text-background!">
            {content.past}
            <span className="ml-1 rounded-full bg-current/10 px-1.5 py-0.5 font-mono text-[10px]">{categorized.past.length}</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-12 min-h-[28rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {groups.length ? (
              <div>
                {groups.map((group, groupIndex) => {
                  const monthDate = new Date(group[0].startAt);
                  return (
                    <Fragment key={`${monthDate.getFullYear()}-${monthDate.getMonth()}`}>
                      {groupIndex > 0 ? <hr className="border-border" /> : null}
                      <section className="grid gap-7 py-10 first:pt-0 lg:grid-cols-[11rem_1fr] lg:gap-12">
                        <header>
                          <p className="text-lg font-semibold">{formatMonth(monthDate, locale)}</p>
                          <p className="mt-1 font-mono text-xs text-muted-foreground">{formatYear(monthDate, locale)}</p>
                        </header>
                        <div className="grid gap-4">
                          {group.map((event, index) => (
                            <EventCard key={event.id} event={event} locale={locale} index={index} onSelect={setSelectedEvent} />
                          ))}
                        </div>
                      </section>
                    </Fragment>
                  );
                })}
              </div>
            ) : (
              <div className="relative flex min-h-[28rem] items-end overflow-hidden rounded-[18px] border bg-[#0d0e10] p-7 text-white sm:p-10">
                <div className="sx-story-grid absolute inset-0 opacity-35" />
                <div className="absolute right-10 top-10 size-24 rounded-full border border-white/10" />
                <div className="relative max-w-xl">
                  <CalendarDays className="size-6 text-emerald-200" />
                  <h2 className="mt-10 text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{content.emptyTitle}</h2>
                  <p className="mt-4 text-sm leading-6 text-white/55 sm:text-base">{content.emptyDescription}</p>
                  <Button variant="secondary" className="mt-7" asChild>
                    <a href="https://platform.scripticx.org/contact">{content.emptyAction}<ArrowRight /></a>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <EventDialog event={selectedEvent} locale={locale} now={now} onOpenChange={(open) => !open && setSelectedEvent(null)} />
    </>
  );
}
