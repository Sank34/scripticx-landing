import Link from "next/link";
import { getLocale } from "next-intl/server";
import { BookOpen, Home, SearchCheck } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const copy = {
  en: {
    badge: "404 - Page not found",
    title: "Oops... not found :(",
    description:
      "This page vanished somewhere between a loop, a condition, and a very confident typo.",
    home: "Back to homepage",
    knowledge: "Open Knowledge Center",
    verify: "Verify a certificate",
    noteTitle: "Tiny recovery plan",
    note:
      "Go home, open the docs, or pretend this was an intentional debugging exercise. :)",
  },
  ro: {
    badge: "404 - Pagina nu a fost găsită",
    title: "Oops... nu am găsit pagina :(",
    description:
      "Pagina asta a dispărut undeva între o buclă, o condiție și un typo foarte încrezător.",
    home: "Înapoi la homepage",
    knowledge: "Deschide Knowledge Center",
    verify: "Verifică un certificat",
    noteTitle: "Plan mic de recuperare",
    note:
      "Mergi acasă, deschide documentația sau prefă-te că a fost un exercițiu intenționat de debugging. :)",
  },
} as const;

export default async function NotFound() {
  const locale = await getLocale();
  const t = locale === "ro" ? copy.ro : copy.en;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden px-4 py-20 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-white to-green-100" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/35 blur-[110px]" />

        <section className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border bg-white/80 p-6 text-center shadow-2xl shadow-green-950/10 backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="absolute -left-16 -top-16 size-44 rounded-full bg-green-200/60 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 size-56 rounded-full bg-emerald-200/60 blur-3xl" />

            <div className="relative">
              <p className="mx-auto inline-flex items-center gap-2 rounded-full border bg-white/75 px-4 py-2 text-sm font-medium text-green-800 shadow-sm backdrop-blur">
                <SearchCheck className="size-4" />
                {t.badge}
              </p>

              <div className="mt-8 text-[8rem] font-black leading-none tracking-tighter text-black drop-shadow-[0_12px_35px_rgba(22,101,52,0.14)] sm:text-[12rem] lg:text-[15rem]">
                404
              </div>

              <h1 className="-mt-3 text-4xl font-black tracking-tight text-black sm:text-6xl">
                {t.title}
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {t.description}
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  size="lg"
                  className="bg-black text-white shadow-lg hover:bg-black/90"
                  asChild
                >
                  <Link href="/">
                    <Home className="size-4" />
                    {t.home}
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/70 hover:bg-white"
                  asChild
                >
                  <Link href="/knowledge">
                    <BookOpen className="size-4" />
                    {t.knowledge}
                  </Link>
                </Button>
              </div>
              <div className="mx-auto mt-8 max-w-xl rounded-3xl border bg-white/70 p-4 backdrop-blur">
                <p className="text-sm font-semibold">{t.noteTitle}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.note}</p>
                <Button
                  className="mt-4 rounded-full bg-white/80 hover:bg-white"
                  variant="outline"
                  asChild
                >
                  <Link href="/verify">{t.verify}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
