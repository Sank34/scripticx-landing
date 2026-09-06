"use client";

import { AnimatePresence, motion, type PanInfo, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  Quote,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Testimonial = {
  user: string;
  text: string;
};

const testimonials: Testimonial[] = [
  { user: "Eric Littau", text: "I always wished for a platform where i could easily learn CS." },
  { user: "Catalina Nedelea", text: "The lessons are clear and easy to understand!" },
  { user: "Maria Blagoci", text: "The interactive problems make learning more engaging." },
  { user: "Maia Pricop", text: "The UI is pretty, i love it :)" },
  { user: "Andreea Bobotan", text: "I really liked the overall experience." },
  { user: "Vlad Ene", text: "Easy to use and very user-friendly platform." },
  { user: "Dragos Gatan", text: "Excelent for anyone starting their coding journey." },
  { user: "Serban Daria", text: "Needs a mascot, but apart from that i loved the experience." },
  {
    user: "@mitzi",
    text: "Cea mai bună platformă pentru niște copii care nu aveau habar ce înseamnă input sau vreo comandă. W platformă!",
  },
  { user: "@ardeicususan", text: "O platformă foarte interesantă și foarte ușor de utilizat :)))" },
  { user: "@odaicurares", text: "Îmi place foarte mult!" },
  { user: "@alex", text: "Este o platformă foarte interesantă." },
  { user: "@c1lin", text: "Mie mi-a plăcut și îmi place acest site. Este unul foarte folositor." },
  { user: "@alex_cojocariu_14", text: "Foarte bun!" },
  { user: "@razvansusanu", text: "Îmi place." },
  { user: "@christiangheo", text: "Foarte bună platforma, probabil o voi folosi și în viitor." },
  { user: "@erick", text: "Foarte bun, îmi place!" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function wrapIndex(index: number) {
  return (index + testimonials.length) % testimonials.length;
}

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [manualPaused, setManualPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);

  const selectReview = useCallback((nextIndex: number, movement = 1) => {
    setDirection(movement);
    setActive(wrapIndex(nextIndex));
  }, []);

  const showPrevious = useCallback(() => {
    setDirection(-1);
    setActive((current) => wrapIndex(current - 1));
  }, []);

  const showNext = useCallback(() => {
    setDirection(1);
    setActive((current) => wrapIndex(current + 1));
  }, []);

  useEffect(() => {
    if (reduceMotion || manualPaused || interactionPaused) return;

    const interval = window.setInterval(showNext, 6500);
    return () => window.clearInterval(interval);
  }, [interactionPaused, manualPaused, reduceMotion, showNext]);

  function handleDragEnd(_: PointerEvent, info: PanInfo) {
    if (Math.abs(info.offset.x) < 55 && Math.abs(info.velocity.x) < 450) return;
    if (info.offset.x < 0 || info.velocity.x < -450) showNext();
    else showPrevious();
  }

  const activeReview = testimonials[active];
  const upcomingReviews = [1, 2, 3].map((offset) => {
    const index = wrapIndex(active + offset);
    return { ...testimonials[index], index };
  });
  const quoteSize = activeReview.text.length > 105
    ? "text-3xl sm:text-4xl lg:text-[2.8rem]"
    : "text-4xl sm:text-5xl lg:text-[3.35rem]";

  return (
    <section
      id="reviews"
      className="relative isolate overflow-hidden border-b bg-[#0d0e10] py-20 text-white sm:py-28"
    >
      <div className="sx-story-grid pointer-events-none absolute inset-0 -z-20 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-36 top-1/4 -z-10 size-[30rem] rounded-full bg-emerald-300/8 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-48 bottom-0 -z-10 size-[34rem] rounded-full bg-violet-300/8 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-7 border-b border-white/10 pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:pb-12">
          <div>
            <p className="text-sm font-medium text-white/45">{t("eyebrow")}</p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              {t("title")}
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-pretty text-base leading-7 text-white/55 sm:text-lg">
              {t("description")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} distance={18}>
          <div
            className="relative mt-12 overflow-hidden rounded-[22px] border border-white/12 bg-[#111315]/92 shadow-[0_35px_110px_rgba(0,0,0,0.35)]"
            role="region"
            aria-roledescription="carousel"
            aria-label={t("carouselLabel")}
            tabIndex={0}
            onMouseEnter={() => setInteractionPaused(true)}
            onMouseLeave={() => setInteractionPaused(false)}
            onFocusCapture={() => setInteractionPaused(true)}
            onBlurCapture={() => setInteractionPaused(false)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") showPrevious();
              if (event.key === "ArrowRight") showNext();
            }}
          >
            <div className="flex gap-1.5 border-b border-white/10 px-5 py-5 sm:px-8">
              {testimonials.map((review, index) => (
                <button
                  key={`${review.user}-${index}`}
                  type="button"
                  className="group relative h-1.5 min-w-1 flex-1 overflow-hidden rounded-full bg-white/10 outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111315]"
                  onClick={() => selectReview(index, index >= active ? 1 : -1)}
                  aria-label={t("goToReview", { number: index + 1, user: review.user })}
                  aria-current={index === active ? "step" : undefined}
                >
                  {index === active && (
                    <motion.span
                      layoutId="active-testimonial-progress"
                      className="absolute inset-0 rounded-full bg-emerald-200"
                      transition={{ duration: reduceMotion ? 0 : 0.38, ease }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1.25fr_.75fr]">
              <div className="relative flex min-h-[31rem] flex-col border-b border-white/10 p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-12">
                <div className="relative my-auto py-6 sm:py-10">
                  <Quote className="mb-7 size-9 text-emerald-200/65" fill="currentColor" strokeWidth={1.4} aria-hidden="true" />
                  <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                      key={`${activeReview.user}-${active}`}
                      custom={direction}
                      initial={reduceMotion ? false : { opacity: 0, x: direction * 42, filter: "blur(7px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={reduceMotion ? undefined : { opacity: 0, x: direction * -32, filter: "blur(5px)" }}
                      transition={{ duration: reduceMotion ? 0 : 0.42, ease }}
                      drag={reduceMotion ? false : "x"}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.14}
                      onDragEnd={handleDragEnd}
                      className="touch-pan-y cursor-grab select-none active:cursor-grabbing"
                      aria-live="polite"
                      aria-label={t("reviewPosition", {
                        number: active + 1,
                        count: testimonials.length,
                      })}
                    >
                      <blockquote className={cn("max-w-4xl text-pretty font-medium leading-[1.08] tracking-[-0.04em]", quoteSize)}>
                        {activeReview.text}
                      </blockquote>
                      <div className="mt-9">
                        <p className="text-sm font-medium text-white/82">{activeReview.user}</p>
                        <p className="mt-0.5 text-xs text-white/35">{t("communityMember")}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    onClick={() => setManualPaused((paused) => !paused)}
                    aria-label={manualPaused ? t("play") : t("pause")}
                  >
                    {manualPaused ? <Play /> : <Pause />}
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                      onClick={showPrevious}
                      aria-label={t("previous")}
                    >
                      <ArrowLeft />
                    </Button>
                    <Button
                      type="button"
                      size="icon"
                      variant="secondary"
                      className="rounded-full"
                      onClick={showNext}
                      aria-label={t("next")}
                    >
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>

              <aside className="bg-white/[0.025] p-5 sm:p-7 lg:p-8" aria-label={t("upNext")}>
                <div className="border-b border-white/10 pb-5">
                  <p className="text-sm font-medium text-white/72">{t("upNext")}</p>
                </div>
                <div className="mt-4 space-y-3">
                  <AnimatePresence initial={false} mode="popLayout">
                    {upcomingReviews.map((review, listIndex) => (
                      <motion.button
                        layout
                        key={`${review.user}-${review.index}`}
                        type="button"
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                        transition={{ duration: reduceMotion ? 0 : 0.3, delay: listIndex * 0.035, ease }}
                        onClick={() => selectReview(review.index, 1)}
                        className="group w-full rounded-[14px] border border-white/10 bg-white/[0.035] p-4 text-left outline-none transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-emerald-200"
                      >
                        <span className="block min-w-0">
                          <span className="block text-xs font-medium text-white/75">{review.user}</span>
                          <span className="mt-2 line-clamp-3 block text-xs leading-5 text-white/38 transition-colors group-hover:text-white/52">
                            {review.text}
                          </span>
                        </span>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </div>
                <p className="mt-5 border-t border-white/10 pt-5 text-xs leading-5 text-white/30">
                  {t("interactionHint")}
                </p>
              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
