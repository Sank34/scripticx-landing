"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

import { KnowledgeSearch } from "@/components/knowledge/KnowledgeSearch";
import { KnowledgeMobileNavigation } from "@/components/knowledge/KnowledgeSidebar";

export function KnowledgeHeader() {
  const locale = useLocale();

  return (
    <div className="sticky top-16 z-30 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="flex h-14 items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/knowledge"
          className="shrink-0 text-sm font-semibold tracking-tight transition-opacity hover:opacity-65 sm:text-base"
        >
          {locale === "ro" ? "Centrul de cunoștințe" : "Knowledge Center"}
        </Link>
        <span className="hidden text-xs text-muted-foreground sm:inline">
          ScripticX
        </span>
        <div className="ml-auto flex items-center gap-2">
          <KnowledgeSearch />
          <KnowledgeMobileNavigation />
        </div>
      </div>
    </div>
  );
}
