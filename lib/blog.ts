import { cache } from "react";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import { blogSettings } from "../config/blog.ts";
import type { SiteLocale } from "../config/languages.ts";

export type BlogLocale = SiteLocale;

export interface BlogPost {
  slug: string;
  date: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  minutes: number;
}

const blogDirectory = path.join(process.cwd(), "content/blog");

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isValidBlogDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00Z`);
  return (
    !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
  );
}

function estimateReadingMinutes(source: string) {
  const text = source
    .replace(/^import .*$/gm, "")
    .replace(/<[^>]+>/g, " ")
    .trim();
  const wordCount = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(wordCount / blogSettings.wordsPerMinute));
}

async function readBlogPost(
  rootDirectory: string,
  slug: string,
  locale: BlogLocale,
): Promise<BlogPost | null> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`Invalid blog slug: ${slug}`);
  }

  const metadataPath = path.join(rootDirectory, slug, "meta.json");
  const metadata: unknown = JSON.parse(await readFile(metadataPath, "utf8"));

  if (!isObject(metadata)) {
    throw new Error(`Invalid blog metadata: ${slug}`);
  }
  if (metadata.draft === true) {
    return null;
  }

  const translation = metadata[locale];
  if (
    !isObject(translation) ||
    typeof translation.title !== "string" ||
    !translation.title.trim() ||
    typeof translation.description !== "string" ||
    !translation.description.trim() ||
    typeof metadata.author !== "string" ||
    !Array.isArray(metadata.tags) ||
    !metadata.tags.every(
      (tag: unknown) => typeof tag === "string" && /^[a-z0-9-]+$/.test(tag),
    )
  ) {
    throw new Error(`Invalid blog metadata: ${slug} (${locale})`);
  }

  if (!isValidBlogDate(metadata.date)) {
    throw new Error(`Invalid blog date: ${slug}`);
  }

  const sourcePath = path.join(rootDirectory, slug, `${locale}.mdx`);
  const source = await readFile(sourcePath, "utf8");

  return {
    slug,
    date: metadata.date,
    title: translation.title,
    description: translation.description,
    author: metadata.author,
    tags: metadata.tags,
    minutes: estimateReadingMinutes(source),
  };
}

/** Only repository-owned MDX is compiled. Never load uploaded or remote MDX. */
export async function readBlogPosts(
  rootDirectory: string,
  locale: BlogLocale,
): Promise<BlogPost[]> {
  const entries = await readdir(rootDirectory, { withFileTypes: true });
  const posts: BlogPost[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const post = await readBlogPost(rootDirectory, entry.name, locale);
    if (post) posts.push(post);
  }

  return posts.sort((firstPost, secondPost) => {
    const dateOrder = secondPost.date.localeCompare(firstPost.date);
    return dateOrder || firstPost.slug.localeCompare(secondPost.slug);
  });
}

export const getBlogPosts = cache((locale: BlogLocale) =>
  readBlogPosts(blogDirectory, locale),
);

export function blogDate(date: string, locale: BlogLocale) {
  return new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
