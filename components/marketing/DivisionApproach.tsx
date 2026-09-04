import { BrainCircuit, Code2, Compass, Globe2, Palette, School, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/marketing/Reveal";
import { divisionContent, type MarketingLocale } from "@/lib/marketing-content";

type ApproachDivision = "education" | "development";

const approachIcons: Record<ApproachDivision, LucideIcon[]> = {
  education: [Code2, BrainCircuit, School],
  development: [Globe2, Palette, Compass],
};

export function DivisionApproach({ division, locale }: { division: ApproachDivision; locale: MarketingLocale }) {
  const content = divisionContent[locale][division];
  const icons = approachIcons[division];

  return (
    <section id="capabilities" className="relative overflow-hidden border-b py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 sx-dot-grid text-foreground/25 opacity-40" />
      <div className="relative px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.approach.title}</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{content.approach.description}</p>
        </Reveal>
        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {content.approach.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.07} className="h-full">
                <article className="relative flex h-full min-h-[21rem] flex-col overflow-hidden rounded-[14px] border bg-card p-6 sm:p-7">
                  <div className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-gradient-to-br from-foreground/[0.07] to-transparent blur-2xl" />
                  <span className="pointer-events-none absolute right-5 top-3 select-none font-mono text-7xl font-semibold leading-none text-foreground/[0.045]">
                    0{index + 1}
                  </span>
                  <span className="relative flex size-11 items-center justify-center rounded-[12px] border bg-background shadow-sm">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="relative mt-auto pt-10 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="relative mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  <ul className="relative mt-6 flex flex-wrap gap-2 border-t pt-5">
                    {item.points.map((point) => (
                      <li key={point} className="rounded-full border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
