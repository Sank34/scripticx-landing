import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ChartNoAxesCombined,
  Eye,
  FileCheck2,
  Handshake,
  SlidersHorizontal,
} from "lucide-react";
import { getLocale } from "next-intl/server";

import Footer from "@/components/Footer";
import { Reveal } from "@/components/marketing/Reveal";
import { SponsorshipOptions } from "@/components/marketing/SponsorshipOptions";
import { Button } from "@/components/ui/button";
import { getMarketingLocale } from "@/lib/marketing-content";
import { createPageMetadata } from "@/lib/metadata";
import { partners, partnersContent } from "@/lib/partners-content";

const benefitIcons = [
  Eye,
  Handshake,
  ChartNoAxesCombined,
  SlidersHorizontal,
  FileCheck2,
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata({
    locale,
    path: "/partners",
    title: {
      en: partnersContent.en.metadata.title,
      ro: partnersContent.ro.metadata.title,
    },
    description: {
      en: partnersContent.en.metadata.description,
      ro: partnersContent.ro.metadata.description,
    },
  });
}

export default async function PartnersPage() {
  const locale = getMarketingLocale(await getLocale());
  const content = partnersContent[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        <section className="relative overflow-hidden border-b">
          <div className="sx-grid-fade absolute inset-0 -z-20" aria-hidden="true" />
          <div className="sx-hero-aura absolute inset-x-0 top-0 -z-10 h-[44rem]" aria-hidden="true" />
          <div className="mx-auto grid min-h-[42rem] max-w-[var(--sx-max-content)] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-28">
            <Reveal>
              <p className="text-sm font-medium text-muted-foreground">{content.hero.eyebrow}</p>
              <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {content.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                {content.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="https://platform.scripticx.org/contact">
                    {content.hero.primary}
                    <ArrowUpRight />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#current-partners">
                    {content.hero.secondary}
                    <ArrowDown />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div className="grid border-l border-t bg-background/70 shadow-[0_30px_90px_rgba(15,23,42,.08)] backdrop-blur sm:grid-cols-2">
                {partners.map((partner, index) => (
                  <div
                    key={partner.name}
                    className={`flex min-h-44 items-center justify-center border-b border-r p-6 ${index === 0 ? "sm:col-span-2 sm:min-h-52" : ""}`}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={260}
                      height={130}
                      className="max-h-20 w-auto max-w-[76%] object-contain"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="current-partners" className="scroll-mt-16 border-b py-24 sm:py-32">
          <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">{content.directory.eyebrow}</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                {content.directory.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {content.directory.description}
              </p>
            </Reveal>

            <div className="mt-14 grid gap-3 lg:grid-cols-3">
              {partners.map((partner, index) => (
                <Reveal key={partner.name} delay={index * 0.08} className="h-full">
                  <article className="flex h-full min-h-[24rem] flex-col rounded-[14px] border bg-card p-6">
                    <div className="flex h-36 items-center justify-center rounded-[10px] border bg-background p-6">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={220}
                        height={110}
                        className="max-h-20 w-auto max-w-[82%] object-contain"
                      />
                    </div>
                    <p className="mt-6 text-xs font-medium text-muted-foreground">
                      {content.directory.types[partner.type]}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em]">{partner.name}</h3>
                    <Link
                      href={partner.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium hover:underline"
                    >
                      {content.directory.visit}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b bg-[#0d0e10] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
            <Reveal className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div className="max-w-xl">
                <p className="text-sm font-medium text-white/45">{content.collaboration.eyebrow}</p>
                <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  {content.collaboration.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-white/58">{content.collaboration.description}</p>
              </div>
              <div>
                {content.collaboration.items.map((item) => (
                  <article key={item.number} className="grid gap-5 border-b border-white/10 py-8 first:pt-0 sm:grid-cols-[4rem_1fr]">
                    <span className="font-mono text-xs text-white/34">{item.number}</span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/56 sm:text-base">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <SponsorshipOptions content={content.sponsorship} />

        <section className="border-b bg-muted/25 py-24 sm:py-32">
          <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
            <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{content.benefits.eyebrow}</p>
                <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  {content.benefits.title}
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end sm:text-lg">
                {content.benefits.description}
              </p>
            </Reveal>

            <div className="mt-14 grid border-l border-t md:grid-cols-2 xl:grid-cols-5">
              {content.benefits.items.map((item, index) => {
                const Icon = benefitIcons[index];

                return (
                  <Reveal
                    key={item.title}
                    delay={index * 0.06}
                    className="h-full"
                  >
                    <article className="flex h-full min-h-72 flex-col border-b border-r bg-background p-6 sm:p-7">
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 items-center justify-center rounded-[var(--sx-radius-control)] border bg-muted/50">
                          <Icon className="size-[18px]" />
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                      </div>
                      <div className="mt-auto pt-14">
                        <h3 className="text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">{content.process.eyebrow}</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                {content.process.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                {content.process.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="https://platform.scripticx.org/contact">
                    {content.process.action}
                    <ArrowUpRight />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#current-partners">{content.process.secondary}</Link>
                </Button>
              </div>
            </Reveal>

            <div className="relative mt-16 lg:min-h-[30rem]">
              <svg
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                viewBox="0 0 1200 420"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M35 185C150 35 272 54 354 202C431 340 565 336 635 180C708 20 847 46 900 205C942 331 1042 330 1165 164"
                  stroke="currentColor"
                  strokeOpacity=".16"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />
              </svg>
              <div className="relative grid gap-3 lg:grid-cols-4 lg:gap-4">
                {content.process.steps.map((step, index) => (
                  <Reveal
                    key={step.number}
                    delay={index * 0.07}
                    className={index % 2 === 0 ? "lg:mt-0" : "lg:mt-44"}
                  >
                    <article className="min-h-60 rounded-[14px] border bg-background p-5 shadow-sm sm:p-6">
                      <div className="flex items-center justify-between">
                        <span className="flex size-8 items-center justify-center rounded-full bg-foreground font-mono text-[11px] text-background">
                          {step.number}
                        </span>
                        <span className="size-2 rounded-full bg-emerald-500" />
                      </div>
                      <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
