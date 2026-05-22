"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const testimonials = [
  { user: "@alex_dev", text: "This platform made learning programming actually fun. The instant feedback is addictive." },
  { user: "@maria_codes", text: "I improved more in 2 weeks here than months elsewhere." },
  { user: "@devguy", text: "Clean UI, fast execution, and a great community." },
  { user: "@codewizard", text: "Sharing solutions and learning from others is insanely valuable." },
  { user: "@learner01", text: "MiniScript+ is surprisingly powerful and easy to use." },
  { user: "@prodev", text: "Feels like a modern coding playground built right." },
  { user: "@frontendking", text: "The UI is insanely clean and everything feels instant." },
  { user: "@backendnerd", text: "Honestly one of the best platforms I've used for learning." },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Testimonials");

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto relative overflow-hidden">

      <div className="text-center mb-14 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          {t("title")}
        </h2>
        <p className="text-muted-foreground mt-3 text-sm sm:text-base">
          {t("description")}
        </p>
      </div>

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* rows */}
      <div className="space-y-6 group">

        {/* ROW 1 (left) */}
        <div
          ref={containerRef}
          className="flex gap-6 w-max animate-scroll group-hover:[animation-duration:60s]"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card
              key={i}
              className="min-w-[260px] max-w-[260px] sm:min-w-[300px] sm:max-w-[300px] rounded-2xl border bg-background/80 backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02] hover:border-black/30"
            >
              <CardContent className="p-5 sm:p-6 space-y-4">
                <p className="text-sm sm:text-base leading-relaxed text-foreground/80">
                  {t.text}
                </p>
                <p className="text-xs font-medium text-foreground/70">
                  {t.user}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROW 2 (right) */}
        <div
          className="flex gap-6 w-max animate-scroll-reverse group-hover:[animation-duration:60s]"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card
              key={i}
              className="min-w-[260px] max-w-[260px] sm:min-w-[300px] sm:max-w-[300px] rounded-2xl border bg-background/80 backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02] hover:border-black/30"
            >
              <CardContent className="p-5 sm:p-6 space-y-4">
                <p className="text-sm sm:text-base leading-relaxed text-foreground/80">
                  {t.text}
                </p>
                <p className="text-xs font-medium text-foreground/70">
                  {t.user}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scrollReverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
}