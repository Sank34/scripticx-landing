import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Users,
  BarChart3,
  Zap,
  Brain,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeatureGrid() {
  const t = useTranslations("Features");

  const features = [
    {
      title: t("items.interactive.title"),
      desc: t("items.interactive.desc"),
      icon: <Brain className="text-foreground" size={20} />,
      big: true,
    },
    {
      title: t("items.miniscript.title"),
      desc: t("items.miniscript.desc"),
      icon: <Code2 size={20} className="text-foreground"/>,
    },
    {
      title: t("items.sharing.title"),
      desc: t("items.sharing.desc"),
      icon: <Users size={20} className="text-foreground"/>,
    },
    {
      title: t("items.progress.title"),
      desc: t("items.progress.desc"),
      icon: <BarChart3 className="text-foreground" size={20} />,
      big: true,
    },
    {
      title: t("items.community.title"),
      desc: t("items.community.desc"),
      icon: <Users size={20} className="text-foreground"/>,
      big: true,
    },
    {
      title: t("items.execution.title"),
      desc: t("items.execution.desc"),
      icon: <Zap size={20} className="text-foreground"/>,
    },
  ];

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold">
          {t("title")}
        </h2>
        <p className="text-muted-foreground mt-4">
          {t("description")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {features.map((f, i) => (
          <Card
            key={i}
            className={`
              group relative overflow-hidden
              border bg-background
              hover:border-black/20
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-md
              ${f.big ? "md:col-span-2" : ""}
            `}
          >

            <div className="absolute inset-0 pointer-events-none z-0">
            </div>

            <CardContent className="p-6 space-y-3 relative z-10">

              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-muted border group-hover:bg-muted/70 transition">
                {f.icon}
              </div>

              <h3 className="font-semibold">
                {f.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {f.desc}
              </p>

            </CardContent>
          </Card>
        ))}

      </div>
    </section>
  );
}