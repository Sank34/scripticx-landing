"use client";

import { DatabaseZap } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export default function MaintenanceNotice() {
  const translate = useTranslations("MaintenanceNotice");

  return (
    <section className="pt-16" aria-label={translate("label")}>
      <Alert className="block rounded-none border-x-0 border-t-0 border-amber-200/80 bg-amber-50/90 px-4 py-3 text-amber-950 shadow-none sm:px-6 sm:py-4">
        <div className="flex w-full items-start gap-3">
          <DatabaseZap className="mt-0.5 size-5 shrink-0 text-amber-600" />
          <div>
            <AlertTitle className="text-sm font-semibold sm:text-base">
              {translate("title")}
            </AlertTitle>
            <AlertDescription className="mt-0.5 text-sm leading-6 text-amber-900/75">
              {translate("description")}
            </AlertDescription>
          </div>
        </div>
      </Alert>
    </section>
  );
}
