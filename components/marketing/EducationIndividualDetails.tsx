import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Binary,
  Bot,
  BrainCircuit,
  Check,
  CircuitBoard,
  Code2,
  FileText,
  Gamepad2,
  Globe2,
  Lightbulb,
  MessageSquareText,
  Network,
  Search,
  ShieldCheck,
  Target,
  UsersRound,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/marketing/Reveal";
import { WorkshopEventsPreview } from "@/components/events/WorkshopEventsPreview";
import { Button } from "@/components/ui/button";
import { divisionDetailsContent, type EducationTrackKey } from "@/lib/division-details-content";
import type { MarketingLocale } from "@/lib/marketing-content";

type EducationPageKey = "informatics" | "machineLearning" | "workshops";

const copy = {
  en: {
    informatics: {
      routes: {
        eyebrow: "Three routes, one strong foundation",
        title: "Start from where you are. Keep going as far as you want.",
        description: "Each route combines programming, applied algorithms, projects and regular evaluation. The level changes; the habit of understanding the solution stays.",
      },
      session: {
        eyebrow: "Inside a session",
        title: "Less watching. More thinking out loud.",
        description: "Learners move between explanation, discussion and code, with enough time to test an idea and understand why it works.",
        items: [
          { title: "See the idea", description: "Short explanations, diagrams and CS Unplugged activities make the concept concrete.", icon: Lightbulb },
          { title: "Solve it", description: "Problems are matched to the group and become gradually more demanding.", icon: Binary },
          { title: "Build it", description: "Project-based tasks connect algorithms to a complete, useful result.", icon: Wrench },
          { title: "Review it", description: "Regular evaluation and code review make the next step visible.", icon: Search },
        ],
      },
      directions: {
        eyebrow: "After the foundations",
        title: "Choose a direction, not a box.",
        description: "The intermediate route lets learners apply their foundations in a field they enjoy. Advanced learners can go deeper into how computers and languages work.",
        tracks: [
          { title: "Web development", description: "Turn code into interfaces and useful experiences for real users.", icon: Globe2 },
          { title: "Game development", description: "Use logic, state and interaction to build playable ideas.", icon: Gamepad2 },
          { title: "Cybersecurity", description: "Understand systems, risks and responsible ways to protect them.", icon: ShieldCheck },
        ],
        advanced: "Advanced options include computer architecture, embedded programming or algorithms in another programming language.",
      },
    },
    machineLearning: {
      ladder: {
        eyebrow: "A practical ML path",
        title: "From a first Python program to intelligent robots.",
        description: "Learners progress through code, data, models and applied systems. Every level keeps the mathematics understandable and the experiments explainable.",
      },
      fields: {
        eyebrow: "Choose what to explore",
        title: "One foundation. Several fascinating directions.",
        description: "Advanced learners choose an area and study its techniques, including the mathematics and statistics behind the models.",
        items: [
          { short: "NLP", title: "Natural language", icon: MessageSquareText },
          { short: "CV", title: "Computer vision", icon: Search },
          { short: "LLMs", title: "Language models", icon: BrainCircuit },
          { short: "DL", title: "Deep learning", icon: Network },
          { short: "RL", title: "Reinforcement learning", icon: Target },
        ],
        researchTitle: "Learn to communicate the result, too.",
        researchDescription: "In Advanced ML, students learn to write their first research paper: structure their ideas, document experiments and explain results using LaTeX and Markdown.",
      },
      robotics: {
        eyebrow: "Applied machine learning",
        title: "When the model leaves the notebook.",
        description: "The applied route connects Python and C++ with Arduino, embedded programming and MiniScript+ Robotics—including reinforcement learning for robots.",
        items: ["Computer vision and deep learning", "Arduino and embedded systems", "MiniScript+ Robotics", "Robotics with reinforcement learning"],
        languages: "Python · C++ · MiniScript+ Robotics",
      },
    },
    workshops: {
      gallery: {
        eyebrow: "Learning in practice",
        title: "A room full of questions, code and things taking shape.",
        description: "Our free activities give children space to try programming, machine learning and robotics with mentors nearby and teammates around the table.",
        captions: ["Build together", "Ask, test, explain", "See the idea run"],
      },
      rhythm: {
        eyebrow: "How a workshop flows",
        title: "A clear rhythm, with room for curiosity.",
        items: [
          { number: "01", title: "Discover", description: "We introduce the idea through a question, demonstration or unplugged activity." },
          { number: "02", title: "Make", description: "Participants write code, assemble a small project or experiment with a model." },
          { number: "03", title: "Test", description: "They compare results, find bugs and improve the solution together." },
          { number: "04", title: "Share", description: "The group explains what worked, what changed and what they would try next." },
        ],
      },
      activities: {
        eyebrow: "What we can organise",
        title: "Different activities. The same hands-on spirit.",
        items: [
          { title: "Programming workshops", description: "Logic, MiniScript+, Python or C++ through problems and small builds.", icon: Code2 },
          { title: "Machine learning introductions", description: "Friendly experiments with Python, data and the ideas behind a model.", icon: BrainCircuit },
          { title: "Algorithms unplugged", description: "Team challenges that make computational thinking visible before code.", icon: UsersRound },
          { title: "Robotics activities", description: "Arduino, embedded programming and small robot behaviours.", icon: Bot },
        ],
        partnerTitle: "Free for participants, possible through partners.",
        partnerDescription: "Partners help us provide spaces, materials and access to communities. Together, we can turn one event into a recurring learning opportunity.",
        partnerAction: "Build an activity with us",
      },
    },
  },
  ro: {
    informatics: {
      routes: {
        eyebrow: "Trei trasee, aceeași fundație solidă",
        title: "Începi de unde ești. Continui cât de departe vrei.",
        description: "Fiecare traseu combină programare, algoritmică aplicată, proiecte și evaluare regulată. Nivelul se schimbă; obiceiul de a înțelege soluția rămâne.",
      },
      session: {
        eyebrow: "Într-o ședință",
        title: "Mai puțin privit. Mai mult gândit cu voce tare.",
        description: "Elevii trec între explicații, discuții și cod, cu timp suficient să testeze o idee și să înțeleagă de ce funcționează.",
        items: [
          { title: "Vezi ideea", description: "Explicațiile scurte, diagramele și activitățile CS Unplugged fac ideea concretă.", icon: Lightbulb },
          { title: "O rezolvi", description: "Problemele sunt adaptate grupei și devin treptat mai dificile.", icon: Binary },
          { title: "Construiești", description: "Sarcinile project-based conectează algoritmii cu un rezultat complet și util.", icon: Wrench },
          { title: "Primești feedback", description: "Evaluarea periodică și code review-ul fac următorul pas vizibil.", icon: Search },
        ],
      },
      directions: {
        eyebrow: "După fundamente",
        title: "Alegi o direcție, nu o cutie.",
        description: "Traseul intermediar îi ajută pe elevi să aplice bazele într-un domeniu care le place. Cei avansați pot aprofunda cum funcționează calculatoarele și limbajele.",
        tracks: [
          { title: "Web development", description: "Transformă codul în interfețe și experiențe utile pentru utilizatori reali.", icon: Globe2 },
          { title: "Game development", description: "Folosește logică, stare și interacțiune pentru a construi idei care pot fi jucate.", icon: Gamepad2 },
          { title: "Cybersecurity", description: "Înțelege sistemele, riscurile și metodele responsabile de protecție.", icon: ShieldCheck },
        ],
        advanced: "Opțiunile avansate includ arhitectura calculatoarelor, embedded programming sau algoritmică într-un alt limbaj de programare.",
      },
    },
    machineLearning: {
      ladder: {
        eyebrow: "Un traseu ML practic",
        title: "De la primul program în Python la roboți inteligenți.",
        description: "Elevii progresează prin cod, date, modele și sisteme aplicate. La fiecare nivel, matematica rămâne ușor de urmărit, iar experimentele pot fi explicate.",
      },
      fields: {
        eyebrow: "Alege ce vrei să explorezi",
        title: "O fundație. Mai multe direcții fascinante.",
        description: "Elevii avansați aleg o arie și studiază tehnicile ei, inclusiv matematica și statistica din spatele modelelor.",
        items: [
          { short: "NLP", title: "Limbaj natural", icon: MessageSquareText },
          { short: "CV", title: "Computer vision", icon: Search },
          { short: "LLMs", title: "Modele lingvistice", icon: BrainCircuit },
          { short: "DL", title: "Deep learning", icon: Network },
          { short: "RL", title: "Reinforcement learning", icon: Target },
        ],
        researchTitle: "Înveți și să comunici rezultatul.",
        researchDescription: "La Advanced ML, elevii învață să scrie primul articol de cercetare: să-și structureze ideile, să documenteze experimentele și să explice rezultatele folosind LaTeX și Markdown.",
      },
      robotics: {
        eyebrow: "Machine learning aplicat",
        title: "Când modelul iese din notebook.",
        description: "Traseul aplicat conectează Python și C++ cu Arduino, embedded programming și MiniScript+ Robotics—inclusiv reinforcement learning pentru roboți.",
        items: ["Computer vision și deep learning", "Arduino și sisteme embedded", "MiniScript+ Robotics", "Robotică prin reinforcement learning"],
        languages: "Python · C++ · MiniScript+ Robotics",
      },
    },
    workshops: {
      gallery: {
        eyebrow: "Învățare în practică",
        title: "O sală plină de întrebări, cod și idei care prind formă.",
        description: "Activitățile noastre gratuite le oferă copiilor spațiu să încerce programare, machine learning și robotică, cu mentori aproape și colegi în jurul mesei.",
        captions: ["Construim împreună", "Întrebăm, testăm, explicăm", "Vedem ideea în acțiune"],
      },
      rhythm: {
        eyebrow: "Cum decurge un workshop",
        title: "Un ritm clar, cu loc pentru curiozitate.",
        items: [
          { number: "01", title: "Descoperim", description: "Introducem ideea printr-o întrebare, o demonstrație sau o activitate unplugged." },
          { number: "02", title: "Construim", description: "Participanții scriu cod, asamblează un proiect mic sau experimentează cu un model." },
          { number: "03", title: "Testăm", description: "Compară rezultate, găsesc bug-uri și îmbunătățesc soluția împreună." },
          { number: "04", title: "Povestim", description: "Grupa explică ce a funcționat, ce a schimbat și ce ar încerca în continuare." },
        ],
      },
      activities: {
        eyebrow: "Ce putem organiza",
        title: "Activități diferite. Același spirit practic.",
        items: [
          { title: "Workshop-uri de programare", description: "Logică, MiniScript+, Python sau C++ prin probleme și proiecte mici.", icon: Code2 },
          { title: "Introduceri în machine learning", description: "Experimente prietenoase cu Python, date și ideile din spatele unui model.", icon: BrainCircuit },
          { title: "Algoritmi unplugged", description: "Provocări în echipă care fac gândirea computațională vizibilă înainte de cod.", icon: UsersRound },
          { title: "Activități de robotică", description: "Arduino, embedded programming și comportamente simple pentru roboți.", icon: Bot },
        ],
        partnerTitle: "Gratuit pentru participanți, posibil prin parteneri.",
        partnerDescription: "Partenerii ne ajută cu spații, materiale și acces la comunități. Împreună putem transforma un eveniment într-o oportunitate de învățare recurentă.",
        partnerAction: "Construiește o activitate cu noi",
      },
    },
  },
} as const;

