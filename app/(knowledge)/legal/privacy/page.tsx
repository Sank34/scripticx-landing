import type { Metadata } from "next";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/legal/privacy.mdx";
import ContentRo from "@/content/ro/legal/privacy.mdx";

export const metadata: Metadata = {
  title: "Privacy Policy | ScripticX",
  description:
    "How ScripticX collects, uses, and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <ArticlePage
      href="/legal/privacy"
      ContentEn={ContentEn}
      ContentRo={ContentRo}
    />
  );
}
