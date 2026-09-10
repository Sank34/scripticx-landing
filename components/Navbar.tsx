"use client";
import { links } from "@/config/links";

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

import { navigationItems } from "@/config/navigation";

export default function Navbar() {
  const translate = useTranslations("MarketingNav");
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background shadow-[0_1px_0_rgba(15,23,42,.025)]">
      <div className="mx-auto flex h-16 max-w-[var(--sx-max-content)] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <BrandMark className="text-lg" />

        <nav className="hidden items-center gap-1 xl:flex" aria-label={translate("ariaLabel")}>
          {navigationItems.map((item) => {
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
                {translate(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-2 xl:flex">
          <LanguageSwitcher />
          <Button variant="ghost" asChild>
            <Link href={links.login}>{translate("login")}</Link>
          </Button>
          <Button asChild>
            <Link href={links.platform}>
              {translate("openPlatform")}
              <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label={translate("openMenu")}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[min(88vw,360px)] p-0">
              <SheetHeader className="border-b p-5 text-left">
                <SheetTitle>
                  <BrandMark className="text-lg" />
                </SheetTitle>
                <SheetDescription>{translate("menuDescription")}</SheetDescription>
              </SheetHeader>
              <nav className="grid gap-1 p-4" aria-label={translate("ariaLabel")}>
                {navigationItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
                    >
                      {translate(item.key)}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto grid gap-2 border-t p-4">
                <Button variant="outline" asChild>
                  <Link href={links.login}>{translate("login")}</Link>
                </Button>
                <Button asChild>
                  <Link href={links.platform}>{translate("openPlatform")}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
