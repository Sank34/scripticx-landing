"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { ActivityDetail } from "@/lib/division-details-content";

export function EducationActivities({
  items,
  openLabel,
  galleryLabel,
}: {
  items: ActivityDetail[];
  openLabel: string;
  galleryLabel: string;
}) {
  const [selected, setSelected] = useState<ActivityDetail | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  function openActivity(activity: ActivityDetail) {
    setSelected(activity);
    setImageIndex(0);
  }

  function moveImage(direction: number) {
    if (!selected) return;
    setImageIndex((current) => (current + direction + selected.gallery.length) % selected.gallery.length);
  }

  return (
    <>
      <div className="grid border-l border-t md:grid-cols-3">
        {items.map((activity, index) => (
          <button
            key={activity.id}
            type="button"
            onClick={() => openActivity(activity)}
            className="group relative min-h-[31rem] overflow-hidden border-b border-r bg-black text-left text-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white"
          >
            <Image src={activity.cover} alt="" fill sizes="(max-width: 768px) 100vw, 34vw" className="object-cover opacity-78 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-88" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 text-xs text-white/58">
                <span className="font-mono">0{index + 1}</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-white/75">{openLabel}<ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </div>
              <h3 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.035em]">{activity.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/68">{activity.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {activity.meta.map((meta) => <span key={meta} className="rounded-full border border-white/16 bg-black/25 px-3 py-1.5 text-xs text-white/72 backdrop-blur-sm">{meta}</span>)}
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        {selected ? (
          <DialogContent className="h-[min(90svh,780px)] w-[min(calc(100vw-2rem),1120px)] max-w-none overflow-hidden p-0 sm:max-w-none">
            <div className="grid h-full min-h-0 lg:grid-cols-[1.4fr_0.8fr]">
              <div className="relative min-h-[20rem] overflow-hidden bg-black lg:min-h-0">
                <Image src={selected.gallery[imageIndex]} alt={`${selected.title} — ${galleryLabel} ${imageIndex + 1}`} fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" priority />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent p-5 pt-20">
                  <span className="rounded-full bg-black/50 px-3 py-1.5 font-mono text-xs text-white/72 backdrop-blur">{String(imageIndex + 1).padStart(2, "0")} / {String(selected.gallery.length).padStart(2, "0")}</span>
                  <div className="flex gap-2">
                    <Button size="icon" variant="secondary" onClick={() => moveImage(-1)} aria-label="Previous image"><ChevronLeft /></Button>
                    <Button size="icon" variant="secondary" onClick={() => moveImage(1)} aria-label="Next image"><ChevronRight /></Button>
                  </div>
                </div>
              </div>
              <div className="min-h-0 overflow-y-auto p-6 sm:p-8 lg:p-10">
                <DialogHeader>
                  <p className="font-mono text-xs text-muted-foreground">{galleryLabel}</p>
                  <DialogTitle className="mt-2 pr-10 text-3xl font-semibold leading-tight tracking-[-0.035em]">{selected.title}</DialogTitle>
                  <DialogDescription className="mt-3 text-base leading-7">{selected.longDescription}</DialogDescription>
                </DialogHeader>
                <div className="mt-8 border-t pt-6">
                  <p className="text-sm font-medium">{openLabel}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.meta.map((meta) => <span key={meta} className="rounded-full border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground">{meta}</span>)}
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-2">
                  {selected.gallery.slice(0, 3).map((image, index) => (
                    <button key={image} type="button" onClick={() => setImageIndex(index)} className="relative aspect-square overflow-hidden rounded-[10px] border focus-visible:outline-2 focus-visible:outline-offset-2">
                      <Image src={image} alt="" fill sizes="120px" className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}
