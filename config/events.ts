import type { EventDefinition } from "../types/events.ts";
import { links } from "./links.ts";

export const eventSettings = {
  timeZone: "Europe/Bucharest",
  defaultImage: "/scripticx-bg.png",
  refreshIntervalMilliseconds: 60_000,
};

const workshopRoot = "/events/workshops/programming-1-3-july-26";
const eventSignupForm = "https://forms.gle/BeEBV9FJf9XKt36Z6";

export const events: readonly EventDefinition[] = [
  // {
  //   id: "hacktoberfest-mlh-2026",
  //   link: "", // The dedicated registration link is still to be supplied.
  //   // Month bounds are for calendar grouping and expiry, not a confirmed event date.
  //   startAt: "2026-10-01T00:00:00+03:00",
  //   endAt: "2026-10-31T23:59:59+02:00",
  //   category: "competition",
  //   image: "/hacktoberfest-2026.png",
  //   imageFit: "contain",
  //   imageBackground: "#3d5e58",
  //   modalImage: "/hacktoberfest-bg.webp",
  //   content: {
  //     en: {
  //       eyebrow: "One-day hackathon · MLH",
  //       dateLabel: "October 2026 · Date TBA",
  //       title: "Hacktoberfest with MLH",
  //       summary:
  //         "A one-day open-source hackathon with MLH, open to anyone from the Galați–Brăila metropolitan area.",
  //       description:
  //         "Join ScripticX and MLH at BJPIBR for a one-day Hacktoberfest hackathon focused on building open-source projects, collaborating and learning together. Anyone from the Galați–Brăila metropolitan area can register. The exact date and full programme will be announced soon.",
  //       location: "BJPIBR",
  //       audience: "Anyone from the Galați–Brăila metropolitan area",
  //       highlights: [
  //         "One-day hackathon with MLH",
  //         "Build and collaborate on open-source projects",
  //         "Open registration for the metropolitan area",
  //       ],
  //     },
  //     ro: {
  //       eyebrow: "Hackathon de o zi · MLH",
  //       dateLabel: "Octombrie 2026 · Data va fi anunțată",
  //       title: "Hacktoberfest cu MLH",
  //       summary:
  //         "Un hackathon open-source de o zi, organizat alături de MLH și deschis oricui din zona metropolitană Galați–Brăila.",
  //       description:
  //         "Participă alături de ScripticX și MLH la BJPIBR la un hackathon Hacktoberfest de o zi, dedicat construirii de proiecte open-source, colaborării și învățării. Se poate înscrie oricine din zona metropolitană Galați–Brăila. Data exactă și programul complet vor fi anunțate în curând.",
  //       location: "BJPIBR",
  //       audience: "Oricine din zona metropolitană Galați–Brăila",
  //       highlights: [
  //         "Hackathon de o zi alături de MLH",
  //         "Construim și colaborăm la proiecte open-source",
  //         "Înscrieri deschise pentru zona metropolitană",
  //       ],
  //     },
  //   },
  // },
  {
    id: "scripticx-competition-november-2026",
    link: links.platform,
    // Month bounds are for calendar grouping and expiry while the date is TBA.
    startAt: "2026-11-01T00:00:00+02:00",
    endAt: "2026-11-30T23:59:59+02:00",
    category: "competition",
    content: {
      en: {
        eyebrow: "Programming competition",
        dateLabel: "November 2026 · Date TBA",
        title: "ScripticX Competition TBA",
        summary:
          "A new programming competition is coming to the ScripticX platform. The full format and schedule will be announced soon.",
        description:
          "We are preparing a programming competition on the ScripticX platform, where participants will solve challenges and put their algorithmic thinking to the test. We will share the complete format, rules and schedule soon.",
        location: "Online · ScripticX platform",
        audience: "Students / Learners",
        highlights: [
          "Programming challenges on the platform",
          "Algorithms and problem solving",
          "Format and schedule coming soon",
        ],
      },
      ro: {
        eyebrow: "Competiție de programare",
        dateLabel: "Noiembrie 2026 · Data va fi anunțată",
        title: "ScripticX Competition TBA",
        summary:
          "Pregătim o nouă competiție de programare pe platforma ScripticX. Formatul complet și programul vor fi anunțate în curând.",
        description:
          "Organizăm o competiție de programare pe platforma ScripticX, unde participanții vor rezolva provocări și își vor pune la încercare gândirea algoritmică. Vom anunța în curând formatul complet, regulamentul și programul.",
        location: "Online · Platforma ScripticX",
        audience: "Elevi pasionați de programare",
        highlights: [
          "Provocări de programare pe platformă",
          "Algoritmică și rezolvare de probleme",
          "Formatul și programul vor fi anunțate",
        ],
      },
    },
  },
  {
    id: "scripticx-back-to-school-2026",
    link: eventSignupForm,
    startAt: "2026-10-05T09:00:00+03:00",
    endAt: "2026-10-24T18:00:00+03:00",
    category: "workshop",
    content: {
      en: {
        eyebrow: "Intro to algorithms",
        title: "ScripticX Back to School",
        summary:
          "Three weeks of introductory algorithms, with dedicated groups for middle-school and high-school students.",
        description:
          "An introductory algorithms workshop held three days a week from 5 to 24 October. The middle-school group will work in MiniScript+, while the high-school group will study MiniScript+ and Python. The updated curriculum includes Python for this year's high-school entrants and future cohorts.",
        location: "BJPIBR",
        audience: "Two groups: middle school and high school",
        highlights: [
          "Three workshop days each week",
          "Middle school group · MiniScript+",
          "High-school group · MiniScript+ and Python",
        ],
      },
      ro: {
        eyebrow: "Introducere în algoritmică",
        title: "ScripticX Back to School",
        summary:
          "Trei săptămâni de algoritmică introductivă, cu grupe dedicate elevilor de gimnaziu și liceu.",
        description:
          "Un workshop introductiv de algoritmică, organizat trei zile pe săptămână în perioada 5–24 octombrie. Grupa de gimnaziu va lucra în MiniScript+, iar grupa de liceu va studia MiniScript+ și Python, conform programei actualizate pentru elevii care au început liceul anul acesta și promoțiile viitoare.",
        location: "BJPIBR",
        audience: "Două grupe: gimnaziu și liceu",
        highlights: [
          "Trei zile de workshop pe săptămână",
          "Grupa de gimnaziu · MiniScript+",
          "Liceu · MiniScript+ și Python",
        ],
      },
    },
  },
  {
    id: "back-to-school-final-group-1-2026",
    link: links.platform,
    startAt: "2026-10-24T00:00:00+03:00",
    endAt: "2026-10-24T23:59:59+03:00",
    category: "competition",
    content: {
      en: {
        eyebrow: "Back to School final competition",
        dateLabel: "24 October 2026",
        title: "Back to School Final · Group 1",
        summary:
          "The final competition for the middle-school group, hosted on the ScripticX platform.",
        description:
          "The middle-school group concludes ScripticX Back to School with a final online competition. Participants will solve introductory algorithmic challenges in MiniScript+ and put into practice what they learned throughout the workshop.",
        location: "Online · ScripticX platform",
        audience: "Back to School · Middle-school group",
        highlights: [
          "Final challenges for Group 1",
          "Introductory algorithms in MiniScript+",
          "Competition hosted on ScripticX",
        ],
      },
      ro: {
        eyebrow: "Competiția finală Back to School",
        dateLabel: "24 octombrie 2026",
        title: "Finala Back to School · Grupa 1",
        summary:
          "Competiția finală pentru grupa de gimnaziu, organizată pe platforma ScripticX.",
        description:
          "Grupa de gimnaziu încheie ScripticX Back to School cu o competiție finală online. Participanții vor rezolva provocări introductive de algoritmică în MiniScript+ și vor aplica noțiunile învățate pe parcursul workshop-ului.",
        location: "Online · Platforma ScripticX",
        audience: "Back to School · Grupa de gimnaziu",
        highlights: [
          "Provocări finale pentru Grupa 1",
          "Algoritmică introductivă în MiniScript+",
          "Competiție organizată pe ScripticX",
        ],
      },
    },
  },
  {
    id: "back-to-school-final-group-2-2026",
    link: links.platform,
    startAt: "2026-10-24T00:00:00+03:00",
    endAt: "2026-10-24T23:59:59+03:00",
    category: "competition",
    content: {
      en: {
        eyebrow: "Back to School final competition",
        dateLabel: "24 October 2026",
        title: "Back to School Final · Group 2",
        summary:
          "The final competition for the high-school group, hosted on the ScripticX platform.",
        description:
          "The high-school group concludes ScripticX Back to School with a final online competition. Participants will solve algorithmic challenges that connect the ideas practised in MiniScript+ and Python throughout the workshop.",
        location: "Online · ScripticX platform",
        audience: "Back to School · High-school group",
        highlights: [
          "Final challenges for Group 2",
          "Algorithms in MiniScript+ and Python",
          "Competition hosted on ScripticX",
        ],
      },
      ro: {
        eyebrow: "Competiția finală Back to School",
        dateLabel: "24 octombrie 2026",
        title: "Finala Back to School · Grupa 2",
        summary:
          "Competiția finală pentru grupa de liceu, organizată pe platforma ScripticX.",
        description:
          "Grupa de liceu încheie ScripticX Back to School cu o competiție finală online. Participanții vor rezolva provocări de algoritmică ce conectează ideile exersate în MiniScript+ și Python pe parcursul workshop-ului.",
        location: "Online · Platforma ScripticX",
        audience: "Back to School · Liceu",
        highlights: [
          "Provocări finale pentru Grupa 2",
          "Algoritmică în MiniScript+ și Python",
          "Competiție organizată pe ScripticX",
        ],
      },
    },
  },
  {
    id: "miniscript-workshop-july-2026",
    link: eventSignupForm,
    startAt: "2026-07-01T09:00:00+03:00",
    endAt: "2026-07-03T17:00:00+03:00",
    category: "workshop",
    image: `${workshopRoot}/IMG_1180.jpg`,
    gallery: [
      `${workshopRoot}/IMG_1029.jpg`,
      `${workshopRoot}/IMG_1003.jpg`,
      `${workshopRoot}/IMG_1094.jpg`,
      `${workshopRoot}/IMG_1137.jpg`,
      `${workshopRoot}/IMG_1174.jpg`,
      `${workshopRoot}/IMG_1178.jpg`,
    ],
    content: {
      en: {
        eyebrow: "Programming workshop",
        title: "MiniScript+ Programming Workshop",
        summary:
          "Three hands-on days of programming, algorithms and playful experiments with a LEGO robot.",
        description:
          "Children learned programming foundations with MiniScript+, explored the ScripticX platform and tested their algorithms with a small LEGO robot. CS Unplugged activities made the core ideas easier to see before they became code.",
        location: "BJPIBR",
        audience: "Middle school children, ages 10–14",
        highlights: [
          "Programming foundations in MiniScript+",
          "CS Unplugged team activities",
          "Algorithms tested on a LEGO robot",
        ],
      },
      ro: {
        eyebrow: "Workshop de programare",
        title: "Workshop de programare MiniScript+",
        summary:
          "Trei zile practice cu programare, algoritmi și experimente jucăușe pe un roboțel LEGO.",
        description:
          "Copiii au învățat bazele programării cu MiniScript+, au explorat platforma ScripticX și și-au testat algoritmii pe un roboțel LEGO. Activitățile CS Unplugged au făcut ideile de bază mai ușor de înțeles înainte să devină cod.",
        location: "BJPIBR",
        audience: "Copii de gimnaziu, cu vârste între 10 și 14 ani",
        highlights: [
          "Bazele programării în MiniScript+",
          "Activități CS Unplugged în echipă",
          "Algoritmi testați pe un roboțel LEGO",
        ],
      },
    },
  },
];
