import type { Metadata } from "next";

import {
  getArticleMeta,
  normalizeKnowledgeLocale,
  type KnowledgeLocale,
} from "@/lib/knowledge-data";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://scripticx.org";

export const siteConfig = {
  name: "ScripticX",
  url: configuredUrl,
  logo: "/icons/icon-512.png",
  socialImage: "/icons/social-card.png",
  descriptions: {
    ro: "Învață programare interactiv cu exerciții, MiniScript+, feedback instant și o comunitate creată pentru progres real.",
    en: "Learn programming interactively with practical exercises, MiniScript+, instant feedback, and a community built for real progress.",
  },
  keywords: [
    "ScripticX",
    "programare",
    "învățare programare",
    "MiniScript+",
    "coding platform",
    "learn programming",
    "interactive coding",
    "coding exercises",
    "education",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function getSiteDescription(locale: string) {
  return siteConfig.descriptions[normalizeKnowledgeLocale(locale)];
}

type LocalizedText = Record<KnowledgeLocale, string>;

export function createPageMetadata({
  locale,
  path,
  title,
  description,
  type = "website",
}: {
  locale: string;
  path: string;
  title: LocalizedText;
  description: LocalizedText;
  type?: "website" | "article";
}): Metadata {
  const normalized = normalizeKnowledgeLocale(locale);
  const pageTitle = title[normalized];
  const pageDescription = description[normalized];
  const canonical = absoluteUrl(path);

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: siteConfig.name,
      locale: normalized === "ro" ? "ro_RO" : "en_US",
      alternateLocale: [normalized === "ro" ? "en_US" : "ro_RO"],
      type,
      images: [
        {
          url: absoluteUrl(siteConfig.socialImage),
          width: 1200,
          height: 630,
          alt: "ScripticX - Learn programming interactively",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [absoluteUrl(siteConfig.socialImage)],
    },
  };
}

export function createKnowledgeArticleMetadata(href: string, locale: string) {
  const article = getArticleMeta(href, locale);

  if (!article) {
    return {};
  }

  const normalized = normalizeKnowledgeLocale(locale);

  return createPageMetadata({
    locale,
    path: article.href,
    title: {
      en: normalized === "en" ? article.title : getArticleMeta(href, "en")!.title,
      ro: normalized === "ro" ? article.title : getArticleMeta(href, "ro")!.title,
    },
    description: {
      en:
        normalized === "en"
          ? article.description
          : getArticleMeta(href, "en")!.description,
      ro:
        normalized === "ro"
          ? article.description
          : getArticleMeta(href, "ro")!.description,
    },
    type: "article",
  });
}
