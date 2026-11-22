import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import Footer from "@/components/Footer";
import Link from "@/components/LocalizedLink";
import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/config/about";
import { getSiteLocale } from "@/config/languages";
import { links } from "@/config/links";
import { partners } from "@/config/partners";
import { teamMembers } from "@/config/team";
import { formatEventDate } from "@/lib/event-dates";
import { getEvents, hasConfirmedDate } from "@/lib/events-data";
import { absoluteUrl, createPageMetadata, localizedPath, siteConfig } from "@/lib/metadata";
import { JsonLd, organizationId, websiteId } from "@/lib/structured-data";
import { getTeamMember } from "@/lib/team-data";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata({
    locale,
    path: "/about",
    title: { en: aboutContent.en.metadata.title, ro: aboutContent.ro.metadata.title },
    description: {
      en: aboutContent.en.metadata.description,
      ro: aboutContent.ro.metadata.description,
    },
  });
}

const sectionTitle = "text-2xl font-semibold tracking-[-0.03em] sm:text-3xl";
const sectionLead = "mt-3 max-w-2xl text-pretty text-base leading-7 text-muted-foreground";
const textLink = "font-medium underline decoration-foreground/30 underline-offset-4 transition hover:decoration-foreground";

export default async function AboutPage() {
  const locale = getSiteLocale(await getLocale());
  const content = aboutContent[locale];
  const founder = getTeamMember(siteConfig.organization.founderSlug)!;
  const organizedEvents = getEvents(locale)
    .filter(hasConfirmedDate)
    .sort((a, b) => b.startAt.localeCompare(a.startAt));

  const pageUrl = absoluteUrl(localizedPath("/about", locale));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": pageUrl,
          url: pageUrl,
          name: content.metadata.title,
          description: content.metadata.description,
          inLanguage: locale,
          isPartOf: { "@id": websiteId },
          mainEntity: { "@id": organizationId },
        }}
      />
      <main className="pt-16">
        <section className="border-b">
          <div className="mx-auto max-w-[var(--sx-max-content)] px-4 pb-14 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
            <Reveal>
              <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
              <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {content.title}
              </h1>
              <p className="mt-8 max-w-3xl text-pretty text-xl leading-9 sm:text-2xl sm:leading-10">
                {siteConfig.definitions[locale]}
              </p>
            </Reveal>

            <dl className="mt-12 grid border-l border-t sm:grid-cols-3">
              <div className="border-b border-r p-5">
                <dt className="text-sm text-muted-foreground">{content.facts.founded}</dt>
                <dd className="mt-1 text-lg font-medium">{content.facts.foundedValue}</dd>
              </div>
              <div className="border-b border-r p-5">
                <dt className="text-sm text-muted-foreground">{content.facts.founder}</dt>
                <dd className="mt-1 text-lg font-medium">
                  <Link href={`/members/${founder.slug}`} className={textLink}>
                    {founder.name}
                  </Link>
                </dd>
              </div>
              <div className="border-b border-r p-5">
                <dt className="text-sm text-muted-foreground">{content.facts.location}</dt>
                <dd className="mt-1 text-lg font-medium">{content.facts.locationValue}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="border-b py-16 sm:py-20">
          <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
            <h2 className={sectionTitle}>{content.parts.title}</h2>
            <div className="mt-8 grid border-l border-t lg:grid-cols-3">
              {content.parts.items.map((part) => (
                <article key={part.key} className="flex flex-col border-b border-r p-6 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">{part.name}</h3>
                  <p className="mt-4 flex-1 text-pretty leading-7 text-muted-foreground">{part.description}</p>
                  <Link href={part.href} className={`mt-6 self-start ${textLink}`}>
                    {part.link}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b py-16 sm:py-20">
          <div className="mx-auto grid max-w-[var(--sx-max-content)] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8">
            <div>
              <h2 className={sectionTitle}>{content.free.title}</h2>
              <p className={sectionLead}>{content.free.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={links.youtube} target="_blank" rel="noreferrer">
                  {content.free.youtube}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={links.platform}>{content.free.platform}</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-b py-16 sm:py-20">
          <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
            <h2 className={sectionTitle}>{content.events.title}</h2>
            <p className={sectionLead}>{content.events.description}</p>
            <ul className="mt-8 border-t">
              {organizedEvents.map((event) => (
                <li
                  key={event.id}
                  className="grid gap-1 border-b py-4 sm:grid-cols-[14rem_1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <span className="text-sm text-muted-foreground">{formatEventDate(event, locale)}</span>
                  <span className="font-medium">{event.title}</span>
                  <span className="text-sm text-muted-foreground">{event.location}</span>
                </li>
              ))}
            </ul>
            <Link href="/events" className={`mt-6 inline-block ${textLink}`}>
              {content.events.all}
            </Link>
          </div>
        </section>

        <section className="border-b py-16 sm:py-20">
          <div className="mx-auto grid max-w-[var(--sx-max-content)] gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className={sectionTitle}>{content.partners.title}</h2>
              <p className={sectionLead}>{content.partners.description}</p>
              <ul className="mt-6 border-t">
                {partners.map((partner) => (
                  <li key={partner.name} className="border-b">
                    <Link
                      href={partner.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block py-3 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {partner.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/partners" className={`mt-6 inline-block ${textLink}`}>
                {content.partners.all}
              </Link>
            </div>

            <div>
              <h2 className={sectionTitle}>{content.team.title}</h2>
              <p className={sectionLead}>{content.team.description}</p>
              <ul className="mt-6 border-t">
                {teamMembers.map((member) => (
                  <li key={member.slug} className="border-b">
                    <Link
                      href={`/members/${member.slug}`}
                      className="block py-3 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {member.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
