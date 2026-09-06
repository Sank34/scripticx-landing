import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { isValidElement } from "react";

import { Callout } from "@/components/knowledge/Callout";
import { HighlightedCodeBlock } from "@/components/knowledge/HighlightedCodeBlock";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  a: ({ className, href = "", ...props }) => {
    // rehype-autolink-headings wraps each heading's text in a "#id" anchor.
    // That anchor has to inherit the heading's own type styles instead of
    // picking up the underline and weight of a body link.
    if (href.startsWith("#")) {
      return (
        <a
          href={href}
          className={cn("text-inherit no-underline", className)}
          {...props}
        />
      );
    }

    const styles = cn(
      "font-medium text-foreground underline decoration-foreground/30 underline-offset-4 transition hover:decoration-foreground",
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
        "mt-12 border-b pb-3 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 text-xl font-semibold tracking-tight",
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
        "mt-5 ml-6 list-disc space-y-2 text-foreground/80 marker:text-muted-foreground",
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
        "mt-6 border-l-2 border-foreground/30 pl-5 text-foreground/70 italic",
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
  pre: ({ className, children, ...props }) => {
    if (isValidElement<{ children?: unknown; className?: string }>(children) && typeof children.props.children === "string") {
      const language = children.props.className?.match(/(?:^|\s)language-([^\s]+)/)?.[1];
      const labels: Record<string, string> = {
        python: "Python", py: "Python", javascript: "JavaScript", js: "JavaScript",
        typescript: "TypeScript", ts: "TypeScript", cpp: "C++", miniscript: "MiniScript+", msp: "MiniScript+",
      };
      return <HighlightedCodeBlock code={children.props.children} languageLabel={language ? labels[language] ?? language : "Code"} />;
    }

    return <pre
      className={cn(
        "mt-6 overflow-x-auto rounded-xl border bg-zinc-950 p-5 text-sm leading-6 text-zinc-100 shadow-sm [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit",
        className
      )}
      {...props}
    >{children}</pre>;
  },
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
