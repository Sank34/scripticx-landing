export type KnowledgeLocale = "en" | "ro";
export type KnowledgeSection = "Learn" | "Developers" | "Trust" | "Legal";

export type KnowledgeArticleMeta = {
  slug: string;
  href: string;
  title: string;
  description: string;
  section: KnowledgeSection;
  updatedIso: string;
  updated: string;
  readingTime: string;
  headings: { id: string; title: string }[];
};

type ArticleDefinition = Omit<
  KnowledgeArticleMeta,
  "title" | "description" | "updated" | "readingTime" | "headings"
> & {
  en: Pick<
    KnowledgeArticleMeta,
    "title" | "description" | "updated" | "readingTime" | "headings"
  >;
  ro: Pick<
    KnowledgeArticleMeta,
    "title" | "description" | "updated" | "readingTime" | "headings"
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
    updatedIso: "2026-06-13",
    en: {
      title: "Getting started",
      description: "Understand ScripticX and begin your first learning session.",
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
    updatedIso: "2026-09-01",
    en: {
      title: "MiniScript+ basics",
      description: "Learn the core syntax of the language used on ScripticX.",
      updated: "September 1, 2026",
      readingTime: "13 min read",
      headings: [
        { id: "how-a-program-runs", title: "How a program runs" },
        { id: "syntax-rules", title: "Syntax rules" },
        { id: "values-and-variables", title: "Values and variables" },
        { id: "expressions-and-operators", title: "Expressions and operators" },
        { id: "built-in-functions", title: "Built-in functions" },
        { id: "output-and-input", title: "Output and input" },
        { id: "conditions", title: "Conditions" },
        { id: "loops", title: "Loops" },
        { id: "errors-and-limits", title: "Errors and limits" },
        { id: "quick-reference", title: "Quick reference" },
      ],
    },
    ro: {
      title: "Bazele MiniScript+",
      description: "Învață sintaxa de bază a limbajului folosit pe ScripticX.",
      updated: "1 septembrie 2026",
      readingTime: "13 min de citit",
      headings: [
        { id: "cum-ruleaza-un-program", title: "Cum rulează un program" },
        { id: "reguli-de-sintaxa", title: "Reguli de sintaxă" },
        { id: "valori-si-variabile", title: "Valori și variabile" },
        { id: "expresii-si-operatori", title: "Expresii și operatori" },
        { id: "functii-predefinite", title: "Funcții predefinite" },
        { id: "input-si-output", title: "Input și output" },
        { id: "conditii", title: "Condiții" },
        { id: "bucle", title: "Bucle" },
        { id: "erori-si-limite", title: "Erori și limite" },
        { id: "referinta-rapida", title: "Referință rapidă" },
      ],
    },
  },
  {
    slug: "api",
    href: "/docs/api",
    section: "Developers",
    updatedIso: "2026-06-13",
    en: {
      title: "API overview",
      description: "Plan integrations with the future ScripticX public API.",
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
    updatedIso: "2026-06-13",
    en: {
      title: "Security at ScripticX",
      description: "How we approach platform safety and vulnerability reports.",
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
    updatedIso: "2026-06-13",
    en: {
      title: "Privacy principles",
      description: "The principles guiding how ScripticX treats personal data.",
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
    updatedIso: "2026-06-14",
    en: {
      title: "Privacy Policy",
      description: "How ScripticX collects, uses, and protects personal data.",
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
      updated: "14 iunie 2026",
      readingTime: "9 min de citit",
      headings: [
        { id: "informatii-colectate", title: "Informații colectate" },
        { id: "autentificare-google", title: "Autentificare Google" },
        { id: "cum-folosim-informatiile", title: "Cum folosim informațiile" },
        { id: "partajare-si-furnizori", title: "Partajare și furnizori" },
        {
          id: "pastrarea-si-stergerea-datelor",
          title: "Păstrarea și ștergerea datelor",
        },
        { id: "drepturile-tale", title: "Drepturile tale" },
        { id: "contact", title: "Contact" },
      ],
    },
  },
  {
    slug: "terms",
    href: "/legal/terms",
    section: "Legal",
    updatedIso: "2026-06-13",
    en: {
      title: "Terms of Service",
      description: "The terms that apply when using ScripticX.",
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
    updatedIso: "2026-06-13",
    en: {
      title: "Cookie Policy",
      description: "What cookies ScripticX uses and why.",
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
    updatedIso: "2026-06-13",
    en: {
      title: "Acceptable Use Policy",
      description: "Rules that keep ScripticX safe and useful for everyone.",
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
