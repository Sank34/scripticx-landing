"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Code2, FileText, Search, ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getKnowledgeArticles, getKnowledgeSections } from "@/lib/knowledge-data";

const sectionIcons = {
  Learn: BookOpen,
  Developers: Code2,
  Trust: ShieldCheck,
  Legal: FileText,
};

export function KnowledgeSearch() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const isRomanian = locale === "ro";
  const knowledgeArticles = getKnowledgeArticles(locale);
  const sections = getKnowledgeSections(locale);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectArticle = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        aria-label={isRomanian ? "Caută în centrul de cunoștințe" : "Search the Knowledge Center"}
        className="h-9 w-9 justify-center gap-2 bg-background px-0 text-muted-foreground shadow-none sm:w-64 sm:justify-start sm:px-3"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4" />
        <span className="hidden flex-1 text-left sm:inline">
          {isRomanian ? "Caută în centru" : "Search knowledge"}
        </span>
        <kbd className="hidden rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] sm:inline">
          ⌘ K
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={isRomanian ? "Caută în ScripticX Knowledge" : "Search ScripticX Knowledge"}
        description={
          isRomanian
            ? "Caută în documentație, securitate și articole juridice."
            : "Search documentation, trust, and legal articles."
        }
      >
        <Command>
          <CommandInput placeholder={isRomanian ? "Caută articole..." : "Search articles..."} />
          <CommandList>
            <CommandEmpty>
              {isRomanian ? "Niciun articol găsit." : "No article found."}
            </CommandEmpty>
            {sections.map(
              (section) => (
                <CommandGroup key={section.id} heading={section.title}>
                  {knowledgeArticles
                    .filter((article) => article.section === section.id)
                    .map((article) => {
                      const Icon = sectionIcons[article.section];
                      return (
                        <CommandItem
                          key={article.href}
                          value={`${article.title} ${article.description}`}
                          onSelect={() => selectArticle(article.href)}
                        >
                          <Icon className="text-muted-foreground" />
                          <div>
                            <div>{article.title}</div>
                            <div className="line-clamp-1 text-xs text-muted-foreground">
                              {article.description}
                            </div>
                          </div>
                        </CommandItem>
                      );
                    })}
                </CommandGroup>
              )
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
