import type { Metadata } from "next";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/legal/cookies.mdx";
import ContentRo from "@/content/ro/legal/cookies.mdx";

export const metadata: Metadata = {
  title: "Cookie Policy | ScripticX",
  description: "What cookies ScripticX uses and why.",
};

export default function CookiePolicyPage() {
  return (
    <ArticlePage
      href="/legal/cookies"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
