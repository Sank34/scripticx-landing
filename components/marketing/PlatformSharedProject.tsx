"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import { Reveal } from "@/components/marketing/Reveal";
import type { MarketingLocale } from "@/lib/marketing-content";

const copy = {
  en: {
    eyebrow: "Inside the shared workspace",
    title: "One project. Two views.",
    description:
      "Learners focus on the next useful step. Teachers see the context behind every attempt. The lesson, code, tests and feedback stay connected throughout the project.",
    example: "Interactive example",
    project: "Route planner",
    shared: "Same project",
    learner: "Learner view",
    teacher: "Teacher view",
    phases: [
      {
        id: "assign",
        label: "Assign",
        learner: {
          state: "Ready to begin",
          title: "The brief is clear from the start.",
          description: "The goal, supporting lesson and practice appear together before the first line of code.",
          facts: ["Lesson attached: Graph basics", "Practice linked: Breadth-first search"],
        },
        teacher: {
          state: "Published",
          title: "The learning goal stays beside the work.",
          description: "The project is connected to the concept it develops, so the task has a clear place in the learning path.",
          facts: ["Concept: Graph traversal", "Materials attached to the project"],
        },
      },
      {
        id: "solve",
        label: "Solve",
        learner: {
          state: "Working",
          title: "The idea becomes executable code.",
          description: "The editor, project files and run output stay in the same focused workspace.",
          facts: ["Current file: route.msp", "Run output linked to this attempt"],
          code: ["graph = READ_MAP()", "route = BFS(graph, start, finish)", "PRINT route"],
        },
        teacher: {
          state: "Following the attempt",
          title: "Progress is visible in context.",
          description: "The teacher can open the same project and understand what the learner tried before offering guidance.",
          facts: ["Project work in progress", "Latest run available for review"],
        },
      },
      {
        id: "review",
        label: "Review",
        learner: {
          state: "Feedback received",
          title: "Feedback reaches the relevant step.",
          description: "Comments stay attached to the project, making the next change specific and easy to revisit.",
          facts: ["Review linked to the latest run", "Reasoning stays beside the solution"],
        },
        teacher: {
          state: "Reviewing",
          title: "The solution can be read, tested and discussed.",
          description: "The teacher sees the code, its result and the learning goal together instead of reconstructing the context.",
          facts: ["Code and output in one review", "Feedback attached to the project"],
          note: "Check how the queue changes after each visited node.",
        },
      },
      {
        id: "improve",
        label: "Improve",
        learner: {
          state: "Ready to revise",
          title: "The next attempt starts from useful feedback.",
          description: "The learner can update the same project, rerun it and compare the reasoning with the previous attempt.",
          facts: ["Feedback remains visible", "Revision stays in the same project"],
        },
        teacher: {
          state: "Next step prepared",
          title: "One project informs what comes next.",
          description: "The completed review points toward the next concept without separating progress from the work that produced it.",
          facts: ["Review connected to progress", "Next concept ready to assign"],
        },
      },
    ],
  },
  ro: {
    eyebrow: "În interiorul workspace-ului comun",
    title: "Un proiect. Două perspective.",
    description:
      "Elevul vede următorul pas util. Profesorul vede contextul fiecărei încercări. Lecția, codul, testele și feedback-ul rămân conectate pe tot parcursul proiectului.",
    example: "Exemplu interactiv",
    project: "Planificator de traseu",
    shared: "Același proiect",
    learner: "Perspectiva elevului",
    teacher: "Perspectiva profesorului",
    phases: [
      {
        id: "assign",
        label: "Publică",
        learner: {
          state: "Gata de început",
          title: "Cerința este clară de la început.",
          description: "Obiectivul, lecția suport și exercițiile apar împreună înainte de prima linie de cod.",
          facts: ["Lecție atașată: Bazele grafurilor", "Exercițiu asociat: Parcurgerea în lățime"],
        },
        teacher: {
          state: "Publicat",
          title: "Obiectivul rămâne lângă activitate.",
          description: "Proiectul este conectat la conceptul pe care îl dezvoltă, astfel încât activitatea are un loc clar în parcurs.",
          facts: ["Concept: Parcurgerea grafurilor", "Materiale atașate proiectului"],
        },
      },
      {
        id: "solve",
        label: "Rezolvă",
        learner: {
          state: "În lucru",
          title: "Ideea devine cod executabil.",
          description: "Editorul, fișierele proiectului și rezultatul rulării rămân în același workspace concentrat.",
          facts: ["Fișier curent: traseu.msp", "Rezultatul rulării este legat de încercare"],
          code: ["graf = CITESTE_HARTA()", "traseu = BFS(graf, start, final)", "AFISEAZA traseu"],
        },
        teacher: {
          state: "Urmărește încercarea",
          title: "Progresul este vizibil în context.",
          description: "Profesorul poate deschide același proiect și poate înțelege ce a încercat elevul înainte să ofere îndrumare.",
          facts: ["Proiect în lucru", "Ultima rulare este disponibilă pentru analiză"],
        },
      },
      {
        id: "review",
        label: "Analizează",
        learner: {
          state: "Feedback primit",
          title: "Feedback-ul ajunge la pasul relevant.",
          description: "Comentariile rămân atașate proiectului, iar următoarea schimbare este specifică și ușor de regăsit.",
          facts: ["Review legat de ultima rulare", "Raționamentul rămâne lângă soluție"],
        },
        teacher: {
          state: "În analiză",
          title: "Soluția poate fi citită, testată și discutată.",
          description: "Profesorul vede codul, rezultatul și obiectivul de învățare împreună, fără să reconstruiască separat contextul.",
          facts: ["Cod și rezultat în același review", "Feedback atașat proiectului"],
          note: "Verifică modul în care se schimbă coada după fiecare nod vizitat.",
        },
      },
      {
        id: "improve",
        label: "Îmbunătățește",
        learner: {
          state: "Gata de revizie",
          title: "Următoarea încercare pornește de la feedback util.",
          description: "Elevul poate actualiza același proiect, îl poate rula din nou și își poate compara raționamentul cu încercarea anterioară.",
          facts: ["Feedback-ul rămâne vizibil", "Revizia rămâne în același proiect"],
        },
        teacher: {
          state: "Următorul pas este pregătit",
          title: "Un proiect arată ce urmează.",
          description: "Review-ul finalizat indică următorul concept fără să separe progresul de activitatea care l-a produs.",
          facts: ["Review conectat la progres", "Următorul concept este gata de publicat"],
        },
      },
    ],
  },
} as const;

