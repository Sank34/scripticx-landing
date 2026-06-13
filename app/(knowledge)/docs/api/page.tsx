import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/docs/api.mdx";
import ContentRo from "@/content/ro/docs/api.mdx";
import { createKnowledgeArticleMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createKnowledgeArticleMetadata("/docs/api", await getLocale());
}

export default function ApiDocsPage() {
  return <ArticlePage href="/docs/api" ContentEn={ContentEn} ContentRo={ContentRo} />;
}
