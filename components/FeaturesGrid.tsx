import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Users,
  BarChart3,
  Zap,
  Brain,
} from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      title: "Interactive problems",
      desc: "Solve real-world coding challenges with instant feedback.",
      icon: <Brain className="text-green-500" size={20} />,
      big: true,
    },
    {
      title: "MiniScript+",
      desc: "A simple and powerful language built for learning.",
      icon: <Code2 size={20} className="text-green-500"/>,
    },
    {
      title: "Code sharing",
      desc: "Share your solutions and learn from others.",
      icon: <Users size={20} className="text-green-500"/>,
    },
    {
      title: "Track progress",
      desc: "See your growth and improve consistently.",
      icon: <BarChart3 className="text-green-500" size={20} />,
      big: true,
    },
    {
      title: "Community",
      desc: "Connect with other developers.",
      icon: <Users size={20} className="text-green-500"/>,
      big: true,
    },
    {
      title: "Fast execution",
      desc: "Run code instantly in your browser.",
      icon: <Zap size={20} className="text-green-500"/>,
    },
  ];

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-white">
          Everything you need to improve
        </h2>
        <p className="text-muted-foreground mt-4">
          Built for learning, sharing, and growing faster
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {features.map((f, i) => (
          <Card
            key={i}
            className={`
              group relative overflow-hidden
              bg-black/40 border border-white/10
              hover:border-green-500/40
              transition-all duration-300
              hover:shadow-[0_0_60px_rgba(34,197,94,0.25)]
              hover:-translate-y-1.5 hover:scale-[1.02]
              ${f.big ? "md:col-span-2" : ""}
            `}
          >

            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle,rgba(34,197,94,0.22)_1px,transparent_1px)] [background-size:18px_18px]" />
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.35),transparent_70%)]" />

            <CardContent className="p-6 space-y-3 relative z-10">

              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-green-500/40 transition">
                {f.icon}
              </div>

              <h3 className="font-semibold text-white">
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