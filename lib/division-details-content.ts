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
          { title: "Informatics foundations", description: "A clear introduction to programming and computational thinking, without memorising recipes.", topics: ["Logic and algorithms", "MiniScript+ and C++", "Input, decisions and loops"] },
          { title: "Algorithms and problem solving", description: "Structured practice for learners who want to become faster, more precise and more independent.", topics: ["Common algorithmic patterns", "Data structures", "Contest-style problems"] },
          { title: "Projects and applied learning", description: "Short builds and guided experiments connect abstract ideas to something learners can see and explain.", topics: ["Guided projects", "Code review", "Presentation and reflection"] },
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
              title: "Foundations",
              audience: "Beginners · 10–14 years",
              format: "4–8 learners",
              schedule: "1 session / week",
              duration: "90 minutes per session",
              description: "A calm, practical start in programming for learners who want to understand how code and algorithms work.",
              features: ["Logic and computational thinking", "MiniScript+ and C++ foundations", "Guided exercises and feedback"],
            },
            {
              title: "Algorithms",
              badge: "Recommended",
              audience: "Intermediate · 12–18 years",
              format: "4–8 learners",
              schedule: "1–2 sessions / week",
              duration: "120 minutes per session",
              description: "Structured preparation for becoming faster, more precise and more independent when solving problems.",
              features: ["Algorithmic patterns", "Data structures and complexity", "School and contest preparation"],
              featured: true,
            },
            {
              title: "Performance lab",
              audience: "Advanced · 13–19 years",
              format: "3–6 learners",
              schedule: "2 sessions / week",
              duration: "120 minutes per session",
              description: "Focused work for ambitious learners preparing for competitions or an accelerated computer science path.",
              features: ["Advanced problem sets", "Solution review and optimisation", "Individual progress plan"],
            },
          ],
          machineLearning: [
            {
              title: "ML foundations",
              audience: "Beginners · 13–17 years",
              format: "4–8 learners",
              schedule: "1 session / week",
              duration: "90 minutes per session",
              description: "A visual and practical introduction to data, Python and the ideas behind machine learning models.",
              features: ["Python and data foundations", "Visual model explanations", "Guided notebook experiments"],
            },
            {
              title: "Applied machine learning",
              badge: "Recommended",
              audience: "Intermediate · 15–19 years",
              format: "4–8 learners",
              schedule: "1–2 sessions / week",
              duration: "120 minutes per session",
              description: "Learners move from prepared examples to complete experiments, comparing models and explaining results.",
              features: ["Data preparation and evaluation", "Core supervised models", "Practical mini-projects"],
              featured: true,
            },
            {
              title: "ML project lab",
              audience: "Advanced · 15–19 years",
              format: "3–6 learners",
              schedule: "1 project session / week",
              duration: "120 minutes per session",
              description: "A mentored project format for learners ready to research, build and present an end-to-end ML solution.",
              features: ["Project scope and research", "Model iteration and review", "Demo and technical presentation"],
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
        description: "Workshops, collaborative challenges and demonstrations give learners a reason to discuss, test and improve their ideas.",
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
        title: "Choose the level of support that fits the learner.",
        description: "Current fees and the final schedule are confirmed after a free placement discussion, so every learner starts in the right format.",
        contact: "Ask about availability",
        items: [
          { title: "Group preparation", price: "Current fee on request", cadence: "Monthly", description: "A structured curriculum with regular practice and cohort feedback.", features: ["4–8 learners", "Weekly meetings", "Progress checkpoints"] },
          { title: "Intensive preparation", price: "Tailored monthly plan", cadence: "Goal-based", description: "More frequent practice for exams, contests or accelerated progress.", features: ["Focused roadmap", "Additional assignments", "Detailed feedback"] },
          { title: "Individual mentoring", price: "Per-session plan", cadence: "Flexible", description: "One-to-one guidance built around a precise learning objective.", features: ["Personal curriculum", "Flexible schedule", "Direct mentoring"] },
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
          { title: "Bazele informaticii", description: "O introducere clară în programare și gândire computațională, fără memorarea unor rețete.", topics: ["Logică și algoritmi", "MiniScript+ și C++", "Citire, decizii și repetări"] },
          { title: "Algoritmică și rezolvarea problemelor", description: "Practică structurată pentru elevii care vor să devină mai rapizi, mai preciși și mai independenți.", topics: ["Tipare algoritmice", "Structuri de date", "Probleme de concurs"] },
          { title: "Proiecte și învățare aplicată", description: "Construcțiile scurte și experimentele ghidate leagă ideile abstracte de rezultate pe care elevii le pot vedea și explica.", topics: ["Proiecte ghidate", "Code review", "Prezentare și reflecție"] },
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
              title: "Fundamente",
              audience: "Începători · 10–14 ani",
              format: "4–8 elevi",
              schedule: "1 sesiune / săptămână",
              duration: "90 de minute per sesiune",
              description: "Un început calm și practic în programare, pentru elevii care vor să înțeleagă cum funcționează codul și algoritmii.",
              features: ["Logică și gândire computațională", "Bazele MiniScript+ și C++", "Exerciții ghidate și feedback"],
            },
            {
              title: "Algoritmică",
              badge: "Recomandat",
              audience: "Intermediar · 12–18 ani",
              format: "4–8 elevi",
              schedule: "1–2 sesiuni / săptămână",
              duration: "120 de minute per sesiune",
              description: "Pregătire structurată pentru mai multă viteză, precizie și independență în rezolvarea problemelor.",
              features: ["Tipare algoritmice", "Structuri de date și complexitate", "Pregătire școlară și pentru concursuri"],
              featured: true,
            },
            {
              title: "Laborator de performanță",
              audience: "Avansat · 13–19 ani",
              format: "3–6 elevi",
              schedule: "2 sesiuni / săptămână",
              duration: "120 de minute per sesiune",
              description: "Lucru concentrat pentru elevii ambițioși care se pregătesc de concursuri sau de un traseu accelerat în informatică.",
              features: ["Seturi avansate de probleme", "Review și optimizarea soluțiilor", "Plan individual de progres"],
            },
          ],
          machineLearning: [
            {
              title: "Fundamente ML",
              audience: "Începători · 13–17 ani",
              format: "4–8 elevi",
              schedule: "1 sesiune / săptămână",
              duration: "90 de minute per sesiune",
              description: "O introducere vizuală și practică în date, Python și ideile din spatele modelelor de machine learning.",
              features: ["Bazele Python și ale datelor", "Explicații vizuale ale modelelor", "Experimente ghidate în notebook"],
            },
            {
              title: "Machine learning aplicat",
              badge: "Recomandat",
              audience: "Intermediar · 15–19 ani",
              format: "4–8 elevi",
              schedule: "1–2 sesiuni / săptămână",
              duration: "120 de minute per sesiune",
              description: "Elevii trec de la exemple pregătite la experimente complete, comparând modele și explicând rezultatele.",
              features: ["Pregătirea și evaluarea datelor", "Modele supervizate de bază", "Mini-proiecte practice"],
              featured: true,
            },
            {
              title: "Laborator de proiect ML",
              audience: "Avansat · 15–19 ani",
              format: "3–6 elevi",
              schedule: "1 sesiune de proiect / săptămână",
              duration: "120 de minute per sesiune",
              description: "Un format de proiect cu mentorat pentru elevii pregătiți să cerceteze, construiască și prezinte o soluție ML completă.",
              features: ["Scope de proiect și research", "Iterarea și review-ul modelului", "Demo și prezentare tehnică"],
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
        description: "Workshop-urile, provocările colaborative și demonstrațiile le oferă elevilor un motiv să discute, să testeze și să îmbunătățească ideile.",
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
        title: "Alege nivelul de suport potrivit elevului.",
        description: "Tarifele curente și programul final sunt confirmate după o discuție gratuită de evaluare, astfel încât fiecare elev să înceapă în formatul potrivit.",
        contact: "Întreabă despre locuri",
        items: [
          { title: "Pregătire în grupă", price: "Tarif curent la cerere", cadence: "Lunar", description: "Curriculum structurat, practică regulată și feedback în cadrul grupei.", features: ["4–8 elevi", "Întâlniri săptămânale", "Checkpoint-uri de progres"] },
          { title: "Pregătire intensivă", price: "Plan lunar personalizat", cadence: "Bazat pe obiectiv", description: "Practică mai frecventă pentru examene, concursuri sau progres accelerat.", features: ["Roadmap concentrat", "Teme suplimentare", "Feedback detaliat"] },
          { title: "Mentorat individual", price: "Plan per sesiune", cadence: "Flexibil", description: "Ghidare unu-la-unu construită în jurul unui obiectiv de învățare precis.", features: ["Curriculum personal", "Program flexibil", "Mentorat direct"] },
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
