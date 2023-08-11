"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mt-0 sm:mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-slate-400">
        From a young age, I have always been fascinated with computers and this
        eventually hooked me into the world of programming. Fast-forward to
        today, I am currently a student at the{" "}
        <a
          href="https://uonbi.ac.ke/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          University of Nairobi
        </a>{" "}
        studying{" "}
        <span className="font-medium text-slate-200">Computer Science</span> and
        I've had the privilege of collaborating with skilled developers at a{" "}
        <a
          href="https://intellisoftkenya.com/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          digital health company
        </a>
        . My favorite part of programming is the problem-solving aspect - That
        feeling of finally figuring out a solution to a problem. <br /> <br />
        My core stack is{" "}
        <span className="font-medium text-slate-200">
          React, Next.js, Laravel, and MySQL
        </span>
        . I am also familiar with{" "}
        <span className="font-medium text-white">TypeScript</span> and{" "}
        <span className="font-medium text-white">Prisma</span>. I am always
        looking forward to learning new technologies.
      </p>

      <p className="text-slate-400">
        In my free time I enjoy playing board/video games or watching anime.
      </p>
    </motion.section>
  );
}
