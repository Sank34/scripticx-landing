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

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
    socialImage: siteConfig.knowledgeSocialImage,
  });
}

const sectionIcons = {
  Learn: BookOpen,
  Developers: Code2,
  Trust: ShieldCheck,
  Legal: FileText,
};

export default async function KnowledgePage() {
  const locale = await getLocale();
  const isRomanian = locale === "ro";
  const knowledgeArticles = getKnowledgeArticles(locale);
  const knowledgeSections = getKnowledgeSections(locale);
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
    <main className="min-w-0 flex-1 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-green-100/90 via-background to-green-50 px-6 py-12 sm:px-10 sm:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative max-w-2xl">
          <Badge
            variant="outline"
            className="border-green-700/20 bg-white/70 text-green-800"
          >
            ScripticX Knowledge Center
          </Badge>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {isRomanian
              ? "Răspunsuri, ghiduri și politici clare."
              : "Answers, guidance, and clear policies."}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {isRomanian
              ? "Învață să folosești platforma, explorează resursele pentru dezvoltatori și descoperă cum abordează ScripticX securitatea și confidențialitatea."
              : "Learn the platform, explore developer resources, and understand how ScripticX approaches security, privacy, and trust."}
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2">
        {knowledgeSections.map((section) => {
          const Icon = sectionIcons[section.id];
          const articles = knowledgeArticles.filter(
            (article) => article.section === section.id
          );

          return (
            <Card
              key={section.id}
              className="group border bg-background py-0 transition hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-green-100 text-green-800">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {articles.length}{" "}
                    {isRomanian
                      ? articles.length === 1
                        ? "articol"
                        : "articole"
                      : articles.length === 1
                        ? "article"
                        : "articles"}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-semibold">{section.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {section.description}
                </p>
                <div className="mt-6 space-y-1 border-t pt-4">
                  {articles.map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="flex items-center justify-between rounded-lg px-2 py-2 text-sm transition hover:bg-muted"
                    >
                      {article.title}
                      <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="mt-12 rounded-2xl border bg-muted/30 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
        <div>
          <h2 className="font-semibold">
            {isRomanian
              ? "Nu ai găsit ce căutai?"
              : "Couldn’t find what you need?"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {isRomanian
              ? "Knowledge Center crește împreună cu ScripticX."
              : "The Knowledge Center is growing alongside ScripticX."}
          </p>
        </div>
        <a
          href="https://platform.scripticx.org/contact"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline sm:mt-0"
        >
          {isRomanian ? "Contactează suportul" : "Contact support"}
          <ArrowRight className="size-4" />
        </a>
      </section>
    </main>
  );
}
