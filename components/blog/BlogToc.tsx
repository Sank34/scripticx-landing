"use client";

import { useEffect, useState } from "react";

export function BlogToc({ label }: { label: string }) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; nested: boolean }[]
  >([]);
  const [activeHeadingId, setActiveHeadingId] = useState("");
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#blog-content h2[id], #blog-content h3[id]",
      ),
    );
    // Read compiled heading IDs rather than maintaining a second slug algorithm.
    const animationFrame = requestAnimationFrame(() =>
      setHeadings(
        elements.map((element) => ({
          id: element.id,
          text: element.textContent ?? "",
          nested: element.tagName === "H3",
        })),
      ),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveHeadingId(visible.target.id);
      },
      { rootMargin: "-100px 0px -60% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);
  if (!headings.length) return null;
  return (
    <nav
      aria-label={label}
      className="sticky top-28 max-h-[calc(100svh-9rem)] overflow-y-auto border-l pl-5 text-sm"
    >
      <p className="mb-4 font-medium">{label}</p>
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          aria-current={activeHeadingId === heading.id ? "location" : undefined}
          className={`mb-3 block leading-5 hover:text-foreground ${heading.nested ? "pl-3 text-xs" : ""} ${activeHeadingId === heading.id ? "text-emerald-700" : "text-muted-foreground"}`}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
}
