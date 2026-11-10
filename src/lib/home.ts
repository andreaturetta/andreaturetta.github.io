import { content, published } from "../data";
import type { Experience, Lang, Project, SectionKey } from "../data/types";

export interface HomeSection {
  key: SectionKey;
  id: string;
  label: string;
  /** Numero mostrato accanto al titolo ("01", "02"...), contato solo sulle sezioni presenti. */
  index: string;
}

interface HomeContent {
  experience: Experience[];
  projects: Project[];
  sections: HomeSection[];
}

const ORDER: SectionKey[] = ["about", "experience", "projects", "skills", "education", "contact"];

// Calcolato una volta per lingua: published() avvisa delle bozze a ogni chiamata.
const cache = new Map<Lang, HomeContent>();

/** Liste pubblicate e sezioni della home che hanno contenuto, nell'ordine della Struttura. */
export function homeContent(lang: Lang): HomeContent {
  const cached = cache.get(lang);
  if (cached) return cached;

  const c = content[lang];
  const experience = published(c.experience);
  const projects = published(c.projects);
  const present: Record<SectionKey, boolean> = {
    about: c.about.length > 0,
    experience: experience.length > 0,
    projects: projects.length > 0,
    skills: c.skills.length > 0,
    education: c.education.length > 0,
    contact: true,
  };
  const sections = ORDER.filter((key) => present[key]).map((key, i) => ({
    key,
    ...c.sections[key],
    index: String(i + 1).padStart(2, "0"),
  }));

  const result = { experience, projects, sections };
  cache.set(lang, result);
  return result;
}

export function homeSection(lang: Lang, key: SectionKey): HomeSection | undefined {
  return homeContent(lang).sections.find((s) => s.key === key);
}

/** Pagine di dettaglio: solo Progetti pubblicati che hanno `detail`. */
export function projectPaths(lang: Lang) {
  return homeContent(lang)
    .projects.filter((project) => project.detail)
    .map((project) => ({ params: { slug: project.slug }, props: { project } }));
}
