import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getLocale } from "next-intl/server";

import { ConstellationField } from "@/components/marketing/ConstellationField";
import { Reveal } from "@/components/marketing/Reveal";
import { MascotPeek } from "@/components/marketing/MascotPeek";
import { Button } from "@/components/ui/button";
import { getMarketingLocale, marketingContent } from "@/lib/marketing-content";

export default async function MarketingCTA() {
  const locale = getMarketingLocale(await getLocale());
  const content = marketingContent[locale].cta;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
        <Reveal className="relative isolate overflow-hidden rounded-[20px] border bg-[#0d0e10] px-6 py-14 text-white sm:px-10 sm:py-20 lg:px-16">
          <ConstellationField compact />
          <div className="pointer-events-none absolute -bottom-32 right-36 hidden size-80 rounded-full bg-emerald-300/12 blur-3xl lg:block" />
          <MascotPeek delay={-4.2} className="absolute -bottom-24 right-72 hidden w-40 opacity-95 lg:block" />
          <MascotPeek mascot="robot" delay={-1.4} className="absolute -bottom-10 right-44 hidden w-36 opacity-95 lg:block" />
          <p className="relative z-10 text-sm font-medium text-white/48">{content.eyebrow}</p>
          <div className="relative z-10 mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">{content.title}</h2><p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/58">{content.description}</p></div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button size="lg" variant="secondary" asChild><Link href="https://platform.scripticx.org">{content.primary}<ArrowUpRight /></Link></Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild><Link href="https://platform.scripticx.org/contact">{content.secondary}</Link></Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
