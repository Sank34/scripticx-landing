"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useLocale } from "next-intl";
import { type RefObject, useRef, useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { BracketWaveField } from "@/components/events/BracketWaveField";
import { getMarketingLocale, marketingContent } from "@/lib/marketing-content";

const workshopRoot = "/events/workshops/programming-1-3-july-26";
const desktopLayoutQuery = "(min-width: 1024px)";

function subscribeDesktopLayout(onChange: () => void) {
  const query = window.matchMedia(desktopLayoutQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getDesktopLayoutSnapshot() {
  return window.matchMedia(desktopLayoutQuery).matches;
}

function getServerMotionSnapshot() {
  return false;
}

type HeroPhoto = {
  src: string;
  className: string;
  speed: number;
  alt: string;
  mobile?: { width: number; height: number; className: string };
};

const photos: readonly HeroPhoto[] = [
  { src: `${workshopRoot}/IMG_1029.jpg`, className: "left-[1%] top-10 h-40 w-60 rotate-3 lg:left-[2%] lg:top-14 lg:h-44 lg:w-64", speed: -112, alt: "A ScripticX mentor explaining a programming activity to workshop participants" },
  { src: `${workshopRoot}/IMG_1119.jpg`, className: "right-[1%] top-16 h-40 w-56 -rotate-4 lg:right-[2%] lg:top-20 lg:h-44 lg:w-64", speed: -96, alt: "A mentor helping a learner work through code on a laptop" },
  { src: `${workshopRoot}/IMG_1126.jpg`, className: "left-[1%] top-[18rem] h-36 w-52 -rotate-3 lg:left-[2%] lg:top-[19rem] lg:h-40 lg:w-60", speed: -58, alt: "Learners programming a small robot during a ScripticX workshop" },
  { src: `${workshopRoot}/IMG_1153.jpg`, className: "right-[1%] top-[17rem] h-48 w-32 rotate-4 lg:right-[3%] lg:top-[18rem] lg:h-56 lg:w-36", speed: -24, alt: "A ScripticX workshop presenter speaking to participants" },
  { src: `${workshopRoot}/IMG_1137.jpg`, className: "left-[2%] top-[31rem] h-40 w-56 -rotate-6 lg:left-[4%] lg:top-[34rem] lg:h-52 lg:w-72", speed: -78, alt: "Children programming with a robot at a ScripticX workshop", mobile: { width: 6000, height: 4000, className: "-rotate-2" } },
  { src: `${workshopRoot}/IMG_1094.jpg`, className: "right-[2%] top-[28rem] h-44 w-64 rotate-5 lg:right-[3%] lg:top-[31rem] lg:h-56 lg:w-80", speed: -42, alt: "ScripticX workshop instructor and projected platform", mobile: { width: 3744, height: 2496, className: "rotate-2" } },
  { src: `${workshopRoot}/IMG_1174.jpg`, className: "bottom-28 left-[7%] h-40 w-60 rotate-3 lg:bottom-36 lg:left-[11%] lg:h-52 lg:w-80", speed: 54, alt: "ScripticX workshop participants receiving certificates", mobile: { width: 6000, height: 4000, className: "rotate-2" } },
  { src: `${workshopRoot}/IMG_1003.jpg`, className: "bottom-20 right-[7%] h-44 w-32 -rotate-5 lg:bottom-28 lg:right-[12%] lg:h-56 lg:w-40", speed: 82, alt: "A programming lesson displayed on a laptop", mobile: { width: 3307, height: 4961, className: "w-[48%] -rotate-3" } },
] as const;

function FloatingPhoto({
  photo,
  scrollYProgress,
  reduceMotion,
  constraintsRef,
  isActive,
  onActivate,
}: {
  photo: HeroPhoto;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduceMotion: boolean | null;
  constraintsRef: RefObject<HTMLDivElement | null>;
  isActive: boolean;
  onActivate: () => void;
}) {
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : photo.speed]);

  return (
    <motion.figure
      style={{ y: photoY, zIndex: isActive ? 30 : undefined }}
      className={`absolute hidden lg:block ${photo.className}`}
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.08}
        dragMomentum={false}
        onPointerDown={onActivate}
        whileHover={reduceMotion ? undefined : { scale: 1.035 }}
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
        whileDrag={reduceMotion ? undefined : { boxShadow: "0 30px 90px rgba(15, 23, 42, 0.24)" }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="relative size-full cursor-grab select-none overflow-hidden rounded-[14px] border bg-card p-1.5 shadow-[0_20px_60px_rgba(15,23,42,0.16)] active:cursor-grabbing"
      >
        <div className="relative size-full overflow-hidden rounded-[9px]">
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 260px, 340px" draggable={false} className="pointer-events-none object-cover" />
        </div>
      </motion.div>
    </motion.figure>
  );
}

export default function ParallaxHero() {
  const locale = getMarketingLocale(useLocale());
  const content = marketingContent[locale].hero;
  const target = useRef<HTMLElement>(null);
  const collage = useRef<HTMLDivElement>(null);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const desktopLayout = useSyncExternalStore(subscribeDesktopLayout, getDesktopLayoutSnapshot, getServerMotionSnapshot);
  const parallaxEnabled = desktopLayout && !reduceMotion;
  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end start"] });
  const laptopY = useTransform(scrollYProgress, [0, 1], [0, parallaxEnabled ? 150 : 0]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.75], [1, parallaxEnabled ? 0.92 : 1]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.48], [1, parallaxEnabled ? 0.12 : 1]);

  return (
    <section
      ref={target}
      className="relative isolate overflow-hidden border-b pt-16 lg:min-h-[89rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,.9)_28%,rgba(0,0,0,.45)_56%,transparent_86%)]"
        aria-hidden="true"
      >
        <BracketWaveField theme="light" />
      </div>

      <motion.div
        style={{ opacity: introOpacity }}
        className="relative z-20 mx-auto max-w-5xl px-4 pt-20 text-center sm:px-6 sm:pt-24 lg:px-8 lg:pt-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm font-medium text-muted-foreground"
        >
          {content.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[6rem]"
        >
          {content.title}{" "}
          <span className="sx-gradient-text">{content.accent}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg"
        >
          {content.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Button size="lg" asChild>
            <Link href="#company">
              {content.primary}
              <ArrowDown />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://platform.scripticx.org">
              {content.secondary}
              <ArrowUpRight />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <div ref={collage} className="relative z-10 mx-auto mt-10 max-w-2xl px-3 pb-12 sm:mt-12 sm:px-6 sm:pb-16 lg:absolute lg:inset-x-0 lg:top-[42rem] lg:mt-0 lg:h-[51rem] lg:max-w-[100rem] lg:p-0">
        {/* Mount draggable photos only after the desktop layout can be measured. */}
        {desktopLayout ? photos.map((photo) => (
          <FloatingPhoto
            key={photo.src}
            photo={photo}
            scrollYProgress={scrollYProgress}
            reduceMotion={!parallaxEnabled}
            constraintsRef={collage}
            isActive={activePhoto === photo.src}
            onActivate={() => setActivePhoto(photo.src)}
          />
        )) : null}

        <motion.div
          style={{ y: laptopY, scale: laptopScale }}
          className="relative mx-auto w-full max-w-[calc((100svh-6rem)*1.65)] lg:absolute lg:inset-x-0 lg:top-0 lg:w-[66%] lg:max-w-[76rem]"
        >
          <div className="absolute inset-x-[12%] bottom-[2%] -z-10 h-[16%] rounded-full bg-black/25 blur-3xl" aria-hidden="true" />
          {/* Serve the original transparent PNG: the optimized variant rendered blank in Arc. */}
          <Image
            src="/scripticx-mac-mockup-new.png"
            alt={content.visualLabel}
            width={3304}
            height={1999}
            preload
            unoptimized
            sizes="(max-width: 767px) calc(100vw - 24px), (max-width: 1023px) 624px, 66vw"
            className="h-auto w-full drop-shadow-[0_14px_24px_rgba(15,23,42,0.14)] lg:drop-shadow-[0_36px_50px_rgba(15,23,42,0.2)]"
          />
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 items-center justify-items-center gap-5 px-3 sm:mt-10 sm:gap-7 lg:hidden">
          {photos.map((photo) => photo.mobile ? (
            <motion.figure
              key={photo.src}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <div className={`mx-auto rounded-xl border bg-card p-1 shadow-[0_8px_22px_rgba(15,23,42,0.1)] ${photo.mobile.className}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.mobile.width}
                  height={photo.mobile.height}
                  sizes="(max-width: 639px) 44vw, 240px"
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </motion.figure>
          ) : null)}
        </div>
      </div>

    </section>
  );
}
