import { links } from "@/config/links";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/LocalizedLink";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import Footer from "@/components/Footer";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { absoluteUrl, createPageMetadata, localizedPath, siteConfig } from "@/lib/metadata";
import { getPersonId, getTeamMember } from "@/lib/team-data";
import { teamMembers } from "@/config/team";

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
  const translate = await getTranslations("Team");
  const roles = member.roles.map((role) => translate(`roles.${role}`));
  const title = `${member.name} · ${roles.slice(0, 2).join(", ")}`;
  const description = translate("profile.metaDescription", {
    name: member.name,
    roles: roles.join(", "),
    bio: translate(`members.${member.slug}.bio`),
  });

  return createPageMetadata({
    locale,
    path: `/members/${member.slug}`,
    title: {
      en: title,
      ro: title,
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

  const locale = (await getLocale()) === "ro" ? "ro" : "en";
  const translate = await getTranslations("Team");
  const otherMembers = teamMembers.filter((candidate) => candidate.slug !== member.slug);
  const emailHref = member.email
    ? `mailto:${member.email}`
    : `${links.contact}?member=${member.slug}`;

  const profileUrl = absoluteUrl(localizedPath(`/members/${member.slug}`, locale));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": profileUrl,
    url: profileUrl,
    name: member.name,
    inLanguage: locale,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: {
      "@type": "Person",
      "@id": getPersonId(member.slug),
      name: member.name,
      url: profileUrl,
      image: absoluteUrl(member.image),
      jobTitle: member.roles.map((role) => translate(`roles.${role}`)).join(", "),
      description: translate(`members.${member.slug}.bio`),
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      ...(member.linkedin && { sameAs: [member.linkedin] }),
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
                {translate("profile.back")}
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
                <p className="text-sm font-medium text-muted-foreground">{translate("profile.eyebrow")}</p>
                <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  {member.name}
                </h1>

                <div className="mt-7 flex flex-wrap gap-2">
                  {member.roles.map((role) => (
                    <span key={role} className="rounded-full border bg-background px-3 py-1.5 text-sm text-muted-foreground">
                      {translate(`roles.${role}`)}
                    </span>
                  ))}
                </div>

                <div className="mt-10 max-w-2xl border-t pt-8">
                  <h2 className="text-sm font-medium">{translate("profile.about")}</h2>
                  <p className="mt-4 text-pretty text-lg leading-8 text-muted-foreground">
                    {translate(`members.${member.slug}.bio`)}
                  </p>
                </div>

                <div className="mt-auto pt-12">
                  <div className="border-t pt-8">
                    <h2 className="text-sm font-medium">{translate("profile.contact")}</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button asChild>
                        <Link href={emailHref}>
                          <Mail />
                          {member.email ? translate("email") : translate("contactMember")}
                        </Link>
                      </Button>
                      {member.linkedin && (
                        <Button variant="outline" asChild>
                          <Link href={member.linkedin} target="_blank" rel="noreferrer">
                            <LinkedInIcon className="size-4" />
                            {translate("linkedin")}
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

        <section className="border-b py-12 sm:py-14">
          <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
              {translate("profile.teamTitle")}
            </h2>

            <ul className="mt-6 grid border-l border-t sm:grid-cols-2 lg:grid-cols-5">
              {otherMembers.map((candidate) => (
                <li key={candidate.slug} className="border-b border-r">
                  <Link
                    href={`/members/${candidate.slug}`}
                    className="group flex h-full items-center gap-3 bg-background p-3 transition-colors hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                  >
                    <div className="relative size-12 shrink-0 overflow-hidden bg-muted">
                      <Image
                        src={candidate.image}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover object-top grayscale transition-[filter] duration-500 group-hover:grayscale-0 motion-reduce:transition-none"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{candidate.name}</p>
                      <p className="truncate text-xs leading-5 text-muted-foreground">
                        {translate(`roles.${candidate.roles[0]}`)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
