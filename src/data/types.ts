export type Lang = "it" | "en";

/** Chiave di sezione, uguale nelle due lingue: serve al selettore IT/EN per restare sulla stessa sezione. */
export type SectionKey = "about" | "experience" | "projects" | "skills" | "education" | "contact";

export interface Section {
  /** Ancora nella pagina, nella lingua della pagina (es. `chi-sono`, `about`). */
  id: string;
  label: string;
}

/**
 * `draft` contiene il motivo per cui la voce non è pronta. Le bozze si vedono con `npm run dev`
 * e vengono escluse da `npm run build` (vedi `published`), così non finiscono online.
 */
interface Draftable {
  draft?: string;
}

export interface Experience extends Draftable {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export interface ProjectDetail {
  problem?: string;
  work?: string[];
  result?: string;
  images?: { src: string; alt: string }[];
}

export interface Project extends Draftable {
  /** Uguale nelle due lingue: `/progetti/<slug>/` e `/en/projects/<slug>/`. */
  slug: string;
  name: string;
  kind: string;
  summary: string;
  tags: string[];
  /** Senza `detail` il Progetto ha solo la scheda, senza pagina propria. */
  detail?: ProjectDetail;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  current?: boolean;
}

export interface SiteContent {
  lang: Lang;
  name: string;
  title: string;
  status: string;
  description: string;
  cv: {
    href: string;
    /** Lingua del PDF: se diversa da quella della pagina, il link lo dichiara. */
    hreflang: Lang;
    label: string;
  };
  about: string;
  languages: string;
  sections: Record<SectionKey, Section>;
  experience: Experience[];
  projects: Project[];
  skills: { area: string; items: string[] }[];
  education: Education[];
  contact: {
    email: string;
    linkedin: string;
    linkedinLabel: string;
  };
  ui: {
    skipToContent: string;
    sectionsNav: string;
    language: string;
    switchLanguage: string;
    toggleTheme: string;
    backToTop: string;
    home: string;
    contactMe: string;
    currentStatus: string;
    inBrief: string;
    factEducation: string;
    factInternship: string;
    factLanguages: string;
    at: string;
    current: string;
    draft: string;
    technologies: string;
    details: string;
    contactTitle: string;
    contactLead: string;
    email: string;
    linkedin: string;
    cvRow: string;
    opensInNewTab: string;
    allProjects: string;
    problem: string;
    work: string;
    result: string;
    screenshots: string;
    privacy: string;
  };
}
