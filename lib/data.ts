import cshavenImg from "@/public/cshaven.png";
import digitalobImg from "@/public/digitalob.png";

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
    org: "IntelliSOFT Consulting Limited",
    title: "Software Engineer",
    description:
      "Collaborated with other skilled software developers on digital health projects to build systems for health organizations in the world.",
    techs: ["Java", "React", "SCSS", "JavaScript", "Laravel"],
    date: "2023 - Present",
    linkName: ["OpenMRS", "PMI Kinga Malaria"],
    links: [
      "https://openmrs.org/",
      "https://github.com/IntelliSOFT-Consulting/pmi-kinga-malaria",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "CS Haven",
    description:
      "A web application for students to share their projects and carry out discussions.",
    tags: ["Next.js", "TypeScript", "MySQL", "Prisma", "Tailwind"],
    imageUrl: cshavenImg,
    githubUrl: "https://github.com/Elvismutinda/cs-haven",
    liveUrl: "https://cshaven.vercel.app/",
  },
  {
    title: "Digital O.B",
    description:
      "A web application that digitizes the operations of the O.B found in police stations.",
    tags: ["PHP", "HTML", "CSS", "MariaDB", "JavaScript", "Chart.js"],
    imageUrl: digitalobImg,
    githubUrl: "https://github.com/Elvismutinda/Digital_OB-Project",
    liveUrl: "https://digital-ob.000webhostapp.com/",
  },
] as const;

export const archiveData = [
  {
    year: "2023",
    title: "Digital O.B V2",
    madeAt: "",
    builtWith: ["Next.js", "TypeScript", "MongoDB", "Prisma", "Tailwind"],
    link: "https://github.com/Elvismutinda/Digital-OB-v2",
    linkDisplay: "Github",
  },
  {
    year: "2023",
    title: "PMI Kinga Malaria Reports",
    madeAt: "IntelliSOFT Consulting Limited",
    builtWith: ["React", "Node.js", "MongoDB", "JavaScript"],
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