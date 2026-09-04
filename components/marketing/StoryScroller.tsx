"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/BrandMark";
import { ConstellationField } from "@/components/marketing/ConstellationField";
import { SparkleField } from "@/components/marketing/SparkleField";
import { getMarketingLocale, marketingContent, type MarketingLocale } from "@/lib/marketing-content";

const visualCopy = {
  en: {
    learn: ["Lesson", "Guided example", "Checkpoint"],
    practice: ["Problems", "Quiz", "Progress"],
    code: ["Project", "main.msp", "Terminal"],
    grow: ["Weekly progress", "Group activity", "Competition rank"],
  },
  ro: {
    learn: ["Lecție", "Exemplu ghidat", "Checkpoint"],
    practice: ["Probleme", "Quiz", "Progres"],
    code: ["Proiect", "main.msp", "Terminal"],
    grow: ["Progres săptămânal", "Activitate în grup", "Loc în competiție"],
  },
} as const;

function StoryCardVisual({ index, locale }: { index: number; locale: MarketingLocale }) {
  const labels = visualCopy[locale];

  if (index === 0) {
    return (
      <div className="relative h-52 overflow-hidden border-t border-white/10 bg-black/15 p-6" aria-hidden="true">
        <svg viewBox="0 0 520 175" className="absolute inset-0 size-full text-white/24" fill="none"><path d="M42 114C112 32 193 36 245 101C302 171 384 151 475 56" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" /></svg>
        <div className="relative grid h-full grid-cols-3 items-center gap-4">
          {labels.learn.map((label, itemIndex) => <div key={label} className={`rounded-[10px] border border-white/12 bg-[#151719] p-3 shadow-xl ${itemIndex === 1 ? "-translate-y-7" : itemIndex === 2 ? "translate-y-5" : ""}`}><span className="flex size-6 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-black">{itemIndex + 1}</span><p className="mt-5 text-xs font-medium text-white/75">{label}</p><div className="mt-2 h-1.5 rounded-full bg-white/8"><div className="h-full rounded-full bg-emerald-300" style={{ width: `${[100, 72, 40][itemIndex]}%` }} /></div></div>)}
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="grid h-52 grid-cols-[1.2fr_0.8fr] border-t border-white/10 bg-black/15 p-5" aria-hidden="true">
        <div className="grid grid-cols-9 gap-1.5 self-center pr-5">{Array.from({ length: 45 }).map((_, cell) => <span key={cell} className={`aspect-square rounded-[2px] ${cell % 11 === 0 ? "bg-emerald-300" : cell % 5 === 0 ? "bg-emerald-300/55" : "bg-white/7"}`} />)}</div>
        <div className="flex flex-col justify-center gap-2 border-l border-white/10 pl-5">{labels.practice.map((label, itemIndex) => <div key={label} className="flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] text-white/62"><Check className="size-3 text-emerald-300" />{label}<span className="ml-auto font-mono text-white/32">{["18", "4/4", "82%"][itemIndex]}</span></div>)}</div>
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="h-52 border-t border-white/10 bg-[#0a0b0d] p-4 font-mono text-[10px] text-white/50" aria-hidden="true">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3"><span className="size-2 rounded-full bg-white/15" /><span className="size-2 rounded-full bg-white/15" /><span className="size-2 rounded-full bg-white/15" /><span className="ml-3 text-white/35">{labels.code[0]}</span></div>
        <div className="grid h-[calc(100%-28px)] grid-cols-[6rem_1fr]">
          <div className="border-r border-white/10 py-3"><p className="rounded bg-white/7 px-2 py-1.5 text-white/72">{labels.code[1]}</p><p className="px-2 py-1.5">lib</p><p className="px-2 py-1.5">tests</p></div>
          <div className="p-3 leading-5"><span className="text-sky-300">FUNCTION</span> build()<br /><span className="text-fuchsia-300">&nbsp;&nbsp;PRINT</span> &quot;ScripticX&quot;<br /><span className="text-fuchsia-300">END</span><div className="mt-3 border-t border-white/10 pt-2 text-emerald-300">› {labels.code[2]} · ready</div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-52 border-t border-white/10 bg-black/15 p-5" aria-hidden="true">
      <div className="grid h-full grid-cols-[1fr_8rem] gap-4">
        <div className="rounded-[10px] border border-white/10 bg-white/[0.035] p-4"><div className="flex items-center justify-between text-[11px] text-white/52"><span>{labels.grow[0]}</span><span className="rounded-full bg-emerald-300/12 px-2 py-1 text-emerald-200">82%</span></div><div className="mt-5 h-1.5 rounded-full bg-white/8"><div className="h-full w-[82%] rounded-full bg-emerald-300" /></div><div className="mt-5 space-y-2">{labels.grow.slice(1).map((label) => <div key={label} className="flex items-center gap-2 rounded border border-white/8 px-2.5 py-2 text-[10px] text-white/55"><span className="size-1.5 rounded-full bg-emerald-300" />{label}</div>)}</div></div>
        <div className="space-y-2">{["XP", "7 DAYS", "#12"].map((label, itemIndex) => <div key={label} className="flex h-[calc((100%-1rem)/3)] items-center justify-center rounded-[9px] border border-white/10 bg-white/[0.035] font-mono text-[10px] text-white/42">{String(itemIndex + 1).padStart(2, "0")} · {label}</div>)}</div>
      </div>
    </div>
  );
}

export default function StoryScroller() {
  const locale = getMarketingLocale(useLocale());
  const content = marketingContent[locale].story;
  const [active, setActive] = useState(0);
  const stickyPanelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const reduceMotion = useReducedMotion();
  const item = content.items[active];

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveCard = () => {
      animationFrame = 0;

      const stickyPanel = stickyPanelRef.current;
      const isDesktop = window.innerWidth >= 1024;
      const panelRect = stickyPanel?.getBoundingClientRect();
      const focusLine =
        isDesktop && panelRect
          ? Math.min(
              window.innerHeight * 0.72,
              Math.max(window.innerHeight * 0.28, panelRect.top + panelRect.height / 2),
            )
          : window.innerHeight / 2;

      let nextActive = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - focusLine);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextActive = index;
        }
      });

      setActive((current) => (current === nextActive ? current : nextActive));
    };

    const scheduleUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateActiveCard);
    };

    updateActiveCard();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative isolate overflow-x-clip bg-[#0d0e10] py-24 text-white sm:py-32">
      <ConstellationField />
      <div className="relative z-10 px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-3xl"><p className="text-sm font-medium text-white/55">{content.eyebrow}</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{content.title}</h2><p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/58 sm:text-lg">{content.description}</p></div>
        <div className="mt-16 grid gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(26rem,0.98fr)] lg:items-start lg:gap-8">
          <div ref={stickyPanelRef} className="top-24 overflow-hidden rounded-[20px] border border-white/10 bg-[#111315]/94 shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur-sm lg:sticky lg:h-[39rem]">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5"><BrandMark className="text-white [&_img]:invert" /><span className="font-mono text-xs text-white/42">0{active + 1} / {String(content.items.length).padStart(2, "0")}</span></div>
            <div className="relative flex min-h-[33rem] flex-col justify-center overflow-hidden p-7 sm:p-10 lg:h-[calc(39rem-65px)] lg:min-h-0 lg:p-12">
              <div className="sx-story-grid absolute inset-0" aria-hidden="true" /><SparkleField className="opacity-85" />
              <AnimatePresence mode="wait" initial={false}><motion.div key={item.label} initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={reduceMotion ? undefined : { opacity: 0, y: -14, filter: "blur(5px)" }} transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }} className="relative z-10"><p className="text-sm font-medium text-white/48">{content.panelEyebrow}</p><p className="mt-5 sx-gradient-text-dark text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">{item.label}</p><h3 className="mt-8 max-w-xl text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{item.title}</h3><p className="mt-5 max-w-lg text-pretty text-base leading-7 text-white/58">{item.description}</p></motion.div></AnimatePresence>
              <div className="absolute inset-x-7 bottom-6 z-10 flex gap-2 sm:inset-x-10 lg:inset-x-12">{content.items.map((storyItem, index) => <span key={storyItem.label} className="h-0.5 flex-1 overflow-hidden bg-white/10"><motion.span className="block h-full bg-white/70" animate={{ width: index <= active ? "100%" : "0%" }} transition={{ duration: reduceMotion ? 0 : 0.5 }} /></span>)}</div>
            </div>
          </div>
          <div className="space-y-5">
            {content.items.map((storyItem, index) => (
              <motion.article
                key={storyItem.label}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.25 }}
                className="flex min-h-[28rem] flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#16181b]/88 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-colors hover:bg-[#1b1d20]/92 lg:min-h-[31rem]"
              >
                <div className="flex items-center justify-between p-7 pb-5 sm:p-9 sm:pb-6"><span className="flex size-9 items-center justify-center rounded-full border border-white/14 bg-white/5 text-sm font-medium">{index + 1}</span><ArrowUpRight className="size-5 text-white/35" /></div>
                <div className="px-7 pb-7 sm:px-9 sm:pb-9"><p className="text-sm font-medium text-white/45">{storyItem.label}</p><h3 className="mt-3 max-w-lg text-balance text-3xl font-semibold tracking-[-0.035em]">{storyItem.metric}</h3><div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-5 text-sm leading-6 text-white/58"><Check className="mt-1 size-4 shrink-0 text-emerald-300" />{storyItem.meta}</div></div>
                <div className="mt-auto"><StoryCardVisual index={index} locale={locale} /></div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
