"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { useLocale } from "next-intl";

import { KnowledgeSearch } from "@/components/knowledge/KnowledgeSearch";

export function KnowledgeHeader() {
  const locale = useLocale();

  return (
    <div className="sticky top-16 z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex min-h-14 max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link
          href="/knowledge"
          className="flex items-center gap-2 font-medium tracking-tight"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-green-100 text-green-800">
            <BookOpen className="size-4" />
          </span>
          {locale === "ro" ? "Centrul Knowledge ScripticX" : "ScripticX Knowledge"}
        </Link>
        <KnowledgeSearch />
      </div>
    </div>
  );
}
