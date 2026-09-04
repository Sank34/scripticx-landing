import type { Metadata } from "next";

import {
  getArticleMeta,
  normalizeKnowledgeLocale,
  type KnowledgeLocale,
} from "@/lib/knowledge-data";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.scripticx.org";

function getCanonicalSiteUrl(url: string) {
  const parsedUrl = new URL(url);

  if (parsedUrl.hostname === "scripticx.org") {
    parsedUrl.hostname = "www.scripticx.org";
  }

  return parsedUrl.toString().replace(/\/$/, "");
}

export const siteConfig = {
  name: "ScripticX",
  url: getCanonicalSiteUrl(configuredUrl),
  logo: "/icons/notification-icon-512.png",
  descriptions: {
    ro: "Educație în informatică, dezvoltare software și o platformă completă pentru învățare, proiecte și colaborare.",
    en: "Informatics education, software development and one platform for learning, projects and collaboration.",
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
    "software development",
    "web development",
    "product design",
    "IT consulting",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function getSiteDescription(locale: string) {
  return siteConfig.descriptions[normalizeKnowledgeLocale(locale)];
}

type LocalizedText = Record<KnowledgeLocale, string>;

function withoutTrailingBrand(title: string) {
  return title.replace(/\s*(?:\||—|-)\s*ScripticX\s*$/i, "").trim();
}

function getSocialSection(path: string, locale: KnowledgeLocale) {
  if (
    path.startsWith("/knowledge") ||
    path.startsWith("/docs") ||
    path.startsWith("/legal") ||
    path.startsWith("/trust")
  ) {
    return "Knowledge Center";
  }

  if (path.startsWith("/education")) return "Education Center";
  if (path.startsWith("/events")) return locale === "ro" ? "Evenimente" : "Events";
  if (path.startsWith("/development")) return "Development";
  if (path.startsWith("/platform")) return "Platform";
  if (path.startsWith("/members")) return locale === "ro" ? "Echipa" : "Our team";
  if (path.startsWith("/partners")) return locale === "ro" ? "Parteneri" : "Partners";
  if (path.startsWith("/verify")) return locale === "ro" ? "Certificate" : "Certificates";

  return locale === "ro"
    ? "Educație · Development · Platform"
    : "Education · Development · Platform";
}

export function createSocialImageUrl({
  title,
  description,
  section,
  path = "/",
}: {
  title: string;
  description: string;
  section: string;
  path?: string;
}) {
  const url = new URL("/api/social-image", siteConfig.url);
  url.searchParams.set("title", title);
  url.searchParams.set("description", description);
  url.searchParams.set("section", section);
  url.searchParams.set("path", path);
  return url.toString();
}

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
  const pageTitle = withoutTrailingBrand(title[normalized]);
  const pageDescription = description[normalized];
  const canonical = absoluteUrl(path);
  const socialTitle = `${pageTitle} | ${siteConfig.name}`;
  const socialImage = createSocialImageUrl({
    title: pageTitle,
    description: pageDescription,
    section: getSocialSection(path, normalized),
    path,
  });

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: socialTitle,
      description: pageDescription,
      url: canonical,
      siteName: siteConfig.name,
      locale: normalized === "ro" ? "ro_RO" : "en_US",
      alternateLocale: [normalized === "ro" ? "en_US" : "ro_RO"],
      type,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: pageDescription,
      images: [
        {
          url: socialImage,
          alt: socialTitle,
        },
      ],
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
