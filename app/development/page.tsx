import { getLocale } from "next-intl/server";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { createDivisionPageMetadata } from "@/components/marketing/DivisionPage";
import { DevelopmentHero } from "@/components/marketing/DevelopmentHero";
import { DevelopmentWork } from "@/components/marketing/DevelopmentWork";
import { DevelopmentDetails } from "@/components/marketing/DevelopmentDetails";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { getMarketingLocale } from "@/lib/marketing-content";

export const generateMetadata = () => createDivisionPageMetadata("development");

export default async function DevelopmentPage() {
  const locale = getMarketingLocale(await getLocale());
  const ro = locale === "ro";
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        <DevelopmentHero locale={locale} />
        <DevelopmentWork locale={locale} />
        <DevelopmentDetails locale={locale} />
        <section className="mx-auto max-w-[100rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <p className="text-sm text-muted-foreground">{ro ? "Următorul proiect" : "The next project"}</p>
          <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-[1.03] tracking-[-0.055em]">{ro ? "Ce vrei să construim?" : "What would you like to build?"}</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{ro ? "Spune-ne ideea, provocarea sau ce ai vrea să funcționeze mai bine. Prima discuție este gratuită." : "Tell us about the idea, the challenge or what you would like to work better. The first conversation is free."}</p>
          <Button asChild className="mt-8 min-h-12 px-6"><Link href="https://platform.scripticx.org/contact">{ro ? "Discută cu echipa ScripticX" : "Talk to the ScripticX team"}<ArrowUpRight /></Link></Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
