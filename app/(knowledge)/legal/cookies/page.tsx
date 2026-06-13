import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/legal/cookies.mdx";
import ContentRo from "@/content/ro/legal/cookies.mdx";
import { createKnowledgeArticleMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createKnowledgeArticleMetadata("/legal/cookies", await getLocale());
}

export default function CookiePolicyPage() {
  return (
    <ArticlePage
      href="/legal/cookies"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
