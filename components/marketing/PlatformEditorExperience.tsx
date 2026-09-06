"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CircleMinus,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  siCplusplus,
  siGo,
  siJavascript,
  siOpenjdk,
  siPython,
  siRust,
  siTypescript,
} from "simple-icons";

import { Reveal } from "@/components/marketing/Reveal";
import type { MarketingLocale } from "@/lib/marketing-content";

const languageMarks = [siPython, siCplusplus, siJavascript, siTypescript, siOpenjdk, siGo, siRust];

const examples = [
  {
    id: "output",
    label: { en: "Output", ro: "Afișare" },
    lines: ['name = "Ana"', 'PRINT "Hello, " + name'],
    steps: [
      { line: 0, output: "" },
      { line: 1, output: "Hello, Ana" },
    ],
  },
  {
    id: "condition",
    label: { en: "Condition", ro: "Condiție" },
    lines: ["score = 84", "IF score >= 50 THEN", '  PRINT "Passed"', "ELSE", '  PRINT "Try again"', "END"],
    steps: [
      { line: 0, output: "" },
      { line: 1, output: "" },
      { line: 2, output: "Passed" },
      { line: 5, output: "Passed" },
    ],
  },
  {
    id: "loop",
    label: { en: "Loop", ro: "Buclă" },
    lines: ["count = 1", "WHILE count <= 3", "  PRINT count", "  count = count + 1", "END"],
    steps: [
      { line: 0, output: "" },
      { line: 1, output: "" },
      { line: 2, output: "1" },
      { line: 3, output: "1" },
      { line: 4, output: "1" },
      { line: 1, output: "1" },
      { line: 2, output: "1\n2" },
      { line: 3, output: "1\n2" },
      { line: 4, output: "1\n2" },
      { line: 1, output: "1\n2" },
      { line: 2, output: "1\n2\n3" },
      { line: 3, output: "1\n2\n3" },
      { line: 4, output: "1\n2\n3" },
      { line: 1, output: "1\n2\n3" },
    ],
  },
] as const;

const copy = {
  en: {
    comparison: {
      eyebrow: "Beyond the editor",
      title: "Typing code is only one part of learning it.",
      description: "An editor can run a file. ScripticX connects that file to the lesson, the practice, the people and the progress around it.",
      editor: "A coding editor",
      editorNote: "Code and output",
      platform: "The ScripticX workspace",
      platformNote: "The whole learning path",
      rows: [
        { label: "Direction", editor: "A blank file and a cursor", platform: "A lesson, roadmap and clear next step" },
        { label: "Practice", editor: "Exercises live in another tab", platform: "Problems stay beside the concept" },
        { label: "Feedback", editor: "Errors end in the console", platform: "Tests, teacher feedback and visible progress" },
        { label: "Context", editor: "Files remain isolated", platform: "Classes, projects and assignments stay connected" },
      ],
    },
    miniscript: {
      eyebrow: "Meet MiniScript+",
      title: "The first language built around understanding.",
      description: "MiniScript+ is ScripticX’s own programming language, designed specifically for learning. Its compact syntax keeps attention on logic while the platform makes every step of execution visible. Your favourite languages are available too, including Python, C++, JavaScript, TypeScript, Java, Go and Rust.",
      output: "OUTPUT",
      docs: "Explore MiniScript+",
    },
  },
  ro: {
    comparison: {
      eyebrow: "Dincolo de editor",
      title: "Să scrii cod este doar o parte din proces.",
      description: "Un editor poate rula un fișier. ScripticX conectează acel fișier cu lecția, practica, oamenii și progresul din jurul său.",
      editor: "Un editor de cod",
      editorNote: "Cod și rezultat",
      platform: "Workspace-ul ScripticX",
      platformNote: "Întregul traseu de învățare",
      rows: [
        { label: "Direcție", editor: "Un fișier gol și un cursor", platform: "O lecție, un roadmap și următorul pas clar" },
        { label: "Practică", editor: "Exercițiile rămân în alt tab", platform: "Problemele stau lângă concept" },
        { label: "Feedback", editor: "Erorile se opresc în consolă", platform: "Teste, feedback de la profesor și progres vizibil" },
        { label: "Context", editor: "Fișierele rămân izolate", platform: "Clasele, proiectele și temele rămân conectate" },
      ],
    },
    miniscript: {
      eyebrow: "Descoperă MiniScript+",
      title: "Primul limbaj construit în jurul înțelegerii.",
      description: "MiniScript+ este propriul limbaj de programare al platformei ScripticX, creat special pentru învățare. Sintaxa compactă păstrează atenția pe logică, iar platforma face vizibil fiecare pas al execuției. Ai la dispoziție și limbajele tale preferate, inclusiv Python, C++, JavaScript, TypeScript, Java, Go și Rust.",
      output: "REZULTAT",
      docs: "Explorează MiniScript+",
    },
  },
} as const;

