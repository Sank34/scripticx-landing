import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient (Hack Club style) */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-white to-green-100" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Subtle blur accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-300/40 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">

        <p className="text-sm text-muted-foreground mb-4">
          {t("badge")}
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px rgba(0,0,0,0.85)", textShadow: "0 1px 0 rgba(0,0,0,0.05)" }}
          >
            {t("titleLine1")}
          </span>
          <br />
          <span className="text-black">
            {t("titleLine2")}
          </span>
        </h1>

        <p className="text-muted-foreground mt-5 text-lg">
          {t("description")}
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Button size="lg" className="bg-black text-white hover:bg-black/90">
            {t("primaryCta")}
          </Button>

          <Button size="lg" variant="outline">
            {t("secondaryCta")}
          </Button>
        </div>

        <div className="mt-12 text-xs text-muted-foreground">
          {t("trust")}
        </div>

      </div>

    </section>
  );
}