"use client";

import { useLocale } from "next-intl";
import { languageSettings, type SiteLocale } from "@/config/languages";

import { cn } from "@/lib/utils";

function persistLocale(locale: SiteLocale) {
  document.cookie = `${languageSettings.cookieName}=${locale}; path=/; max-age=${languageSettings.cookieMaxAgeSeconds}; samesite=lax`;
}

export default function LanguageSwitcher() {
  const locale = useLocale();

  const setLocale = (locale: SiteLocale) => {
    persistLocale(locale);
    window.location.reload();
  };

  return (
    <div
      className="inline-flex h-8 items-center rounded-lg border bg-background p-0.5 text-xs"
      aria-label="Language"
    >
      {languageSettings.supportedLocales.map((option) => (
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