function SyntaxLine({ children }: { children: string }) {
  const parts = children.split(/(\b(?:IF|THEN|ELSE|END|WHILE|PRINT|INPUT)\b|"[^"]*")/g);

  return (
    <span className="whitespace-pre">
      {parts.map((part, index) => {
        const isKeyword = /^(IF|THEN|ELSE|END|WHILE|PRINT|INPUT)$/.test(part);
        const isString = /^"/.test(part);
        return <span key={`${part}-${index}`} className={isKeyword ? "text-fuchsia-300" : isString ? "text-amber-200" : "text-white/74"}>{part}</span>;
      })}
    </span>
  );
}

function LanguageOrbit({ reducedMotion }: { reducedMotion: boolean }) {
  const path = "M 58 300 A 292 250 0 0 1 642 300 A 292 250 0 0 1 58 300";
  const staticPositions = [
    [74, 272],
    [142, 120],
    [262, 48],
    [438, 48],
    [558, 120],
    [626, 272],
    [350, 24],
  ];

  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-[24px] border border-black/8 bg-[#f4f5f4] sm:min-h-[27rem]">
      <div className="sx-dot-grid pointer-events-none absolute inset-0 opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <svg className="absolute inset-x-0 bottom-0 h-[88%] w-full" viewBox="0 0 700 350" role="img" aria-label={languageMarks.map((language) => language.title).join(", ")}>
        <path d="M 58 300 A 292 250 0 0 1 642 300" fill="none" stroke="rgba(0,0,0,0.10)" strokeDasharray="4 8" />
        <path d="M 126 245 A 224 186 0 0 1 574 245" fill="none" stroke="rgba(16,185,129,0.18)" />
        {languageMarks.map((language, index) => (
          <g key={language.title} transform={reducedMotion ? `translate(${staticPositions[index][0]} ${staticPositions[index][1]})` : undefined}>
            {!reducedMotion ? <animateMotion dur="22s" repeatCount="indefinite" begin={`${-(22 / languageMarks.length) * index}s`} path={path} /> : null}
            <circle r="29" fill="white" stroke="rgba(0,0,0,0.10)" />
            <path d={language.path} fill={`#${language.hex}`} transform="translate(-12 -12)" />
            <title>{language.title}</title>
          </g>
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#f4f5f4] via-[#f4f5f4]/95 to-transparent" />
      <div className="sx-miniscript-core absolute bottom-7 left-1/2 z-10 flex w-[9.5rem] -translate-x-1/2 flex-col items-center rounded-[20px] border border-emerald-400/30 bg-[#111315] px-5 py-5 text-white shadow-[0_24px_70px_rgba(16,185,129,0.22)] sm:bottom-10 sm:w-[11rem]">
        <Image src="/msp-logo.svg" alt="MiniScript+" width={216} height={260} className="h-16 w-auto sm:h-20" />
        <span className="mt-3 font-mono text-[10px] tracking-[0.18em] text-emerald-200">MINISCRIPT+</span>
        <span className="mt-1 text-[10px] text-white/42">THE LEARNING CORE</span>
      </div>
    </div>
  );
}

function CodeExample({ locale, reducedMotion }: { locale: MarketingLocale; reducedMotion: boolean }) {
  const [selected, setSelected] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const example = examples[selected];
  const content = copy[locale].miniscript;
  const step = reducedMotion
    ? example.steps[example.steps.length - 1]
    : (example.steps[activeStep] ?? example.steps[0]);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveStep((currentStep) => (currentStep + 1) % example.steps.length);
    }, 1050);
    return () => window.clearInterval(interval);
  }, [example.steps.length, reducedMotion]);

  return (
    <div className="overflow-hidden rounded-[24px] border border-white/12 bg-[#0d0e10] text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-emerald-400/75" />
        </div>
      </div>

      <div className="flex gap-1.5 border-b border-white/10 p-3 sm:p-4" role="tablist" aria-label="MiniScript+ examples">
        {examples.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={selected === index}
            onClick={() => {
              setSelected(index);
              setActiveStep(0);
            }}
            className={`rounded-full px-3 py-1.5 text-[10px] transition-colors ${selected === index ? "bg-white text-black" : "text-white/48 hover:bg-white/8 hover:text-white"}`}
          >
            {item.label[locale]}
          </button>
        ))}
      </div>

      <div className="grid min-h-[20rem] sm:grid-cols-[1fr_10rem]">
        <div className="border-b border-white/10 py-4 sm:border-b-0 sm:border-r">
          <div className="flex items-center px-5 pb-3 text-[9px] text-white/32">
            <span>example.msp</span>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={example.id} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }} className="font-mono text-xs leading-8 sm:text-[13px]">
              {example.lines.map((line, index) => (
                <div key={`${line}-${index}`} className={`relative grid grid-cols-[2.5rem_1fr] px-5 transition-colors duration-300 ${step.line === index ? "bg-emerald-300/[0.09]" : ""}`}>
                  {step.line === index ? <span className="absolute inset-y-1 left-0 w-0.5 rounded-full bg-emerald-300" /> : null}
                  <span className="select-none text-white/22">{String(index + 1).padStart(2, "0")}</span>
                  <SyntaxLine>{line}</SyntaxLine>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="bg-white/[0.025] p-5 font-mono text-[10px]">
          <p className="tracking-[0.14em] text-white/30">{content.output}</p>
          <motion.pre animate={{ opacity: step.output ? 1 : 0 }} transition={{ duration: 0.12 }} className="mt-5 min-h-6 whitespace-pre-wrap leading-6 text-emerald-200">{step.output}</motion.pre>
        </div>
      </div>
    </div>
  );
}

function ComparisonCell({ children, strong = false }: { children: ReactNode; strong?: boolean }) {
  return (
    <div className={`flex min-h-[8rem] flex-col items-start gap-3 p-3.5 sm:min-h-[7.5rem] sm:flex-row sm:p-6 lg:p-7 ${strong ? "bg-[#111315] text-white" : "bg-[#f5f5f4]"}`}>
      <span className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border ${strong ? "border-emerald-300/25 text-emerald-300" : "border-black/10 text-black/30"}`}>
        {strong ? <Check className="size-3.5" /> : <CircleMinus className="size-3.5" />}
      </span>
      <div>{children}</div>
    </div>
  );
}

export function PlatformEditorExperience({ locale }: { locale: MarketingLocale }) {
  const content = copy[locale];
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section className="overflow-hidden border-b py-24 sm:py-32">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <Reveal className="max-w-4xl">
          <p className="text-sm font-medium text-muted-foreground">{content.comparison.eyebrow}</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{content.comparison.title}</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">{content.comparison.description}</p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-12 overflow-hidden rounded-[24px] border bg-border">
          <div className="grid grid-cols-[1fr_2.5rem_1fr] gap-px sm:grid-cols-[1fr_5rem_1fr]">
            <div className="bg-[#f5f5f4] p-4 sm:p-7 lg:p-9">
              <div className="flex size-10 items-center justify-center rounded-[12px] border bg-white"><Terminal className="size-4.5" /></div>
              <h3 className="mt-5 text-base font-semibold tracking-[-0.025em] sm:text-2xl">{content.comparison.editor}</h3>
              <p className="mt-2 text-[11px] text-black/42 sm:text-sm">{content.comparison.editorNote}</p>
            </div>
            <div className="sx-vs-rail relative flex items-center justify-center overflow-hidden bg-white">
              <span className="relative z-10 flex size-8 items-center justify-center rounded-full border bg-white font-mono text-[9px] font-semibold shadow-sm sm:size-12 sm:text-[11px]">VS</span>
            </div>
            <div className="bg-[#111315] p-4 text-white sm:p-7 lg:p-9">
              <div className="flex size-10 items-center justify-center rounded-[12px] border border-white/12 bg-white/5 text-emerald-300"><Sparkles className="size-4.5" /></div>
              <h3 className="mt-5 text-base font-semibold tracking-[-0.025em] sm:text-2xl">{content.comparison.platform}</h3>
              <p className="mt-2 text-[11px] text-white/42 sm:text-sm">{content.comparison.platformNote}</p>
            </div>

            {content.comparison.rows.map((row, index) => (
              <div key={row.label} className="contents">
                <ComparisonCell>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/30">0{index + 1} · {row.label}</p>
                  <p className="mt-3 text-xs leading-5 text-black/55 sm:text-sm sm:leading-6">{row.editor}</p>
                </ComparisonCell>
                <div className="relative flex items-center justify-center overflow-hidden bg-white">
                  <span className="size-1.5 rounded-full bg-black/12" />
                </div>
                <ComparisonCell strong>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-200/55">0{index + 1} · {row.label}</p>
                  <p className="mt-3 text-xs leading-5 text-white/72 sm:text-sm sm:leading-6">{row.platform}</p>
                </ComparisonCell>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-24 border-t pt-20 sm:mt-32 sm:pt-28">
          <div className="max-w-4xl">
            <Reveal>
              <p className="text-sm font-medium text-muted-foreground">{content.miniscript.eyebrow}</p>
              <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{content.miniscript.title}</h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-6">
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">{content.miniscript.description}</p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
            <Reveal delay={0.1}><LanguageOrbit reducedMotion={reducedMotion} /></Reveal>
            <Reveal delay={0.16}><CodeExample locale={locale} reducedMotion={reducedMotion} /></Reveal>
          </div>

          <Reveal delay={0.18} className="mt-7 flex justify-end">
            <Link href="/docs/miniscript" className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-black hover:text-white">
              {content.miniscript.docs}<ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
