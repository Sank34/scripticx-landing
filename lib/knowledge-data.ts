export type KnowledgeLocale = "en" | "ro";
export type KnowledgeSection = "Learn" | "Developers" | "Trust" | "Legal";

export type KnowledgeArticleMeta = {
  slug: string;
  href: string;
  title: string;
  description: string;
  section: KnowledgeSection;
  sectionLabel: string;
  updated: string;
  readingTime: string;
  headings: { id: string; title: string }[];
};

type ArticleDefinition = Omit<
  KnowledgeArticleMeta,
  "title" | "description" | "sectionLabel" | "updated" | "readingTime" | "headings"
> & {
  en: Pick<
    KnowledgeArticleMeta,
    "title" | "description" | "sectionLabel" | "updated" | "readingTime" | "headings"
  >;
  ro: Pick<
    KnowledgeArticleMeta,
    "title" | "description" | "sectionLabel" | "updated" | "readingTime" | "headings"
  >;
};

const sectionLabels: Record<KnowledgeLocale, Record<KnowledgeSection, string>> = {
  en: {
    Learn: "Learn",
    Developers: "Developers",
    Trust: "Trust",
    Legal: "Legal",
  },
  ro: {
    Learn: "Învață",
    Developers: "Dezvoltatori",
    Trust: "Încredere",
    Legal: "Legal",
  },
};

