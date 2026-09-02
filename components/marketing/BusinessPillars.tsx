import Link from "next/link";
import { ArrowUpRight, BookOpen, Code2, PanelsTopLeft } from "lucide-react";
import { getLocale } from "next-intl/server";

import { Reveal } from "@/components/marketing/Reveal";
import { MascotPeek } from "@/components/marketing/MascotPeek";
import { getMarketingLocale, marketingContent } from "@/lib/marketing-content";

const icons = { education: BookOpen, development: Code2, platform: PanelsTopLeft };

export default async function BusinessPillars() {
  const locale = getMarketingLocale(await getLocale());
  const content = marketingContent[locale].pillars;

  return (
    <section id="company" className="border-b py-20 sm:py-24">
      <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="max-w-xl">
            <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {content.title}
            </h2>
            <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              {content.description}
            </p>
          </Reveal>

          <div className="grid gap-3">
            {content.items.map((item, index) => {
              const Icon = icons[item.key];
              return (
                <Reveal key={item.key} delay={index * 0.07} distance={16}>
                  <Link
                    href={item.href}
                    className="group relative isolate grid gap-5 overflow-hidden rounded-[14px] border bg-card p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/35 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:p-6"
                  >
                    <div className="relative z-10 flex size-11 items-center justify-center rounded-[10px] border bg-background">
                      <Icon className="size-5" />
                    </div>
                    <div className={`relative z-10 ${item.key === "education" ? "lg:pr-28" : ""}`}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-muted-foreground">{item.number}</span>
                        <h3 className="text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{item.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium sm:hidden">
                        {item.action}<ArrowUpRight className="size-4" />
                      </span>
                    </div>
                    <ArrowUpRight className="relative z-10 mt-1 hidden size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block" />
                    {item.key === "education" ? (
                      <MascotPeek
                        className="absolute -bottom-12 right-14 hidden w-24 opacity-55 transition-opacity duration-300 group-hover:opacity-80 lg:block"
                      />
                    ) : null}
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
