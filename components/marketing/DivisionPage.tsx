import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Code2, FileCode2, Globe2, Layers3 } from "lucide-react";
import { getLocale } from "next-intl/server";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import { DevelopmentDetails } from "@/components/marketing/DevelopmentDetails";
import { EducationDetails } from "@/components/marketing/EducationDetails";
import { EducationIndividualDetails } from "@/components/marketing/EducationIndividualDetails";
import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { divisionContent, getMarketingLocale } from "@/lib/marketing-content";
import { createPageMetadata } from "@/lib/metadata";

export type DivisionKey = keyof (typeof divisionContent)["en"];

const divisionPaths: Record<DivisionKey, string> = {
  education: "/education",
  informatics: "/education/informatics",
  machineLearning: "/education/machine-learning",
  workshops: "/education/workshops",
  development: "/development",
  webServices: "/development/web-services",
  design: "/development/design",
  consulting: "/development/consulting",
  platform: "/platform",
};

const divisionMetadata = {
  education: {
    title: { en: "Education Center", ro: "Centru de pregătire" },
    description: {
      en: "Informatics and machine learning groups, mentoring and practical workshops for children and teenagers.",
      ro: "Grupe de informatică și machine learning, mentorat și workshop-uri practice pentru copii și adolescenți.",
    },
  },
  informatics: {
    title: { en: "Informatics Courses", ro: "Pregătire la informatică" },
    description: {
      en: "Structured informatics preparation covering programming foundations, algorithms, data structures and competitions.",
      ro: "Pregătire structurată la informatică: bazele programării, algoritmi, structuri de date și concursuri.",
    },
  },
  machineLearning: {
    title: { en: "Machine Learning Courses", ro: "Cursuri de machine learning" },
    description: {
      en: "Practical machine learning courses covering Python, data, model evaluation and applied projects.",
      ro: "Cursuri practice de machine learning cu Python, date, evaluarea modelelor și proiecte aplicate.",
    },
  },
  workshops: {
    title: { en: "Programming Workshops", ro: "Workshop-uri de programare" },
    description: {
      en: "Free hands-on programming, machine learning and robotics activities organised with ScripticX partners.",
      ro: "Activități practice gratuite de programare, machine learning și robotică, organizate alături de partenerii ScripticX.",
    },
  },
  development: {
    title: { en: "Software Development", ro: "Dezvoltare software" },
    description: {
      en: "Product strategy, UX design and modern web engineering for clear, reliable digital products.",
      ro: "Strategie de produs, design UX și inginerie web modernă pentru produse digitale clare și fiabile.",
    },
  },
  webServices: {
    title: { en: "Web Development", ro: "Dezvoltare web" },
    description: {
      en: "Fast, accessible websites and web applications built around real product and business goals.",
      ro: "Website-uri și aplicații web rapide și accesibile, construite pentru obiective reale de produs și business.",
    },
  },
  design: {
    title: { en: "Product & UX Design", ro: "Product & UX Design" },
    description: {
      en: "Research, UX architecture, interface design and reusable design systems for digital products.",
      ro: "Research, arhitectură UX, design de interfață și design systems reutilizabile pentru produse digitale.",
    },
  },
  consulting: {
    title: { en: "IT Consulting", ro: "Consultanță IT" },
    description: {
      en: "Practical guidance for software architecture, technology decisions, implementation and delivery.",
      ro: "Direcție practică pentru arhitectură software, alegerea tehnologiilor, implementare și livrare.",
    },
  },
  platform: {
    title: { en: "Learning Platform", ro: "Platformă de programare" },
    description: {
      en: "A complete workspace for programming courses, problems, projects, classes and live collaboration.",
      ro: "Un workspace complet pentru cursuri de programare, probleme, proiecte, clase și colaborare live.",
    },
  },
} satisfies Record<DivisionKey, { title: { en: string; ro: string }; description: { en: string; ro: string } }>;

const educationHeroPhotos = [
  {
    src: "/events/workshops/programming-1-3-july-26/IMG_1180.jpg",
    position: "object-left",
  },
  {
    src: "/events/workshops/programming-1-3-july-26/IMG_1094.jpg",
    position: "object-center",
  },
  {
    src: "/events/workshops/programming-1-3-july-26/IMG_1128.jpg",
    position: "object-center",
  },
  {
    src: "/events/workshops/programming-1-3-july-26/IMG_1119.jpg",
    position: "object-center",
  },
] as const;

export async function createDivisionPageMetadata(division: DivisionKey): Promise<Metadata> {
  const locale = await getLocale();
  const metadata = divisionMetadata[division];

  return createPageMetadata({
    locale,
    path: divisionPaths[division],
    title: metadata.title,
    description: metadata.description,
  });
}

