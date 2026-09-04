import {
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  Code2,
  FileCode2,
  FileText,
  Flame,
  FolderOpen,
  Hash,
  LayoutDashboard,
  Search,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";

export function PlannerVisual() {
  const days = ["Mon 26", "Tue 27", "Wed 28", "Thu 29", "Fri 30"];
  return (
    <div className="h-full min-h-[31rem] bg-[#f7f7f6] p-5 text-[#171717] sm:p-7 lg:min-h-0">
      <div className="flex items-end justify-between"><div><p className="text-xs font-medium text-black/42">PLANNER</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Plan the learning week.</h3></div><span className="hidden rounded-lg bg-black px-3 py-2 text-xs text-white sm:block">Add task</span></div>
      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_12rem]">
        <div className="overflow-hidden rounded-[12px] border border-black/8 bg-white"><div className="grid grid-cols-5 border-b bg-black/[0.025]">{days.map((day, index) => <span key={day} className={`border-r px-2 py-3 text-center text-[9px] font-medium ${index === 2 ? "bg-black text-white" : "text-black/42"}`}>{day}</span>)}</div><div className="grid min-h-72 grid-cols-5">{days.map((day, index) => <div key={day} className="border-r p-2">{index === 0 && <span className="block rounded-lg bg-sky-50 p-2 text-[9px] font-medium text-sky-800">Review loops<br /><span className="font-normal opacity-60">16:00</span></span>}{index === 2 && <span className="block rounded-lg bg-emerald-50 p-2 text-[9px] font-medium text-emerald-800">Graphs class<br /><span className="font-normal opacity-60">18:00</span></span>}{index === 4 && <span className="block rounded-lg bg-violet-50 p-2 text-[9px] font-medium text-violet-800">Functions quiz<br /><span className="font-normal opacity-60">14:00</span></span>}</div>)}</div></div>
        <aside className="rounded-[12px] border border-black/8 bg-white p-4"><p className="text-xs font-semibold">Today</p><div className="mt-4 space-y-3">{[["Lesson 4", true], ["Solve 2 problems", false], ["Update notes", false]].map(([item, done]) => <div key={String(item)} className="flex items-start gap-2 text-[10px]"><span className={`mt-0.5 flex size-4 items-center justify-center rounded-full border ${done ? "border-black bg-black text-white" : "border-black/15"}`}>{done && <Check className="size-2.5" />}</span><span className={done ? "text-black/38 line-through" : ""}>{String(item)}</span></div>)}</div><div className="mt-6 border-t pt-4"><p className="text-[9px] text-black/38">WEEKLY FOCUS</p><p className="mt-2 text-sm font-semibold">Graph fundamentals</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/7"><div className="h-full w-[62%] rounded-full bg-black" /></div></div></aside>
      </div>
    </div>
  );
}

