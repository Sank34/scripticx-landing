import DivisionPage, { createDivisionPageMetadata } from "@/components/marketing/DivisionPage";

export const generateMetadata = () => createDivisionPageMetadata("informatics");

export default function InformaticsPage() {
  return <DivisionPage division="informatics" />;
}
