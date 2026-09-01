export type MarketingLocale = "en" | "ro";

export function getMarketingLocale(locale: string): MarketingLocale {
  return locale === "ro" ? "ro" : "en";
}

export const marketingContent = {
  en: {
    hero: {
      eyebrow: "Education · technology · community",
      title: "Ideas become",
      accent: "skills, products and useful software.",
      description:
        "ScripticX brings education, software development and a complete programming platform under one focused company.",
      primary: "Discover ScripticX",
      secondary: "Open the platform",
      scroll: "Scroll to explore",
      visualLabel: "The ScripticX learning workspace",
    },
    pillars: {
      eyebrow: "One company, three focused practices",
      title: "Built around how ideas grow.",
      description:
        "From the first algorithm to a production-ready digital product, every ScripticX division has a clear purpose.",
      items: [
        {
          key: "education",
          number: "01",
          title: "Education Center",
          description:
            "Structured informatics and machine learning education, with workshops and mentorship built around real understanding.",
          href: "/education",
          action: "Explore education",
        },
        {
          key: "development",
          number: "02",
          title: "Development",
          description:
            "Web products, interface design and practical technology consulting for teams that need reliable execution.",
          href: "/development",
          action: "Explore development",
        },
        {
          key: "platform",
          number: "03",
          title: "Platform",
          description:
            "A focused workspace for learning programming, solving problems, teaching classes and building projects together.",
          href: "/platform",
          action: "Explore the platform",
        },
      ],
    },
    story: {
      eyebrow: "What ScripticX makes possible",
      title: "A connected path from learning to building.",
      description:
        "Each practice stands on its own. Together, they make it easier to turn curiosity into capability.",
      panelEyebrow: "ScripticX in practice",
      items: [
        {
          label: "Learn",
          title: "Understand the idea, not just the syntax.",
          description:
            "Focused lessons, mentorship and hands-on workshops give learners a durable foundation in computer science.",
          metric: "Education Center",
          meta: "Informatics · Machine learning · Workshops",
        },
        {
          label: "Practice",
          title: "Turn knowledge into repeatable skill.",
          description:
            "Roadmaps, interactive problems, quizzes and progress insights make practice clear for learners and measurable for teachers.",
          metric: "ScripticX Platform",
          meta: "Problems · Courses · Progress",
        },
        {
          label: "Build",
          title: "Move from exercises to complete projects.",
          description:
            "A multi-language editor, project files, GitHub workflows and live collaboration keep the whole build process in one place.",
          metric: "Project workspace",
          meta: "Editor · GitHub · Live Share",
        },
        {
          label: "Deliver",
          title: "Ship digital work with a reliable partner.",
          description:
            "ScripticX Development brings product thinking, interface design and engineering together for organizations and teams.",
          metric: "Development services",
          meta: "Web · Design · Consulting",
        },
      ],
    },
    showcase: {
      eyebrow: "Platform showcase",
      title: "One workspace. Different ways to make progress.",
      description:
        "The platform adapts to learners, teachers and independent builders without splitting their work across disconnected tools.",
      open: "Open ScripticX Platform",
      tabs: [
        {
          key: "editor",
          label: "Editor",
          title: "Projects, not isolated snippets.",
          description:
            "Create files and folders, write MiniScript+, C++ or Python, connect GitHub and collaborate through Live Share.",
          points: ["Multi-language Monaco editor", "Project tree and GitHub", "Integrated run and terminal"],
        },
        {
          key: "learn",
          label: "Learning",
          title: "A roadmap that grows with the learner.",
          description:
            "Follow structured lessons, complete quizzes, solve recommended problems and choose the language path that comes next.",
          points: ["Markdown lessons", "Interactive quizzes", "Data-driven language paths"],
        },
        {
          key: "workspaces",
          label: "Workspaces",
          title: "The right tools for every role.",
          description:
            "Students organize notes and assignments while teachers manage classes, projects, tests and performance.",
          points: ["Student notes and calendar", "Teacher class management", "Role-aware navigation"],
        },
        {
          key: "collaboration",
          label: "Collaboration",
          title: "Build and explain ideas together.",
          description:
            "Use Live Share, whiteboards, graph tools, groups and shared projects without leaving the workspace.",
          points: ["Live coding sessions", "Whiteboards and graphs", "Groups and invitations"],
        },
      ],
    },
    gallery: {
      eyebrow: "Learning in the real world",
      title: "Workshops built around curiosity.",
      description:
        "Programming becomes memorable when learners can discuss an idea, test it and see the result together.",
      action: "Explore the Education Center",
      captions: ["Build and test", "Learn together", "Celebrate progress", "See ideas run"],
    },
    cta: {
      eyebrow: "Start with the part that fits your goal",
      title: "Learn, build or launch something useful.",
      description:
        "Explore the company, open the platform, or contact us about education and development work.",
      primary: "Open the platform",
      secondary: "Contact ScripticX",
    },
  },
  ro: {
    hero: {
      eyebrow: "Educație · tehnologie · comunitate",
      title: "Ideile devin",
      accent: "abilități, produse și software util.",
      description:
        "ScripticX reunește educația, dezvoltarea software și o platformă completă de programare într-o singură companie concentrată.",
      primary: "Descoperă ScripticX",
      secondary: "Deschide platforma",
      scroll: "Derulează pentru a explora",
      visualLabel: "Spațiul de învățare ScripticX",
    },
    pillars: {
      eyebrow: "O companie, trei direcții clare",
      title: "Construite în jurul modului în care cresc ideile.",
      description:
        "De la primul algoritm la un produs digital gata de lansare, fiecare divizie ScripticX are un scop clar.",
      items: [
        {
          key: "education",
          number: "01",
          title: "Education Center",
          description:
            "Pregătire structurată în informatică și machine learning, cu workshop-uri și mentorat bazate pe înțelegere reală.",
          href: "/education",
          action: "Explorează educația",
        },
        {
          key: "development",
          number: "02",
          title: "Development",
          description:
            "Produse web, design de interfețe și consultanță tehnică practică pentru echipe care au nevoie de execuție solidă.",
          href: "/development",
          action: "Explorează development",
        },
        {
          key: "platform",
          number: "03",
          title: "Platform",
          description:
            "Un workspace concentrat pentru învățarea programării, rezolvarea problemelor, clase și proiecte construite împreună.",
          href: "/platform",
          action: "Explorează platforma",
        },
      ],
    },
    story: {
      eyebrow: "Ce face ScripticX posibil",
      title: "Un traseu conectat de la învățare la construcție.",
      description:
        "Fiecare direcție funcționează independent. Împreună, transformă mai ușor curiozitatea în competență.",
      panelEyebrow: "ScripticX în practică",
      items: [
        {
          label: "Învață",
          title: "Înțelege ideea, nu doar sintaxa.",
          description:
            "Lecțiile clare, mentoratul și workshop-urile practice oferă o bază solidă și durabilă în informatică.",
          metric: "Education Center",
          meta: "Informatică · Machine learning · Workshop-uri",
        },
        {
          label: "Exersează",
          title: "Transformă informația într-o abilitate repetabilă.",
          description:
            "Roadmap-urile, problemele, quiz-urile și statisticile fac practica clară pentru elevi și măsurabilă pentru profesori.",
          metric: "Platforma ScripticX",
          meta: "Probleme · Cursuri · Progres",
        },
        {
          label: "Construiește",
          title: "Treci de la exerciții la proiecte complete.",
          description:
            "Editorul multi-limbaj, fișierele de proiect, GitHub și colaborarea live păstrează tot procesul într-un singur loc.",
          metric: "Workspace de proiect",
          meta: "Editor · GitHub · Live Share",
        },
        {
          label: "Livrează",
          title: "Lansează produse digitale cu un partener de încredere.",
          description:
            "ScripticX Development reunește gândirea de produs, designul de interfață și ingineria pentru organizații și echipe.",
          metric: "Servicii de development",
          meta: "Web · Design · Consultanță",
        },
      ],
    },
    showcase: {
      eyebrow: "Platform showcase",
      title: "Un singur workspace. Mai multe moduri de a progresa.",
      description:
        "Platforma se adaptează elevilor, profesorilor și dezvoltatorilor independenți fără să le împartă munca între instrumente separate.",
      open: "Deschide platforma ScripticX",
      tabs: [
        {
          key: "editor",
          label: "Editor",
          title: "Proiecte, nu fragmente izolate.",
          description:
            "Creează fișiere și foldere, scrie MiniScript+, C++ sau Python, conectează GitHub și colaborează prin Live Share.",
          points: ["Editor Monaco multi-limbaj", "Structură de proiect și GitHub", "Run și terminal integrate"],
        },
        {
          key: "learn",
          label: "Învățare",
          title: "Un roadmap care crește odată cu elevul.",
          description:
            "Urmează lecții structurate, finalizează quiz-uri, rezolvă probleme recomandate și alege următorul traseu de limbaj.",
          points: ["Lecții Markdown", "Quiz-uri interactive", "Trasee data-driven"],
        },
        {
          key: "workspaces",
          label: "Workspaces",
          title: "Instrumentele potrivite pentru fiecare rol.",
          description:
            "Elevii organizează notițe și teme, iar profesorii gestionează clase, proiecte, teste și performanță.",
          points: ["Notițe și calendar pentru elevi", "Managementul claselor", "Navigație adaptată rolului"],
        },
        {
          key: "collaboration",
          label: "Colaborare",
          title: "Construiește și explică idei împreună.",
          description:
            "Folosește Live Share, whiteboard-uri, grafuri, grupuri și proiecte partajate fără să părăsești workspace-ul.",
          points: ["Sesiuni live de programare", "Whiteboard și grafuri", "Grupuri și invitații"],
        },
      ],
    },
    gallery: {
      eyebrow: "Învățare în lumea reală",
      title: "Workshop-uri construite în jurul curiozității.",
      description:
        "Programarea devine memorabilă când elevii pot discuta o idee, o pot testa și pot vedea rezultatul împreună.",
      action: "Explorează Education Center",
      captions: ["Construiește și testează", "Învață împreună", "Celebrează progresul", "Vezi ideile în acțiune"],
    },
    cta: {
      eyebrow: "Începe cu direcția potrivită obiectivului tău",
      title: "Învață, construiește sau lansează ceva util.",
      description:
        "Explorează compania, deschide platforma sau contactează-ne pentru proiecte de educație și development.",
      primary: "Deschide platforma",
      secondary: "Contactează ScripticX",
    },
  },
} as const;

