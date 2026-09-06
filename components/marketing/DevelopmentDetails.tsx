import { Check, FileText, MessageSquareText } from "lucide-react";

import { DevelopmentEngagement } from "@/components/marketing/DevelopmentEngagement";
import { divisionDetailsContent } from "@/lib/division-details-content";
import type { MarketingLocale } from "@/lib/marketing-content";
import { DevelopmentProcess } from "@/components/marketing/DevelopmentProcess";

export function DevelopmentDetails({ locale }: { locale: MarketingLocale }) {
  const content = divisionDetailsContent[locale].development;

  return (
    <>
      <section id="capabilities" className="scroll-mt-20 border-b">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">{content.capabilities.eyebrow}</p>
            <div>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                {content.capabilities.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                {content.capabilities.description}
              </p>
            </div>
          </div>

          <div className="mt-14 border-t">
            {content.capabilities.items.map((item, index) => (
              <details
                key={item.key}
                open={index === 0}
                className="group border-b"
              >
                <summary className="flex min-h-24 cursor-pointer list-none items-center gap-5 py-7 focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden sm:gap-10">
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] sm:text-4xl">{item.title}</h3>
                  <span aria-hidden="true" className="ml-auto text-3xl font-light transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="max-w-3xl pb-9 sm:pl-14">
                  <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{item.description}</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <DevelopmentProcess locale={locale} />

      <section className="border-b">
        <div className="mx-auto grid w-full max-w-[80rem] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-muted-foreground">{content.portal.eyebrow}</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                {content.portal.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">{content.portal.description}</p>
              <ul className="mt-8 border-t">
                {content.portal.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 border-b py-4 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex min-h-[32rem] items-center justify-center border-t bg-muted/25 p-5 sm:p-10 lg:border-l lg:border-t-0">
            <div className="w-full max-w-2xl overflow-hidden rounded-[20px] border bg-background shadow-[0_12px_36px_rgba(15,23,42,.08)]">
              <div className="flex items-center justify-between border-b px-5 py-4 sm:px-6">
                <div>
                  <p className="text-sm font-semibold">{content.portal.mock.project}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{locale === "ro" ? "Exemplu de prezentare a proiectului" : "Example project overview"}</p>
                </div>
                <span className="text-xs font-medium text-emerald-700">{content.portal.mock.status}</span>
              </div>
              <div className="grid sm:grid-cols-[1fr_13rem]">
                <div className="border-b p-5 sm:border-b-0 sm:border-r sm:p-6">
                  <p className="text-xs font-medium text-muted-foreground">Milestone</p>
                  <p className="mt-2 text-xl font-semibold tracking-[-0.025em]">{content.portal.mock.milestone}</p>
                  <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
                    <div className="h-full w-[68%] rounded-full bg-foreground" />
                  </div>
                  <div className="mt-7 grid gap-3">
                    <div className="flex items-center gap-3 rounded-[10px] border p-3">
                      <MessageSquareText className="size-4" aria-hidden="true" />
                      <span className="text-sm">{content.portal.mock.update}</span>
                      <span className="ml-auto size-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    </div>
                    <div className="flex items-center gap-3 rounded-[10px] border p-3">
                      <FileText className="size-4" aria-hidden="true" />
                      <span className="text-sm">{content.portal.mock.invoice}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 p-5 sm:p-6">
                  <p className="text-xs font-medium text-muted-foreground">Timeline</p>
                  {["Discovery", "Design", "Development", "Launch"].map((label, index) => (
                    <div key={label} className="flex items-center gap-3 text-xs">
                      <span className={`flex size-5 items-center justify-center rounded-full ${index < 2 ? "bg-foreground text-background" : "border"}`}>
                        {index < 2 ? <Check className="size-3" aria-hidden="true" /> : index + 1}
                      </span>
                      <span className={index > 1 ? "text-muted-foreground" : ""}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DevelopmentEngagement locale={locale} />
    </>
  );
}
