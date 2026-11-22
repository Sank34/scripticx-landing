import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import Navbar from "@/components/Navbar";
import { JsonLd, siteStructuredData } from "@/lib/structured-data";
import {
  absoluteUrl,
  createSocialImageUrl,
  getSiteDescription,
  localizedAlternates,
  localizedPath,
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
    ? "ScripticX: pregătire la informatică, dezvoltare web și platformă de programare"
    : "ScripticX: programming education, web development and a learning platform";
  const description = getSiteDescription(locale);
  const socialImage = createSocialImageUrl({
    title: isRomanian
      ? "Educație, dezvoltare și programare."
      : "Education, development and programming.",
    description,
    section: isRomanian
      ? "Educație · Development · Platform"
      : "Education · Development · Platform",
    path: "/",
  });

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
    category: "technology",
    alternates: {
      canonical: absoluteUrl(localizedPath("/", isRomanian ? "ro" : "en")),
      ...localizedAlternates("/"),
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        {
          url: "/icons/notification-icon-72.png",
          sizes: "72x70",
          type: "image/png",
        },
        {
          url: "/icons/notification-icon-512.png",
          sizes: "512x499",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/icons/notification-icon-512.png",
          sizes: "512x499",
          type: "image/png",
        },
      ],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title,
      description,
      url: absoluteUrl(localizedPath("/", isRomanian ? "ro" : "en")),
      siteName: siteConfig.name,
      locale: isRomanian ? "ro_RO" : "en_US",
      alternateLocale: [isRomanian ? "en_US" : "ro_RO"],
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: socialImage,
          alt: title,
        },
      ],
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
  const socialImage = createSocialImageUrl({
    title:
      locale === "ro"
        ? "Pregătire la informatică și probleme de programare."
        : "Programming education and coding practice.",
    description,
    section:
      locale === "ro"
        ? "Educație · Development · Platform"
        : "Education · Development · Platform",
    path: "/",
  });
  const structuredData = siteStructuredData({
    locale: locale === "ro" ? "ro" : "en",
    description,
    socialImage,
  });

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${geistSans.className} min-h-full bg-background text-foreground flex flex-col`}
      >
        <JsonLd data={structuredData} />
        <NextIntlClientProvider>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
