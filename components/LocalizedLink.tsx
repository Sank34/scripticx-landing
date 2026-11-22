import NextLink from "next/link";
import { useLocale } from "next-intl";
import type { ComponentProps } from "react";

import type { SiteLocale } from "@/config/languages";
import { localizeHref } from "@/lib/locale-path";

/**
 * Drop-in replacement for next/link that points internal links at the
 * locale-prefixed URL (/en/..., /ro/...), matching canonicals and the sitemap.
 */
export default function LocalizedLink({ href, ...props }: ComponentProps<typeof NextLink>) {
  const locale = useLocale() as SiteLocale;
  const localizedHref =
    typeof href === "string"
      ? localizeHref(href, locale)
      : href.pathname
        ? { ...href, pathname: localizeHref(href.pathname, locale) }
        : href;

  return <NextLink href={localizedHref} {...props} />;
}