const articles: ArticleDefinition[] = [
  {
    slug: "getting-started",
    href: "/docs",
    section: "Learn",
    en: {
      title: "Getting started",
      description: "Understand ScripticX and begin your first learning session.",
      sectionLabel: sectionLabels.en.Learn,
      updated: "June 13, 2026",
      readingTime: "4 min read",
      headings: [
        { id: "what-is-scripticx", title: "What is ScripticX?" },
        { id: "your-first-session", title: "Your first session" },
        { id: "how-learning-works", title: "How learning works" },
        { id: "next-steps", title: "Next steps" },
      ],
    },
    ro: {
      title: "Primii pași",
      description: "Descoperă ScripticX și începe prima sesiune de învățare.",
      sectionLabel: sectionLabels.ro.Learn,
      updated: "13 iunie 2026",
      readingTime: "4 min de citit",
      headings: [
        { id: "ce-este-scripticx", title: "Ce este ScripticX?" },
        { id: "prima-ta-sesiune", title: "Prima ta sesiune" },
        { id: "cum-functioneaza-invatarea", title: "Cum funcționează învățarea" },
        { id: "pasii-urmatori", title: "Pașii următori" },
      ],
    },
  },
  {
    slug: "miniscript",
    href: "/docs/miniscript",
    section: "Learn",
    en: {
      title: "MiniScript+ basics",
      description: "Learn the core syntax of the language used on ScripticX.",
      sectionLabel: sectionLabels.en.Learn,
      updated: "June 13, 2026",
      readingTime: "6 min read",
      headings: [
        { id: "values-and-variables", title: "Values and variables" },
        { id: "conditions", title: "Conditions" },
        { id: "loops", title: "Loops" },
        { id: "input-and-output", title: "Input and output" },
      ],
    },
    ro: {
      title: "Bazele MiniScript+",
      description: "Învață sintaxa de bază a limbajului folosit pe ScripticX.",
      sectionLabel: sectionLabels.ro.Learn,
      updated: "13 iunie 2026",
      readingTime: "6 min de citit",
      headings: [
        { id: "valori-si-variabile", title: "Valori și variabile" },
        { id: "conditii", title: "Condiții" },
        { id: "bucle", title: "Bucle" },
        { id: "intrare-si-iesire", title: "Intrare și ieșire" },
      ],
    },
  },
  {
    slug: "api",
    href: "/docs/api",
    section: "Developers",
    en: {
      title: "API overview",
      description: "Plan integrations with the future ScripticX public API.",
      sectionLabel: sectionLabels.en.Developers,
      updated: "June 13, 2026",
      readingTime: "3 min read",
      headings: [
        { id: "api-status", title: "API status" },
        { id: "design-principles", title: "Design principles" },
        { id: "planned-resources", title: "Planned resources" },
        { id: "updates", title: "Updates" },
      ],
    },
    ro: {
      title: "Prezentare API",
      description: "Planifică integrări cu viitorul API public ScripticX.",
      sectionLabel: sectionLabels.ro.Developers,
      updated: "13 iunie 2026",
      readingTime: "3 min de citit",
      headings: [
        { id: "starea-api-ului", title: "Starea API-ului" },
        { id: "principii-de-design", title: "Principii de design" },
        { id: "resurse-planificate", title: "Resurse planificate" },
        { id: "actualizari", title: "Actualizări" },
      ],
    },
  },
  {
    slug: "security",
    href: "/trust",
    section: "Trust",
    en: {
      title: "Security at ScripticX",
      description: "How we approach platform safety and vulnerability reports.",
      sectionLabel: sectionLabels.en.Trust,
      updated: "June 13, 2026",
      readingTime: "4 min read",
      headings: [
        { id: "our-approach", title: "Our approach" },
        { id: "responsible-disclosure", title: "Responsible disclosure" },
        { id: "what-to-report", title: "What to report" },
        { id: "what-to-expect", title: "What to expect" },
      ],
    },
    ro: {
      title: "Securitatea la ScripticX",
      description: "Cum abordăm siguranța platformei și raportarea vulnerabilităților.",
      sectionLabel: sectionLabels.ro.Trust,
      updated: "13 iunie 2026",
      readingTime: "4 min de citit",
      headings: [
        { id: "abordarea-noastra", title: "Abordarea noastră" },
        { id: "raportare-responsabila", title: "Raportare responsabilă" },
        { id: "ce-sa-raportezi", title: "Ce să raportezi" },
        { id: "la-ce-sa-te-astepti", title: "La ce să te aștepți" },
      ],
    },
  },
  {
    slug: "privacy-principles",
    href: "/trust/privacy",
    section: "Trust",
    en: {
      title: "Privacy principles",
      description: "The principles guiding how ScripticX treats personal data.",
      sectionLabel: sectionLabels.en.Trust,
      updated: "June 13, 2026",
      readingTime: "4 min read",
      headings: [
        { id: "data-minimization", title: "Data minimization" },
        { id: "purpose-and-control", title: "Purpose and control" },
        { id: "retention", title: "Retention" },
        { id: "gdpr-rights", title: "GDPR rights" },
      ],
    },
    ro: {
      title: "Principii de confidențialitate",
      description: "Principiile după care ScripticX tratează datele personale.",
      sectionLabel: sectionLabels.ro.Trust,
      updated: "13 iunie 2026",
      readingTime: "4 min de citit",
      headings: [
        { id: "minimizarea-datelor", title: "Minimizarea datelor" },
        { id: "scop-si-control", title: "Scop și control" },
        { id: "pastrare", title: "Păstrare" },
        { id: "drepturi-gdpr", title: "Drepturi GDPR" },
      ],
    },
  },
  {
    slug: "privacy",
    href: "/legal/privacy",
    section: "Legal",
    en: {
      title: "Privacy Policy",
      description: "How ScripticX collects, uses, and protects personal data.",
      sectionLabel: sectionLabels.en.Legal,
      updated: "June 14, 2026",
      readingTime: "9 min read",
      headings: [
        { id: "information-we-collect", title: "Information we collect" },
        { id: "google-sign-in", title: "Google Sign-In" },
        { id: "how-we-use-information", title: "How we use information" },
        { id: "sharing-and-processors", title: "Sharing and processors" },
        { id: "data-retention-and-deletion", title: "Data retention and deletion" },
        { id: "your-rights", title: "Your rights" },
        { id: "contact", title: "Contact" },
      ],
    },
    ro: {
      title: "Politica de confidențialitate",
      description: "Cum colectează, folosește și protejează ScripticX datele personale.",
      sectionLabel: sectionLabels.ro.Legal,
      updated: "14 iunie 2026",
      readingTime: "9 min de citit",
      headings: [
        { id: "informatii-colectate", title: "Informații colectate" },
        { id: "autentificare-google", title: "Autentificare Google" },
        { id: "cum-folosim-informatiile", title: "Cum folosim informațiile" },
        { id: "partajare-si-furnizori", title: "Partajare și furnizori" },
        { id: "pastrare-si-stergere", title: "Păstrarea și ștergerea datelor" },
        { id: "drepturile-tale", title: "Drepturile tale" },
        { id: "contact", title: "Contact" },
      ],
    },
  },
  {
    slug: "terms",
    href: "/legal/terms",
    section: "Legal",
    en: {
      title: "Terms of Service",
      description: "The terms that apply when using ScripticX.",
      sectionLabel: sectionLabels.en.Legal,
      updated: "June 13, 2026",
      readingTime: "8 min read",
      headings: [
        { id: "using-scripticx", title: "Using ScripticX" },
        { id: "accounts", title: "Accounts" },
        { id: "your-content", title: "Your content" },
        { id: "acceptable-use", title: "Acceptable use" },
        { id: "service-availability", title: "Service availability" },
      ],
    },
    ro: {
      title: "Termeni și condiții",
      description: "Termenii aplicabili atunci când folosești ScripticX.",
      sectionLabel: sectionLabels.ro.Legal,
      updated: "13 iunie 2026",
      readingTime: "8 min de citit",
      headings: [
        { id: "utilizarea-scripticx", title: "Utilizarea ScripticX" },
        { id: "conturi", title: "Conturi" },
        { id: "continutul-tau", title: "Conținutul tău" },
        { id: "utilizare-acceptabila", title: "Utilizare acceptabilă" },
        { id: "disponibilitatea-serviciului", title: "Disponibilitatea serviciului" },
      ],
    },
  },
  {
    slug: "cookies",
    href: "/legal/cookies",
    section: "Legal",
    en: {
      title: "Cookie Policy",
      description: "What cookies ScripticX uses and why.",
      sectionLabel: sectionLabels.en.Legal,
      updated: "June 13, 2026",
      readingTime: "4 min read",
      headings: [
        { id: "what-are-cookies", title: "What are cookies?" },
        { id: "cookies-we-use", title: "Cookies we use" },
        { id: "managing-cookies", title: "Managing cookies" },
        { id: "changes", title: "Changes" },
      ],
    },
    ro: {
      title: "Politica privind cookie-urile",
      description: "Ce cookie-uri folosește ScripticX și de ce.",
      sectionLabel: sectionLabels.ro.Legal,
      updated: "13 iunie 2026",
      readingTime: "4 min de citit",
      headings: [
        { id: "ce-sunt-cookie-urile", title: "Ce sunt cookie-urile?" },
        { id: "cookie-uri-folosite", title: "Cookie-uri folosite" },
        { id: "gestionarea-cookie-urilor", title: "Gestionarea cookie-urilor" },
        { id: "modificari", title: "Modificări" },
      ],
    },
  },
  {
    slug: "acceptable-use",
    href: "/legal/acceptable-use",
    section: "Legal",
    en: {
      title: "Acceptable Use Policy",
      description: "Rules that keep ScripticX safe and useful for everyone.",
      sectionLabel: sectionLabels.en.Legal,
      updated: "June 13, 2026",
      readingTime: "5 min read",
      headings: [
        { id: "be-respectful", title: "Be respectful" },
        { id: "keep-the-platform-safe", title: "Keep the platform safe" },
        { id: "use-resources-fairly", title: "Use resources fairly" },
        { id: "enforcement", title: "Enforcement" },
      ],
    },
    ro: {
      title: "Politica de utilizare acceptabilă",
      description: "Reguli care păstrează ScripticX sigur și util pentru toți.",
      sectionLabel: sectionLabels.ro.Legal,
      updated: "13 iunie 2026",
      readingTime: "5 min de citit",
      headings: [
        { id: "respecta-i-pe-ceilalti", title: "Respectă-i pe ceilalți" },
        { id: "pastreaza-platforma-sigura", title: "Păstrează platforma sigură" },
        { id: "foloseste-resursele-corect", title: "Folosește resursele corect" },
        { id: "aplicarea-regulilor", title: "Aplicarea regulilor" },
      ],
    },
  },
];

