"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const lines = [
  'PRINT "Hello World"',
  "score = 80",
  "IF score > 80 THEN",
  '  PRINT "Great job!"',
  "ELSE",
  '  PRINT "Keep trying!"',
  "END",
];

export default function CodeSection() {
  const t = useTranslations("CodeSection");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= lines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {t("title")}
        </h2>

        <p className="text-muted-foreground mt-4 text-sm sm:text-base">
          {t("description")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="relative border bg-muted/30 overflow-hidden">
          <CardContent className="p-4 sm:p-6 relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <pre className="text-xs sm:text-sm font-mono leading-relaxed text-foreground min-h-[160px] overflow-x-auto">
              {lines.slice(0, index).map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.startsWith("IF")
                      ? "bg-muted px-2 rounded"
                      : ""
                  }
                >
                  {line}
                </div>
              ))}

              <div className="flex items-center">
                <span className="inline-block w-[8px] h-[16px] bg-foreground animate-pulse mt-1" />
              </div>
            </pre>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}