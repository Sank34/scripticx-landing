import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Reveal } from "@/components/marketing/Reveal";
import { teamMembers } from "@/lib/team-data";

export default async function TeamSection() {
  const t = await getTranslations("Team");

  return (
    <section id="team" className="scroll-mt-20 border-b py-20 sm:py-24">
      <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-6 border-b pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:pb-12">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{t("eyebrow")}</p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg lg:justify-self-end">
            {t("description")}
          </p>
        </Reveal>

        <div className="grid border-l sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.055} distance={16}>
              <article className="group border-b border-r bg-background p-3 sm:p-4">
                <Link href={`/members/${member.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <div className="relative aspect-[5/4] overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="will-change-transform object-cover object-top grayscale transition-[filter,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:grayscale-0 motion-reduce:transition-none"
                    />
                  </div>
                </Link>
                <div className="flex min-h-28 flex-col justify-between gap-4 px-1 pb-2 pt-5 sm:min-h-32 sm:px-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                      <Link href={`/members/${member.slug}`} className="underline-offset-4 hover:underline">
                        {member.name}
                      </Link>
                    </h3>
                    <div className="flex shrink-0 items-center gap-1">
                      {member.linkedin && (
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${t("linkedin")} — ${member.name}`}
                          title={t("linkedin")}
                          className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          <LinkedInIcon className="size-4" />
                        </Link>
                      )}
                      <Link
                        href={
                          member.email
                            ? `mailto:${member.email}`
                            : `https://platform.scripticx.org/contact?member=${member.slug}`
                        }
                        aria-label={`${member.email ? t("email") : t("contactMember")} — ${member.name}`}
                        title={member.email ? t("email") : t("contactMember")}
                        className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <Mail className="size-4" />
                      </Link>
                      <Link
                        href={`/members/${member.slug}`}
                        aria-label={`${t("viewProfile")} — ${member.name}`}
                        title={t("viewProfile")}
                        className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {member.roles.map((role) => t(`roles.${role}`)).join(" · ")}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
