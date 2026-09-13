import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { BlogToc } from "@/components/blog/BlogToc";
import { blogDate, getBlogPosts } from "@/lib/blog";
import { absoluteUrl, createPageMetadata, localizedPath } from "@/lib/metadata";

type BlogPostPageProps = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return (await getBlogPosts("en")).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const locale = (await getLocale()) === "ro" ? "ro" : "en";
  const post = (await getBlogPosts(locale)).find((post) => post.slug === slug);
  if (!post) notFound();
  const pageMetadata = createPageMetadata({
    locale,
    path: `/blog/${post.slug}`,
    title: { en: post.title, ro: post.title },
    description: { en: post.description, ro: post.description },
  });
  return {
    ...pageMetadata,
    openGraph: {
      ...pageMetadata.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const locale = (await getLocale()) === "ro" ? "ro" : "en";
  const isRomanianLocale = locale === "ro";
  const posts = await getBlogPosts(locale);
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) notFound();
  const post = posts[index];
  const { default: Content } =
    locale === "ro"
      ? await import(`@/content/blog/${post.slug}/ro.mdx`)
      : await import(`@/content/blog/${post.slug}/en.mdx`);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    url: absoluteUrl(localizedPath(`/blog/${slug}`, locale)),
    inLanguage: locale,
  };
  return (
    <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
      <BlogSidebar posts={posts} isRomanianLocale={isRomanianLocale} />
      <div className="grid min-w-0 gap-10 xl:grid-cols-[minmax(0,1fr)_11rem]">
        <article className="min-w-0">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
            }}
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
            {isRomanianLocale ? "Toate articolele" : "All posts"}
          </Link>
          <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-.04em] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="text-foreground">{post.author}</span>
            <time dateTime={post.date}>{blogDate(post.date, locale)}</time>
            <span>
              {post.minutes} min {isRomanianLocale ? "de lectură" : "read"}
            </span>
          </div>
          <div
            id="blog-content"
            className="knowledge-prose mt-9 min-w-0 border-t pt-2 [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24 [&_img]:h-auto [&_img]:max-w-full [&_pre]:max-w-full"
          >
            <Content />
          </div>
          <div className="mt-12 flex flex-wrap gap-3 border-t pt-6">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="rounded-lg border px-3 py-2 text-xs hover:bg-muted"
              >
                #{tag}
              </Link>
            ))}
          </div>
          <nav
            aria-label={isRomanianLocale ? "Alte articole" : "More posts"}
            className="mt-8 grid gap-5 border-t pt-6 sm:grid-cols-2"
          >
            {[posts[index - 1], posts[index + 1]].map(
              (relatedPost, position) =>
                relatedPost ? (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="p-3 hover:bg-muted"
                  >
                    <span className="block text-xs text-muted-foreground">
                      {position === 0
                        ? isRomanianLocale
                          ? "Mai nou"
                          : "Newer post"
                        : isRomanianLocale
                          ? "Mai vechi"
                          : "Older post"}
                    </span>
                    <span className="mt-2 block font-medium">
                      {relatedPost.title}
                    </span>
                  </Link>
                ) : (
                  <span key={position} />
                ),
            )}
          </nav>
        </article>
        <aside className="hidden xl:block">
          <BlogToc
            key={`${slug}-${locale}`}
            label={isRomanianLocale ? "În acest articol" : "On this page"}
          />
        </aside>
      </div>
    </div>
  );
}
