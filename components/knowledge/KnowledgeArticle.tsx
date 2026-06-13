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

  return (
    <div className="min-w-0 flex-1">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/knowledge">Knowledge</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{article.sectionLabel}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid min-w-0 gap-12 xl:grid-cols-[minmax(0,720px)_200px]">
        <article className="min-w-0">
          <header>
            <div className="mb-3 text-sm font-medium text-green-700">
              {article.sectionLabel}
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              {article.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="size-4" />
                {isRomanian ? "Actualizat" : "Updated"} {article.updated}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock3 className="size-4" />
                {article.readingTime}
              </span>
            </div>
          </header>

          <Separator className="my-9" />

          <div className="knowledge-prose">{children}</div>

          <Separator className="my-12" />

          <nav
            aria-label="Article pagination"
            className="grid gap-4 sm:grid-cols-2"
          >
            {previous ? (
              <Link
                href={previous.href}
                className="group rounded-xl border p-4 transition hover:border-foreground/20 hover:bg-muted/40"
              >
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ArrowLeft className="size-3.5 transition group-hover:-translate-x-0.5" />
                  {isRomanian ? "Anterior" : "Previous"}
                </div>
                <div className="mt-2 font-medium">{previous.title}</div>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={next.href}
                className="group rounded-xl border p-4 text-right transition hover:border-foreground/20 hover:bg-muted/40"
              >
                <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                  {isRomanian ? "Următorul" : "Next"}
                  <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
                </div>
                <div className="mt-2 font-medium">{next.title}</div>
              </Link>
            )}
          </nav>
        </article>

        <aside className="sticky top-36 hidden h-fit xl:block">
          <div className="mb-3 text-sm font-medium">
            {isRomanian ? "Pe această pagină" : "On this page"}
          </div>
          <nav className="space-y-2 border-l pl-4 text-sm">
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
    </div>
  );
}
