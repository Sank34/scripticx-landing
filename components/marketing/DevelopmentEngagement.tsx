"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { divisionDetailsContent } from "@/lib/division-details-content";
import type { MarketingLocale } from "@/lib/marketing-content";

export function DevelopmentEngagement({ locale }: { locale: MarketingLocale }) {
  const ro = locale === "ro";
  const { pricing, fit } = divisionDetailsContent[locale].development;
  const [model, setModel] = useState(0);
  const [project, setProject] = useState(0);
  const reduced = useReducedMotion();
  const offer = pricing.items[model + 1];
  const transition = { duration: reduced ? 0 : .55, ease: "easeOut" as const };
  const projectLabels = ro ? ["Construim", "Îmbunătățim", "Conectăm", "Evoluăm"] : ["Build", "Improve", "Connect", "Evolve"];
  const flow = model === 0
    ? (ro ? ["Scope agreat", "Contract & avans", "Design & dezvoltare", "Predare"] : ["Agreed scope", "Contract & advance", "Design & build", "Handover"])
    : (ro ? ["Prioritizare", "Implementare", "Review", "Iterație"] : ["Prioritise", "Implement", "Review", "Iterate"]);

  return (
    <>
      <section id="development-pricing" className="scroll-mt-20 border-b">
        <div className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <p className="text-sm text-muted-foreground">{ro ? "Cum colaborăm" : "Working together"}</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">{ro ? "Un proiect de lansat. Sau un produs de crescut." : "A project to launch. Or a product to grow."}</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{pricing.description}</p>

          <div className="mt-12 grid grid-cols-2 border-b" role="group" aria-label={ro ? "Model de colaborare" : "Engagement model"}>
            {pricing.items.slice(1).map((item, index) => <button key={item.title} onClick={() => setModel(index)} aria-pressed={model === index} aria-controls="engagement-detail" className={`relative flex min-h-24 items-center justify-between gap-3 px-2 py-6 text-left text-lg font-semibold tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 sm:px-6 sm:text-2xl ${model === index ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}><span>{item.title}</span><ArrowUpRight className={`size-5 shrink-0 transition-transform ${model === index ? "rotate-45" : ""}`} />{model === index && <motion.span layoutId="engagement-underline" transition={transition} className="absolute inset-x-0 -bottom-px h-[2px] bg-foreground" />}</button>)}
          </div>

          <div id="engagement-detail" className="grid lg:grid-cols-[1.15fr_1fr]">
            <div className="relative flex min-w-0 flex-col justify-center overflow-hidden border-b bg-muted/30 px-4 py-10 sm:px-8 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground"><span>{ro ? "Ritmul colaborării" : "The working rhythm"}</span><span>{model === 0 ? (ro ? "Obiectiv definit" : "Defined outcome") : (ro ? "Ciclu continuu" : "Continuous cycle")}</span></div>
              <svg viewBox="0 0 560 230" className="aspect-[560/230] w-full" fill="none" aria-hidden="true">
                <path d="M20 200H540M20 30H540" stroke="currentColor" opacity=".08" />
                <motion.path key={model} d={model === 0 ? "M60 152H188V112H336V72H500" : "M130 80H430C490 80 490 160 430 160H130C70 160 70 80 130 80"} stroke="currentColor" strokeWidth="2" initial={{pathLength: reduced ? 1 : 0}} animate={{pathLength:1}} transition={{duration: reduced ? 0 : 1.1}} />
                {[0,1,2,3].map(i => {
                  const x = model === 0 ? [60,188,336,500][i] : [130,430,430,130][i];
                  const y = model === 0 ? [152,112,72,72][i] : [80,80,160,160][i];
                  return <motion.g key={i} animate={{x,y}} transition={transition}><circle r="18" fill="var(--background)" stroke={i === 3 ? "#059669" : "currentColor"} strokeOpacity=".4" /><text y="4" textAnchor="middle" fill={i === 3 ? "#047857" : "currentColor"} fontSize="11" fontFamily="monospace">0{i+1}</text></motion.g>;
                })}
              </svg>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">{flow.map((label,i) => <p key={label} className="text-xs"><span className="mr-2 font-mono text-[10px] text-muted-foreground">0{i+1}</span>{label}</p>)}</div>
              {model === 0 && <p className="mt-6 border-t pt-4 text-xs leading-5 text-muted-foreground">{ro ? "Producția începe după semnarea contractului și plata avansului. Feedback-ul constant însoțește designul și dezvoltarea până la predare." : "Production begins after the contract is signed and the advance is paid. Continuous feedback accompanies design and development through to handover."}</p>}
            </div>
            <div className="min-w-0 px-2 py-10 sm:px-8 lg:p-12" aria-live="polite">
              <motion.div key={model} initial={reduced ? false : {opacity:0,y:8}} animate={{opacity:1,y:0}} transition={transition}>
                <p className="text-xs text-muted-foreground">{offer.cadence}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">{offer.price}</h3>
                <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground">{offer.description}</p>
                <ul className="mt-7 space-y-3">{offer.features.map(feature => <li key={feature} className="flex items-center gap-3 text-sm"><Check className="size-4 shrink-0 text-emerald-600" />{feature}</li>)}</ul>
                <Button asChild className="mt-8 min-h-11 px-5"><Link href="https://platform.scripticx.org/contact">{pricing.contact}<ArrowUpRight /></Link></Button>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-y py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-full border"><ArrowRight className="size-4" /></span><div><p className="text-sm font-medium">{ro ? "Începem cu o conversație." : "It starts with a conversation."}</p><p className="mt-1 text-xs text-muted-foreground">{pricing.items[0].price} · {pricing.items[0].cadence}</p></div></div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">{pricing.items[0].description}</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#0d0e10] text-white">
        <div className="mx-auto grid max-w-[86rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-12">
          <div className="min-w-0">
            <p className="text-sm text-white/60">{fit.eyebrow}</p>
            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl">{ro ? "Ce ai vrea să funcționeze mai bine?" : "What could work better?"}</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/60">{fit.description}</p>
            <div className="mt-10 border-y border-white/15 py-7" aria-hidden="true">
              <svg viewBox="0 0 460 220" className="aspect-[460/220] w-full" fill="none">
                <path d="M0 100H460 M230 0V200" stroke="white" strokeOpacity=".08" />
                {[0,1,2].map(i => <motion.g key={i} animate={{x: project === 2 ? [50,190,330][i] : 80+i*42, y: project === 2 ? 66 : 35+i*28}} transition={transition}><motion.rect animate={{width:project === 2 ? 80 : 230,height:project === 2 ? 68 : 110}} transition={transition} rx="5" fill="#0d0e10" stroke={i === 2 ? "#6ee7b7" : "#4b5054"} /><path d="M12 16H45M12 26H32" stroke="white" strokeOpacity=".35" />{project !== 2 && <motion.path key={project} d={project === 1 ? "M22 83L62 72L92 78L122 45L160 59L195 33" : project === 3 ? "M62 70C62 36 145 36 145 70C145 100 62 100 62 70" : "M22 50H98V88H22ZM112 50H204M112 65H185M112 80H196"} stroke="#6ee7b7" initial={{pathLength: reduced ? 1 : 0}} animate={{pathLength:1}} transition={{duration:reduced ? 0 : .8}} />}</motion.g>)}
                {project === 2 && <motion.path d="M130 100H190M270 100H330" stroke="#6ee7b7" initial={{pathLength:reduced ? 1 : 0}} animate={{pathLength:1}} transition={{duration:reduced ? 0 : .8}} />}
              </svg>
              <p className="mt-4 font-mono text-xs text-emerald-300">{projectLabels[project]}<span className="ml-3 text-white/35">/ 0{project+1}</span></p>
            </div>
          </div>
          <div className="self-center border-t border-white/20">
            {fit.items.map((item,index) => <div key={item.title} className="border-b border-white/20">
              <button type="button" onClick={()=>setProject(index)} aria-expanded={project === index} aria-controls={`project-fit-${index}`} className="flex min-h-24 w-full items-center gap-4 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"><span className={`font-mono text-xs ${project === index ? "text-emerald-300" : "text-white/40"}`}>0{index+1}</span><span className={`flex-1 text-xl font-medium tracking-tight sm:text-2xl ${project === index ? "text-white" : "text-white/60"}`}>{item.title}</span><Plus className={`size-5 shrink-0 transition-transform motion-reduce:transition-none ${project === index ? "rotate-45 text-emerald-300" : "text-white/40"}`} /></button>
              <div id={`project-fit-${index}`} hidden={project !== index}><motion.div key={project} initial={reduced ? false : {opacity:0,y:6}} animate={{opacity:1,y:0}} transition={transition} className="pb-7 pl-8"><p className="max-w-lg text-sm leading-7 text-white/65">{item.description}</p><Link href="https://platform.scripticx.org/contact" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-emerald-300 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">{ro ? "Discută cu noi" : "Talk it through with us"}<ArrowUpRight className="size-4" /></Link></motion.div></div>
            </div>)}
          </div>
        </div>
      </section>
    </>
  );
}
