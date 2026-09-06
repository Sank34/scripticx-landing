"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ImageIcon } from "lucide-react";

import { Reveal } from "@/components/marketing/Reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { divisionDetailsContent } from "@/lib/division-details-content";
import type { MarketingLocale } from "@/lib/marketing-content";

export function DevelopmentWork({ locale }: { locale: MarketingLocale }) {
  const content = divisionDetailsContent[locale].development.work;
  const multipleProjects = content.items.length > 1;

  return (
    <section id="work" className="scroll-mt-20 border-b py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">{content.eyebrow}</p>
          <div>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{content.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{content.description}</p>
          </div>
        </Reveal>

        <div className={`mt-12 grid gap-x-8 gap-y-12 ${multipleProjects ? "md:grid-cols-2" : ""}`}>
          {content.items.map((project) => (
            <Reveal key={project.key} className="h-full min-w-0">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    aria-label={`${content.openLabel}: ${project.name}`}
                    className={`group grid h-full w-full min-w-0 overflow-hidden border-y bg-background text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${multipleProjects ? "grid-rows-[auto_1fr]" : "lg:grid-cols-[1.28fr_.72fr]"}`}
                  >
                    <span className="relative block aspect-[16/10] w-full overflow-hidden bg-muted/40">
                      {project.cover ? (
                        <Image
                          src={project.cover}
                          alt=""
                          fill
                          sizes={multipleProjects ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 64vw"}
                          className="object-contain object-center p-3 transition-transform duration-300 ease-out group-hover:scale-[1.01] motion-reduce:transition-none sm:p-6"
                        />
                      ) : (
                        <span className="flex size-full items-center justify-center text-muted-foreground/35">
                          <ImageIcon className="size-7" aria-hidden="true" />
                        </span>
                      )}
                    </span>

                    <span className="flex min-w-0 flex-col p-6 sm:p-8">
                      <span className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                        <span>{project.category}</span>
                        <span className="font-mono">{project.year}</span>
                      </span>
                      <span className="mt-8 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{project.name}</span>
                      <span className="mt-4 text-sm leading-6 text-muted-foreground">{project.description}</span>
                      <span className="mt-7 border-t pt-5">
                        <span className="text-xs font-medium text-muted-foreground">{content.techStackLabel}</span>
                        <span className="mt-3 block text-sm leading-6">{project.techStack.join(" · ")}</span>
                      </span>
                      <span className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
                        <span className="break-all font-mono text-xs text-muted-foreground">{project.domain}</span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium">
                          {content.openLabel}
                          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                        </span>
                      </span>
                    </span>
                  </button>
                </DialogTrigger>

                <DialogContent className="max-h-[min(92svh,860px)] w-[min(calc(100vw-1.5rem),1180px)] max-w-none overflow-hidden rounded-[20px] p-0 sm:max-w-none">
                  <div className="max-h-[min(92svh,860px)] overflow-y-auto">
                    <div className="relative h-64 w-full overflow-hidden border-b bg-[#eef0f3] sm:h-[24rem]">
                      {project.cover ? (
                        <Image
                          src={project.cover}
                          alt={`${project.name} interface`}
                          fill
                          loading="eager"
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 1180px"
                          className="h-full w-full object-contain object-center p-3 sm:p-5"
                        />
                      ) : (
                        <span className="flex size-full items-center justify-center text-muted-foreground/35">
                          <ImageIcon className="size-8" aria-hidden="true" />
                        </span>
                      )}
                    </div>

                    <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:p-10">
                      <div>
                        <DialogHeader>
                          <p className="font-mono text-xs text-muted-foreground">{content.showcaseEyebrow} · {project.year}</p>
                          <DialogTitle className="mt-2 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{project.name}</DialogTitle>
                          <DialogDescription className="mt-2 max-w-2xl text-base leading-7">{project.overview}</DialogDescription>
                        </DialogHeader>

                        <div className="mt-8 grid border-y sm:grid-cols-3 sm:divide-x">
                          {project.capabilities.map((capability, capabilityIndex) => (
                            <div key={capability.title} className="border-b py-5 last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                              <span className="font-mono text-xs text-muted-foreground">0{capabilityIndex + 1}</span>
                              <h3 className="mt-3 text-base font-semibold tracking-[-0.02em]">{capability.title}</h3>
                              <p className="mt-2 text-sm leading-6 text-muted-foreground">{capability.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <aside className="flex flex-col rounded-[14px] border bg-muted/25 p-6">
                        <p className="text-sm font-semibold">{content.scopeLabel}</p>
                        <div className="mt-5 space-y-3">
                          {project.scope.map((item) => (
                            <div key={item} className="flex items-center gap-3 text-sm">
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border bg-background">
                                <Check className="size-3.5" aria-hidden="true" />
                              </span>
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 border-t pt-5">
                          <p className="text-sm font-semibold">{content.techStackLabel}</p>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.techStack.join(" · ")}</p>
                        </div>
                        <Button className="mt-8 h-10 w-full" asChild>
                          <Link href={`https://${project.domain}`}>
                            {content.visitLabel}
                            <ArrowUpRight />
                          </Link>
                        </Button>
                      </aside>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
