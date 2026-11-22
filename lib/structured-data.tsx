import { developmentContent } from "@/config/development";
import { divisionContent } from "@/config/divisions";
import type { SiteLocale } from "@/config/languages";
import { links } from "@/config/links";
import { partners } from "@/config/partners";
import { teamMembers } from "@/config/team";
import { absoluteUrl, localizedPath, siteConfig } from "@/lib/metadata";
import { hasConfirmedDate } from "@/lib/events-data";
import { getPersonId } from "@/lib/team-data";
import type { ScripticxEvent } from "@/types/events";

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;
const platformId = `${siteConfig.url}/#platform`;
const miniscriptId = `${siteConfig.url}/#miniscript`;

const { organization } = siteConfig;

function pageUrl(path: string, locale: SiteLocale) {
  return absoluteUrl(localizedPath(path, locale));
}

const copy = {
  en: {
    education: "ScripticX Education Center",
    development: "ScripticX Development",
    catalog: "ScripticX services",
    clientPortal:
      "Every client gets a dedicated client portal to follow project updates and milestones, share feedback, manage approvals and keep files, contracts and invoices in one place.",
    freeLearning: "Free workshops and courses",
    freeLearningDescription:
      "Free programming, machine learning and robotics workshops and courses, organized in Brăila with ScripticX partners.",
    onlineLessons: "Free online programming lessons",
    onlineLessonsDescription:
      "Free programming lessons on the ScripticX Lessons YouTube channel and structured lessons, problems and roadmaps on the ScripticX Platform.",
    miniscript:
      "MiniScript+ is the beginner-friendly programming language used on the ScripticX Platform and in ScripticX workshops.",
  },
  ro: {
    education: "Centrul Educațional ScripticX",
    development: "ScripticX Development",
    catalog: "Serviciile ScripticX",
    clientPortal:
      "Fiecare client primește un portal dedicat în care urmărește progresul și etapele proiectului, trimite feedback, gestionează aprobările și păstrează fișierele, contractele și facturile într-un singur loc.",
    freeLearning: "Workshop-uri și cursuri gratuite",
    freeLearningDescription:
      "Workshop-uri și cursuri gratuite de programare, machine learning și robotică, organizate în Brăila împreună cu partenerii ScripticX.",
    onlineLessons: "Lecții de programare online gratuite",
    onlineLessonsDescription:
      "Lecții de programare gratuite pe canalul de YouTube ScripticX Lessons, plus lecții, probleme și trasee de învățare structurate pe Platforma ScripticX.",
    miniscript:
      "MiniScript+ este limbajul de programare prietenos pentru începători folosit pe Platforma ScripticX și la workshop-urile ScripticX.",
  },
} as const;

const brailaAddress = {
  "@type": "PostalAddress",
  addressLocality: organization.locality,
  addressCountry: organization.countryCode,
} as const;

function service(
  name: string,
  description: string,
  url: string,
  extra: Record<string, unknown> = {},
) {
  return {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      description,
      url,
      provider: { "@id": organizationId },
      areaServed: { "@type": "Country", name: organization.countryName.en },
    },
    ...extra,
  };
}

