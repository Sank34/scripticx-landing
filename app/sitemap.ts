import type { MetadataRoute } from "next";

import { getKnowledgeArticles } from "@/lib/knowledge-data";
import { absoluteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-13T00:00:00.000Z");
  const knowledgeRoutes = getKnowledgeArticles("en").map((article) => ({
    url: absoluteUrl(article.href),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: article.section === "Learn" ? 0.8 : 0.6,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/knowledge"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...knowledgeRoutes,
  ];
}
