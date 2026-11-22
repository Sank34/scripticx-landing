import { teamMembers } from "@/config/team";
import { siteConfig } from "@/lib/metadata";

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}

/** Locale-independent JSON-LD @id, shared by the Organization and each profile page. */
export function getPersonId(slug: string) {
  return `${siteConfig.url}/members/${slug}#person`;
}
