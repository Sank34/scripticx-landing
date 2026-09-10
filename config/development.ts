import type { DevelopmentContent } from "../types/development.ts";
import type { SiteLocale } from "./languages.ts";

export const developmentContent: Record<SiteLocale, DevelopmentContent> = {
  en: {
    capabilities: {
      eyebrow: "Development services",
      title: "Three connected capabilities, one accountable team.",
      description:
        "Product decisions, interface design and engineering stay connected from the first scope discussion to the work after launch.",
      items: [
        {
          key: "direction",
          title: "Product direction",
          description:
            "Clarify the audience, business objective, scope and technical direction before development starts.",
          points: [
            "Discovery and requirements",
            "UX flows and prototypes",
            "Technical planning",
          ],
        },
        {
          key: "products",
          title: "Web & mobile apps",
          description:
            "Design and build websites, web applications and mobile apps, including the integrations and automation they need.",
          points: [
            "Interface and design system",
            "Frontend and backend",
            "APIs and deployment",
          ],
        },
        {
          key: "care",
          title: "Product care",
          description:
            "Improve and maintain an existing product with transparent priorities, documented updates and practical quality work.",
          points: [
            "Accessibility and performance",
            "Testing and monitoring",
            "Maintenance and iteration",
          ],
        },
      ],
    },
    work: {
      eyebrow: "Portfolio",
      title: "Selected work. Built with purpose.",
      description:
        "Explore our work in product design and software development, from the initial idea to the finished experience.",
      openLabel: "View project",
      showcaseEyebrow: "Product showcase",
      scopeLabel: "What we built",
      techStackLabel: "Tech stack",
      visitLabel: "Visit project",
      items: [
        {
          key: "platform",
          name: "ScripticX Platform",
          domain: "platform.scripticx.org",
          category: "Learning platform",
          year: "2026",
          description:
            "Our own product: lessons, problems, projects and classes in one workspace, designed and operated in house.",
          overview:
            "ScripticX Platform brings the learning journey into one connected product, from structured lessons and browser-based coding to classes, projects and progress.",
          capabilities: [
            {
              title: "Learn with structure",
              description:
                "Lessons, examples and documentation keep the path clear from the first concept onward.",
            },
            {
              title: "Practise in the browser",
              description:
                "An integrated editor, programming problems and projects turn theory into working code.",
            },
            {
              title: "Teach and follow progress",
              description:
                "Classes, assignments, activity and results give learners and mentors a shared workspace.",
            },
          ],
          scope: [
            "Product strategy",
            "Interface & UX",
            "Full-stack development",
            "Deployment & operations",
          ],
          techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
            "Monaco Editor",
          ],
          cover: "/scripticx-mac-mockup-new.png",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A transparent process, from the first conversation onward.",
      description:
        "Each stage produces a clear decision or document, so both sides know what happens next.",
      items: [
        {
          number: "01",
          title: "Project discussion",
          description:
            "We discuss the problem, audience, constraints and expected result in a free introductory call.",
          note: "Free · No commitment",
        },
        {
          number: "02",
          title: "Scope and agreement",
          description:
            "We define the scope, deliverables and price. Once both parties agree, we sign a contract and arrange the advance payment before production begins.",
          note: "Mutual agreement · Contract · Advance payment",
        },
        {
          number: "03",
          title: "Design and build",
          description:
            "After the contract is signed and the advance payment is received, production begins: design, development and continuous feedback throughout the work.",
          note: "Continuous feedback",
        },
        {
          number: "04",
          title: "Delivery and support",
          description:
            "We launch, document the work and agree on the right support or maintenance model for what follows.",
          note: "Handover included",
        },
      ],
    },
    portal: {
      eyebrow: "Client portal",
      title: "Your project. Your dedicated client portal.",
      description:
        "As a client, you get access to a dedicated portal to follow progress and manage your collaboration with our team. See the latest updates, share feedback and keep project files, approvals and documents together in one place.",
      points: [
        "Follow project updates, milestones and next steps",
        "Share feedback and manage approvals",
        "Access project files and handover documentation",
        "Keep contracts, invoices and project history organised",
      ],
      mock: {
        project: "Client portal",
        status: "In progress",
        milestone: "Interface review",
        update: "New update posted",
        invoice: "Documents ready",
      },
    },
    pricing: {
      eyebrow: "Pricing",
      title: "A commercial model matched to the work.",
      description:
        "The introductory discussion is free. Every paid engagement receives a written scope and pricing before any work begins.",
      contact: "Discuss a project",
      items: [
        {
          title: "Discovery",
          price: "Free",
          cadence: "Introductory call",
          description:
            "A focused conversation to understand the project and identify the right next step.",
          features: ["Project context", "Feasibility", "Recommended approach"],
        },
        {
          title: "Fixed-scope project",
          price: "Tailored quote",
          cadence: "Advance payment before production",
          description:
            "For a defined website, web or mobile app, redesign or integration. We agree on the scope and price together, sign a contract and receive the advance payment before starting design and development.",
          features: [
            "Scope agreed by both parties",
            "Signed contract and advance payment",
            "Design and build with continuous feedback",
            "Handover and documentation",
          ],
        },
        {
          title: "Ongoing product support",
          price: "Monthly retainer",
          cadence: "Reserved capacity",
          description:
            "Best for teams that need continuous improvements and technical continuity.",
          features: [
            "Prioritised backlog",
            "Regular updates",
            "Maintenance and iteration",
          ],
        },
      ],
    },
    fit: {
      eyebrow: "Project fit",
      title: "A good fit when clarity matters as much as the build.",
      description:
        "We are most useful when a team needs product thinking and implementation to move together.",
      items: [
        {
          title: "A new website, web or mobile app",
          description:
            "You have a real objective, but the scope, interface or technical path still needs definition.",
        },
        {
          title: "An existing product needs focused improvement",
          description:
            "Accessibility, performance, maintainability or the user experience is holding the product back.",
        },
        {
          title: "Your workflow needs to connect",
          description:
            "APIs, authentication, payments or internal tools need a dependable integration.",
        },
        {
          title: "The product needs continuity",
          description:
            "Your team needs planned iterations, maintenance and transparent technical support after launch.",
        },
      ],
    },
  },
  ro: {
    capabilities: {
      eyebrow: "Servicii de development",
      title: "Trei capabilități conectate, o singură echipă responsabilă.",
      description:
        "Deciziile de produs, designul de interfață și ingineria rămân conectate de la prima discuție despre scope până după lansare.",
      items: [
        {
          key: "direction",
          title: "Direcție de produs",
          description:
            "Clarificăm publicul, obiectivul de business, scope-ul și direcția tehnică înainte să înceapă dezvoltarea.",
          points: [
            "Discovery și cerințe",
            "Fluxuri UX și prototipuri",
            "Planificare tehnică",
          ],
        },
        {
          key: "products",
          title: "Aplicații web & mobile",
          description:
            "Proiectăm și construim website-uri, aplicații web și aplicații mobile, împreună cu integrările și automatizările de care au nevoie.",
          points: [
            "Interfață și design system",
            "Frontend și backend",
            "API-uri și deployment",
          ],
        },
        {
          key: "care",
          title: "Îngrijirea produsului",
          description:
            "Îmbunătățim și menținem un produs existent cu priorități transparente, update-uri documentate și atenție practică pentru calitate.",
          points: [
            "Accesibilitate și performanță",
            "Testare și monitorizare",
            "Mentenanță și iterații",
          ],
        },
      ],
    },
    work: {
      eyebrow: "Portofoliu",
      title: "Proiecte alese. Construite cu un scop.",
      description:
        "Descoperă munca noastră în design de produs și dezvoltare software, de la ideea inițială până la experiența finală.",
      openLabel: "Vezi proiectul",
      showcaseEyebrow: "Prezentare de produs",
      scopeLabel: "Ce am construit",
      techStackLabel: "Tech stack",
      visitLabel: "Vizitează proiectul",
      items: [
        {
          key: "platform",
          name: "Platforma ScripticX",
          domain: "platform.scripticx.org",
          category: "Platformă de învățare",
          year: "2026",
          description:
            "Produsul nostru: lecții, probleme, proiecte și clase într-un singur workspace, proiectat și administrat intern.",
          overview:
            "Platforma ScripticX aduce întregul proces de învățare într-un produs conectat, de la lecții structurate și programare în browser până la clase, proiecte și progres.",
          capabilities: [
            {
              title: "Înveți structurat",
              description:
                "Lecțiile, exemplele și documentația păstrează traseul clar încă de la primul concept.",
            },
            {
              title: "Exersezi în browser",
              description:
                "Editorul integrat, problemele de programare și proiectele transformă teoria în cod funcțional.",
            },
            {
              title: "Predai și urmărești progresul",
              description:
                "Clasele, temele, activitatea și rezultatele oferă cursanților și mentorilor un spațiu comun.",
            },
          ],
          scope: [
            "Strategie de produs",
            "Interfață și UX",
            "Dezvoltare full-stack",
            "Deployment și operare",
          ],
          techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
            "Monaco Editor",
          ],
          cover: "/scripticx-mac-mockup-new.png",
        },
      ],
    },
    process: {
      eyebrow: "Cum lucrăm",
      title: "Un proces transparent, încă de la prima discuție.",
      description:
        "Fiecare etapă produce o decizie sau un document clar, astfel încât ambele părți să știe ce urmează.",
      items: [
        {
          number: "01",
          title: "Discuția despre proiect",
          description:
            "Discutăm problema, publicul, limitările și rezultatul dorit într-un apel introductiv gratuit.",
          note: "Gratuit · Fără obligații",
        },
        {
          number: "02",
          title: "Scope și acord",
          description:
            "Definim scope-ul, livrabilele și prețul. Dacă ambele părți sunt de acord, semnăm contractul și stabilim plata în avans, înainte de începerea producției.",
          note: "Acord comun · Contract · Plată în avans",
        },
        {
          number: "03",
          title: "Design și dezvoltare",
          description:
            "După semnarea contractului și încasarea avansului începe producția: design, dezvoltare și feedback constant pe tot parcursul lucrului.",
          note: "Feedback constant",
        },
        {
          number: "04",
          title: "Livrare și suport",
          description:
            "Lansăm, documentăm proiectul și stabilim modelul potrivit de suport sau mentenanță pentru perioada următoare.",
          note: "Predare inclusă",
        },
      ],
    },
    portal: {
      eyebrow: "Portal pentru clienți",
      title: "Proiectul tău. Un portal dedicat ție.",
      description:
        "Ca client, ai acces la un portal dedicat în care urmărești progresul și gestionezi colaborarea cu echipa noastră. Vezi ultimele update-uri, trimiți feedback și păstrezi fișierele, aprobările și documentele proiectului într-un singur loc.",
      points: [
        "Urmărești update-urile, etapele și pașii următori",
        "Trimiți feedback și gestionezi aprobările",
        "Accesezi fișierele și documentația de predare",
        "Păstrezi organizate contractele, facturile și istoricul proiectului",
      ],
      mock: {
        project: "Portal client",
        status: "În lucru",
        milestone: "Review interfață",
        update: "Update nou publicat",
        invoice: "Documente pregătite",
      },
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Un model comercial potrivit tipului de proiect.",
      description:
        "Discuția introductivă este gratuită. Orice colaborare plătită primește scope și preț în scris înainte de începerea lucrului.",
      contact: "Discută un proiect",
      items: [
        {
          title: "Discovery",
          price: "Gratuit",
          cadence: "Discuție introductivă",
          description:
            "O conversație concentrată pentru a înțelege proiectul și a identifica următorul pas potrivit.",
          features: [
            "Contextul proiectului",
            "Fezabilitate",
            "Abordare recomandată",
          ],
        },
        {
          title: "Proiect cu scope fix",
          price: "Ofertă personalizată",
          cadence: "Plată în avans înainte de producție",
          description:
            "Pentru un website, o aplicație web sau mobilă, un redesign sau o integrare bine definite. Agreăm împreună scope-ul și prețul, semnăm contractul și încasăm avansul înainte de design și dezvoltare.",
          features: [
            "Scope agreat de ambele părți",
            "Contract semnat și plată în avans",
            "Design și dezvoltare cu feedback constant",
            "Predare și documentație",
          ],
        },
        {
          title: "Suport continuu de produs",
          price: "Abonament lunar",
          cadence: "Capacitate rezervată",
          description:
            "Potrivit echipelor care au nevoie de îmbunătățiri continue și continuitate tehnică.",
          features: [
            "Backlog prioritizat",
            "Update-uri regulate",
            "Mentenanță și iterații",
          ],
        },
      ],
    },
    fit: {
      eyebrow: "Potrivirea proiectului",
      title:
        "O alegere bună când claritatea contează la fel de mult ca implementarea.",
      description:
        "Aducem cea mai mare valoare atunci când o echipă are nevoie ca gândirea de produs și implementarea să avanseze împreună.",
      items: [
        {
          title: "Un website sau o aplicație web ori mobilă nouă",
          description:
            "Ai un obiectiv real, dar scope-ul, interfața sau traseul tehnic încă trebuie definite.",
        },
        {
          title: "Un produs existent are nevoie de îmbunătățiri clare",
          description:
            "Accesibilitatea, performanța, mentenabilitatea sau experiența utilizatorului limitează produsul.",
        },
        {
          title: "Fluxurile tale trebuie conectate",
          description:
            "API-urile, autentificarea, plățile sau instrumentele interne au nevoie de o integrare solidă.",
        },
        {
          title: "Produsul are nevoie de continuitate",
          description:
            "Echipa ta are nevoie de iterații planificate, mentenanță și suport tehnic transparent după lansare.",
        },
      ],
    },
  },
};
