export type TeamMember = {
  slug: string;
  name: string;
  roles: readonly string[];
  image: string;
  email?: string;
  linkedin?: string;
};
