"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { BrandMark } from "@/components/BrandMark";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/education", key: "education" },
  { href: "/development", key: "development" },
  { href: "/platform", key: "platform" },
  { href: "/events", key: "events" },
  { href: "/partners", key: "partners" },
  { href: "/knowledge", key: "resources" },
] as const;

export default function Navbar() {
  const t = useTranslations("MarketingNav");
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background shadow-[0_1px_0_rgba(15,23,42,.025)]">
      <div className="mx-auto flex h-16 max-w-[var(--sx-max-content)] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <BrandMark className="text-lg" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t("ariaLabel")}>
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  active && "bg-muted text-foreground",
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <Button variant="ghost" asChild>
            <Link href="https://platform.scripticx.org/login">{t("login")}</Link>
          </Button>
          <Button asChild>
            <Link href="https://platform.scripticx.org">
              {t("openPlatform")}
              <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label={t("openMenu")}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[min(88vw,360px)] p-0">
              <SheetHeader className="border-b p-5 text-left">
                <SheetTitle>
                  <BrandMark className="text-lg" />
                </SheetTitle>
                <SheetDescription>{t("menuDescription")}</SheetDescription>
              </SheetHeader>
              <nav className="grid gap-1 p-4" aria-label={t("ariaLabel")}>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
                    >
                      {t(item.key)}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto grid gap-2 border-t p-4">
                <Button variant="outline" asChild>
                  <Link href="https://platform.scripticx.org/login">{t("login")}</Link>
                </Button>
                <Button asChild>
                  <Link href="https://platform.scripticx.org">{t("openPlatform")}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
