"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mt-0 sm:mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4 text-slate-400 text-left">
        I'm a developer passionate about crafting accessible, pixel-perfect user
        interfaces that blend thoughtful design with robust engineering. My
        favorite work lies at the intersection of design and development,
        creating experiences that not only look great but are meticulously built
        for performance and usability.
      </p>

      <p className="mb-4 text-slate-400 text-left">
        Currently, I'm a{" "}
        <span className="font-medium text-slate-200">
          Bsc. Computer Science
        </span>{" "}
        graduate from{" "}
        <a
          href="https://uonbi.ac.ke/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          The University of Nairobi
        </a>{" "}
        and I work as a Software Developer at{" "}
        <a
          href="https://nextranssolutions.co.ke/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          Nextrans LIT Solutions Limited{" "}
        </a>
        where I contribute to the development and maintenance of Regulatory
        Information Management Systems (RIMS), ensuring the platform meets web
        accessibility standards and best practices to deliver an inclusive user
        experience.
      </p>

      <p className="mb-4 text-slate-400 text-left">
        In the past, I've had the opportunity to develop software across a
        variety of settings — from{" "}
        <a
          href="https://intellisoftkenya.com/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          digital health companies
        </a>{" "}
        and{" "}
        <a
          href="https://www.arvocap.com/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          large corporations
        </a>{" "}
        to{" "}
        <a
          href="https://afrib.ai/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          AI start-ups
        </a>
        . My favorite part of programming is the problem-solving aspect - That
        feeling of finally figuring out a solution to a problem.
      </p>

      <p className="text-slate-400 text-left">
        In my spare time, I enjoy playing board/video games or watching anime.
      </p>
    </motion.section>
  );
}
