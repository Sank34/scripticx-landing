import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/docs/miniscript.mdx";
import ContentRo from "@/content/ro/docs/miniscript.mdx";
import { createKnowledgeArticleMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createKnowledgeArticleMetadata("/docs/miniscript", await getLocale());
}

export default function MiniScriptDocsPage() {
  return (
    <ArticlePage
      href="/docs/miniscript"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
