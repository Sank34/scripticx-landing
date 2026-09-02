"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Coins,
  ClipboardList,
  Crown,
  FileCode2,
  FileText,
  Folder,
  GitBranch,
  GraduationCap,
  Hash,
  LayoutDashboard,
  Link2,
  Medal,
  MousePointer2,
  PackageOpen,
  Pin,
  Play,
  Radio,
  Search,
  Send,
  School,
  ShoppingBag,
  Sparkles,
  Trophy,
  TrendingUp,
  Users,
} from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";

import { MascotPeek } from "@/components/marketing/MascotPeek";
import {
  DocumentationVisual,
  ExamplesVisual,
  FeedVisual,
  GraphsVisual,
  LeaderboardVisual,
  NotesVisual,
  PersonalDashboardVisual,
  PlannerVisual,
  SearchVisual as PlatformSearchVisual,
  StudentsVisual,
  WhiteboardVisual,
} from "@/components/marketing/PlatformWorkspaceVisuals";
import { Reveal } from "@/components/marketing/Reveal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
          <span className="text-fuchsia-300">IF</span> score &gt;= 80 <span className="text-fuchsia-300">THEN</span><br />&nbsp;&nbsp;<span className="text-sky-300">PRINT</span> <span className="text-amber-200">&quot;Great work&quot;</span><br /><span className="text-fuchsia-300">END</span>
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

