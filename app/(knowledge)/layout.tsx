import type { ReactNode } from "react";

import { KnowledgeHeader } from "@/components/knowledge/KnowledgeHeader";
import { KnowledgeSidebar } from "@/components/knowledge/KnowledgeSidebar";
import Navbar from "@/components/Navbar";

export default function KnowledgeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <KnowledgeHeader />
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:gap-8 lg:py-12">
          <KnowledgeSidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
