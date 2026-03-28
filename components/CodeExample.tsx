import { Card, CardContent } from "@/components/ui/card";

export default function CodeExample() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <Card className="bg-muted/40 backdrop-blur border border-white/10">
        <CardContent className="p-6">
          <pre className="text-sm font-mono text-green-400">
{`PRINT "Hello World"

LET x = 10
IF x > 5 THEN
  PRINT "Big number"
END`}
          </pre>
        </CardContent>
      </Card>
    </section>
  );
}