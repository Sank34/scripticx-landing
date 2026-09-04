import type { MarketingLocale } from "@/lib/marketing-content";

export const partners = [
  {
    name: "Colegiul Național \"Gheorghe Munteanu Murgoci\" Brăila",
    shortName: "CNGMM Brăila",
    logo: "/sponsors/logo-cngmm.webp",
    url: "https://cngmm.ro",
    type: "education",
  },
  {
    name: "Biblioteca Județeană \"Panait Istrati\" Brăila",
    shortName: "BJPI Brăila",
    logo: "/sponsors/logo_bjpi.png",
    url: "https://bjbraila.ro",
    type: "community",
  }, 
  {
    name: "AstroZen Photography",
    shortName: "AstroZen",
    logo: "/sponsors/logo_az.png",
    url: "https://astrozen-photography.vercel.app/",
    type: "creative",
  },
  {
    name: "Grant My Passion",
    shortName: "Grant My Passion",
    logo: "/sponsors/logo-Grant-my-passion.png",
    url: "https://www.mcdonalds.ro/grant-my-passion",
    type: "sponsor",
  },
  {
    name: "UniquePrintPro",
    shortName: "UniquePrintPro",
    logo: "/sponsors/logo-uprintpro.svg",
    url: "https://uniqueprintpro.ro",
    type: "sponsor",
  },
] as const;

export type SponsorshipContent = {
  eyebrow: string;
  title: string;
  description: string;
  switchLabel: string;
  tabs: { financial: string; inKind: string };
  includesLabel: string;
  action: string;
  note: string;
  tiers: readonly {
    title: string;
    amount: string;
    cadence: string;
    description: string;
    badge?: string;
    featured?: boolean;
    features: readonly string[];
  }[];
  inKind: {
    title: string;
    description: string;
    items: readonly {
      title: string;
      description: string;
      features: readonly string[];
    }[];
  };
};

