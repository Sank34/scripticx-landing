import DivisionPage, { createDivisionPageMetadata } from "@/components/marketing/DivisionPage";

export const generateMetadata = () => createDivisionPageMetadata("webServices");

export default function WebServicesPage() {
  return <DivisionPage division="webServices" />;
}
