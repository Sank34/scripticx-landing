"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import { Check, Plus } from "lucide-react";

import type { DevelopmentContent } from "@/types/development";

export function DevelopmentCapabilities({ items }: { items: DevelopmentContent["capabilities"]["items"] }) {
  const [active, setActive] = useState(items[0]?.key);
  const [reservedHeight, setReservedHeight] = useState<number>();
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const panels = useRef<Array<HTMLDivElement | null>>([]);
  const id = useId();

  useLayoutEffect(() => {
    const measure = () => {
      const headerHeight = buttons.current.reduce((total, button) => total + (button?.getBoundingClientRect().height ?? 0), 0);
      const panelHeight = Math.max(0, ...panels.current.map(panel => panel?.getBoundingClientRect().height ?? 0));
      setReservedHeight(Math.ceil(headerHeight + panelHeight + items.length + 1));
    };
    measure();
    const observer = new ResizeObserver(measure);
    for (const element of [...buttons.current, ...panels.current]) {
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="mt-14 border-t" style={{ minHeight: reservedHeight }} data-capabilities-accordion>
      {items.map((item, index) => {
        const expanded = active === item.key;
        const triggerId = `${id}-${item.key}-trigger`;
        const panelId = `${id}-${item.key}-panel`;
        return (
          <div key={item.key} className="border-b">
            <h3>
              <button
                ref={element => { buttons.current[index] = element; }}
                id={triggerId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setActive(item.key)}
                onKeyDown={event => {
                  const next = event.key === "ArrowDown" ? (index + 1) % items.length
                    : event.key === "ArrowUp" ? (index + items.length - 1) % items.length
                    : event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : undefined;
                  if (next !== undefined) { event.preventDefault(); buttons.current[next]?.focus(); }
                }}
                className="flex min-h-24 w-full items-center gap-5 py-7 text-left focus-visible:outline-2 focus-visible:outline-offset-4 sm:gap-10"
              >
                <span className="font-mono text-xs font-normal tracking-normal text-muted-foreground">0{index + 1}</span>
                <span className="text-2xl font-semibold tracking-[-0.035em] sm:text-4xl">{item.title}</span>
                <Plus aria-hidden="true" className={`ml-auto size-6 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${expanded ? "rotate-45" : ""}`} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!expanded}
              inert={!expanded}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <div ref={element => { panels.current[index] = element; }} className="max-w-3xl pb-9 sm:pl-14">
                  <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{item.description}</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                    {item.points.map(point => (
                      <li key={point} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
