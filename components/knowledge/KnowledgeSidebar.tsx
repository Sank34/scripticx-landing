"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Code2, FileText, Menu, ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
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
    <nav aria-label="Knowledge Center navigation" className="space-y-7">
      {sections.map((section) => {
        const Icon = sectionIcons[section.id];
        return (
          <div key={section.id}>
            <div className="mb-2 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
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
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground",
                        isActive
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground"
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
  const locale = useLocale();
  const isRomanian = locale === "ro";

  return (
    <>
      <aside className="sticky top-32 hidden h-[calc(100vh-9rem)] w-60 shrink-0 border-r pr-6 lg:block">
        <ScrollArea className="h-full pb-10">
          <SidebarContent />
        </ScrollArea>
      </aside>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="lg:hidden">
            <Menu className="size-4" />
            {isRomanian ? "Răsfoiește" : "Browse"}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[310px]">
          <SheetHeader className="border-b">
            <SheetTitle>ScripticX Knowledge Center</SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-1 px-4 pb-8">
            <SidebarContent closeOnSelect />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
