"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventCard } from "./EventCard";
import { EventDialog } from "./EventDialog";
import { links } from "@/config/links";
import { eventSettings } from "@/config/events";
import { eventsContent } from "@/config/events-content";
import type { SiteLocale } from "@/config/languages";
import type { ScripticxEvent } from "@/types/events";
import {
  formatEventMonth,
  formatEventYear,
  getEventMonthKey,
} from "@/lib/event-dates";
import {
  groupEventsByMonth,
  isUpcomingEvent,
  sortEvents,
} from "@/lib/events-data";

type EventTab = "upcoming" | "past";

export function EventsExplorer({
  events,
  locale,
  initialDateTime,
}: {
  events: ScripticxEvent[];
  locale: SiteLocale;
  initialDateTime: string;
}) {
  const content = eventsContent[locale];
  const [now, setNow] = useState(() => new Date(initialDateTime));
  const [activeTab, setActiveTab] = useState<EventTab>("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<ScripticxEvent | null>(
    null,
  );

  useEffect(() => {
    const timer = window.setInterval(
      () => setNow(new Date()),
      eventSettings.refreshIntervalMilliseconds,
    );
    return () => window.clearInterval(timer);
  }, []);

  const categorizedEvents = useMemo(() => {
    const upcoming = events.filter((event) => isUpcomingEvent(event, now));
    const past = events.filter((event) => !isUpcomingEvent(event, now));
    return {
      upcoming: sortEvents(upcoming, "ascending"),
      past: sortEvents(past, "descending"),
    };
  }, [events, now]);

  const visibleEvents = categorizedEvents[activeTab];
  const groups = groupEventsByMonth(visibleEvents);

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          if (value === "upcoming" || value === "past") setActiveTab(value);
        }}
      >
        <TabsList className="h-12 w-full max-w-md rounded-[12px] border bg-muted/45 p-1 sm:w-auto">
          <TabsTrigger
            value="upcoming"
            className="h-full rounded-[9px] px-5 data-active:bg-foreground data-active:text-background!"
          >
            {content.upcoming}
            <span className="ml-1 rounded-full bg-current/10 px-1.5 py-0.5 font-mono text-[10px]">
              {categorizedEvents.upcoming.length}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="past"
            className="h-full rounded-[9px] px-5 data-active:bg-foreground data-active:text-background!"
          >
            {content.past}
            <span className="ml-1 rounded-full bg-current/10 px-1.5 py-0.5 font-mono text-[10px]">
              {categorizedEvents.past.length}
            </span>
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
                  const monthStart = group[0].startAt;
                  return (
                    <Fragment key={getEventMonthKey(monthStart)}>
                      {groupIndex > 0 ? <hr className="border-border" /> : null}
                      <section className="grid gap-7 py-10 first:pt-0 lg:grid-cols-[11rem_1fr] lg:gap-12">
                        <header>
                          <p className="text-lg font-semibold">
                            {formatEventMonth(monthStart, locale)}
                          </p>
                          <p className="mt-1 font-mono text-xs text-muted-foreground">
                            {formatEventYear(monthStart)}
                          </p>
                        </header>
                        <div className="grid gap-4">
                          {group.map((event, index) => (
                            <EventCard
                              key={event.id}
                              event={event}
                              locale={locale}
                              index={index}
                              now={now}
                              onSelect={setSelectedEvent}
                            />
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
                  <h2 className="mt-10 text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                    {content.emptyTitle}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-white/55 sm:text-base">
                    {content.emptyDescription}
                  </p>
                  <Button variant="secondary" className="mt-7" asChild>
                    <a href={links.contact}>
                      {content.emptyAction}
                      <ArrowRight />
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <EventDialog
        event={selectedEvent}
        locale={locale}
        now={now}
        onOpenChange={(open) => !open && setSelectedEvent(null)}
      />
    </>
  );
}
