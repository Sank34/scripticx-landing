import type { Metadata } from "next";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/legal/acceptable-use.mdx";
import ContentRo from "@/content/ro/legal/acceptable-use.mdx";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | ScripticX",
  description: "Rules that keep ScripticX safe and useful for everyone.",
};

export default function AcceptableUsePage() {
  return (
    <ArticlePage
      href="/legal/acceptable-use"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
