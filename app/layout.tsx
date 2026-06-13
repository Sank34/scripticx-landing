import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import {
  absoluteUrl,
  getSiteDescription,
  siteConfig,
} from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isRomanian = locale === "ro";
  const title = isRomanian
    ? "ScripticX | Învață programare interactiv"
    : "ScripticX | Learn programming interactively";
  const description = getSiteDescription(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
      default: title,
      template: "%s | ScripticX",
    },
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: "ScripticX Team", url: siteConfig.url }],
    creator: "ScripticX",
    publisher: "ScripticX",
    category: "education",
    alternates: {
      canonical: "/",
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        {
          url: "/icon.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/icons/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/icons/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/apple-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title,
      description,
      url: absoluteUrl("/"),
      siteName: siteConfig.name,
      locale: isRomanian ? "ro_RO" : "en_US",
      alternateLocale: [isRomanian ? "en_US" : "ro_RO"],
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.socialImage),
          width: 1200,
          height: 630,
          alt: "ScripticX - Learn programming interactively",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.socialImage)],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const description = getSiteDescription(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        alternateName: "Platforma ScripticX",
        url: siteConfig.url,
        description,
        inLanguage: ["ro", "en"],
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logo),
          width: 512,
          height: 512,
        },
        sameAs: [
          "https://github.com/Sank34/scripticx",
          "https://www.youtube.com/@scripticx",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        alternateName: "Platforma ScripticX",
        url: siteConfig.url,
        description,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires a modern web browser",
        inLanguage: ["ro", "en"],
        image: absoluteUrl(siteConfig.socialImage),
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "RON",
        },
        featureList: [
          "MiniScript+ learning language",
          "Interactive programming exercises",
          "Instant code execution",
          "Progress tracking",
          "Classes and assignments",
          "Community learning",
        ],
      },
    ],
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${geistSans.className} min-h-full bg-background text-foreground flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
