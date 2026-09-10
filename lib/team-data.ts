import { teamMembers } from "@/config/team";

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
