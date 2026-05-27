import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Showcasing() {
  const t = useTranslations("Showcasing");

  const features = t.raw("features") as string[];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="max-w-3xl mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          {t("title1")} <br />
          {t("title2")}
        </h2>

        <p className="text-muted-foreground mt-4 text-sm sm:text-base">
          {t("description")}
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT: Features list */}
        <div className="space-y-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 mt-2 rounded-full bg-black" />
              <p className="text-base text-muted-foreground">
                <span className="text-foreground font-semibold">
                  {f.split(" ")[0]}
                </span>{" "}
                {f.slice(f.indexOf(" ") + 1)}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT: Mockup */}
        <div className="relative flex justify-center">

          <Image
            src="/mockup_new.png"
            alt="Platform preview"
            width={1400}
            height={900}
            className="w-full max-w-[700px] h-auto drop-shadow-2xl"
            loading="eager"
          />

        </div>

      </div>
    </section>
  );
}