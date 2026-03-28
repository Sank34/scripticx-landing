"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Brain, Share2, Book, Rocket, FileText } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="dark fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur bg-black/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-semibold text-lg text-white">
          ScripticX
        </Link>

        {/* Navigation */}
        <NavigationMenu className="hidden md:flex [&_[data-radix-navigation-menu-viewport]]:!bg-black [&_[data-radix-navigation-menu-viewport]]:!border-none">
          <NavigationMenuList>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent className="dark:bg-black dark:text-white">
                <ul className="w-96 p-4">
                  <ListItem href="#" title="Interactive Problems" icon={<Code className="w-4 h-4" />}>
                    Solve coding challenges with instant feedback.
                  </ListItem>
                  <ListItem href="#" title="MiniScript+" icon={<Brain className="w-4 h-4" />}>
                    Simple language built for learning.
                  </ListItem>
                  <ListItem href="#" title="Code Sharing" icon={<Share2 className="w-4 h-4" />}>
                    Share solutions and learn from others.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
              <NavigationMenuContent className="dark:bg-black dark:text-white">
                <ul className="w-96 p-4">
                  <ListItem href="#" title="Introduction" icon={<Book className="w-4 h-4" />}>
                    Learn the basics of ScripticX.
                  </ListItem>
                  <ListItem href="#" title="Getting Started" icon={<Rocket className="w-4 h-4" />}>
                    Setup your first project.
                  </ListItem>
                  <ListItem href="#" title="Examples" icon={<FileText className="w-4 h-4" />}>
                    Explore real code examples.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="https://platform.scripticx.com/login">
            <Button variant="ghost" className="text-muted-foreground hover:text-white">
              Login
            </Button>
          </Link>

          <Link href="https://platform.scripticx.com">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Get Started
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
            {icon && <div className="mt-0.5 text-white/80">{icon}</div>}
            <div className="flex flex-col gap-1">
              <div className="leading-none font-medium text-white">{title}</div>
              <div className="line-clamp-2 text-white/60">{children}</div>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}