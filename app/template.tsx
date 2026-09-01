import { PageTransition } from "@/components/marketing/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
