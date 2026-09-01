import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import Footer from "@/components/Footer";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";
import { getTeamMember, teamMembers } from "@/lib/team-data";

type MemberPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: MemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    return {};
  }

  const locale = await getLocale();
  const t = await getTranslations("Team");
  const description = t(`members.${member.slug}.bio`);

  return createPageMetadata({
    locale,
    path: `/members/${member.slug}`,
    title: {
      en: member.name,
      ro: member.name,
    },
    description: {
      en: description,
      ro: description,
    },
  });
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    notFound();
  }

  const t = await getTranslations("Team");
  const otherMembers = teamMembers.filter((candidate) => candidate.slug !== member.slug);
  const emailHref = member.email
    ? `mailto:${member.email}`
    : `https://platform.scripticx.org/contact?member=${member.slug}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        <section className="relative overflow-hidden border-b">
          <div className="sx-grid-fade absolute inset-0 -z-20" aria-hidden="true" />
          <div className="sx-hero-aura absolute inset-x-0 top-0 -z-10 h-[44rem]" aria-hidden="true" />
          <div className="mx-auto max-w-[var(--sx-max-content)] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <Reveal>
              <Link
                href="/#team"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                {t("profile.back")}
              </Link>
            </Reveal>

            <div className="mt-8 grid items-stretch border-l border-t bg-background lg:grid-cols-[0.92fr_1.08fr]">
              <Reveal className="border-b border-r p-3 sm:p-5" distance={16}>
                <div className="relative min-h-[28rem] h-full overflow-hidden bg-muted sm:min-h-[38rem]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.08} className="flex min-h-full flex-col border-b border-r p-6 sm:p-10 lg:p-14" distance={16}>
                <p className="text-sm font-medium text-muted-foreground">{t("profile.eyebrow")}</p>
                <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  {member.name}
                </h1>

                <div className="mt-7 flex flex-wrap gap-2">
                  {member.roles.map((role) => (
                    <span key={role} className="rounded-full border bg-background px-3 py-1.5 text-sm text-muted-foreground">
                      {t(`roles.${role}`)}
                    </span>
                  ))}
                </div>

                <div className="mt-10 max-w-2xl border-t pt-8">
                  <h2 className="text-sm font-medium">{t("profile.about")}</h2>
                  <p className="mt-4 text-pretty text-lg leading-8 text-muted-foreground">
                    {t(`members.${member.slug}.bio`)}
                  </p>
                </div>

                <div className="mt-auto pt-12">
                  <div className="border-t pt-8">
                    <h2 className="text-sm font-medium">{t("profile.contact")}</h2>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                      {member.email || member.linkedin
                        ? t("profile.contactDescription")
                        : t("profile.contactFallback")}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Button asChild>
                        <Link href={emailHref}>
                          <Mail />
                          {member.email ? t("email") : t("contactMember")}
                        </Link>
                      </Button>
                      {member.linkedin && (
                        <Button variant="outline" asChild>
                          <Link href={member.linkedin} target="_blank" rel="noreferrer">
                            <LinkedInIcon className="size-4" />
                            {t("linkedin")}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b py-20 sm:py-24">
          <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <p className="text-sm font-medium text-muted-foreground">{t("profile.teamEyebrow")}</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                {t("profile.teamTitle")}
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                {t("profile.teamDescription")}
              </p>
            </Reveal>

            <div className="mt-12 grid border-l border-t sm:grid-cols-2 lg:grid-cols-5">
              {otherMembers.map((candidate, index) => (
                <Reveal key={candidate.slug} delay={index * 0.05} className="h-full" distance={14}>
                  <Link
                    href={`/members/${candidate.slug}`}
                    className="group flex h-full flex-col border-b border-r bg-background p-3 transition-colors hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                  >
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={candidate.image}
                        alt={candidate.name}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                        className="will-change-transform object-cover object-top grayscale transition-[filter,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:grayscale-0 motion-reduce:transition-none"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-3 px-1 pb-2 pt-4">
                      <div>
                        <h3 className="font-medium">{candidate.name}</h3>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {candidate.roles.slice(0, 2).map((role) => t(`roles.${role}`)).join(" · ")}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
