import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogSidebar({ posts, ro }: { posts: BlogPost[]; ro: boolean }) {
  return <aside className="hidden lg:block"><nav aria-label={ro ? "Articole recente" : "Recent posts"} className="sticky top-28 max-h-[calc(100svh-9rem)] space-y-6 overflow-y-auto pr-5">
    <Link href="/blog" className="text-sm font-semibold">ScripticX Blog</Link>
    <p className="text-xs text-muted-foreground">{ro ? "Articole recente" : "Recent posts"}</p>
    {Array.from(new Set(posts.map(post => post.date.slice(0,4)))).map(year => <div key={year}><p className="mb-3 font-mono text-xs text-muted-foreground">{year}</p><ul className="space-y-3 border-l pl-4">{posts.filter(post => post.date.startsWith(year)).slice(0,8).map(post => <li key={post.slug}><Link href={`/blog/${post.slug}`} className="block text-sm leading-6 text-muted-foreground hover:text-foreground">{post.title}</Link></li>)}</ul></div>)}
  </nav></aside>;
}
