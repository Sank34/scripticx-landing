"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useLocale } from "next-intl";
import { type RefObject, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { getMarketingLocale, marketingContent } from "@/lib/marketing-content";

const workshopRoot = "/events/workshops/programming-1-3-july-26";

type HeroPhoto = {
  src: string;
  className: string;
  speed: number;
  alt: string;
  desktopOnly?: boolean;
};

const photos: readonly HeroPhoto[] = [
  { src: `${workshopRoot}/IMG_1029.jpg`, className: "left-[1%] top-10 h-40 w-60 rotate-3 lg:left-[2%] lg:top-14 lg:h-44 lg:w-64", speed: -112, alt: "A ScripticX mentor explaining a programming activity to workshop participants", desktopOnly: true },
  { src: `${workshopRoot}/IMG_1119.jpg`, className: "right-[1%] top-16 h-40 w-56 -rotate-4 lg:right-[2%] lg:top-20 lg:h-44 lg:w-64", speed: -96, alt: "A mentor helping a learner work through code on a laptop", desktopOnly: true },
  { src: `${workshopRoot}/IMG_1126.jpg`, className: "left-[1%] top-[18rem] h-36 w-52 -rotate-3 lg:left-[2%] lg:top-[19rem] lg:h-40 lg:w-60", speed: -58, alt: "Learners programming a small robot during a ScripticX workshop", desktopOnly: true },
  { src: `${workshopRoot}/IMG_1153.jpg`, className: "right-[1%] top-[17rem] h-48 w-32 rotate-4 lg:right-[3%] lg:top-[18rem] lg:h-56 lg:w-36", speed: -24, alt: "A ScripticX workshop presenter speaking to participants", desktopOnly: true },
  { src: `${workshopRoot}/IMG_1137.jpg`, className: "left-[2%] top-[31rem] h-40 w-56 -rotate-6 lg:left-[4%] lg:top-[34rem] lg:h-52 lg:w-72", speed: -78, alt: "Children programming with a robot at a ScripticX workshop" },
  { src: `${workshopRoot}/IMG_1094.jpg`, className: "right-[2%] top-[28rem] h-44 w-64 rotate-5 lg:right-[3%] lg:top-[31rem] lg:h-56 lg:w-80", speed: -42, alt: "ScripticX workshop instructor and projected platform" },
  { src: `${workshopRoot}/IMG_1174.jpg`, className: "bottom-28 left-[7%] h-40 w-60 rotate-3 lg:bottom-36 lg:left-[11%] lg:h-52 lg:w-80", speed: 54, alt: "ScripticX workshop participants receiving certificates" },
  { src: `${workshopRoot}/IMG_1003.jpg`, className: "bottom-20 right-[7%] h-44 w-32 -rotate-5 lg:bottom-28 lg:right-[12%] lg:h-56 lg:w-40", speed: 82, alt: "A programming lesson displayed on a laptop" },
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
      className={`absolute hidden ${photo.desktopOnly ? "lg:block" : "sm:block"} ${photo.className}`}
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
  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end start"] });
  const laptopY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 150]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.75], [1, reduceMotion ? 1 : 0.92]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.48], [1, reduceMotion ? 1 : 0.12]);

  return (
    <section
      ref={target}
      className="relative isolate min-h-[67rem] overflow-hidden border-b pt-16 sm:min-h-[80rem] lg:min-h-[89rem]"
    >
      <div className="sx-grid-fade absolute inset-0 -z-20" aria-hidden="true" />
      <div className="sx-hero-aura absolute inset-x-0 top-0 -z-10 h-[58rem]" aria-hidden="true" />

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

      <div ref={collage} className="relative z-10 mx-auto mt-12 h-[29rem] max-w-[100rem] sm:absolute sm:inset-x-0 sm:top-[39rem] sm:mt-0 sm:h-[51rem] lg:top-[42rem]">
        {photos.map((photo) => (
          <FloatingPhoto
            key={photo.src}
            photo={photo}
            scrollYProgress={scrollYProgress}
            reduceMotion={reduceMotion}
            constraintsRef={collage}
            isActive={activePhoto === photo.src}
            onActivate={() => setActivePhoto(photo.src)}
          />
        ))}

        <motion.div
          style={{ y: laptopY, scale: laptopScale }}
          className="absolute inset-x-[-5rem] top-0 mx-auto w-[calc(100%+10rem)] max-w-[76rem] sm:inset-x-0 sm:top-16 sm:w-[78%] lg:top-0 lg:w-[66%]"
        >
          <div className="absolute inset-x-[12%] bottom-[2%] -z-10 h-[16%] rounded-full bg-black/25 blur-3xl" aria-hidden="true" />
          <Image
            src="/scripticx-mac-mockup-new.png"
            alt={content.visualLabel}
            width={3304}
            height={1999}
            priority
            className="h-auto w-full drop-shadow-[0_36px_50px_rgba(15,23,42,0.2)]"
          />
        </motion.div>
      </div>

    </section>
  );
}
