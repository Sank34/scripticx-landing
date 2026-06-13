import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/legal/terms.mdx";
import ContentRo from "@/content/ro/legal/terms.mdx";
import { createKnowledgeArticleMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createKnowledgeArticleMetadata("/legal/terms", await getLocale());
}

export default function TermsPage() {
  return (
    <ArticlePage
      href="/legal/terms"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
