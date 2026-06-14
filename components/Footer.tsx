import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { siGithub, siYoutube } from "simple-icons";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t mt-20 sm:mt-32">

      {/* top security bar */}
      <div className="py-6 px-4 text-center text-xs sm:text-sm text-muted-foreground border-b">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span>
            {t("security.protect")}{" "}
            <Link href="/trust" className="text-foreground hover:underline transition">
              {t("security.more")}
            </Link>
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Check className="size-3.5 text-green-600" />
            {t("security.openSource")}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Check className="size-3.5 text-green-600" />
            {t("security.disclosure")}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* logo + socials */}
          <div>
            <Link
              href="/"
              className="mb-4 flex w-fit items-center justify-baseline text-xl font-semibold"
            >
              Scriptic
              <Image
                src="/logoSCX.svg"
                alt="ScripticX"
                width={32}
                height={32}
                className="h-auto w-8"
              />
            </Link>

            <p className="mb-5 max-w-xs text-sm leading-6 text-muted-foreground">
              {t("tagline")}
            </p>

            <div className="flex gap-3 text-muted-foreground">
              <a
                href="https://github.com/Sank34/scripticx"
                target="_blank"
                rel="noreferrer"
                aria-label="ScripticX on GitHub"
                className="flex size-9 items-center justify-center rounded-lg border transition hover:border-foreground/20 hover:bg-muted hover:text-foreground"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={siGithub.path} />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@ScripticXLessons"
                target="_blank"
                rel="noreferrer"
                aria-label="ScripticX on YouTube"
                className="flex size-9 items-center justify-center rounded-lg border transition hover:border-foreground/20 hover:bg-muted hover:text-foreground"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={siYoutube.path} />
                </svg>
              </a>
            </div>
          </div>

          {/* links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 text-sm">

            <div>
              <h3 className="font-medium mb-3">{t("sections.product")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="https://platform.scripticx.org/problems" className="hover:text-foreground transition">{t("links.problems")}</Link></li>
                <li><Link href="https://platform.scripticx.org/editor" className="hover:text-foreground transition">{t("links.editor")}</Link></li>
                <li><Link href="https://platform.scripticx.org/feed" className="hover:text-foreground transition">{t("links.community")}</Link></li>
                <li><Link href="/knowledge" className="hover:text-foreground transition">{t("links.knowledge")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t("sections.solutions")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="https://platform.scripticx.org/problems" className="hover:text-foreground transition">{t("links.students")}</Link></li>
                <li><Link href="https://platform.scripticx.org/classes" className="hover:text-foreground transition">{t("links.teachers")}</Link></li>
                <li><Link href="/docs" className="hover:text-foreground transition">{t("links.beginners")}</Link></li>
                <li><Link href="https://platform.scripticx.org/classes" className="hover:text-foreground transition">{t("links.teams")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t("sections.resources")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/docs" className="hover:text-foreground transition">{t("links.docs")}</Link></li>
                <li><Link href="/trust" className="hover:text-foreground transition">{t("links.trust")}</Link></li>
                <li><a href="https://platform.scripticx.org/contact" className="hover:text-foreground transition">{t("links.support")}</a></li>
                <li><Link href="/legal/acceptable-use" className="hover:text-foreground transition">{t("links.acceptableUse")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t("sections.developers")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/docs/api" className="hover:text-foreground transition">{t("links.api")}</Link></li>
                <li><a href="https://github.com/Sank34/scripticx" target="_blank" rel="noreferrer" className="hover:text-foreground transition">{t("links.openSource")}</a></li>
                <li><a href="https://github.com/Sank34/scripticx/commits" target="_blank" rel="noreferrer" className="hover:text-foreground transition">{t("links.changelog")}</a></li>
                <li><a href="https://github.com/Sank34/scripticx" target="_blank" rel="noreferrer" className="hover:text-foreground transition">{t("links.contributing")}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t("sections.company")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/knowledge" className="hover:text-foreground transition">{t("links.about")}</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-foreground transition">{t("links.privacy")}</Link></li>
                <li><Link href="/legal/terms" className="hover:text-foreground transition">{t("links.terms")}</Link></li>
                <li><a href="https://platform.scripticx.org/contact" className="hover:text-foreground transition">{t("links.contact")}</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* bottom */}
        <div className="border-t mt-12 sm:mt-16 pt-6 flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} {t("copyright")}</span>
        </div>

      </div>
    </footer>
  );
}
