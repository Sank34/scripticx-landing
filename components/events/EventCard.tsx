"use client";

import type { SiteLocale } from "@/config/languages";
import type { ScripticxEvent } from "@/types/events";
import { eventSettings } from "@/config/events";
import { eventsContent } from "@/config/events-content";
import { formatEventDate, formatEventMonth } from "@/lib/event-dates";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, UsersRound } from "lucide-react";
import { isOngoingEvent } from "@/lib/events-data";

function EventArtwork({
  event,
  priority = false,
}: {
  event: ScripticxEvent;
  priority?: boolean;
}) {
  const usesDefaultImage = !event.image;

  return (
    <Image
      src={event.image ?? eventSettings.defaultImage}
      alt=""
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, 42vw"
      className={
        usesDefaultImage
          ? "scale-[1.08] bg-[#f7f7f5] object-contain"
          : event.imageFit === "contain"
            ? "object-contain"
            : "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      }
    />
  );
}

export function EventCard({
  event,
  locale,
  index,
  now,
  onSelect,
}: {
  event: ScripticxEvent;
  locale: SiteLocale;
  index: number;
  now: Date;
  onSelect: (event: ScripticxEvent) => void;
}) {
  const content = eventsContent[locale];
  const ongoing = isOngoingEvent(event, now);

  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{
        duration: 0.42,
        delay: index * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect(event)}
      aria-label={`${content.details}: ${event.title}`}
      className="group grid w-full overflow-hidden rounded-[16px] border bg-background text-left transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_18px_50px_rgba(15,23,42,.08)] sm:grid-cols-[13rem_1fr]"
    >
      <div
        className="relative min-h-[13rem] overflow-hidden bg-muted sm:h-60 sm:min-h-0"
        style={{ backgroundColor: event.imageBackground }}
      >
        <EventArtwork event={event} priority={index === 0} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-[10px] border border-white/20 bg-black/55 px-3.5 py-2.5 text-white backdrop-blur-md">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/75">
            {formatEventMonth(event.startAt, locale)}
          </p>
        </div>
      </div>
      <div className="flex min-h-[15rem] flex-col p-5 sm:h-60 sm:min-h-0">
        <div className="flex items-center justify-between gap-5">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className="rounded-full border px-2.5 py-1 text-[11px] text-muted-foreground">
              {content.category[event.category]}
            </span>
            {ongoing ? (
              <span className="rounded-full bg-foreground px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-background">
                {content.ongoing}
              </span>
            ) : null}
          </div>
          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </div>
        <div className="mt-auto pt-5">
          <p className="text-xs font-medium text-muted-foreground">
            {formatEventDate(event, locale)}
          </p>
          <h3 className="mt-2 text-balance text-2xl font-semibold tracking-[-0.03em]">
            {event.title}
          </h3>
          <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-5 text-muted-foreground">
            {event.summary}
          </p>
          <div className="mt-4 flex min-w-0 gap-5 border-t pt-3 text-xs text-muted-foreground">
            <span className="inline-flex min-w-0 items-center gap-1.5 truncate">
              <MapPin className="size-3.5 shrink-0" />
              {event.location}
            </span>
            <span className="inline-flex min-w-0 items-center gap-1.5 truncate">
              <UsersRound className="size-3.5 shrink-0" />
              {event.audience}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
