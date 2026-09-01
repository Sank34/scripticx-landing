import Link from "next/link";
import { ArrowUpRight, Check, FileText, MessageSquareText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { divisionDetailsContent } from "@/lib/division-details-content";
import type { MarketingLocale } from "@/lib/marketing-content";

function CapabilityVisual({ kind }: { kind: string }) {
  if (kind === "discovery") {
    return (
      <div className="relative h-48 overflow-hidden border-t bg-muted/15" aria-hidden="true">
        <svg viewBox="0 0 520 190" className="absolute inset-0 size-full text-foreground/28" fill="none">
          {[28, 48, 68, 88].map((radius) => <circle key={radius} cx="360" cy="96" r={radius} stroke="currentColor" />)}
          <path d="M40 145C119 80 187 67 264 96C309 113 333 111 360 96" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 6" />
          <circle cx="40" cy="145" r="5" fill="currentColor" /><circle cx="360" cy="96" r="5" fill="currentColor" />
        </svg>
        <span className="absolute bottom-5 left-5 rounded-full border bg-background px-3 py-1.5 font-mono text-xs">problem → scope → decision</span>
      </div>
    );
  }
  if (kind === "design") {
    return (
      <div className="relative grid h-48 grid-cols-3 gap-2 overflow-hidden border-t bg-muted/15 p-5" aria-hidden="true">
        <div className="rounded-[8px] border bg-background p-2"><div className="h-3 w-10 rounded-full bg-foreground/12" /><div className="mt-8 h-12 rounded border" /><div className="mt-2 h-2 w-3/4 rounded-full bg-foreground/8" /></div>
        <div className="rounded-[8px] border bg-background p-2"><div className="h-3 w-8 rounded-full bg-foreground/12" /><div className="mt-3 grid grid-cols-2 gap-1"><div className="h-16 rounded border" /><div className="h-16 rounded border" /></div><div className="mt-3 h-2 rounded-full bg-foreground/8" /></div>
        <div className="rounded-[8px] border bg-background p-2"><div className="h-3 w-11 rounded-full bg-foreground/12" /><div className="mt-8 h-8 rounded bg-foreground text-background" /><div className="mt-3 h-2 w-1/2 rounded-full bg-foreground/8" /></div>
      </div>
    );
  }
  if (kind === "engineering") {
    return (
      <div className="h-48 overflow-hidden border-t bg-[#111315] p-4 font-mono text-[11px] leading-5 text-white/60" aria-hidden="true">
        <div className="flex gap-1.5 border-b border-white/10 pb-3"><span className="size-2 rounded-full bg-white/15" /><span className="size-2 rounded-full bg-white/15" /><span className="size-2 rounded-full bg-white/15" /></div>
        <div className="mt-3 grid grid-cols-[4rem_1fr] gap-4"><div className="space-y-1 text-white/32"><p>app</p><p>ui</p><p>api</p><p>tests</p></div><pre><span className="text-fuchsia-300">export</span> <span className="text-sky-300">function</span> Product() {'{'}{"\n"}  return accessible;{"\n"}{'}'}</pre></div>
      </div>
    );
  }
  if (kind === "integrations") {
    return (
      <div className="relative h-48 overflow-hidden border-t bg-muted/15" aria-hidden="true">
        <svg viewBox="0 0 360 190" className="size-full text-foreground/24" fill="none">
          <path d="M52 44L180 95L303 43M180 95L74 157M180 95L290 151" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" />
          {[[52,44],[180,95],[303,43],[74,157],[290,151]].map(([x,y], index) => <g key={index}><circle cx={x} cy={y} r={index === 1 ? 25 : 18} fill="var(--background)" stroke="currentColor" /><circle cx={x} cy={y} r="4" fill="currentColor" /></g>)}
        </svg>
      </div>
    );
  }
  if (kind === "quality") {
    return (
      <div className="relative h-48 overflow-hidden border-t bg-muted/15 p-5" aria-hidden="true">
        <div className="absolute inset-x-5 bottom-5 top-5 grid grid-cols-4 items-end gap-2">
          {[54, 72, 88, 100].map((height, index) => <div key={height} className="flex h-full flex-col justify-end"><div className="rounded-t-md border border-b-0 bg-background" style={{ height: `${height}%` }} /><span className="border-t pt-2 text-center font-mono text-[10px] text-muted-foreground">{["A11Y", "LCP", "TEST", "SHIP"][index]}</span></div>)}
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-48 overflow-hidden border-t bg-muted/15 p-5" aria-hidden="true">
      <div className="absolute bottom-5 left-8 top-5 w-px bg-border" />
      {["Release reviewed", "Performance checked", "Update delivered"].map((label, index) => <div key={label} className="relative mb-3 ml-1 flex items-center gap-3 rounded-[8px] border bg-background px-3 py-2 text-xs"><span className="z-10 size-2.5 rounded-full bg-foreground" /><span>{label}</span><span className="ml-auto font-mono text-[9px] text-muted-foreground">0{index + 1}</span></div>)}
    </div>
  );
}

export function DevelopmentDetails({ locale }: { locale: MarketingLocale }) {
  const content = divisionDetailsContent[locale].development;

  return (
    <>
      <section className="border-b">
        <div className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">{content.capabilities.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.capabilities.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{content.capabilities.description}</p>
          </div>
          <div className="mt-14 grid border-l border-t md:grid-cols-2 xl:grid-cols-12">
            {content.capabilities.items.map((item, index) => (
              <article key={item.key} className={`flex min-h-[27rem] flex-col overflow-hidden border-b border-r bg-card ${index === 0 ? "xl:col-span-6" : index < 3 ? "xl:col-span-3" : "xl:col-span-4"}`}>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between"><h3 className="text-xl font-semibold tracking-[-0.025em]">{item.title}</h3><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{item.points.map((point) => <span key={point} className="rounded-full border bg-muted/30 px-3 py-1 text-xs text-muted-foreground">{point}</span>)}</div>
                </div>
                <div className="mt-auto"><CapabilityVisual kind={item.key} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-[#0d0e10] text-white">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-b border-white/10 px-5 py-24 sm:px-8 sm:py-32 lg:border-b-0 lg:border-r lg:px-12 xl:px-16 2xl:px-24">
            <div className="max-w-xl lg:sticky lg:top-28">
              <p className="text-sm font-medium text-white/45">{content.process.eyebrow}</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.process.title}</h2>
              <p className="mt-5 text-base leading-7 text-white/58">{content.process.description}</p>
            </div>
          </div>
          <div className="px-5 py-12 sm:px-8 lg:px-12 lg:py-24 xl:px-16 2xl:px-24">
            {content.process.items.map((item) => (
              <article key={item.number} className="grid gap-6 border-b border-white/10 py-10 first:pt-0 sm:grid-cols-[5rem_1fr] sm:py-12">
                <span className="font-mono text-sm text-white/35">{item.number}</span>
                <div><h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{item.title}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">{item.description}</p><span className="mt-6 inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white/62">{item.note}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16 2xl:px-24">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-muted-foreground">{content.portal.eyebrow}</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.portal.title}</h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">{content.portal.description}</p>
              <ul className="mt-8 space-y-4 text-sm">{content.portal.points.map((point) => <li key={point} className="flex items-center gap-3"><span className="flex size-6 items-center justify-center rounded-full bg-muted"><Check className="size-3.5" /></span>{point}</li>)}</ul>
            </div>
          </div>
          <div className="flex min-h-[36rem] items-center justify-center border-t bg-muted/20 p-5 sm:p-10 lg:border-l lg:border-t-0 xl:p-16">
            <div className="w-full max-w-2xl overflow-hidden rounded-[16px] border bg-background shadow-[0_24px_80px_rgba(15,23,42,.1)]">
              <div className="flex items-center justify-between border-b px-5 py-4"><div><p className="text-sm font-semibold">{content.portal.mock.project}</p><p className="mt-1 text-xs text-muted-foreground">Project 2026-08</p></div><span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-900">{content.portal.mock.status}</span></div>
              <div className="grid sm:grid-cols-[1fr_14rem]">
                <div className="border-b p-5 sm:border-b-0 sm:border-r">
                  <p className="text-xs font-medium text-muted-foreground">Milestone</p><p className="mt-2 text-xl font-semibold tracking-[-0.025em]">{content.portal.mock.milestone}</p>
                  <div className="mt-8 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[68%] rounded-full bg-foreground" /></div>
                  <div className="mt-8 grid gap-3"><div className="flex items-center gap-3 rounded-[10px] border p-3"><MessageSquareText className="size-4" /><span className="text-sm">{content.portal.mock.update}</span><span className="ml-auto size-2 rounded-full bg-emerald-500" /></div><div className="flex items-center gap-3 rounded-[10px] border p-3"><FileText className="size-4" /><span className="text-sm">{content.portal.mock.invoice}</span></div></div>
                </div>
                <div className="space-y-3 p-5"><p className="text-xs font-medium text-muted-foreground">Timeline</p>{["Discovery", "Design", "Development", "Launch"].map((label, index) => <div key={label} className="flex items-center gap-3 text-xs"><span className={`flex size-5 items-center justify-center rounded-full ${index < 2 ? "bg-foreground text-background" : "border"}`}>{index < 2 ? <Check className="size-3" /> : index + 1}</span><span className={index > 1 ? "text-muted-foreground" : ""}>{label}</span></div>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="max-w-xl"><p className="text-sm font-medium text-muted-foreground">{content.pricing.eyebrow}</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.pricing.title}</h2><p className="mt-5 text-base leading-7 text-muted-foreground">{content.pricing.description}</p><Button className="mt-8" asChild><Link href="https://platform.scripticx.org/contact">{content.pricing.contact}<ArrowUpRight /></Link></Button></div>
            <div className="grid gap-3 md:grid-cols-3">
              {content.pricing.items.map((item, index) => <article key={item.title} className={`flex min-h-[28rem] flex-col rounded-[14px] border p-6 ${index === 1 ? "bg-foreground text-background" : "bg-card"}`}><span className={`font-mono text-xs ${index === 1 ? "text-background/55" : "text-muted-foreground"}`}>0{index + 1}</span><h3 className="mt-8 text-xl font-semibold tracking-[-0.025em]">{item.title}</h3><p className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{item.price}</p><p className={`mt-1 text-xs ${index === 1 ? "text-background/55" : "text-muted-foreground"}`}>{item.cadence}</p><p className={`mt-5 text-sm leading-6 ${index === 1 ? "text-background/64" : "text-muted-foreground"}`}>{item.description}</p><ul className={`mt-auto space-y-3 border-t pt-5 text-sm ${index === 1 ? "border-background/15" : ""}`}>{item.features.map((feature) => <li key={feature} className="flex items-center gap-2"><Check className="size-3.5" />{feature}</li>)}</ul></article>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
