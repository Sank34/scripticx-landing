"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { BookOpen, Check, Code2, School, TrendingUp, Users } from "lucide-react";

const spring = { stiffness: 95, damping: 24, mass: 0.75 };
const ease = [0.22, 1, 0.36, 1] as const;

export function PlatformHeroVisual() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, spring);
  const smoothY = useSpring(pointerY, spring);
  const rotateX = useTransform(smoothY, [-1, 1], [3.5, -3.5]);
  const rotateY = useTransform(smoothX, [-1, 1], [-4.5, 4.5]);
  const farX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const farY = useTransform(smoothY, [-1, 1], [-6, 6]);
  const nearX = useTransform(smoothX, [-1, 1], [-16, 16]);
  const nearY = useTransform(smoothY, [-1, 1], [-11, 11]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const floating = (distance: number, duration: number, delay = 0) =>
    reduceMotion
      ? undefined
      : {
          y: [0, -distance, 0],
          rotateZ: [0, distance * 0.08, 0],
          transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <div
      className="relative flex h-full min-h-[31rem] touch-pan-y items-center justify-center overflow-hidden bg-[#f1f3f2] p-3 text-[#171717] sm:min-h-[38rem] sm:p-5 lg:min-h-full"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      role="img"
      aria-label="The ScripticX Platform workspace, with learning, coding, class and progress tools connected around a laptop"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="sx-dot-grid absolute inset-0 opacity-[0.38] [mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]" />
        <div className="absolute inset-x-[8%] top-[8%] h-[72%] rounded-[50%] border border-black/[0.055] [transform:rotate(-8deg)]" />
        <div className="absolute left-[14%] top-[19%] size-44 rounded-full bg-emerald-300/15 blur-3xl sm:size-64" />
        <div className="absolute bottom-[14%] right-[4%] size-44 rounded-full bg-sky-200/20 blur-3xl sm:size-72" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-white/95 via-white/45 to-transparent" />
      </div>

      <motion.div
        aria-hidden="true"
        className="relative h-full min-h-[29rem] w-full max-w-[62rem] [perspective:1100px] sm:min-h-[36rem]"
        style={{ x: farX, y: farY }}
      >
        <svg className="pointer-events-none absolute inset-[8%] hidden size-[84%] overflow-visible sm:block" viewBox="0 0 800 520" fill="none">
          <motion.path
            d="M152 118C252 112 264 194 350 220"
            stroke="rgba(23,23,23,.18)"
            strokeWidth="1.5"
            strokeDasharray="4 7"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.25, ease }}
          />
          <motion.path
            d="M650 102C568 108 560 180 472 218"
            stroke="rgba(23,23,23,.18)"
            strokeWidth="1.5"
            strokeDasharray="4 7"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.4, ease }}
          />
          <motion.path
            d="M164 418C248 390 252 330 355 294"
            stroke="rgba(23,23,23,.18)"
            strokeWidth="1.5"
            strokeDasharray="4 7"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.55, ease }}
          />
          <motion.path
            d="M650 420C570 388 564 332 470 296"
            stroke="rgba(23,23,23,.18)"
            strokeWidth="1.5"
            strokeDasharray="4 7"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.7, ease }}
          />
        </svg>

        <motion.div
          className="absolute inset-x-[4%] top-[27%] z-10 sm:inset-x-[10%] sm:top-[25%] lg:inset-x-[7%]"
          initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.93 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.08, ease }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-x-[12%] bottom-[2%] h-[18%] rounded-full bg-black/18 blur-2xl" />
          <Image
            src="/scripticx-mac-mockup-new.png"
            alt=""
            width={3304}
            height={1999}
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="relative h-auto w-full drop-shadow-[0_24px_32px_rgba(15,23,42,.16)]"
          />
        </motion.div>

        <motion.div
          className="absolute left-[2%] top-[5%] z-30 w-[58%] max-w-[20rem] sm:left-[4%] sm:top-[8%] sm:w-[43%]"
          initial={reduceMotion ? false : { opacity: 0, x: -22, y: 14, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, delay: 0.35, ease }}
          style={{ x: nearX, y: nearY }}
        >
          <motion.div animate={floating(7, 6.6)} className="overflow-hidden rounded-[14px] border border-black/10 bg-[#111315]/95 text-white shadow-[0_20px_55px_rgba(15,23,42,.2)] backdrop-blur-xl">
            <div className="flex h-8 items-center justify-between border-b border-white/10 px-3 text-[9px] text-white/45">
              <span className="flex items-center gap-1.5"><Code2 className="size-3 text-emerald-300" />main.py</span>
              <span>Python</span>
            </div>
            <div className="space-y-1 px-3 py-3 font-mono text-[9px] leading-4 text-white/72 sm:px-4 sm:text-[10px]">
              <p><span className="mr-2 text-white/25">1</span><span className="text-fuchsia-300">def</span> <span className="text-sky-300">learn</span>(topic):</p>
              <p><span className="mr-2 text-white/25">2</span>&nbsp;&nbsp;practice(topic)</p>
              <p><span className="mr-2 text-white/25">3</span>&nbsp;&nbsp;<span className="text-fuchsia-300">return</span> improve()</p>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-3 py-2 text-[8px] text-white/42">
              <span>READY</span><span className="text-emerald-300">All tests passed</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute right-[2%] top-[11%] z-20 hidden w-[31%] max-w-[14rem] sm:block"
          initial={reduceMotion ? false : { opacity: 0, x: 20, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, delay: 0.48, ease }}
          style={{ x: nearX, y: farY }}
        >
          <motion.div animate={floating(6, 7.2, 0.55)} className="rounded-[14px] border border-black/[0.09] bg-white/88 p-3.5 shadow-[0_18px_45px_rgba(15,23,42,.13)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="flex size-8 items-center justify-center rounded-[9px] bg-black text-white"><School className="size-4" /></span>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-medium text-emerald-700">ACTIVE</span>
            </div>
            <p className="mt-4 text-xs font-semibold">Algorithms · Group A</p>
            <p className="mt-1 text-[9px] text-black/42">Informatics · 2026–2027</p>
            <div className="mt-3 flex items-center gap-1.5 border-t border-black/7 pt-3 text-[9px] text-black/48"><Users className="size-3" />14 learners</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-[7%] left-[2%] z-30 hidden w-[30%] max-w-[13.5rem] sm:bottom-[24%] sm:block"
          initial={reduceMotion ? false : { opacity: 0, x: -18, y: 18, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, delay: 0.62, ease }}
          style={{ x: nearX, y: farY }}
        >
          <motion.div animate={floating(5, 7.8, 0.9)} className="rounded-[14px] border border-black/[0.09] bg-white/90 p-3.5 shadow-[0_18px_45px_rgba(15,23,42,.12)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-[9px] font-medium text-black/42"><BookOpen className="size-3.5" />YOUR ROADMAP</div>
            <div className="mt-3 flex items-center justify-between"><p className="text-xs font-semibold">Programming foundations</p><span className="text-[10px] font-medium">68%</span></div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/7"><div className="h-full w-[68%] rounded-full bg-black" /></div>
            <p className="mt-3 flex items-center gap-1.5 text-[9px] text-black/46"><Check className="size-3 text-emerald-600" />4 lessons completed</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-[5%] right-[2%] z-30 w-[42%] max-w-[13.5rem] sm:bottom-[22%] sm:w-[30%]"
          initial={reduceMotion ? false : { opacity: 0, x: 18, y: 18, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, delay: 0.75, ease }}
          style={{ x: nearX, y: nearY }}
        >
          <motion.div animate={floating(6, 6.9, 0.35)} className="rounded-[14px] border border-black/[0.09] bg-white/90 p-3.5 shadow-[0_18px_45px_rgba(15,23,42,.13)] backdrop-blur-xl">
            <div className="flex items-center justify-between"><span className="flex size-8 items-center justify-center rounded-[9px] bg-emerald-50 text-emerald-700"><TrendingUp className="size-4" /></span><span className="font-mono text-[8px] text-black/35">THIS WEEK</span></div>
            <div className="mt-4 grid grid-cols-2 gap-2"><div><p className="text-lg font-semibold">12</p><p className="text-[8px] text-black/42">problems</p></div><div><p className="text-lg font-semibold">86%</p><p className="text-[8px] text-black/42">progress</p></div></div>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}