function ClassesVisual() {
  const classes = [
    {
      name: "Algorithms · Group A",
      subject: "Informatics · 2026–2027",
      assignments: 8,
      students: 14,
      progress: 72,
      deadline: "Graphs assignment · Friday",
    },
    {
      name: "MiniScript+ Foundations",
      subject: "Programming · 2026–2027",
      assignments: 5,
      students: 11,
      progress: 84,
      deadline: "Conditions quiz · Monday",
    },
  ];

  return (
    <div className="h-full min-h-[31rem] bg-[#f7f7f6] p-5 text-[#171717] sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-medium text-black/45"><School className="size-4" />CLASSES</p>
          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Classes in one place.</h3>
          <p className="mt-2 text-xs leading-5 text-black/48">Assignments, resources, progress and class activity.</p>
        </div>
        <div className="flex gap-2 text-xs"><span className="rounded-lg border border-black/10 bg-white px-3 py-2">Join class</span><span className="rounded-lg bg-black px-3 py-2 text-white">Create class</span></div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4">
        {[["2", "Active classes"], ["3", "Upcoming"], ["1", "Overdue"], ["78%", "Avg. progress"]].map(([value, label]) => (
          <div key={label} className="rounded-[10px] border border-black/8 bg-white px-3 py-3"><p className="text-lg font-semibold">{value}</p><p className="mt-0.5 text-[10px] text-black/42">{label}</p></div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {classes.map((classroom, index) => (
          <article key={classroom.name} className="rounded-[13px] border border-black/8 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-black text-xs font-semibold text-white">{index + 1}</span><span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-medium text-emerald-700">Active</span></div>
            <h4 className="mt-4 text-sm font-semibold">{classroom.name}</h4>
            <p className="mt-1 text-[10px] text-black/42">{classroom.subject}</p>
            <div className="mt-4 grid grid-cols-2 gap-2"><div className="rounded-lg bg-black/[0.035] px-3 py-2"><p className="text-sm font-semibold">{classroom.assignments}</p><p className="text-[9px] text-black/42">assignments</p></div><div className="rounded-lg bg-black/[0.035] px-3 py-2"><p className="text-sm font-semibold">{classroom.students}</p><p className="text-[9px] text-black/42">students</p></div></div>
            <div className="mt-4"><div className="flex items-center justify-between text-[9px] text-black/42"><span>Average progress</span><span className="font-medium text-black/70">{classroom.progress}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/7"><div className="h-full rounded-full bg-black" style={{ width: `${classroom.progress}%` }} /></div></div>
            <p className="mt-4 flex items-center gap-1.5 border-t border-black/7 pt-3 text-[9px] text-black/45"><CalendarDays className="size-3" />{classroom.deadline}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProblemsVisual() {
  return (
    <div className="grid h-full min-h-[31rem] bg-[#f7f7f6] text-[#171717] sm:grid-cols-[12rem_1fr] lg:min-h-0">
      <aside className="hidden border-r border-black/8 bg-white p-4 sm:block">
        <p className="text-[10px] font-medium tracking-[0.14em] text-black/40">PROBLEM SET</p>
        <div className="mt-4 space-y-2">
          {[
            ["Two sum", "Easy", "100"],
            ["Balanced brackets", "Medium", "80"],
            ["Shortest path", "Hard", "—"],
          ].map(([title, difficulty, score], index) => (
            <div key={title} className={`rounded-[10px] border p-3 ${index === 1 ? "border-black bg-black text-white" : "border-black/8 bg-white"}`}>
              <div className="flex items-center justify-between gap-2"><span className="text-[9px] opacity-55">{difficulty}</span><span className="text-[9px] font-medium">{score}</span></div>
              <p className="mt-2 text-xs font-medium leading-4">{title}</p>
            </div>
          ))}
        </div>
      </aside>
      <div className="flex min-h-0 min-w-0 flex-col p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium text-black/42">PROBLEM · MEDIUM</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">Balanced brackets</h3></div><span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-medium text-amber-700">80 / 100</span></div>
        <p className="mt-4 max-w-xl text-xs leading-5 text-black/52">Check whether every opening bracket in the input is closed in the correct order.</p>
        <div className="mt-5 grid min-h-0 flex-1 gap-3 lg:grid-cols-[1fr_11rem]">
          <div className="overflow-hidden rounded-[12px] border border-black/8 bg-[#111315] text-white shadow-sm">
            <div className="flex h-9 items-center justify-between border-b border-white/10 px-3 text-[10px] text-white/45"><span>solution.py</span><span>Python</span></div>
            <div className="p-4 font-mono text-[10px] leading-6 text-white/72"><div><span className="mr-3 text-white/20">1</span><span className="text-fuchsia-300">def</span> <span className="text-sky-300">valid</span>(text):</div><div><span className="mr-3 text-white/20">2</span>&nbsp;&nbsp;stack = []</div><div><span className="mr-3 text-white/20">3</span>&nbsp;&nbsp;<span className="text-fuchsia-300">for</span> char <span className="text-fuchsia-300">in</span> text:</div><div><span className="mr-3 text-white/20">4</span>&nbsp;&nbsp;&nbsp;&nbsp;update(stack, char)</div><div><span className="mr-3 text-white/20">5</span>&nbsp;&nbsp;<span className="text-fuchsia-300">return</span> <span className="text-fuchsia-300">not</span> stack</div></div>
            <div className="mt-5 border-t border-white/10 p-3"><span className="flex w-fit items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-[10px] font-medium text-black"><Play className="size-3" />Run tests</span></div>
          </div>
          <div className="space-y-2">{[["1", true], ["2", true], ["3", true], ["4", false]].map(([test, passed]) => <div key={String(test)} className="flex items-center justify-between rounded-[9px] border border-black/8 bg-white px-3 py-2.5 text-[10px]"><span>Test {test}</span><span className={passed ? "text-emerald-600" : "text-red-600"}>{passed ? "Passed" : "Review"}</span></div>)}<div className="rounded-[9px] bg-black px-3 py-3 text-[10px] text-white"><p className="text-white/45">BEST SCORE</p><p className="mt-1 text-lg font-semibold">80%</p></div></div>
        </div>
      </div>
    </div>
  );
}

function TeacherDashboardVisual() {
  return (
    <div className="h-full min-h-[31rem] overflow-hidden bg-[#f7f7f6] p-5 text-[#171717] sm:p-7 lg:min-h-0">
      <div className="flex items-start justify-between"><div><p className="text-xs font-medium text-black/42">TEACHER WORKSPACE</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Welcome back, Maria.</h3><p className="mt-2 text-xs text-black/48">Classes, deadlines and student progress at a glance.</p></div><span className="hidden rounded-lg bg-black px-3 py-2 text-xs text-white sm:block">New class</span></div>
      <div className="mt-6 grid grid-cols-3 gap-2">{[["42", "Students enrolled", Users], ["76%", "Average completion", TrendingUp], ["12", "Assignments", ClipboardList]].map(([value, label, icon]) => { const Icon = icon as typeof Users; return <div key={String(label)} className="rounded-[11px] border border-black/8 bg-white p-3"><Icon className="size-4 text-black/38" /><p className="mt-4 text-xl font-semibold">{String(value)}</p><p className="mt-1 text-[9px] text-black/42">{String(label)}</p></div>; })}</div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[12px] border border-black/8 bg-white p-4"><div className="flex items-center justify-between"><p className="text-xs font-semibold">Top performing students</p><span className="text-[9px] text-black/38">All students</span></div><div className="mt-4 space-y-3">{[["Andrei", 92], ["Daria", 84], ["Eric", 76]].map(([name, progress], index) => <div key={String(name)} className="grid grid-cols-[1fr_5rem_2rem] items-center gap-2 text-[10px]"><span className="flex items-center gap-2"><span className="flex size-6 items-center justify-center rounded-full bg-black text-[9px] text-white">{index + 1}</span>{String(name)}</span><span className="h-1.5 overflow-hidden rounded-full bg-black/7"><span className="block h-full rounded-full bg-black" style={{ width: `${progress}%` }} /></span><span className="text-right text-black/48">{String(progress)}%</span></div>)}</div></div>
        <div className="rounded-[12px] border border-black/8 bg-white p-4"><div className="flex items-center justify-between"><p className="text-xs font-semibold">Scheduled work</p><CalendarDays className="size-4 text-black/35" /></div><div className="mt-4 space-y-3">{[["Graph algorithms", "Fri · 14:00"], ["Functions quiz", "Mon · 10:00"], ["Final project", "12 Sep"]].map(([title, date]) => <div key={title} className="border-b border-black/7 pb-3 last:border-0"><p className="text-[10px] font-medium">{title}</p><p className="mt-1 text-[9px] text-black/40">{date}</p></div>)}</div></div>
      </div>
    </div>
  );
}

function AssignmentsVisual() {
  return (
    <div className="h-full min-h-[31rem] overflow-hidden bg-[#f7f7f6] p-5 text-[#171717] sm:p-7 lg:min-h-0">
      <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium text-black/42">COURSEWORK</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Assignments &amp; tests</h3><p className="mt-2 text-xs text-black/48">Deadlines and completion for every class.</p></div><span className="rounded-lg bg-black px-3 py-2 text-xs text-white">New assignment</span></div>
      <div className="mt-6 flex gap-2 text-[10px]"><span className="rounded-lg bg-black px-3 py-2 text-white">All</span>{["Upcoming", "Past due", "No deadline"].map((item) => <span key={item} className="rounded-lg border border-black/8 bg-white px-3 py-2 text-black/45">{item}</span>)}</div>
      <div className="mt-4 overflow-hidden rounded-[12px] border border-black/8 bg-white">
        {[
          ["Graph algorithms", "Informatics · Group A", "5 Sep · 14:00", 72, "Upcoming"],
          ["Conditions quiz", "MiniScript+ Foundations", "8 Sep · 10:00", 86, "Upcoming"],
          ["Array practice", "Informatics · Group B", "No deadline", 54, "No deadline"],
        ].map(([title, classroom, deadline, progress, status]) => (
          <div key={String(title)} className="grid gap-3 border-b border-black/7 p-4 last:border-0 sm:grid-cols-[1fr_8rem_8rem] sm:items-center">
            <div><div className="flex items-center gap-2"><p className="text-xs font-semibold">{String(title)}</p><span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] text-emerald-700">{String(status)}</span></div><p className="mt-1 text-[10px] text-black/42">{String(classroom)}</p></div>
            <div><p className="text-[9px] text-black/38">DEADLINE</p><p className="mt-1 text-[10px] font-medium">{String(deadline)}</p></div>
            <div><div className="flex justify-between text-[9px] text-black/42"><span>Completion</span><span>{String(progress)}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/7"><div className="h-full rounded-full bg-black" style={{ width: `${progress}%` }} /></div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeacherCalendarVisual() {
  const days = Array.from({ length: 35 }, (_, index) => index + 1);
  const events: Record<number, string> = { 5: "Graphs", 9: "Quiz", 17: "Project", 24: "Arrays" };

  return (
    <div className="h-full min-h-[31rem] overflow-hidden bg-[#f7f7f6] p-5 text-[#171717] sm:p-7 lg:min-h-0">
      <div className="flex items-end justify-between"><div><p className="text-xs font-medium text-black/42">PLANNING</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Class calendar</h3><p className="mt-2 text-xs text-black/48">Every student deadline, organized by month and class.</p></div><span className="hidden text-sm font-semibold sm:block">September 2026</span></div>
      <div className="mt-6 overflow-hidden rounded-[12px] border border-black/8 bg-white shadow-sm">
        <div className="grid grid-cols-7 border-b bg-black/[0.025] text-center text-[9px] font-medium text-black/42">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <span key={day} className="py-2">{day}</span>)}</div>
        <div className="grid grid-cols-7">{days.map((day) => <div key={day} className="min-h-14 border-b border-r border-black/7 p-1.5 even:bg-black/[0.012] sm:min-h-16"><span className={`flex size-5 items-center justify-center rounded-full text-[9px] ${day === 9 ? "bg-black text-white" : "text-black/48"}`}>{day}</span>{events[day] && <span className="mt-1 block truncate rounded bg-emerald-50 px-1.5 py-1 text-[8px] font-medium text-emerald-800">{events[day]}</span>}</div>)}</div>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="h-full min-h-[31rem] overflow-hidden bg-[#f7f7f6] p-5 text-[#171717] sm:p-7 lg:min-h-0">
      <div><p className="text-xs font-medium text-black/42">INSIGHTS</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Class analytics</h3><p className="mt-2 text-xs text-black/48">Compare class progress and identify students who may need support.</p></div>
      <div className="mt-6 grid grid-cols-3 gap-2">{[["76%", "Overall completion"], ["18", "Above 75%"], ["4", "Below 40%"]].map(([value, label], index) => <div key={label} className="rounded-[11px] border border-black/8 bg-white p-3"><span className={`block size-2 rounded-full ${["bg-black", "bg-emerald-500", "bg-red-500"][index]}`} /><p className="mt-4 text-xl font-semibold">{value}</p><p className="mt-1 text-[9px] text-black/42">{label}</p></div>)}</div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[12px] border border-black/8 bg-white p-4"><div className="flex items-center justify-between"><p className="text-xs font-semibold">Class comparison</p><BarChart3 className="size-4 text-black/35" /></div><div className="mt-5 space-y-5">{[["Algorithms · A", 84], ["MiniScript+", 76], ["Algorithms · B", 58]].map(([name, progress]) => <div key={String(name)}><div className="flex justify-between text-[10px]"><span>{String(name)}</span><span className="text-black/45">{String(progress)}%</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-black/7"><div className="h-full rounded-full bg-black/75" style={{ width: `${progress}%` }} /></div></div>)}</div></div>
        <div className="rounded-[12px] border border-black/8 bg-white p-4"><p className="text-xs font-semibold">Needs attention</p><p className="mt-1 text-[9px] text-black/40">Assigned work with low progress</p><div className="mt-4 space-y-2">{[["Alex", "34%"], ["Mara", "28%"], ["Victor", "19%"]].map(([name, progress]) => <div key={name} className="flex items-center gap-2 rounded-lg bg-red-50/70 p-2.5 text-[10px]"><span className="flex size-6 items-center justify-center rounded-full bg-white font-medium">{name[0]}</span><span>{name}</span><span className="ml-auto font-medium text-red-700">{progress}</span></div>)}</div></div>
      </div>
    </div>
  );
}

function CollaborationVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid h-full min-h-[31rem] bg-[#0d0e10] text-white sm:grid-cols-[10.5rem_1fr]">
      <aside className="hidden border-r border-white/10 bg-[#111315] p-3 sm:block">
        <p className="px-2 text-[10px] font-medium tracking-[0.16em] text-white/38">LIVE PROJECT</p>
        <div className="mt-4 space-y-1 text-xs text-white/55">
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5"><ChevronDown className="size-3" /><Folder className="size-3.5" />src</div>
          <div className="ml-3 flex items-center gap-2 rounded-md bg-white/8 px-2 py-1.5 text-white"><FileCode2 className="size-3.5 text-sky-300" />main.py</div>
          <div className="ml-3 flex items-center gap-2 rounded-md px-2 py-1.5"><FileCode2 className="size-3.5 text-amber-300" />helpers.py</div>
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5"><FileText className="size-3.5" />README.md</div>
        </div>
        <div className="mt-8 border-t border-white/8 pt-4">
          <p className="px-2 text-[10px] font-medium tracking-[0.16em] text-white/38">CONNECTED · 3</p>
          <div className="mt-3 space-y-2">
            {[["A", "Andrei", "bg-sky-400"], ["M", "Maria", "bg-violet-400"], ["D", "Daria", "bg-amber-400"]].map(([letter, name, color]) => (
              <div key={name} className="flex items-center gap-2 px-2 text-xs text-white/65"><span className={`flex size-6 items-center justify-center rounded-full text-[10px] text-white ${color}`}>{letter}</span>{name}<span className="ml-auto size-1.5 rounded-full bg-emerald-400" /></div>
            ))}
          </div>
        </div>
      </aside>

      <div className="relative min-w-0 overflow-hidden">
        <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#111315] px-4">
          <span className="flex items-center gap-2 text-xs font-medium"><Radio className="size-4 text-emerald-300" />Live Share active</span>
          <div className="flex items-center gap-2 text-[11px] text-white/50"><Link2 className="size-3.5" /><span className="hidden sm:inline">Copy session link</span></div>
        </div>
        <div className="relative h-[calc(100%-3rem)] overflow-hidden p-5 font-mono text-[11px] leading-7 sm:p-7 sm:text-xs">
          <div className="absolute inset-0 sx-dot-grid opacity-20" />
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-[14px] border border-white/12 bg-[#111315]/95 shadow-2xl">
            <div className="flex h-9 items-center justify-between border-b border-white/10 px-4 text-[10px] text-white/42"><span className="flex items-center gap-2"><FileCode2 className="size-3.5 text-sky-300" />main.py</span><span>Python</span></div>
            <div className="relative min-h-[20.5rem] overflow-hidden p-5 sm:p-6">
              <div><span className="mr-5 text-white/20">1</span><span className="text-fuchsia-300">def</span> <span className="text-sky-300">shortest_path</span>(graph, start):</div>
              <div><span className="mr-5 text-white/20">2</span>&nbsp;&nbsp;distances = &#123;node: <span className="text-amber-200">float</span>(<span className="text-emerald-300">&quot;inf&quot;</span>) <span className="text-fuchsia-300">for</span> node <span className="text-fuchsia-300">in</span> graph&#125;</div>
              <div className="-mx-2 rounded bg-violet-400/10 px-2"><span className="mr-5 text-white/20">3</span>&nbsp;&nbsp;distances[start] = <span className="text-amber-200">0</span></div>
              <div><span className="mr-5 text-white/20">4</span>&nbsp;&nbsp;queue = [(<span className="text-amber-200">0</span>, start)]</div>
              <div className="mt-4"><span className="mr-5 text-white/20">6</span>&nbsp;&nbsp;<span className="text-fuchsia-300">while</span> queue:</div>
              <div className="-mx-2 rounded bg-sky-400/10 px-2"><span className="mr-5 text-white/20">7</span>&nbsp;&nbsp;&nbsp;&nbsp;distance, node = pop_min(queue)</div>
              <div><span className="mr-5 text-white/20">8</span>&nbsp;&nbsp;&nbsp;&nbsp;relax_neighbours(graph, node)</div>
              <div className="mt-4"><span className="mr-4 text-white/20">10</span>&nbsp;&nbsp;<span className="text-fuchsia-300">return</span> distances</div>

              <motion.div className="pointer-events-none absolute left-[55%] top-[43%] z-10 text-violet-300" animate={reduceMotion ? undefined : { x: [0, 38, 14, 0], y: [0, -24, 18, 0] }} transition={{ duration: 5.8, ease: "easeInOut", repeat: Infinity }}>
                <MousePointer2 className="size-4 fill-current" /><span className="ml-3 -mt-1 block rounded bg-violet-400 px-2 py-0.5 font-sans text-[9px] font-medium text-white">Maria</span>
              </motion.div>
              <motion.div className="pointer-events-none absolute bottom-[20%] left-[33%] z-10 text-sky-300" animate={reduceMotion ? undefined : { x: [0, -24, 28, 0], y: [0, 20, -12, 0] }} transition={{ duration: 6.6, delay: 0.7, ease: "easeInOut", repeat: Infinity }}>
                <MousePointer2 className="size-4 fill-current" /><span className="ml-3 -mt-1 block rounded bg-sky-400 px-2 py-0.5 font-sans text-[9px] font-medium text-white">Andrei</span>
              </motion.div>
            </div>
          </div>
          <div className="relative mx-auto mt-3 flex max-w-xl items-center justify-between rounded-[10px] border border-white/10 bg-[#111315] px-4 py-2 text-[10px] text-white/46"><span>Project synced just now</span><span className="flex items-center gap-1.5 text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-300" />All changes saved</span></div>
        </div>
      </div>
    </div>
  );
}

function GroupsVisual() {
  return (
    <div className="grid h-full min-h-[31rem] bg-[#f7f7f6] text-[#171717] sm:grid-cols-[11.5rem_1fr] lg:min-h-0">
      <aside className="hidden border-r border-black/8 bg-white p-4 sm:block">
        <div className="flex items-center gap-2"><span className="flex size-8 items-center justify-center rounded-lg bg-black text-sm font-semibold text-white">A</span><div><p className="text-xs font-semibold">Algorithm Club</p><p className="text-[10px] text-black/42">18 members</p></div></div>
        <p className="mt-7 text-[10px] font-medium tracking-[0.14em] text-black/38">CHANNELS</p>
        <div className="mt-2 space-y-1 text-xs text-black/52">
          {["general", "graphs", "weekly-problems", "projects"].map((channel, index) => <div key={channel} className={`flex items-center gap-2 rounded-lg px-2 py-2 ${index === 1 ? "bg-black text-white" : ""}`}><Hash className="size-3.5" />{channel}{index === 1 && <span className="ml-auto rounded-full bg-white px-1.5 text-[9px] text-black">2</span>}</div>)}
        </div>
        <div className="mt-8 flex items-center gap-2 rounded-lg border border-black/8 px-2.5 py-2 text-xs"><Users className="size-3.5" />Invite members</div>
      </aside>
      <div className="flex min-h-0 min-w-0 flex-col">
        <div className="flex h-14 items-center justify-between border-b border-black/8 bg-white px-4 sm:px-5"><div><p className="flex items-center gap-1.5 text-sm font-semibold"><Hash className="size-4" />graphs</p><p className="text-[10px] text-black/42">Share solutions and ask for feedback</p></div><div className="flex items-center gap-3 text-black/42"><Pin className="size-4" /><Users className="size-4" /></div></div>
        <div className="flex-1 space-y-5 overflow-hidden p-5 sm:p-6">
          {[
            ["M", "Maria", "10:18", "I attached a shorter BFS solution for review.", "bg-violet-400"],
            ["A", "Andrei", "10:21", "@Maria nice — the visited set also keeps it linear.", "bg-sky-400"],
            ["D", "Daria", "10:24", "Pinned the explanation for the next study session.", "bg-amber-400"],
          ].map(([letter, name, time, message, color], index) => (
            <div key={name} className="flex gap-3">
              <span className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium text-white ${color}`}>{letter}</span>
              <div className="min-w-0"><div className="flex items-baseline gap-2"><p className="text-xs font-semibold">{name}</p><span className="text-[10px] text-black/35">{time}</span>{index === 2 && <span className="flex items-center gap-1 rounded bg-black/5 px-1.5 py-0.5 text-[9px] text-black/48"><Pin className="size-2.5" />Pinned</span>}</div><p className="mt-1 text-xs leading-5 text-black/58">{message}</p>{index === 0 && <div className="mt-2 flex max-w-sm items-center gap-3 rounded-[10px] border border-black/8 bg-white p-3"><FileCode2 className="size-5 text-sky-500" /><div><p className="text-[11px] font-medium">bfs-solution.py</p><p className="text-[9px] text-black/38">Python · attachment in #graphs</p></div></div>}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-black/8 bg-white p-3 sm:px-5"><div className="flex items-center gap-3 rounded-[10px] border border-black/10 px-3 py-2.5 text-xs text-black/38"><span className="flex-1">Message #graphs</span><Bell className="size-3.5" /><Send className="size-3.5 text-black" /></div><p className="mt-2 text-[9px] text-black/35">Maria is typing…</p></div>
      </div>
    </div>
  );
}

function RewardsVisual() {
  const rewards = [
    { name: "Orbit frame", price: "450", icon: Radio, tone: "bg-sky-50 text-sky-700", owned: true },
    { name: "Code laurels", price: "700", icon: Trophy, tone: "bg-emerald-50 text-emerald-700", owned: false },
    { name: "Pixel crown", price: "1,200", icon: Crown, tone: "bg-amber-50 text-amber-700", owned: false },
    { name: "Bug tamer", price: "300", icon: Medal, tone: "bg-violet-50 text-violet-700", owned: true },
  ];

  return (
    <div className="h-full min-h-[31rem] bg-[#f7f7f6] p-5 text-[#171717] sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="flex items-center gap-2 text-xs font-medium text-black/45"><ShoppingBag className="size-4" />REWARDS SHOP</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Make progress your own.</h3></div><div className="flex items-center gap-3 rounded-[12px] border border-black/8 bg-white px-4 py-3 shadow-sm"><span className="flex size-8 items-center justify-center rounded-full bg-amber-50 text-amber-600"><Coins className="size-4" /></span><div><p className="text-[10px] text-black/42">BALANCE</p><p className="text-sm font-semibold">1,250 points</p></div></div></div>
      <div className="mt-6 flex items-center gap-2 overflow-x-auto text-xs"><span className="rounded-lg bg-black px-3 py-2 text-white">All rewards</span>{["Frames", "Decorations", "Backgrounds", "Titles"].map((filter) => <span key={filter} className="shrink-0 rounded-lg border border-black/8 bg-white px-3 py-2 text-black/50">{filter}</span>)}<span className="ml-auto hidden items-center gap-1.5 text-black/48 sm:flex"><PackageOpen className="size-4" />Inventory · 2</span></div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {rewards.map(({ name, price, icon: Icon, tone, owned }) => (
          <div key={name} className="flex min-h-40 flex-col rounded-[13px] border border-black/8 bg-white p-4 shadow-sm">
            <div className={`flex size-11 items-center justify-center rounded-[12px] ${tone}`}><Icon className="size-5" /></div>
            <div className="mt-auto pt-4"><div className="flex items-start justify-between gap-2"><p className="text-sm font-semibold">{name}</p>{owned && <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700">In inventory</span>}</div><p className="mt-2 flex items-center gap-1 text-[11px] text-black/48"><Coins className="size-3 text-amber-500" />{price}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompetitionsVisual() {
  return (
    <div className="grid h-full min-h-[31rem] bg-[#f7f7f6] text-[#171717] lg:grid-cols-[1fr_12.5rem]">
      <div className="min-w-0 p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4"><div><p className="flex items-center gap-2 text-xs font-medium text-black/45"><Trophy className="size-4" />SCRIPTICX ARENA</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">Programming competition</h3></div><span className="flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-[10px] font-medium text-red-700"><span className="size-1.5 rounded-full bg-red-500" />LIVE</span></div>
        <div className="mt-5 grid gap-3 sm:grid-cols-[10.5rem_1fr]">
          <div className="space-y-2">
            {["Shortest path", "Balanced brackets", "Interval merge"].map((problem, index) => <div key={problem} className={`rounded-[10px] border p-3 ${index === 0 ? "border-black bg-black text-white" : "border-black/8 bg-white"}`}><div className="flex items-center justify-between"><span className="text-[10px] opacity-55">PROBLEM {index + 1}</span><span className="text-[10px]">{["100", "150", "200"][index]}p</span></div><p className="mt-2 text-xs font-medium">{problem}</p>{index === 0 && <p className="mt-3 text-[9px] text-emerald-300">Best · 80/100</p>}</div>)}
          </div>
          <div className="overflow-hidden rounded-[12px] border border-black/8 bg-[#111315] text-white shadow-sm">
            <div className="flex h-9 items-center justify-between border-b border-white/10 px-3 text-[10px] text-white/45"><span>solution.py</span><span className="flex items-center gap-1"><Clock3 className="size-3" />42:18</span></div>
            <div className="p-4 font-mono text-[10px] leading-6 text-white/72"><div><span className="mr-3 text-white/20">1</span><span className="text-fuchsia-300">def</span> <span className="text-sky-300">solve</span>(graph):</div><div><span className="mr-3 text-white/20">2</span>&nbsp;&nbsp;distance = dijkstra(graph)</div><div><span className="mr-3 text-white/20">3</span>&nbsp;&nbsp;<span className="text-fuchsia-300">return</span> distance[-1]</div></div>
            <div className="mt-5 border-t border-white/10 px-4 py-3"><div className="flex items-center justify-between text-[10px]"><span className="text-white/45">Test results</span><span className="text-emerald-300">4 / 5 passed</span></div><div className="mt-3 flex gap-2">{[true, true, true, true, false].map((passed, index) => <span key={index} className={`h-1.5 flex-1 rounded-full ${passed ? "bg-emerald-400" : "bg-red-400"}`} />)}</div></div>
          </div>
        </div>
      </div>
      <aside className="hidden border-l border-black/8 bg-white p-4 lg:block"><div className="flex items-center justify-between"><p className="text-xs font-semibold">Leaderboard</p><Medal className="size-4 text-black/38" /></div><div className="mt-5 space-y-2">{[["1", "Maria", "380"], ["2", "Andrei", "330"], ["3", "Daria", "280"], ["4", "Alex", "240"]].map(([rank, name, score], index) => <div key={name} className={`flex items-center gap-2 rounded-lg p-2.5 text-xs ${index === 0 ? "bg-amber-50" : "bg-black/[0.025]"}`}><span className="flex size-6 items-center justify-center rounded-full border border-black/8 bg-white text-[10px] font-semibold">{rank}</span><span className="font-medium">{name}</span><span className="ml-auto tabular-nums text-black/45">{score}p</span></div>)}</div><div className="mt-6 rounded-[10px] border border-black/8 p-3"><p className="text-[10px] text-black/42">YOUR SUBMISSIONS</p><p className="mt-2 text-lg font-semibold">6</p><p className="text-[10px] text-black/42">Best scores are saved</p></div></aside>
    </div>
  );
}

const visuals = {
  editor: EditorVisual,
  learn: LearnVisual,
  workspaces: WorkspacesVisual,
  planner: PlannerVisual,
  notes: NotesVisual,
  whiteboard: WhiteboardVisual,
  graphs: GraphsVisual,
  classes: ClassesVisual,
  problems: ProblemsVisual,
  teacherDashboard: TeacherDashboardVisual,
  students: StudentsVisual,
  assignments: AssignmentsVisual,
  calendar: TeacherCalendarVisual,
  analytics: AnalyticsVisual,
  personalDashboard: PersonalDashboardVisual,
  search: PlatformSearchVisual,
  collaboration: CollaborationVisual,
  groups: GroupsVisual,
  rewards: RewardsVisual,
  competitions: CompetitionsVisual,
  leaderboard: LeaderboardVisual,
  feed: FeedVisual,
  documentation: DocumentationVisual,
  examples: ExamplesVisual,
};

const audienceKeys = ["student", "teacher", "personal"] as const;
type AudienceKey = (typeof audienceKeys)[number];
type ShowcaseKey = keyof typeof visuals;

const audienceIcons = {
  student: GraduationCap,
  teacher: School,
  personal: Sparkles,
};

const roleFeatures: Record<AudienceKey, readonly ShowcaseKey[]> = {
  student: ["workspaces", "planner", "notes", "whiteboard", "graphs", "editor", "learn", "problems", "classes"],
  teacher: ["teacherDashboard", "classes", "students", "assignments", "calendar", "analytics"],
  personal: ["personalDashboard", "editor", "collaboration", "problems", "search", "competitions", "leaderboard", "rewards", "feed", "groups", "learn", "documentation", "examples"],
};

export default function PlatformShowcase() {
  const locale = getMarketingLocale(useLocale());
  const content = marketingContent[locale].showcase;
  const audienceContent = marketingContent[locale].audiences;
  const [audience, setAudience] = useState<AudienceKey>("student");
  const [active, setActive] = useState<ShowcaseKey>(roleFeatures.student[0]);
  const reduceMotion = useReducedMotion();
  const activeFeatureKeys = roleFeatures[audience];
  const featureTabs = [...content.tabs]
    .filter((tab) => activeFeatureKeys.includes(tab.key as ShowcaseKey))
    .sort(
      (left, right) =>
        activeFeatureKeys.indexOf(left.key as ShowcaseKey) - activeFeatureKeys.indexOf(right.key as ShowcaseKey),
    );
  const activeTab = content.tabs.find((tab) => tab.key === active) ?? featureTabs[0] ?? content.tabs[0];
  const Visual = visuals[activeTab.key];

  function handleAudienceChange(value: string) {
    const nextAudience = value as AudienceKey;
    if (!audienceKeys.includes(nextAudience)) return;
    setAudience(nextAudience);
    setActive(roleFeatures[nextAudience][0]);
  }

  return (
    <section className="border-b py-20 sm:py-24">
      <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{content.title}</h2>
        </Reveal>

        <Reveal delay={0.06} className="mt-8 sm:mt-10">
          <Tabs value={audience} onValueChange={handleAudienceChange}>
            <TabsList
              aria-label={audienceContent.switchLabel}
              className="mx-auto grid h-12 w-full max-w-xl grid-cols-3 items-stretch gap-1 rounded-[12px] border bg-muted/45 p-1 shadow-sm group-data-horizontal/tabs:h-12"
            >
              {audienceKeys.map((role) => {
                const Icon = audienceIcons[role];
                return (
                  <TabsTrigger
                    key={role}
                    value={role}
                    className="h-auto min-w-0 self-stretch rounded-[8px] px-2 text-xs shadow-none data-active:bg-foreground data-active:text-background! data-active:shadow-none sm:px-4 sm:text-sm"
                  >
                    <Icon className="size-4" />
                    <span className="truncate">{audienceContent.tabs[role]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
          <div className="mt-8 grid overflow-hidden rounded-[20px] border bg-card shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={audience}
                initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.996 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.996 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="col-start-1 row-start-1 origin-center"
              >
                <div className="flex gap-1 overflow-x-auto border-b p-2" role="tablist" aria-label={audienceContent.tabs[audience]}>
                  {featureTabs.map((tab) => <button key={tab.key} role="tab" aria-selected={active === tab.key} onClick={() => setActive(tab.key as ShowcaseKey)} className={`min-h-10 shrink-0 rounded-lg px-4 text-sm font-medium transition-colors ${active === tab.key ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{tab.label}</button>)}
                </div>
                <div className="grid">
                  <AnimatePresence mode="sync" initial={false}>
                    <motion.div
                      key={`${audience}-${activeTab.key}`}
                      role="tabpanel"
                      initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.995 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.995 }}
                      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                      className="col-start-1 row-start-1 grid origin-center lg:h-[38rem] lg:grid-cols-[0.72fr_1.28fr]"
                    >
                      <div className="relative flex flex-col justify-center overflow-hidden border-b p-6 pb-28 sm:p-9 sm:pb-32 lg:h-full lg:border-b-0 lg:border-r lg:p-12 lg:pb-36">
                        <div className="relative z-10">
                          <h3 className="text-balance text-3xl font-semibold tracking-[-0.035em]">{activeTab.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">{activeTab.description}</p><ul className="mt-7 space-y-3">{activeTab.points.map((point) => <li key={point} className="flex items-center gap-3 text-sm"><span className="flex size-5 items-center justify-center rounded-full bg-muted"><Check className="size-3" /></span>{point}</li>)}</ul>
                        </div>
                        <div className="sx-mascot-glow pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_78%_100%,rgba(128,224,183,0.2),transparent_54%)]" />
                        <MascotPeek mascot="robot" delay={-2.1} className="absolute -bottom-4 right-4 w-28 opacity-95 sm:right-8 sm:w-32 lg:right-9 lg:w-36" />
                      </div>
                      <div className="min-w-0 overflow-hidden bg-muted/30 lg:h-full">
                        <div className="h-full"><Visual /></div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
