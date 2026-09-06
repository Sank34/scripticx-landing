"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

/** Keep article navigation quick, without delaying anchors or modified clicks. */
export function BlogTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    let leaving = false;
    let disposed = false;
    let animation: Animation | undefined;
    let recovery: ReturnType<typeof setTimeout> | undefined;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement) || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self")) return;
      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      if (!root.current?.animate) return;

      event.preventDefault();
      if (leaving) return;
      leaving = true;
      animation = root.current.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 140,
        easing: "ease-out",
        fill: "forwards",
      });
      void animation.finished.then(() => {
        if (disposed) return;
        router.push(`${url.pathname}${url.search}${url.hash}`);
        // Slow or failed navigation must never leave the current article hidden.
        recovery = setTimeout(() => {
          animation?.cancel();
          leaving = false;
        }, 800);
      }).catch(() => { /* Unmounting cancels the animation. */ });
    };

    document.addEventListener("click", onClick, true);
    return () => {
      disposed = true;
      document.removeEventListener("click", onClick, true);
      clearTimeout(recovery);
      animation?.cancel();
    };
  }, [pathname, reduceMotion, router]);

  return (
    <motion.div
      ref={root}
      key={pathname}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-full"
    >
      {children}
    </motion.div>
  );
}