type ViewContent = {
  state: string;
  title: string;
  description: string;
  facts: readonly string[];
  code?: readonly string[];
  note?: string;
};

function WorkspaceView({
  label,
  content,
  tone,
}: {
  label: string;
  content: ViewContent;
  tone: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <article
      data-shared-panel
      className={
        isLight
          ? "flex min-h-[26rem] min-w-0 flex-col bg-[#f1f3f1] text-[#101210]"
          : "flex min-h-[26rem] min-w-0 flex-col bg-[#111315] text-white"
      }
    >
      <header className={`flex min-h-16 items-center justify-between gap-4 border-b px-5 sm:px-7 ${isLight ? "border-black/10" : "border-white/10"}`}>
        <p className={`text-sm font-medium ${isLight ? "text-black/62" : "text-white/62"}`}>{label}</p>
        <p className={`text-right text-xs ${isLight ? "text-black/46" : "text-white/46"}`}>{content.state}</p>
      </header>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <div>
          <h3 className="max-w-xl text-balance text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{content.title}</h3>
          <p className={`mt-4 max-w-xl text-sm leading-6 sm:text-base ${isLight ? "text-black/58" : "text-white/54"}`}>{content.description}</p>
        </div>

        {content.code ? (
          <div className={`mt-7 overflow-hidden rounded-[12px] border font-mono text-xs leading-7 ${isLight ? "border-black/10 bg-white" : "border-white/10 bg-black/22"}`}>
            {content.code.map((line, index) => (
              <div key={line} className={`grid grid-cols-[2.25rem_1fr] border-b px-3 last:border-b-0 ${isLight ? "border-black/7" : "border-white/8"}`}>
                <span className={isLight ? "text-black/28" : "text-white/28"}>{String(index + 1).padStart(2, "0")}</span>
                <span className={index === content.code!.length - 1 ? "text-emerald-400" : undefined}>{line}</span>
              </div>
            ))}
          </div>
        ) : null}

        {content.note ? (
          <blockquote className="mt-7 border-l-2 border-emerald-500 bg-white px-4 py-3 text-sm leading-6 text-black/66">
            “{content.note}”
          </blockquote>
        ) : null}

        <div className={`mt-auto divide-y pt-7 text-sm ${isLight ? "divide-black/8 text-black/58" : "divide-white/8 text-white/54"}`}>
          {content.facts.map((fact) => (
            <p key={fact} className="flex min-h-11 items-center gap-3 py-2.5">
              <span className="size-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
              {fact}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function PlatformSharedProject({ locale }: { locale: MarketingLocale }) {
  const content = copy[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const phasePanelRef = useRef<HTMLDivElement | null>(null);
  const activePhase = content.phases[activeIndex];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const phasePanel = phasePanelRef.current;
    if (!section || !phasePanel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const panels = gsap.utils.toArray<HTMLElement>("[data-shared-panel]", phasePanel);
    const connector = phasePanel.querySelector<HTMLElement>("[data-shared-connector]");
    const beam = phasePanel.querySelector<HTMLElement>("[data-shared-beam]");
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    timeline.fromTo(panels, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.38, stagger: 0.06 });

    if (connector) {
      timeline.fromTo(connector, { scale: 0.92, autoAlpha: 0.45 }, { scale: 1, autoAlpha: 1, duration: 0.32 }, 0.05);
    }

    if (beam) {
      const from = desktop ? { scaleY: 0, autoAlpha: 0.15 } : { scaleX: 0, autoAlpha: 0.15 };
      const to = desktop
        ? { scaleY: 1, autoAlpha: 1, duration: 0.42, transformOrigin: "top" }
        : { scaleX: 1, autoAlpha: 1, duration: 0.42, transformOrigin: "left" };
      timeline.fromTo(beam, from, to, 0.02).to(beam, { autoAlpha: 0.42, duration: 0.22 });
    }

    return () => {
      timeline.kill();
      gsap.set([...panels, connector, beam], { clearProps: "all" });
    };
  }, [activeIndex]);

  function handlePhaseKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % content.phases.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + content.phases.length) % content.phases.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = content.phases.length - 1;
    if (nextIndex === index) return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    document.getElementById(`shared-project-tab-${content.phases[nextIndex].id}`)?.focus();
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b bg-[#0d0e10] py-24 text-white sm:py-32">
      <div className="sx-story-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="text-sm font-medium text-white/52">{content.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{content.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-3xl text-pretty text-base leading-7 text-white/58 sm:text-lg">{content.description}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-12 overflow-hidden rounded-[20px] border border-white/12 bg-[#151719] shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:mt-16">

          <div role="tablist" aria-label={content.example} className="grid grid-cols-2 border-b border-white/10 sm:grid-cols-4">
            {content.phases.map((phase, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={phase.id}
                  id={`shared-project-tab-${phase.id}`}
                  data-project-phase={phase.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="shared-project-phase-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handlePhaseKeyDown(event, index)}
                  className={`relative min-h-12 border-r border-b border-white/10 px-4 text-left text-sm transition-colors last:border-r-0 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-emerald-400 sm:border-b-0 ${
                    isActive ? "bg-white text-black" : "bg-transparent text-white/54 hover:bg-white/[0.045] hover:text-white"
                  }`}
                >
                  <span className="mr-3 font-mono text-[10px] opacity-45">0{index + 1}</span>
                  {phase.label}
                  {isActive ? <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-500" aria-hidden="true" /> : null}
                </button>
              );
            })}
          </div>

          <div
            key={activePhase.id}
            id="shared-project-phase-panel"
            ref={phasePanelRef}
            role="tabpanel"
            aria-labelledby={`shared-project-tab-${activePhase.id}`}
            className="grid min-w-0 lg:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1fr)]"
          >
            <WorkspaceView label={content.learner} content={activePhase.learner} tone="dark" />

            <div className="relative flex min-h-20 items-center justify-center overflow-hidden border-y border-white/10 bg-[#0d0e10] lg:min-h-0 lg:border-x lg:border-y-0">
              <span data-shared-beam className="absolute left-6 right-6 top-1/2 h-px bg-emerald-500 lg:inset-y-6 lg:left-1/2 lg:right-auto lg:top-auto lg:h-auto lg:w-px" aria-hidden="true" />
              <div data-shared-connector className="relative z-10 flex items-center gap-3 bg-[#0d0e10] px-4 py-3 lg:flex-col lg:px-2 lg:text-center">
                <span className="flex size-10 items-center justify-center rounded-[10px] border border-emerald-400/35 bg-[#151719]">
                  <Image src="/logoSCX.svg" alt="" width={28} height={28} className="size-5 invert" />
                </span>
                <span className="max-w-20 text-xs leading-4 text-white/56">{content.shared}</span>
              </div>
            </div>

            <WorkspaceView label={content.teacher} content={activePhase.teacher} tone="light" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
