import { Code2, Share2, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Solve problems",
      desc: "Start with interactive coding challenges designed to improve your skills.",
      icon: <Code2 className="text-green-500" />,
    },
    {
      title: "Share your code",
      desc: "Post your solutions and learn from others in the community.",
      icon: <Share2 className="text-green-500" />,
    },
    {
      title: "Track progress",
      desc: "See your improvement over time and stay consistent.",
      icon: <TrendingUp className="text-green-500" />,
    },
  ];

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">

      <div className="text-center mb-20">
        <h2 className="text-3xl font-semibold text-white">
          How it works
        </h2>
        <p className="text-muted-foreground mt-4">
          A simple workflow to help you learn faster
        </p>
      </div>

      <div className="relative grid md:grid-cols-3 gap-12">

        <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-white/10" />

        {steps.map((s, i) => (
          <div
            key={i}
            className="group text-center space-y-4 relative transition hover:-translate-y-1 flex flex-col items-center"
          >
            {/* circle icon */}
            <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-green-500/40 transition relative z-10">
              <span className="absolute -top-2 -right-2 text-[10px] bg-black border border-white/10 rounded-full w-5 h-5 flex items-center justify-center text-muted-foreground blu">
                {i + 1}
              </span>
              {s.icon}
            </div>
            <h3 className="font-semibold text-white group-hover:text-green-400 transition">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {s.desc}
            </p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),transparent_70%)] -z-10" />
          </div>
        ))}

      </div>

    </section>
  );
}