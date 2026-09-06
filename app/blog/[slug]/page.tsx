import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { BlogToc } from "@/components/blog/BlogToc";
import { blogDate, getBlogPosts } from "@/lib/blog";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";

type Props = {params: Promise<{slug: string}>};
export async function generateStaticParams() { return (await getBlogPosts("en")).map(post => ({slug:post.slug})); }

export async function generateMetadata({params}: Props) {
  const {slug} = await params;
  const locale = (await getLocale()) === "ro" ? "ro" : "en";
  const post = (await getBlogPosts(locale)).find(post => post.slug === slug);
  if (!post) notFound();
  const base = createPageMetadata({locale,path:`/blog/${post.slug}`,title:{en:post.title,ro:post.title},description:{en:post.description,ro:post.description}});
  return {...base,openGraph:{...base.openGraph,type:"article",publishedTime:post.date,authors:[post.author],tags:post.tags}};
}

export default async function BlogPostPage({params}: Props) {
  const {slug} = await params;
  const locale = (await getLocale()) === "ro" ? "ro" : "en";
  const ro = locale === "ro";
  const posts = await getBlogPosts(locale);
  const index = posts.findIndex(post => post.slug === slug);
  if (index === -1) notFound();
  const post = posts[index];
  const {default: Content} = locale === "ro"
    ? await import(`@/content/blog/${post.slug}/ro.mdx`)
    : await import(`@/content/blog/${post.slug}/en.mdx`);
  const structured = {"@context":"https://schema.org","@type":"BlogPosting",headline:post.title,description:post.description,datePublished:post.date,author:{"@type":"Organization",name:post.author},url:absoluteUrl(`/blog/${slug}`),inLanguage:locale};
  return <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
    <BlogSidebar posts={posts} ro={ro} />
    <div className="grid min-w-0 gap-10 xl:grid-cols-[minmax(0,1fr)_11rem]">
      <article className="min-w-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,"\\u003c")}} />
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft className="size-4 shrink-0" aria-hidden="true" />{ro ? "Toate articolele" : "All posts"}</Link>
        <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-.04em] sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.description}</p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground"><span className="text-foreground">{post.author}</span><time dateTime={post.date}>{blogDate(post.date,locale)}</time><span>{post.minutes} min {ro ? "de lectură" : "read"}</span></div>
        <div id="blog-content" className="knowledge-prose mt-9 min-w-0 border-t pt-2 [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24 [&_img]:h-auto [&_img]:max-w-full [&_pre]:max-w-full"><Content /></div>
        <div className="mt-12 flex flex-wrap gap-3 border-t pt-6">{post.tags.map(tag => <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`} className="rounded-lg border px-3 py-2 text-xs hover:bg-muted">#{tag}</Link>)}</div>
        <nav aria-label={ro ? "Alte articole" : "More posts"} className="mt-8 grid gap-5 border-t pt-6 sm:grid-cols-2">{[posts[index-1],posts[index+1]].map((other,i) => other ? <Link key={other.slug} href={`/blog/${other.slug}`} className="p-3 hover:bg-muted"><span className="block text-xs text-muted-foreground">{i === 0 ? (ro ? "Mai nou" : "Newer post") : (ro ? "Mai vechi" : "Older post")}</span><span className="mt-2 block font-medium">{other.title}</span></Link> : <span key={i} />)}</nav>
      </article>
      <aside className="hidden xl:block"><BlogToc key={`${slug}-${locale}`} label={ro ? "În acest articol" : "On this page"} /></aside>
    </div>
  </div>;
}
