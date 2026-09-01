import DivisionPage, { createDivisionPageMetadata } from "@/components/marketing/DivisionPage";

export const generateMetadata = () => createDivisionPageMetadata("consulting");

export default function ConsultingPage() {
  return <DivisionPage division="consulting" />;
}
