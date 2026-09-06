"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { divisionDetailsContent } from "@/lib/division-details-content";
import type { MarketingLocale } from "@/lib/marketing-content";

export function DevelopmentProcess({ locale }: { locale: MarketingLocale }) {
  const content = divisionDetailsContent[locale].development.process;
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const item = content.items[active];
  return (
    <section id="development-process" className="scroll-mt-20 bg-[#0d0e10] text-white">
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <p className="text-sm text-white/65">{content.eyebrow}</p>
        <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{content.title}</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/65">{content.description}</p>
        <div className="mt-14">
          <div className="grid grid-cols-2 border-y border-white/20 lg:grid-cols-4" role="group" aria-label={content.eyebrow}>
            {content.items.map((step, index) => (
              <button key={step.number} type="button" aria-pressed={active === index} aria-controls="development-step" onClick={() => setActive(index)} className={`flex min-h-24 w-full items-center gap-3 border-b-2 px-3 py-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white sm:px-7 ${active === index ? "border-emerald-300 text-emerald-300" : "border-transparent text-white/60 hover:bg-white/5"}`}>
                <span className="font-mono text-xs">{step.number}</span><span className="text-lg font-medium">{step.title}</span>
              </button>
            ))}
          </div>
          <div id="development-step" aria-live="polite" className="min-w-0 py-10 sm:py-16">
            <motion.div key={active} initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="grid gap-8 md:grid-cols-[.6fr_1fr]">
              <div aria-hidden="true" className="flex items-center gap-5 text-emerald-300"><span className="font-mono text-[7rem] leading-none text-white/20 sm:text-[10rem]">{item.number}</span><svg viewBox="0 0 160 100" fill="none" className="w-32 sm:w-48"><path d="M0 50H150M115 15L150 50L115 85" stroke="currentColor" strokeOpacity=".2" /><motion.path d="M0 50H150M115 15L150 50L115 85" stroke="currentColor" initial={{pathLength: reducedMotion ? 1 : 0}} animate={{pathLength:1}} transition={{duration: reducedMotion ? 0 : .8}} /></svg></div>
              <div>
              <h3 className="mt-8 text-3xl font-semibold tracking-[-0.035em]">{item.title}</h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70">{item.description}</p>
              <p className="mt-8 border-t border-white/20 pt-5 text-sm">{item.note}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
