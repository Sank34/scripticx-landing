import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      title: "Interactive problems",
      desc: "Solve real-world challenges with instant feedback",
    },
    {
      title: "MiniScript+ language",
      desc: "Simple, powerful syntax designed for learning",
    },
    {
      title: "Code sharing",
      desc: "Post solutions and learn from others",
    },
    {
      title: "Progress tracking",
      desc: "Track your growth over time",
    },
    {
      title: "Community",
      desc: "Engage with other developers",
    },
    {
      title: "Fast execution",
      desc: "Run code instantly in your browser",
    },
  ];

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">

        {features.map((f) => (
          <Card
            key={f.title}
            className="bg-black/40 border border-white/10 hover:border-green-500/40 transition hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
          >
            <CardContent className="p-6 space-y-2">
              <h3 className="font-semibold">{f.title}</h3>
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