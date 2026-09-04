"use client";

import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Check, Clock3, Code2, UsersRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { EducationGroupsContent, EducationTrackKey } from "@/lib/division-details-content";

const trackIcons = {
  informatics: Code2,
  machineLearning: BrainCircuit,
} satisfies Record<EducationTrackKey, typeof Code2>;

function GroupCards({
  items,
  content,
}: {
  items: EducationGroupsContent["tracks"][EducationTrackKey];
  content: EducationGroupsContent;
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      {items.map((group) => {
        const featured = group.featured;

        return (
          <article
            key={group.title}
            className={`flex min-h-[31rem] flex-col rounded-[14px] border p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
              featured ? "border-foreground bg-foreground text-background" : "bg-background"
            }`}
          >
            <div className="flex min-h-7 items-start justify-between gap-4">
              <p className="text-lg font-semibold tracking-[-0.025em]">{group.title}</p>
              {group.badge ? (
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                    featured ? "bg-background/12 text-background" : "bg-muted text-foreground"
                  }`}
                >
                  {group.badge}
                </span>
              ) : null}
            </div>

            <div className="mt-7">
              <p className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{group.schedule}</p>
              <p className={`mt-1.5 text-sm ${featured ? "text-background/58" : "text-muted-foreground"}`}>{group.duration}</p>
            </div>

            <div className={`mt-6 flex flex-wrap gap-2 text-xs ${featured ? "text-background/68" : "text-muted-foreground"}`}>
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 ${featured ? "border-background/15" : "bg-muted/30"}`}>
                <UsersRound className="size-3.5" />
                {group.audience}
              </span>
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 ${featured ? "border-background/15" : "bg-muted/30"}`}>
                <Code2 className="size-3.5" />
                {group.format}
              </span>
            </div>

            <p className={`mt-6 text-sm leading-6 ${featured ? "text-background/68" : "text-muted-foreground"}`}>{group.description}</p>

            <Button className="mt-7 w-full" variant={featured ? "secondary" : "default"} asChild>
              <Link href="https://platform.scripticx.org/contact">
                {content.contact}
                <ArrowUpRight />
              </Link>
            </Button>

            <div className={`mt-7 border-t border-dashed pt-6 ${featured ? "border-background/18" : ""}`}>
              <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${featured ? "text-background/48" : "text-muted-foreground"}`}>
                {content.includesLabel}
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {group.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${featured ? "border-background/25" : "border-emerald-600/35 text-emerald-600"}`}>
                      <Check className="size-3" />
                    </span>
                    <span className="leading-5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`mt-auto flex items-center gap-2 pt-7 text-xs ${featured ? "text-background/48" : "text-muted-foreground"}`}>
              <Clock3 className="size-3.5" />
              {content.scheduleNote}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function EducationGroups({ content }: { content: EducationGroupsContent }) {
  return (
    <section className="border-b bg-muted/20">
      <div className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16 2xl:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{content.description}</p>
        </div>

        <Tabs defaultValue="informatics" className="mt-10 sm:mt-12">
          <TabsList
            aria-label={content.switchLabel}
            className="mx-auto grid h-12 w-full max-w-md grid-cols-2 items-stretch gap-1 rounded-[12px] border bg-background p-1 shadow-sm group-data-horizontal/tabs:h-12"
          >
            {(Object.keys(content.tabs) as EducationTrackKey[]).map((track) => {
              const Icon = trackIcons[track];
              return (
                <TabsTrigger
                  key={track}
                  value={track}
                  className="h-auto min-w-0 self-stretch rounded-[8px] px-3 shadow-none data-active:bg-foreground data-active:text-background! data-active:shadow-none sm:px-4"
                >
                  <Icon className="size-4" />
                  {content.tabs[track]}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {(Object.keys(content.tracks) as EducationTrackKey[]).map((track) => (
            <TabsContent
              key={track}
              value={track}
              className="mt-10 data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-bottom-2 data-active:duration-500 sm:mt-12"
            >
              <GroupCards items={content.tracks[track]} content={content} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
