export type TeamMember = {
  slug: string;
  name: string;
  roles: readonly string[];
  image: string;
  email?: string;
  linkedin?: string;
};

export const teamMembers: readonly TeamMember[] = [
  {
    slug: "eric-littau",
    name: "Eric Littau",
    roles: ["communications", "problemWriting"],
    image: "/team/Eric-Littau-new.jpg",
    email: "eric@scripticx.org",
  },
  {
    slug: "catalina-nedelea",
    name: "Catalina Nedelea",
    roles: ["marketing", "finance"],
    image: "/team/Catalina-Nedelea.jpg",
    email: "catalina@scripticx.org",
    linkedin: "https://www.linkedin.com/in/c%C4%83t%C4%83lina-ioana-nedelea-a6928a426/"
  },
  {
    slug: "andrei-lascu",
    name: "Andrei Lascu",
    roles: ["development", "publicRelationsEvents", "designScientific"],
    image: "/team/Andrei-Lascu-new.png",
    email: "sanke@scripticx.org",
    linkedin: "https://www.linkedin.com/in/andrei-lascu-ba561a371/"
  },
  {
    slug: "maia-pricop",
    name: "Maia Pricop",
    roles: ["development", "uiuxScientific"],
    image: "/team/Maia-Pricop-new.jpg",
    email: "maia@scripticx.org",
    linkedin: "https://www.linkedin.com/in/maia-pricop-669271320/"
  },
  {
    slug: "andreea-bobotan",
    name: "Andreea Bobotan",
    roles: ["uiuxResearch", "events"],
    image: "/team/Andreea-Bobotan-new.jpg",
    email: "bobtan.andreea@cngmm.ro"
  },
  {
    slug: "daria-serban",
    name: "Daria Serban",
    roles: ["graphics", "uiux"],
    image: "/team/Daria-Serban.png",
    email: "tiredf0x36@gmail.com"
  },
];

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
