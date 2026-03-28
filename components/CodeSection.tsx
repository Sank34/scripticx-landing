"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const lines = [
  'PRINT "Hello World"',
  "LET score = 85",
  "IF score > 80 THEN",
  '  PRINT "Great job!"',
  "ELSE",
  '  PRINT "Keep trying!"',
  "END",
];

export default function CodeSection() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= lines.length) {
        clearInterval(interval);
        return;
      }
      setVisibleLines((prev) => [...prev, lines[i]]);
      i++;
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold">
          Write code. See results instantly.
        </h2>

        <p className="text-muted-foreground mt-4">
          MiniScript+ is designed to be simple, fast, and fun.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="relative bg-black/40 border border-white/10 backdrop-blur overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_70%)]" />

          <CardContent className="p-6 relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <pre className="text-sm font-mono leading-relaxed text-green-400 h-[160px] overflow-hidden">
              {visibleLines.filter(Boolean).map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.startsWith("IF")
                      ? "bg-green-500/10 px-2 rounded"
                      : ""
                  }
                >
                  {line}
                </div>
              ))}

              <span className="inline-block w-[8px] h-[16px] bg-green-400 ml-1 animate-pulse" />
            </pre>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}