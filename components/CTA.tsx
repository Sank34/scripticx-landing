"use client";

import { Button } from "@/components/ui/button";
import { siGithub } from "simple-icons";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("CTA");
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/5 to-transparent" />

      <div className="relative max-w-3xl mx-auto">

        {/* open source label */}
        <p className="text-sm text-muted-foreground mb-4">
          {t("badge")}
        </p>

        {/* main title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          {t("title")}
        </h2>

        {/* subtitle */}
        <p className="text-muted-foreground mt-5 text-base sm:text-lg">
          {t("description")}
        </p>

        {/* buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 sm:flex-wrap">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-black/90 shadow-lg w-full sm:w-auto"
          >
            {t("primary")}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border hover:bg-muted w-full sm:w-auto"
          >
            {t("secondary")}
          </Button>
        </div>

        {/* github badge */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-xs sm:text-sm border bg-background rounded-full px-3 sm:px-4 py-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-foreground"
            >
              <path d={siGithub.path} />
            </svg>
            <span>@scripticx</span>
            <span className="text-muted-foreground">•</span>
            <span>{t("openSource")}</span>
          </div>
        </div>

      </div>
    </section>
  );
}