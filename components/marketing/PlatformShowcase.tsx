"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDot,
  FileCode2,
  FileText,
  Folder,
  GitBranch,
  GraduationCap,
  LayoutDashboard,
  MessageSquareText,
  Play,
  Radio,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/marketing/Reveal";
import { getMarketingLocale, marketingContent } from "@/lib/marketing-content";

function EditorVisual() {
  return (
    <div className="grid h-full min-h-[31rem] grid-cols-[3.25rem_minmax(9rem,0.28fr)_1fr] bg-[#0d0e10] text-white">
      <div className="flex flex-col items-center gap-2 border-r border-white/10 py-3">
        {[FileCode2, Search, Play, GitBranch].map((Icon, index) => (
          <div key={index} className={`flex size-9 items-center justify-center rounded-lg ${index === 0 ? "bg-white/10 text-white" : "text-white/42"}`}>
            <Icon className="size-4.5" />
          </div>
        ))}
      </div>
      <div className="border-r border-white/10 bg-[#111315] p-3">
        <div className="flex items-center justify-between text-xs font-medium text-white/55"><span>EXPLORER</span><span>•••</span></div>
        <div className="mt-4 space-y-1 text-xs text-white/62">
          <div className="flex items-center gap-1.5"><ChevronDown className="size-3" /><span className="font-medium text-white/85">learning-app</span></div>
          <div className="ml-3 flex items-center gap-1.5 py-1"><ChevronDown className="size-3" /><Folder className="size-3.5" />src</div>
          <div className="ml-7 flex items-center gap-1.5 rounded-md bg-white/8 px-2 py-1.5 text-white"><FileCode2 className="size-3.5 text-sky-300" />main.py</div>
          <div className="ml-7 flex items-center gap-1.5 px-2 py-1.5"><FileCode2 className="size-3.5 text-amber-300" />helpers.cpp</div>
          <div className="ml-3 flex items-center gap-1.5 px-2 py-1.5"><FileText className="size-3.5" />README.md</div>
        </div>
      </div>
      <div className="flex min-w-0 flex-col">
        <div className="flex h-10 items-center justify-between border-b border-white/10 bg-[#111315] px-3 text-xs">
          <span className="flex items-center gap-2 text-white/72"><FileCode2 className="size-3.5 text-sky-300" />main.py</span>
          <span className="flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-black"><Play className="size-3" />Run</span>
        </div>
        <div className="grid flex-1 grid-rows-[1fr_9.5rem]">
          <div className="overflow-hidden p-4 font-mono text-[11px] leading-6 sm:p-6 sm:text-xs">
            <div><span className="mr-4 text-white/25">1</span><span className="text-fuchsia-300">def</span> <span className="text-sky-300">learn</span>(topic):</div>
            <div><span className="mr-4 text-white/25">2</span>&nbsp;&nbsp;<span className="text-fuchsia-300">for</span> step <span className="text-fuchsia-300">in</span> roadmap:</div>
            <div><span className="mr-4 text-white/25">3</span>&nbsp;&nbsp;&nbsp;&nbsp;practice(step)</div>
            <div><span className="mr-4 text-white/25">4</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-300">if</span> feedback.ready:</div>
            <div><span className="mr-4 text-white/25">5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;improve()</div>
            <div className="mt-4"><span className="mr-4 text-white/25">7</span><span className="text-sky-300">learn</span>(<span className="text-amber-200">&quot;algorithms&quot;</span>)</div>
          </div>
          <div className="border-t border-white/10 bg-black/45">
            <div className="flex h-8 items-center gap-5 border-b border-white/8 px-4 text-[10px] text-white/42"><span>PROBLEMS</span><span>OUTPUT</span><span className="text-white">TERMINAL</span></div>
            <div className="p-4 font-mono text-xs text-white/72"><span className="text-emerald-300">scripticx</span> $ python main.py<br /><span className="text-white/42">Roadmap loaded. Ready to build.</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LearnVisual() {
  const lessons = ["Foundations", "Conditions", "Loops", "Functions"];
  return (
    <div className="grid h-full min-h-[31rem] gap-4 bg-[#f7f7f6] p-5 text-[#171717] sm:grid-cols-[0.7fr_1.3fr] sm:p-8">
      <div className="rounded-[14px] border border-black/8 bg-white p-5">
        <p className="text-xs font-medium text-black/45">YOUR ROADMAP</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">MiniScript+ foundations</h3>
        <div className="mt-6 space-y-2">
          {lessons.map((lesson, index) => (
            <div key={lesson} className="flex items-center gap-3 rounded-[10px] border border-black/7 px-3 py-3 text-sm">
              <span className={`flex size-6 items-center justify-center rounded-full ${index < 2 ? "bg-[#111] text-white" : "bg-black/5 text-black/45"}`}>{index < 2 ? <Check className="size-3.5" /> : index + 1}</span>
              <span className={index === 1 ? "font-medium" : "text-black/58"}>{lesson}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-[14px] border border-black/8 bg-white p-5 sm:p-7">
        <div className="flex items-center justify-between"><span className="text-xs text-black/45">02 · LESSON</span><span className="rounded-md bg-emerald-50 px-2 py-1 text-xs text-emerald-700">In progress</span></div>
        <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">Conditions and decisions</h3>
        <p className="mt-3 max-w-lg text-sm leading-6 text-black/55">Use conditions to make a program choose what happens next based on the values it receives.</p>
        <div className="mt-7 rounded-[12px] bg-[#111315] p-5 font-mono text-xs leading-6 text-white/75">
          <span className="text-fuchsia-300">IF</span> score &gt;= 80 <span className="text-fuchsia-300">THEN</span><br />&nbsp;&nbsp;<span className="text-sky-300">PRINT</span> <span className="text-amber-200">&quot;Great work&quot;</span><br /><span className="text-fuchsia-300">END IF</span>
        </div>
        <div className="mt-auto flex items-center justify-between border-t pt-5 text-sm"><span className="text-black/45">1 checkpoint remaining</span><span className="rounded-lg bg-black px-3 py-2 text-white">Continue lesson</span></div>
      </div>
    </div>
  );
}

function WorkspacesVisual() {
  return (
    <div className="grid h-full min-h-[31rem] bg-[#f7f7f6] text-[#171717] sm:grid-cols-[13rem_1fr]">
      <div className="hidden border-r border-black/8 bg-white p-4 sm:block">
        <div className="flex items-center gap-2 text-sm font-semibold"><GraduationCap className="size-4" />Student workspace</div>
        <div className="mt-6 space-y-1 text-sm text-black/52">
          {[LayoutDashboard, FileText, CalendarDays, Users].map((Icon, index) => (
            <div key={index} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 ${index === 0 ? "bg-black/5 text-black" : ""}`}><Icon className="size-4" />{["Overview", "Notes", "Calendar", "Groups"][index]}</div>
          ))}
        </div>
      </div>
      <div className="p-5 sm:p-7">
        <div className="flex items-start justify-between"><div><p className="text-xs text-black/45">MONDAY, 26 AUGUST</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Learning overview</h3></div><div className="flex size-9 items-center justify-center rounded-full bg-black text-sm text-white">A</div></div>
        <div className="mt-7 grid gap-3 lg:grid-cols-3">
          {[["4", "Lessons this week"], ["12", "Problems solved"], ["86%", "Roadmap progress"]].map(([value, label]) => (
            <div key={label} className="rounded-[12px] border border-black/8 bg-white p-4"><p className="text-2xl font-semibold">{value}</p><p className="mt-1 text-xs text-black/45">{label}</p></div>
          ))}
        </div>
        <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[12px] border border-black/8 bg-white p-5"><div className="flex items-center justify-between"><h4 className="font-medium">Upcoming work</h4><CalendarDays className="size-4 text-black/38" /></div><div className="mt-5 space-y-4">{[["Graph algorithms", "Tomorrow"], ["Functions quiz", "Friday"], ["Team project", "2 September"]].map(([title, date]) => <div key={title} className="flex items-center justify-between border-b border-black/7 pb-3 text-sm last:border-0"><span>{title}</span><span className="text-black/42">{date}</span></div>)}</div></div>
          <div className="rounded-[12px] border border-black/8 bg-[#111315] p-5 text-white"><p className="text-xs text-white/45">TODAY</p><h4 className="mt-3 text-xl font-semibold">Continue your roadmap</h4><p className="mt-2 text-sm leading-6 text-white/52">Loops · Lesson 4 of 6</p><div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-white" /></div></div>
        </div>
      </div>
    </div>
  );
}

function CollaborationVisual() {
  return (
    <div className="grid h-full min-h-[31rem] bg-[#0d0e10] text-white sm:grid-cols-[1.25fr_0.75fr]">
      <div className="relative overflow-hidden border-r border-white/10 p-6 sm:p-8">
        <div className="absolute inset-0 sx-dot-grid opacity-35" />
        <div className="relative flex items-center justify-between"><span className="flex items-center gap-2 text-sm font-medium"><Radio className="size-4 text-emerald-300" />Live Share active</span><div className="flex -space-x-2">{["A", "M", "D"].map((letter, i) => <span key={letter} className={`flex size-8 items-center justify-center rounded-full border-2 border-[#0d0e10] text-xs ${["bg-sky-400", "bg-violet-400", "bg-amber-400"][i]}`}>{letter}</span>)}</div></div>
        <div className="relative mx-auto mt-12 max-w-md rounded-[14px] border border-white/12 bg-white/[0.055] p-5 shadow-2xl"><div className="flex items-center gap-2 text-xs text-white/45"><CircleDot className="size-3.5 text-sky-300" />graph-session.excalidraw</div><div className="relative mt-8 h-52">{[["left-2 top-5", "0"], ["right-6 top-0", "2"], ["left-20 bottom-0", "1"], ["right-20 bottom-12", "4"]].map(([position, label]) => <span key={label} className={`absolute ${position} flex size-11 items-center justify-center rounded-full border border-white/30 bg-[#17191c] text-sm`}>{label}</span>)}<svg className="absolute inset-0 size-full" viewBox="0 0 360 200" aria-hidden="true"><path d="M36 48 L300 25 M36 48 L105 180 M105 180 L250 140 M300 25 L250 140 M36 48 L250 140" stroke="rgba(255,255,255,.25)" strokeWidth="2" /></svg></div></div>
      </div>
      <div className="hidden bg-[#111315] p-6 sm:block"><div className="flex items-center gap-2 text-sm font-medium"><MessageSquareText className="size-4" />Session</div><div className="mt-6 space-y-3">{[["Andrei", "Try connecting node 1 to 4."], ["Maria", "That makes the path shorter."], ["Daria", "Saved a checkpoint."]].map(([name, text]) => <div key={name} className="rounded-[10px] border border-white/10 bg-white/[0.035] p-3"><p className="text-xs font-medium">{name}</p><p className="mt-1 text-xs leading-5 text-white/48">{text}</p></div>)}</div></div>
    </div>
  );
}

const visuals = { editor: EditorVisual, learn: LearnVisual, workspaces: WorkspacesVisual, collaboration: CollaborationVisual };

export default function PlatformShowcase() {
  const locale = getMarketingLocale(useLocale());
  const content = marketingContent[locale].showcase;
  const [active, setActive] = useState<"editor" | "learn" | "workspaces" | "collaboration">("editor");
  const reduceMotion = useReducedMotion();
  const activeTab = content.tabs.find((tab) => tab.key === active) ?? content.tabs[0];
  const Visual = visuals[activeTab.key];

  return (
    <section className="border-b py-20 sm:py-24">
      <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl"><p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{content.title}</h2><p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{content.description}</p></div>
          <Button variant="outline" asChild><Link href="https://platform.scripticx.org">{content.open}<ArrowUpRight /></Link></Button>
        </Reveal>

        <Reveal delay={0.06} className="mt-12 overflow-hidden rounded-[20px] border bg-card shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="flex gap-1 overflow-x-auto border-b p-2" role="tablist" aria-label={content.eyebrow}>
            {content.tabs.map((tab) => <button key={tab.key} role="tab" aria-selected={active === tab.key} onClick={() => setActive(tab.key)} className={`min-h-10 shrink-0 rounded-lg px-4 text-sm font-medium transition-colors ${active === tab.key ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{tab.label}</button>)}
          </div>
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-center border-b p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-12">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={activeTab.key} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-balance text-3xl font-semibold tracking-[-0.035em]">{activeTab.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">{activeTab.description}</p><ul className="mt-7 space-y-3">{activeTab.points.map((point) => <li key={point} className="flex items-center gap-3 text-sm"><span className="flex size-5 items-center justify-center rounded-full bg-muted"><Check className="size-3" /></span>{point}</li>)}</ul>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="min-w-0 overflow-hidden bg-muted/30">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={activeTab.key} role="tabpanel" initial={reduceMotion ? false : { opacity: 0, scale: 0.992 }} animate={{ opacity: 1, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: 0.32 }} className="h-full"><Visual /></motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