export const partnersContent: Record<MarketingLocale, {
  metadata: { title: string; description: string };
  home: { eyebrow: string; title: string; description: string; action: string };
  hero: { eyebrow: string; title: string; description: string; primary: string; secondary: string };
  directory: { eyebrow: string; title: string; description: string; visit: string; types: Record<(typeof partners)[number]["type"], string> };
  collaboration: { eyebrow: string; title: string; description: string; items: readonly { number: string; title: string; description: string }[] };
  sponsorship: SponsorshipContent;
  benefits: { eyebrow: string; title: string; description: string; items: readonly { title: string; description: string }[] };
  process: { eyebrow: string; title: string; description: string; steps: readonly { number: string; title: string; description: string }[]; action: string; secondary: string };
}> = {
  en: {
    metadata: {
      title: "Partners and sponsors",
      description: "Explore ScripticX partners, sponsorship options, collaboration models and the benefits of supporting practical programming education.",
    },
    home: {
      eyebrow: "Better with good people around",
      title: "Good things rarely happen solo.",
      description: "Schools, community spaces, creators and sponsors help us welcome more curious learners—and put better tools in their hands.",
      action: "Meet the people helping",
    },
    hero: {
      eyebrow: "ScripticX partnerships",
      title: "Shared support for practical learning.",
      description: "We work with institutions, companies and independent teams that care about accessible education, useful technology and strong local communities.",
      primary: "Become a partner",
      secondary: "View current partners",
    },
    directory: {
      eyebrow: "Current network",
      title: "Organizations supporting the mission.",
      description: "Every collaboration has a different shape, from hosting learning activities to supporting how they are documented and shared.",
      visit: "Visit partner",
      types: { education: "Education partner", community: "Community partner", creative: "Creative partner", sponsor: "Sponsor" },
    },
    collaboration: {
      eyebrow: "Partnership models",
      title: "Different ways to build something useful together.",
      description: "Every partnership starts with a concrete objective. We choose the format, responsibilities and outcome together.",
      items: [
        { number: "01", title: "Education partnerships", description: "Schools, libraries and community organizations can host groups, connect us with learners or co-create a local program." },
        { number: "02", title: "Workshops and events", description: "Host or support hands-on sessions where learners build, test and present a complete idea." },
        { number: "03", title: "Expertise and mentoring", description: "Specialists can contribute talks, practical sessions, feedback or mentoring around a relevant topic." },
        { number: "04", title: "Creative and media support", description: "Help us document and communicate an initiative through photography, design, production or media coverage." },
        { number: "05", title: "Program sponsorship", description: "Fund or equip a workshop, learner group, scholarship track or recurring education program." },
      ],
    },
    sponsorship: {
      eyebrow: "Sponsorship options",
      title: "Choose how you want to support the work.",
      description: "Compare indicative financial tiers or explore in-kind contributions. Every option is adjusted to the initiative and confirmed before delivery.",
      switchLabel: "Choose a sponsorship model",
      tabs: { financial: "Financial tiers", inKind: "In-kind support" },
      includesLabel: "Partnership includes",
      action: "Discuss this tier",
      note: "Starting values are indicative. The final contribution and deliverables are confirmed in a written proposal.",
      tiers: [
        {
          title: "Supporter",
          amount: "1,000 RON+",
          cadence: "One initiative",
          description: "A focused contribution to a workshop, learner resource or community activity.",
          features: ["Listing in the partner directory", "Logo in the initiative recap", "Concise delivery and impact summary"],
        },
        {
          title: "Program Partner",
          amount: "3,500 RON+",
          cadence: "Workshop, group or short program",
          description: "Support a complete learning experience with agreed visibility and direct involvement.",
          badge: "Most flexible",
          featured: true,
          features: ["Everything in Supporter", "Logo on agreed program materials", "Presence at a selected activity", "Detailed impact recap"],
        },
        {
          title: "Strategic Partner",
          amount: "10,000 RON+",
          cadence: "Multi-program or annual partnership",
          description: "Build a longer-term partnership across several initiatives and community touchpoints.",
          features: ["Everything in Program Partner", "Joint initiative planning", "Priority activation calendar", "Periodic impact updates"],
        },
      ],
      inKind: {
        title: "Useful support is not always financial.",
        description: "We can value and scope practical contributions around a specific activity, group or program.",
        items: [
          { title: "Technology and materials", description: "Resources used directly by learners and facilitators.", features: ["Laptops and development kits", "Software or cloud access", "Printing and workshop materials"] },
          { title: "Space and logistics", description: "Operational support that makes an activity possible.", features: ["Venues and equipment", "Transport and catering", "Event production support"] },
          { title: "People and reach", description: "Expertise and communication that extend an initiative.", features: ["Mentors, speakers and reviewers", "Photography and design", "Media and community promotion"] },
        ],
      },
    },
    benefits: {
      eyebrow: "Partner benefits",
      title: "A partnership with value on both sides.",
      description: "We agree on visibility, involvement and reporting before the work starts, so every benefit is relevant and easy to understand.",
      items: [
        { title: "Relevant brand presence", description: "Recognition can include logo placement on our partner page, program materials, event communication and published recaps, depending on the agreed scope." },
        { title: "Direct community engagement", description: "Join selected workshops, demos or community moments and give your team a concrete way to contribute." },
        { title: "Clear impact updates", description: "Receive a concise recap covering participation, delivered activities and tangible outcomes after the initiative." },
        { title: "Flexible activation", description: "Start with one event or build a recurring partnership across groups, resources and learning programs." },
        { title: "Responsible association", description: "Support practical education through work that is useful, documented and aligned with shared values." },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From the first conversation to a clear partnership.",
      description: "There is no fixed package to force. We start with what you can offer and what you want the partnership to achieve.",
      steps: [
        { number: "01", title: "Tell us your objective", description: "Share the initiative, audience, timing, budget or resources you would like to support." },
        { number: "02", title: "We shape the format", description: "We recommend a relevant collaboration model and define the contribution, benefits and expected outcome." },
        { number: "03", title: "We confirm the agreement", description: "Responsibilities, timeline, visibility, documents and points of contact are agreed before delivery." },
        { number: "04", title: "We deliver and report", description: "We run the initiative, keep you updated and close with a concise summary of the work and results." },
      ],
      action: "Start a conversation",
      secondary: "View current partners",
    },
  },
  ro: {
    metadata: {
      title: "Parteneri și sponsori",
      description: "Descoperă partenerii ScripticX, opțiunile de sponsorizare, modelele de colaborare și beneficiile susținerii educației practice în programare.",
    },
    home: {
      eyebrow: "Mai bine cu oameni buni aproape",
      title: "Lucrurile bune nu se construiesc singure.",
      description: "Școlile, spațiile comunitare, creatorii și sponsorii ne ajută să primim mai mulți elevi curioși și să le punem instrumente mai bune în mâini.",
      action: "Cunoaște oamenii care ne ajută",
    },
    hero: {
      eyebrow: "Parteneriate ScripticX",
      title: "Susținere comună pentru învățare practică.",
      description: "Colaborăm cu instituții, companii și echipe independente care susțin educația accesibilă, tehnologia utilă și comunitățile locale puternice.",
      primary: "Devino partener",
      secondary: "Vezi partenerii actuali",
    },
    directory: {
      eyebrow: "Rețeaua actuală",
      title: "Organizații care susțin misiunea.",
      description: "Fiecare colaborare are o formă diferită, de la găzduirea activităților educaționale până la susținerea modului în care sunt documentate și prezentate.",
      visit: "Vizitează partenerul",
      types: { education: "Partener educațional", community: "Partener comunitar", creative: "Partener creativ", sponsor: "Sponsor" },
    },
    collaboration: {
      eyebrow: "Modele de parteneriat",
      title: "Mai multe moduri de a construi ceva util împreună.",
      description: "Fiecare parteneriat pornește de la un obiectiv concret. Alegem împreună formatul, responsabilitățile și rezultatul urmărit.",
      items: [
        { number: "01", title: "Parteneriate educaționale", description: "Școlile, bibliotecile și organizațiile comunitare pot găzdui grupe, facilita accesul elevilor sau construi alături de noi un program local." },
        { number: "02", title: "Workshop-uri și evenimente", description: "Găzduiește sau susține sesiuni practice în care elevii construiesc, testează și prezintă o idee completă." },
        { number: "03", title: "Expertiză și mentorat", description: "Specialiștii pot contribui cu prezentări, sesiuni practice, feedback sau mentorat pe o temă relevantă." },
        { number: "04", title: "Suport creativ și media", description: "Ajută-ne să documentăm și să comunicăm o inițiativă prin fotografie, design, producție sau promovare media." },
        { number: "05", title: "Sponsorizarea unui program", description: "Finanțează sau echipează un workshop, o grupă, un program de burse ori o inițiativă educațională recurentă." },
      ],
    },
    sponsorship: {
      eyebrow: "Opțiuni de sponsorizare",
      title: "Alege cum vrei să susții activitatea.",
      description: "Compară nivelurile financiare orientative sau explorează contribuțiile în natură. Fiecare opțiune este adaptată inițiativei și confirmată înainte de livrare.",
      switchLabel: "Alege modelul de sponsorizare",
      tabs: { financial: "Niveluri financiare", inKind: "Contribuții în natură" },
      includesLabel: "Parteneriatul include",
      action: "Discută acest nivel",
      note: "Valorile de pornire sunt orientative. Contribuția finală și livrabilele sunt confirmate printr-o propunere scrisă.",
      tiers: [
        {
          title: "Supporter",
          amount: "1.000 RON+",
          cadence: "O singură inițiativă",
          description: "O contribuție punctuală pentru un workshop, o resursă educațională sau o activitate comunitară.",
          features: ["Listare în directorul de parteneri", "Logo în recapitularea inițiativei", "Rezumat concis al activității și impactului"],
        },
        {
          title: "Program Partner",
          amount: "3.500 RON+",
          cadence: "Workshop, grupă sau program scurt",
          description: "Susține o experiență completă de învățare, cu vizibilitate agreată și implicare directă.",
          badge: "Cel mai flexibil",
          featured: true,
          features: ["Tot ce include nivelul Supporter", "Logo pe materialele agreate ale programului", "Prezență la o activitate selectată", "Raport detaliat de impact"],
        },
        {
          title: "Strategic Partner",
          amount: "10.000 RON+",
          cadence: "Parteneriat anual sau multi-program",
          description: "Construiește o colaborare pe termen lung, prezentă în mai multe inițiative și momente comunitare.",
          features: ["Tot ce include Program Partner", "Planificarea comună a inițiativelor", "Calendar prioritar de activări", "Actualizări periodice despre impact"],
        },
      ],
      inKind: {
        title: "Sprijinul util nu este întotdeauna financiar.",
        description: "Putem evalua și organiza contribuții practice în jurul unei activități, grupe sau inițiative concrete.",
        items: [
          { title: "Tehnologie și materiale", description: "Resurse folosite direct de elevi și facilitatori.", features: ["Laptopuri și kituri de dezvoltare", "Acces software sau cloud", "Print și materiale pentru workshop-uri"] },
          { title: "Spațiu și logistică", description: "Suport operațional care face posibilă o activitate.", features: ["Locații și echipamente", "Transport și catering", "Suport pentru producția evenimentului"] },
          { title: "Oameni și vizibilitate", description: "Expertiză și comunicare care extind inițiativa.", features: ["Mentori, invitați și evaluatori", "Fotografie și design", "Promovare media și comunitară"] },
        ],
      },
    },
    benefits: {
      eyebrow: "Beneficii pentru parteneri",
      title: "Un parteneriat valoros pentru ambele părți.",
      description: "Stabilim vizibilitatea, implicarea și raportarea înainte de începerea colaborării, astfel încât fiecare beneficiu să fie clar și relevant.",
      items: [
        { title: "Vizibilitate relevantă", description: "Recunoașterea poate include logo-ul pe pagina de parteneri, materialele programului, comunicarea evenimentului și recapitulările publicate, în funcție de colaborarea agreată." },
        { title: "Legătură directă cu comunitatea", description: "Participă la workshop-uri, demonstrații sau momente comunitare și oferă echipei tale un mod concret de implicare." },
        { title: "Actualizări clare despre impact", description: "Primești un rezumat concis cu participarea, activitățile livrate și rezultatele concrete ale inițiativei." },
        { title: "Activare flexibilă", description: "Poți începe cu un singur eveniment sau poți construi un parteneriat recurent pentru grupe, resurse și programe educaționale." },
        { title: "Asociere responsabilă", description: "Susții educația practică prin activități utile, documentate și aliniate valorilor pe care le împărtășim." },
      ],
    },
    process: {
      eyebrow: "Cum funcționează",
      title: "De la prima discuție la un parteneriat clar.",
      description: "Nu impunem un pachet fix. Pornim de la ceea ce poți oferi și de la rezultatul pe care vrei să îl obțină colaborarea.",
      steps: [
        { number: "01", title: "Ne spui ce vrei să susții", description: "Descrie inițiativa, publicul, perioada, bugetul sau resursele pe care ai vrea să le oferi." },
        { number: "02", title: "Conturăm formatul potrivit", description: "Recomandăm un model relevant și definim contribuția, beneficiile și rezultatul așteptat." },
        { number: "03", title: "Confirmăm colaborarea", description: "Stabilim responsabilitățile, calendarul, vizibilitatea, documentele și persoanele de contact înainte de livrare." },
        { number: "04", title: "Livrăm și raportăm", description: "Organizăm inițiativa, oferim actualizări și încheiem cu un rezumat concis al activității și rezultatelor." },
      ],
      action: "Începe o conversație",
      secondary: "Vezi partenerii actuali",
    },
  },
};
