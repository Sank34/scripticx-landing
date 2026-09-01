"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Code2,
  FileText,
  LayoutGrid,
  Menu,
  ShieldCheck,
} from "lucide-react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getKnowledgeArticles, getKnowledgeSections } from "@/lib/knowledge-data";
import { cn } from "@/lib/utils";

const sectionIcons = {
  Learn: BookOpen,
  Developers: Code2,
  Trust: ShieldCheck,
  Legal: FileText,
};

function SidebarContent({ closeOnSelect = false }: { closeOnSelect?: boolean }) {
  const pathname = usePathname();
  const locale = useLocale();
  const articles = getKnowledgeArticles(locale);
  const sections = getKnowledgeSections(locale);

  return (
    <nav aria-label="Knowledge Center navigation" className="space-y-8">
      <div>
        {closeOnSelect ? (
          <SheetClose asChild>
            <Link
              href="/knowledge"
              className={cn(
                "flex items-center gap-2 border-l-2 px-3 py-2 text-sm transition-colors",
                pathname === "/knowledge"
                  ? "border-foreground bg-muted/70 font-medium text-foreground"
                  : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              <LayoutGrid className="size-3.5" />
              {locale === "ro" ? "Prezentare generală" : "Overview"}
            </Link>
          </SheetClose>
        ) : (
          <Link
            href="/knowledge"
            className={cn(
              "flex items-center gap-2 border-l-2 px-3 py-2 text-sm transition-colors",
              pathname === "/knowledge"
                ? "border-foreground bg-muted/70 font-medium text-foreground"
                : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
            )}
          >
            <LayoutGrid className="size-3.5" />
            {locale === "ro" ? "Prezentare generală" : "Overview"}
          </Link>
        )}
      </div>
      {sections.map((section) => {
        const Icon = sectionIcons[section.id];
        return (
          <div key={section.id}>
            <div className="mb-2 flex items-center gap-2 px-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <Icon className="size-3.5" />
              {section.title}
            </div>
            <div className="space-y-1">
              {articles
                .filter((article) => article.section === section.id)
                .map((article) => {
                  const isActive = pathname === article.href;
                  const link = (
                    <Link
                      href={article.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "block border-l-2 px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "border-foreground bg-muted/70 font-medium text-foreground"
                          : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                      )}
                    >
                      {article.title}
                    </Link>
                  );

                  return closeOnSelect ? (
                    <SheetClose key={article.href} asChild>
                      {link}
                    </SheetClose>
                  ) : (
                    <div key={article.href}>{link}</div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export function KnowledgeSidebar() {
  return (
    <aside className="sticky top-[7.5rem] hidden h-[calc(100svh-7.5rem)] w-[17rem] shrink-0 self-start border-r bg-muted/[0.16] lg:block xl:w-[18rem]">
      <div className="h-full px-5 py-8 xl:px-7">
        <ScrollArea className="h-full pb-8">
          <SidebarContent />
        </ScrollArea>
      </div>
    </aside>
  );
}

export function KnowledgeMobileNavigation() {
  const locale = useLocale();
  const isRomanian = locale === "ro";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 px-2.5 lg:hidden"
          aria-label={isRomanian ? "Deschide navigarea" : "Open navigation"}
        >
          <Menu className="size-4" />
          <span className="hidden sm:inline">
            {isRomanian ? "Răsfoiește" : "Browse"}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[min(88vw,330px)] p-0">
        <SheetHeader className="border-b">
          <SheetTitle>
            {isRomanian ? "Centrul de cunoștințe" : "Knowledge Center"}
          </SheetTitle>
          <SheetDescription className="sr-only">
            {isRomanian
              ? "Navighează prin ghidurile și politicile ScripticX."
              : "Browse ScripticX guides and policies."}
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1 px-5 py-6">
          <SidebarContent closeOnSelect />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
