import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import {
  siBuymeacoffee,
  siGithub,
  siInstagram,
  siYoutube,
} from "simple-icons";

import { BrandMark } from "@/components/BrandMark";

const groups = [
  {
    key: "company",
    links: [
      ["about", "/#company"],
      ["education", "/education"],
      ["development", "/development"],
      ["platform", "/platform"],
      ["team", "/#team"],
      ["partners", "/partners"],
    ],
  },
  {
    key: "resources",
    links: [
      ["knowledge", "/knowledge"],
      ["docs", "/docs"],
      ["trust", "/trust"],
      ["verify", "/verify"],
    ],
  },
  {
    key: "legal",
    links: [
      ["privacy", "/legal/privacy"],
      ["terms", "/legal/terms"],
      ["cookies", "/legal/cookies"],
      ["acceptableUse", "/legal/acceptable-use"],
    ],
  },
] as const;

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Sank34/scripticx",
    icon: siGithub,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ScripticXLessons",
    icon: siYoutube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/scripticx/",
    icon: siInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/scripticx/",
    icon: {
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
    },
  },
  {
    label: "Buy Me a Coffee",
    href: "https://buymeacoffee.com/scripticx",
    icon: siBuymeacoffee,
  },
] as const;

export default async function Footer() {
  const t = await getTranslations("MarketingFooter");

  return (
    <footer className="border-t bg-muted/25">
      <div className="mx-auto max-w-[var(--sx-max-content)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <BrandMark className="text-xl" />
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              {t("description")}
            </p>
            <Link
              href="https://platform.scripticx.org/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              {t("contact")}
              <ArrowUpRight className="size-4" />
            </Link>

            <div className="mt-8">
              <h2 className="text-sm font-medium">{t("socials")}</h2>
              <div className="mt-3 flex flex-wrap gap-2.5 text-muted-foreground">
                {socials.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`ScripticX on ${label}`}
                    title={label}
                    className="flex size-9 items-center justify-center rounded-[var(--sx-radius-control)] border bg-background transition-colors hover:border-foreground/20 hover:bg-muted hover:text-foreground"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-[17px] fill-current"
                    >
                      <path d={icon.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.key}>
                <h2 className="text-sm font-medium">{t(`groups.${group.key}`)}</h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map(([key, href]) => (
                    <li key={key}>
                      <Link
                        href={href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {t(`links.${key}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} ScripticX SRL</span>
          <span>{t("registered")}</span>
        </div>
      </div>
    </footer>
  );
}
