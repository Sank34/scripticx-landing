"use client";

import Image from "next/image";
import { useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { ActivityDetail } from "@/lib/division-details-content";

export function EducationActivities({
  items,
}: {
  items: ActivityDetail[];
}) {
  const [selected, setSelected] = useState<ActivityDetail | null>(null);

  function openActivity(activity: ActivityDetail) {
    setSelected(activity);
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
                <Image src={selected.cover} alt={selected.title} fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" priority />
              </div>
              <div className="min-h-0 overflow-y-auto p-6 sm:p-8 lg:p-10">
                <DialogHeader>
                  <DialogTitle className="mt-2 pr-10 text-3xl font-semibold leading-tight tracking-[-0.035em]">{selected.title}</DialogTitle>
                  <DialogDescription className="mt-3 text-base leading-7">{selected.longDescription}</DialogDescription>
                </DialogHeader>
                <div className="mt-8 border-t pt-6">
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.meta.map((meta) => <span key={meta} className="rounded-full border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground">{meta}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}
