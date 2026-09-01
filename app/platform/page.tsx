import DivisionPage, { createDivisionPageMetadata } from "@/components/marketing/DivisionPage";

export const generateMetadata = () => createDivisionPageMetadata("platform");

export default function PlatformPage() {
  return <DivisionPage division="platform" />;
}
