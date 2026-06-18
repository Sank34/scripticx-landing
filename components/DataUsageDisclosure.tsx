import Link from "next/link";
import {
  Check,
  KeyRound,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";

export default function DataUsageDisclosure() {
  const t = useTranslations("DataUsageDisclosure");
  const items = [
    {
      icon: ShieldCheck,
      title: t("items.data.title"),
      description: t("items.data.description"),
    },
    {
      icon: KeyRound,
      title: t("items.google.title"),
      description: t("items.google.description"),
    },
    {
      icon: Trash2,
      title: t("items.control.title"),
      description: t("items.control.description"),
    },
  ];

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-gradient-to-br from-green-50 via-background to-background p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:items-start">
          <div className="lg:self-center">
            <p className="text-sm font-medium text-green-700">{t("eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              {t("description")}
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
              <span>{t("noAccess")}</span>
            </div>
            <Link
              href="https://www.scripticx.org/legal/privacy"
              className="mt-6 inline-flex text-sm font-medium underline underline-offset-4"
            >
              {t("privacyLink")}
            </Link>
          </div>

          <div className="grid gap-4">
            {items.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="bg-white/80 shadow-none">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
