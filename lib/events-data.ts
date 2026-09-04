import type { MarketingLocale } from "@/lib/marketing-content";

export type EventCategory = "workshop" | "course" | "activity" | "competition";

export type ScripticxEvent = {
  id: string;
  link: string;
  startAt: string;
  endAt?: string;
  category: EventCategory;
  image?: string;
  gallery?: readonly string[];
  title: string;
  eyebrow: string;
  dateLabel?: string;
  summary: string;
  description: string;
  location: string;
  audience: string;
  highlights: readonly string[];
};

type LocalizedEventContent = Pick<
  ScripticxEvent,
  | "title"
  | "eyebrow"
  | "dateLabel"
  | "summary"
  | "description"
  | "location"
  | "audience"
  | "highlights"
>;

type EventSource = Omit<ScripticxEvent, keyof LocalizedEventContent> & {
  content: Record<MarketingLocale, LocalizedEventContent>;
};

const workshopRoot = "/events/workshops/programming-1-3-july-26";
const eventSignupForm = "https://forms.gle/T1sqKSPVyMzpYDSV9";

export const DEFAULT_EVENT_IMAGE = "/default-event.png";
export const DEFAULT_EVENT_MODAL_IMAGE = "/scripticx-bg.png";

const eventSources: readonly EventSource[] = [
  {
    id: "scripticx-competition-october-2026",
    link: "https://platform.scripticx.org",
    startAt: "2026-10-01T09:00:00+03:00",
    category: "competition",
    content: {
      en: {
        eyebrow: "Programming competition",
        dateLabel: "October 2026 · Date TBA",
        title: "ScripticX Competition TBA",
        summary:
          "A new programming competition is coming to the ScripticX platform. The full format and schedule will be announced soon.",
        description:
          "We are preparing a programming competition on the ScripticX platform, where participants will solve challenges and put their algorithmic thinking to the test. We will share the complete format, rules and schedule soon.",
        location: "Online · ScripticX platform",
        audience: "Students passionate about programming",
        highlights: [
          "Programming challenges on the platform",
          "Algorithms and problem solving",
          "Format and schedule coming soon",
        ],
      },
      ro: {
        eyebrow: "Competiție de programare",
        dateLabel: "Octombrie 2026 · Data va fi anunțată",
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
    startAt: "2026-09-14T09:00:00+03:00",
    endAt: "2026-09-25T18:00:00+03:00",
    category: "workshop",
    content: {
      en: {
        eyebrow: "Intro to algorithms",
        title: "ScripticX Back to School",
        summary:
          "Two weeks of introductory algorithms, with dedicated groups for middle school and ninth-grade students.",
        description:
          "An introductory algorithms workshop held four days a week from 14 to 25 September. The middle-school group will work in MiniScript+, while ninth-grade students will connect the same ideas across MiniScript+ and Python. Each session combines clear explanations with guided practice and practical exercises.",
        location: "BJPIBR",
        audience: "Two groups: middle school and 9th grade",
        highlights: [
          "Four workshop days each week",
          "Middle school group · MiniScript+",
          "9th grade group · MiniScript+ and Python",
        ],
      },
      ro: {
        eyebrow: "Introducere în algoritmică",
        title: "ScripticX Back to School",
        summary:
          "Două săptămâni de algoritmică introductivă, cu grupe dedicate elevilor de gimnaziu și celor de clasa a IX-a.",
        description:
          "Un workshop introductiv de algoritmică, organizat patru zile pe săptămână în perioada 14–25 septembrie. Grupa de gimnaziu va lucra în MiniScript+, iar elevii de clasa a IX-a vor conecta aceleași idei în MiniScript+ și Python. Fiecare întâlnire combină explicațiile clare cu exerciții practice și lucru ghidat.",
        location: "BJPIBR",
        audience: "Două grupe: gimnaziu și clasa a IX-a",
        highlights: [
          "Patru zile de workshop pe săptămână",
          "Grupa de gimnaziu · MiniScript+",
          "Clasa a IX-a · MiniScript+ și Python",
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

export function getEvents(locale: MarketingLocale): ScripticxEvent[] {
  return eventSources.map(({ content, ...event }) => ({
    ...event,
    ...content[locale],
  }));
}

export function isUpcomingEvent(event: ScripticxEvent, now: Date) {
  return new Date(event.endAt ?? event.startAt).getTime() >= now.getTime();
}

export function sortEvents(events: ScripticxEvent[], direction: "ascending" | "descending") {
  return [...events].sort((first, second) => {
    const difference = new Date(first.startAt).getTime() - new Date(second.startAt).getTime();
    return direction === "ascending" ? difference : -difference;
  });
}
