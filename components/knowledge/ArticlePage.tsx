import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { KnowledgeArticle } from "@/components/knowledge/KnowledgeArticle";
import { getArticleMeta } from "@/lib/knowledge-data";

export async function ArticlePage({
  href,
  ContentEn,
  ContentRo,
}: {
  href: string;
  ContentEn: ComponentType;
  ContentRo: ComponentType;
}) {
  const locale = await getLocale();
  const article = getArticleMeta(href, locale);
  const Content = locale === "ro" ? ContentRo : ContentEn;

  if (!article) {
    notFound();
  }

  return (
    <KnowledgeArticle article={article} locale={locale}>
      <Content />
    </KnowledgeArticle>
  );
}
