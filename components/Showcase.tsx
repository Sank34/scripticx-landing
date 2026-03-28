 "use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

export default function Showcase() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-white">
          Start building in seconds
        </h2>
        <p className="text-muted-foreground mt-4">
          Explore what you can do with ScripticX
        </p>
      </div>

      <Tabs defaultValue="problems" className="w-full">

        <TabsList className="flex gap-2 mb-10 bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10 mx-auto w-full max-w-full overflow-x-auto no-scrollbar justify-start sm:justify-center">
          <TabsTrigger value="problems" className="px-4 py-2 whitespace-nowrap rounded-full text-muted-foreground hover:text-white transition data-[state=active]:bg-white data-[state=active]:text-black shrink-0">
            Problems
          </TabsTrigger>
          <TabsTrigger value="sharing" className="px-4 py-2 whitespace-nowrap rounded-full text-muted-foreground hover:text-white transition data-[state=active]:bg-white data-[state=active]:text-black shrink-0">
            Sharing
          </TabsTrigger>
          <TabsTrigger value="execution" className="px-4 py-2 whitespace-nowrap rounded-full text-muted-foreground hover:text-white transition data-[state=active]:bg-white data-[state=active]:text-black shrink-0">
            Execution
          </TabsTrigger>
          <TabsTrigger value="progress" className="px-4 py-2 whitespace-nowrap rounded-full text-muted-foreground hover:text-white transition data-[state=active]:bg-white data-[state=active]:text-black shrink-0">
            Progress
          </TabsTrigger>
        </TabsList>

        <div className="relative">

          <TabsContent value="problems">
            <PreviewCard>
              <CodeBlock
                code={`PRINT "Solve this"
IF x > 10 THEN
  PRINT "Nice!"
END`}
              />
            </PreviewCard>
          </TabsContent>

          <TabsContent value="sharing">
            <PreviewCard>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  @sanke • just now
                </div>
                <div className="bg-muted p-3 rounded text-sm font-mono text-black-100">
                  PRINT x
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart size={14} className="text-red-500" />
                    <span>12</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    <span>3</span>
                  </div>
                </div>
              </div>
            </PreviewCard>
          </TabsContent>

          <TabsContent value="execution">
            <PreviewCard>
              <CodeBlock code={`PRINT "Hello World"\nX = 1\nPRINT X`} />
              <div className="mt-4 p-3 bg-black/70 rounded text-green-400 text-sm font-mono">
                {'>'} Hello World <br /> {'>'} 1
              </div>
            </PreviewCard>
          </TabsContent>

          <TabsContent value="progress">
            <PreviewCard>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  Progress this week
                </div>

                <div className="h-24 bg-gradient-to-r from-green-500/20 to-transparent rounded-lg flex items-end p-2 gap-1">
                  {[20, 40, 60, 30, 80, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-full bg-green-500/40 rounded"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </PreviewCard>
          </TabsContent>

        </div>
      </Tabs>
    </section>
  );
}

function PreviewCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="max-w-3xl mx-auto bg-black/60 backdrop-blur-md border border-white/10 shadow-xl">
      <CardContent className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={Math.random()}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

function CodeBlock({ code }: { code: string }) {
  const lines = code.split("\n");

  return (
    <pre className="text-sm font-mono space-y-1 text-white bg-black/40 p-4 rounded-lg border border-white/10">
      {lines.map((line, i) => (
        <div
          key={i}
          className={`px-2 py-0.5 rounded ${
            line.includes("IF") ? "bg-green-500/15 text-green-300 inline-block min-w-full" : ""
          }`}
        >
          {line}
        </div>
      ))}
    </pre>
  );
}