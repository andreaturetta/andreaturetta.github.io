import type { SiteContent } from "./types";

// Traduzione dei testi di it.ts: da far rivedere ad Andrea prima della pubblicazione.
export const en: SiteContent = {
  lang: "en",
  name: "Andrea Turetta",
  title: "IT Junior · ITS student in Cyber Security",
  status: "IT internship in progress · ITS 2025–2028",
  description:
    "Andrea Turetta, IT Junior and ITS student in Cyber Security. Experience, projects, skills and contact details.",
  // Finché non c'è il CV in inglese si scarica quello italiano, e l'etichetta lo dice.
  cv: {
    href: "/cv.pdf",
    hreflang: "it",
    label: "Download CV (Italian)",
  },
  about:
    "I study Cyber Security at ITS Digital Academy Mario Volpato (2025–2028). Alongside my studies I'm doing an internship at Krupps, where I'm the company's only IT contact: I look after workstations, servers and users, and I rolled out the device inventory system. I'm looking for an internship or a first job where I can grow in systems and network security. It all started with taking computers apart and fixing them as a kid.",
  languages: "Italian · English",
  sections: {
    about: { id: "about", label: "About" },
    experience: { id: "experience", label: "Experience" },
    projects: { id: "projects", label: "Projects" },
    skills: { id: "skills", label: "Skills" },
    education: { id: "education", label: "Education" },
    contact: { id: "contact", label: "Contact" },
  },
  experience: [
    {
      company: "Krupps",
      role: "IT Junior (internship)",
      period: "2026 – present",
      current: true,
      bullets: [
        "Sole IT contact for the company.",
        "Rolled out a device inventory system integrated with Active Directory, with encrypted connections and certificates issued by an internal certificate authority.",
        "Automated the installation of the inventory agent on PCs through Group Policy (GPO).",
      ],
    },
    {
      company: "Coldline",
      role: "IT department (internship)",
      period: "Period to be completed",
      bullets: [],
      draft: "Esperienza Coldline (EN): mancano periodo (mese e anno) e 3-4 attività",
    },
  ],
  projects: [
    {
      slug: "inventario-dispositivi",
      name: "Device inventory",
      kind: "Internship",
      summary:
        "Automated inventory of PCs and servers, integrated with Active Directory and deployed to workstations through Group Policy.",
      tags: ["GLPI", "Active Directory", "GPO", "TLS"],
      detail: {
        work: [
          "Rolled out the inventory system and integrated it with Active Directory.",
          "Encrypted connections with certificates issued by an internal certificate authority.",
          "Automated installation of the inventory agent on PCs through Group Policy (GPO).",
        ],
      },
      draft: "Progetto Inventario dispositivi (EN): serve il permesso di Krupps e il testo completo",
    },
    {
      slug: "villa-berta",
      name: "Villa Berta",
      kind: "Client",
      summary: "Multilingual website (IT · EN · DE) and management panel for holiday rentals.",
      tags: ["Django", "Wagtail", "PostgreSQL", "Docker"],
      draft: "Progetto Villa Berta (EN): serve il permesso del cliente e il testo completo",
    },
    {
      slug: "budgettracker",
      name: "BudgetTracker",
      kind: "Personal",
      summary: "App for tracking personal expenses and income.",
      tags: ["C#"],
      draft: "Progetto BudgetTracker (EN): i Progetti da pubblicare non sono ancora scelti",
    },
  ],
  skills: [
    {
      area: "Systems and networks",
      items: ["Active Directory", "Group Policy (GPO)", "Networking", "VMware", "Hyper-V", "NAS", "Windows", "Linux"],
    },
    {
      area: "Security",
      items: ["Certificates and PKI", "TLS", "Access management", "Asset inventory"],
    },
    {
      area: "Development",
      items: ["Python", "Java", "C#", "Django", "HTML and CSS", "JavaScript"],
    },
    {
      area: "Tools",
      items: ["Git", "Docker", "GLPI", "phpMyAdmin"],
    },
  ],
  education: [
    {
      school: "ITS Digital Academy Mario Volpato",
      degree: "Higher Technical Diploma in Cyber Security",
      period: "2025 – 2028",
      current: true,
    },
    {
      school: "I.I.S. Leonardo Da Vinci",
      degree: "Upper secondary diploma in Commercial Services, Web & Community track",
      period: "2019 – 2025",
    },
  ],
  contact: {
    email: "turettaandrea201@gmail.com",
    linkedin: "https://linkedin.com/in/andreaturettaa",
    linkedinLabel: "linkedin.com/in/andreaturettaa",
  },
  ui: {
    skipToContent: "Skip to content",
    sectionsNav: "Page sections",
    language: "Language",
    switchLanguage: "Leggi in italiano",
    toggleTheme: "Switch light/dark theme",
    backToTop: "Back to top",
    home: "Home",
    contactMe: "Contact me",
    currentStatus: "Current status:",
    inBrief: "At a glance",
    factEducation: "Education",
    factInternship: "Internship",
    factLanguages: "Languages",
    at: "at",
    current: "ongoing",
    draft: "draft",
    technologies: "Technologies",
    details: "Details",
    contactTitle: "Let's talk.",
    contactLead: "Email is the quickest way to reach me. My full CV is available as a PDF.",
    email: "Email",
    linkedin: "LinkedIn",
    cvRow: "CV",
    opensInNewTab: "(opens in a new tab)",
    allProjects: "All projects",
    problem: "The problem",
    work: "What I did",
    result: "Result",
    screenshots: "Screenshots",
    privacy: "Privacy",
  },
};
