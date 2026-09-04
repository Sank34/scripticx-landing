import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { Reveal } from "@/components/marketing/Reveal";
import { divisionDetailsContent } from "@/lib/division-details-content";
import type { MarketingLocale } from "@/lib/marketing-content";

export function DevelopmentWork({ locale }: { locale: MarketingLocale }) {
  const content = divisionDetailsContent[locale].development.work;

  return (
    <section id="work" className="border-b bg-muted/20 py-24 sm:py-32">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.title}</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{content.description}</p>
          </div>
          <p className="font-mono text-xs text-muted-foreground">{content.note}</p>
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((project, index) => (
            <Reveal key={project.key} delay={Math.min(index, 3) * 0.06} className={`h-full ${index === 0 ? "xl:col-span-2" : ""}`}>
              <article className="flex h-full flex-col overflow-hidden rounded-[14px] border bg-card">
                <div className={`relative overflow-hidden border-b bg-muted/50 ${index === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                  {project.cover ? (
                    <Image
                      src={project.cover}
                      alt={project.name}
                      fill
                      sizes={index === 0 ? "(max-width: 1280px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="flex size-full items-center justify-center text-muted-foreground/35">
                      <ImageIcon className="size-7" />
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em]">{project.name}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{project.description}</p>
                  <p className="mt-auto pt-5 font-mono text-xs text-muted-foreground">{project.domain}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
