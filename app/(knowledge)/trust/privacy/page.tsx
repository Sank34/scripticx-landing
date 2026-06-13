import type { Metadata } from "next";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/trust/privacy-principles.mdx";
import ContentRo from "@/content/ro/trust/privacy-principles.mdx";

export const metadata: Metadata = {
  title: "Privacy principles | ScripticX",
  description:
    "The principles guiding how ScripticX treats personal information.",
};

export default function PrivacyPrinciplesPage() {
  return (
    <ArticlePage
      href="/trust/privacy"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
