import DivisionPage, { createDivisionPageMetadata } from "@/components/marketing/DivisionPage";

export const generateMetadata = () => createDivisionPageMetadata("education");

export default function EducationPage() {
  return <DivisionPage division="education" />;
}
