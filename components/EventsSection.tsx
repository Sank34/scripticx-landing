"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CalendarDays, MapPin, UsersRound } from "lucide-react";
import { type WheelEvent, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type EventItem = {
  id: string;
  cover: string;
  gallery: string[];
  tags: string[];
};

const events: EventItem[] = [
  {
    id: "programmingWorkshop",
    cover: "/events/workshops/programming-1-3-july-26/IMG_1103.jpg",
    gallery: [
      "/events/workshops/programming-1-3-july-26/IMG_1029.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1003.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1047.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1060.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1094.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1103.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1107.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1115.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1119.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1126.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1128.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1131.jpg",
      "/events/workshops/programming-1-3-july-26/IMG_1137.jpg",
    ],
    tags: ["workshop", "programming", "miniscript", "community"],
  },
  
];

function EventCard({
  event,
  onOpen,
}: {
  event: EventItem;
  onOpen: (event: EventItem) => void;
}) {
  const t = useTranslations("Events");
  const [first, second, third] = event.gallery;

  return (
    <button
      type="button"
      onClick={() => onOpen(event)}
      className="group/card relative overflow-hidden rounded-[2rem] border bg-white p-3 text-left shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(22,101,52,0.18)]"
    >
      <div className="relative h-[320px] overflow-hidden rounded-[1.55rem] bg-green-50 sm:h-[380px]">
        <Image
          src={event.cover}
          alt={t(`items.${event.id}.title`)}
          fill
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover transition duration-700 group-hover/card:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {event.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              className="border-white/35 bg-white/85 text-green-950 backdrop-blur"
              variant="outline"
            >
              {t(`tags.${tag}`)}
            </Badge>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-sm font-medium text-white/80">
            {t(`items.${event.id}.eyebrow`)}
          </p>
          <h3 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t(`items.${event.id}.title`)}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/82 sm:text-base">
            {t(`items.${event.id}.description`)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_0.8fr] gap-3 px-1 pt-3">
        {[first, second, third].map((image, index) => (
          <div
            key={image}
            className={cn(
              "relative overflow-hidden rounded-2xl border bg-muted",
              index === 0 ? "h-28" : "h-28",
              index === 0 && "row-span-2 h-full min-h-56"
            )}
          >
            <Image
              src={image}
              alt={t(`items.${event.id}.galleryAlt`, { index: index + 1 })}
              fill
              sizes="(min-width: 1024px) 360px, 50vw"
              className="object-cover transition duration-500 group-hover/card:scale-105"
            />
          </div>
        ))}
      </div>
    </button>
  );
}

function EventDialog({
  event,
  onOpenChange,
}: {
  event: EventItem | null;
  onOpenChange: (open: boolean) => void;
}) {
  const t = useTranslations("Events");
  const [activeImage, setActiveImage] = useState(event?.cover ?? "");

  if (!event) return null;

  const selectedImage = activeImage || event.cover;

  function handleGalleryWheel(event: WheelEvent<HTMLDivElement>) {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    event.preventDefault();
    event.currentTarget.scrollLeft += event.deltaY;
  }

  return (
    <Dialog
      open={Boolean(event)}
      onOpenChange={(open) => {
        if (open) {
          setActiveImage(event.cover);
        }
        onOpenChange(open);
      }}
    >
      <DialogContent className="h-[92vh] max-h-[760px] overflow-hidden rounded-[2rem] p-0 sm:max-w-5xl">
        <div className="grid h-full min-h-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative h-[320px] bg-black lg:h-full">
            <Image
              src={selectedImage}
              alt={t(`items.${event.id}.title`)}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div
                onWheel={handleGalleryWheel}
                className="flex overscroll-x-contain scroll-smooth gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {event.gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={cn(
                      "relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border transition",
                      selectedImage === image
                        ? "border-white ring-2 ring-white/60"
                        : "border-white/25 opacity-80 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={image}
                      alt={t(`items.${event.id}.galleryAlt`, {
                        index: index + 1,
                      })}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="min-h-0 overflow-y-auto overscroll-contain p-6 [scrollbar-width:none] sm:p-8 [&::-webkit-scrollbar]:hidden">
            <DialogHeader>
              <div className="mb-3 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-green-100 text-green-900"
                  >
                    {t(`tags.${tag}`)}
                  </Badge>
                ))}
              </div>
              <DialogTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t(`items.${event.id}.title`)}
              </DialogTitle>
              <DialogDescription className="text-base leading-7">
                {t(`items.${event.id}.longDescription`)}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-7 grid gap-3">
              <div className="flex gap-3 rounded-2xl border bg-muted/40 p-4">
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-green-700" />
                <div>
                  <p className="text-sm font-medium">{t("details.date")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t(`items.${event.id}.date`)}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border bg-muted/40 p-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-green-700" />
                <div>
                  <p className="text-sm font-medium">{t("details.location")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t(`items.${event.id}.location`)}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border bg-muted/40 p-4">
                <UsersRound className="mt-0.5 size-5 shrink-0 text-green-700" />
                <div>
                  <p className="text-sm font-medium">{t("details.audience")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t(`items.${event.id}.audience`)}
                  </p>
                </div>
              </div>
            </div>

            <Button
              type="button"
              className="mt-7 w-full cursor-not-allowed rounded-full bg-green-100 text-green-950 hover:bg-green-100"
              disabled
            >
              {t("suggestEvent")}
              <span className="ml-2 rounded-full bg-white/80 px-2 py-0.5 text-xs text-green-800">
                {t("comingSoon")}
              </span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function EventsSection() {
  const t = useTranslations("Events");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="text-sm font-medium text-green-700">{t("eyebrow")}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onOpen={setSelectedEvent} />
          ))}

          <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-br from-green-100 via-white to-emerald-50 p-8 shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(22,101,52,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,101,52,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
            <div className="relative">
              <Badge className="bg-white text-green-900" variant="outline">
                {t("sideCard.badge")}
              </Badge>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {t("sideCard.title")}
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                {t("sideCard.description")}
              </p>
              <div className="mt-8 grid gap-3">
                {["learn", "build", "share"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border bg-white/80 p-4 text-sm font-medium shadow-sm"
                  >
                    {t(`sideCard.items.${item}`)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <EventDialog
        event={selectedEvent}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedEvent(null);
          }
        }}
      />
    </section>
  );
}
