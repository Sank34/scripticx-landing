import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { getLocale } from "next-intl/server";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import { DevelopmentDetails } from "@/components/marketing/DevelopmentDetails";
import { DevelopmentWork } from "@/components/marketing/DevelopmentWork";
import { DivisionApproach } from "@/components/marketing/DivisionApproach";
import { EducationDetails } from "@/components/marketing/EducationDetails";
import { PlatformHeroVisual } from "@/components/marketing/PlatformHeroVisual";
import PlatformShowcase from "@/components/marketing/PlatformShowcase";
import { PlatformLearningLoop, PlatformStorySections } from "@/components/marketing/PlatformStorySections";
import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { divisionContent, getMarketingLocale } from "@/lib/marketing-content";
import { createPageMetadata } from "@/lib/metadata";

export type DivisionKey = keyof (typeof divisionContent)["en"];

const divisionPaths: Record<DivisionKey, string> = {
  education: "/education",
  development: "/development",
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
  development: {
    title: { en: "Software Development", ro: "Dezvoltare software" },
    description: {
      en: "Product strategy, UX design and modern web engineering for clear, reliable digital products.",
      ro: "Strategie de produs, design UX și inginerie web modernă pentru produse digitale clare și fiabile.",
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
    <div className="relative flex h-full min-h-[30rem] items-center justify-center overflow-hidden bg-[#0d0e10] p-5 text-white sm:min-h-[36rem] sm:p-8 lg:p-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[20px] border border-white/12 bg-[#16181b] shadow-[0_24px_80px_rgba(0,0,0,.34)]">
        <div className="relative aspect-[1.5/1] overflow-hidden bg-[#eef0f3] sm:aspect-[1.62/1]">
          <Image
            src="/scripticx-mac-mockup-new.png"
            alt="ScripticX Platform dashboard displayed on a laptop"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain object-center p-2 sm:p-4"
          />
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-xs sm:px-6">
          <div>
            <p className="font-medium text-white">ScripticX Platform</p>
            <p className="mt-1 text-white/50">Product, interface and engineering</p>
          </div>
          <span className="inline-flex items-center gap-2 text-white/65">
            <span className="size-2 rounded-full bg-emerald-400" />
            Live product
          </span>
        </div>
      </div>
    </div>
  );
}

function RouteVisual({ division }: { division: DivisionKey }) {
  if (division === "education") return <EducationVisual />;
  if (division === "platform") return <PlatformHeroVisual />;
  return <DevelopmentVisual />;
}

export default async function DivisionPage({ division }: { division: DivisionKey }) {
  const locale = getMarketingLocale(await getLocale());
  const content = divisionContent[locale][division];
  const isPlatform = division === "platform";
  const isEducation = division === "education";
  const isDevelopment = division === "development";
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
            title: "Ești gata să continui în ScripticX?",
            description: "Deschide workspace-ul pentru a învăța, construi, preda sau continua exact de unde ai rămas.",
            action: "Deschide platforma ScripticX",
            secondaryAction: "Autentifică-te",
          }
        : {
            title: "Ready to continue in ScripticX?",
            description: "Open your workspace to learn, build, teach or continue exactly where you left off.",
            action: "Open ScripticX Platform",
            secondaryAction: "Sign in",
          };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        <section className="border-b">
          <div className="grid w-full lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16 2xl:px-24">
              <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
              <h1 className="mt-5 max-w-2xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl xl:text-[4.25rem]">{content.title}</h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{content.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild><Link href={isPlatform ? "https://platform.scripticx.org" : "https://platform.scripticx.org/contact"}>{content.primary}<ArrowUpRight /></Link></Button>
                <Button size="lg" variant="outline" asChild><Link href={isPlatform ? "#platform-showcase" : division === "education" ? "/platform" : "#capabilities"}>{content.secondary}</Link></Button>
              </div>
              <div className="mt-10 grid gap-3 border-t pt-6 sm:grid-cols-3">
                {content.highlights.map((highlight) => <div key={highlight} className="flex items-start gap-2.5 text-sm leading-5"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted"><Check className="size-3" /></span>{highlight}</div>)}
              </div>
            </Reveal>
            <Reveal delay={0.08} className="border-t lg:border-l lg:border-t-0"><RouteVisual division={division} /></Reveal>
          </div>
        </section>

        {isEducation ? <DivisionApproach division={division} locale={locale} /> : null}

        {isEducation ? <EducationDetails locale={locale} /> : null}
        {isDevelopment ? <DevelopmentWork locale={locale} /> : null}
        {isDevelopment ? <DevelopmentDetails locale={locale} /> : null}
        {isPlatform ? <PlatformLearningLoop locale={locale} /> : null}
        {isPlatform ? <div id="platform-showcase" className="scroll-mt-20"><PlatformShowcase /></div> : null}
        {isPlatform ? <PlatformStorySections locale={locale} /> : null}

        <section className="py-20 sm:py-28">
          <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Reveal className="grid gap-8 rounded-[20px] border bg-muted/30 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
              <div><h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{ctaContent.title}</h2><p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{ctaContent.description}</p></div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild><Link href={isPlatform ? "https://platform.scripticx.org" : "https://platform.scripticx.org/contact"}>{ctaContent.action}<ArrowUpRight /></Link></Button>
                {isPlatform && "secondaryAction" in ctaContent ? <Button size="lg" variant="outline" asChild><Link href="https://platform.scripticx.org/login">{ctaContent.secondaryAction}</Link></Button> : null}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
