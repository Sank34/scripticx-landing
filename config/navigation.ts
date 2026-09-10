export const navigationItems = [
  { href: "/education", key: "education" },
  { href: "/development", key: "development" },
  { href: "/platform", key: "platform" },
  { href: "/events", key: "events" },
  { href: "/partners", key: "partners" },
  { href: "/knowledge", key: "resources" },
  { href: "/blog", key: "blog" },
] as const;

export const footerGroups = [
  {
    key: "company",
    links: [
      { key: "about", href: "/#company" },
      { key: "education", href: "/education" },
      { key: "events", href: "/events" },
      { key: "development", href: "/development" },
      { key: "platform", href: "/platform" },
      { key: "team", href: "/#team" },
      { key: "partners", href: "/partners" },
    ],
  },
  {
    key: "resources",
    links: [
      { key: "knowledge", href: "/knowledge" },
      { key: "blog", href: "/blog" },
      { key: "docs", href: "/docs" },
      { key: "trust", href: "/trust" },
      { key: "verify", href: "/verify" },
    ],
  },
  {
    key: "legal",
    links: [
      { key: "privacy", href: "/legal/privacy" },
      { key: "terms", href: "/legal/terms" },
      { key: "cookies", href: "/legal/cookies" },
      { key: "acceptableUse", href: "/legal/acceptable-use" },
    ],
  },
] as const;
