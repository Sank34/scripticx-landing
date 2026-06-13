import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/docs/getting-started.mdx";
import ContentRo from "@/content/ro/docs/getting-started.mdx";
import { createKnowledgeArticleMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createKnowledgeArticleMetadata("/docs", await getLocale());
}

export default function DocsPage() {
  return <ArticlePage href="/docs" ContentEn={ContentEn} ContentRo={ContentRo} />;
}
