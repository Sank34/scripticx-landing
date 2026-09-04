import { BrainCircuit, Code2, RefreshCw } from "lucide-react";

import { Reveal } from "@/components/marketing/Reveal";
import { divisionDetailsContent, type EducationTrackKey } from "@/lib/division-details-content";
import type { MarketingLocale } from "@/lib/marketing-content";

const tracks = ["informatics", "machineLearning"] as const satisfies readonly EducationTrackKey[];
const trackIcons = { informatics: Code2, machineLearning: BrainCircuit };

export function EducationRoadmap({ locale }: { locale: MarketingLocale }) {
  const { roadmap, groups } = divisionDetailsContent[locale].education;

  return (
    <section id="learning-roadmap" aria-labelledby="learning-roadmap-title" className="border-b">
      <div className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">{roadmap.eyebrow}</p>
          <h2 id="learning-roadmap-title" className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{roadmap.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{roadmap.description}</p>
        </div>

        <div className="mt-12 space-y-10 sm:mt-16 sm:space-y-12">
          {tracks.map((track) => {
            const Icon = trackIcons[track];
            const path = roadmap.tracks[track];

            return (
              <div key={track}>
                <div className="mb-5">
                  <h3 className="flex shrink-0 items-center gap-3 text-xl font-semibold tracking-[-0.025em]">
                    <span className="flex size-10 items-center justify-center rounded-[10px] border bg-muted/30"><Icon aria-hidden="true" className="size-5" /></span>
                    {groups.tabs[track]}
                  </h3>
                </div>

                <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
                  {path.stages.map((stage, index) => {
                    const group = groups.tracks[track][index];

                    return (
                      <Reveal key={group.title} delay={index * 0.06} distance={12} className="h-full">
                        <article className="flex h-full flex-col rounded-[14px] border bg-background p-6 sm:p-7">
                          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{stage.label}</p>
                          <h4 className="mt-3 text-xl font-semibold tracking-[-0.025em]">{group.title}</h4>
                          <p className="mt-4 text-base leading-7 text-muted-foreground">{stage.description}</p>
                          <p className="mt-auto pt-6 text-sm font-medium">{group.format}</p>
                        </article>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-start gap-4 border-t pt-7 sm:mt-12">
          <RefreshCw aria-hidden="true" className="mt-1 size-5 shrink-0 text-emerald-600" />
          <div className="max-w-3xl">
            <h3 className="text-lg font-semibold tracking-[-0.02em]">{roadmap.practiceTitle}</h3>
            <p className="mt-2 text-base leading-7 text-muted-foreground">{roadmap.practiceDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
