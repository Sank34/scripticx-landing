"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/marketing/Reveal";
import type { MarketingLocale } from "@/lib/marketing-content";

export function DevelopmentHero({ locale }: { locale: MarketingLocale }) {
  const ro = locale === "ro";
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const [stage, setStage] = useState(0);
  const [paused, setPaused] = useState(false);
  const labels = ro ? ["Structură", "Interfață", "Lansare"] : ["Structure", "Interface", "Launch"];
  useEffect(() => {
    if (paused || reduced || !visible) return;
    const timer = setInterval(() => setStage(value => (value + 1) % 3), 4200);
    return () => clearInterval(timer);
  }, [paused, reduced, visible]);

  return (
    <section className="grid overflow-hidden border-b lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[.92fr_1.08fr]">
      <Reveal className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <p className="text-sm font-medium text-muted-foreground">ScripticX Development</p>
        <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.04] tracking-[-.055em] sm:text-6xl xl:text-[4.25rem]">{ro ? "Idei bine gândite. Produse bine construite." : "Thoughtful ideas. Thoughtfully built."}</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{ro ? "Design, aplicații web și mobile, integrări. Construim produse digitale utile, de la prima schiță până la lansare și tot ce urmează." : "Design, web and mobile apps, integrations. We build useful digital products, from the first sketch to launch and everything that follows."}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="min-h-11 px-5"><Link href="https://platform.scripticx.org/contact">{ro ? "Discută un proiect" : "Discuss a project"}<ArrowUpRight /></Link></Button>
          <Button asChild variant="outline" className="min-h-11 px-5"><Link href="#work">{ro ? "Vezi proiectele" : "See our work"}<ArrowDown /></Link></Button>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6 text-xs text-muted-foreground">{["Product & UX", "Web engineering", ro ? "Suport pe termen lung" : "Long-term support"].map(text => <span key={text} className="flex items-center gap-2"><Check className="size-3" />{text}</span>)}</div>
      </Reveal>
      <Reveal delay={0.08} className="min-w-0">
      <div ref={ref} className="relative flex h-full min-h-[32rem] min-w-0 flex-col justify-center overflow-hidden bg-[#0d0e10] px-5 py-10 text-white sm:min-h-[40rem] sm:px-10 lg:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="mb-8 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-white/50"><span>{ro ? "De la structură la produs" : "From structure to product"}</span><span>{ro ? "Demonstrație" : "Concept demo"}</span></div>
          <div className="relative aspect-[1.25] w-full sm:aspect-[1.4]">
            <svg viewBox="0 0 600 430" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
              <path d="M30 24H570V384H30Z M30 66H570 M140 66V384" stroke="white" strokeOpacity=".2" />
              {[108, 158, 208].map(y => <path key={y} d={`M52 ${y}h64`} stroke="white" strokeOpacity=".25" strokeWidth="5" />)}
              {[0, 1, 2].map(i => <motion.rect key={i} x={165 + i * 125} y="103" width="104" height="76" rx="5" stroke="#6ee7b7" initial={false} animate={{ opacity: stage === 0 ? 1 : .12, pathLength: stage === 0 ? 1 : 0 }} transition={{ duration: reduced ? 0 : .9, delay: reduced ? 0 : i * .12 }} />)}
              <motion.path d="M166 322L217 296L266 309L318 240L368 270L416 215L508 194" stroke="#6ee7b7" strokeWidth="2" initial={false} animate={{ pathLength: stage === 0 ? 1 : 0 }} transition={{ duration: reduced ? 0 : 1.2 }} />
              <path d="M10 24H0 M30 4V0 M590 384H600 M570 404V430" stroke="#6ee7b7" />
            </svg>
            <motion.div initial={false} animate={{ opacity: stage > 0 ? 1 : 0, y: stage > 0 ? 0 : 22, scale: stage > 0 ? 1 : .94 }} transition={{ duration: reduced ? 0 : .7 }} className="absolute inset-0 flex items-center">
              <Image src="/scripticx-mac-mockup-new.png" alt={ro ? "Interfața ScripticX Platform" : "ScripticX Platform interface"} width={3304} height={1999} priority sizes="(max-width:1024px) 90vw, 48vw" className="h-auto w-full object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,.45)]" />
            </motion.div>
            <motion.div initial={false} animate={{ opacity: stage === 2 ? 1 : 0, y: stage === 2 ? 0 : 12 }} transition={{ duration: reduced ? 0 : .4 }} className="absolute bottom-0 left-5 right-5 flex items-center gap-3 rounded-lg border border-emerald-300/30 bg-[#14231d] p-4 text-sm shadow-xl sm:left-12 sm:right-12"><Check className="size-5 shrink-0 text-emerald-300" /><span>platform.scripticx.org</span><span className="ml-auto font-mono text-xs text-emerald-300">Live</span></motion.div>
          </div>
          <div className="mt-10 flex items-center gap-2 border-t border-white/15 pt-5" role="group" aria-label={ro ? "Etapele demonstrației" : "Demo stages"}>
            {labels.map((label, index) => <button key={label} type="button" aria-pressed={stage === index} onClick={() => { setStage(index); setPaused(true); }} className={`min-h-11 flex-1 border-b-2 px-1 py-3 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-white sm:text-sm ${stage === index ? "border-emerald-300 text-white" : "border-transparent text-white/50 hover:text-white"}`}><span className="mr-2 font-mono text-[10px]">0{index + 1}</span>{label}</button>)}
            <button type="button" disabled={!!reduced} onClick={() => setPaused(!paused)} aria-label={paused ? (ro ? "Pornește animația" : "Play animation") : (ro ? "Oprește animația" : "Pause animation")} className="flex size-11 shrink-0 items-center justify-center rounded-lg hover:bg-white/10 focus-visible:outline-2 disabled:opacity-30">{paused || reduced ? <Play className="size-4" /> : <Pause className="size-4" />}</button>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
