import type { MarketingLocale } from "@/lib/marketing-content";

export type ActivityDetail = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  cover: string;
  gallery: string[];
  meta: string[];
};

export type EducationTrackKey = "informatics" | "machineLearning";

export type EducationGroup = {
  title: string;
  badge?: string;
  audience: string;
  format: string;
  schedule: string;
  duration: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type EducationGroupsContent = {
  eyebrow: string;
  title: string;
  description: string;
  switchLabel: string;
  tabs: Record<EducationTrackKey, string>;
  contact: string;
  includesLabel: string;
  scheduleNote: string;
  tracks: Record<EducationTrackKey, EducationGroup[]>;
};

const workshopGallery = [
  "/events/workshops/programming-1-3-july-26/IMG_1003.jpg",
  "/events/workshops/programming-1-3-july-26/IMG_1094.jpg",
  "/events/workshops/programming-1-3-july-26/IMG_1137.jpg",
  "/events/workshops/programming-1-3-july-26/IMG_1174.jpg",
];

export const divisionDetailsContent: Record<MarketingLocale, {
  education: {
    program: { eyebrow: string; title: string; description: string; subjects: Array<{ title: string; description: string; topics: string[] }> };
    groups: EducationGroupsContent;
    roadmap: { eyebrow: string; title: string; description: string; items: Array<{ number: string; title: string; description: string }> };
    activities: { eyebrow: string; title: string; description: string; openLabel: string; galleryLabel: string; items: ActivityDetail[] };
    pricing: { eyebrow: string; title: string; description: string; contact: string; items: Array<{ title: string; price: string; cadence: string; description: string; features: string[] }> };
  };
  development: {
    capabilities: { eyebrow: string; title: string; description: string; items: Array<{ key: string; title: string; description: string; points: string[] }> };
    process: { eyebrow: string; title: string; description: string; items: Array<{ number: string; title: string; description: string; note: string }> };
    portal: { eyebrow: string; title: string; description: string; points: string[]; mock: { project: string; status: string; milestone: string; update: string; invoice: string } };
    pricing: { eyebrow: string; title: string; description: string; contact: string; items: Array<{ title: string; price: string; cadence: string; description: string; features: string[] }> };
  };
}> = {
  en: {
    education: {
      program: {
        eyebrow: "Preparation that grows with the learner",
        title: "Informatics taught through understanding, practice and feedback.",
        description: "We work with children and teenagers in small groups, adapting the pace to their experience. Concepts are explained clearly, tested through exercises and consolidated in projects.",
        subjects: [
          { title: "Understand the idea", description: "We begin with a clear explanation, examples and questions until the concept makes sense.", topics: ["Step-by-step explanations", "Visual and CS Unplugged activities", "Room for every “why?”"] },
          { title: "Practise with guidance", description: "Exercises grow gradually in difficulty, while the mentor helps the learner find—not copy—the solution.", topics: ["Problems matched to the current level", "Hints and discussion when needed", "Reasoning before memorisation"] },
          { title: "Build, get feedback, improve", description: "Projects and regular evaluations show what is understood, what needs work and what comes next.", topics: ["Practical and project-based work", "Code review and clear feedback", "Regular progress evaluation"] },
        ],
      },
      groups: {
        eyebrow: "Groups and schedule",
        title: "Preparation groups that grow with the learner.",
        description: "Choose the learning track, then the group that matches the learner's current level. Cohorts are formed by experience and objective—not only by age.",
        switchLabel: "Choose a preparation track",
        tabs: { informatics: "Informatics", machineLearning: "Machine learning" },
        contact: "Ask about this group",
        includesLabel: "The group includes",
        scheduleNote: "The final timetable is agreed with each cohort.",
        tracks: {
          informatics: [
            {
              title: "School & BAC preparation",
              audience: "Beginner track",
              format: "MiniScript+ · C++ / Python",
              schedule: "RON 50",
              duration: "per week · 2 sessions included",
              description: "Follows the school curriculum and builds the programming foundations needed for class and the BAC exam.",
              features: ["School curriculum and CS Unplugged activities", "Separate beginner and advanced cohorts", "Applied algorithms and problem sets", "Standardised progress checks"],
            },
            {
              title: "Applied Computer Science",
              badge: "Recommended",
              audience: "Intermediate track",
              format: "MiniScript+ · Python",
              schedule: "RON 70",
              duration: "per week · 2 sessions included",
              description: "Moves from advanced programming foundations to practical work inspired by real IT environments.",
              features: ["Advanced foundations, including OOP", "Choose web, game development or cybersecurity", "Applied algorithms and project work", "Regular course-based evaluation"],
              featured: true,
            },
            {
              title: "Advanced Algorithms",
              audience: "Advanced track",
              format: "MiniScript+ · Python / C++",
              schedule: "RON 70",
              duration: "per week · 2 sessions included",
              description: "A deeper algorithms route for learners ready to study advanced computer science concepts.",
              features: ["Advanced algorithms and CS concepts", "Optional architecture, embedded or new-language track", "Applied problems and project work", "Regular course-based evaluation"],
            },
          ],
          machineLearning: [
            {
              title: "Introduction to ML",
              audience: "Beginner track",
              format: "MiniScript+ · Python",
              schedule: "RON 50",
              duration: "per week · 2 sessions included",
              description: "A friendly introduction to programming, Python and the core ideas behind machine learning.",
              features: ["Programming and CS Unplugged activities", "Python foundations and an introduction to ML", "Problems, practical applications and projects", "Regular course-based evaluation"],
            },
            {
              title: "Advanced Machine Learning",
              badge: "Recommended",
              audience: "Advanced track",
              format: "Python",
              schedule: "RON 70",
              duration: "per week · 2 sessions included",
              description: "Builds on Intro to ML with advanced algorithms, model mathematics and a specialisation chosen by the learner.",
              features: ["Intro ML material plus advanced algorithms", "Choose NLP, CV, LLMs, DL or RL", "Model mathematics and a first research paper", "Projects, LaTeX / Markdown and regular evaluation"],
              featured: true,
            },
            {
              title: "Applied Machine Learning",
              audience: "Advanced track",
              format: "Python · C++ · MiniScript+ Robotics",
              schedule: "RON 70",
              duration: "per week · 2 sessions included",
              description: "A robotics-focused route combining machine learning models with hardware and embedded systems.",
              features: ["Computer vision, deep learning, RL and an optional paper", "Robotics with Arduino and embedded programming", "MiniScript+ Robotics concepts and programming", "Applied algorithms, RL robotics, projects and evaluation"],
            },
          ],
        },
      },
      roadmap: {
        eyebrow: "Learning roadmap",
        title: "Every concept has a place in the journey.",
        description: "The roadmap makes progress visible to learners and parents while keeping the next step achievable.",
        items: [
          { number: "01", title: "Logic", description: "Break a task into clear, ordered steps." },
          { number: "02", title: "Programming foundations", description: "Use values, conditions, loops and functions with confidence." },
          { number: "03", title: "Algorithms", description: "Recognise patterns and choose an efficient approach." },
          { number: "04", title: "Data structures", description: "Model information and reason about complexity." },
          { number: "05", title: "Projects and competitions", description: "Apply knowledge in complete, explainable solutions." },
        ],
      },
      activities: {
        eyebrow: "Activities",
        title: "Learning also happens away from the worksheet.",
        description: "With the support of our partners, we organise free workshops, courses and hands-on activities where learners can explore, experiment and build together.",
        openLabel: "View activity",
        galleryLabel: "Activity gallery",
        items: [
          { id: "workshop", title: "Programming workshops", description: "Small-group sessions where learners build and test a complete idea.", longDescription: "Our workshops combine short explanations with guided practice. Learners work together, compare solutions and leave with a result they can demonstrate and continue improving.", cover: workshopGallery[2], gallery: workshopGallery, meta: ["Small groups", "Hands-on", "Guided feedback"] },
          { id: "algorithms", title: "Algorithm challenges", description: "Collaborative puzzles that turn abstract reasoning into visible progress.", longDescription: "A challenge is introduced as a concrete problem, then explored through diagrams, examples and code. The emphasis stays on explaining why a solution works—not only obtaining the answer.", cover: workshopGallery[1], gallery: [workshopGallery[1], workshopGallery[0], workshopGallery[3]], meta: ["Problem solving", "Team discussion", "Reflection"] },
          { id: "projects", title: "Project days", description: "Longer sessions for designing, building and presenting a small project.", longDescription: "Project days connect planning, implementation and presentation. Learners divide a goal into milestones, test their work and explain the final result to the group.", cover: workshopGallery[3], gallery: [workshopGallery[3], workshopGallery[2], workshopGallery[1]], meta: ["Project work", "Presentation", "Iteration"] },
        ],
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Simple pricing, based on level.",
        description: "Every group meets twice a week. We confirm the right track and final timetable before enrolment.",
        contact: "Ask about availability",
        items: [
          { title: "Beginner groups", price: "RON 50", cadence: "Per week", description: "For introductory informatics and machine learning cohorts.", features: ["2 sessions included each week", "Course-aligned problems and projects", "Regular progress evaluation"] },
          { title: "Intermediate & advanced groups", price: "RON 70", cadence: "Per week", description: "For applied computer science, advanced algorithms, machine learning and robotics cohorts.", features: ["2 sessions included each week", "Advanced or specialised curriculum", "Projects and regular evaluation"] },
        ],
      },
    },
    development: {
      capabilities: {
        eyebrow: "Development services",
        title: "A complete path from product decision to dependable software.",
        description: "We combine product thinking, interface design and engineering so decisions remain clear and the implementation remains maintainable.",
        items: [
          { key: "discovery", title: "Product discovery", description: "Clarify the audience, business objective and smallest valuable scope before development starts.", points: ["Requirements", "Scope", "Technical direction"] },
          { key: "design", title: "Interface and UX", description: "Design accessible flows and a coherent visual system that can grow with the product.", points: ["User flows", "Prototypes", "Design system"] },
          { key: "engineering", title: "Web applications", description: "Build responsive, production-ready applications with an architecture suited to the real workload.", points: ["Frontend", "Backend", "Deployment"] },
          { key: "integrations", title: "Integrations and automation", description: "Connect data, authentication, payments and operational tools without creating fragile workflows.", points: ["APIs", "Authentication", "Automation"] },
          { key: "quality", title: "Quality and performance", description: "Improve accessibility, speed, reliability and maintainability before they become expensive problems.", points: ["Accessibility", "Performance", "Testing"] },
          { key: "support", title: "Ongoing product support", description: "Continue iterating after launch with transparent priorities and documented updates.", points: ["Monitoring", "Iterations", "Maintenance"] },
        ],
      },
      process: {
        eyebrow: "How we work",
        title: "A transparent process, from the first conversation onward.",
        description: "Each stage produces a clear decision or document, so both sides know what happens next.",
        items: [
          { number: "01", title: "Project discussion", description: "We discuss the problem, audience, constraints and expected result in a free introductory call.", note: "Free · No commitment" },
          { number: "02", title: "Scope and pricing", description: "We agree on deliverables, milestones and pricing, then issue the proposal and proforma or invoice.", note: "Written proposal" },
          { number: "03", title: "Contract and development", description: "After the contract is signed, the project moves into design and development with scheduled reviews.", note: "Defined milestones" },
          { number: "04", title: "Delivery and support", description: "We launch, document the work and agree on the right support or maintenance model for what follows.", note: "Handover included" },
        ],
      },
      portal: {
        eyebrow: "Dedicated client portal",
        title: "Every update, document and decision in one place.",
        description: "Clients receive a private project page with the current status, milestone updates, documents and feedback history.",
        points: ["Live project status and milestones", "Updates, files and approvals", "Invoices, contracts and delivery notes"],
        mock: { project: "Client portal", status: "In progress", milestone: "Interface review", update: "New update posted", invoice: "Documents ready" },
      },
      pricing: {
        eyebrow: "Pricing",
        title: "A commercial model matched to the work.",
        description: "The introductory discussion is free. Every paid engagement receives a written scope and pricing before any work begins.",
        contact: "Discuss a project",
        items: [
          { title: "Discovery", price: "Free", cadence: "Introductory call", description: "A focused conversation to understand the project and identify the right next step.", features: ["Project context", "Feasibility", "Recommended approach"] },
          { title: "Fixed-scope project", price: "Tailored quote", cadence: "Milestone based", description: "Best for a defined website, application, redesign or integration.", features: ["Written scope", "Milestone reviews", "Handover and documentation"] },
          { title: "Ongoing product support", price: "Monthly retainer", cadence: "Reserved capacity", description: "Best for teams that need continuous improvements and technical continuity.", features: ["Prioritised backlog", "Regular updates", "Maintenance and iteration"] },
        ],
      },
    },
  },
  ro: {
    education: {
      program: {
        eyebrow: "Pregătire care crește odată cu elevul",
        title: "Informatică predată prin înțelegere, practică și feedback.",
        description: "Lucrăm cu copii și adolescenți în grupe mici, adaptând ritmul la experiența lor. Conceptele sunt explicate clar, testate prin exerciții și consolidate în proiecte.",
        subjects: [
          { title: "Înțelegi ideea", description: "Începem cu explicații clare, exemple și întrebări până când conceptul capătă sens.", topics: ["Explicații pas cu pas", "Exemple vizuale și activități CS Unplugged", "Loc pentru fiecare „de ce?”"] },
          { title: "Exersezi cu ghidare", description: "Problemele cresc treptat în dificultate, iar mentorul te ajută să găsești soluția, nu să o copiezi.", topics: ["Probleme potrivite nivelului actual", "Indicii și discuții când ai nevoie", "Raționament înainte de memorare"] },
          { title: "Construiești și îmbunătățești", description: "Proiectele și evaluările regulate arată ce ai înțeles, ce mai exersezi și care este următorul pas.", topics: ["Lucru practic și proiecte", "Code review și feedback clar", "Evaluarea periodică a progresului"] },
        ],
      },
      groups: {
        eyebrow: "Grupe și program",
        title: "Grupe de pregătire care cresc odată cu elevul.",
        description: "Alege traseul de învățare, apoi grupa potrivită nivelului actual. Grupele sunt formate în funcție de experiență și obiectiv, nu doar de vârstă.",
        switchLabel: "Alege traseul de pregătire",
        tabs: { informatics: "Informatică", machineLearning: "Machine learning" },
        contact: "Întreabă despre grupă",
        includesLabel: "Grupa include",
        scheduleNote: "Programul final este stabilit împreună cu fiecare grupă.",
        tracks: {
          informatics: [
            {
              title: "BAC & materia de la clasă",
              audience: "Traseu pentru începători",
              format: "MiniScript+ · C++ / Python",
              schedule: "50 lei",
              duration: "pe săptămână · 2 ședințe incluse",
              description: "Urmează programa școlară și construiește bazele necesare pentru materia de la clasă și examenul de BAC.",
              features: ["Programă școlară și activități CS Unplugged", "Grupe separate pentru începători și avansați", "Probleme și algoritmică aplicată", "Evaluare standardizată a progresului"],
            },
            {
              title: "Applied Computer Science",
              badge: "Recomandat",
              audience: "Traseu intermediar",
              format: "MiniScript+ · Python",
              schedule: "70 lei",
              duration: "pe săptămână · 2 ședințe incluse",
              description: "Pornește de la bazele avansate ale programării și ajunge la lucru practic inspirat din industria IT.",
              features: ["Baze avansate, inclusiv OOP", "Track la alegere: web, game development sau cybersecurity", "Algoritmică aplicată și proiecte", "Evaluare periodică pe parcursul cursului"],
              featured: true,
            },
            {
              title: "Advanced Algorithms",
              audience: "Traseu avansat",
              format: "MiniScript+ · Python / C++",
              schedule: "70 lei",
              duration: "pe săptămână · 2 ședințe incluse",
              description: "Un traseu aprofundat de algoritmică pentru elevii pregătiți să studieze concepte avansate de informatică.",
              features: ["Algoritmică și concepte avansate", "Track opțional: arhitectură, embedded sau un limbaj nou", "Probleme aplicate și proiecte", "Evaluare periodică pe parcursul cursului"],
            },
          ],
          machineLearning: [
            {
              title: "Introducere în ML",
              audience: "Traseu pentru începători",
              format: "MiniScript+ · Python",
              schedule: "50 lei",
              duration: "pe săptămână · 2 ședințe incluse",
              description: "O introducere prietenoasă în programare, Python și ideile de bază din spatele machine learning-ului.",
              features: ["Programare și activități CS Unplugged", "Bazele Python și introducere în ML", "Probleme, aplicații practice și proiecte", "Evaluare periodică pe parcursul cursului"],
            },
            {
              title: "Advanced Machine Learning",
              badge: "Recomandat",
              audience: "Traseu avansat",
              format: "Python",
              schedule: "70 lei",
              duration: "pe săptămână · 2 ședințe incluse",
              description: "Continuă materia din Intro ML cu algoritmi avansați, matematica modelelor și o specializare aleasă de elev.",
              features: ["Materia din Intro ML și algoritmi avansați", "Specializare: NLP, CV, LLMs, DL sau RL", "Matematica modelelor și primul research paper", "Proiecte, LaTeX / Markdown și evaluare periodică"],
              featured: true,
            },
            {
              title: "Applied Machine Learning",
              audience: "Traseu avansat",
              format: "Python · C++ · MiniScript+ Robotics",
              schedule: "70 lei",
              duration: "pe săptămână · 2 ședințe incluse",
              description: "Un traseu axat pe robotică, unde modelele ML sunt conectate cu hardware și sisteme embedded.",
              features: ["Computer vision, deep learning, RL și paper opțional", "Robotică cu Arduino și embedded programming", "Concepte și programare prin MiniScript+ Robotics", "Algoritmică aplicată, robotică RL, proiecte și evaluare"],
            },
          ],
        },
      },
      roadmap: {
        eyebrow: "Roadmap de învățare",
        title: "Fiecare concept are un loc clar în traseu.",
        description: "Roadmap-ul face progresul vizibil pentru elevi și părinți și păstrează următorul pas realizabil.",
        items: [
          { number: "01", title: "Logică", description: "Descompune o cerință în pași clari și ordonați." },
          { number: "02", title: "Bazele programării", description: "Folosește valori, condiții, repetări și funcții cu încredere." },
          { number: "03", title: "Algoritmi", description: "Recunoaște tipare și alege o abordare eficientă." },
          { number: "04", title: "Structuri de date", description: "Modelează informația și înțelege complexitatea." },
          { number: "05", title: "Proiecte și concursuri", description: "Aplică informațiile în soluții complete, pe care le poate explica." },
        ],
      },
      activities: {
        eyebrow: "Activități",
        title: "Învățarea continuă și în afara fișei de lucru.",
        description: "Cu sprijinul partenerilor noștri, organizăm gratuit workshop-uri, cursuri și activități practice în care elevii pot explora, experimenta și construi împreună.",
        openLabel: "Vezi activitatea",
        galleryLabel: "Galeria activității",
        items: [
          { id: "workshop", title: "Workshop-uri de programare", description: "Sesiuni în grupe mici în care elevii construiesc și testează o idee completă.", longDescription: "Workshop-urile combină explicații scurte cu practică ghidată. Elevii lucrează împreună, compară soluții și pleacă acasă cu un rezultat pe care îl pot demonstra și continua.", cover: workshopGallery[2], gallery: workshopGallery, meta: ["Grupe mici", "Practic", "Feedback ghidat"] },
          { id: "algorithms", title: "Provocări de algoritmică", description: "Puzzle-uri colaborative care transformă raționamentul abstract în progres vizibil.", longDescription: "O provocare pornește de la o problemă concretă și este explorată prin diagrame, exemple și cod. Accentul rămâne pe explicația motivului pentru care o soluție funcționează, nu doar pe rezultat.", cover: workshopGallery[1], gallery: [workshopGallery[1], workshopGallery[0], workshopGallery[3]], meta: ["Problem solving", "Discuție în echipă", "Reflecție"] },
          { id: "projects", title: "Zile de proiect", description: "Sesiuni mai lungi pentru proiectarea, construirea și prezentarea unui proiect mic.", longDescription: "Zilele de proiect conectează planificarea, implementarea și prezentarea. Elevii împart obiectivul în etape, își testează munca și explică rezultatul final grupei.", cover: workshopGallery[3], gallery: [workshopGallery[3], workshopGallery[2], workshopGallery[1]], meta: ["Proiect", "Prezentare", "Iterație"] },
        ],
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Tarife simple, în funcție de nivel.",
        description: "Fiecare grupă are două ședințe pe săptămână. Confirmăm traseul potrivit și programul final înainte de înscriere.",
        contact: "Întreabă despre locuri",
        items: [
          { title: "Grupe pentru începători", price: "50 lei", cadence: "Pe săptămână", description: "Pentru grupele introductive de informatică și machine learning.", features: ["2 ședințe incluse pe săptămână", "Probleme și proiecte adaptate cursului", "Evaluare periodică a progresului"] },
          { title: "Grupe intermediare și avansate", price: "70 lei", cadence: "Pe săptămână", description: "Pentru applied computer science, algoritmică avansată, machine learning și robotică.", features: ["2 ședințe incluse pe săptămână", "Curriculum avansat sau specializat", "Proiecte și evaluare periodică"] },
        ],
      },
    },
    development: {
      capabilities: {
        eyebrow: "Servicii de development",
        title: "Un traseu complet de la decizia de produs la software solid.",
        description: "Combinăm gândirea de produs, designul de interfață și ingineria pentru ca deciziile să rămână clare, iar implementarea ușor de întreținut.",
        items: [
          { key: "discovery", title: "Product discovery", description: "Clarificăm publicul, obiectivul de business și cel mai mic scope valoros înainte de dezvoltare.", points: ["Cerințe", "Scope", "Direcție tehnică"] },
          { key: "design", title: "Interfață și UX", description: "Proiectăm fluxuri accesibile și un sistem vizual coerent, pregătit să crească odată cu produsul.", points: ["User flows", "Prototipuri", "Design system"] },
          { key: "engineering", title: "Aplicații web", description: "Construim aplicații responsive, gata de producție, cu o arhitectură potrivită volumului real de lucru.", points: ["Frontend", "Backend", "Deployment"] },
          { key: "integrations", title: "Integrări și automatizare", description: "Conectăm date, autentificare, plăți și instrumente operaționale fără fluxuri fragile.", points: ["API-uri", "Autentificare", "Automatizare"] },
          { key: "quality", title: "Calitate și performanță", description: "Îmbunătățim accesibilitatea, viteza, fiabilitatea și mentenabilitatea înainte să devină probleme costisitoare.", points: ["Accesibilitate", "Performanță", "Testare"] },
          { key: "support", title: "Suport continuu de produs", description: "Continuăm după lansare cu priorități transparente și actualizări documentate.", points: ["Monitorizare", "Iterații", "Mentenanță"] },
        ],
      },
      process: {
        eyebrow: "Cum lucrăm",
        title: "Un proces transparent, încă de la prima discuție.",
        description: "Fiecare etapă produce o decizie sau un document clar, astfel încât ambele părți să știe ce urmează.",
        items: [
          { number: "01", title: "Discuția despre proiect", description: "Discutăm problema, publicul, limitările și rezultatul dorit într-un apel introductiv gratuit.", note: "Gratuit · Fără obligații" },
          { number: "02", title: "Scope și pricing", description: "Stabilim livrabilele, etapele și prețul, apoi emitem oferta și factura proformă sau factura.", note: "Ofertă scrisă" },
          { number: "03", title: "Contract și dezvoltare", description: "După semnarea contractului, proiectul intră în design și dezvoltare, cu review-uri programate.", note: "Etape definite" },
          { number: "04", title: "Livrare și suport", description: "Lansăm, documentăm proiectul și stabilim modelul potrivit de suport sau mentenanță pentru perioada următoare.", note: "Predare inclusă" },
        ],
      },
      portal: {
        eyebrow: "Portal dedicat clientului",
        title: "Fiecare update, document și decizie într-un singur loc.",
        description: "Clienții primesc o pagină privată a proiectului cu statusul actual, actualizările etapelor, documentele și istoricul feedback-ului.",
        points: ["Status și etape în timp real", "Update-uri, fișiere și aprobări", "Facturi, contracte și note de livrare"],
        mock: { project: "Portal client", status: "În lucru", milestone: "Review interfață", update: "Update nou publicat", invoice: "Documente pregătite" },
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Un model comercial potrivit tipului de proiect.",
        description: "Discuția introductivă este gratuită. Orice colaborare plătită primește scope și preț în scris înainte de începerea lucrului.",
        contact: "Discută un proiect",
        items: [
          { title: "Discovery", price: "Gratuit", cadence: "Discuție introductivă", description: "O conversație concentrată pentru a înțelege proiectul și a identifica următorul pas potrivit.", features: ["Contextul proiectului", "Fezabilitate", "Abordare recomandată"] },
          { title: "Proiect cu scope fix", price: "Ofertă personalizată", cadence: "Plată pe etape", description: "Potrivit pentru un website, o aplicație, un redesign sau o integrare bine definite.", features: ["Scope scris", "Review-uri pe etape", "Predare și documentație"] },
          { title: "Suport continuu de produs", price: "Abonament lunar", cadence: "Capacitate rezervată", description: "Potrivit echipelor care au nevoie de îmbunătățiri continue și continuitate tehnică.", features: ["Backlog prioritizat", "Update-uri regulate", "Mentenanță și iterații"] },
        ],
      },
    },
  },
};
