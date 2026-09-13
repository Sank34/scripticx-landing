"use client";

import type { SiteLocale } from "@/config/languages";
import type { ScripticxEvent } from "@/types/events";
import { eventSettings } from "@/config/events";
import { eventsContent } from "@/config/events-content";
import { formatEventDate } from "@/lib/event-dates";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { isOngoingEvent, isUpcomingEvent } from "@/lib/events-data";

export function EventDialog({
  event,
  locale,
  now,
  onOpenChange,
}: {
  event: ScripticxEvent | null;
  locale: SiteLocale;
  now: Date;
  onOpenChange: (open: boolean) => void;
}) {
  const content = eventsContent[locale];
  const [gallerySelection, setGallerySelection] = useState<{
    eventId: string;
    index: number;
  } | null>(null);

  if (!event) return null;

  const upcoming = isUpcomingEvent(event, now);
  const ongoing = isOngoingEvent(event, now);
  const galleryImages = event.gallery?.length
    ? Array.from(
        new Set(
          [event.image, ...event.gallery].filter(
            (image): image is string => Boolean(image),
          ),
        ),
      )
    : [event.modalImage ?? event.image ?? eventSettings.defaultModalImage];
  const galleryIndex = gallerySelection?.eventId === event.id ? gallerySelection.index : 0;
  const showGallery = !upcoming && galleryImages.length > 1;
  const activeImage = galleryImages[galleryIndex] ?? galleryImages[0];
  const updateGalleryIndex = (update: (current: number) => number) => {
    setGallerySelection({ eventId: event.id, index: update(galleryIndex) });
  };

  return (
    <Dialog open={Boolean(event)} onOpenChange={onOpenChange}>
      <DialogContent
        aria-label={content.close}
        className="max-h-[min(92svh,900px)] w-[min(calc(100vw-1.5rem),920px)] gap-0 overflow-y-auto rounded-[18px] p-0 sm:max-w-none"
      >
        <div>
          <div className="relative h-52 overflow-hidden bg-muted sm:h-64">
            <Image
              src={activeImage}
              alt=""
              fill
              sizes="920px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 flex flex-wrap items-center gap-2 sm:left-7">
              <p className="rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                {content.category[event.category]}
              </p>
              {ongoing ? (
                <p className="rounded-full bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-black">
                  {content.ongoing}
                </p>
              ) : null}
            </div>
            {showGallery ? (
              <div className="absolute bottom-4 right-5 flex items-center gap-1.5 sm:right-7">
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  aria-label={`${content.galleryPrevious} (${galleryIndex + 1}/${galleryImages.length})`}
                  onClick={() =>
                    updateGalleryIndex(
                      (current) => (current - 1 + galleryImages.length) % galleryImages.length,
                    )
                  }
                >
                  <ArrowLeft />
                </Button>
                <span className="rounded-md border border-white/20 bg-black/55 px-2.5 py-1.5 font-mono text-[10px] text-white backdrop-blur-md">
                  {galleryIndex + 1}/{galleryImages.length}
                </span>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  aria-label={`${content.galleryNext} (${galleryIndex + 1}/${galleryImages.length})`}
                  onClick={() =>
                    updateGalleryIndex((current) => (current + 1) % galleryImages.length)
                  }
                >
                  <ArrowRight />
                </Button>
              </div>
            ) : null}
          </div>
          <div className="p-5 sm:px-7 sm:py-6">
            <DialogHeader className="pr-8 text-left">
              <DialogTitle className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em]">
                {event.title}
              </DialogTitle>
              <DialogDescription className="max-w-3xl text-sm leading-6">
                {event.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-5 grid gap-px overflow-hidden rounded-[12px] border bg-border sm:grid-cols-3">
              {[
                {
                  icon: CalendarDays,
                  label: content.date,
                  value: formatEventDate(event, locale),
                },
                {
                  icon: MapPin,
                  label: content.location,
                  value: event.location,
                },
                {
                  icon: UsersRound,
                  label: content.audience,
                  value: event.audience,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-background p-3.5">
                    <Icon className="size-4" />
                    <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                      {item.label}
                    </p>
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
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-5"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-emerald-600/30 text-emerald-600">
                      <Check className="size-3" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {upcoming ? (
              event.link.trim() ? (
                <Button size="lg" className="mt-5 w-full" asChild>
                  <a href={event.link} target="_blank" rel="noreferrer">
                    {content.signup}
                    <ArrowRight />
                  </a>
                </Button>
              ) : (
                <Button size="lg" className="mt-5 w-full" disabled>
                  <Clock3 />
                  {content.signupSoon}
                </Button>
              )
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
