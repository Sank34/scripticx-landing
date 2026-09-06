"use client";

import { useEffect, useState } from "react";

export function BlogToc({ label }: { label: string }) {
  const [headings, setHeadings] = useState<{id: string; text: string; nested: boolean}[]>([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("#blog-content h2[id], #blog-content h3[id]"));
    // Read compiled heading IDs rather than maintaining a second slug algorithm.
    const frame = requestAnimationFrame(() => setHeadings(elements.map(el => ({id: el.id, text: el.textContent ?? "", nested: el.tagName === "H3"}))));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.find(entry => entry.isIntersecting);
      if (visible) setActive(visible.target.id);
    }, {rootMargin: "-100px 0px -60% 0px"});
    elements.forEach(el => observer.observe(el));
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);
  if (!headings.length) return null;
  return <nav aria-label={label} className="sticky top-28 max-h-[calc(100svh-9rem)] overflow-y-auto border-l pl-5 text-sm"><p className="mb-4 font-medium">{label}</p>{headings.map(h => <a key={h.id} href={`#${h.id}`} aria-current={active === h.id ? "location" : undefined} className={`mb-3 block leading-5 hover:text-foreground ${h.nested ? "pl-3 text-xs" : ""} ${active === h.id ? "text-emerald-700" : "text-muted-foreground"}`}>{h.text}</a>)}</nav>;
}
