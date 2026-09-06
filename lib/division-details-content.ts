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

export type EducationRoadmapContent = {
  eyebrow: string;
  title: string;
  description: string;
  practiceTitle: string;
  practiceDescription: string;
  tracks: Record<EducationTrackKey, {
    description: string;
    stages: [
      { label: string; description: string },
      { label: string; description: string },
      { label: string; description: string },
    ];
  }>;
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
    roadmap: EducationRoadmapContent;
    activities: { eyebrow: string; title: string; description: string; eventsLabel: string; openLabel: string; galleryLabel: string; items: ActivityDetail[] };
    pricing: { eyebrow: string; title: string; description: string; contact: string; items: Array<{ title: string; price: string; cadence: string; description: string; features: string[] }> };
  };
  development: {
    capabilities: { eyebrow: string; title: string; description: string; items: Array<{ key: string; title: string; description: string; points: string[] }> };
    work: {
      eyebrow: string;
      title: string;
      description: string;
      openLabel: string;
      showcaseEyebrow: string;
      scopeLabel: string;
      techStackLabel: string;
      visitLabel: string;
      items: Array<{
        key: string;
        name: string;
        domain: string;
        category: string;
        year: string;
        description: string;
        overview: string;
        capabilities: Array<{ title: string; description: string }>;
        scope: string[];
        techStack: string[];
        cover?: string;
      }>;
    };
    process: { eyebrow: string; title: string; description: string; items: Array<{ number: string; title: string; description: string; note: string }> };
    portal: { eyebrow: string; title: string; description: string; points: string[]; mock: { project: string; status: string; milestone: string; update: string; invoice: string } };
    pricing: { eyebrow: string; title: string; description: string; contact: string; items: Array<{ title: string; price: string; cadence: string; description: string; features: string[] }> };
    fit: { eyebrow: string; title: string; description: string; items: Array<{ title: string; description: string }> };
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
              duration: "Price per week · includes 2 preparation sessions",
              description: "Follows the school curriculum and builds the programming foundations needed for class and the BAC exam.",
              features: ["School curriculum and CS Unplugged activities", "Separate beginner and advanced cohorts", "Applied algorithms and problem sets", "Standardised progress checks"],
            },
            {
              title: "Applied Computer Science",
              badge: "Recommended",
              audience: "Intermediate track",
              format: "MiniScript+ · Python",
              schedule: "RON 70",
              duration: "Price per week · includes 2 preparation sessions",
              description: "Moves from advanced programming foundations to practical work inspired by real IT environments.",
              features: ["Advanced foundations, including OOP", "Choose web, game development or cybersecurity", "Applied algorithms and project work", "Regular course-based evaluation"],
              featured: true,
            },
            {
              title: "Advanced Algorithms",
              audience: "Advanced track",
              format: "MiniScript+ · Python / C++",
              schedule: "RON 70",
              duration: "Price per week · includes 2 preparation sessions",
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
              duration: "Price per week · includes 2 preparation sessions",
              description: "A friendly introduction to programming, Python and the core ideas behind machine learning.",
              features: ["Programming and CS Unplugged activities", "Python foundations and an introduction to ML", "Problems, practical applications and projects", "Regular course-based evaluation"],
            },
            {
              title: "Advanced Machine Learning",
              badge: "Recommended",
              audience: "Advanced track",
              format: "Python",
              schedule: "RON 70",
              duration: "Price per week · includes 2 preparation sessions",
              description: "Builds on Intro to ML with advanced algorithms, model mathematics and a specialisation chosen by the learner.",
              features: ["Intro ML material plus advanced algorithms", "Choose NLP, CV, LLMs, DL or RL", "Mathematics and statistics behind the models", "Learn to write your first research paper in LaTeX / Markdown", "Projects and regular evaluation"],
              featured: true,
            },
            {
              title: "Applied Machine Learning",
              audience: "Advanced track",
              format: "Python · C++ · MiniScript+ Robotics",
              schedule: "RON 70",
              duration: "Price per week · includes 2 preparation sessions",
              description: "A robotics-focused route combining machine learning models with hardware and embedded systems.",
              features: ["Computer vision, deep learning, RL and an optional paper", "Robotics with Arduino and embedded programming", "MiniScript+ Robotics concepts and programming", "Applied algorithms, RL robotics, projects and evaluation"],
            },
          ],
        },
      },
      roadmap: {
        eyebrow: "Learning roadmap",
        title: "Different goals. A clear path forward.",
        description: "Start with the group that fits your experience and what you want to learn. These are possible directions, not a checklist of groups everyone must complete.",
        practiceTitle: "Practice and feedback at every level.",
        practiceDescription: "Guided exercises, practical work and regular evaluations are part of the whole course. We use that feedback to revisit concepts, build confidence and decide what comes next.",
        tracks: {
          informatics: {
            description: "With the foundations in place, you can build practical software or go deeper into algorithms, depending on your goals and experience.",
            stages: [
              { label: "Build the foundations", description: "Explore logic through CS Unplugged, then follow the school curriculum in MiniScript+ and C++ or Python. Beginner and advanced cohorts work at their own pace." },
              { label: "Apply your skills", description: "Develop stronger programming foundations, including OOP, then choose web development, game development or cybersecurity and learn through applied projects." },
              { label: "Go deeper into algorithms", description: "Study advanced algorithms and computer science concepts through applied problems. Optional directions include processor architecture, embedded programming or another language." },
            ],
          },
          machineLearning: {
            description: "Start with programming and ML foundations, then explore advanced models or put them to work in robotics.",
            stages: [
              { label: "Meet programming and ML", description: "Start with CS Unplugged, MiniScript+ and Python, then explore the core ideas of machine learning through problems, practical applications and small projects." },
              { label: "Understand and explore models", description: "Explore advanced algorithms and the mathematics and statistics behind models. Choose NLP, computer vision, LLMs, deep learning or RL, and learn to write your first research paper in LaTeX or Markdown." },
              { label: "Connect models to robots", description: "Apply computer vision, deep learning and RL through Arduino, embedded programming and MiniScript+ Robotics. Build and evaluate practical projects; a research paper is optional." },
            ],
          },
        },
      },
      activities: {
        eyebrow: "Activities",
        title: "Learning also happens away from the worksheet.",
        description: "With the support of our partners, we organise free workshops, courses and hands-on activities where learners can explore, experiment and build together.",
        eventsLabel: "See events",
        openLabel: "View activity",
        galleryLabel: "Activity gallery",
        items: [
          { id: "workshops", title: "Workshops & courses", description: "Hands-on workshops and courses that make programming, machine learning and robotics approachable.", longDescription: "Our workshops and courses combine clear explanations with guided practice. Learners explore programming, machine learning and robotics through exercises and small projects, with mentors there to answer questions and help them progress.", cover: workshopGallery[2], gallery: workshopGallery, meta: ["Small groups", "Hands-on", "Guided feedback"] },
          { id: "competitions", title: "Competitions", description: "Programming challenges that put algorithmic thinking and coding skills to the test.", longDescription: "Our programming competitions give learners a chance to apply what they know, tackle new problems and test their solutions. The event calendar provides the format, schedule and participation details for each competition.", cover: workshopGallery[1], gallery: [workshopGallery[1], workshopGallery[0], workshopGallery[3]], meta: ["Algorithms", "Problem solving", "Programming"] },
          { id: "events", title: "Events", description: "Hackathons, meetups and conferences for building ideas, sharing knowledge and meeting other curious minds.", longDescription: "From building together at a hackathon to exchanging ideas at meetups and conferences, these events bring people with a shared interest in computing together. Explore the calendar to see what is coming up and how to take part.", cover: workshopGallery[3], gallery: [workshopGallery[3], workshopGallery[2], workshopGallery[1]], meta: ["Hackathons", "Meetups", "Conferences"] },
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
        title: "Three connected capabilities, one accountable team.",
        description: "Product decisions, interface design and engineering stay connected from the first scope discussion to the work after launch.",
        items: [
          { key: "direction", title: "Product direction", description: "Clarify the audience, business objective, scope and technical direction before development starts.", points: ["Discovery and requirements", "UX flows and prototypes", "Technical planning"] },
          { key: "products", title: "Web & mobile apps", description: "Design and build websites, web applications and mobile apps, including the integrations and automation they need.", points: ["Interface and design system", "Frontend and backend", "APIs and deployment"] },
          { key: "care", title: "Product care", description: "Improve and maintain an existing product with transparent priorities, documented updates and practical quality work.", points: ["Accessibility and performance", "Testing and monitoring", "Maintenance and iteration"] },
        ],
      },
      work: {
        eyebrow: "Portfolio",
        title: "Selected work. Built with purpose.",
        description: "Explore our work in product design and software development, from the initial idea to the finished experience.",
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
            description: "Our own product: lessons, problems, projects and classes in one workspace, designed and operated in house.",
            overview: "ScripticX Platform brings the learning journey into one connected product, from structured lessons and browser-based coding to classes, projects and progress.",
            capabilities: [
              { title: "Learn with structure", description: "Lessons, examples and documentation keep the path clear from the first concept onward." },
              { title: "Practise in the browser", description: "An integrated editor, programming problems and projects turn theory into working code." },
              { title: "Teach and follow progress", description: "Classes, assignments, activity and results give learners and mentors a shared workspace." },
            ],
            scope: ["Product strategy", "Interface & UX", "Full-stack development", "Deployment & operations"],
            techStack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "Monaco Editor"],
            cover: "/scripticx-mac-mockup-new.png",
          },
        ],
      },
      process: {
        eyebrow: "How we work",
        title: "A transparent process, from the first conversation onward.",
        description: "Each stage produces a clear decision or document, so both sides know what happens next.",
        items: [
          { number: "01", title: "Project discussion", description: "We discuss the problem, audience, constraints and expected result in a free introductory call.", note: "Free · No commitment" },
          { number: "02", title: "Scope and agreement", description: "We define the scope, deliverables and price. Once both parties agree, we sign a contract and arrange the advance payment before production begins.", note: "Mutual agreement · Contract · Advance payment" },
          { number: "03", title: "Design and build", description: "After the contract is signed and the advance payment is received, production begins: design, development and continuous feedback throughout the work.", note: "Continuous feedback" },
          { number: "04", title: "Delivery and support", description: "We launch, document the work and agree on the right support or maintenance model for what follows.", note: "Handover included" },
        ],
      },
      portal: {
        eyebrow: "Client portal",
        title: "Your project. Your dedicated client portal.",
        description: "As a client, you get access to a dedicated portal to follow progress and manage your collaboration with our team. See the latest updates, share feedback and keep project files, approvals and documents together in one place.",
        points: ["Follow project updates, milestones and next steps", "Share feedback and manage approvals", "Access project files and handover documentation", "Keep contracts, invoices and project history organised"],
        mock: { project: "Client portal", status: "In progress", milestone: "Interface review", update: "New update posted", invoice: "Documents ready" },
      },
      pricing: {
        eyebrow: "Pricing",
        title: "A commercial model matched to the work.",
        description: "The introductory discussion is free. Every paid engagement receives a written scope and pricing before any work begins.",
        contact: "Discuss a project",
        items: [
          { title: "Discovery", price: "Free", cadence: "Introductory call", description: "A focused conversation to understand the project and identify the right next step.", features: ["Project context", "Feasibility", "Recommended approach"] },
          { title: "Fixed-scope project", price: "Tailored quote", cadence: "Advance payment before production", description: "For a defined website, web or mobile app, redesign or integration. We agree on the scope and price together, sign a contract and receive the advance payment before starting design and development.", features: ["Scope agreed by both parties", "Signed contract and advance payment", "Design and build with continuous feedback", "Handover and documentation"] },
          { title: "Ongoing product support", price: "Monthly retainer", cadence: "Reserved capacity", description: "Best for teams that need continuous improvements and technical continuity.", features: ["Prioritised backlog", "Regular updates", "Maintenance and iteration"] },
        ],
      },
      fit: {
        eyebrow: "Project fit",
        title: "A good fit when clarity matters as much as the build.",
        description: "We are most useful when a team needs product thinking and implementation to move together.",
        items: [
          { title: "A new website, web or mobile app", description: "You have a real objective, but the scope, interface or technical path still needs definition." },
          { title: "An existing product needs focused improvement", description: "Accessibility, performance, maintainability or the user experience is holding the product back." },
          { title: "Your workflow needs to connect", description: "APIs, authentication, payments or internal tools need a dependable integration." },
          { title: "The product needs continuity", description: "Your team needs planned iterations, maintenance and transparent technical support after launch." },
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
              duration: "Preț pe săptămână · include 2 ședințe de pregătire",
              description: "Urmează programa școlară și construiește bazele necesare pentru materia de la clasă și examenul de BAC.",
              features: ["Programă școlară și activități CS Unplugged", "Grupe separate pentru începători și avansați", "Probleme și algoritmică aplicată", "Evaluare standardizată a progresului"],
            },
            {
              title: "Applied Computer Science",
              badge: "Recomandat",
              audience: "Traseu intermediar",
              format: "MiniScript+ · Python",
              schedule: "70 lei",
              duration: "Preț pe săptămână · include 2 ședințe de pregătire",
              description: "Pornește de la bazele avansate ale programării și ajunge la lucru practic inspirat din industria IT.",
              features: ["Baze avansate, inclusiv OOP", "Track la alegere: web, game development sau cybersecurity", "Algoritmică aplicată și proiecte", "Evaluare periodică pe parcursul cursului"],
              featured: true,
            },
            {
              title: "Advanced Algorithms",
              audience: "Traseu avansat",
              format: "MiniScript+ · Python / C++",
              schedule: "70 lei",
              duration: "Preț pe săptămână · include 2 ședințe de pregătire",
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
              duration: "Preț pe săptămână · include 2 ședințe de pregătire",
              description: "O introducere prietenoasă în programare, Python și ideile de bază din spatele machine learning-ului.",
              features: ["Programare și activități CS Unplugged", "Bazele Python și introducere în ML", "Probleme, aplicații practice și proiecte", "Evaluare periodică pe parcursul cursului"],
            },
            {
              title: "Advanced Machine Learning",
              badge: "Recomandat",
              audience: "Traseu avansat",
              format: "Python",
              schedule: "70 lei",
              duration: "Preț pe săptămână · include 2 ședințe de pregătire",
              description: "Continuă materia din Intro ML cu algoritmi avansați, matematica modelelor și o specializare aleasă de elev.",
              features: ["Materia din Intro ML și algoritmi avansați", "Specializare: NLP, CV, LLMs, DL sau RL", "Matematica și statistica din spatele modelelor", "Înveți să scrii primul articol de cercetare în LaTeX / Markdown", "Proiecte și evaluare periodică"],
              featured: true,
            },
            {
              title: "Applied Machine Learning",
              audience: "Traseu avansat",
              format: "Python · C++ · MiniScript+ Robotics",
              schedule: "70 lei",
              duration: "Preț pe săptămână · include 2 ședințe de pregătire",
              description: "Un traseu axat pe robotică, unde modelele ML sunt conectate cu hardware și sisteme embedded.",
              features: ["Computer vision, deep learning, RL și paper opțional", "Robotică cu Arduino și embedded programming", "Concepte și programare prin MiniScript+ Robotics", "Algoritmică aplicată, robotică RL, proiecte și evaluare"],
            },
          ],
        },
      },
      roadmap: {
        eyebrow: "Roadmap de învățare",
        title: "Obiective diferite. Un traseu clar mai departe.",
        description: "Pornești din grupa potrivită experienței tale și lucrurilor pe care vrei să le înveți. Acestea sunt direcții posibile, nu o listă de grupe pe care trebuie să le parcurgi pe rând.",
        practiceTitle: "Practică și feedback la fiecare nivel.",
        practiceDescription: "Exercițiile ghidate, aplicațiile practice și evaluările periodice fac parte din întregul curs. Pe baza feedbackului, reluăm conceptele neclare, consolidăm ce ai învățat și alegem următorul pas.",
        tracks: {
          informatics: {
            description: "După ce construiești bazele, poți crea aplicații practice sau aprofunda algoritmica, în funcție de experiența și obiectivele tale.",
            stages: [
              { label: "Construiești bazele", description: "Descoperi logica prin CS Unplugged, apoi urmezi programa școlară în MiniScript+ și C++ sau Python. Grupele de începători și avansați lucrează în ritmul lor." },
              { label: "Pui ideile în practică", description: "Aprofundezi programarea, inclusiv OOP, apoi alegi web development, game development sau cybersecurity și înveți prin proiecte aplicate." },
              { label: "Aprofundezi algoritmica", description: "Studiezi algoritmi și concepte avansate prin probleme aplicate. Poți explora opțional arhitectura procesoarelor, programarea embedded sau un alt limbaj." },
            ],
          },
          machineLearning: {
            description: "Pornești de la programare și bazele ML, apoi explorezi modele avansate sau le pui la lucru în robotică.",
            stages: [
              { label: "Descoperi programarea și ML", description: "Începi cu CS Unplugged, MiniScript+ și Python, apoi explorezi ideile de bază din machine learning prin probleme, aplicații practice și proiecte mici." },
              { label: "Înțelegi și explorezi modele", description: "Explorezi algoritmi avansați, matematica și statistica din spatele modelelor. Alegi NLP, computer vision, LLMs, deep learning sau RL și înveți să scrii primul articol de cercetare în LaTeX sau Markdown." },
              { label: "Conectezi modelele cu roboții", description: "Aplici computer vision, deep learning și RL folosind Arduino, programare embedded și MiniScript+ Robotics. Construiești și evaluezi proiecte practice; lucrarea de cercetare este opțională." },
            ],
          },
        },
      },
      activities: {
        eyebrow: "Activități",
        title: "Învățarea continuă și în afara fișei de lucru.",
        description: "Cu sprijinul partenerilor noștri, organizăm gratuit workshop-uri, cursuri și activități practice în care elevii pot explora, experimenta și construi împreună.",
        eventsLabel: "Vezi evenimentele",
        openLabel: "Vezi activitatea",
        galleryLabel: "Galeria activității",
        items: [
          { id: "workshops", title: "Workshop-uri și cursuri", description: "Workshop-uri și cursuri practice care fac programarea, machine learning-ul și robotica mai ușor de înțeles.", longDescription: "Workshop-urile și cursurile noastre combină explicații clare cu practică ghidată. Elevii explorează programarea, machine learning-ul și robotica prin exerciții și proiecte mici, cu mentori care le răspund la întrebări și îi ajută să progreseze.", cover: workshopGallery[2], gallery: workshopGallery, meta: ["Grupe mici", "Practic", "Feedback ghidat"] },
          { id: "competitions", title: "Competiții", description: "Provocări de programare care pun la încercare gândirea algoritmică și abilitățile de coding.", longDescription: "Competițiile noastre de programare le oferă elevilor ocazia să aplice ce au învățat, să abordeze probleme noi și să-și testeze soluțiile. Formatul, programul și detaliile de participare sunt prezentate în calendarul fiecărei competiții.", cover: workshopGallery[1], gallery: [workshopGallery[1], workshopGallery[0], workshopGallery[3]], meta: ["Algoritmică", "Rezolvare de probleme", "Programare"] },
          { id: "events", title: "Evenimente", description: "Hackathoane, meetup-uri și conferințe pentru idei noi, schimb de cunoștințe și oameni cu aceeași pasiune.", longDescription: "De la proiecte construite împreună la hackathoane până la discuții la meetup-uri și conferințe, aceste evenimente aduc laolaltă oameni pasionați de informatică. Consultă calendarul pentru a vedea ce urmează și cum poți participa.", cover: workshopGallery[3], gallery: [workshopGallery[3], workshopGallery[2], workshopGallery[1]], meta: ["Hackathoane", "Meetup-uri", "Conferințe"] },
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
        title: "Trei capabilități conectate, o singură echipă responsabilă.",
        description: "Deciziile de produs, designul de interfață și ingineria rămân conectate de la prima discuție despre scope până după lansare.",
        items: [
          { key: "direction", title: "Direcție de produs", description: "Clarificăm publicul, obiectivul de business, scope-ul și direcția tehnică înainte să înceapă dezvoltarea.", points: ["Discovery și cerințe", "Fluxuri UX și prototipuri", "Planificare tehnică"] },
          { key: "products", title: "Aplicații web & mobile", description: "Proiectăm și construim website-uri, aplicații web și aplicații mobile, împreună cu integrările și automatizările de care au nevoie.", points: ["Interfață și design system", "Frontend și backend", "API-uri și deployment"] },
          { key: "care", title: "Îngrijirea produsului", description: "Îmbunătățim și menținem un produs existent cu priorități transparente, update-uri documentate și atenție practică pentru calitate.", points: ["Accesibilitate și performanță", "Testare și monitorizare", "Mentenanță și iterații"] },
        ],
      },
      work: {
        eyebrow: "Portofoliu",
        title: "Proiecte alese. Construite cu un scop.",
        description: "Descoperă munca noastră în design de produs și dezvoltare software, de la ideea inițială până la experiența finală.",
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
            description: "Produsul nostru: lecții, probleme, proiecte și clase într-un singur workspace, proiectat și administrat intern.",
            overview: "Platforma ScripticX aduce întregul proces de învățare într-un produs conectat, de la lecții structurate și programare în browser până la clase, proiecte și progres.",
            capabilities: [
              { title: "Înveți structurat", description: "Lecțiile, exemplele și documentația păstrează traseul clar încă de la primul concept." },
              { title: "Exersezi în browser", description: "Editorul integrat, problemele de programare și proiectele transformă teoria în cod funcțional." },
              { title: "Predai și urmărești progresul", description: "Clasele, temele, activitatea și rezultatele oferă cursanților și mentorilor un spațiu comun." },
            ],
            scope: ["Strategie de produs", "Interfață și UX", "Dezvoltare full-stack", "Deployment și operare"],
            techStack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "Monaco Editor"],
            cover: "/scripticx-mac-mockup-new.png",
          },
        ],
      },
      process: {
        eyebrow: "Cum lucrăm",
        title: "Un proces transparent, încă de la prima discuție.",
        description: "Fiecare etapă produce o decizie sau un document clar, astfel încât ambele părți să știe ce urmează.",
        items: [
          { number: "01", title: "Discuția despre proiect", description: "Discutăm problema, publicul, limitările și rezultatul dorit într-un apel introductiv gratuit.", note: "Gratuit · Fără obligații" },
          { number: "02", title: "Scope și acord", description: "Definim scope-ul, livrabilele și prețul. Dacă ambele părți sunt de acord, semnăm contractul și stabilim plata în avans, înainte de începerea producției.", note: "Acord comun · Contract · Plată în avans" },
          { number: "03", title: "Design și dezvoltare", description: "După semnarea contractului și încasarea avansului începe producția: design, dezvoltare și feedback constant pe tot parcursul lucrului.", note: "Feedback constant" },
          { number: "04", title: "Livrare și suport", description: "Lansăm, documentăm proiectul și stabilim modelul potrivit de suport sau mentenanță pentru perioada următoare.", note: "Predare inclusă" },
        ],
      },
      portal: {
        eyebrow: "Portal pentru clienți",
        title: "Proiectul tău. Un portal dedicat ție.",
        description: "Ca client, ai acces la un portal dedicat în care urmărești progresul și gestionezi colaborarea cu echipa noastră. Vezi ultimele update-uri, trimiți feedback și păstrezi fișierele, aprobările și documentele proiectului într-un singur loc.",
        points: ["Urmărești update-urile, etapele și pașii următori", "Trimiți feedback și gestionezi aprobările", "Accesezi fișierele și documentația de predare", "Păstrezi organizate contractele, facturile și istoricul proiectului"],
        mock: { project: "Portal client", status: "În lucru", milestone: "Review interfață", update: "Update nou publicat", invoice: "Documente pregătite" },
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Un model comercial potrivit tipului de proiect.",
        description: "Discuția introductivă este gratuită. Orice colaborare plătită primește scope și preț în scris înainte de începerea lucrului.",
        contact: "Discută un proiect",
        items: [
          { title: "Discovery", price: "Gratuit", cadence: "Discuție introductivă", description: "O conversație concentrată pentru a înțelege proiectul și a identifica următorul pas potrivit.", features: ["Contextul proiectului", "Fezabilitate", "Abordare recomandată"] },
          { title: "Proiect cu scope fix", price: "Ofertă personalizată", cadence: "Plată în avans înainte de producție", description: "Pentru un website, o aplicație web sau mobilă, un redesign sau o integrare bine definite. Agreăm împreună scope-ul și prețul, semnăm contractul și încasăm avansul înainte de design și dezvoltare.", features: ["Scope agreat de ambele părți", "Contract semnat și plată în avans", "Design și dezvoltare cu feedback constant", "Predare și documentație"] },
          { title: "Suport continuu de produs", price: "Abonament lunar", cadence: "Capacitate rezervată", description: "Potrivit echipelor care au nevoie de îmbunătățiri continue și continuitate tehnică.", features: ["Backlog prioritizat", "Update-uri regulate", "Mentenanță și iterații"] },
        ],
      },
      fit: {
        eyebrow: "Potrivirea proiectului",
        title: "O alegere bună când claritatea contează la fel de mult ca implementarea.",
        description: "Aducem cea mai mare valoare atunci când o echipă are nevoie ca gândirea de produs și implementarea să avanseze împreună.",
        items: [
          { title: "Un website sau o aplicație web ori mobilă nouă", description: "Ai un obiectiv real, dar scope-ul, interfața sau traseul tehnic încă trebuie definite." },
          { title: "Un produs existent are nevoie de îmbunătățiri clare", description: "Accesibilitatea, performanța, mentenabilitatea sau experiența utilizatorului limitează produsul." },
          { title: "Fluxurile tale trebuie conectate", description: "API-urile, autentificarea, plățile sau instrumentele interne au nevoie de o integrare solidă." },
          { title: "Produsul are nevoie de continuitate", description: "Echipa ta are nevoie de iterații planificate, mentenanță și suport tehnic transparent după lansare." },
        ],
      },
    },
  },
};
