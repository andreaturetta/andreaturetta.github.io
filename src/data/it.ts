import type { SiteContent } from "./types";

export const it: SiteContent = {
  lang: "it",
  name: "Andrea Turetta",
  title: "IT Junior · Studente ITS in Cyber Security",
  status: "Stage IT in corso · ITS 2025–2028",
  description:
    "Andrea Turetta, IT Junior e studente ITS in Cyber Security. Esperienza, progetti, competenze e contatti.",
  cv: {
    href: "/cv.pdf",
    hreflang: "it",
    label: "Scarica il CV",
  },
  about:
    "Studio Cyber Sicurezza all'ITS Digital Academy Mario Volpato (2025–2028). In parallelo faccio uno stage in Krupps, dove sono l'unico referente IT dell'azienda: gestisco postazioni, server e utenti e ho messo in opera il sistema di inventario dei dispositivi. Cerco uno stage o un primo impiego in cui crescere nella sicurezza di sistemi e reti. Tutto è iniziato smontando e riparando computer da ragazzo.",
  languages: "Italiano · Inglese",
  sections: {
    about: { id: "chi-sono", label: "Chi sono" },
    experience: { id: "esperienza", label: "Esperienza" },
    projects: { id: "progetti", label: "Progetti" },
    skills: { id: "competenze", label: "Competenze" },
    education: { id: "formazione", label: "Formazione" },
    contact: { id: "contatti", label: "Contatti" },
  },
  experience: [
    {
      company: "Krupps",
      role: "IT Junior (stage)",
      period: "2026 – oggi",
      current: true,
      bullets: [
        "Unico referente IT dell'azienda.",
        "Messa in opera di un sistema di inventario dei dispositivi integrato con Active Directory, con connessioni cifrate e certificati emessi da un'autorità interna.",
        "Installazione automatica dell'agente di inventario sui PC tramite criteri di gruppo (GPO).",
      ],
    },
    {
      company: "Coldline",
      role: "Ufficio IT (stage)",
      period: "Periodo da completare",
      bullets: [],
      draft: "Esperienza Coldline: mancano periodo (mese e anno) e 3-4 attività",
    },
  ],
  projects: [
    {
      slug: "inventario-dispositivi",
      name: "Inventario dispositivi",
      kind: "Stage",
      summary:
        "Inventario automatico di PC e server, integrato con Active Directory e distribuito sulle postazioni con i criteri di gruppo.",
      tags: ["GLPI", "Active Directory", "GPO", "TLS"],
      detail: {
        work: [
          "Messa in opera del sistema di inventario e integrazione con Active Directory.",
          "Connessioni cifrate con certificati emessi da un'autorità di certificazione interna.",
          "Installazione automatica dell'agente di inventario sui PC tramite criteri di gruppo (GPO).",
        ],
      },
      draft: "Progetto Inventario dispositivi: serve il permesso di Krupps e il testo completo",
    },
    {
      slug: "villa-berta",
      name: "Villa Berta",
      kind: "Cliente",
      summary: "Sito multilingue (IT · EN · DE) e pannello di gestione per strutture in affitto.",
      tags: ["Django", "Wagtail", "PostgreSQL", "Docker"],
      draft: "Progetto Villa Berta: serve il permesso del cliente e il testo completo",
    },
    {
      slug: "budgettracker",
      name: "BudgetTracker",
      kind: "Personale",
      summary: "App per tracciare spese ed entrate personali.",
      tags: ["C#"],
      draft: "Progetto BudgetTracker: i Progetti da pubblicare non sono ancora scelti",
    },
  ],
  skills: [
    {
      area: "Sistemi e reti",
      items: ["Active Directory", "Criteri di gruppo (GPO)", "Networking", "VMware", "Hyper-V", "NAS", "Windows", "Linux"],
    },
    {
      area: "Sicurezza",
      items: ["Certificati e PKI", "TLS", "Gestione degli accessi", "Inventario degli asset"],
    },
    {
      area: "Sviluppo",
      items: ["Python", "Java", "C#", "Django", "HTML e CSS", "JavaScript"],
    },
    {
      area: "Strumenti",
      items: ["Git", "Docker", "GLPI", "phpMyAdmin"],
    },
  ],
  education: [
    {
      school: "ITS Digital Academy Mario Volpato",
      degree: "Diploma Tecnico Superiore in Cyber Sicurezza",
      period: "2025 – 2028",
      current: true,
    },
    {
      school: "I.I.S. Leonardo Da Vinci",
      degree: "Diploma di Maturità in Servizi Commerciali Web & per la community",
      period: "2019 – 2025",
    },
  ],
  contact: {
    email: "turettaandrea201@gmail.com",
    linkedin: "https://linkedin.com/in/andreaturettaa",
    linkedinLabel: "linkedin.com/in/andreaturettaa",
  },
  ui: {
    skipToContent: "Salta al contenuto",
    sectionsNav: "Sezioni della pagina",
    language: "Lingua",
    switchLanguage: "Read in English",
    toggleTheme: "Cambia tema chiaro/scuro",
    backToTop: "Torna su",
    home: "Home",
    contactMe: "Contattami",
    currentStatus: "Stato attuale:",
    inBrief: "In breve",
    factEducation: "Formazione",
    factInternship: "Stage",
    factLanguages: "Lingue",
    at: "presso",
    current: "in corso",
    draft: "bozza",
    technologies: "Tecnologie",
    details: "Dettagli",
    contactTitle: "Parliamone.",
    contactLead: "Il modo più rapido per raggiungermi è l'email. Il curriculum completo è disponibile in PDF.",
    email: "Email",
    linkedin: "LinkedIn",
    cvRow: "Curriculum",
    opensInNewTab: "(si apre in una nuova scheda)",
    allProjects: "Tutti i progetti",
    problem: "Il problema",
    work: "Cosa ho fatto",
    result: "Risultato",
    screenshots: "Schermate",
    privacy: "Privacy",
  },
};
