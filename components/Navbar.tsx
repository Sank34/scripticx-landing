"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Brain, Share2, Book, Rocket, FileText } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          {t("logo")}
        </Link>

        {/* Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("features")}</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="w-96 p-4">
                  <ListItem href="#" title={t("features_items.interactive.title")} icon={<Code className="w-4 h-4" />}>
                    {t("features_items.interactive.desc")}
                  </ListItem>
                  <ListItem href="#" title={t("features_items.miniscript.title")} icon={<Brain className="w-4 h-4" />}>
                    {t("features_items.miniscript.desc")}
                  </ListItem>
                  <ListItem href="#" title={t("features_items.sharing.title")} icon={<Share2 className="w-4 h-4" />}>
                    {t("features_items.sharing.desc")}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("docs")}</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="w-96 p-4">
                  <ListItem href="#" title={t("docs_items.intro.title")} icon={<Book className="w-4 h-4" />}>
                    {t("docs_items.intro.desc")}
                  </ListItem>
                  <ListItem href="#" title={t("docs_items.gettingStarted.title")} icon={<Rocket className="w-4 h-4" />}>
                    {t("docs_items.gettingStarted.desc")}
                  </ListItem>
                  <ListItem href="#" title={t("docs_items.examples.title")} icon={<FileText className="w-4 h-4" />}>
                    {t("docs_items.examples.desc")}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#">{t("blog")}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link href="https://platform.scripticx.com/login">
            <Button variant="ghost" className="text-muted-foreground">
              {t("login")}
            </Button>
          </Link>

          <Link href="https://platform.scripticx.com">
            <Button className="bg-black text-white hover:bg-black/90">
              {t("getStarted")}
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; icon?: React.ReactNode }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex items-start gap-3 text-sm">
            {icon && <div className="mt-0.5 text-muted-foreground">{icon}</div>}
            <div className="flex flex-col gap-1">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">{children}</div>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}