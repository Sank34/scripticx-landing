import { getLocale } from "next-intl/server";

import CertificateVerification from "@/components/CertificateVerification";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const locale = await getLocale();

  return createPageMetadata({
    locale,
    path: "/verify",
    title: {
      en: "Verify a Certificate",
      ro: "Verifică un certificat",
    },
    description: {
      en: "Check whether a ScripticX certificate code is valid and view its public details.",
      ro: "Verifică dacă un cod de certificat ScripticX este valid și vezi detaliile publice.",
    },
  });
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <CertificateVerification />
      <Footer />
    </div>
  );
}
