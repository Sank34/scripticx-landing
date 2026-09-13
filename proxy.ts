import { NextResponse, type NextRequest } from "next/server";

import { languageSettings, type SiteLocale } from "@/config/languages";

const localePattern = new RegExp(`^/(${languageSettings.supportedLocales.join("|")})(/.*)?$`);

export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(localePattern);

  if (!match) {
    return NextResponse.next();
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
  matcher: ["/en/:path*", "/ro/:path*"],
};
