"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

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

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">

      <div className="text-center mb-20">
        <h2 className="text-3xl font-semibold text-white">
          Join the community
        </h2>
        <p className="text-muted-foreground mt-4">
          Discover what others are saying about ScripticX
        </p>
      </div>

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

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
              className="min-w-[300px] max-w-[300px] bg-black/40 backdrop-blur-md border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:-translate-y-1"
            >
              <CardContent className="p-5 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.text}
                </p>
                <p className="text-xs text-green-400">
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
              className="min-w-[300px] max-w-[300px] bg-black/40 backdrop-blur-md border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:-translate-y-1"
            >
              <CardContent className="p-5 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.text}
                </p>
                <p className="text-xs text-green-400">
                  {t.user}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>

      {/* animation */}
      <style jsx>{`
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