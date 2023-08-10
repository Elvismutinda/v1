import React from "react";
import { FaReact } from "react-icons/fa";
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
      "Collaborated with other skilled software developers on digital health projects to create systems and websites for health organizations.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CS Haven",
    description:
      "A web application for students to share their projects and carry out discussions.",
    tags: ["React", "Next.js", "TypeScript", "MySQL", "Prisma", "Tailwind"],
    imageUrl: cshavenImg,
    githubUrl: "https://github.com/Elvismutinda/cs-haven",
    liveUrl: "",
  },
  {
    title: "Digital O.B",
    description:
      "A web application that digitizes the operations of the O.B found in police station.",
    tags: ["PHP", "HTML", "CSS", "MariaDB", "JavaScript"],
    imageUrl: digitalobImg,
    githubUrl: "https://github.com/Elvismutinda/Digital_OB-Project",
    liveUrl: "https://digital-ob.000webhostapp.com/",
  },
] as const;
