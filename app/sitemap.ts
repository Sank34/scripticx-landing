import type { MetadataRoute } from "next";

import { getKnowledgeArticles } from "@/lib/knowledge-data";
import { absoluteUrl, localizedPath } from "@/lib/metadata";
import { languageSettings, type SiteLocale } from "@/config/languages";
import { teamMembers } from "@/config/team";
import { getBlogPosts } from "@/lib/blog";

const marketingLastModified = new Date("2026-09-13T00:00:00.000Z");

const marketingRoutes = [
  ["/education", 0.9],
  ["/events", 0.85],
  ["/development", 0.9],
  ["/platform", 0.95],
  ["/partners", 0.8],
  ["/blog", 0.8],
] as const;

function localizedEntries(
  path: string,
  options: Omit<MetadataRoute.Sitemap[number], "url">,
) {
  return languageSettings.supportedLocales.map((locale: SiteLocale) => ({
    ...options,
    url: absoluteUrl(localizedPath(path, locale)),
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const knowledgeRoutes = getKnowledgeArticles("en").flatMap((article) =>
    localizedEntries(article.href, {
      lastModified: new Date(`${article.updatedIso}T00:00:00.000Z`),
      changeFrequency: "monthly",
      priority: article.section === "Learn" ? 0.8 : 0.6,
    }),
  );

  const blogRoutes = (await getBlogPosts("en")).flatMap((post) =>
    localizedEntries(`/blog/${post.slug}`, {
      lastModified: new Date(`${post.date}T00:00:00.000Z`),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [
    ...localizedEntries("/", {
      lastModified: marketingLastModified,
      changeFrequency: "weekly",
      priority: 1,
    }),
    ...localizedEntries("/knowledge", {
      lastModified: marketingLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    }),
    ...localizedEntries("/verify", {
      lastModified: marketingLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
    ...marketingRoutes.flatMap(([route, priority]) =>
      localizedEntries(route, {
        lastModified: marketingLastModified,
        changeFrequency: "monthly",
        priority,
      }),
    ),
    ...teamMembers.flatMap((member) =>
      localizedEntries(`/members/${member.slug}`, {
        lastModified: marketingLastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      }),
    ),
    ...knowledgeRoutes,
    ...blogRoutes,
  ];
}
