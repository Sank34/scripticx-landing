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

export interface EducationRoadmapStage {
  label: string;
  description: string;
}

export type EducationGroup = {
  roadmapStage: EducationRoadmapStage;
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
  tracks: Record<
    EducationTrackKey,
    {
      description: string;
    }
  >;
};

export type EducationContent = {
  program: {
    eyebrow: string;
    title: string;
    description: string;
    subjects: Array<{ title: string; description: string; topics: string[] }>;
  };
  groups: EducationGroupsContent;
  roadmap: EducationRoadmapContent;
  activities: {
    eyebrow: string;
    title: string;
    description: string;
    eventsLabel: string;
    openLabel: string;
    galleryLabel: string;
    items: ActivityDetail[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    contact: string;
    items: Array<{
      title: string;
      price: string;
      cadence: string;
      description: string;
      features: string[];
    }>;
  };
};
