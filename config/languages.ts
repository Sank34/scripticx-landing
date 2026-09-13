export type SiteLocale = "en" | "ro";

export const languageSettings = {
  defaultLocale: "en" as SiteLocale,
  supportedLocales: ["en", "ro"] as SiteLocale[],
  cookieName: "locale",
  cookieMaxAgeSeconds: 31_536_000,
};

export function getSiteLocale(value: string | undefined): SiteLocale {
  if (value === "en" || value === "ro") {
    return value;
  }

  return languageSettings.defaultLocale;
}
