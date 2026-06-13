import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/trust/privacy-principles.mdx";
import ContentRo from "@/content/ro/trust/privacy-principles.mdx";
import { createKnowledgeArticleMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createKnowledgeArticleMetadata("/trust/privacy", await getLocale());
}

export default function PrivacyPrinciplesPage() {
  return (
    <ArticlePage
      href="/trust/privacy"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
