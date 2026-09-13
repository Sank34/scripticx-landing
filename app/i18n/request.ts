import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { getSiteLocale, languageSettings } from "@/config/languages";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const requestHeaders = await headers();
  const locale = getSiteLocale(
    requestHeaders.get("x-scripticx-locale") ??
      cookieStore.get(languageSettings.cookieName)?.value,
  );

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