function GroupRouteList({ track, locale }: { track: EducationTrackKey; locale: MarketingLocale }) {
  const groups = divisionDetailsContent[locale].education.groups.tracks[track];
  const labels = locale === "ro"
    ? { languages: "Limbaje", includes: "Ce include" }
    : { languages: "Languages", includes: "What it includes" };

  return (
    <div className="overflow-hidden rounded-[16px] border bg-background">
      {groups.map((group, index) => (
        <article key={group.title} className="grid gap-7 border-b p-6 last:border-b-0 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
              <span className="rounded-full border bg-muted/30 px-2.5 py-1 text-[11px] text-muted-foreground">{group.audience}</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{group.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t pt-5 text-xs">
              <span><strong className="font-medium">{group.schedule}</strong> · {group.duration}</span>
              <span className="text-muted-foreground"><strong className="font-medium text-foreground">{labels.languages}:</strong> {group.format}</span>
            </div>
          </div>
          <div className="lg:border-l lg:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">{labels.includes}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {group.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm leading-5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-emerald-600/30 text-emerald-600"><Check className="size-3" /></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function InformaticsDetails({ locale }: { locale: MarketingLocale }) {
  const content = copy[locale].informatics;

  return (
    <>
      <section id="capabilities" className="border-b bg-muted/20 py-24 sm:py-32">
        <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{content.routes.eyebrow}</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.routes.title}</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg lg:justify-self-end">{content.routes.description}</p>
          </Reveal>
          <Reveal delay={0.08} className="mt-12"><GroupRouteList track="informatics" locale={locale} /></Reveal>
        </div>
      </section>

      <section className="border-b bg-[#0d0e10] py-24 text-white sm:py-32">
        <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-medium text-white/45">{content.session.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.session.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">{content.session.description}</p>
          </Reveal>
          <div className="mt-14 grid overflow-hidden rounded-[16px] border border-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {content.session.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06} className="h-full border-b border-white/10 last:border-b-0 sm:border-r sm:nth-[2n]:border-r-0 lg:border-b-0 lg:nth-[2n]:border-r lg:last:border-r-0">
                  <article className="flex h-full min-h-[18rem] flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between"><Icon className="size-5 text-emerald-200" /><span className="font-mono text-[10px] text-white/30">0{index + 1}</span></div>
                    <h3 className="mt-auto text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/50">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b py-24 sm:py-32">
        <div className="grid gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-12 xl:px-16 2xl:px-24">
          <Reveal className="max-w-xl">
            <p className="text-sm font-medium text-muted-foreground">{content.directions.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.directions.title}</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">{content.directions.description}</p>
            <div className="mt-8 rounded-[14px] border bg-muted/25 p-5 text-sm leading-6">{content.directions.advanced}</div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.directions.tracks.map((track, index) => {
              const Icon = track.icon;
              return (
                <Reveal key={track.title} delay={index * 0.07} className={index === 2 ? "sm:col-span-2" : ""}>
                  <article className="group flex min-h-[15rem] h-full flex-col rounded-[14px] border bg-background p-6 transition-colors hover:bg-muted/25">
                    <Icon className="size-5" />
                    <h3 className="mt-auto text-xl font-semibold">{track.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">{track.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function MachineLearningDetails({ locale }: { locale: MarketingLocale }) {
  const content = copy[locale].machineLearning;

  return (
    <>
      <section id="capabilities" className="border-b bg-[#0d0e10] py-24 text-white sm:py-32">
        <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-medium text-white/45">{content.ladder.eyebrow}</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.ladder.title}</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/55 sm:text-lg lg:justify-self-end">{content.ladder.description}</p>
          </Reveal>
          <div className="mt-14 grid gap-3 lg:grid-cols-3 lg:items-end">
            {divisionDetailsContent[locale].education.groups.tracks.machineLearning.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.08} className={index === 0 ? "lg:pb-0" : index === 1 ? "lg:pb-8" : "lg:pb-16"}>
                <article className="flex min-h-[29rem] flex-col rounded-[16px] border border-white/12 bg-white/[0.035] p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4"><span className="font-mono text-xs text-white/32">0{index + 1}</span><span className="rounded-full border border-white/12 px-2.5 py-1 text-[11px] text-white/48">{group.audience}</span></div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">{group.description}</p>
                  <div className="mt-6 border-y border-white/10 py-5"><p className="text-3xl font-semibold tracking-[-0.04em]">{group.schedule}</p><p className="mt-1 text-xs text-white/38">{group.duration}</p><p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-200/65">{group.format}</p></div>
                  <ul className="mt-6 space-y-3 text-sm text-white/68">
                    {group.features.map((feature) => <li key={feature} className="flex items-start gap-2.5"><Check className="mt-0.5 size-3.5 shrink-0 text-emerald-200" />{feature}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b py-24 sm:py-32">
        <div className="grid gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 xl:px-16 2xl:px-24">
          <Reveal className="max-w-xl">
            <p className="text-sm font-medium text-muted-foreground">{content.fields.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.fields.title}</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">{content.fields.description}</p>
            <div className="mt-9 border-l-2 border-emerald-500 pl-5">
              <h3 className="font-semibold">{content.fields.researchTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{content.fields.researchDescription}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="grid overflow-hidden rounded-[16px] border sm:grid-cols-2">
            {content.fields.items.map((field, index) => {
              const Icon = field.icon;
              return (
                <article key={field.short} className={`flex min-h-[12rem] flex-col border-b p-6 sm:border-r sm:p-7 ${index === 4 ? "sm:col-span-2 sm:border-r-0" : index % 2 === 1 ? "sm:border-r-0" : ""}`}>
                  <div className="flex items-center justify-between"><Icon className="size-5" /><span className="font-mono text-[10px] text-muted-foreground">{field.short}</span></div>
                  <h3 className="mt-auto text-xl font-semibold">{field.title}</h3>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="border-b bg-muted/20 py-24 sm:py-32">
        <div className="grid gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-12 xl:px-16 2xl:px-24">
          <Reveal className="relative overflow-hidden rounded-[18px] border bg-background p-7 sm:p-10">
            <div className="sx-dot-grid absolute inset-0 opacity-35" />
            <div className="relative">
              <div className="flex size-12 items-center justify-center rounded-[12px] bg-foreground text-background"><Bot className="size-5" /></div>
              <p className="mt-16 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{content.robotics.languages}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.robotics.items.map((item) => <div key={item} className="flex items-start gap-2.5 rounded-[10px] border bg-background/90 p-4 text-sm"><CircuitBoard className="mt-0.5 size-4 shrink-0" />{item}</div>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">{content.robotics.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.robotics.title}</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{content.robotics.description}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const workshopPhotos = [
  "/events/workshops/programming-1-3-july-26/IMG_1003.jpg",
  "/events/workshops/programming-1-3-july-26/IMG_1137.jpg",
  "/events/workshops/programming-1-3-july-26/IMG_1174.jpg",
] as const;

function WorkshopsDetails({ locale }: { locale: MarketingLocale }) {
  const content = copy[locale].workshops;

  return (
    <>
      <section id="capabilities" className="border-b py-24 sm:py-32">
        <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">{content.gallery.eyebrow}</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.gallery.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{content.gallery.description}</p>
          </Reveal>
          <div className="mt-14 grid min-h-[42rem] gap-3 lg:grid-cols-[1.2fr_.8fr] lg:grid-rows-2">
            {workshopPhotos.map((photo, index) => (
              <Reveal key={photo} delay={index * 0.07} className={`relative min-h-[20rem] overflow-hidden rounded-[16px] ${index === 0 ? "lg:row-span-2" : ""}`}>
                <Image src={photo} alt="" fill sizes={index === 0 ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"} className="object-cover transition-transform duration-700 hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <p className="absolute inset-x-5 bottom-5 text-lg font-medium text-white">{content.gallery.captions[index]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WorkshopEventsPreview locale={locale} />

      <section className="border-b bg-[#0d0e10] py-24 text-white sm:py-32">
        <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <Reveal className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><div><p className="text-sm font-medium text-white/45">{content.rhythm.eyebrow}</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.rhythm.title}</h2></div></Reveal>
          <div className="mt-14 grid border-l border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {content.rhythm.items.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.06} className="h-full border-b border-r border-white/12">
                <article className="flex min-h-[17rem] h-full flex-col p-6 sm:p-7"><span className="font-mono text-xs text-emerald-200/65">{item.number}</span><h3 className="mt-auto text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{item.description}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b py-24 sm:py-32">
        <div className="grid gap-12 px-5 sm:px-8 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 lg:px-12 xl:px-16 2xl:px-24">
          <div>
            <Reveal className="max-w-2xl"><p className="text-sm font-medium text-muted-foreground">{content.activities.eyebrow}</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.activities.title}</h2></Reveal>
            <div className="mt-10 grid gap-px overflow-hidden rounded-[16px] border bg-border sm:grid-cols-2">
              {content.activities.items.map((item, index) => {
                const Icon = item.icon;
                return <Reveal key={item.title} delay={index * 0.05} className="bg-background"><article className="flex min-h-[16rem] h-full flex-col p-6 sm:p-7"><Icon className="size-5" /><h3 className="mt-auto text-xl font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p></article></Reveal>;
              })}
            </div>
          </div>
          <Reveal delay={0.1} className="flex min-h-[32rem] flex-col rounded-[18px] border bg-emerald-50 p-7 text-emerald-950 sm:p-10">
            <FileText className="size-6" />
            <h2 className="mt-auto text-balance text-3xl font-semibold tracking-[-0.035em]">{content.activities.partnerTitle}</h2>
            <p className="mt-4 text-base leading-7 text-emerald-950/65">{content.activities.partnerDescription}</p>
            <Button className="mt-8 w-fit" asChild><Link href="/partners">{content.activities.partnerAction}<ArrowUpRight /></Link></Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function EducationIndividualDetails({ page, locale }: { page: EducationPageKey; locale: MarketingLocale }) {
  if (page === "informatics") return <InformaticsDetails locale={locale} />;
  if (page === "machineLearning") return <MachineLearningDetails locale={locale} />;
  return <WorkshopsDetails locale={locale} />;
}