function organizationNode(locale: SiteLocale) {
  const t = copy[locale];
  const developmentUrl = pageUrl("/development", locale);
  const educationUrl = pageUrl("/education", locale);
  const capabilities = developmentContent[locale].capabilities.items;
  const programs = divisionContent[locale].education.approach.items;
  const free = { price: "0", priceCurrency: "RON" };

  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo),
      width: 512,
      height: 512,
    },
    description: siteConfig.definitions[locale],
    foundingDate: organization.foundingDate,
    foundingLocation: {
      "@type": "Place",
      name: `${organization.locality}, ${organization.countryName[locale]}`,
      address: brailaAddress,
    },
    address: brailaAddress,
    areaServed: { "@type": "Country", name: organization.countryName.en },
    founder: { "@id": getPersonId(organization.founderSlug) },
    member: teamMembers.map((member) => ({
      "@type": "Person",
      "@id": getPersonId(member.slug),
      name: member.name,
      url: pageUrl(`/members/${member.slug}`, locale),
    })),
    knowsAbout: [
      "Informatics education",
      "Algorithms and data structures",
      "Programming contest preparation",
      "Machine learning",
      "Web development",
      "Mobile app development",
      "UI/UX design",
      "MiniScript+",
      "Python",
      "C++",
    ],
    sameAs: [
      links.github,
      links.organizationYoutube,
      links.youtube,
      links.linkedin,
      links.instagram,
    ],
    sponsor: partners
      .filter((partner) => partner.type === "sponsor")
      .map((partner) => ({ "@type": "Organization", name: partner.name, url: partner.url })),
    department: [
      {
        "@type": "EducationalOrganization",
        name: t.education,
        url: educationUrl,
        parentOrganization: { "@id": organizationId },
      },
      {
        "@type": "Organization",
        name: t.development,
        url: developmentUrl,
        parentOrganization: { "@id": organizationId },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.catalog,
      itemListElement: [
        ...capabilities.map((item) =>
          service(
            item.title,
            item.key === "products" ? `${item.description} ${t.clientPortal}` : item.description,
            developmentUrl,
          ),
        ),
        ...programs.map((item) =>
          service(
            item.title,
            item.description,
            educationUrl,
            // Workshops are listed as free for participants in config/divisions.ts.
            item.points.some((point) => /^(Free|Gratuit)/.test(point)) ? free : {},
          ),
        ),
        service(t.freeLearning, t.freeLearningDescription, pageUrl("/events", locale), free),
        service(t.onlineLessons, t.onlineLessonsDescription, links.youtube, free),
      ],
    },
  };
}

function platformNode(locale: SiteLocale, image: string) {
  const platform = developmentContent[locale].work.items.find((item) => item.key === "platform");

  return {
    "@type": "WebApplication",
    "@id": platformId,
    name: "ScripticX Platform",
    alternateName: "Platforma ScripticX",
    url: links.platform,
    description: platform?.overview,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires a modern web browser",
    inLanguage: ["ro", "en"],
    image,
    publisher: { "@id": organizationId },
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
    mainEntityOfPage: pageUrl("/platform", locale),
  };
}

function miniscriptNode(locale: SiteLocale) {
  return {
    "@type": "ComputerLanguage",
    "@id": miniscriptId,
    name: "MiniScript+",
    description: copy[locale].miniscript,
    url: pageUrl("/docs/miniscript", locale),
    creator: { "@id": organizationId },
  };
}

/** The site-wide graph rendered in the root layout. */
export function siteStructuredData({
  locale,
  description,
  socialImage,
}: {
  locale: SiteLocale;
  description: string;
  socialImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        alternateName: "Platforma ScripticX",
        url: pageUrl("/", locale),
        description,
        inLanguage: ["ro", "en"],
        publisher: { "@id": organizationId },
      },
      organizationNode(locale),
      platformNode(locale, socialImage),
      miniscriptNode(locale),
    ],
  };
}

/** Event location from the free-text location field used in config/events.ts. */
function eventLocation(location: string) {
  if (location.startsWith("Online")) {
    return { "@type": "VirtualLocation", url: links.platform };
  }

  const venue = partners.find(
    (partner) => location === "BJPIBR" && partner.shortName === "BJPI Brăila",
  );

  return {
    "@type": "Place",
    name: venue?.name ?? location,
    ...(venue && { url: venue.url }),
    address: brailaAddress,
  };
}

/** Events with a "TBA" date are left out instead of publishing a made-up date. */
export function eventsStructuredData(events: ScripticxEvent[], locale: SiteLocale) {
  return {
    "@context": "https://schema.org",
    "@graph": events.filter(hasConfirmedDate).map((event) => {
      const online = event.location.startsWith("Online");
      return {
        "@type": "Event",
        "@id": `${siteConfig.url}/events#${event.id}`,
        name: event.title,
        description: event.description,
        startDate: event.startAt,
        ...(event.endAt && { endDate: event.endAt }),
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: online
          ? "https://schema.org/OnlineEventAttendanceMode"
          : "https://schema.org/OfflineEventAttendanceMode",
        location: eventLocation(event.location),
        organizer: { "@id": organizationId },
        url: pageUrl("/events", locale),
        ...(event.image && { image: absoluteUrl(event.image) }),
        ...((event.category === "workshop" || event.category === "course") && {
          isAccessibleForFree: true,
        }),
        inLanguage: "ro",
      };
    }),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