export function NotesVisual() {
  return (
    <div className="grid h-full min-h-[31rem] bg-[#f7f7f6] text-[#171717] sm:grid-cols-[12rem_1fr] lg:min-h-0">
      <aside className="hidden border-r border-black/8 bg-white p-4 sm:block"><p className="text-[10px] font-medium tracking-[0.14em] text-black/38">MY NOTES</p><div className="mt-4 space-y-2">{["Graph theory", "Dynamic programming", "C++ reference", "Ideas"].map((note, index) => <div key={note} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs ${index === 0 ? "bg-black text-white" : "text-black/48"}`}><FileText className="size-3.5" />{note}</div>)}</div><div className="mt-8 flex items-center gap-2 rounded-lg border border-dashed border-black/15 px-2.5 py-2 text-[10px] text-black/45"><FolderOpen className="size-3.5" />New folder</div></aside>
      <div className="flex min-w-0 flex-col p-5 sm:p-7"><div className="flex items-start justify-between"><div><p className="text-xs text-black/42">ALGORITHMS · UPDATED TODAY</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Graph theory</h3></div><span className="rounded-lg border bg-white px-3 py-2 text-xs">Share</span></div><div className="mt-6 flex-1 rounded-[12px] border border-black/8 bg-white p-5 shadow-sm sm:p-6"><h4 className="text-lg font-semibold">Breadth-first search</h4><p className="mt-3 text-xs leading-6 text-black/55">BFS visits vertices level by level. A queue stores the next vertices and a visited set prevents repeated work.</p><div className="mt-5 rounded-[10px] bg-[#111315] p-4 font-mono text-[10px] leading-6 text-white/72"><span className="text-fuchsia-300">QUEUE</span> ← start<br /><span className="text-fuchsia-300">WHILE</span> queue is not empty<br />&nbsp;&nbsp;visit neighbours<br /><span className="text-fuchsia-300">END</span></div><div className="mt-5 flex flex-wrap gap-2">{["O(V + E)", "Queue", "Shortest path"].map((tag) => <span key={tag} className="rounded-full bg-black/[0.045] px-2.5 py-1 text-[9px] font-medium text-black/55">{tag}</span>)}</div></div></div>
    </div>
  );
}

export function WhiteboardVisual() {
  return (
    <div className="relative h-full min-h-[31rem] overflow-hidden bg-[#fbfbfa] text-[#171717] lg:min-h-0">
      <div className="absolute inset-0 sx-dot-grid opacity-55" />
      <div className="relative flex h-14 items-center justify-between border-b bg-white/90 px-5 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-sm font-semibold"><LayoutDashboard className="size-4" />ML model notes</div>
        <div className="flex gap-2 text-[10px]"><span className="rounded-lg border bg-white px-2.5 py-1.5">Select</span><span className="rounded-lg bg-black px-2.5 py-1.5 text-white">Add note</span></div>
      </div>

      <div className="relative h-[calc(100%-3.5rem)] overflow-hidden">
        <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 800 440" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id="whiteboard-arrow" viewBox="0 0 8 8" refX="6.5" refY="4" markerWidth="8" markerHeight="8" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M1 1 L7 4 L1 7" fill="none" stroke="rgba(23,23,23,.38)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
          <g fill="none" stroke="rgba(23,23,23,.24)" strokeWidth="2" strokeDasharray="7 8" strokeLinecap="round" markerEnd="url(#whiteboard-arrow)">
            <path d="M286 126 C312 132 330 145 348 157" />
            <path d="M455 205 C447 236 410 256 375 277" />
            <path d="M350 352 C370 371 381 365 392 351" />
          </g>
        </svg>

        <div className="absolute right-[4%] top-[4%] w-[28%] rotate-[2deg] opacity-80">
          <Image src="/notes-hello-world.svg" width={1832} height={285} alt="Hello world handwritten note" className="h-auto w-full" draggable={false} />
          <span className="absolute -inset-x-2 bottom-[-4px] -z-10 h-3 rotate-[-2deg] rounded-full bg-amber-200/55 blur-[1px]" />
        </div>

        <div className="isolate absolute left-[5%] top-[12%] w-[45%] rotate-[-1.5deg] rounded-[12px] border border-black/8 bg-white/92 p-3 shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
          <span className="absolute inset-x-3 bottom-4 z-0 h-5 -rotate-1 rounded bg-emerald-200/38" />
          <Image src="/whiteboard-1.svg" width={1832} height={366} alt="Read training data code note" className="relative z-10 h-auto w-full" draggable={false} />
        </div>

        <div className="isolate absolute right-[5%] top-[30%] w-[52%] rotate-[1deg] rounded-[12px] border border-black/8 bg-white/94 p-3 shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
          <span className="absolute inset-x-3 bottom-3 z-0 h-7 rotate-[0.5deg] rounded bg-sky-200/42" />
          <Image src="/whiteboard-2.svg" width={2613} height={488} alt="Prepare model features code note" className="relative z-10 h-auto w-full" draggable={false} />
        </div>

        <div className="isolate absolute bottom-[17%] left-[8%] w-[39%] rotate-[-1deg] rounded-[12px] border border-black/8 bg-white/94 p-3 shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
          <span className="absolute inset-x-3 bottom-3 z-0 h-8 -rotate-1 rounded bg-violet-200/40" />
          <Image src="/whiteboard-3.svg" width={1574} height={494} alt="Train linear regression model code note" className="relative z-10 h-auto w-full" draggable={false} />
          <span className="pointer-events-none absolute bottom-[8%] left-[4%] z-20 h-[42%] w-[91%] rotate-[1deg] rounded-[50%] border-2 border-red-400/65" />
          <span className="absolute -bottom-6 left-5 z-20 rotate-[-4deg] text-[9px] font-medium text-red-500">important — fit before predict ↑</span>
        </div>

        <div className="isolate absolute bottom-[5%] right-[4%] w-[48%] rotate-[1.5deg] rounded-[12px] border border-black/8 bg-white/94 p-3 shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
          <span className="absolute inset-x-3 bottom-3 z-0 h-8 rotate-1 rounded bg-amber-200/42" />
          <Image src="/whiteboard-4.svg" width={2168} height={480} alt="Run model prediction code note" className="relative z-10 h-auto w-full" draggable={false} />
        </div>

        <span className="absolute left-[3%] top-[5%] -rotate-3 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[9px] font-medium text-black/46">dataset → features → model → result</span>
      </div>
    </div>
  );
}

export function GraphsVisual() {
  const nodes = [{ x: 110, y: 95, n: "A" }, { x: 320, y: 65, n: "B" }, { x: 500, y: 150, n: "C" }, { x: 225, y: 285, n: "D" }, { x: 470, y: 330, n: "E" }];
  return (
    <div className="grid h-full min-h-[31rem] bg-[#f7f7f6] text-[#171717] sm:grid-cols-[1fr_12rem] lg:min-h-0"><div className="relative overflow-hidden p-5 sm:p-7"><div className="absolute inset-0 sx-dot-grid opacity-55" /><div className="relative"><p className="text-xs font-medium text-black/42">GRAPH TOOL</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Explore connections visually.</h3></div><svg className="relative mt-4 h-[23rem] w-full" viewBox="0 0 610 390" aria-label="Interactive graph preview"><g stroke="rgba(17,17,17,.25)" strokeWidth="3"><line x1="110" y1="95" x2="320" y2="65" /><line x1="110" y1="95" x2="225" y2="285" /><line x1="320" y1="65" x2="500" y2="150" /><line x1="320" y1="65" x2="225" y2="285" /><line x1="225" y1="285" x2="470" y2="330" /><line x1="500" y1="150" x2="470" y2="330" /></g>{nodes.map(({ x, y, n }, index) => <g key={n}><circle cx={x} cy={y} r="27" fill={index < 3 ? "#171717" : "white"} stroke="#171717" strokeWidth="2" /><text x={x} y={y + 4} textAnchor="middle" fontSize="13" fill={index < 3 ? "white" : "#171717"}>{n}</text></g>)}</svg></div><aside className="hidden border-l border-black/8 bg-white p-4 sm:block"><p className="text-xs font-semibold">Traversal</p><div className="mt-4 flex flex-wrap gap-2">{["A", "B", "C"].map((node) => <span key={node} className="flex size-8 items-center justify-center rounded-full bg-black text-xs text-white">{node}</span>)}<span className="flex size-8 items-center justify-center rounded-full border text-xs text-black/35">D</span></div><div className="mt-7 space-y-3 text-[10px] text-black/48"><p className="flex justify-between"><span>Vertices</span><b className="text-black">5</b></p><p className="flex justify-between"><span>Edges</span><b className="text-black">6</b></p><p className="flex justify-between"><span>Directed</span><b className="text-black">No</b></p></div></aside></div>
  );
}

export function StudentsVisual() {
  return (
    <div className="h-full min-h-[31rem] bg-[#f7f7f6] p-5 text-[#171717] sm:p-7 lg:min-h-0"><div className="flex items-end justify-between"><div><p className="text-xs font-medium text-black/42">STUDENTS</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Follow every learner.</h3></div><span className="rounded-lg border bg-white px-3 py-2 text-xs">Export</span></div><div className="mt-6 overflow-hidden rounded-[12px] border border-black/8 bg-white"><div className="grid grid-cols-[1fr_8rem_7rem] border-b bg-black/[0.025] px-4 py-3 text-[9px] font-medium text-black/38"><span>STUDENT</span><span>CLASS</span><span>PROGRESS</span></div>{[["Andrei Pop", "Algorithms A", 92], ["Daria Serban", "Algorithms A", 84], ["Eric Littau", "MiniScript+", 76], ["Maia Pricop", "Algorithms B", 58], ["Mara Ionescu", "MiniScript+", 34]].map(([name, className, progress], index) => <div key={String(name)} className="grid grid-cols-[1fr_8rem_7rem] items-center border-b px-4 py-3.5 text-[10px] last:border-0"><span className="flex items-center gap-2"><span className="flex size-7 items-center justify-center rounded-full bg-black text-white">{String(name)[0]}</span><span><b className="block font-medium">{String(name)}</b><span className="text-black/38">student{index + 1}@example.com</span></span></span><span className="text-black/48">{String(className)}</span><span><span className="flex justify-between"><span>{String(progress)}%</span><ChevronRight className="size-3 text-black/35" /></span><span className="mt-1 block h-1 overflow-hidden rounded-full bg-black/7"><span className="block h-full rounded-full bg-black" style={{ width: `${progress}%` }} /></span></span></div>)}</div></div>
  );
}

export function PersonalDashboardVisual() {
  return (
    <div className="h-full min-h-[31rem] bg-[#f7f7f6] p-5 text-[#171717] sm:p-7 lg:min-h-0"><div><p className="text-xs font-medium text-black/42">PERSONAL DASHBOARD</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Welcome back, Andrei.</h3></div><div className="mt-6 grid grid-cols-3 gap-2">{[[Flame, "12", "day streak"], [Trophy, "1,250", "reward points"], [Code2, "48", "problems solved"]].map(([icon, value, label]) => { const Icon = icon as typeof Flame; return <div key={String(label)} className="rounded-[11px] border border-black/8 bg-white p-3"><Icon className="size-4 text-black/38" /><p className="mt-4 text-xl font-semibold">{String(value)}</p><p className="mt-1 text-[9px] text-black/42">{String(label)}</p></div>; })}</div><div className="mt-3 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]"><div className="rounded-[12px] border border-black/8 bg-[#111315] p-5 text-white"><p className="text-[10px] text-white/42">DAILY CHALLENGE</p><h4 className="mt-3 text-xl font-semibold">Longest increasing sequence</h4><p className="mt-2 text-xs leading-5 text-white/48">Keep your streak alive with today&apos;s medium problem.</p><div className="mt-7 flex items-center justify-between"><span className="text-xs text-amber-200">+80 points</span><span className="rounded-lg bg-white px-3 py-2 text-xs text-black">Start challenge</span></div></div><div className="rounded-[12px] border border-black/8 bg-white p-5"><p className="text-xs font-semibold">Continue learning</p><p className="mt-4 text-sm font-medium">Graph algorithms</p><p className="mt-1 text-[10px] text-black/42">Lesson 4 of 6</p><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/7"><div className="h-full w-[68%] rounded-full bg-black" /></div><p className="mt-5 flex items-center gap-2 text-[10px] text-black/45"><Clock3 className="size-3.5" />18 min remaining</p></div></div></div>
  );
}

export function SearchVisual() {
  return (
    <div className="h-full min-h-[31rem] bg-[#f7f7f6] p-5 text-[#171717] sm:p-7 lg:min-h-0"><div className="mx-auto max-w-2xl"><p className="text-xs font-medium text-black/42">SEARCH SCRIPTICX</p><div className="mt-3 flex items-center gap-3 rounded-[12px] border border-black/10 bg-white px-4 py-3 shadow-sm"><Search className="size-5 text-black/38" /><span className="flex-1 text-sm">graph algorithms</span><span className="rounded border bg-black/[0.03] px-2 py-1 text-[9px] text-black/38">⌘ K</span></div><div className="mt-5 flex gap-2 text-[10px]"><span className="rounded-full bg-black px-3 py-1.5 text-white">All</span>{["Problems", "Learning", "Groups"].map((filter) => <span key={filter} className="rounded-full border bg-white px-3 py-1.5 text-black/48">{filter}</span>)}</div><div className="mt-4 space-y-2">{[[FileCode2, "Shortest path", "Problem · Medium", "Solve weighted graphs with Dijkstra."], [BookOpen, "Graph traversal", "Learning path · Lesson", "BFS and DFS step by step."], [Users, "Algorithm Club", "Group · 18 members", "Discuss weekly graph problems."]].map(([icon, title, meta, description]) => { const Icon = icon as typeof FileCode2; return <div key={String(title)} className="flex items-start gap-3 rounded-[11px] border border-black/8 bg-white p-4"><span className="flex size-9 items-center justify-center rounded-lg bg-black/[0.04]"><Icon className="size-4" /></span><div><p className="text-xs font-semibold">{String(title)}</p><p className="mt-1 text-[9px] text-black/38">{String(meta)}</p><p className="mt-2 text-[10px] text-black/52">{String(description)}</p></div><ChevronRight className="ml-auto size-4 text-black/30" /></div>; })}</div></div></div>
  );
}

export function LeaderboardVisual() {
  return (
    <div className="h-full min-h-[31rem] bg-[#f7f7f6] p-5 text-[#171717] sm:p-7 lg:min-h-0"><div className="text-center"><p className="text-xs font-medium text-black/42">COMMUNITY LEADERBOARD</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Progress worth celebrating.</h3></div><div className="mx-auto mt-7 grid max-w-2xl grid-cols-3 items-end gap-2"><div className="rounded-t-[14px] border border-b-0 bg-white p-4 text-center"><span className="mx-auto flex size-10 items-center justify-center rounded-full bg-slate-100 font-semibold">A</span><p className="mt-3 text-xs font-semibold">Andrei</p><p className="mt-1 text-[10px] text-black/42">3,840 pts</p><div className="mt-4 h-16 rounded-t-lg bg-slate-100 pt-3 text-2xl font-semibold">2</div></div><div className="rounded-t-[14px] border border-b-0 bg-white p-4 text-center"><Trophy className="mx-auto size-5 text-amber-500" /><span className="mx-auto mt-2 flex size-11 items-center justify-center rounded-full bg-amber-50 font-semibold">M</span><p className="mt-3 text-xs font-semibold">Maria</p><p className="mt-1 text-[10px] text-black/42">4,120 pts</p><div className="mt-4 h-24 rounded-t-lg bg-black pt-3 text-2xl font-semibold text-white">1</div></div><div className="rounded-t-[14px] border border-b-0 bg-white p-4 text-center"><span className="mx-auto flex size-10 items-center justify-center rounded-full bg-orange-50 font-semibold">D</span><p className="mt-3 text-xs font-semibold">Daria</p><p className="mt-1 text-[10px] text-black/42">3,420 pts</p><div className="mt-4 h-12 rounded-t-lg bg-orange-50 pt-3 text-2xl font-semibold">3</div></div></div></div>
  );
}

export function FeedVisual() {
  return (
    <div className="grid h-full min-h-[31rem] bg-[#f7f7f6] text-[#171717] sm:grid-cols-[1fr_12rem] lg:min-h-0"><div className="p-5 sm:p-7"><div className="flex items-center justify-between"><div><p className="text-xs font-medium text-black/42">COMMUNITY FEED</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Learn in public.</h3></div><span className="rounded-lg bg-black px-3 py-2 text-xs text-white">New post</span></div><div className="mt-6 space-y-3">{[["M", "Maria", "Finished the graph roadmap today — the visual examples finally made Dijkstra click.", "Learning milestone"], ["E", "Eric", "Shared a cleaner MiniScript+ solution for this week’s challenge.", "Code · 14 lines"]].map(([letter, name, post, meta]) => <article key={name} className="rounded-[12px] border border-black/8 bg-white p-4"><div className="flex items-center gap-2"><span className="flex size-8 items-center justify-center rounded-full bg-black text-xs text-white">{letter}</span><div><p className="text-xs font-semibold">{name}</p><p className="text-[9px] text-black/38">12 minutes ago</p></div></div><p className="mt-4 text-xs leading-5 text-black/58">{post}</p><div className="mt-4 flex items-center justify-between border-t pt-3 text-[10px] text-black/42"><span className="rounded-full bg-black/[0.04] px-2.5 py-1">{meta}</span><span className="flex items-center gap-3"><span>★ 18</span><span>Reply</span></span></div></article>)}</div></div><aside className="hidden border-l border-black/8 bg-white p-4 sm:block"><p className="text-xs font-semibold">Trending</p><div className="mt-4 space-y-4">{["#miniscript", "#graphs", "#dailychallenge", "#buildinpublic"].map((tag, index) => <div key={tag}><p className="flex items-center gap-1.5 text-[10px] font-medium"><Hash className="size-3" />{tag.slice(1)}</p><p className="mt-1 text-[9px] text-black/38">{42 - index * 7} posts</p></div>)}</div></aside></div>
  );
}

export function DocumentationVisual() {
  return (
    <div className="grid h-full min-h-[31rem] bg-[#f7f7f6] text-[#171717] sm:grid-cols-[12rem_1fr] lg:min-h-0"><aside className="hidden border-r border-black/8 bg-white p-4 sm:block"><p className="text-[10px] font-medium tracking-[0.14em] text-black/38">DOCUMENTATION</p>{["Getting started", "Language basics", "Variables", "Conditions", "Loops", "Functions"].map((item, index) => <div key={item} className={`mt-2 rounded-lg px-2.5 py-2 text-xs ${index === 3 ? "bg-black text-white" : "text-black/48"}`}>{item}</div>)}</aside><div className="p-5 sm:p-7"><div className="flex items-center gap-2 text-[10px] text-black/38"><BookOpen className="size-3.5" />MiniScript+ / Language basics</div><h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Conditions</h3><p className="mt-3 max-w-xl text-xs leading-6 text-black/52">Use a condition when a program should choose between different actions.</p><div className="mt-6 rounded-[12px] border border-black/8 bg-white p-5"><p className="text-xs font-semibold">IF statement</p><div className="mt-4 rounded-[10px] bg-[#111315] p-4 font-mono text-[10px] leading-6 text-white/72"><span className="text-fuchsia-300">IF</span> score &gt;= 80 <span className="text-fuchsia-300">THEN</span><br />&nbsp;&nbsp;<span className="text-sky-300">PRINT</span> <span className="text-amber-200">&quot;Great work&quot;</span><br /><span className="text-fuchsia-300">END</span></div><div className="mt-5 rounded-lg border-l-2 border-emerald-400 bg-emerald-50/60 p-3 text-[10px] leading-5 text-emerald-900">Conditions are evaluated from top to bottom. Keep the most specific case first.</div></div></div></div>
  );
}

export function ExamplesVisual() {
  const examples = [["Hello, ScripticX", "Print values and run a first program", "Beginner"], ["Number guessing", "Practice loops and conditions", "Beginner"], ["Breadth-first search", "Traverse a graph with a queue", "Intermediate"], ["REST API client", "Fetch and process structured data", "Advanced"]];
  return (
    <div className="h-full min-h-[31rem] bg-[#f7f7f6] p-5 text-[#171717] sm:p-7 lg:min-h-0"><div className="flex items-end justify-between"><div><p className="text-xs font-medium text-black/42">CODE EXAMPLES</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Start from something that runs.</h3></div><span className="hidden rounded-lg border bg-white px-3 py-2 text-xs sm:block">All languages</span></div><div className="mt-6 grid grid-cols-2 gap-3">{examples.map(([title, description, level], index) => <article key={title} className="flex min-h-40 flex-col rounded-[12px] border border-black/8 bg-white p-4"><div className="flex items-start justify-between"><span className="flex size-9 items-center justify-center rounded-lg bg-black text-white"><FileCode2 className="size-4" /></span><Star className={`size-4 ${index === 1 ? "fill-amber-300 text-amber-300" : "text-black/20"}`} /></div><h4 className="mt-4 text-sm font-semibold">{title}</h4><p className="mt-1 text-[10px] leading-4 text-black/45">{description}</p><div className="mt-auto flex items-center justify-between pt-4 text-[9px] text-black/38"><span>{level}</span><span className="flex items-center gap-1">Open <ChevronRight className="size-3" /></span></div></article>)}</div></div>
  );
}
