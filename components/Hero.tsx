import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 text-center relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.2),transparent_60%)]" />

      <div className="relative max-w-3xl mx-auto">

        <p className="text-sm text-green-500 mb-4">
          MiniScript+ platform
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Learn programming <br />
          <span className="text-green-500">the smart way</span>
        </h1>

        <p className="text-muted-foreground mt-6 text-lg">
          Solve problems, share solutions, and improve faster.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Start Coding
          </Button>

          <Button size="lg" variant="secondary">
            View Examples
          </Button>
        </div>

        <div className="mt-12 text-xs text-muted-foreground">
          Trusted by developers learning faster worldwide
        </div>

      </div>

    </section>
  );
}