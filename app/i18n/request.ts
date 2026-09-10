import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { getSiteLocale, languageSettings } from "@/config/languages";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = getSiteLocale(cookieStore.get(languageSettings.cookieName)?.value);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
