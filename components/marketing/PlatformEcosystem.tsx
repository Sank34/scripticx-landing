"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Check, Code2, UsersRound } from "lucide-react";
import Image from "next/image";
import { siGithub, siGoogle } from "simple-icons";

import { Reveal } from "@/components/marketing/Reveal";
import type { MarketingLocale } from "@/lib/marketing-content";

const copy = {
  en: {
    eyebrow: "The ecosystem",
    title: "Your tools. One working rhythm.",
    description:
      "Google gets you in. GitHub carries the project. Monaco, Live Share and MiniScript+ keep coding, collaboration and learning inside the same workflow.",
    hub: "SCRIPTICX PLATFORM",
    selected: "Selected connection",
    items: [
      {
        id: "google",
        name: "Google",
        role: "Sign in",
        headline: "Start with the account you already use.",
        description: "Google sign-in gives learners and teachers a familiar route into their ScripticX workspace.",
        details: ["Google OAuth", "Learner and teacher access"],
      },
      {
        id: "github",
        name: "GitHub",
        role: "Version control",
        headline: "Manage your projects with version control.",
        description: "Clone repositories, work with branches, pull and push changes, then open a pull request from the same project flow.",
        details: ["Clone and branches", "Pull, push and pull requests"],
      },
      {
        id: "monaco",
        name: "Monaco Editor",
        role: "Code in browser",
        headline: "Use a full code editor without leaving the browser.",
        description: "The Monaco editor brings project files, language tooling, code execution and the terminal into one focused workspace.",
        details: ["Multi-language editor", "Integrated run and terminal"],
      },
      {
        id: "liveshare",
        name: "Live Share",
        role: "Collaborate",
        headline: "Work in the same project at the same time.",
        description: "Start a Live Share session from the editor and invite a teammate without moving the project into another tool.",
        details: ["Invite from the editor", "Real-time collaboration"],
      },
      {
        id: "miniscript",
        name: "MiniScript+",
        role: "Learn by running",
        headline: "Make program execution visible while you learn.",
        description: "ScripticX’s native learning language connects compact syntax with step-by-step execution and complexity analysis.",
        details: ["Native learning runtime", "Execution and complexity views"],
      },
    ],
  },
  ro: {
    eyebrow: "Ecosistemul",
    title: "Instrumentele tale. Un singur ritm de lucru.",
    description:
      "Google te autentifică, GitHub păstrează proiectul, iar Monaco, Live Share și MiniScript+ aduc programarea, colaborarea și învățarea în același flux.",
    hub: "PLATFORMA SCRIPTICX",
    selected: "Conexiunea selectată",
    items: [
      {
        id: "google",
        name: "Google",
        role: "Autentificare",
        headline: "Începi cu un cont pe care îl folosești deja.",
        description: "Autentificarea Google le oferă elevilor și profesorilor o intrare familiară în workspace-ul ScripticX.",
        details: ["Google OAuth", "Acces pentru elevi și profesori"],
      },
      {
        id: "github",
        name: "GitHub",
        role: "Version control",
        headline: "Păstrezi proiectele prin version control.",
        description: "Clonezi repository-uri, lucrezi cu branch-uri, faci pull și push, apoi deschizi un pull request din același flux de proiect.",
        details: ["Clone și branch-uri", "Pull, push și pull requests"],
      },
      {
        id: "monaco",
        name: "Monaco Editor",
        role: "Cod în browser",
        headline: "Folosești un editor complet direct în browser.",
        description: "Editorul Monaco aduce fișierele proiectului, instrumentele de limbaj, execuția și terminalul într-un workspace concentrat.",
        details: ["Editor multi-limbaj", "Run și terminal integrate"],
      },
      {
        id: "liveshare",
        name: "Live Share",
        role: "Colaborare",
        headline: "Lucrați simultan în același proiect.",
        description: "Pornești o sesiune Live Share din editor și inviți un coleg fără să muți proiectul într-un alt instrument.",
        details: ["Invitație direct din editor", "Colaborare în timp real"],
      },
      {
        id: "miniscript",
        name: "MiniScript+",
        role: "Înveți prin execuție",
        headline: "Vezi execuția programului în timp ce înveți.",
        description: "Limbajul educațional nativ ScripticX conectează sintaxa compactă cu execuția pas cu pas și analiza complexității.",
        details: ["Runtime educațional nativ", "Execuție și analiză de complexitate"],
      },
    ],
  },
} as const;

const connectorPaths = [
  "M 238 112 C 330 112 370 194 438 226",
  "M 218 270 C 322 270 366 270 430 270",
  "M 254 426 C 350 404 390 344 444 310",
  "M 762 168 C 664 168 626 212 562 238",
  "M 786 370 C 680 370 630 326 558 292",
] as const;

