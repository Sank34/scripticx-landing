import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  getKnowledgeArticles,
  type KnowledgeArticleMeta,
} from "@/lib/knowledge-data";
import { absoluteUrl, siteConfig } from "@/lib/metadata";

export function KnowledgeArticle({
  article,
  children,
  locale,
}: {
  article: KnowledgeArticleMeta;
  children: ReactNode;
  locale: string;
}) {
  const knowledgeArticles = getKnowledgeArticles(locale);
  const isRomanian = locale === "ro";
  const index = knowledgeArticles.findIndex(
    (candidate) => candidate.href === article.href
  );
  const previous = index > 0 ? knowledgeArticles[index - 1] : undefined;
  const next =
    index < knowledgeArticles.length - 1
      ? knowledgeArticles[index + 1]
      : undefined;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: absoluteUrl(article.href),
    datePublished: article.updatedIso,
    dateModified: article.updatedIso,
    inLanguage: isRomanian ? "ro" : "en",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo),
      },
    },
    isPartOf: {
      "@type": "WebSite",
      name: "ScripticX Knowledge Center",
      url: absoluteUrl("/knowledge"),
    },
  };

  return (
    <main className="min-w-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/knowledge">Knowledge</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{article.section}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid min-w-0 gap-14 xl:grid-cols-[minmax(0,48rem)_14rem] xl:justify-between">
        <article className="min-w-0 max-w-3xl">
          <header>
            <div className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              ScripticX / {article.section}
            </div>
            <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              {article.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-4" />
                Updated {article.updated}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock3 className="size-4" />
                {article.readingTime}
              </span>
            </div>
          </header>

          <Separator className="my-10" />

          <div className="knowledge-prose">{children}</div>

          <Separator className="my-12" />

          <nav
            aria-label="Article pagination"
            className="grid gap-4 sm:grid-cols-2"
          >
            {previous ? (
              <Link
                href={previous.href}
                className="group border p-5 transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ArrowLeft className="size-3.5 transition group-hover:-translate-x-0.5" />
                  Previous
                </div>
                <div className="mt-2 font-medium">{previous.title}</div>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={next.href}
                className="group border p-5 text-right transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                  Next
                  <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
                </div>
                <div className="mt-2 font-medium">{next.title}</div>
              </Link>
            )}
          </nav>
        </article>

        <aside className="sticky top-36 hidden h-fit max-h-[calc(100svh-11rem)] overflow-y-auto border-t pt-4 xl:block">
          <div className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            On this page
          </div>
          <nav className="space-y-3 border-l pl-4 text-sm">
            {article.headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className="block text-muted-foreground transition hover:text-foreground"
              >
                {heading.title}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </main>
  );
}
