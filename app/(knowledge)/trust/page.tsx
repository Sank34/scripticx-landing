import type { Metadata } from "next";

import { ArticlePage } from "@/components/knowledge/ArticlePage";
import ContentEn from "@/content/trust/security.mdx";
import ContentRo from "@/content/ro/trust/security.mdx";

export const metadata: Metadata = {
  title: "Security at ScripticX",
  description:
    "Learn how ScripticX approaches platform security and vulnerability reports.",
};

export default function TrustPage() {
  return <ArticlePage href="/trust" ContentEn={ContentEn} ContentRo={ContentRo} />;
}
