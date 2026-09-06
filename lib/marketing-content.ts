export type MarketingLocale = "en" | "ro";

export function getMarketingLocale(locale: string): MarketingLocale {
  return locale === "ro" ? "ro" : "en";
}

export const marketingContent = {
  en: {
    hero: {
      eyebrow: "Learn. Build. Grow.",
      title: "Good ideas grow into",
      accent: "skills, products and useful software.",
      description:
        "Here, curiosity becomes code, projects become products, and good ideas get out of the notebook. Learn, build, or bring us the next thing worth shipping. :)",
      primary: "See what we’re building",
      secondary: "Open ScripticX",
      scroll: "Scroll to explore",
      visualLabel: "The ScripticX learning workspace",
    },
    pillars: {
      eyebrow: "The three parts of ScripticX",
      title: "We teach. We design. We code.",
      description:
        "Behind the name are three distinct parts: our Education Center, our software development studio and a programming platform built for learners and teachers.",
      items: [
        {
          key: "education",
          number: "01",
          title: "Education Center",
          description:
            "Informatics and machine learning for curious minds—with clear explanations, hands-on workshops and mentors who welcome every “why?”",
          href: "/education",
          action: "Step inside the classroom",
        },
        {
          key: "development",
          number: "02",
          title: "Development",
          description:
            "You bring the idea. We bring product thinking, design and code—plus honest updates while we build it.",
          href: "/development",
          action: "Build something with us",
        },
        {
          key: "platform",
          number: "03",
          title: "Platform",
          description:
            "Lessons, code, classes, projects and community in one tidy workspace. Fewer lost tabs, more things finished.",
          href: "/platform",
          action: "Take the platform tour",
        },
      ],
    },
    story: {
      eyebrow: "A clearer path through programming",
      title: "From your first lesson to your own programming projects.",
      description:
        "Learn the concepts, practise with real problems, write code in the ScripticX editor and keep growing through classes, groups and competitions.",
      panelEyebrow: "Your learning path",
      items: [
        {
          label: "Learn",
          title: "Get the idea. Then make it yours.",
          description:
            "Clear lessons, patient mentors and hands-on workshops turn intimidating concepts into things you can actually explain back.",
          metric: "A place for better questions.",
          meta: "Informatics · Machine learning · Workshops",
        },
        {
          label: "Practice",
          title: "Practice until “wait, what?” becomes “oh, got it!”",
          description:
            "Roadmaps, interactive problems, quizzes and useful progress insights make the next step clear for learners and teachers.",
          metric: "Progress you can actually see.",
          meta: "Problems · Courses · Progress",
        },
        {
          label: "Code",
          title: "Turn exercises into working projects.",
          description:
            "Write and run code, organise project files, connect GitHub and collaborate through Live Share—all inside your programming workspace.",
          metric: "A workspace for code that goes further.",
          meta: "Editor · GitHub · Live Share",
        },
        {
          label: "Grow",
          title: "Keep going, together.",
          description:
            "Join classes and groups, enter competitions and follow your progress with rewards that make regular practice feel worthwhile.",
          metric: "Progress feels better when it’s shared.",
          meta: "Classes · Groups · Competitions",
        },
      ],
    },
    showcase: {
      title: "All the useful bits. One platform.",
      tabs: [
        {
          key: "editor",
          label: "Editor",
          title: "Your code deserves more than a lonely text box.",
          description:
            "Build proper projects in MiniScript+, C++ or Python, connect GitHub and bring a teammate in with Live Share when two cursors are better than one.",
          points: ["Multi-language Monaco editor", "Project tree and GitHub", "Integrated run and terminal"],
        },
        {
          key: "learn",
          label: "Learning",
          title: "A roadmap that remembers where you are.",
          description:
            "Follow clear lessons, try a quiz, solve the next recommended problem and always know what makes sense to learn next.",
          points: ["Markdown lessons", "Interactive quizzes", "Data-driven language paths"],
        },
        {
          key: "workspaces",
          label: "Home",
          title: "Everything for school. Zero scavenger hunts.",
          description:
            "Upcoming work, recent learning and roadmap progress all meet on one student home—right where you expect them.",
          points: ["Weekly learning overview", "Upcoming assignments and deadlines", "Roadmap progress"],
        },
        {
          key: "planner",
          label: "Planner",
          title: "Give every deadline a place to live.",
          description:
            "Plan study sessions, classes and deadlines, then enjoy the tiny satisfaction of checking each one off.",
          points: ["Weekly schedule", "Tasks and study sessions", "Deadlines and completion states"],
        },
        {
          key: "notes",
          label: "Notes",
          title: "Save the “aha!” before it disappears.",
          description:
            "Keep algorithm explanations, code snippets and class notes organized beside the work that made them click.",
          points: ["Organized note folders", "Formatted text and code", "Shareable learning material"],
        },
        {
          key: "whiteboard",
          label: "Whiteboard",
          title: "Think messy. Make it make sense.",
          description:
            "Sketch the half-formed idea, move the pieces around and connect the steps until the solution finally looks obvious.",
          points: ["Freeform canvas", "Notes and connectors", "Visual problem planning"],
        },
        {
          key: "graphs",
          label: "Graphs",
          title: "Graphs are friendlier when you can poke them.",
          description:
            "Create vertices and edges, inspect the structure and watch an algorithm travel through it instead of only imagining it.",
          points: ["Interactive vertices and edges", "Graph properties", "Algorithm traversal"],
        },
        {
          key: "classes",
          label: "Classes",
          title: "One class. One tidy home.",
          description:
            "Teachers create the space, learners join with a code, and assignments, resources and progress stop wandering off on their own.",
          points: ["Create or join with an invitation code", "Assignments, resources and deadlines", "Student counts and average progress"],
        },
        {
          key: "problems",
          label: "Problems",
          title: "Run it. Break it. Learn why. Repeat. :D",
          description:
            "Write a solution, run the tests, read feedback that helps and keep your best score when everything finally turns green.",
          points: ["Difficulty and localized statements", "Integrated runner and test results", "Submission history and best score"],
        },
        {
          key: "teacherDashboard",
          label: "Dashboard",
          title: "The whole class, minus the spreadsheet maze.",
          description:
            "See active classes, average completion, upcoming deadlines and recent submissions without stitching the story together yourself.",
          points: ["Students and active classes", "Completion and assignment totals", "Deadlines and recent activity"],
        },
        {
          key: "students",
          label: "Students",
          title: "See who’s flying—and who needs a hand.",
          description:
            "Browse every learner across your classes, compare progress and open a profile when the numbers need a little context.",
          points: ["Cross-class student roster", "Individual completion progress", "Direct learner access"],
        },
        {
          key: "assignments",
          label: "Assignments & tests",
          title: "Assignments that don’t vanish into the void.",
          description:
            "Create classwork, filter it by status and follow deadlines, submitted solutions and completion rates from one clear view.",
          points: ["Upcoming, past-due and open-ended work", "Deadlines and class context", "Completion and solution counts"],
        },
        {
          key: "calendar",
          label: "Calendar",
          title: "Deadlines, finally behaving themselves.",
          description:
            "See every class deadline in one monthly view and jump straight to the assignment that needs attention.",
          points: ["Monthly class schedule", "Assignment deadlines and times", "Direct links to coursework"],
        },
        {
          key: "analytics",
          label: "Analytics",
          title: "Spot the wobble before it becomes a problem.",
          description:
            "Compare class progress, celebrate who is on track and find the learners who could use a well-timed nudge.",
          points: ["Overall and per-class completion", "Students above or below thresholds", "Needs-attention view"],
        },
        {
          key: "personalDashboard",
          label: "Dashboard",
          title: "Welcome back. We saved your spot.",
          description:
            "Your streak, reward points, solved problems and next activity are ready before you even ask, “where was I?”",
          points: ["Daily challenge and streak", "Reward points", "Learning and problem progress"],
        },
        {
          key: "search",
          label: "Search",
          title: "Type less. Find the useful thing.",
          description:
            "Search across ScripticX and jump straight into the problem, lesson or community space you actually wanted.",
          points: ["Unified platform search", "Filtered result types", "Direct links to results"],
        },
        {
          key: "collaboration",
          label: "Live Share",
          title: "Two cursors. One idea. Zero screen sharing.",
          description:
            "Start Live Share from the editor, invite the team and keep everyone in the same project while the code changes live.",
          points: ["Real-time code and project sync", "Participant presence", "Session links and invitations"],
        },
        {
          key: "groups",
          label: "Groups",
          title: "A good place for the “silly” question.",
          description:
            "Create public or private groups, add channels and keep the conversations, mentions and files your people need close by.",
          points: ["Public and private groups", "Channels, mentions and pinned messages", "Invitations, attachments and member roles"],
        },
        {
          key: "rewards",
          label: "Rewards",
          title: "Practice points, but make them yours.",
          description:
            "Earn points from problems and daily challenges, then spend them on profile items that make your progress look like yours.",
          points: ["Separate reward-points balance", "Frames, decorations, backgrounds and titles", "Inventory and equipped profile items"],
        },
        {
          key: "competitions",
          label: "Competitions",
          title: "A little pressure. A lot of progress.",
          description:
            "Join coding competitions, solve timed problems and watch the live leaderboard when the organizer turns it on.",
          points: ["Timed problem sets", "Saved submissions and best scores", "Live rankings and competition phases"],
        },
        {
          key: "leaderboard",
          label: "Leaderboard",
          title: "Friendly competition looks good on you.",
          description:
            "Compare points with the community and see how all those small, consistent practice sessions start to add up.",
          points: ["Community ranking", "Accumulated points", "Visible progress milestones"],
        },
        {
          key: "feed",
          label: "Feed",
          title: "Share the win. Pass the idea on.",
          description:
            "Post a milestone or a neat code discovery, then see what the rest of the ScripticX community is figuring out.",
          points: ["Community posts", "Learning and code updates", "Reactions and replies"],
        },
        {
          key: "documentation",
          label: "Documentation",
          title: "For when “I almost remember” isn’t enough.",
          description:
            "Look up MiniScript+ concepts, syntax and examples without losing the thread of what you were building.",
          points: ["Structured language reference", "Syntax examples", "Practical guidance"],
        },
        {
          key: "examples",
          label: "Examples",
          title: "Good code is easier to start with.",
          description:
            "Browse working examples by topic and difficulty, then open one in the editor and turn it into something of your own.",
          points: ["Examples by difficulty", "Multiple programming topics", "Open directly in the editor"],
        },
      ],
    },
    audiences: {
      switchLabel: "Pick your corner of ScripticX",
      tabs: {
        student: "For students",
        teacher: "For teachers",
        personal: "Personal",
      },
    },
    developmentSpotlight: {
      eyebrow: "ScripticX Development",
      title: "An idea is a good start. A clear process gets it built.",
      description:
        "We design and develop digital products for teams that want useful software and no mystery around the process—from the first free conversation to launch.",
      primary: "Discuss a project",
      secondary: "See how we work",
      carouselLabel: "Project process carousel",
      stepLabel: "Step",
      previous: "Previous step",
      next: "Next step",
      portalNote: "A dedicated client page keeps updates, files, approvals and decisions in one place.",
      steps: [
        {
          title: "Let’s talk",
          description: "We start with a free 30–45 minute conversation about the idea, audience, goal, budget and timing. You leave with a clearer next step, whether we work together or not.",
          update: "Goals, constraints and next steps",
          details: ["Goals & audience", "Constraints & timing", "Early product insights"],
        },
        {
          title: "Plan it clearly",
          description: "We turn the conversation into a clear scope: deliverables, exclusions, milestones, estimated timing and cost. Everything is written down before work begins.",
          update: "Scope, timing and pricing agreed",
          details: ["Scope & deliverables", "Timeline & milestones", "Proposal & pricing"],
        },
        {
          title: "Design & build",
          description: "After the proposal and contract are approved, we map the experience, design the interface and build in small, reviewable stages—with regular updates and feedback.",
          update: "Design and build reviews in progress",
          details: ["Kickoff & content", "UX, UI & prototype", "Development & reviews"],
        },
        {
          title: "Launch & grow",
          description: "We test the product across devices, prepare the release and hand over the documentation and access. Then we agree on the support that makes sense next.",
          update: "QA, launch and handover ready",
          details: ["QA & final approval", "Launch & handover", "Ongoing support"],
        },
      ],
    },
    gallery: {
      eyebrow: "No “sit still and just listen” required",
      title: "Workshops where curiosity gets to make things.",
      description:
        "Talk through the idea, test it, break it a little, fix it together. That’s when programming starts to stick.",
      action: "See how we learn",
      captions: ["Build it", "Figure it out together", "Celebrate the win", "Watch the idea run"],
    },
    cta: {
      eyebrow: "Now, what about you?",
      title: "Learn something. Build something. Surprise yourself.",
      description:
        "Open ScripticX and start exploring, or tell us about the idea you’d love to bring to life. We’re listening. :)",
      primary: "Start exploring",
      secondary: "Tell us your idea",
    },
  },
  ro: {
    hero: {
      eyebrow: "Învață · construiește · dă-i viață",
      title: "Ideile bune cresc în",
      accent: "abilități, produse și software util.",
      description:
        "Aici, curiozitatea devine cod, proiectele devin produse, iar ideile bune nu rămân doar în caiet. Învață, construiește sau vino cu următorul lucru care merită lansat. :)",
      primary: "Vezi ce construim",
      secondary: "Deschide ScripticX",
      scroll: "Derulează pentru a explora",
      visualLabel: "Spațiul de învățare ScripticX",
    },
    pillars: {
      eyebrow: "Cele trei direcții ScripticX",
      title: "Predăm. Facem design. Scriem cod.",
      description:
        "În spatele numelui sunt trei direcții distincte: Education Center, studioul nostru de dezvoltare software și o platformă de programare construită pentru elevi și profesori.",
      items: [
        {
          key: "education",
          number: "01",
          title: "Education Center",
          description:
            "Informatică și machine learning pentru minți curioase—cu explicații clare, workshop-uri practice și mentori care au mereu loc pentru încă un „de ce?”",
          href: "/education",
          action: "Intră în Education Center",
        },
        {
          key: "development",
          number: "02",
          title: "Development",
          description:
            "Tu vii cu ideea. Noi venim cu gândirea de produs, designul și codul—plus update-uri sincere pe tot parcursul.",
          href: "/development",
          action: "Construiește ceva cu noi",
        },
        {
          key: "platform",
          number: "03",
          title: "Platform",
          description:
            "Lecții, cod, clase, proiecte și comunitate într-un singur workspace bine pus la punct. Mai puține tab-uri pierdute, mai multe lucruri terminate.",
          href: "/platform",
          action: "Fă turul platformei",
        },
      ],
    },
    story: {
      eyebrow: "Un parcurs mai clar prin programare",
      title: "De la prima lecție la propriile proiecte de programare.",
      description:
        "Învață conceptele, exersează cu probleme reale, scrie cod în editorul ScripticX și continuă să crești prin clase, grupuri și competiții.",
      panelEyebrow: "Parcursul tău",
      items: [
        {
          label: "Învață",
          title: "Prinde ideea. Apoi fă-o a ta.",
          description:
            "Lecțiile clare, mentorii răbdători și workshop-urile practice transformă conceptele intimidante în lucruri pe care le poți explica mai departe.",
          metric: "Un loc pentru întrebări mai bune.",
          meta: "Informatică · Machine learning · Workshop-uri",
        },
        {
          label: "Exersează",
          title: "Exersează până când „stai, cum?” devine „gata, am prins!”",
          description:
            "Roadmap-urile, problemele interactive, quiz-urile și statisticile utile fac următorul pas clar pentru elevi și profesori.",
          metric: "Progres pe care îl poți vedea.",
          meta: "Probleme · Cursuri · Progres",
        },
        {
          label: "Scrie cod",
          title: "Transformă exercițiile în proiecte care funcționează.",
          description:
            "Scrie și rulează cod, organizează fișierele, conectează GitHub și colaborează prin Live Share—direct din workspace-ul tău de programare.",
          metric: "Un workspace pentru cod care merge mai departe.",
          meta: "Editor · GitHub · Live Share",
        },
        {
          label: "Crește",
          title: "Continuă, alături de ceilalți.",
          description:
            "Intră în clase și grupuri, participă la competiții și urmărește-ți progresul cu recompense care fac practica constantă mai plăcută.",
          metric: "Progresul e mai fain când îl împarți cu ceilalți.",
          meta: "Clase · Grupuri · Competiții",
        },
      ],
    },
    showcase: {
      title: "Toate lucrurile utile. O singură platformă.",
      tabs: [
        {
          key: "editor",
          label: "Editor",
          title: "Codul tău merită mai mult decât o casetă goală.",
          description:
            "Construiește proiecte adevărate în MiniScript+, C++ sau Python, conectează GitHub și cheamă un coleg în Live Share când două cursoare sunt mai bune decât unul.",
          points: ["Editor Monaco multi-limbaj", "Structură de proiect și GitHub", "Run și terminal integrate"],
        },
        {
          key: "learn",
          label: "Învățare",
          title: "Un roadmap care ține minte unde ai rămas.",
          description:
            "Urmează lecții clare, încearcă un quiz, rezolvă următoarea problemă recomandată și știi mereu ce are sens să înveți mai departe.",
          points: ["Lecții Markdown", "Quiz-uri interactive", "Trasee data-driven"],
        },
        {
          key: "workspaces",
          label: "Acasă",
          title: "Tot ce ține de școală. Fără vânătoare de tab-uri.",
          description:
            "Temele viitoare, activitatea recentă și progresul din roadmap se întâlnesc în aceeași pagină—exact unde te-ai aștepta.",
          points: ["Privire de ansamblu asupra săptămânii", "Teme și deadline-uri viitoare", "Progres în roadmap"],
        },
        {
          key: "planner",
          label: "Planner",
          title: "Fiecare deadline, la locul lui.",
          description:
            "Planifică sesiunile de studiu, clasele și deadline-urile, apoi bucură-te puțin de fiecare bifă pusă.",
          points: ["Program săptămânal", "Task-uri și sesiuni de studiu", "Deadline-uri și stări de completare"],
        },
        {
          key: "notes",
          label: "Notițe",
          title: "Salvează momentul „a-ha!” înainte să dispară.",
          description:
            "Ține explicațiile, fragmentele de cod și notițele de la clasă lângă exercițiul care le-a făcut să aibă sens.",
          points: ["Foldere pentru notițe", "Text formatat și cod", "Materiale de studiu partajabile"],
        },
        {
          key: "whiteboard",
          label: "Whiteboard",
          title: "Gândește dezordonat. Apoi fă ordine.",
          description:
            "Schițează ideea încă neclară, mută piesele și conectează pașii până când soluția începe să pară evidentă.",
          points: ["Canvas liber", "Notițe și conexiuni", "Planificare vizuală a soluției"],
        },
        {
          key: "graphs",
          label: "Grafuri",
          title: "Grafurile sunt mai prietenoase când le poți atinge.",
          description:
            "Creează noduri și muchii, inspectează structura și urmărește cum o parcurge algoritmul în loc să încerci doar să ți-o imaginezi.",
          points: ["Noduri și muchii interactive", "Proprietăți ale grafului", "Parcurgere vizuală"],
        },
        {
          key: "classes",
          label: "Clase",
          title: "O clasă. Un singur loc pentru tot.",
          description:
            "Profesorii creează spațiul, elevii intră cu un cod, iar temele, resursele și progresul nu mai pleacă fiecare în altă direcție.",
          points: ["Creare sau înscriere prin cod de invitație", "Teme, resurse și deadline-uri", "Număr de elevi și progres mediu"],
        },
        {
          key: "problems",
          label: "Probleme",
          title: "Rulează. Strică. Înțelege. Repetă. :D",
          description:
            "Scrie o soluție, rulează testele, citește feedbackul care chiar te ajută și păstrează cel mai bun scor când totul devine verde.",
          points: ["Dificultate și enunțuri localizate", "Runner și rezultate integrate", "Istoric de submisii și cel mai bun scor"],
        },
        {
          key: "teacherDashboard",
          label: "Dashboard",
          title: "Toată clasa, fără labirintul de spreadsheet-uri.",
          description:
            "Vezi clasele active, progresul mediu, deadline-urile viitoare și submisiile recente fără să legi singur toate piesele.",
          points: ["Elevi și clase active", "Progres și număr de teme", "Deadline-uri și activitate recentă"],
        },
        {
          key: "students",
          label: "Elevi",
          title: "Vezi cine zboară și cine are nevoie de o mână.",
          description:
            "Găsește fiecare elev din clasele tale, compară progresul și deschide profilul atunci când cifrele au nevoie de puțin context.",
          points: ["Listă de elevi din toate clasele", "Progres individual", "Acces direct la elev"],
        },
        {
          key: "assignments",
          label: "Teme și teste",
          title: "Teme care nu dispar într-un folder misterios.",
          description:
            "Creează activități, filtrează-le după stare și urmărește deadline-urile, soluțiile trimise și rata de completare dintr-un singur loc.",
          points: ["Teme viitoare, restante sau fără deadline", "Deadline-uri și contextul clasei", "Număr de soluții și progres"],
        },
        {
          key: "calendar",
          label: "Calendar",
          title: "Deadline-uri care, în sfârșit, stau cuminți.",
          description:
            "Vezi toate deadline-urile claselor într-un calendar lunar și sari direct la activitatea care are nevoie de atenție.",
          points: ["Program lunar pentru clase", "Deadline-uri și ore", "Acces direct la activități"],
        },
        {
          key: "analytics",
          label: "Analiză",
          title: "Observă blocajul înainte să devină o problemă.",
          description:
            "Compară progresul claselor, bucură-te pentru cei care țin pasul și găsește elevii cărora le-ar prinde bine un mic impuls.",
          points: ["Progres general și pe clase", "Elevi peste sau sub praguri", "Listă pentru intervenții"],
        },
        {
          key: "personalDashboard",
          label: "Dashboard",
          title: "Bine ai revenit. Ți-am păstrat locul.",
          description:
            "Seria de zile, punctele reward, problemele rezolvate și următoarea activitate sunt gata înainte să întrebi „unde rămăsesem?”",
          points: ["Daily challenge și streak", "Puncte reward", "Progres la lecții și probleme"],
        },
        {
          key: "search",
          label: "Căutare",
          title: "Scrie mai puțin. Găsește ce contează.",
          description:
            "Caută în toată platforma și sari direct la problema, lecția sau spațiul din comunitate pe care îl voiai de fapt.",
          points: ["Căutare unificată", "Filtre pe tipuri de rezultate", "Acces direct la rezultate"],
        },
        {
          key: "collaboration",
          label: "Live Share",
          title: "Două cursoare. O idee. Fără „dă share la ecran”.",
          description:
            "Pornește Live Share din editor, invită echipa și ține pe toată lumea în același proiect în timp ce codul se schimbă live.",
          points: ["Sincronizare live pentru cod și proiect", "Prezența participanților", "Linkuri de sesiune și invitații"],
        },
        {
          key: "groups",
          label: "Grupuri",
          title: "Locul bun pentru întrebarea „oare e prea simplă?”.",
          description:
            "Creează grupuri publice sau private, adaugă canale și ține aproape conversațiile, mențiunile și fișierele de care aveți nevoie.",
          points: ["Grupuri publice și private", "Canale, mențiuni și mesaje fixate", "Invitații, atașamente și roluri"],
        },
        {
          key: "rewards",
          label: "Recompense",
          title: "Exersezi. Câștigi. Îți faci profilul al tău.",
          description:
            "Câștigă puncte din probleme și daily challenges, apoi folosește-le pentru obiecte care fac profilul să semene mai mult cu tine.",
          points: ["Sold separat de puncte reward", "Rame, decorații, fundaluri și titluri", "Inventar și obiecte echipate pe profil"],
        },
        {
          key: "competitions",
          label: "Competiții",
          title: "Puțină presiune. Mult progres.",
          description:
            "Intră în competiții de programare, rezolvă probleme contra cronometru și urmărește clasamentul live când organizatorul îl pornește.",
          points: ["Seturi de probleme cronometrate", "Submisii salvate și cel mai bun scor", "Clasamente live și etape de concurs"],
        },
        {
          key: "leaderboard",
          label: "Clasament",
          title: "Competiția prietenoasă îți stă bine.",
          description:
            "Compară punctele cu restul comunității și vezi cum toate sesiunile mici și constante de practică încep să se adune.",
          points: ["Clasament al comunității", "Puncte acumulate", "Etape de progres vizibile"],
        },
        {
          key: "feed",
          label: "Feed",
          title: "Arată reușita. Dă ideea mai departe.",
          description:
            "Publică un milestone sau o descoperire simpatică din cod, apoi vezi ce mai descoperă restul comunității ScripticX.",
          points: ["Postări în comunitate", "Update-uri de învățare și cod", "Reacții și răspunsuri"],
        },
        {
          key: "documentation",
          label: "Documentație",
          title: "Pentru momentele de „știam eu că era ceva...”.",
          description:
            "Caută concepte, sintaxă și exemple MiniScript+ fără să pierzi firul lucrului pe care îl construiai.",
          points: ["Referință structurată a limbajului", "Exemple de sintaxă", "Recomandări practice"],
        },
        {
          key: "examples",
          label: "Exemple",
          title: "E mai ușor să începi de la cod care merge.",
          description:
            "Explorează exemple care rulează, după subiect și dificultate, apoi deschide unul în editor și transformă-l în ceva al tău.",
          points: ["Exemple după dificultate", "Mai multe subiecte de programare", "Deschidere directă în editor"],
        },
      ],
    },
    audiences: {
      switchLabel: "Alege colțul tău din ScripticX",
      tabs: {
        student: "Pentru elevi",
        teacher: "Pentru profesori",
        personal: "Personal",
      },
    },
    developmentSpotlight: {
      eyebrow: "ScripticX Development",
      title: "O idee e un început bun. Un proces clar o transformă în produs.",
      description:
        "Proiectăm și dezvoltăm produse digitale pentru echipe care vor software util și un proces fără mistere—de la prima discuție gratuită până la lansare.",
      primary: "Discută un proiect",
      secondary: "Vezi cum lucrăm",
      carouselLabel: "Caruselul procesului de proiect",
      stepLabel: "Etapa",
      previous: "Etapa anterioară",
      next: "Etapa următoare",
      portalNote: "O pagină dedicată clientului păstrează update-urile, fișierele, aprobările și deciziile într-un singur loc.",
      steps: [
        {
          title: "Povestim despre idee",
          description: "Începem cu o discuție gratuită de 30–45 de minute despre idee, public, obiectiv, buget și termen. Pleci cu un pas următor mai clar, indiferent dacă lucrăm împreună sau nu.",
          update: "Obiective, constrângeri și pașii următori",
          details: ["Obiective și public", "Constrângeri și termen", "Prime observații de produs"],
        },
        {
          title: "Stabilim planul",
          description: "Transformăm discuția într-un scope clar: livrabile, ce rămâne în afara proiectului, etape, durată estimată și cost. Totul este scris înainte să începem.",
          update: "Scope, calendar și preț stabilite",
          details: ["Scope și livrabile", "Calendar și etape", "Ofertă și preț"],
        },
        {
          title: "Proiectăm și construim",
          description: "După aprobarea ofertei și semnarea contractului, stabilim experiența, proiectăm interfața și dezvoltăm în etape ușor de verificat, cu update-uri și feedback regulate.",
          update: "Review-uri de design și development în curs",
          details: ["Kickoff și conținut", "UX, UI și prototip", "Development și review-uri"],
        },
        {
          title: "Lansăm și continuăm",
          description: "Testăm produsul pe mai multe dispozitive, pregătim lansarea și predăm documentația și accesul. Apoi stabilim împreună suportul potrivit pentru ce urmează.",
          update: "QA, lansare și predare pregătite",
          details: ["QA și aprobare finală", "Lansare și predare", "Suport ulterior"],
        },
      ],
    },
    gallery: {
      eyebrow: "Fără „stai cuminte și doar ascultă”",
      title: "Workshop-uri în care curiozitatea pune mâna pe tastatură.",
      description:
        "Discută ideea, testeaz-o, strică puțin lucrurile și repară-le împreună. Așa începe programarea să rămână cu tine.",
      action: "Vezi cum învățăm",
      captions: ["Construiește-l", "Descoperă împreună", "Sărbătorește reușita", "Privește ideea în acțiune"],
    },
    cta: {
      eyebrow: "Acum, tu ce zici?",
      title: "Învață ceva. Construiește ceva. Vezi cât de departe ajungi.",
      description:
        "Deschide ScripticX și începe să explorezi sau povestește-ne despre ideea pe care vrei s-o aduci la viață. Te ascultăm. :)",
      primary: "Începe să explorezi",
      secondary: "Spune-ne ideea ta",
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
      approach: {
        title: "How learning works",
        description: "Clear structure, deliberate practice and consistent feedback across everything we teach.",
        items: [
          {
            title: "Informatics",
            description: "Algorithms, data structures and problem-solving taught through clear progression and deliberate practice.",
            points: ["Programming foundations", "Algorithmic thinking", "Contest preparation"],
          },
          {
            title: "Machine learning",
            description: "A practical introduction to data, models and experimentation for learners ready for the next step.",
            points: ["Python and data", "Model building", "Applied projects"],
          },
          {
            title: "Workshops",
            description: "Hands-on sessions that make computing tangible through team activities, robots and small projects.",
            points: ["Free for participants", "Team activities", "Robotics and builds"],
          },
        ],
      },
    },
    development: {
      eyebrow: "ScripticX Development",
      title: "Digital products that stay useful.",
      description: "Product strategy, interface design and modern web engineering for organizations that value clarity and maintainability.",
      primary: "Discuss a project",
      secondary: "See our capabilities",
      highlights: ["Product and UX thinking", "Modern web engineering", "Practical technology consulting"],
      approach: {
        title: "How we can help",
        description: "Clear capabilities built around the outcome you need.",
        items: [
          {
            title: "Web services",
            description: "Fast, accessible websites and web applications built around real product goals.",
            points: ["Company websites", "Web applications", "Modernization"],
          },
          {
            title: "Product design",
            description: "Clear systems, interfaces and prototypes that reduce friction for users and teams.",
            points: ["UX architecture", "Interface design", "Design systems"],
          },
          {
            title: "IT consulting",
            description: "Architecture, implementation planning and technical support for digital initiatives.",
            points: ["Technical discovery", "Architecture", "Delivery support"],
          },
        ],
      },
    },
    platform: {
      eyebrow: "ScripticX Platform",
      title: "Learn, build and teach in one workspace.",
      description: "Courses, problems, projects, notes, classes and collaboration tools brought into one focused programming environment.",
      primary: "Open ScripticX Platform",
      secondary: "Explore the platform",
      highlights: ["Learn through lessons, roadmaps and problems", "Build projects directly in the browser", "Manage classes, assignments and progress"],
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
      approach: {
        title: "Cum învățăm",
        description: "Structură clară, practică intenționată și feedback constant în tot ce predăm.",
        items: [
          {
            title: "Informatică",
            description: "Algoritmi, structuri de date și problem solving predate prin progresie clară și practică intenționată.",
            points: ["Bazele programării", "Gândire algoritmică", "Pregătire pentru concursuri"],
          },
          {
            title: "Machine learning",
            description: "O introducere practică în date, modele și experimentare pentru elevii pregătiți de pasul următor.",
            points: ["Python și date", "Construirea modelelor", "Proiecte aplicate"],
          },
          {
            title: "Workshop-uri",
            description: "Sesiuni practice care fac informatica tangibilă prin activități de echipă, roboți și proiecte mici.",
            points: ["Gratuit pentru participanți", "Activități de echipă", "Robotică și proiecte"],
          },
        ],
      },
    },
    development: {
      eyebrow: "ScripticX Development",
      title: "Produse digitale care rămân utile.",
      description: "Strategie de produs, design de interfață și inginerie web modernă pentru organizații care apreciază claritatea și mentenanța.",
      primary: "Discută un proiect",
      secondary: "Vezi capabilitățile",
      highlights: ["Gândire de produs și UX", "Inginerie web modernă", "Consultanță tehnică practică"],
      approach: {
        title: "Cum putem ajuta",
        description: "Servicii clare, construite în jurul rezultatului de care ai nevoie.",
        items: [
          {
            title: "Servicii web",
            description: "Website-uri și aplicații rapide și accesibile, construite în jurul unor obiective reale.",
            points: ["Website-uri", "Aplicații web", "Modernizare"],
          },
          {
            title: "Product design",
            description: "Sisteme, interfețe și prototipuri clare care reduc fricțiunea pentru utilizatori și echipe.",
            points: ["Arhitectură UX", "Design de interfață", "Design systems"],
          },
          {
            title: "Consultanță IT",
            description: "Arhitectură, planificarea implementării și suport tehnic pentru inițiative digitale.",
            points: ["Descoperire tehnică", "Arhitectură", "Suport pentru livrare"],
          },
        ],
      },
    },
    platform: {
      eyebrow: "Platforma ScripticX",
      title: "Învață, construiește și predă într-un singur workspace.",
      description: "Cursuri, probleme, proiecte, notițe, clase și instrumente de colaborare reunite într-un mediu concentrat de programare.",
      primary: "Deschide platforma ScripticX",
      secondary: "Explorează platforma",
      highlights: ["Învață prin lecții, roadmap-uri și probleme", "Construiește proiecte direct în browser", "Gestionează clase, teme și progres"],
      services: [
        { title: "Învață", description: "Urmează roadmap-uri structurate, citește lecții interactive și exersează cu probleme potrivite traseului tău.", href: "https://platform.scripticx.org/roadmap" },
        { title: "Construiește", description: "Creează proiecte complete cu fișiere, foldere, GitHub, execuție și editor Monaco modern.", href: "https://platform.scripticx.org/editor" },
        { title: "Predă", description: "Gestionează clase, teme, proiecte, teste, calendare și progresul elevilor dintr-un singur workspace.", href: "https://platform.scripticx.org/teacher" },
      ],
    },
  },
} as const;
