import type { Metadata } from "next";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/docs/api.mdx";
import ContentRo from "@/content/ro/docs/api.mdx";

export const metadata: Metadata = {
  title: "API overview | ScripticX Docs",
  description: "The direction and current status of the ScripticX public API.",
};

export default function ApiDocsPage() {
  return <ArticlePage href="/docs/api" ContentEn={ContentEn} ContentRo={ContentRo} />;
}
