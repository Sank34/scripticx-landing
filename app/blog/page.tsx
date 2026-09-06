import Link from "next/link";
import { getLocale } from "next-intl/server";
import { ArrowRight, Search } from "lucide-react";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { getBlogPosts, blogDate } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return createPageMetadata({ locale: await getLocale(), path: "/blog", title: {en:"Blog",ro:"Blog"}, description: {en:"Notes on programming, learning and building with ScripticX.",ro:"Articole despre programare, învățare și proiectele ScripticX."} });
}

export default async function BlogPage({searchParams}: {searchParams: Promise<{q?: string; tag?: string; page?: string}>}) {
  const locale = (await getLocale()) === "ro" ? "ro" : "en";
  const ro = locale === "ro";
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q.trim().slice(0,200) : "";
  const tag = typeof params.tag === "string" ? params.tag : "";
  const posts = await getBlogPosts(locale);
  const tags = Array.from(new Set(posts.flatMap(post => post.tags))).sort();
  const filtered = posts.filter(post => (!tag || post.tags.includes(tag)) && (!q || `${post.title} ${post.description}`.toLocaleLowerCase(locale).includes(q.toLocaleLowerCase(locale))));
  const pages = Math.max(1, Math.ceil(filtered.length / 6));
  const requested = Number(params.page);
  const page = Number.isSafeInteger(requested) && requested > 0 ? Math.min(requested, pages) : 1;
  const href = (number: number) => `/blog?${new URLSearchParams({...(q ? {q}:{}),...(tag ? {tag}:{}),page:String(number)})}`;
  return <div className="grid gap-12 lg:grid-cols-[12rem_minmax(0,1fr)]">
    <BlogSidebar posts={posts} ro={ro} />
    <div className="min-w-0 max-w-4xl">
      <header className="border-b pb-9"><p className="text-sm text-muted-foreground">ScripticX / Blog</p><h1 className="mt-4 text-5xl font-semibold tracking-[-.045em] sm:text-6xl">{ro ? "Idei, explicate." : "Ideas, explained."}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{ro ? "Programare, învățare și ce construim. Un loc pentru explicații, perspective și noutăți de la ScripticX." : "Programming, learning and what we build. Explanations, perspectives and updates from ScripticX."}</p></header>
      <form action="/blog" className="my-7 flex gap-2"><label htmlFor="blog-search" className="sr-only">{ro ? "Caută articole" : "Search posts"}</label><input id="blog-search" name="q" defaultValue={q} placeholder={ro ? "Caută articole…" : "Search posts…"} className="min-h-11 min-w-0 flex-1 rounded-lg border bg-background px-4 text-sm" />{tag && <input type="hidden" name="tag" value={tag} />}<button aria-label={ro ? "Caută" : "Search"} className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Search className="size-4" /></button></form>
      <nav aria-label={ro ? "Filtrează după tag" : "Filter by tag"} className="mb-4 flex flex-wrap gap-2">{["",...tags].map(value => <Link key={value} href={value ? `/blog?tag=${encodeURIComponent(value)}` : "/blog"} aria-current={tag === value ? "page" : undefined} className={`inline-flex min-h-9 items-center rounded-lg border px-3 text-xs ${tag === value ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>{value || (ro ? "Toate" : "All posts")}</Link>)}</nav>
      <div aria-live="polite">{filtered.slice((page-1)*6,page*6).map(post => <article key={post.slug} className="border-b py-10"><div className="flex flex-wrap gap-3 text-xs text-muted-foreground"><time dateTime={post.date}>{blogDate(post.date,locale)}</time><span>·</span><span>{post.minutes} min {ro ? "de lectură" : "read"}</span></div><h2 className="mt-4 text-3xl font-semibold tracking-[-.03em]"><Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">{post.title}</Link></h2><p className="mt-3 text-sm text-muted-foreground">{post.author}</p><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{post.description}</p><div className="mt-6 flex flex-wrap items-center justify-between gap-4"><div className="flex flex-wrap gap-3">{post.tags.map(value => <Link key={value} href={`/blog?tag=${encodeURIComponent(value)}`} className="text-xs text-emerald-700 hover:underline">#{value}</Link>)}</div><Link href={`/blog/${post.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium">{ro ? "Citește articolul" : "Read article"}<ArrowRight className="size-4" /></Link></div></article>)}</div>
      {!filtered.length && <div className="py-16"><h2 className="text-xl font-semibold">{ro ? "Niciun articol găsit." : "No posts found."}</h2><Link href="/blog" className="mt-4 inline-block underline">{ro ? "Resetează filtrele" : "Reset filters"}</Link></div>}
      {pages > 1 && <nav aria-label={ro ? "Paginare" : "Pagination"} className="mt-8 flex items-center justify-between">{page > 1 ? <Link href={href(page-1)} className="p-3 underline">{ro ? "Înapoi" : "Previous"}</Link> : <span />}<span className="text-sm">{page} / {pages}</span>{page < pages ? <Link href={href(page+1)} className="p-3 underline">{ro ? "Înainte" : "Next"}</Link> : <span />}</nav>}
    </div>
  </div>;
}
