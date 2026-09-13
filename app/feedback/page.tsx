import { links } from "@/config/links";
import { permanentRedirect } from "next/navigation";

export default function FeedbackPage() {
  permanentRedirect(links.feedback);
}
