import type { MetadataRoute } from "next";

import { getKnowledgeArticles } from "@/lib/knowledge-data";
import { absoluteUrl } from "@/lib/metadata";
import { teamMembers } from "@/lib/team-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-26T00:00:00.000Z");
  const marketingRoutes = [
    ["/education", 0.9],
    ["/education/informatics", 0.8],
    ["/education/machine-learning", 0.8],
    ["/development", 0.9],
    ["/development/web-services", 0.8],
    ["/development/design", 0.8],
    ["/development/consulting", 0.8],
    ["/platform", 0.95],
    ["/partners", 0.8],
  ] as const;
  const knowledgeRoutes = getKnowledgeArticles("en").map((article) => ({
    url: absoluteUrl(article.href),
    lastModified: new Date(`${article.updatedIso}T00:00:00.000Z`),
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
    {
      url: absoluteUrl("/verify"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...marketingRoutes.map(([route, priority]) => ({
      url: absoluteUrl(route),
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...teamMembers.map((member) => ({
      url: absoluteUrl(`/members/${member.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...knowledgeRoutes,
  ];
}
