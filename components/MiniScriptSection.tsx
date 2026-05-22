"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

const examples = [
  {
    title: "loops",
    code: `X = 1
WHILE X <= 5
  PRINT X
  X = X + 1
END`,
  },
  {
    title: "conditions",
    code: `score = 80
IF score > 50 THEN
  PRINT "Passed"
ELSE
  PRINT "Try again"
END`,
  },
  {
    title: "input",
    code: `INPUT name
PRINT "Hello " + name`,
  },
];

export default function MiniScriptSection() {
  const t = useTranslations("MiniScript");
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [180, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.95, 1, 1]);

  return (
    <section ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
            {t("title1")}
            <br />
            <span className="text-muted-foreground">
              {t("title2")}
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-muted-foreground max-w-md">
            {t("description")}
          </p>

          <div className="mt-6 space-y-3 text-sm">
            {(t.raw("bullets") as string[]).map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check size={16} className="text-green-500 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FLOATING CARDS */}
        <div className="relative h-[360px] sm:h-[420px] max-w-[420px] mx-auto md:mx-0 w-full">

          <motion.div
            style={{ y: y1, opacity, scale }}
            className="absolute top-0 left-0 w-[220px] sm:w-[260px]"
          >
            <CodeCard {...examples[0]} />
          </motion.div>

          <motion.div
            style={{ y: y2, opacity, scale }}
            className="absolute top-24 right-0 w-[220px] sm:w-[260px]"
          >
            <CodeCard {...examples[1]} />
          </motion.div>

          <motion.div
            style={{ y: y1, opacity, scale }}
            className="absolute bottom-0 left-1/4 w-[220px] sm:w-[260px]"
          >
            <CodeCard {...examples[2]} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function CodeCard({ title, code }: { title: string; code: string }) {
  return (
    <div className="bg-background border rounded-xl p-4 shadow-xl hover:shadow-2xl transition">
      <div className="text-xs text-muted-foreground mb-2">
        {useTranslations("MiniScript").raw(`examples.${title}`)}
      </div>

      <pre className="text-xs font-mono leading-relaxed">
        {code}
      </pre>
    </div>
  );
}