import DivisionPage, { createDivisionPageMetadata } from "@/components/marketing/DivisionPage";

export const generateMetadata = () => createDivisionPageMetadata("machineLearning");

export default function MachineLearningPage() {
  return <DivisionPage division="machineLearning" />;
}