const nodePositions = [
  "lg:left-[5%] lg:top-[12%]",
  "lg:left-[3%] lg:top-[43%]",
  "lg:bottom-[18%] lg:left-[7%]",
  "lg:right-[5%] lg:top-[21%]",
  "lg:bottom-[28%] lg:right-[3%]",
] as const;

function ToolMark({ id }: { id: string }) {
  if (id === "google") {
    return (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d={siGoogle.path} />
      </svg>
    );
  }

  if (id === "github") {
    return (
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d={siGithub.path} />
      </svg>
    );
  }

  if (id === "monaco") return <Code2 className="size-5" strokeWidth={1.8} aria-hidden="true" />;
  if (id === "liveshare") return <UsersRound className="size-5" strokeWidth={1.8} aria-hidden="true" />;

  return <Image src="/msp-logo.svg" alt="" width={216} height={260} className="h-6 w-auto" />;
}

export function PlatformEcosystem({ locale }: { locale: MarketingLocale }) {
  const content = copy[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const activeItem = content.items[activeIndex];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const nodes = gsap.utils.toArray<HTMLElement>("[data-ecosystem-node]", section);
    const paths = gsap.utils.toArray<SVGPathElement>("[data-ecosystem-path]", section);
    const geometry = gsap.utils.toArray<SVGElement>("[data-ecosystem-geometry]", section);
    const core = section.querySelector<HTMLElement>("[data-ecosystem-core]");
    const detail = detailRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    gsap.set(nodes, { autoAlpha: 0, y: 16 });
    gsap.set(paths, { strokeDasharray: 1, strokeDashoffset: 1 });
    gsap.set(geometry, { autoAlpha: 0 });
    if (core) gsap.set(core, { autoAlpha: 0, scale: 0.84, rotate: -3 });

    let intro: gsap.core.Timeline | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .to(geometry, { autoAlpha: 1, duration: 0.55, stagger: 0.035 })
          .to(core, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.75 }, "-=0.36")
          .to(paths, { strokeDashoffset: 0, duration: 0.8, stagger: 0.08 }, "-=0.48")
          .to(nodes, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, "-=0.62");
        observer.disconnect();
      },
      { threshold: 0.28 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      intro?.kill();
      gsap.killTweensOf([...nodes, ...paths, ...geometry, core, detail]);
      gsap.set([...nodes, ...paths, ...geometry, core], { clearProps: "all" });
    };
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selectedNode = section.querySelector<HTMLElement>(`[data-ecosystem-index="${activeIndex}"]`);
    const selectedPath = section.querySelector<SVGPathElement>(`[data-ecosystem-path="${activeIndex}"]`);
    const detail = detailRef.current;
    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (selectedPath) {
      timeline.fromTo(selectedPath, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.65 });
    }
    if (selectedNode) {
      timeline.fromTo(selectedNode, { scale: 0.96 }, { scale: 1, duration: 0.32, ease: "back.out(2)" }, "-=0.35");
    }
    if (detail) {
      timeline.fromTo(detail, { autoAlpha: 0, y: 9 }, { autoAlpha: 1, y: 0, duration: 0.35 }, "-=0.18");
    }

    return () => {
      timeline.kill();
    };
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="overflow-hidden border-b bg-white py-24 sm:py-32">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{content.title}</h2>
          </Reveal>
          <Reveal delay={0.08} className="mx-auto mt-6 max-w-3xl">
            <p className="text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{content.description}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mx-auto mt-14 max-w-[100rem] overflow-hidden rounded-[22px] border border-black/10 bg-[#f6f7f5]">
          <div className="px-4 py-8 sm:px-7 lg:p-7 xl:p-8">
            <div className="relative mx-auto w-full max-w-[84rem] lg:aspect-[1000/560]">
            <svg className="pointer-events-none absolute inset-0 hidden size-full lg:block" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <g fill="none" stroke="rgba(17,24,39,0.11)" strokeWidth="1">
                <path data-ecosystem-geometry d="M 396 172 L 500 112 L 604 172 L 604 292 L 500 352 L 396 292 Z" />
                <path data-ecosystem-geometry d="M 500 112 L 500 352" />
                <path data-ecosystem-geometry d="M 396 172 L 604 292" />
                <path data-ecosystem-geometry d="M 604 172 L 396 292" />
                <path data-ecosystem-geometry d="M 354 148 L 500 64 L 646 148 L 646 316 L 500 400 L 354 316 Z" strokeDasharray="4 9" />
              </g>

              {connectorPaths.map((path, index) => (
                <g key={path}>
                  <path
                    data-ecosystem-path={index}
                    pathLength="1"
                    d={path}
                    fill="none"
                    stroke={activeIndex === index ? "#10b981" : "rgba(17,24,39,0.16)"}
                    strokeWidth={activeIndex === index ? 1.7 : 1}
                    style={{ transition: "stroke 320ms ease, stroke-width 320ms ease" }}
                  />
                  <circle cx={index < 3 ? [238, 218, 254][index] : [762, 786][index - 3]} cy={[112, 270, 426, 168, 370][index]} r="3" fill={activeIndex === index ? "#10b981" : "rgba(17,24,39,0.24)"} />
                </g>
              ))}
            </svg>

            <div data-ecosystem-core className="relative z-10 mx-auto flex h-48 w-52 items-center justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:h-56 lg:w-60 lg:-translate-x-1/2 lg:-translate-y-1/2 2xl:h-64 2xl:w-[17rem]">
              <svg className="absolute inset-0 size-full" viewBox="0 0 240 224" aria-hidden="true">
                <polygon points="120,18 218,74 120,130 22,74" fill="rgba(255,255,255,0.92)" stroke="rgba(16,185,129,0.58)" />
                <polygon points="22,74 120,130 120,208 22,152" fill="rgba(17,24,39,0.035)" stroke="rgba(17,24,39,0.14)" />
                <polygon points="218,74 120,130 120,208 218,152" fill="rgba(16,185,129,0.08)" stroke="rgba(17,24,39,0.14)" />
                <path d="M 120 18 L 120 130 M 22 74 L 218 74" fill="none" stroke="rgba(17,24,39,0.08)" />
              </svg>
              <div className="relative -translate-y-4 text-center">
                <span className="mx-auto flex size-16 items-center justify-center rounded-[16px] border border-black/10 bg-white shadow-[0_16px_36px_rgba(0,0,0,0.08)]">
                  <Image src="/logoSCX.svg" alt="" width={48} height={34} className="h-8 w-auto" />
                </span>
                <p className="mt-3 font-mono text-[9px] tracking-[0.12em] text-black/60">{content.hub}</p>
              </div>
            </div>

            <div className="relative z-20 mt-7 grid gap-2 sm:grid-cols-2 lg:absolute lg:inset-0 lg:mt-0 lg:block">
              {content.items.map((item, index) => (
                <button
                  key={item.id}
                  data-ecosystem-node
                  data-ecosystem-index={index}
                  type="button"
                  aria-pressed={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex min-h-16 w-full items-center gap-3 rounded-[12px] border px-3.5 py-3 text-left outline-none transition-[background-color,border-color,box-shadow,transform] duration-300 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 lg:absolute lg:w-[13.5rem] 2xl:min-h-[4.5rem] 2xl:w-[15rem] 2xl:px-4 ${nodePositions[index]} ${activeIndex === index ? "border-black/20 bg-white text-black shadow-[0_12px_32px_rgba(0,0,0,0.08)]" : "border-black/10 bg-white/72 text-black/58 hover:border-black/20 hover:bg-white hover:text-black"}`}
                >
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-[9px] border transition-colors ${activeIndex === index ? "border-emerald-500/30 bg-emerald-50 text-black" : "border-black/8 bg-white text-black/55"}`}>
                    <ToolMark id={item.id} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold tracking-[-0.015em]">{item.name}</span>
                    <span className="mt-0.5 block text-[11px] text-black/55">{item.role}</span>
                  </span>
                </button>
              ))}
            </div>
            </div>
          </div>

          <div ref={detailRef} aria-live="polite" className="grid gap-5 border-t border-black/10 bg-white px-5 py-6 sm:px-7 md:grid-cols-[0.5fr_1fr_1.15fr] md:items-start md:gap-8 md:px-9 md:py-8">
            <div>
              <p className="text-xs text-black/55">{content.selected}</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-[10px] border border-black/10 bg-[#f6f7f5]">
                  <ToolMark id={activeItem.id} />
                </span>
                <div>
                  <p className="text-sm font-semibold">{activeItem.name}</p>
                  <p className="mt-0.5 text-xs text-black/55">{activeItem.role}</p>
                </div>
              </div>
            </div>
            <h3 className="max-w-md text-balance text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{activeItem.headline}</h3>
            <div>
              <p className="text-sm leading-6 text-black/60">{activeItem.description}</p>
              <ul className="mt-4 grid gap-2 text-xs text-black/60 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                {activeItem.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-600" strokeWidth={2} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
