"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { type CSSProperties, type MouseEvent } from "react";

type TeamMember = {
  name: string;
  roles: string[];
  image?: string;
};

const team: TeamMember[] = [
  {
    name: "Eric Littau",
    roles: ["communications", "problemWriting"],
    image: "/team/Eric-Littau-new.jpg",
  },
  {
    name: "Catalina Nedelea",
    roles: ["marketing", "finance"],
    image: "/team/Catalina-Nedelea.jpg",
  },
  {
    name: "Andrei Lascu",
    roles: ["development", "publicRelationsEvents", "designScientific"],
    image: "/team/Andrei-Lascu-new.png",
  },
  {
    name: "Maia Pricop",
    roles: ["development", "uiuxScientific"],
    image: "/team/Maia-Pricop-new.jpg",
  },
  {
    name: "Andreea Bobotan",
    roles: ["uiuxResearch", "events"],
    image: "/team/Andreea-Bobotan-new.jpg",
  },
  {
    name: "Daria Serban",
    roles: ["graphics", "uiux"],
    image: "/team/Daria-Serban.png",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TeamMemberVisual({ member }: { member: TeamMember }) {
  return (
    <>
      <div className="flex h-full items-center justify-center bg-white/70 text-3xl font-semibold tracking-tight text-green-950/75">
        {getInitials(member.name)}
      </div>
      {member.image && (
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="160px"
          className="z-10 object-cover transition duration-500 group-hover/member:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      )}
    </>
  );
}

export default function TeamSection() {
  const t = useTranslations("Team");

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--team-pointer-x",
      `${event.clientX - bounds.left}px`
    );
    event.currentTarget.style.setProperty(
      "--team-pointer-y",
      `${event.clientY - bounds.top}px`
    );
  }

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-32">
      <div
        onMouseMove={handlePointerMove}
        className="group/team relative mx-auto max-w-7xl overflow-hidden rounded-3xl border bg-gradient-to-br from-green-200 via-white to-green-100 px-6 py-14 sm:px-10 sm:py-20"
        style={
          {
            "--team-pointer-x": "50%",
            "--team-pointer-y": "50%",
          } as CSSProperties
        }
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.075)_1px,transparent_1px)] bg-[size:40px_40px] opacity-80 transition-opacity duration-700 group-hover/team:opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_190px_at_var(--team-pointer-x)_var(--team-pointer-y),rgba(255,255,255,0.92),rgba(255,255,255,0.35)_48%,transparent_78%)] opacity-0 transition-opacity duration-500 group-hover/team:opacity-100" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[min(760px,90vw)] -translate-x-1/2 rounded-full bg-green-300/35 blur-[110px]" />

        <div className="relative z-10">
          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
            <p className="text-sm font-medium text-green-800">{t("eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group/member flex min-w-0 flex-col items-center text-center"
              >
                <div className="relative size-28 overflow-hidden rounded-full border-2 border-white/90 bg-white/60 shadow-[0_12px_35px_rgba(22,101,52,0.15)] ring-1 ring-black/10 transition duration-300 group-hover/member:-translate-y-1 group-hover/member:shadow-[0_18px_42px_rgba(22,101,52,0.22)] sm:size-32 xl:size-36">
                  <TeamMemberVisual member={member} />
                </div>

                <h3 className="mt-5 text-sm font-semibold sm:text-base">
                  {member.name}
                </h3>
                <p className="mt-1.5 max-w-[180px] text-xs leading-5 text-muted-foreground">
                  {member.roles.map((role) => t(`roles.${role}`)).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