function EducationVisual() {
  return (
    <div
      className="relative h-full min-h-[28rem] overflow-hidden bg-[#111315] sm:min-h-[34rem]"
      role="img"
      aria-label="Children and mentors learning together at ScripticX programming workshops"
    >
      {educationHeroPhotos.map((photo, index) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt=""
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ animationDelay: `${index * 7 - 1.4}s` }}
          className={`sx-education-hero-frame object-cover ${photo.position} ${index === 0 ? "sx-education-hero-frame-first" : ""}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />
      <div className="absolute inset-x-6 bottom-6 rounded-[12px] border border-white/15 bg-black/55 p-5 text-white backdrop-blur-md sm:inset-x-8 sm:bottom-8">
        <p className="text-xs text-white/55">LEARNING IN PRACTICE</p>
        <p className="mt-2 text-xl font-semibold">Explain. Build. Test. Reflect.</p>
      </div>
    </div>
  );
}

function DevelopmentVisual() {
  return (
    <div className="relative flex h-full min-h-[28rem] items-center justify-center overflow-hidden bg-[#0d0e10] p-7 text-white sm:min-h-[34rem] sm:p-10">
      <div className="sx-story-grid absolute inset-0 opacity-40" />
      <div className="relative w-full max-w-xl overflow-hidden rounded-[14px] border border-white/12 bg-[#111315] shadow-2xl">
        <div className="flex h-11 items-center gap-2 border-b border-white/10 px-4"><span className="size-2.5 rounded-full bg-white/18" /><span className="size-2.5 rounded-full bg-white/18" /><span className="size-2.5 rounded-full bg-white/18" /><div className="ml-3 h-6 flex-1 rounded-md bg-white/5" /></div>
        <div className="grid min-h-[18rem] grid-cols-[9rem_1fr]">
          <div className="border-r border-white/10 p-3 text-xs text-white/45"><p className="mb-4 text-white/75">Project</p>{["app", "components", "styles", "public"].map((item) => <div key={item} className="flex items-center gap-1.5 py-1.5"><Layers3 className="size-3" />{item}</div>)}</div>
          <div className="p-5 font-mono text-xs leading-6 text-white/72"><span className="text-fuchsia-300">export default</span> <span className="text-sky-300">function</span> Product() &#123;<br />&nbsp;&nbsp;<span className="text-fuchsia-300">return</span> (<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;Experience<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clear<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accessible<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fast<br />&nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br />&nbsp;&nbsp;);<br />&#125;</div>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-[10px] text-white/42"><span>PRODUCTION READY</span><span>100% · Accessible</span></div>
      </div>
    </div>
  );
}

function PlatformVisual() {
  return (
    <div className="relative flex h-full min-h-[28rem] items-center justify-center overflow-hidden bg-[#eef0f3] p-3 sm:min-h-[34rem]">
      <div className="absolute inset-0 sx-dot-grid opacity-45" />
      <Image src="/mockup_new.png" alt="ScripticX Platform on a laptop" width={4096} height={2498} priority className="relative z-10 h-auto w-[115%] max-w-none drop-shadow-[0_25px_40px_rgba(15,23,42,.2)]" />
    </div>
  );
}

function RouteVisual({ division }: { division: DivisionKey }) {
  if (division === "education" || division === "informatics" || division === "machineLearning" || division === "workshops") return <EducationVisual />;
  if (division === "platform") return <PlatformVisual />;
  return <DevelopmentVisual />;
}

export default async function DivisionPage({ division }: { division: DivisionKey }) {
  const locale = getMarketingLocale(await getLocale());
  const content = divisionContent[locale][division];
  const isPlatform = division === "platform";
  const isEducation = division === "education" || division === "informatics" || division === "machineLearning" || division === "workshops";
  const isEducationDetail = division === "informatics" || division === "machineLearning" || division === "workshops";
  const isDevelopment = division === "development" || division === "webServices" || division === "design" || division === "consulting";
  const sectionTitle = isPlatform ? (locale === "ro" ? "Platforma în practică" : "The platform in practice") : isEducation ? (locale === "ro" ? "Cum învățăm" : "How learning works") : (locale === "ro" ? "Cum putem ajuta" : "How we can help");
  const sectionDescription = isPlatform ? (locale === "ro" ? "Instrumente conectate pentru întregul traseu de programare." : "Connected tools for the complete programming journey.") : isEducation ? (locale === "ro" ? "Structură clară, practică intenționată și feedback constant." : "Clear structure, deliberate practice and consistent feedback.") : (locale === "ro" ? "Servicii clare, construite în jurul rezultatului de care ai nevoie." : "Clear capabilities built around the outcome you need.");
  const ctaContent = isDevelopment
    ? locale === "ro"
      ? {
          title: "Ai un proiect în minte? Hai să discutăm.",
          description:
            "Prima discuție este gratuită. Te ajutăm să clarifici scope-ul, fezabilitatea și pașii următori. Dacă lucrăm împreună, primești o ofertă clară, etape definite și update-uri în portalul dedicat.",
          action: "Discută proiectul cu noi",
        }
      : {
          title: "Have a project in mind? Let’s talk it through.",
          description:
            "The first conversation is free. We’ll help clarify scope, feasibility and next steps. If we work together, you’ll get a clear proposal, defined milestones and updates in your client portal.",
          action: "Discuss your project",
        }
    : division === "workshops"
      ? locale === "ro"
        ? {
            title: "Vrei să organizăm o activitate împreună? Hai să o facem posibilă.",
            description: "Spune-ne ce comunitate vrei să aduci împreună și ce resurse poți oferi. Noi construim formatul educațional și activitatea potrivită.",
            action: "Discută un parteneriat",
          }
        : {
            title: "Want to organise an activity together? Let’s make it possible.",
            description: "Tell us about the community you want to bring together and the resources you can offer. We’ll shape the right educational format and activity.",
            action: "Discuss a partnership",
          }
      : isEducation
      ? locale === "ro"
        ? {
            title: "Nu știi ce grupă ți se potrivește? Te ajutăm noi.",
            description: "Spune-ne ce vrei să înveți, ce experiență ai și ce obiectiv urmărești. Îți recomandăm grupa și traseul potrivite.",
            action: "Găsește grupa potrivită",
          }
        : {
            title: "Not sure which group is right for you? We’ll help.",
            description: "Tell us what you want to learn, your current experience and your goal. We’ll recommend the right group and learning track.",
            action: "Find the right group",
          }
      : locale === "ro"
      ? {
          title: "Ai un obiectiv concret? Hai să îl clarificăm.",
          description: "Spune-ne ce vrei să înveți sau să construiești, iar noi îți recomandăm următorul pas potrivit.",
          action: "Contactează ScripticX",
        }
      : {
          title: "Have a concrete goal? Let’s make it clear.",
          description: "Tell us what you want to learn or build and we’ll recommend the right next step.",
          action: "Contact ScripticX",
        };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        <section className="border-b">
          <div className="grid w-full lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16 2xl:px-24">
              <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
              <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{content.title}</h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{content.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild><Link href={isPlatform ? "https://platform.scripticx.org" : "https://platform.scripticx.org/contact"}>{content.primary}<ArrowUpRight /></Link></Button>
                <Button size="lg" variant="outline" asChild><Link href={isPlatform ? "/docs" : division === "education" ? "/platform" : "#capabilities"}>{content.secondary}</Link></Button>
              </div>
              <div className="mt-10 grid gap-3 border-t pt-6 sm:grid-cols-3">
                {content.highlights.map((highlight) => <div key={highlight} className="flex items-start gap-2.5 text-sm leading-5"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted"><Check className="size-3" /></span>{highlight}</div>)}
              </div>
            </Reveal>
            <Reveal delay={0.08} className="border-t lg:border-l lg:border-t-0"><RouteVisual division={division} /></Reveal>
          </div>
        </section>

        {!isEducationDetail ? <section id="capabilities" className="border-b py-24 sm:py-32">
          <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Reveal className="max-w-2xl"><p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{sectionTitle}</h2><p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{sectionDescription}</p></Reveal>
            <div className="mt-12 grid gap-3 lg:grid-cols-3">
              {content.services.map((service, index) => {
                const Icon = [Globe2, Code2, FileCode2][index];
                const external = service.href.startsWith("http");
                return <Reveal key={service.title} delay={index * 0.07} className="h-full"><Link href={service.href} className="group flex min-h-[19rem] h-full flex-col rounded-[14px] border bg-card p-6 transition-[transform,border-color,background-color] hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/25"><div className="flex items-start justify-between"><span className="flex size-10 items-center justify-center rounded-[10px] border bg-background"><Icon className="size-4.5" /></span><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><h3 className="mt-auto text-2xl font-semibold tracking-[-0.03em]">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p><span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">{locale === "ro" ? "Vezi detalii" : "View details"}<ArrowUpRight className={`size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${external ? "" : ""}`} /></span></Link></Reveal>;
              })}
            </div>
          </div>
        </section> : null}

        {division === "education" ? <EducationDetails locale={locale} /> : null}
        {isEducationDetail ? <EducationIndividualDetails page={division} locale={locale} /> : null}
        {division === "development" ? <DevelopmentDetails locale={locale} /> : null}

        <section className="py-20 sm:py-28">
          <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Reveal className="grid gap-8 rounded-[20px] border bg-muted/30 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14"><div><h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{ctaContent.title}</h2><p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{ctaContent.description}</p></div><Button size="lg" asChild><Link href="https://platform.scripticx.org/contact">{ctaContent.action}<ArrowUpRight /></Link></Button></Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
