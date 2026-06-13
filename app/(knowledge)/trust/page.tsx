import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/trust/security.mdx";
import ContentRo from "@/content/ro/trust/security.mdx";
import { createKnowledgeArticleMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createKnowledgeArticleMetadata("/trust", await getLocale());
}

export default function TrustPage() {
  return <ArticlePage href="/trust" ContentEn={ContentEn} ContentRo={ContentRo} />;
}
