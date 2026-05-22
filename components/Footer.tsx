"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siGithub, siX, siYoutube } from "simple-icons";
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
            <span className="text-foreground cursor-pointer hover:underline transition">
              {t("security.more")}
            </span>
          </span>
          <span className="hidden sm:inline">•</span>
          <span>✔ SOC2 Type 2 Certified</span>
          <span className="hidden sm:inline">•</span>
          <span>✔ HIPAA Compliant</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* logo + socials */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              ScripticX
            </h2>

            <div className="flex gap-4 text-muted-foreground">
              {/* GitHub */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cursor-pointer transition hover:text-foreground hover:scale-110"
              >
                <path d={siGithub.path} />
              </svg>

              {/* Twitter */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cursor-pointer transition hover:text-foreground hover:scale-110"
              >
                <path d={siX.path} />
              </svg>

              {/* Discord / Chat */}
              <MessageCircle className="w-5 h-5 cursor-pointer transition hover:text-foreground hover:scale-110" />

              {/* YouTube */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cursor-pointer transition hover:text-foreground hover:scale-110"
              >
                <path d={siYoutube.path} />
              </svg>
            </div>
          </div>

          {/* links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 text-sm">

            <div>
              <h3 className="font-medium mb-3">{t("sections.product")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">{t("links.problems")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.editor")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.community")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.pricing")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t("sections.solutions")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">{t("links.students")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.teachers")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.beginners")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.teams")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t("sections.resources")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">{t("links.docs")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.blog")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.support")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.status")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t("sections.developers")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">{t("links.api")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.openSource")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.changelog")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.contributing")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">{t("sections.company")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">{t("links.about")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.privacy")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.terms")}</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">{t("links.contact")}</Link></li>
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