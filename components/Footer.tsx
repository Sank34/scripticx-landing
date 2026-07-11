import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { siGithub, siYoutube, siInstagram } from "simple-icons";
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

              <a
                href="https://www.instagram.com/scripticx/" /*link insta*/
                target="_blank"
                rel="noreferrer"
                aria-label="ScripticX on Instagram"
                className="flex size-9 items-center justify-center rounded-lg border transition hover:border-foreground/20 hover:bg-muted hover:text-foreground"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={siInstagram.path} />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/scripticx/" /*link linkedin*/
                target="_blank"
                rel="noreferrer"
                aria-label="ScripticX on LinkedIn"
                className="flex size-9 items-center justify-center rounded-lg border transition hover:border-foreground/20 hover:bg-muted hover:text-foreground"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
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
                <li><Link href="/verify" className="hover:text-foreground transition">{t("links.verify")}</Link></li>
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
                <li><Link href="https://www.scripticx.org/legal/privacy" className="hover:text-foreground transition">{t("links.privacy")}</Link></li>
                <li><Link href="https://www.scripticx.org/legal/terms" className="hover:text-foreground transition">{t("links.terms")}</Link></li>
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
