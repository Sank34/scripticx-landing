import type { Metadata } from "next";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/docs/miniscript.mdx";
import ContentRo from "@/content/ro/docs/miniscript.mdx";

export const metadata: Metadata = {
  title: "MiniScript+ basics | ScripticX Docs",
  description: "Learn variables, conditions, loops, and input in MiniScript+.",
};

export default function MiniScriptDocsPage() {
  return (
    <ArticlePage
      href="/docs/miniscript"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
