import { languageSettings, type SiteLocale } from "../config/languages.ts";

const localePrefix = new RegExp(
  `^/(${languageSettings.supportedLocales.join("|")})(?=/|$)`,
);

/** Paths served as-is, never behind a locale prefix. */
const unlocalizedPrefixes = ["/api/", "/_next/"];

/**
 * Adds the locale prefix to an internal path so links point at the same URL
 * the canonical tag and sitemap declare (e.g. "/members/maia" → "/en/members/maia").
 * External URLs, hash-only links, already-prefixed paths and static files are
 * returned unchanged.
 */
export function localizeHref(href: string, locale: SiteLocale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const [, path, suffix] = href.match(/^([^?#]*)([\s\S]*)$/)!;

  if (
    localePrefix.test(path) ||
    unlocalizedPrefixes.some((prefix) => path.startsWith(prefix)) ||
    /\.[^/]+$/.test(path)
  ) {
    return href;
  }

  const normalizedPath = path === "/" ? "" : path;
  return `/${locale}${normalizedPath}${suffix}`;
}

/** Removes a leading locale segment: "/en/members/maia" → "/members/maia", "/ro" → "/". */
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(localePrefix, "");
  return stripped === "" ? "/" : stripped;
}
