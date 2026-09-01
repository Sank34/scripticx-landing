import DivisionPage, { createDivisionPageMetadata } from "@/components/marketing/DivisionPage";

export const generateMetadata = () => createDivisionPageMetadata("design");

export default function DesignPage() {
  return <DivisionPage division="design" />;
}
