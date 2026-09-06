import { cache } from "react";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type BlogLocale = "en" | "ro";
export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  minutes: number;
};

const directory = path.join(process.cwd(), "content/blog");

/** Only repository-owned MDX is compiled. Never load uploaded or remote MDX. */
export async function readBlogPosts(root: string, locale: BlogLocale): Promise<BlogPost[]> {
  const folders = await readdir(root, { withFileTypes: true });
  const posts = await Promise.all(folders.filter(folder => folder.isDirectory()).map(async folder => {
    const slug = folder.name;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Invalid blog slug: ${slug}`);
    const meta = JSON.parse(await readFile(path.join(root, slug, "meta.json"), "utf8"));
    if (meta.draft === true) return null;
    const text = meta[locale];
    if (!text?.title || !text?.description || typeof meta.author !== "string" || !Array.isArray(meta.tags) || !meta.tags.every((tag: unknown) => typeof tag === "string" && /^[a-z0-9-]+$/.test(tag))) throw new Error(`Invalid blog metadata: ${slug}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date) || new Date(`${meta.date}T00:00:00Z`).toISOString().slice(0, 10) !== meta.date) throw new Error(`Invalid blog date: ${slug}`);
    const source = await readFile(path.join(root, slug, `${locale}.mdx`), "utf8");
    const words = source.replace(/^import .*$/gm, "").replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
    return { slug, date: meta.date, title: text.title, description: text.description, author: meta.author, tags: meta.tags, minutes: Math.max(1, Math.ceil(words / 200)) } as BlogPost;
  }));
  return posts.filter((post): post is BlogPost => post !== null).sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export const getBlogPosts = cache((locale: BlogLocale) => readBlogPosts(directory, locale));

export function blogDate(date: string, locale: BlogLocale) {
  return new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
