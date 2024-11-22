import cshavenImg from "@/public/cshaven.png";
import digitalobImg from "@/public/digitalob.png";
import careplusImg from "@/public/careplus.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    org: "Afrib AI",
    title: "Fullstack Developer",
    description:
      "Worked on an ERP system using Odoo. Implemented a legal AI solution for legal practitioners.",
    techs: ["React", "Django", "Python", "Odoo"],
    date: "JUL 2024 - Oct 2024",
    linkName: ["CourtBuddy"],
    links: ["https://courtbuddy.ai/"],
    site: "https://afrib.ai/",
  },
  {
    org: "Almi Group",
    title: "Frontend Developer",
    description:
      "Worked on a health care solution that integrates different health care services into one platform.",
    techs: ["React Native", "Next.js", "TypeScript", "TailwindCSS"],
    date: "MAR 2024 - PRESENT",
    linkName: [],
    links: [],
    site: "",
  },
  {
    org: "IntelliSOFT Consulting Limited",
    title: "Software Engineer",
    description:
      "Collaborated with other skilled software developers on digital health projects to build systems for health organizations in the world.",
    techs: ["Java", "React", "Angular.js", "SCSS", "JavaScript", "Laravel"],
    date: "JUL 2023 - OCT 2023",
    linkName: ["OpenMRS", "PMI Kinga Malaria", "Bahmni Helium Health"],
    links: [
      "https://openmrs.org/",
      "https://github.com/IntelliSOFT-Consulting/pmi-kinga-malaria",
      "https://heliumhealthdemo.intellisoftkenya.com/",
    ],
    site: "https://intellisoftkenya.com/",
  },
] as const;

export const projectsData = [
  {
    title: "CarePulse",
    description:
      "A web application that helps patients book appointments with doctors.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Twilio"],
    imageUrl: careplusImg,
    githubUrl: "https://github.com/Elvismutinda/care-plus",
    liveUrl: "https://healthcareapp-elvismutindas-projects.vercel.app/",
  },
  {
    title: "CS Haven",
    description:
      "A web application for students to share their projects and carry out discussions.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"],
    imageUrl: cshavenImg,
    githubUrl: "https://github.com/Elvismutinda/cs-haven",
    liveUrl: "https://cshaven.vercel.app/",
  },
  {
    title: "Digital O.B",
    description:
      "A web application that digitizes the operations of the O.B found in police stations.",
    tags: ["PHP", "HTML", "CSS", "MySQL", "JavaScript", "Chart.js"],
    imageUrl: digitalobImg,
    githubUrl: "https://github.com/Elvismutinda/Digital_OB-Project",
    liveUrl: "https://digital-ob.000webhostapp.com/",
  },
] as const;

export const archiveData = [
  {
    year: "2024",
    title: "CourtBuddy",
    madeAt: "Afrib AI",
    builtWith: ["Python"],
    link: "https://courtbuddy.ai/",
    linkDisplay: "CourtBuddy",
  },
  {
    year: "2024",
    title: "CarePulse",
    madeAt: "",
    builtWith: ["Next.js", "TypeScript", "TailwindCSS", "Twilio"],
    link: "https://healthcareapp-elvismutindas-projects.vercel.app/",
    linkDisplay: "CarePulse",
  },
  {
    year: "2024",
    title: "Dr. Mordi",
    madeAt: "E-novation Centre",
    builtWith: ["React Native", "TypeScript", "TailwindCSS"],
    link: "",
    linkDisplay: "",
  },
  {
    year: "2023",
    title: "Bahmni Helium Health",
    madeAt: "IntelliSOFT Consulting Limited",
    builtWith: ["Java", "AngularJS", "JavaScript"],
    link: "https://heliumhealthdemo.intellisoftkenya.com/",
    linkDisplay: "Helium Health Demo",
  },
  {
    year: "2023",
    title: "Digital O.B V2",
    madeAt: "",
    builtWith: [
      "Next.js",
      "TypeScript",
      "Postgresql",
      "Prisma",
      "Tailwind",
      "Antd",
      "Shadcn/ui",
    ],
    link: "https://github.com/Elvismutinda/Digital-OB-v2",
    linkDisplay: "Github",
  },
  {
    year: "2023",
    title: "PMI Kinga Malaria",
    madeAt: "IntelliSOFT Consulting Limited",
    builtWith: ["React", "Node.js", "Express.js", "MongoDB", "SCSS"],
    link: "https://github.com/IntelliSOFT-Consulting/pmi-kinga-malaria",
    linkDisplay: "Github",
  },
  {
    year: "2023",
    title: "CS Haven",
    madeAt: "",
    builtWith: ["Next.js", "TypeScript", "MySQL", "Prisma", "Tailwind"],
    link: "https://cshaven.vercel.app/",
    linkDisplay: "cshaven.vercel.app",
  },
  {
    year: "2023",
    title: "Personal Website V1",
    madeAt: "",
    builtWith: ["Next.js", "TypeScript", "Resend", "Tailwind"],
    link: "https://elvismutinda.vercel.app/",
    linkDisplay: "elvismutinda.vercel.app",
  },
  {
    year: "2023",
    title: "Digital O.B",
    madeAt: "University of Nairobi",
    builtWith: ["PHP", "HTML", "CSS", "MariaDB", "JavaScript", "Chart.js"],
    link: "https://digital-ob.000webhostapp.com/",
    linkDisplay: "digital-ob.000webhostapp.com",
  },
] as const;
