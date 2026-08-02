import Image from "next/image";
import Link from "next/link";
import { readdir } from "fs/promises";
import path from "path";
import { getTranslations } from "next-intl/server";

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".avif"]);

const sponsorNames: Record<string, string> = {
  "logo-cngmm.webp": "Colegiul Național Gheorghe Munteanu Murgoci Brăila",
  "logo_bjpi.png": "Biblioteca Județeană Panait Istrati Brăila",
};

const sponsorUrls: Record<string, string> = {
  "logo_az.png": "https://astrozen-photography.vercel.app/",
  "logo_bjpi.png": "https://bjbraila.ro",
  "logo-cngmm.webp": "https://cngmm.ro",
};

function toName(file: string) {
  if (sponsorNames[file]) {
    return sponsorNames[file];
  }

  return file
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

async function getSponsors() {
  try {
    const dir = path.join(process.cwd(), "public", "sponsors");
    const files = await readdir(dir);

    return files
      .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => ({
        name: toName(file),
        src: `/sponsors/${file}`,
        url: sponsorUrls[file],
      }));
  } catch {
    return [];
  }
}

export default async function SponsorsSection() {
  const t = await getTranslations("Sponsors");
  const sponsors = await getSponsors();

  if (sponsors.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="relative mx-auto max-w-7xl rounded-3xl bg-background px-6 pb-6 sm:px-10 sm:pb-8">
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

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {sponsors.map((sponsor) => (
              <Link
                key={sponsor.src}
                href={sponsor.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${sponsor.name}`}
                className="group/sponsor flex h-28 w-[calc(50%-0.5rem)] cursor-pointer items-center justify-center rounded-2xl border border-white/90 bg-white/70 p-6 shadow-[0_12px_35px_rgba(22,101,52,0.12)] ring-1 ring-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_42px_rgba(22,101,52,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500/25 sm:h-32 sm:w-52 sm:p-8"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={220}
                  height={110}
                  className="pointer-events-none max-h-full w-auto object-contain opacity-80 grayscale transition duration-300 group-hover/sponsor:opacity-100 group-hover/sponsor:grayscale-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
