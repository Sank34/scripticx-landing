import DivisionPage, { createDivisionPageMetadata } from "@/components/marketing/DivisionPage";

export const generateMetadata = () => createDivisionPageMetadata("workshops");

export default function WorkshopsPage() {
  return <DivisionPage division="workshops" />;
}
