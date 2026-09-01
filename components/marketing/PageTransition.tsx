"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const ease = [0.22, 1, 0.36, 1] as const;
const knowledgeRouteRoots = ["/knowledge", "/docs", "/legal", "/trust"];

function isKnowledgeRoute(pathname: string) {
  return knowledgeRouteRoots.some(
    (root) => pathname === root || pathname.startsWith(`${root}/`)
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  if (isKnowledgeRoute(pathname)) {
    return <div className="min-h-full">{children}</div>;
  }

  return (
    <motion.div
      key={pathname}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.42, ease }}
      className="min-h-full"
    >
      {children}
    </motion.div>
  );
}
