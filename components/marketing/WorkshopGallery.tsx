import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getLocale } from "next-intl/server";

import { Reveal } from "@/components/marketing/Reveal";
import { getMarketingLocale, marketingContent } from "@/lib/marketing-content";

const root = "/events/workshops/programming-1-3-july-26";
const images = ["IMG_1137.jpg", "IMG_1094.jpg", "IMG_1174.jpg", "IMG_1003.jpg"];

export default async function WorkshopGallery() {
  const locale = getMarketingLocale(await getLocale());
  const content = marketingContent[locale].gallery;

  return (
    <section id="workshops" className="border-b bg-muted/25 py-20 sm:py-24">
      <div className="mx-auto max-w-[var(--sx-max-content)] px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.title}</h2>
          <div className="lg:pb-1"><p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{content.description}</p><Link href="/education" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium hover:underline">{content.action}<ArrowUpRight className="size-4" /></Link></div>
        </Reveal>
        <div className="mt-12 grid auto-rows-[15rem] gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[16rem_11rem]">
          {images.map((file, index) => (
            <Reveal key={file} delay={index * 0.06} distance={16} className={["lg:col-span-7 lg:row-span-2", "lg:col-span-5", "lg:col-span-3", "lg:col-span-2"][index]}>
              <figure className="group relative size-full overflow-hidden rounded-[14px] border bg-card">
                <Image src={`${root}/${file}`} alt={content.captions[index]} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-12 text-sm font-medium text-white">{content.captions[index]}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
