import { NextResponse, type NextRequest } from "next/server";

import { languageSettings, type SiteLocale } from "@/config/languages";

const localePattern = new RegExp(`^/(${languageSettings.supportedLocales.join("|")})(/.*)?$`);

/**
 * Unprefixed page URLs (/members/maia) redirect to their locale-prefixed
 * canonical (/en/members/maia) so each page exists at exactly one URL.
 * Visitors without a locale cookie, including crawlers, get a permanent 301
 * to the default locale. A saved cookie gets a temporary 307 so browsers
 * never cache a redirect that depends on the visitor's language choice.
 */
function redirectToLocalizedPath(request: NextRequest) {
  const savedLocale = request.cookies.get(languageSettings.cookieName)?.value;
  const hasSavedLocale = languageSettings.supportedLocales.includes(savedLocale as SiteLocale);
  const locale = hasSavedLocale ? (savedLocale as SiteLocale) : languageSettings.defaultLocale;

  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url, hasSavedLocale ? 307 : 301);
}

export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(localePattern);

  if (!match) {
    return redirectToLocalizedPath(request);
  }

  const locale = match[1] as SiteLocale;
  const pathname = match[2] || "/";

  if (/\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-scripticx-locale", locale);

  const rewrittenUrl = request.nextUrl.clone();
  rewrittenUrl.pathname = pathname;

  const response = NextResponse.rewrite(rewrittenUrl, {
    request: { headers: requestHeaders },
  });

  response.cookies.set({
    name: languageSettings.cookieName,
    value: locale,
    path: "/",
    maxAge: languageSettings.cookieMaxAgeSeconds,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  // Every page path. Skips Next internals, API routes, metadata files
  // (sitemap.xml, robots.txt, manifest.webmanifest) and anything with a file
  // extension, which are all served without a locale prefix.
  matcher: ["/((?!_next/|api/|.*\\.[^/]+$).*)"],
};
