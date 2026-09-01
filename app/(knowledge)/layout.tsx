import type { ReactNode } from "react";

import { KnowledgeContentTransition } from "@/components/knowledge/KnowledgeContentTransition";
import { KnowledgeHeader } from "@/components/knowledge/KnowledgeHeader";
import { KnowledgeSidebar } from "@/components/knowledge/KnowledgeSidebar";

export default function KnowledgeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-16">
        <KnowledgeHeader />
        <div className="flex min-h-[calc(100svh-7.5rem)] items-start">
          <KnowledgeSidebar />
          <div className="min-w-0 flex-1 px-5 py-8 sm:px-8 lg:px-10 lg:py-12 xl:px-14 2xl:px-20">
            <KnowledgeContentTransition>
              {children}
            </KnowledgeContentTransition>
          </div>
        </div>
      </div>
    </div>
  );
}