const sectionDescriptions: Record<
  KnowledgeLocale,
  Record<KnowledgeSection, string>
> = {
  en: {
    Learn: "Platform guides and MiniScript+ fundamentals.",
    Developers: "Technical resources and API documentation.",
    Trust: "Security, privacy principles, and responsible disclosure.",
    Legal: "Policies and terms for using ScripticX.",
  },
  ro: {
    Learn: "Ghiduri pentru platformă și bazele MiniScript+.",
    Developers: "Resurse tehnice și documentație API.",
    Trust: "Securitate, confidențialitate și raportare responsabilă.",
    Legal: "Politici și termeni pentru utilizarea ScripticX.",
  },
};

export function normalizeKnowledgeLocale(locale: string): KnowledgeLocale {
  return locale === "ro" ? "ro" : "en";
}

export function getKnowledgeArticles(locale: string): KnowledgeArticleMeta[] {
  const normalized = normalizeKnowledgeLocale(locale);
  return articles.map(({ en, ro, ...article }) => ({
    ...article,
    ...(normalized === "ro" ? ro : en),
  }));
}

export function getKnowledgeSections(locale: string) {
  const normalized = normalizeKnowledgeLocale(locale);
  return (["Learn", "Developers", "Trust", "Legal"] as const).map((section) => ({
    id: section,
    title: sectionLabels[normalized][section],
    description: sectionDescriptions[normalized][section],
  }));
}

export function getArticleMeta(href: string, locale: string) {
  return getKnowledgeArticles(locale).find((article) => article.href === href);
}
