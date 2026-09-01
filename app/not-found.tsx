import Link from "next/link";
import { getLocale } from "next-intl/server";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Home,
  SearchCheck,
} from "lucide-react";

import Footer from "@/components/Footer";
import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";

const copy = {
  en: {
    eyebrow: "Error / 404",
    label: "Page not found",
    title: "This page wandered off.",
    description:
      "The address may be outdated, incomplete, or somewhere inside a very confident typo.",
    home: "Back to homepage",
    knowledge: "Open Knowledge Center",
    education: "Explore Education Center",
    verify: "Verify a certificate",
    platform: "Open the platform",
    noteTitle: "A quick way forward",
    note:
      "Return home, search the Knowledge Center, or continue directly to the ScripticX platform.",
    routes: "Useful destinations",
  },
  ro: {
    eyebrow: "Eroare / 404",
    label: "Pagina nu a fost găsită",
    title: "Pagina aceasta s-a rătăcit.",
    description:
      "Adresa poate fi veche, incompletă sau ascunsă într-un typo foarte încrezător.",
    home: "Înapoi la homepage",
    knowledge: "Deschide Knowledge Center",
    education: "Explorează Education Center",
    verify: "Verifică un certificat",
    platform: "Deschide platforma",
    noteTitle: "O cale rapidă înainte",
    note:
      "Revino pe homepage, caută în Knowledge Center sau continuă direct în platforma ScripticX.",
    routes: "Destinații utile",
  },
} as const;

export default async function NotFound() {
  const locale = await getLocale();
  const t = locale === "ro" ? copy.ro : copy.en;

  const routes = [
    {
      href: "/education",
      label: t.education,
      index: "01",
      icon: GraduationCap,
    },
    {
      href: "/verify",
      label: t.verify,
      index: "02",
      icon: SearchCheck,
    },
    {
      href: "https://platform.scripticx.org",
      label: t.platform,
      index: "03",
      icon: ArrowRight,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        <section className="relative isolate grid min-h-[calc(100svh-4rem)] overflow-hidden border-b lg:grid-cols-[1.08fr_.92fr]">
          <div className="sx-hero-aura pointer-events-none absolute inset-0 -z-20 opacity-80" />
          <div className="sx-grid-fade pointer-events-none absolute inset-0 -z-10 opacity-75" />

          <div className="flex min-h-[28rem] flex-col justify-between border-b px-5 py-12 sm:min-h-[36rem] sm:px-8 sm:py-16 lg:min-h-0 lg:border-b-0 lg:border-r lg:px-12 lg:py-20 xl:px-16 2xl:px-24">
            <Reveal distance={16}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                ScripticX / {t.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.06} distance={22}>
              <div>
                <div
                  className="sx-gradient-text text-[9rem] font-semibold leading-[0.72] tracking-[-0.09em] sm:text-[13rem] lg:text-[15rem] xl:text-[18rem]"
                  aria-hidden="true"
                >
                  404
                </div>
                <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="size-1.5 bg-foreground" />
                  {t.label}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex items-center bg-background/60 px-5 py-14 backdrop-blur-sm sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
            <Reveal className="w-full max-w-2xl" delay={0.1} distance={18}>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {t.noteTitle}
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl xl:text-6xl">
                {t.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {t.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/">
                    <Home />
                    {t.home}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/knowledge">
                    <BookOpen />
                    {t.knowledge}
                  </Link>
                </Button>
              </div>

              <div className="mt-12">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.routes}
                </div>
                <div className="divide-y border-y">
                  {routes.map(({ href, label, index, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="group flex items-center gap-4 py-4 text-sm transition-colors hover:text-muted-foreground"
                    >
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {index}
                      </span>
                      <Icon className="size-4" />
                      <span className="font-medium">{label}</span>
                      <ArrowRight className="ml-auto size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
                <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
                  {t.note}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
