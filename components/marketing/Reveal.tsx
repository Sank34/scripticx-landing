"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const subscribeToBrowserFeatures = () => () => undefined;

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 22,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}) {
  const reduceMotion = useReducedMotion();
  const supportsInView = useSyncExternalStore(
    subscribeToBrowserFeatures,
    () => "IntersectionObserver" in window,
    () => true,
  );

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: distance }}
      animate={!supportsInView ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{ duration: reduceMotion ? 0 : 0.62, delay, ease }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
