import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getLocale } from "next-intl/server";

import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { getMarketingLocale } from "@/lib/marketing-content";
import { partners, partnersContent } from "@/lib/partners-content";

export default async function PartnersSection() {
  const locale = getMarketingLocale(await getLocale());
  const content = partnersContent[locale].home;

  return (
    <section className="border-b bg-muted/20 py-20 sm:py-24">
      <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {content.title}
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              {content.description}
            </p>
            <Button variant="outline" className="mt-6" asChild>
              <Link href="/partners">
                {content.action}
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid border-l border-t sm:grid-cols-2 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 0.07} distance={14}>
              <Link
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-44 items-center justify-center border-b border-r bg-background p-7 transition-colors hover:bg-muted/30 sm:min-h-52"
                aria-label={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={240}
                  height={120}
                  className="max-h-20 w-auto max-w-[78%] object-contain opacity-70 grayscale transition-[filter,opacity,transform] duration-300 group-hover:scale-[1.025] group-hover:opacity-100 group-hover:grayscale-0"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
