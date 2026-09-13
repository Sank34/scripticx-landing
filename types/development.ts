export type DevelopmentContent = {
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      key: string;
      title: string;
      description: string;
      points: string[];
    }>;
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    openLabel: string;
    showcaseEyebrow: string;
    scopeLabel: string;
    techStackLabel: string;
    visitLabel: string;
    items: Array<{
      key: string;
      name: string;
      domain: string;
      category: string;
      year: string;
      description: string;
      overview: string;
      capabilities: Array<{ title: string; description: string }>;
      scope: string[];
      techStack: string[];
      cover?: string;
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      number: string;
      title: string;
      description: string;
      note: string;
    }>;
  };
  portal: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    mock: {
      project: string;
      status: string;
      milestone: string;
      update: string;
      invoice: string;
    };
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
  fit: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
};