export const divisionContent = {
  en: {
    education: {
      eyebrow: "ScripticX Education Center",
      title: "Education that turns concepts into confidence.",
      description:
        "Focused informatics and machine learning programs, supported by mentorship, workshops and the ScripticX learning platform.",
      primary: "Discuss a learning plan",
      secondary: "Explore the platform",
      highlights: ["Structured learning paths", "Individual and group mentorship", "Project-based workshops"],
      services: [
        { title: "Informatics", description: "Algorithms, data structures and problem-solving taught through clear progression and deliberate practice.", href: "/education/informatics" },
        { title: "Machine learning", description: "A practical introduction to data, models and experimentation for learners ready for the next step.", href: "/education/machine-learning" },
        { title: "Workshops", description: "Hands-on sessions that make computing tangible through team activities, robots and small projects.", href: "/#workshops" },
      ],
    },
    informatics: {
      eyebrow: "Education Center · Informatics",
      title: "Learn to solve problems with clarity.",
      description: "A structured informatics program spanning fundamentals, algorithms, data structures and contest preparation.",
      primary: "Request program details",
      secondary: "Open learning roadmap",
      highlights: ["Clear foundations", "Guided problem solving", "Progress you can measure"],
      services: [
        { title: "Foundations", description: "Logic, variables, control flow and the habits required to reason about a program.", href: "/education/informatics" },
        { title: "Algorithms", description: "From common patterns to efficient solutions, explained through practice rather than memorization.", href: "/education/informatics" },
        { title: "Preparation", description: "Personalized plans for school, exams, contests and long-term computer science goals.", href: "/education/informatics" },
      ],
    },
    machineLearning: {
      eyebrow: "Education Center · Machine learning",
      title: "Understand how intelligent systems are built.",
      description: "A practical route through data, models, evaluation and responsible experimentation.",
      primary: "Request program details",
      secondary: "Contact ScripticX",
      highlights: ["Python foundations", "Real datasets", "Responsible model evaluation"],
      services: [
        { title: "Data foundations", description: "Learn to prepare, inspect and understand data before reaching for a model.", href: "/education/machine-learning" },
        { title: "Model building", description: "Explore core approaches through notebooks, visual explanations and small experiments.", href: "/education/machine-learning" },
        { title: "Applied projects", description: "Combine research, implementation and communication in a complete project.", href: "/education/machine-learning" },
      ],
    },
    development: {
      eyebrow: "ScripticX Development",
      title: "Digital products designed to stay useful.",
      description: "Product strategy, interface design and modern web engineering for organizations that value clarity and maintainability.",
      primary: "Discuss a project",
      secondary: "See our capabilities",
      highlights: ["Product and UX thinking", "Modern web engineering", "Practical technology consulting"],
      services: [
        { title: "Web services", description: "Fast, accessible websites and web applications built around real product goals.", href: "/development/web-services" },
        { title: "Product design", description: "Clear systems, interfaces and prototypes that reduce friction for users and teams.", href: "/development/design" },
        { title: "IT consulting", description: "Architecture, implementation planning and technical support for digital initiatives.", href: "/development/consulting" },
      ],
    },
    webServices: {
      eyebrow: "Development · Web services",
      title: "Web experiences that are fast, clear and dependable.",
      description: "From focused company sites to complete web products, built with accessibility, performance and maintainability in mind.",
      primary: "Start a web project",
      secondary: "View Development",
      highlights: ["Responsive by default", "Performance-oriented", "Accessible and maintainable"],
      services: [
        { title: "Company websites", description: "A strong, responsive presence with content architecture that stays easy to maintain.", href: "/development/web-services" },
        { title: "Web applications", description: "Purpose-built interfaces and workflows for teams, services and digital products.", href: "/development/web-services" },
        { title: "Modernization", description: "Careful redesign and technical renewal for existing products that have outgrown their foundation.", href: "/development/web-services" },
      ],
    },
    design: {
      eyebrow: "Development · Product design",
      title: "Interfaces that explain themselves.",
      description: "Research, product structure and visual systems combined into calm experiences that users can understand.",
      primary: "Discuss a design project",
      secondary: "View Development",
      highlights: ["User-centered flows", "Reusable design systems", "Production-aware prototypes"],
      services: [
        { title: "UX architecture", description: "Clarify navigation, information and critical flows before visual polish begins.", href: "/development/design" },
        { title: "Interface design", description: "A consistent visual language designed for usability, accessibility and real content.", href: "/development/design" },
        { title: "Design systems", description: "Shared components and rules that make product work more coherent and efficient.", href: "/development/design" },
      ],
    },
    consulting: {
      eyebrow: "Development · IT consulting",
      title: "Practical technical direction for real constraints.",
      description: "Clear guidance on architecture, tools, implementation and delivery without unnecessary complexity.",
      primary: "Schedule a conversation",
      secondary: "View Development",
      highlights: ["Architecture reviews", "Technology selection", "Implementation planning"],
      services: [
        { title: "Technical discovery", description: "Map the problem, dependencies and constraints before committing to a solution.", href: "/development/consulting" },
        { title: "Architecture", description: "Choose a foundation that matches scale, maintenance needs and the team that will own it.", href: "/development/consulting" },
        { title: "Delivery support", description: "Turn a plan into milestones and remove implementation blockers as the work moves forward.", href: "/development/consulting" },
      ],
    },
    platform: {
      eyebrow: "ScripticX Platform",
      title: "A complete workspace for learning and building software.",
      description: "Courses, problems, projects, notes, classes and collaboration tools brought into one focused programming environment.",
      primary: "Open ScripticX Platform",
      secondary: "Read the documentation",
      highlights: ["Learner and teacher workspaces", "Multi-language project editor", "Progress, classes and collaboration"],
      services: [
        { title: "Learn", description: "Follow structured roadmaps, read interactive lessons and practice with problems matched to your path.", href: "https://platform.scripticx.org/roadmap" },
        { title: "Build", description: "Create complete projects with files, folders, GitHub, code execution and a modern Monaco editor.", href: "https://platform.scripticx.org/editor" },
        { title: "Teach", description: "Manage classes, assignments, projects, tests, calendars and student progress from one workspace.", href: "https://platform.scripticx.org/teacher" },
      ],
    },
  },
  ro: {
    education: {
      eyebrow: "ScripticX Education Center",
      title: "Educație care transformă conceptele în încredere.",
      description: "Programe concentrate de informatică și machine learning, susținute prin mentorat, workshop-uri și platforma ScripticX.",
      primary: "Discută un plan de învățare",
      secondary: "Explorează platforma",
      highlights: ["Trasee structurate", "Mentorat individual și de grup", "Workshop-uri bazate pe proiecte"],
      services: [
        { title: "Informatică", description: "Algoritmi, structuri de date și problem solving predate prin progresie clară și practică intenționată.", href: "/education/informatics" },
        { title: "Machine learning", description: "O introducere practică în date, modele și experimentare pentru elevii pregătiți de pasul următor.", href: "/education/machine-learning" },
        { title: "Workshop-uri", description: "Sesiuni practice care fac informatica tangibilă prin activități de echipă, roboți și proiecte mici.", href: "/#workshops" },
      ],
    },
    informatics: {
      eyebrow: "Education Center · Informatică",
      title: "Învață să rezolvi probleme cu claritate.",
      description: "Un program structurat de informatică, de la bazele programării la algoritmi, structuri de date și pregătire pentru concursuri.",
      primary: "Solicită detaliile programului",
      secondary: "Deschide roadmap-ul",
      highlights: ["Baze clare", "Problem solving ghidat", "Progres măsurabil"],
      services: [
        { title: "Fundamente", description: "Logică, variabile, control flow și obiceiurile necesare pentru a înțelege un program.", href: "/education/informatics" },
        { title: "Algoritmi", description: "De la tipare comune la soluții eficiente, explicate prin practică, nu memorare.", href: "/education/informatics" },
        { title: "Pregătire", description: "Planuri personalizate pentru școală, examene, concursuri și obiective pe termen lung.", href: "/education/informatics" },
      ],
    },
    machineLearning: {
      eyebrow: "Education Center · Machine learning",
      title: "Înțelege cum sunt construite sistemele inteligente.",
      description: "Un traseu practic prin date, modele, evaluare și experimentare responsabilă.",
      primary: "Solicită detaliile programului",
      secondary: "Contactează ScripticX",
      highlights: ["Baze Python", "Seturi reale de date", "Evaluarea responsabilă a modelelor"],
      services: [
        { title: "Fundamentele datelor", description: "Învață să pregătești, analizezi și înțelegi datele înainte de alegerea unui model.", href: "/education/machine-learning" },
        { title: "Construirea modelelor", description: "Explorează abordările principale prin notebook-uri, explicații vizuale și experimente mici.", href: "/education/machine-learning" },
        { title: "Proiecte aplicate", description: "Combină cercetarea, implementarea și comunicarea într-un proiect complet.", href: "/education/machine-learning" },
      ],
    },
    development: {
      eyebrow: "ScripticX Development",
      title: "Produse digitale create pentru a rămâne utile.",
      description: "Strategie de produs, design de interfață și inginerie web modernă pentru organizații care apreciază claritatea și mentenanța.",
      primary: "Discută un proiect",
      secondary: "Vezi capabilitățile",
      highlights: ["Gândire de produs și UX", "Inginerie web modernă", "Consultanță tehnică practică"],
      services: [
        { title: "Servicii web", description: "Website-uri și aplicații rapide și accesibile, construite în jurul unor obiective reale.", href: "/development/web-services" },
        { title: "Product design", description: "Sisteme, interfețe și prototipuri clare care reduc fricțiunea pentru utilizatori și echipe.", href: "/development/design" },
        { title: "Consultanță IT", description: "Arhitectură, planificarea implementării și suport tehnic pentru inițiative digitale.", href: "/development/consulting" },
      ],
    },
    webServices: {
      eyebrow: "Development · Servicii web",
      title: "Experiențe web rapide, clare și fiabile.",
      description: "De la site-uri de companie la produse web complete, construite cu accesibilitate, performanță și mentenanță în minte.",
      primary: "Începe un proiect web",
      secondary: "Vezi Development",
      highlights: ["Responsive implicit", "Orientat spre performanță", "Accesibil și ușor de menținut"],
      services: [
        { title: "Website-uri", description: "O prezență responsive puternică și o arhitectură de conținut ușor de menținut.", href: "/development/web-services" },
        { title: "Aplicații web", description: "Interfețe și workflow-uri construite pentru echipe, servicii și produse digitale.", href: "/development/web-services" },
        { title: "Modernizare", description: "Redesign atent și reînnoire tehnică pentru produse care și-au depășit fundația actuală.", href: "/development/web-services" },
      ],
    },
    design: {
      eyebrow: "Development · Product design",
      title: "Interfețe care se explică singure.",
      description: "Research, structură de produs și sisteme vizuale reunite în experiențe calme, ușor de înțeles.",
      primary: "Discută un proiect de design",
      secondary: "Vezi Development",
      highlights: ["Flow-uri centrate pe utilizator", "Design systems reutilizabile", "Prototipuri orientate spre producție"],
      services: [
        { title: "Arhitectură UX", description: "Clarifică navigația, informația și flow-urile critice înainte de finisajul vizual.", href: "/development/design" },
        { title: "Design de interfață", description: "Un limbaj vizual coerent, construit pentru utilizare, accesibilitate și conținut real.", href: "/development/design" },
        { title: "Design systems", description: "Componente și reguli comune care fac munca de produs mai coerentă și eficientă.", href: "/development/design" },
      ],
    },
    consulting: {
      eyebrow: "Development · Consultanță IT",
      title: "Direcție tehnică practică pentru constrângeri reale.",
      description: "Recomandări clare pentru arhitectură, instrumente, implementare și livrare, fără complexitate inutilă.",
      primary: "Programează o discuție",
      secondary: "Vezi Development",
      highlights: ["Review de arhitectură", "Alegerea tehnologiilor", "Planificarea implementării"],
      services: [
        { title: "Descoperire tehnică", description: "Mapează problema, dependențele și constrângerile înainte de alegerea soluției.", href: "/development/consulting" },
        { title: "Arhitectură", description: "Alege o fundație potrivită pentru scară, mentenanță și echipa care o va administra.", href: "/development/consulting" },
        { title: "Suport pentru livrare", description: "Transformă planul în etape și elimină blocajele pe parcursul implementării.", href: "/development/consulting" },
      ],
    },
    platform: {
      eyebrow: "Platforma ScripticX",
      title: "Un workspace complet pentru învățare și software.",
      description: "Cursuri, probleme, proiecte, notițe, clase și instrumente de colaborare reunite într-un mediu concentrat de programare.",
      primary: "Deschide platforma ScripticX",
      secondary: "Citește documentația",
      highlights: ["Workspaces pentru elevi și profesori", "Editor de proiecte multi-limbaj", "Progres, clase și colaborare"],
      services: [
        { title: "Învață", description: "Urmează roadmap-uri structurate, citește lecții interactive și exersează cu probleme potrivite traseului tău.", href: "https://platform.scripticx.org/roadmap" },
        { title: "Construiește", description: "Creează proiecte complete cu fișiere, foldere, GitHub, execuție și editor Monaco modern.", href: "https://platform.scripticx.org/editor" },
        { title: "Predă", description: "Gestionează clase, teme, proiecte, teste, calendare și progresul elevilor dintr-un singur workspace.", href: "https://platform.scripticx.org/teacher" },
      ],
    },
  },
} as const;
