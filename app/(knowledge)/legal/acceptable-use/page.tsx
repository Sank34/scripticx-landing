import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/legal/acceptable-use.mdx";
import ContentRo from "@/content/ro/legal/acceptable-use.mdx";
import { createKnowledgeArticleMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createKnowledgeArticleMetadata(
    "/legal/acceptable-use",
    await getLocale()
  );
}

export default function AcceptableUsePage() {
  return (
    <ArticlePage
      href="/legal/acceptable-use"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
