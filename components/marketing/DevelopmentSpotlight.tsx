"use client";

import { AnimatePresence, motion, type PanInfo, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  FileText,
  MessageSquareText,
  Rocket,
} from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useCallback, useState } from "react";

import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { getMarketingLocale, marketingContent } from "@/lib/marketing-content";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const dragThreshold = 56;

const carouselPositions = [
  { x: "0%", y: 0, rotate: 0, scale: 1, opacity: 1, blur: 0 },
  { x: "92%", y: 58, rotate: 9, scale: 0.78, opacity: 0.54, blur: 2.5 },
  { x: "0%", y: 132, rotate: 0, scale: 0.62, opacity: 0.2, blur: 7 },
  { x: "-92%", y: 58, rotate: -9, scale: 0.78, opacity: 0.54, blur: 2.5 },
] as const;

const stepIcons = [MessageSquareText, FileText, Code2, Rocket] as const;

function ProcessPreview({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="space-y-3">
        <div className="w-[82%] rounded-[12px] rounded-bl-sm bg-white px-4 py-3">
          <span className="block h-1.5 w-3/4 rounded-full bg-black/75" />
          <span className="mt-2 block h-1.5 w-1/2 rounded-full bg-black/15" />
        </div>
        <div className="ml-auto w-[70%] rounded-[12px] rounded-br-sm border border-white/12 bg-white/6 px-4 py-3">
          <span className="block h-1.5 w-2/3 rounded-full bg-white/65" />
          <span className="mt-2 block h-1.5 w-4/5 rounded-full bg-white/16" />
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="rounded-[14px] bg-white p-4 text-black shadow-[0_16px_45px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-between border-b border-black/10 pb-3">
          <span className="h-2 w-20 rounded-full bg-black/75" />
          <span className="font-mono text-[9px] text-black/35">PDF</span>
        </div>
        <div className="mt-4 space-y-3">
          {[72, 88, 58].map((width, itemIndex) => (
            <div className="flex items-center gap-2.5" key={width}>
              <span className="flex size-4 items-center justify-center rounded-full bg-emerald-100">
                <Check className="size-2.5 text-emerald-700" strokeWidth={2.5} />
              </span>
              <span className="h-1.5 rounded-full bg-black/15" style={{ width: width + "%" }} />
              <span className="sr-only">{itemIndex + 1}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="overflow-hidden rounded-[14px] border border-white/12 bg-[#17191c] shadow-[0_16px_45px_rgba(0,0,0,0.25)]">
        <div className="flex gap-1.5 border-b border-white/8 px-4 py-3">
          <span className="size-1.5 rounded-full bg-white/38" />
          <span className="size-1.5 rounded-full bg-white/22" />
          <span className="size-1.5 rounded-full bg-white/12" />
        </div>
        <div className="space-y-3 px-4 py-5 font-mono text-[10px]">
          <p><span className="text-sky-300">const</span> <span className="text-white/76">idea</span> <span className="text-white/35">=</span> <span className="text-amber-200">build()</span></p>
          <p className="pl-3 text-white/32">review · improve · repeat</p>
          <p><span className="text-violet-300">return</span> <span className="text-emerald-200">ready</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-center justify-center">
      <span className="absolute size-32 rounded-full border border-dashed border-white/18" />
      <span className="absolute size-24 rounded-full border border-white/10" />
      <span className="flex size-16 items-center justify-center rounded-[18px] bg-white text-black shadow-[0_18px_50px_rgba(255,255,255,0.12)]">
        <Rocket className="size-7" strokeWidth={1.7} />
      </span>
      <span className="absolute right-7 top-5 flex size-7 items-center justify-center rounded-full bg-emerald-300 text-black">
        <Check className="size-4" strokeWidth={2.5} />
      </span>
    </div>
  );
}

export default function DevelopmentSpotlight() {
  const locale = getMarketingLocale(useLocale());
  const content = marketingContent[locale].developmentSpotlight;
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeStep = content.steps[active];
  const count = content.steps.length;

  const showPrevious = useCallback(() => {
    setActive((current) => (current - 1 + count) % count);
  }, [count]);

  const showNext = useCallback(() => {
    setActive((current) => (current + 1) % count);
  }, [count]);

  function handleDragEnd(_: PointerEvent, info: PanInfo) {
    if (Math.abs(info.offset.x) < dragThreshold && Math.abs(info.velocity.x) < 450) return;
    if (info.offset.x < 0 || info.velocity.x < -450) showNext();
    else showPrevious();
  }

  return (
    <section className="relative overflow-hidden border-b bg-[#f7f7f5] py-20 sm:py-28">
      <div className="sx-dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium text-black/48">{content.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-black/55 sm:text-lg">
              {content.description}
            </p>
          </header>

          <div
            className="relative mt-12 outline-none sm:mt-16"
            role="region"
            aria-roledescription="carousel"
            aria-label={content.carouselLabel}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") showPrevious();
              if (event.key === "ArrowRight") showNext();
            }}
          >
            <div className="relative h-[26rem] overflow-hidden sm:h-[31rem]">
              <div
                className="pointer-events-none absolute left-1/2 top-28 h-60 w-[54rem] -translate-x-1/2 rounded-[50%] border border-dashed border-black/13 sm:top-36 sm:h-72 sm:w-[72rem]"
                aria-hidden="true"
              />

              {content.steps.map((step, index) => {
                const positionIndex = (index - active + count) % count;
                const position = carouselPositions[positionIndex];
                const isActive = positionIndex === 0;
                const Icon = stepIcons[index];

                return (
                  <motion.button
                    key={step.title}
                    type="button"
                    className={cn(
                      "absolute left-1/2 top-5 -ml-[7.75rem] h-[18.5rem] w-[15.5rem] touch-pan-y select-none overflow-hidden rounded-[26px] border border-white/12 bg-[#0d0e10] p-5 text-left text-white shadow-[0_28px_90px_rgba(15,23,42,0.24)] outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 sm:top-8 sm:-ml-[9.5rem] sm:h-[22rem] sm:w-[19rem] sm:p-6",
                      isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer",
                    )}
                    animate={{
                      x: position.x,
                      y: position.y,
                      rotate: position.rotate,
                      scale: position.scale,
                      opacity: position.opacity,
                      filter: `blur(${position.blur}px)`,
                    }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 260, damping: 29, mass: 0.8 }
                    }
                    style={{ zIndex: 20 - positionIndex }}
                    drag={isActive && !reduceMotion ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.16}
                    onDragEnd={handleDragEnd}
                    onClick={() => {
                      if (!isActive) setActive(index);
                    }}
                    aria-current={isActive ? "step" : undefined}
                    aria-label={`${content.stepLabel} ${index + 1}: ${step.title}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_12%,rgba(167,243,208,0.12),transparent_31%)]" />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-white/38">0{index + 1}</span>
                        <span className="flex size-9 items-center justify-center rounded-[11px] border border-white/10 bg-white/5 text-emerald-200">
                          <Icon className="size-4" strokeWidth={1.8} />
                        </span>
                      </div>

                      <div className="my-auto py-5">
                        <ProcessPreview index={index} />
                      </div>

                      <div className="border-t border-white/10 pt-4">
                        <p className="text-[10px] uppercase tracking-[0.13em] text-white/32">
                          {content.stepLabel} 0{index + 1}
                        </p>
                        <p className="mt-2 text-sm font-medium text-white/78">{step.update}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="relative z-30 mx-auto -mt-3 max-w-3xl px-2 text-center sm:-mt-5">
              <div className="flex items-center justify-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 backdrop-blur hover:bg-white"
                  onClick={showPrevious}
                  aria-label={content.previous}
                >
                  <ArrowLeft />
                </Button>
                <span className="min-w-20 font-mono text-xs text-black/38">
                  0{active + 1} / 0{count}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 backdrop-blur hover:bg-white"
                  onClick={showNext}
                  aria-label={content.next}
                >
                  <ArrowRight />
                </Button>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeStep.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8, filter: "blur(3px)" }}
                  transition={{ duration: reduceMotion ? 0 : 0.32, ease }}
                  className="mt-7 min-h-[21rem] sm:min-h-[15rem]"
                >
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl">
                    {activeStep.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-6 text-black/54 sm:text-base sm:leading-7">
                    {activeStep.description}
                  </p>
                  <div className="mt-6 grid gap-2 sm:grid-cols-3">
                    {activeStep.details.map((detail, index) => (
                      <div
                        key={detail}
                        className="rounded-[14px] border border-black/10 bg-white/65 px-4 py-3 text-left shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-sm"
                      >
                        <span className="font-mono text-[10px] text-black/32">
                          0{index + 1}
                        </span>
                        <p className="mt-1.5 text-sm font-medium text-black/68">{detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-5 border-t border-black/10 pt-7 text-center sm:flex-row sm:text-left">
              <div>
                <p className="max-w-xl text-sm leading-6 text-black/45">{content.portalNote}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button asChild>
                  <Link href="https://platform.scripticx.org/contact">
                    {content.primary}
                    <ArrowUpRight />
                  </Link>
                </Button>
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="/development">{content.secondary}</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
