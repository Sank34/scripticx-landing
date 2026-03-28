"use client";

import { Button } from "@/components/ui/button";
import { siGithub } from "simple-icons";

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto">

        {/* open source label */}
        <p className="text-sm text-green-400 mb-4">
          Open source from day one
        </p>

        {/* main title */}
        <h2 className="text-4xl font-semibold text-white leading-tight">
          Build faster, learn smarter
        </h2>

        {/* subtitle */}
        <p className="text-muted-foreground mt-4">
          Join ScripticX and improve your coding skills with real-time feedback,
          community learning, and instant execution.
        </p>

        {/* buttons */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/20"
          >
            Get started
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-black bg-white/90 hover:bg-white/10 hover:text-white"
          >
            Explore platform
          </Button>
        </div>

        {/* github badge */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-sm bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d={siGithub.path} />
            </svg>
            <span>@scripticx</span>
            <span className="text-muted-foreground">•</span>
            <span>Open source</span>
          </div>
        </div>

      </div>
    </section>
  );
}