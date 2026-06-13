import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ScripticX - Learn Programming",
    short_name: "ScripticX",
    description: siteConfig.descriptions.en,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    categories: ["education", "developer tools", "productivity"],
    icons: [
      {
        src: "/icons/notification-icon-72.png",
        sizes: "72x70",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/notification-icon-512.png",
        sizes: "512x499",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
