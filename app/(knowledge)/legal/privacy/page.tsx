import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/legal/privacy.mdx";
import ContentRo from "@/content/ro/legal/privacy.mdx";
import { createKnowledgeArticleMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createKnowledgeArticleMetadata("/legal/privacy", await getLocale());
}

export default function PrivacyPolicyPage() {
  return (
    <ArticlePage
      href="/legal/privacy"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
