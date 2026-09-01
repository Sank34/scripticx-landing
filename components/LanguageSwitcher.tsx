"use client";

import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";

function persistLocale(locale: string) {
  document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitcher() {
  const locale = useLocale();

  const setLocale = (locale: string) => {
    persistLocale(locale);
    window.location.reload();
  };

  return (
    <div
      className="inline-flex h-8 items-center rounded-lg border bg-background p-0.5 text-xs"
      aria-label="Language"
    >
      {(["en", "ro"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          className={cn(
            "h-6 rounded-md px-2 font-medium uppercase text-muted-foreground transition-colors",
            locale === option && "bg-muted text-foreground",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
