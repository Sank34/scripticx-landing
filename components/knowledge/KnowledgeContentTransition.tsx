"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

export function KnowledgeContentTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.4, ease }}
      className="min-h-full"
    >
      {children}
    </motion.div>
  );
}
