import { en } from "./en";
import { it } from "./it";
import type { Lang, SiteContent } from "./types";

export const content: Record<Lang, SiteContent> = { it, en };

export const otherLang = (lang: Lang): Lang => (lang === "it" ? "en" : "it");

export const homePath = (lang: Lang) => (lang === "it" ? "/" : "/en/");
export const projectPath = (lang: Lang, slug: string) =>
  lang === "it" ? `/progetti/${slug}/` : `/en/projects/${slug}/`;
export const privacyPath = (lang: Lang) => (lang === "it" ? "/privacy/" : "/en/privacy/");

/** In sviluppo mostra tutto; nella build di produzione toglie le bozze e avvisa quali. */
export function published<T extends { draft?: string }>(items: T[]): T[] {
  if (!import.meta.env.PROD) return items;
  for (const item of items) {
    if (item.draft) console.warn(`[bozza esclusa dalla build] ${item.draft}`);
  }
  return items.filter((item) => !item.draft);
}
