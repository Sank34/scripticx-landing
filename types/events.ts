export type EventCategory = "workshop" | "course" | "activity" | "competition";

export interface EventDetails {
  title: string;
  eyebrow: string;
  dateLabel?: string;
  summary: string;
  description: string;
  location: string;
  audience: string;
  highlights: readonly string[];
}

export interface EventSchedule {
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
}

export interface EventDefinition extends EventSchedule {
  content: {
    en: EventDetails;
    ro: EventDetails;
  };
}

export interface ScripticxEvent extends EventSchedule, EventDetails {}
