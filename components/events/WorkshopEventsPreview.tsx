import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { DEFAULT_EVENT_IMAGE, getEvents, sortEvents } from "@/lib/events-data";
import type { MarketingLocale } from "@/lib/marketing-content";

const copy = {
  en: {
    eyebrow: "From the events calendar",
    title: "Workshops we have shared so far.",
    description: "A small selection from our practical activities. Open the events page for the full calendar and event details.",
    action: "See all events",
  },
  ro: {
    eyebrow: "Din calendarul de evenimente",
    title: "Workshop-urile pe care le-am trăit împreună.",
    description: "O selecție scurtă din activitățile noastre practice. În pagina de evenimente găsești calendarul complet și toate detaliile.",
    action: "Vezi toate evenimentele",
  },
} as const;

function formatDate(startAt: string, endAt: string | undefined, locale: MarketingLocale) {
  const formatter = new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const start = new Date(startAt);
  return endAt ? formatter.formatRange(start, new Date(endAt)) : formatter.format(start);
}

export function WorkshopEventsPreview({ locale }: { locale: MarketingLocale }) {
  const content = copy[locale];
  const events = sortEvents(
    getEvents(locale).filter((event) => event.category === "workshop"),
    "descending",
  ).slice(0, 3);

  return (
    <section className="border-b bg-muted/20 py-24 sm:py-32">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <Reveal className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{content.description}</p>
          </div>
          <Button variant="outline" asChild><Link href="/events">{content.action}<ArrowRight /></Link></Button>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {events.map((event, index) => (
            <Reveal key={event.id} delay={index * 0.06} className="h-full">
              <Link href="/events" className="group flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[16px] border bg-background transition-[transform,border-color,box-shadow] hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_18px_48px_rgba(15,23,42,.07)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={event.image ?? DEFAULT_EVENT_IMAGE}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className={event.image
                      ? "object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                      : "bg-[#f7f7f5] object-contain transition-transform duration-700 group-hover:scale-[1.025]"}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium text-muted-foreground">{event.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{event.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{event.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t pt-5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5" />{formatDate(event.startAt, event.endAt, locale)}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" />{event.location}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
