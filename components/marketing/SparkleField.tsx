"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const sparkles = [
  { left: "7%", top: "16%", size: 9, delay: 0.1, duration: 4.6 },
  { left: "23%", top: "68%", size: 5, delay: 1.1, duration: 5.2 },
  { left: "42%", top: "26%", size: 6, delay: 0.6, duration: 4.2 },
  { left: "61%", top: "74%", size: 8, delay: 1.7, duration: 5.8 },
  { left: "78%", top: "19%", size: 5, delay: 2.1, duration: 4.8 },
  { left: "91%", top: "55%", size: 7, delay: 0.9, duration: 5.4 },
] as const;

export function SparkleField({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {sparkles.map((sparkle, index) => (
        <motion.span
          key={`${sparkle.left}-${sparkle.top}`}
          className="absolute block text-white/55"
          style={{ left: sparkle.left, top: sparkle.top, width: sparkle.size, height: sparkle.size }}
          animate={reduceMotion ? { opacity: 0.35 } : { opacity: [0.08, 0.75, 0.12], scale: [0.65, 1.15, 0.72], rotate: [0, 18, 40], y: [3, -4, 2] }}
          transition={{ duration: sparkle.duration, delay: sparkle.delay, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 12 12" fill="none" className="size-full">
            <path d="M6 0.8C6.25 4.1 7.9 5.75 11.2 6C7.9 6.25 6.25 7.9 6 11.2C5.75 7.9 4.1 6.25 0.8 6C4.1 5.75 5.75 4.1 6 0.8Z" fill="currentColor" />
          </svg>
          <span className="sr-only">{index + 1}</span>
        </motion.span>
      ))}
    </div>
  );
}
