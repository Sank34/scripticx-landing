import {
  ArrowRight,
  BookOpen,
  Braces,
  Code2,
  Gauge,
  MessageSquareText,
} from "lucide-react";

import { PlatformEcosystem } from "@/components/marketing/PlatformEcosystem";
import { PlatformEditorExperience } from "@/components/marketing/PlatformEditorExperience";
import { Reveal } from "@/components/marketing/Reveal";
import { PlatformSharedProject } from "@/components/marketing/PlatformSharedProject";
import type { MarketingLocale } from "@/lib/marketing-content";

const copy = {
  en: {
    loop: {
      eyebrow: "The learning loop",
      title: "Every tool has a place in the work.",
      description:
        "A lesson should lead somewhere. ScripticX keeps explanation, practice, projects and feedback in one continuous flow.",
      steps: [
        { title: "Learn", description: "Follow a clear lesson and roadmap.", icon: BookOpen },
        { title: "Practise", description: "Solve problems matched to the concept.", icon: Braces },
        { title: "Build", description: "Turn the idea into a working project.", icon: Code2 },
        { title: "Get feedback", description: "Review the result with a teacher or mentor.", icon: MessageSquareText },
        { title: "Improve", description: "See your progress and choose what comes next.", icon: Gauge },
      ],
    },
  },
  ro: {
    loop: {
      eyebrow: "Procesul de învățare",
      title: "Fiecare instrument are un rol în proces.",
      description:
        "O lecție trebuie să ducă undeva. ScripticX păstrează explicația, practica, proiectele și feedback-ul într-un singur flux.",
      steps: [
        { title: "Învață", description: "Urmează o lecție clară și un roadmap.", icon: BookOpen },
        { title: "Exersează", description: "Rezolvă probleme potrivite conceptului.", icon: Braces },
        { title: "Construiește", description: "Transformă ideea într-un proiect funcțional.", icon: Code2 },
        { title: "Primește feedback", description: "Analizează rezultatul cu un profesor sau mentor.", icon: MessageSquareText },
        { title: "Progresează", description: "Vezi progresul și alege următorul pas.", icon: Gauge },
      ],
    },
  },
} as const;

export function PlatformLearningLoop({ locale }: { locale: MarketingLocale }) {
  const content = copy[locale].loop;

  return (
    <section className="overflow-hidden border-b py-24 sm:py-32">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-4xl">
          <Reveal>
            <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{content.title}</h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{content.description}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative mt-14 overflow-hidden rounded-[20px] border bg-[#f4f5f4]">
          <div className="sx-dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
          <div className="relative grid lg:grid-cols-5">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[3.15rem] hidden h-px bg-black/10 lg:block">
              <span className="sx-platform-loop-beam absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            </div>
            {content.steps.map(({ title, description, icon: Icon }, index) => (
              <div key={title} className="relative grid min-h-36 grid-cols-[3rem_1fr] gap-4 border-b p-5 last:border-b-0 sm:p-7 lg:min-h-[18rem] lg:grid-cols-1 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <div className="relative z-10 flex size-11 items-center justify-center rounded-[12px] border border-black/8 bg-white shadow-sm">
                  <Icon className="size-4.5" />
                </div>
                <div className="lg:mt-auto">
                  <span className="font-mono text-[10px] text-black/35">0{index + 1}</span>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.025em]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/50">{description}</p>
                </div>
                {index < content.steps.length - 1 ? <ArrowRight className="absolute bottom-6 right-5 hidden size-4 text-black/20 lg:block" /> : null}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PlatformStorySections({ locale }: { locale: MarketingLocale }) {
  return (
    <>
      <PlatformSharedProject locale={locale} />

      <PlatformEditorExperience locale={locale} />

      <PlatformEcosystem locale={locale} />
    </>
  );
}
