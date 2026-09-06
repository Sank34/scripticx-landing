import type { MarketingLocale } from "@/lib/marketing-content";

export type EventCategory = "workshop" | "course" | "activity" | "competition";

export type ScripticxEvent = {
  id: string;
  link: string;
  startAt: string;
  endAt?: string;
  category: EventCategory;
  image?: string;
  imageFit?: "cover" | "contain";
  imageBackground?: string;
  modalImage?: string;
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
const eventSignupForm = "https://forms.gle/BeEBV9FJf9XKt36Z6";

export const DEFAULT_EVENT_IMAGE = "/default-event.png";
export const DEFAULT_EVENT_MODAL_IMAGE = "/scripticx-bg.png";

const eventSources: readonly EventSource[] = [
  {
    id: "hacktoberfest-mlh-2026",
    link: "", // The dedicated registration link is still to be supplied.
    // Month bounds are for calendar grouping and expiry, not a confirmed event date.
    startAt: "2026-10-01T00:00:00+03:00",
    endAt: "2026-10-31T23:59:59+02:00",
    category: "competition",
    image: "/hacktoberfest-2026.png",
    imageFit: "contain",
    imageBackground: "#3d5e58",
    modalImage: "/hacktoberfest-bg.webp",
    content: {
      en: {
        eyebrow: "One-day hackathon · MLH",
        dateLabel: "October 2026 · Date TBA",
        title: "Hacktoberfest with MLH",
        summary: "A one-day open-source hackathon with MLH, open to anyone from the Galați–Brăila metropolitan area.",
        description: "Join ScripticX and MLH at BJPIBR for a one-day Hacktoberfest hackathon focused on building open-source projects, collaborating and learning together. Anyone from the Galați–Brăila metropolitan area can register. The exact date and full programme will be announced soon.",
        location: "BJPIBR",
        audience: "Anyone from the Galați–Brăila metropolitan area",
        highlights: [
          "One-day hackathon with MLH",
          "Build and collaborate on open-source projects",
          "Open registration for the metropolitan area",
        ],
      },
      ro: {
        eyebrow: "Hackathon de o zi · MLH",
        dateLabel: "Octombrie 2026 · Data va fi anunțată",
        title: "Hacktoberfest cu MLH",
        summary: "Un hackathon open-source de o zi, organizat alături de MLH și deschis oricui din zona metropolitană Galați–Brăila.",
        description: "Participă alături de ScripticX și MLH la BJPIBR la un hackathon Hacktoberfest de o zi, dedicat construirii de proiecte open-source, colaborării și învățării. Se poate înscrie oricine din zona metropolitană Galați–Brăila. Data exactă și programul complet vor fi anunțate în curând.",
        location: "BJPIBR",
        audience: "Oricine din zona metropolitană Galați–Brăila",
        highlights: [
          "Hackathon de o zi alături de MLH",
          "Construim și colaborăm la proiecte open-source",
          "Înscrieri deschise pentru zona metropolitană",
        ],
      },
    },
  },
  {
    id: "scripticx-competition-november-2026",
    link: "https://platform.scripticx.org",
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
    startAt: "2026-09-14T09:00:00+03:00",
    endAt: "2026-10-02T18:00:00+03:00",
    category: "workshop",
    content: {
      en: {
        eyebrow: "Intro to algorithms",
        title: "ScripticX Back to School",
        summary:
          "Three weeks of introductory algorithms, with dedicated groups for middle school and ninth-grade students.",
        description:
          "An introductory algorithms workshop held four days a week from 14 September to 2 October. The middle-school group will work in MiniScript+, while ninth-grade students will connect the same ideas across MiniScript+ and Python. Each session combines clear explanations with guided practice and practical exercises.",
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
          "Trei săptămâni de algoritmică introductivă, cu grupe dedicate elevilor de gimnaziu și celor de clasa a IX-a.",
        description:
          "Un workshop introductiv de algoritmică, organizat patru zile pe săptămână în perioada 14 septembrie – 2 octombrie. Grupa de gimnaziu va lucra în MiniScript+, iar elevii de clasa a IX-a vor conecta aceleași idei în MiniScript+ și Python. Fiecare întâlnire combină explicațiile clare cu exerciții practice și lucru ghidat.",
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
    id: "back-to-school-final-group-1-2026",
    link: "https://platform.scripticx.org",
    // October bounds keep the TBA event in the correct calendar section.
    startAt: "2026-10-03T00:00:00+03:00",
    endAt: "2026-10-31T23:59:59+02:00",
    category: "competition",
    content: {
      en: {
        eyebrow: "Back to School final competition",
        dateLabel: "October 2026 · Date TBA",
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
        dateLabel: "Octombrie 2026 · Data va fi anunțată",
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
    link: "https://platform.scripticx.org",
    // October bounds keep the TBA event in the correct calendar section.
    startAt: "2026-10-03T00:00:01+03:00",
    endAt: "2026-10-31T23:59:59+02:00",
    category: "competition",
    content: {
      en: {
        eyebrow: "Back to School final competition",
        dateLabel: "October 2026 · Date TBA",
        title: "Back to School Final · Group 2",
        summary:
          "The final competition for the ninth-grade group, hosted on the ScripticX platform.",
        description:
          "The ninth-grade group concludes ScripticX Back to School with a final online competition. Participants will solve algorithmic challenges that connect the ideas practised in MiniScript+ and Python throughout the workshop.",
        location: "Online · ScripticX platform",
        audience: "Back to School · 9th-grade group",
        highlights: [
          "Final challenges for Group 2",
          "Algorithms in MiniScript+ and Python",
          "Competition hosted on ScripticX",
        ],
      },
      ro: {
        eyebrow: "Competiția finală Back to School",
        dateLabel: "Octombrie 2026 · Data va fi anunțată",
        title: "Finala Back to School · Grupa 2",
        summary:
          "Competiția finală pentru grupa de clasa a IX-a, organizată pe platforma ScripticX.",
        description:
          "Grupa de clasa a IX-a încheie ScripticX Back to School cu o competiție finală online. Participanții vor rezolva provocări de algoritmică ce conectează ideile exersate în MiniScript+ și Python pe parcursul workshop-ului.",
        location: "Online · Platforma ScripticX",
        audience: "Back to School · Grupa de clasa a IX-a",
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

export function getEvents(locale: MarketingLocale): ScripticxEvent[] {
  return eventSources.map(({ content, ...event }) => ({
    ...event,
    ...content[locale],
  }));
}

export function isUpcomingEvent(event: ScripticxEvent, now: Date) {
  return new Date(event.endAt ?? event.startAt).getTime() >= now.getTime();
}

export function isOngoingEvent(event: ScripticxEvent, now: Date) {
  // A bounded, confirmed interval is required. Month-level TBA placeholders
  // stay upcoming, but must not look like an event that is currently running.
  if (!event.endAt || event.dateLabel) return false;

  const currentTime = now.getTime();
  const startTime = new Date(event.startAt).getTime();
  const endTime = new Date(event.endAt).getTime();

  return currentTime >= startTime && currentTime <= endTime;
}

export function sortEvents(events: ScripticxEvent[], direction: "ascending" | "descending") {
  return [...events].sort((first, second) => {
    const difference = new Date(first.startAt).getTime() - new Date(second.startAt).getTime();
    return direction === "ascending" ? difference : -difference;
  });
}
