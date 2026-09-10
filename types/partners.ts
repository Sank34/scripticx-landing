export type PartnerCategory =
  "education" | "community" | "creative" | "sponsor";

export interface Partner {
  name: string;
  shortName: string;
  logo: string;
  url: string;
  type: PartnerCategory;
}

export type SponsorshipContent = {
  eyebrow: string;
  title: string;
  description: string;
  switchLabel: string;
  tabs: { financial: string; inKind: string };
  includesLabel: string;
  action: string;
  note: string;
  tiers: readonly {
    title: string;
    amount: string;
    cadence: string;
    description: string;
    badge?: string;
    featured?: boolean;
    features: readonly string[];
  }[];
  inKind: {
    title: string;
    description: string;
    items: readonly {
      title: string;
      description: string;
      features: readonly string[];
    }[];
  };
};

export type PartnersContent = {
  metadata: { title: string; description: string };
  home: { eyebrow: string; title: string; description: string; action: string };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  directory: {
    eyebrow: string;
    title: string;
    description: string;
    visit: string;
    types: Record<PartnerCategory, string>;
  };
  collaboration: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { number: string; title: string; description: string }[];
  };
  sponsorship: SponsorshipContent;
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly { title: string; description: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly { number: string; title: string; description: string }[];
    action: string;
    secondary: string;
  };
};
