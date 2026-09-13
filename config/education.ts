import type { EducationContent } from "../types/education.ts";
import type { SiteLocale } from "./languages.ts";

const workshopGallery = [
  "/events/workshops/programming-1-3-july-26/IMG_1003.jpg",
  "/events/workshops/programming-1-3-july-26/IMG_1094.jpg",
  "/events/workshops/programming-1-3-july-26/IMG_1137.jpg",
  "/events/workshops/programming-1-3-july-26/IMG_1174.jpg",
];

export const educationContent: Record<SiteLocale, EducationContent> = {
  en: {
    program: {
      eyebrow: "Preparation that grows with the learner",
      title: "Informatics taught through understanding, practice and feedback.",
      description:
        "We work with children and teenagers in small groups, adapting the pace to their experience. Concepts are explained clearly, tested through exercises and consolidated in projects.",
      subjects: [
        {
          title: "Understand the idea",
          description:
            "We begin with a clear explanation, examples and questions until the concept makes sense.",
          topics: [
            "Step-by-step explanations",
            "Visual and CS Unplugged activities",
            "Room for every “why?”",
          ],
        },
        {
          title: "Practise with guidance",
          description:
            "Exercises grow gradually in difficulty, while the mentor helps the learner find—not copy—the solution.",
          topics: [
            "Problems matched to the current level",
            "Hints and discussion when needed",
            "Reasoning before memorisation",
          ],
        },
        {
          title: "Build, get feedback, improve",
          description:
            "Projects and regular evaluations show what is understood, what needs work and what comes next.",
          topics: [
            "Practical and project-based work",
            "Code review and clear feedback",
            "Regular progress evaluation",
          ],
        },
      ],
    },
    groups: {
      eyebrow: "Groups and schedule",
      title: "Preparation groups that grow with the learner.",
      description:
        "Choose the learning track, then the group that matches the learner's current level. Cohorts are formed by experience and objective—not only by age.",
      switchLabel: "Choose a preparation track",
      tabs: { informatics: "Informatics", machineLearning: "Machine learning" },
      contact: "Ask about this group",
      includesLabel: "The group includes",
      scheduleNote: "The final timetable is agreed with each cohort.",
      tracks: {
        informatics: [
          {
            title: "School & BAC preparation",
            badge: "Coming soon",
            audience: "Beginner track",
            format: "MiniScript+ · C++ / Python",
            schedule: "RON 50",
            duration: "Price per week · includes 2 preparation sessions",
            description:
              "Follows the school curriculum and builds the programming foundations needed for class and the BAC exam.",
            features: [
              "School curriculum and CS Unplugged activities",
              "Separate beginner and advanced cohorts",
              "Applied algorithms and problem sets",
              "Standardised progress checks",
            ],
            roadmapStage: {
              label: "Build the foundations",
              description:
                "Explore logic through CS Unplugged, then follow the school curriculum in MiniScript+ and C++ or Python. Beginner and advanced cohorts work at their own pace.",
            },
          },
          {
            title: "Applied Computer Science",
            badge: "Coming soon",
            audience: "Intermediate track",
            format: "MiniScript+ · Python",
            schedule: "RON 70",
            duration: "Price per week · includes 2 preparation sessions",
            description:
              "Moves from advanced programming foundations to practical work inspired by real IT environments.",
            features: [
              "Advanced foundations, including OOP",
              "Choose web, game development or cybersecurity",
              "Applied algorithms and project work",
              "Regular course-based evaluation",
            ],
            featured: true,
            roadmapStage: {
              label: "Apply your skills",
              description:
                "Develop stronger programming foundations, including OOP, then choose web development, game development or cybersecurity and learn through applied projects.",
            },
          },
          {
            title: "Advanced Algorithms",
            badge: "Coming soon",
            audience: "Advanced track",
            format: "MiniScript+ · Python / C++",
            schedule: "RON 70",
            duration: "Price per week · includes 2 preparation sessions",
            description:
              "A deeper algorithms route for learners ready to study advanced computer science concepts.",
            features: [
              "Advanced algorithms and CS concepts",
              "Optional architecture, embedded or new-language track",
              "Applied problems and project work",
              "Regular course-based evaluation",
            ],
            roadmapStage: {
              label: "Go deeper into algorithms",
              description:
                "Study advanced algorithms and computer science concepts through applied problems. Optional directions include processor architecture, embedded programming or another language.",
            },
          },
        ],
        machineLearning: [
          {
            title: "Introduction to ML",
            badge: "Coming soon",
            audience: "Beginner track",
            format: "MiniScript+ · Python",
            schedule: "RON 50",
            duration: "Price per week · includes 2 preparation sessions",
            description:
              "A friendly introduction to programming, Python and the core ideas behind machine learning.",
            features: [
              "Programming and CS Unplugged activities",
              "Python foundations and an introduction to ML",
              "Problems, practical applications and projects",
              "Regular course-based evaluation",
            ],
            roadmapStage: {
              label: "Meet programming and ML",
              description:
                "Start with CS Unplugged, MiniScript+ and Python, then explore the core ideas of machine learning through problems, practical applications and small projects.",
            },
          },
          {
            title: "Advanced Machine Learning",
            badge: "Coming soon",
            audience: "Advanced track",
            format: "Python",
            schedule: "RON 70",
            duration: "Price per week · includes 2 preparation sessions",
            description:
              "Builds on Intro to ML with advanced algorithms, model mathematics and a specialisation chosen by the learner.",
            features: [
              "Intro ML material plus advanced algorithms",
              "Choose NLP, CV, LLMs, DL or RL",
              "Mathematics and statistics behind the models",
              "Learn to write your first research paper in LaTeX / Markdown",
              "Projects and regular evaluation",
            ],
            featured: true,
            roadmapStage: {
              label: "Understand and explore models",
              description:
                "Explore advanced algorithms and the mathematics and statistics behind models. Choose NLP, computer vision, LLMs, deep learning or RL, and learn to write your first research paper in LaTeX or Markdown.",
            },
          },
          {
            title: "Applied Machine Learning",
            badge: "Coming soon",
            audience: "Advanced track",
            format: "Python · C++ · MiniScript+ Robotics",
            schedule: "RON 70",
            duration: "Price per week · includes 2 preparation sessions",
            description:
              "A robotics-focused route combining machine learning models with hardware and embedded systems.",
            features: [
              "Computer vision, deep learning, RL and an optional paper",
              "Robotics with Arduino and embedded programming",
              "MiniScript+ Robotics concepts and programming",
              "Applied algorithms, RL robotics, projects and evaluation",
            ],
            roadmapStage: {
              label: "Connect models to robots",
              description:
                "Apply computer vision, deep learning and RL through Arduino, embedded programming and MiniScript+ Robotics. Build and evaluate practical projects; a research paper is optional.",
            },
          },
        ],
      },
    },
    roadmap: {
      eyebrow: "Learning roadmap",
      title: "Different goals. A clear path forward.",
      description:
        "Start with the group that fits your experience and what you want to learn. These are possible directions, not a checklist of groups everyone must complete.",
      practiceTitle: "Practice and feedback at every level.",
      practiceDescription:
        "Guided exercises, practical work and regular evaluations are part of the whole course. We use that feedback to revisit concepts, build confidence and decide what comes next.",
      tracks: {
        informatics: {
          description:
            "With the foundations in place, you can build practical software or go deeper into algorithms, depending on your goals and experience.",
        },
        machineLearning: {
          description:
            "Start with programming and ML foundations, then explore advanced models or put them to work in robotics.",
        },
      },
    },
    activities: {
      eyebrow: "Activities",
      title: "Learning also happens away from the worksheet.",
      description:
        "With the support of our partners, we organise free workshops, courses and hands-on activities where learners can explore, experiment and build together.",
      eventsLabel: "See events",
      openLabel: "View activity",
      galleryLabel: "Activity gallery",
      items: [
        {
          id: "workshops",
          title: "Workshops & courses",
          description:
            "Hands-on workshops and courses that make programming, machine learning and robotics approachable.",
          longDescription:
            "Our workshops and courses combine clear explanations with guided practice. Learners explore programming, machine learning and robotics through exercises and small projects, with mentors there to answer questions and help them progress.",
          cover: workshopGallery[2],
          gallery: workshopGallery,
          meta: ["Small groups", "Hands-on", "Guided feedback"],
        },
        {
          id: "competitions",
          title: "Competitions",
          description:
            "Programming challenges that put algorithmic thinking and coding skills to the test.",
          longDescription:
            "Our programming competitions give learners a chance to apply what they know, tackle new problems and test their solutions. The event calendar provides the format, schedule and participation details for each competition.",
          cover: workshopGallery[1],
          gallery: [workshopGallery[1], workshopGallery[0], workshopGallery[3]],
          meta: ["Algorithms", "Problem solving", "Programming"],
        },
        {
          id: "events",
          title: "Events",
          description:
            "Hackathons, meetups and conferences for building ideas, sharing knowledge and meeting other curious minds.",
          longDescription:
            "From building together at a hackathon to exchanging ideas at meetups and conferences, these events bring people with a shared interest in computing together. Explore the calendar to see what is coming up and how to take part.",
          cover: workshopGallery[3],
          gallery: [workshopGallery[3], workshopGallery[2], workshopGallery[1]],
          meta: ["Hackathons", "Meetups", "Conferences"],
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Simple pricing, based on level.",
      description:
        "Every group meets twice a week. We confirm the right track and final timetable before enrolment.",
      contact: "Ask about availability",
      items: [
        {
          title: "Beginner groups",
          price: "RON 50",
          cadence: "Per week",
          description:
            "For introductory informatics and machine learning cohorts.",
          features: [
            "2 sessions included each week",
            "Course-aligned problems and projects",
            "Regular progress evaluation",
          ],
        },
        {
          title: "Intermediate & advanced groups",
          price: "RON 70",
          cadence: "Per week",
          description:
            "For applied computer science, advanced algorithms, machine learning and robotics cohorts.",
          features: [
            "2 sessions included each week",
            "Advanced or specialised curriculum",
            "Projects and regular evaluation",
          ],
        },
      ],
    },
  },
  ro: {
    program: {
      eyebrow: "Pregătire care crește odată cu elevul",
      title: "Informatică predată prin înțelegere, practică și feedback.",
      description:
        "Lucrăm cu copii și adolescenți în grupe mici, adaptând ritmul la experiența lor. Conceptele sunt explicate clar, testate prin exerciții și consolidate în proiecte.",
      subjects: [
        {
          title: "Înțelegi ideea",
          description:
            "Începem cu explicații clare, exemple și întrebări până când conceptul capătă sens.",
          topics: [
            "Explicații pas cu pas",
            "Exemple vizuale și activități CS Unplugged",
            "Loc pentru fiecare „de ce?”",
          ],
        },
        {
          title: "Exersezi cu ghidare",
          description:
            "Problemele cresc treptat în dificultate, iar mentorul te ajută să găsești soluția, nu să o copiezi.",
          topics: [
            "Probleme potrivite nivelului actual",
            "Indicii și discuții când ai nevoie",
            "Raționament înainte de memorare",
          ],
        },
        {
          title: "Construiești și îmbunătățești",
          description:
            "Proiectele și evaluările regulate arată ce ai înțeles, ce mai exersezi și care este următorul pas.",
          topics: [
            "Lucru practic și proiecte",
            "Code review și feedback clar",
            "Evaluarea periodică a progresului",
          ],
        },
      ],
    },
    groups: {
      eyebrow: "Grupe și program",
      title: "Grupe de pregătire care cresc odată cu elevul.",
      description:
        "Alege traseul de învățare, apoi grupa potrivită nivelului actual. Grupele sunt formate în funcție de experiență și obiectiv, nu doar de vârstă.",
      switchLabel: "Alege traseul de pregătire",
      tabs: { informatics: "Informatică", machineLearning: "Machine learning" },
      contact: "Întreabă despre grupă",
      includesLabel: "Grupa include",
      scheduleNote: "Programul final este stabilit împreună cu fiecare grupă.",
      tracks: {
        informatics: [
          {
            title: "BAC & materia de la clasă",
            badge: "Coming soon",
            audience: "Traseu pentru începători",
            format: "MiniScript+ · C++ / Python",
            schedule: "50 lei",
            duration: "Preț pe săptămână · include 2 ședințe de pregătire",
            description:
              "Urmează programa școlară și construiește bazele necesare pentru materia de la clasă și examenul de BAC.",
            features: [
              "Programă școlară și activități CS Unplugged",
              "Grupe separate pentru începători și avansați",
              "Probleme și algoritmică aplicată",
              "Evaluare standardizată a progresului",
            ],
            roadmapStage: {
              label: "Construiești bazele",
              description:
                "Descoperi logica prin CS Unplugged, apoi urmezi programa școlară în MiniScript+ și C++ sau Python. Grupele de începători și avansați lucrează în ritmul lor.",
            },
          },
          {
            title: "Applied Computer Science",
            badge: "Coming soon",
            audience: "Traseu intermediar",
            format: "MiniScript+ · Python",
            schedule: "70 lei",
            duration: "Preț pe săptămână · include 2 ședințe de pregătire",
            description:
              "Pornește de la bazele avansate ale programării și ajunge la lucru practic inspirat din industria IT.",
            features: [
              "Baze avansate, inclusiv OOP",
              "Track la alegere: web, game development sau cybersecurity",
              "Algoritmică aplicată și proiecte",
              "Evaluare periodică pe parcursul cursului",
            ],
            featured: true,
            roadmapStage: {
              label: "Pui ideile în practică",
              description:
                "Aprofundezi programarea, inclusiv OOP, apoi alegi web development, game development sau cybersecurity și înveți prin proiecte aplicate.",
            },
          },
          {
            title: "Advanced Algorithms",
            badge: "Coming soon",
            audience: "Traseu avansat",
            format: "MiniScript+ · Python / C++",
            schedule: "70 lei",
            duration: "Preț pe săptămână · include 2 ședințe de pregătire",
            description:
              "Un traseu aprofundat de algoritmică pentru elevii pregătiți să studieze concepte avansate de informatică.",
            features: [
              "Algoritmică și concepte avansate",
              "Track opțional: arhitectură, embedded sau un limbaj nou",
              "Probleme aplicate și proiecte",
              "Evaluare periodică pe parcursul cursului",
            ],
            roadmapStage: {
              label: "Aprofundezi algoritmica",
              description:
                "Studiezi algoritmi și concepte avansate prin probleme aplicate. Poți explora opțional arhitectura procesoarelor, programarea embedded sau un alt limbaj.",
            },
          },
        ],
        machineLearning: [
          {
            title: "Introducere în ML",
            badge: "Coming soon",
            audience: "Traseu pentru începători",
            format: "MiniScript+ · Python",
            schedule: "50 lei",
            duration: "Preț pe săptămână · include 2 ședințe de pregătire",
            description:
              "O introducere prietenoasă în programare, Python și ideile de bază din spatele machine learning-ului.",
            features: [
              "Programare și activități CS Unplugged",
              "Bazele Python și introducere în ML",
              "Probleme, aplicații practice și proiecte",
              "Evaluare periodică pe parcursul cursului",
            ],
            roadmapStage: {
              label: "Descoperi programarea și ML",
              description:
                "Începi cu CS Unplugged, MiniScript+ și Python, apoi explorezi ideile de bază din machine learning prin probleme, aplicații practice și proiecte mici.",
            },
          },
          {
            title: "Advanced Machine Learning",
            badge: "Coming soon",
            audience: "Traseu avansat",
            format: "Python",
            schedule: "70 lei",
            duration: "Preț pe săptămână · include 2 ședințe de pregătire",
            description:
              "Continuă materia din Intro ML cu algoritmi avansați, matematica modelelor și o specializare aleasă de elev.",
            features: [
              "Materia din Intro ML și algoritmi avansați",
              "Specializare: NLP, CV, LLMs, DL sau RL",
              "Matematica și statistica din spatele modelelor",
              "Înveți să scrii primul articol de cercetare în LaTeX / Markdown",
              "Proiecte și evaluare periodică",
            ],
            featured: true,
            roadmapStage: {
              label: "Înțelegi și explorezi modele",
              description:
                "Explorezi algoritmi avansați, matematica și statistica din spatele modelelor. Alegi NLP, computer vision, LLMs, deep learning sau RL și înveți să scrii primul articol de cercetare în LaTeX sau Markdown.",
            },
          },
          {
            title: "Applied Machine Learning",
            badge: "Coming soon",
            audience: "Traseu avansat",
            format: "Python · C++ · MiniScript+ Robotics",
            schedule: "70 lei",
            duration: "Preț pe săptămână · include 2 ședințe de pregătire",
            description:
              "Un traseu axat pe robotică, unde modelele ML sunt conectate cu hardware și sisteme embedded.",
            features: [
              "Computer vision, deep learning, RL și paper opțional",
              "Robotică cu Arduino și embedded programming",
              "Concepte și programare prin MiniScript+ Robotics",
              "Algoritmică aplicată, robotică RL, proiecte și evaluare",
            ],
            roadmapStage: {
              label: "Conectezi modelele cu roboții",
              description:
                "Aplici computer vision, deep learning și RL folosind Arduino, programare embedded și MiniScript+ Robotics. Construiești și evaluezi proiecte practice; lucrarea de cercetare este opțională.",
            },
          },
        ],
      },
    },
    roadmap: {
      eyebrow: "Roadmap de învățare",
      title: "Obiective diferite. Un traseu clar mai departe.",
      description:
        "Pornești din grupa potrivită experienței tale și lucrurilor pe care vrei să le înveți. Acestea sunt direcții posibile, nu o listă de grupe pe care trebuie să le parcurgi pe rând.",
      practiceTitle: "Practică și feedback la fiecare nivel.",
      practiceDescription:
        "Exercițiile ghidate, aplicațiile practice și evaluările periodice fac parte din întregul curs. Pe baza feedbackului, reluăm conceptele neclare, consolidăm ce ai învățat și alegem următorul pas.",
      tracks: {
        informatics: {
          description:
            "După ce construiești bazele, poți crea aplicații practice sau aprofunda algoritmica, în funcție de experiența și obiectivele tale.",
        },
        machineLearning: {
          description:
            "Pornești de la programare și bazele ML, apoi explorezi modele avansate sau le pui la lucru în robotică.",
        },
      },
    },
    activities: {
      eyebrow: "Activități",
      title: "Învățarea continuă și în afara fișei de lucru.",
      description:
        "Cu sprijinul partenerilor noștri, organizăm gratuit workshop-uri, cursuri și activități practice în care elevii pot explora, experimenta și construi împreună.",
      eventsLabel: "Vezi evenimentele",
      openLabel: "Vezi activitatea",
      galleryLabel: "Galeria activității",
      items: [
        {
          id: "workshops",
          title: "Workshop-uri și cursuri",
          description:
            "Workshop-uri și cursuri practice care fac programarea, machine learning-ul și robotica mai ușor de înțeles.",
          longDescription:
            "Workshop-urile și cursurile noastre combină explicații clare cu practică ghidată. Elevii explorează programarea, machine learning-ul și robotica prin exerciții și proiecte mici, cu mentori care le răspund la întrebări și îi ajută să progreseze.",
          cover: workshopGallery[2],
          gallery: workshopGallery,
          meta: ["Grupe mici", "Practic", "Feedback ghidat"],
        },
        {
          id: "competitions",
          title: "Competiții",
          description:
            "Provocări de programare care pun la încercare gândirea algoritmică și abilitățile de coding.",
          longDescription:
            "Competițiile noastre de programare le oferă elevilor ocazia să aplice ce au învățat, să abordeze probleme noi și să-și testeze soluțiile. Formatul, programul și detaliile de participare sunt prezentate în calendarul fiecărei competiții.",
          cover: workshopGallery[1],
          gallery: [workshopGallery[1], workshopGallery[0], workshopGallery[3]],
          meta: ["Algoritmică", "Rezolvare de probleme", "Programare"],
        },
        {
          id: "events",
          title: "Evenimente",
          description:
            "Hackathoane, meetup-uri și conferințe pentru idei noi, schimb de cunoștințe și oameni cu aceeași pasiune.",
          longDescription:
            "De la proiecte construite împreună la hackathoane până la discuții la meetup-uri și conferințe, aceste evenimente aduc laolaltă oameni pasionați de informatică. Consultă calendarul pentru a vedea ce urmează și cum poți participa.",
          cover: workshopGallery[3],
          gallery: [workshopGallery[3], workshopGallery[2], workshopGallery[1]],
          meta: ["Hackathoane", "Meetup-uri", "Conferințe"],
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Tarife simple, în funcție de nivel.",
      description:
        "Fiecare grupă are două ședințe pe săptămână. Confirmăm traseul potrivit și programul final înainte de înscriere.",
      contact: "Întreabă despre locuri",
      items: [
        {
          title: "Grupe pentru începători",
          price: "50 lei",
          cadence: "Pe săptămână",
          description:
            "Pentru grupele introductive de informatică și machine learning.",
          features: [
            "2 ședințe incluse pe săptămână",
            "Probleme și proiecte adaptate cursului",
            "Evaluare periodică a progresului",
          ],
        },
        {
          title: "Grupe intermediare și avansate",
          price: "70 lei",
          cadence: "Pe săptămână",
          description:
            "Pentru applied computer science, algoritmică avansată, machine learning și robotică.",
          features: [
            "2 ședințe incluse pe săptămână",
            "Curriculum avansat sau specializat",
            "Proiecte și evaluare periodică",
          ],
        },
      ],
    },
  },
};
