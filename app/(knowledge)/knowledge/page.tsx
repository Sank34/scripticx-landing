import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import {
  ArrowRight,
  BookOpen,
  Code2,
  FileText,
  ShieldCheck,
} from "lucide-react";

import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import {
  getKnowledgeArticles,
  getKnowledgeSections,
} from "@/lib/knowledge-data";
import {
  absoluteUrl,
  createPageMetadata,
  siteConfig,
} from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata({
    locale,
    path: "/knowledge",
    title: {
      ro: "Knowledge Center",
      en: "Knowledge Center",
    },
    description: {
      ro: "Documentație, resurse pentru dezvoltatori, securitate și politici juridice pentru ScripticX.",
      en: "Documentation, developer resources, security guidance, and legal policies for ScripticX.",
    },
  });
}

const sectionIcons = {
  Learn: BookOpen,
  Developers: Code2,
  Trust: ShieldCheck,
  Legal: FileText,
};

const sectionNumbers = {
  Learn: "01",
  Developers: "02",
  Trust: "03",
  Legal: "04",
};

export default async function KnowledgePage() {
  const locale = await getLocale();
  const isRomanian = locale === "ro";
  const knowledgeArticles = getKnowledgeArticles(locale);
  const knowledgeSections = getKnowledgeSections(locale);
  const featuredArticles = ["/docs", "/trust", "/legal/privacy"]
    .map((href) => knowledgeArticles.find((article) => article.href === href))
    .filter((article) => article !== undefined);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ScripticX Knowledge Center",
    url: absoluteUrl("/knowledge"),
    description: isRomanian
      ? "Documentație, securitate și politici pentru ScripticX."
      : "Documentation, security guidance, and policies for ScripticX.",
    inLanguage: isRomanian ? "ro" : "en",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <main className="min-w-0 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <Reveal>
        <section className="relative isolate overflow-hidden border bg-background">
          <div className="sx-hero-aura absolute inset-0 -z-20 opacity-70" />
          <div className="sx-grid-fade absolute inset-0 -z-10 opacity-70" />
          <div className="grid lg:min-h-[31rem] lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,.55fr)]">
            <div className="flex flex-col justify-end px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                ScripticX / Knowledge Center
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl xl:text-7xl">
                {isRomanian ? (
                  <>
                    Răspunsuri clare pentru a merge{" "}
                    <span className="sx-gradient-text">mai departe.</span>
                  </>
                ) : (
                  <>
                    Clear answers for what comes{" "}
                    <span className="sx-gradient-text">next.</span>
                  </>
                )}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {isRomanian
                  ? "Explorează ghidurile platformei, resursele tehnice și principiile după care construim un spațiu sigur pentru învățare."
                  : "Explore platform guides, technical resources, and the principles behind a safe, focused learning environment."}
              </p>
            </div>

            <div className="flex flex-col justify-end border-t bg-background/55 p-6 backdrop-blur-sm sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="mb-auto flex items-center justify-between pb-10 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>{isRomanian ? "Începe de aici" : "Start here"}</span>
                <span>{String(knowledgeArticles.length).padStart(2, "0")} docs</span>
              </div>
              <div className="divide-y border-y">
                {featuredArticles.map((article, index) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="group flex items-center gap-4 py-4 text-sm transition-colors hover:text-muted-foreground"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{article.title}</span>
                    <ArrowRight className="ml-auto size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="mt-16" delay={0.05}>
        <section aria-labelledby="knowledge-directory-title">
          <div className="mb-8 grid gap-4 md:grid-cols-2 md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {isRomanian ? "Biblioteca ScripticX" : "ScripticX library"}
              </p>
              <h2
                id="knowledge-directory-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
              >
                {isRomanian ? "Explorează după subiect" : "Explore by topic"}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground md:justify-self-end md:text-base">
              {isRomanian
                ? "Tot ce ai nevoie pentru a învăța platforma, a planifica integrări și a înțelege politicile ScripticX."
                : "Everything you need to learn the platform, plan integrations, and understand ScripticX policies."}
            </p>
          </div>

          <div className="grid overflow-hidden border-l border-t md:grid-cols-2">
            {knowledgeSections.map((section) => {
              const Icon = sectionIcons[section.id];
              const articles = knowledgeArticles.filter(
                (article) => article.section === section.id
              );

              return (
                <article
                  key={section.id}
                  className="group flex min-h-[25rem] flex-col border-b border-r bg-background p-6 transition-colors duration-300 hover:bg-muted/25 sm:p-8 xl:p-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-10 items-center justify-center border bg-background">
                      <Icon className="size-4" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {sectionNumbers[section.id]} / {articles.length}{" "}
                      {isRomanian
                        ? articles.length === 1
                          ? "articol"
                          : "articole"
                        : articles.length === 1
                          ? "article"
                          : "articles"}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em]">
                    {section.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                    {section.description}
                  </p>
                  <div className="mt-auto divide-y border-y pt-8">
                    {articles.map((article) => (
                      <Link
                        key={article.href}
                        href={article.href}
                        className="group/link flex items-center justify-between gap-4 py-3.5 text-sm transition-colors hover:text-muted-foreground"
                      >
                        <span>{article.title}</span>
                        <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover/link:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </Reveal>

      <Reveal className="mt-16" delay={0.08}>
        <section className="grid gap-8 border-y px-1 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              ScripticX Support
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              {isRomanian
                ? "Nu ai găsit răspunsul potrivit?"
                : "Still looking for an answer?"}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              {isRomanian
                ? "Trimite-ne întrebarea ta, iar echipa o va direcționa către persoana potrivită."
                : "Send us your question and our team will route it to the right person."}
            </p>
          </div>
          <Button asChild>
            <a href="https://platform.scripticx.org/contact">
              {isRomanian ? "Contactează suportul" : "Contact support"}
              <ArrowRight />
            </a>
          </Button>
        </section>
      </Reveal>
    </main>
  );
}
