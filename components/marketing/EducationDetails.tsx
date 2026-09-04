import Link from "next/link";
import { ArrowUpRight, Check, Lightbulb, PenLine, RefreshCw } from "lucide-react";

import { EducationActivities } from "@/components/marketing/EducationActivities";
import { EducationGroups } from "@/components/marketing/EducationGroups";
import { Button } from "@/components/ui/button";
import type { MarketingLocale } from "@/lib/marketing-content";
import { divisionDetailsContent } from "@/lib/division-details-content";

const subjectIcons = [Lightbulb, PenLine, RefreshCw];

export function EducationDetails({ locale }: { locale: MarketingLocale }) {
  const content = divisionDetailsContent[locale].education;

  return (
    <>
      <section className="border-b">
        <div className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-muted-foreground">{content.program.eyebrow}</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.program.title}</h2>
              <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{content.program.description}</p>
            </div>
            <div className="grid overflow-hidden rounded-[14px] border border-b-0 sm:grid-cols-3">
              {content.program.subjects.map((subject, index) => {
                const Icon = subjectIcons[index];
                return (
                  <article key={subject.title} className="group flex min-h-[25rem] flex-col border-b bg-background p-6 sm:border-r sm:last:border-r-0 sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="flex size-10 items-center justify-center rounded-[10px] border bg-muted/30 transition-colors duration-300 group-hover:bg-foreground group-hover:text-background"><Icon className="size-4.5" /></span>
                      <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    </div>
                    <h3 className="mt-10 text-xl font-semibold tracking-[-0.025em]">{subject.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{subject.description}</p>
                    <ul className="mt-auto space-y-3 border-t pt-5 text-sm">
                      {subject.topics.map((topic) => <li key={topic} className="flex items-center gap-2.5"><Check className="size-3.5 text-emerald-600" />{topic}</li>)}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <EducationGroups content={content.groups} />

      <section className="border-b overflow-hidden">
        <div className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">{content.roadmap.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.roadmap.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{content.roadmap.description}</p>
          </div>
          <div className="relative mt-16 lg:min-h-[34rem]">
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1200 460" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <path d="M40 208C136 54 280 50 356 182C442 330 545 333 617 182C689 33 821 43 869 194C910 322 1032 340 1160 170" stroke="currentColor" strokeOpacity=".18" strokeWidth="2" strokeDasharray="6 8" />
            </svg>
            <div className="relative grid gap-3 lg:grid-cols-5 lg:gap-4">
              {content.roadmap.items.map((item, index) => (
                <article key={item.number} className={`relative rounded-[14px] border bg-background p-5 shadow-sm lg:min-h-[13rem] ${index % 2 === 0 ? "lg:mt-5" : "lg:mt-56"}`}>
                  <div className="flex items-center justify-between"><span className="flex size-8 items-center justify-center rounded-full bg-foreground font-mono text-[11px] text-background">{item.number}</span><span className="size-2 rounded-full bg-emerald-500" /></div>
                  <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-[#0d0e10] text-white">
        <div className="px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-white/48">{content.activities.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.activities.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/58">{content.activities.description}</p>
          </div>
        </div>
        <EducationActivities items={content.activities.items} openLabel={content.activities.openLabel} galleryLabel={content.activities.galleryLabel} />
      </section>

      <section className="border-b">
        <div className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-muted-foreground">{content.pricing.eyebrow}</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.pricing.title}</h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">{content.pricing.description}</p>
              <Button className="mt-8" asChild><Link href="https://platform.scripticx.org/contact">{content.pricing.contact}<ArrowUpRight /></Link></Button>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {content.pricing.items.map((item, index) => (
                <article key={item.title} className={`flex min-h-[28rem] flex-col rounded-[14px] border p-6 ${index === 1 ? "bg-foreground text-background" : "bg-card"}`}>
                  <span className={`font-mono text-xs ${index === 1 ? "text-background/55" : "text-muted-foreground"}`}>0{index + 1}</span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                  <p className={`mt-6 text-2xl font-semibold tracking-[-0.03em] ${index === 1 ? "text-background" : ""}`}>{item.price}</p>
                  <p className={`mt-1 text-xs ${index === 1 ? "text-background/55" : "text-muted-foreground"}`}>{item.cadence}</p>
                  <p className={`mt-5 text-sm leading-6 ${index === 1 ? "text-background/64" : "text-muted-foreground"}`}>{item.description}</p>
                  <ul className={`mt-auto space-y-3 border-t pt-5 text-sm ${index === 1 ? "border-background/15" : ""}`}>
                    {item.features.map((feature) => <li key={feature} className="flex items-center gap-2"><Check className="size-3.5" />{feature}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
