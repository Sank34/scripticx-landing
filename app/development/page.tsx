import DivisionPage, { createDivisionPageMetadata } from "@/components/marketing/DivisionPage";

export const generateMetadata = () => createDivisionPageMetadata("development");

export default function DevelopmentPage() {
  return <DivisionPage division="development" />;
}
