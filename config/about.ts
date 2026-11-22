import type { SiteLocale } from "./languages.ts";

export const aboutContent: Record<
  SiteLocale,
  {
    metadata: { title: string; description: string };
    eyebrow: string;
    title: string;
    facts: { founded: string; foundedValue: string; founder: string; location: string; locationValue: string };
    parts: {
      title: string;
      items: { key: "education" | "development" | "platform"; name: string; description: string; href: string; link: string }[];
    };
    free: { title: string; description: string; youtube: string; platform: string };
    events: { title: string; description: string; all: string };
    partners: { title: string; description: string; all: string };
    team: { title: string; description: string };
  }
> = {
  en: {
    metadata: {
      title: "About ScripticX",
      description:
        "What ScripticX is: an organization from Brăila, Romania, founded in February 2026, with an Education Center, a web development studio for clients and the ScripticX learning platform.",
    },
    eyebrow: "About",
    title: "About ScripticX",
    facts: {
      founded: "Founded",
      foundedValue: "February 2026",
      founder: "Founder",
      location: "Based in",
      locationValue: "Brăila, Romania",
    },
    parts: {
      title: "Three parts, one team",
      items: [
        {
          key: "education",
          name: "ScripticX Education Center",
          description:
            "Informatics and machine learning programs with individual and group mentorship, from programming foundations and algorithms to contest preparation. Alongside the programs, we organize free hands-on workshops with our partners.",
          href: "/education",
          link: "Education Center",
        },
        {
          key: "development",
          name: "ScripticX Development",
          description:
            "We design and build websites, web applications and mobile apps for clients, and maintain existing products. Every client gets a dedicated client portal to follow project updates, share feedback, manage approvals and keep files, contracts and invoices in one place.",
          href: "/development",
          link: "Development services",
        },
        {
          key: "platform",
          name: "ScripticX Platform",
          description:
            "Our own learning workspace: lessons, programming problems, projects and classes in one place, with a browser-based editor. It is built around MiniScript+, a beginner-friendly programming language, and also supports C++ and Python.",
          href: "/platform",
          link: "The platform",
        },
      ],
    },
    free: {
      title: "Free online courses",
      description:
        "Learning to program should not depend on a budget. Our programming lessons are free on the ScripticX Lessons YouTube channel, and the ScripticX Platform offers free lessons, problems and learning roadmaps.",
      youtube: "ScripticX Lessons on YouTube",
      platform: "Open the platform",
    },
    events: {
      title: "Workshops and events we organized",
      description:
        "We run free workshops and courses in Brăila, mostly at the Panait Istrati County Library, plus online competitions on the ScripticX Platform.",
      all: "All events",
    },
    partners: {
      title: "Partners",
      description: "Schools, community institutions and companies that support our work.",
      all: "Partners and sponsors",
    },
    team: {
      title: "Team",
      description: "ScripticX is run by a small team working across education, engineering, design and communication.",
    },
  },
  ro: {
    metadata: {
      title: "Despre ScripticX",
      description:
        "Ce este ScripticX: o organizație din Brăila, înființată în februarie 2026, cu un Centru Educațional, servicii de dezvoltare web pentru clienți și platforma de învățare ScripticX.",
    },
    eyebrow: "Despre",
    title: "Despre ScripticX",
    facts: {
      founded: "Înființat",
      foundedValue: "Februarie 2026",
      founder: "Fondator",
      location: "Sediul",
      locationValue: "Brăila, România",
    },
    parts: {
      title: "Trei direcții, o singură echipă",
      items: [
        {
          key: "education",
          name: "Centrul Educațional ScripticX",
          description:
            "Programe de informatică și machine learning, cu mentorat individual și de grup, de la bazele programării și algoritmică până la pregătirea pentru concursuri. Pe lângă programe, organizăm workshop-uri practice gratuite împreună cu partenerii noștri.",
          href: "/education",
          link: "Centrul Educațional",
        },
        {
          key: "development",
          name: "ScripticX Development",
          description:
            "Proiectăm și construim site-uri, aplicații web și aplicații mobile pentru clienți și întreținem produse existente. Fiecare client primește un portal dedicat în care urmărește progresul proiectului, trimite feedback, gestionează aprobările și păstrează fișierele, contractele și facturile într-un singur loc.",
          href: "/development",
          link: "Servicii de dezvoltare",
        },
        {
          key: "platform",
          name: "Platforma ScripticX",
          description:
            "Spațiul nostru de învățare: lecții, probleme de programare, proiecte și clase într-un singur loc, cu un editor direct în browser. Este construită în jurul MiniScript+, un limbaj de programare prietenos pentru începători, și suportă și C++ și Python.",
          href: "/platform",
          link: "Platforma",
        },
      ],
    },
    free: {
      title: "Cursuri online gratuite",
      description:
        "Învățarea programării nu ar trebui să depindă de buget. Lecțiile noastre de programare sunt gratuite pe canalul de YouTube ScripticX Lessons, iar Platforma ScripticX oferă gratuit lecții, probleme și trasee de învățare.",
      youtube: "ScripticX Lessons pe YouTube",
      platform: "Deschide platforma",
    },
    events: {
      title: "Workshop-uri și evenimente organizate",
      description:
        "Organizăm workshop-uri și cursuri gratuite în Brăila, mai ales la Biblioteca Județeană Panait Istrati, și competiții online pe Platforma ScripticX.",
      all: "Toate evenimentele",
    },
    partners: {
      title: "Parteneri",
      description: "Școli, instituții comunitare și companii care ne susțin activitatea.",
      all: "Parteneri și sponsori",
    },
    team: {
      title: "Echipa",
      description: "ScripticX este condus de o echipă mică ce lucrează în educație, inginerie, design și comunicare.",
    },
  },
};
