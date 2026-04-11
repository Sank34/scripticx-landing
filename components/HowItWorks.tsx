import { Code2, Share2, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    {
      title: t("steps.solve.title"),
      desc: t("steps.solve.desc"),
      icon: <Code2 className="text-foreground" />,
    },
    {
      title: t("steps.share.title"),
      desc: t("steps.share.desc"),
      icon: <Share2 className="text-foreground" />,
    },
    {
      title: t("steps.track.title"),
      desc: t("steps.track.desc"),
      icon: <TrendingUp className="text-foreground" />,
    },
  ];

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">

      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {t("title")}
        </h2>
        <p className="text-muted-foreground mt-3 text-base">
          {t("description")}
        </p>
      </div>

      <div className="relative grid md:grid-cols-3 gap-12">

        <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-border" />

        {steps.map((s, i) => (
          <div
            key={i}
            className="group text-center space-y-4 relative transition hover:-translate-y-1 flex flex-col items-center"
          >
            {/* circle icon */}
            <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-muted border transition relative z-10">
              <span className="absolute -top-2 -right-2 text-[10px] bg-background border rounded-full w-5 h-5 flex items-center justify-center text-muted-foreground">
                {i + 1}
              </span>
              {s.icon}
            </div>
            <h3 className="font-semibold group-hover:text-foreground/80 transition">
              {s.title}
            </h3>
            <p className="text-base text-muted-foreground">
              {s.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}