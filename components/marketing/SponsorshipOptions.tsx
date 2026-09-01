"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Banknote,
  Boxes,
  Building2,
  Check,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { SponsorshipContent } from "@/lib/partners-content";

const inKindIcons = [Boxes, Building2, UsersRound] as const;

export function SponsorshipOptions({ content }: { content: SponsorshipContent }) {
  return (
    <section className="border-b bg-muted/20">
      <div className="mx-auto max-w-[var(--sx-max-content)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            {content.description}
          </p>
        </div>

        <Tabs defaultValue="financial" className="mt-10 sm:mt-12">
          <TabsList
            aria-label={content.switchLabel}
            className="mx-auto grid h-12 w-full max-w-md grid-cols-2 items-stretch gap-1 rounded-[12px] border bg-background p-1 shadow-sm group-data-horizontal/tabs:h-12"
          >
            <TabsTrigger
              value="financial"
              className="h-auto min-w-0 self-stretch rounded-[8px] px-3 shadow-none data-active:bg-foreground data-active:text-background! data-active:shadow-none"
            >
              <Banknote className="size-4" />
              <span className="truncate">{content.tabs.financial}</span>
            </TabsTrigger>
            <TabsTrigger
              value="in-kind"
              className="h-auto min-w-0 self-stretch rounded-[8px] px-3 shadow-none data-active:bg-foreground data-active:text-background! data-active:shadow-none"
            >
              <Boxes className="size-4" />
              <span className="truncate">{content.tabs.inKind}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="financial"
            className="mt-10 data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-bottom-2 data-active:duration-500 sm:mt-12"
          >
            <div className="grid gap-3 lg:grid-cols-3">
              {content.tiers.map((tier, index) => {
                const featured = tier.featured;

                return (
                  <article
                    key={tier.title}
                    className={`flex min-h-[34rem] flex-col rounded-[14px] border p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
                      featured
                        ? "border-foreground bg-foreground text-background"
                        : "bg-background"
                    }`}
                  >
                    <div className="flex min-h-7 items-start justify-between gap-4">
                      <span
                        className={`font-mono text-xs ${
                          featured ? "text-background/48" : "text-muted-foreground"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      {tier.badge ? (
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                            featured
                              ? "bg-background/12 text-background"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          {tier.badge}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em]">
                      {tier.title}
                    </h3>
                    <p className="mt-7 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      {tier.amount}
                    </p>
                    <p
                      className={`mt-1.5 text-xs ${
                        featured ? "text-background/55" : "text-muted-foreground"
                      }`}
                    >
                      {tier.cadence}
                    </p>
                    <p
                      className={`mt-6 text-sm leading-6 ${
                        featured ? "text-background/66" : "text-muted-foreground"
                      }`}
                    >
                      {tier.description}
                    </p>

                    <Button
                      className="mt-7 w-full"
                      variant={featured ? "secondary" : "default"}
                      asChild
                    >
                      <Link href="https://platform.scripticx.org/contact">
                        {content.action}
                        <ArrowUpRight />
                      </Link>
                    </Button>

                    <div
                      className={`mt-7 border-t border-dashed pt-6 ${
                        featured ? "border-background/18" : ""
                      }`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.12em] ${
                          featured ? "text-background/48" : "text-muted-foreground"
                        }`}
                      >
                        {content.includesLabel}
                      </p>
                      <ul className="mt-4 space-y-3 text-sm">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <span
                              className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                                featured
                                  ? "border-background/25"
                                  : "border-emerald-600/35 text-emerald-600"
                              }`}
                            >
                              <Check className="size-3" />
                            </span>
                            <span className="leading-5">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-5 text-muted-foreground">
              {content.note}
            </p>
          </TabsContent>

          <TabsContent
            value="in-kind"
            className="mt-10 data-active:animate-in data-active:fade-in-0 data-active:slide-in-from-bottom-2 data-active:duration-500 sm:mt-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                {content.inKind.title}
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                {content.inKind.description}
              </p>
            </div>

            <div className="mt-12 grid border-l border-t lg:grid-cols-3">
              {content.inKind.items.map((item, index) => {
                const Icon = inKindIcons[index];

                return (
                  <article
                    key={item.title}
                    className="flex min-h-[28rem] flex-col border-b border-r bg-background p-6 sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex size-10 items-center justify-center rounded-[var(--sx-radius-control)] border bg-muted/40">
                        <Icon className="size-[18px]" />
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    </div>
                    <h4 className="mt-10 text-xl font-semibold tracking-[-0.025em]">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                    <ul className="mt-auto space-y-3 border-t pt-6 text-sm">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link href="https://platform.scripticx.org/contact">
                  {content.action}
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
