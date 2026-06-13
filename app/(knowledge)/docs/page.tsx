import type { Metadata } from "next";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/docs/getting-started.mdx";
import ContentRo from "@/content/ro/docs/getting-started.mdx";

export const metadata: Metadata = {
  title: "Getting started | ScripticX Docs",
  description:
    "Understand ScripticX and begin your first programming learning session.",
};

export default function DocsPage() {
  return <ArticlePage href="/docs" ContentEn={ContentEn} ContentRo={ContentRo} />;
}
