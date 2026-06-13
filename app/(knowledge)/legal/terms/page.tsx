import type { Metadata } from "next";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/legal/terms.mdx";
import ContentRo from "@/content/ro/legal/terms.mdx";

export const metadata: Metadata = {
  title: "Terms of Service | ScripticX",
  description: "The terms that apply when using ScripticX.",
};

export default function TermsPage() {
  return (
    <ArticlePage
      href="/legal/terms"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
