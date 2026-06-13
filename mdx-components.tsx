import type { MDXComponents } from "mdx/types";
import Link from "next/link";

import { Callout } from "@/components/knowledge/Callout";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  a: ({ className, href = "", ...props }) => {
    const styles = cn(
      "font-medium text-foreground underline decoration-green-500/50 underline-offset-4 transition hover:decoration-green-500",
      className
    );

    if (href.startsWith("/")) {
      return <Link href={href} className={styles} {...props} />;
    }

    return (
      <a
        href={href}
        className={styles}
        rel="noreferrer"
        target={href.startsWith("http") ? "_blank" : undefined}
        {...props}
      />
    );
  },
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-12 scroll-m-24 border-b pb-3 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-24 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("mt-5 leading-7 text-foreground/80", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn(
        "mt-5 ml-6 list-disc space-y-2 text-foreground/80 marker:text-green-600",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn(
        "mt-5 ml-6 list-decimal space-y-2 text-foreground/80 marker:font-medium marker:text-foreground",
        className
      )}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-green-500 pl-5 text-foreground/70 italic",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.875em] text-foreground",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mt-6 overflow-x-auto rounded-xl border bg-zinc-950 p-5 text-sm leading-6 text-zinc-100 shadow-sm [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit",
        className
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }) => (
    <div className="mt-6 overflow-x-auto rounded-xl border">
      <table
        className={cn("w-full border-collapse text-sm", className)}
        {...props}
      />
    </div>
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border-b bg-muted/60 px-4 py-3 text-left font-medium",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn("border-b px-4 py-3 text-foreground/75", className)}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-10 border-border", className)} {...props} />
  ),
  Callout,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
