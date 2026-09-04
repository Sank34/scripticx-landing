import type { Metadata } from "next";
import { CalendarDays, MapPin, UsersRound } from "lucide-react";
import { getLocale } from "next-intl/server";
import { connection } from "next/server";

import Footer from "@/components/Footer";
import { BracketWaveField } from "@/components/events/BracketWaveField";
import { EventsExplorer } from "@/components/events/EventsExplorer";
import { Reveal } from "@/components/marketing/Reveal";
import { getEvents } from "@/lib/events-data";
import { getMarketingLocale } from "@/lib/marketing-content";
import { createPageMetadata } from "@/lib/metadata";

const pageCopy = {
  en: {
    eyebrow: "ScripticX events",
    title: "Where ideas leave the screen.",
    description:
      "We organise free workshops and courses for anyone curious about computer science, alongside competitions and other events where learning comes to life.",
    notes: ["Hands-on formats", "Friendly mentors", "Competitions & events"],
    listEyebrow: "The calendar",
    listTitle: "Find the next activity—or revisit one we loved.",
  },
  ro: {
    eyebrow: "Evenimente ScripticX",
    title: "Aici ideile ies din ecran.",
    description:
      "Organizăm workshop-uri și cursuri gratuite pentru oricine este curios și pasionat de informatică, alături de competiții și alte evenimente unde învățarea prinde viață.",
    notes: ["Formate practice", "Mentori prietenoși", "Competiții și evenimente"],
    listEyebrow: "Calendarul",
    listTitle: "Găsește următoarea activitate sau întoarce-te la una dragă.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata({
    locale,
    path: "/events",
    title: { en: "Events & Workshops", ro: "Evenimente și workshop-uri" },
    description: {
      en: "Explore upcoming and past ScripticX workshops, courses and hands-on education events.",
      ro: "Descoperă workshop-urile, cursurile și activitățile educaționale ScripticX viitoare și trecute.",
    },
  });
}

export default async function EventsPage() {
  await connection();
  const locale = getMarketingLocale(await getLocale());
  const content = pageCopy[locale];
  const nowIso = new Date().toISOString();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        <section className="border-b">
          <div className="grid w-full lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.1fr_.9fr]">
            <Reveal className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16 2xl:px-24">
              <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[1.01] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{content.title}</h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{content.description}</p>
              <div className="mt-10 grid gap-3 border-t pt-6 sm:grid-cols-3">
                {content.notes.map((note, index) => {
                  const Icon = [CalendarDays, UsersRound, MapPin][index];
                  return <div key={note} className="flex items-center gap-2.5 text-sm"><Icon className="size-4 text-muted-foreground" />{note}</div>;
                })}
              </div>
            </Reveal>
            <Reveal delay={0.08} className="relative flex min-h-[28rem] items-end overflow-hidden border-t bg-[#0d0e10] p-7 text-white lg:border-l lg:border-t-0 sm:p-10">
              <div className="sx-story-grid absolute inset-0 opacity-40" />
              <BracketWaveField />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[68%] bg-gradient-to-b from-transparent via-[#0d0e10]/15 to-[#0d0e10]/75 backdrop-blur-[3px] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,.18)_24%,black_100%)]"
                aria-hidden="true"
              />
              <div className="relative z-10 w-full rounded-[16px] border border-white/12 bg-white/[0.035] p-6 backdrop-blur-[5px] sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">ScripticX Events</p>
                <div className="mt-14 flex items-end justify-between gap-6">
                  <div><p className="text-5xl font-semibold tracking-[-0.05em]">14—25</p><p className="mt-2 text-sm text-white/45">SEP · 2026</p></div>
                  <p className="max-w-[12rem] text-right text-sm leading-6 text-white/50">ScripticX<br />Back to School</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Reveal className="max-w-3xl">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{content.listEyebrow}</p>
                <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.listTitle}</h2>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="mt-12">
              <EventsExplorer events={getEvents(locale)} locale={locale} nowIso={nowIso} />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
