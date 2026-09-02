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
      title: "Explore ScripticX by workspace.",
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
          label: "Home",
          title: "Your school workspace at a glance.",
          description:
            "Start the week with upcoming work, learning activity and roadmap progress collected in one student home.",
          points: ["Weekly learning overview", "Upcoming assignments and deadlines", "Roadmap progress"],
        },
        {
          key: "planner",
          label: "Planner",
          title: "Turn the week into a clear plan.",
          description:
            "Organize learning sessions, classes and deadlines in the student planner, then check off work as it is completed.",
          points: ["Weekly schedule", "Tasks and study sessions", "Deadlines and completion states"],
        },
        {
          key: "notes",
          label: "Notes",
          title: "Keep explanations next to the practice.",
          description:
            "Write and organize study notes for algorithms, languages and class material without leaving the student workspace.",
          points: ["Organized note folders", "Formatted text and code", "Shareable learning material"],
        },
        {
          key: "whiteboard",
          label: "Whiteboard",
          title: "Make an idea visible before coding it.",
          description:
            "Sketch a solution, arrange notes and connect steps freely on a visual canvas built into the student workspace.",
          points: ["Freeform canvas", "Notes and connectors", "Visual problem planning"],
        },
        {
          key: "graphs",
          label: "Graphs",
          title: "Understand graph algorithms by seeing them run.",
          description:
            "Create vertices and edges, inspect graph structure and follow an algorithm traversal visually.",
          points: ["Interactive vertices and edges", "Graph properties", "Algorithm traversal"],
        },
        {
          key: "classes",
          label: "Classes",
          title: "A shared hub for every class.",
          description:
            "Teachers create class spaces and follow student progress, while learners join with an invitation code and keep assignments and resources together.",
          points: ["Create or join with an invitation code", "Assignments, resources and deadlines", "Student counts and average progress"],
        },
        {
          key: "problems",
          label: "Problems",
          title: "Practice with feedback that is easy to act on.",
          description:
            "Open a problem, write and run a solution, inspect test results and keep the best submitted score.",
          points: ["Difficulty and localized statements", "Integrated runner and test results", "Submission history and best score"],
        },
        {
          key: "teacherDashboard",
          label: "Dashboard",
          title: "See the classroom at a glance.",
          description:
            "Review enrolled students, active classes, average completion, upcoming deadlines and recent submissions from one teacher dashboard.",
          points: ["Students and active classes", "Completion and assignment totals", "Deadlines and recent activity"],
        },
        {
          key: "students",
          label: "Students",
          title: "Follow every learner from one roster.",
          description:
            "Review students across classes, compare progress and open an individual learner when more context is needed.",
          points: ["Cross-class student roster", "Individual completion progress", "Direct learner access"],
        },
        {
          key: "assignments",
          label: "Assignments & tests",
          title: "Keep coursework measurable.",
          description:
            "Create assignments from a class, filter them by status and follow deadlines, completed solutions and completion rates.",
          points: ["Upcoming, past-due and open-ended work", "Deadlines and class context", "Completion and solution counts"],
        },
        {
          key: "calendar",
          label: "Calendar",
          title: "Every class deadline, organized by month.",
          description:
            "View assignment deadlines across classes in a monthly calendar and open the corresponding work directly.",
          points: ["Monthly class schedule", "Assignment deadlines and times", "Direct links to coursework"],
        },
        {
          key: "analytics",
          label: "Analytics",
          title: "Know where support is needed.",
          description:
            "Compare class completion, identify students who are on track and find learners with assigned work and low progress.",
          points: ["Overall and per-class completion", "Students above or below thresholds", "Needs-attention view"],
        },
        {
          key: "personalDashboard",
          label: "Dashboard",
          title: "Pick up exactly where you left off.",
          description:
            "See your learning streak, reward balance, solved problems and the next activity from the personal dashboard.",
          points: ["Daily challenge and streak", "Reward points", "Learning and problem progress"],
        },
        {
          key: "search",
          label: "Search",
          title: "Find the right next step quickly.",
          description:
            "Search across platform content and jump into relevant problems, learning material and community spaces.",
          points: ["Unified platform search", "Filtered result types", "Direct links to results"],
        },
        {
          key: "collaboration",
          label: "Live Share",
          title: "Code together, live.",
          description:
            "Start a Live Share session from the editor, share the project workspace and keep every participant on the same version as changes are made.",
          points: ["Real-time code and project sync", "Participant presence", "Session links and invitations"],
        },
        {
          key: "groups",
          label: "Groups",
          title: "Focused spaces for every study group.",
          description:
            "Create public or private groups with channels, invite members and keep conversations, mentions and file attachments organized.",
          points: ["Public and private groups", "Channels, mentions and pinned messages", "Invitations, attachments and member roles"],
        },
        {
          key: "rewards",
          label: "Rewards",
          title: "Progress becomes part of your profile.",
          description:
            "Earn reward points from problems and daily challenges, then use them in the shop for profile items you can equip.",
          points: ["Separate reward-points balance", "Frames, decorations, backgrounds and titles", "Inventory and equipped profile items"],
        },
        {
          key: "competitions",
          label: "Competitions",
          title: "Practice under real competition conditions.",
          description:
            "Join published coding competitions, solve timed problems and follow the live leaderboard when the organizer enables it.",
          points: ["Timed problem sets", "Saved submissions and best scores", "Live rankings and competition phases"],
        },
        {
          key: "leaderboard",
          label: "Leaderboard",
          title: "See how consistent practice adds up.",
          description:
            "Compare earned points with the community and follow the learners building momentum across the platform.",
          points: ["Community ranking", "Accumulated points", "Visible progress milestones"],
        },
        {
          key: "feed",
          label: "Feed",
          title: "Share progress with the community.",
          description:
            "Post learning milestones and code discoveries, then follow useful activity from other ScripticX members.",
          points: ["Community posts", "Learning and code updates", "Reactions and replies"],
        },
        {
          key: "documentation",
          label: "Documentation",
          title: "Reference the language while you build.",
          description:
            "Browse MiniScript+ concepts, syntax and examples in structured documentation connected to the learning experience.",
          points: ["Structured language reference", "Syntax examples", "Practical guidance"],
        },
        {
          key: "examples",
          label: "Examples",
          title: "Start from code that already runs.",
          description:
            "Browse practical examples by topic and difficulty, then open one as a starting point for your own project.",
          points: ["Examples by difficulty", "Multiple programming topics", "Open directly in the editor"],
        },
      ],
    },
    audiences: {
      switchLabel: "Choose a ScripticX workspace",
      tabs: {
        student: "For students",
        teacher: "For teachers",
        personal: "Personal",
      },
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
      title: "Explorează ScripticX pe workspace-uri.",
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
          label: "Acasă",
          title: "Workspace-ul pentru școală, dintr-o privire.",
          description:
            "Începe săptămâna cu temele viitoare, activitatea de învățare și progresul din roadmap reunite în pagina principală a elevului.",
          points: ["Privire de ansamblu asupra săptămânii", "Teme și deadline-uri viitoare", "Progres în roadmap"],
        },
        {
          key: "planner",
          label: "Planner",
          title: "Transformă săptămâna într-un plan clar.",
          description:
            "Organizează sesiunile de învățare, clasele și deadline-urile în planner-ul elevului, apoi bifează activitățile finalizate.",
          points: ["Program săptămânal", "Task-uri și sesiuni de studiu", "Deadline-uri și stări de completare"],
        },
        {
          key: "notes",
          label: "Notițe",
          title: "Păstrează explicațiile lângă exerciții.",
          description:
            "Scrie și organizează notițe pentru algoritmi, limbaje și materiale de clasă fără să ieși din workspace-ul elevului.",
          points: ["Foldere pentru notițe", "Text formatat și cod", "Materiale de studiu partajabile"],
        },
        {
          key: "whiteboard",
          label: "Whiteboard",
          title: "Fă ideea vizibilă înainte să o codezi.",
          description:
            "Schițează o soluție, aranjează notițe și conectează pașii liber pe un canvas vizual integrat în workspace.",
          points: ["Canvas liber", "Notițe și conexiuni", "Planificare vizuală a soluției"],
        },
        {
          key: "graphs",
          label: "Grafuri",
          title: "Înțelege algoritmii pe grafuri văzându-i în acțiune.",
          description:
            "Creează noduri și muchii, inspectează structura grafului și urmărește vizual parcurgerea unui algoritm.",
          points: ["Noduri și muchii interactive", "Proprietăți ale grafului", "Parcurgere vizuală"],
        },
        {
          key: "classes",
          label: "Clase",
          title: "Un spațiu comun pentru fiecare clasă.",
          description:
            "Profesorii creează clase și urmăresc progresul elevilor, iar cursanții intră cu un cod de invitație și găsesc temele și resursele în același loc.",
          points: ["Creare sau înscriere prin cod de invitație", "Teme, resurse și deadline-uri", "Număr de elevi și progres mediu"],
        },
        {
          key: "problems",
          label: "Probleme",
          title: "Practică însoțită de feedback clar.",
          description:
            "Deschide o problemă, scrie și rulează soluția, verifică rezultatele testelor și păstrează cel mai bun scor trimis.",
          points: ["Dificultate și enunțuri localizate", "Runner și rezultate integrate", "Istoric de submisii și cel mai bun scor"],
        },
        {
          key: "teacherDashboard",
          label: "Dashboard",
          title: "Vezi situația claselor dintr-o privire.",
          description:
            "Urmărește elevii înscriși, clasele active, progresul mediu, deadline-urile viitoare și submisiile recente din dashboard-ul profesorului.",
          points: ["Elevi și clase active", "Progres și număr de teme", "Deadline-uri și activitate recentă"],
        },
        {
          key: "students",
          label: "Elevi",
          title: "Urmărește fiecare elev dintr-o singură listă.",
          description:
            "Vezi elevii din toate clasele, compară progresul și deschide profilul unui cursant când ai nevoie de mai mult context.",
          points: ["Listă de elevi din toate clasele", "Progres individual", "Acces direct la elev"],
        },
        {
          key: "assignments",
          label: "Teme și teste",
          title: "Păstrează evaluarea ușor de urmărit.",
          description:
            "Creează teme într-o clasă, filtrează-le după stare și urmărește deadline-urile, soluțiile finalizate și rata de completare.",
          points: ["Teme viitoare, restante sau fără deadline", "Deadline-uri și contextul clasei", "Număr de soluții și progres"],
        },
        {
          key: "calendar",
          label: "Calendar",
          title: "Toate deadline-urile claselor, organizate lunar.",
          description:
            "Vezi deadline-urile temelor din toate clasele într-un calendar lunar și deschide direct activitatea corespunzătoare.",
          points: ["Program lunar pentru clase", "Deadline-uri și ore", "Acces direct la activități"],
        },
        {
          key: "analytics",
          label: "Analiză",
          title: "Află unde este nevoie de ajutor.",
          description:
            "Compară progresul claselor, identifică elevii care țin pasul și găsește cursanții cu teme alocate și progres scăzut.",
          points: ["Progres general și pe clase", "Elevi peste sau sub praguri", "Listă pentru intervenții"],
        },
        {
          key: "personalDashboard",
          label: "Dashboard",
          title: "Continuă exact de unde ai rămas.",
          description:
            "Vezi seria de zile, punctele reward, problemele rezolvate și următoarea activitate din dashboard-ul personal.",
          points: ["Daily challenge și streak", "Puncte reward", "Progres la lecții și probleme"],
        },
        {
          key: "search",
          label: "Căutare",
          title: "Găsește rapid următorul pas potrivit.",
          description:
            "Caută în conținutul platformei și treci direct la probleme, materiale de învățare sau spații din comunitate.",
          points: ["Căutare unificată", "Filtre pe tipuri de rezultate", "Acces direct la rezultate"],
        },
        {
          key: "collaboration",
          label: "Live Share",
          title: "Scrieți cod împreună, live.",
          description:
            "Pornește o sesiune Live Share direct din editor, partajează proiectul și păstrează aceeași versiune pentru toți participanții pe măsură ce apar modificări.",
          points: ["Sincronizare live pentru cod și proiect", "Prezența participanților", "Linkuri de sesiune și invitații"],
        },
        {
          key: "groups",
          label: "Grupuri",
          title: "Spații dedicate fiecărui grup de studiu.",
          description:
            "Creează grupuri publice sau private cu canale, invită membri și organizează conversațiile, mențiunile și fișierele atașate.",
          points: ["Grupuri publice și private", "Canale, mențiuni și mesaje fixate", "Invitații, atașamente și roluri"],
        },
        {
          key: "rewards",
          label: "Recompense",
          title: "Progresul devine parte din profilul tău.",
          description:
            "Câștigă puncte de recompensă din probleme și daily challenges, apoi folosește-le în shop pentru obiecte de profil pe care le poți echipa.",
          points: ["Sold separat de puncte reward", "Rame, decorații, fundaluri și titluri", "Inventar și obiecte echipate pe profil"],
        },
        {
          key: "competitions",
          label: "Competiții",
          title: "Exersează în condiții reale de concurs.",
          description:
            "Înscrie-te în competiții publicate, rezolvă probleme contra cronometru și urmărește clasamentul live atunci când organizatorul îl activează.",
          points: ["Seturi de probleme cronometrate", "Submisii salvate și cel mai bun scor", "Clasamente live și etape de concurs"],
        },
        {
          key: "leaderboard",
          label: "Clasament",
          title: "Vezi cum se adună practica făcută consecvent.",
          description:
            "Compară punctele obținute cu comunitatea și urmărește cursanții care construiesc constant progres pe platformă.",
          points: ["Clasament al comunității", "Puncte acumulate", "Etape de progres vizibile"],
        },
        {
          key: "feed",
          label: "Feed",
          title: "Împărtășește progresul cu comunitatea.",
          description:
            "Publică momente de progres și descoperiri din cod, apoi urmărește activitatea utilă a celorlalți membri ScripticX.",
          points: ["Postări în comunitate", "Update-uri de învățare și cod", "Reacții și răspunsuri"],
        },
        {
          key: "documentation",
          label: "Documentație",
          title: "Consultă limbajul în timp ce construiești.",
          description:
            "Explorează conceptele, sintaxa și exemplele MiniScript+ într-o documentație structurată și conectată la învățare.",
          points: ["Referință structurată a limbajului", "Exemple de sintaxă", "Recomandări practice"],
        },
        {
          key: "examples",
          label: "Exemple",
          title: "Pornește de la cod care deja rulează.",
          description:
            "Explorează exemple practice după subiect și dificultate, apoi deschide unul ca punct de pornire pentru propriul proiect.",
          points: ["Exemple după dificultate", "Mai multe subiecte de programare", "Deschidere directă în editor"],
        },
      ],
    },
    audiences: {
      switchLabel: "Alege un workspace ScripticX",
      tabs: {
        student: "Pentru elevi",
        teacher: "Pentru profesori",
        personal: "Personal",
      },
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
