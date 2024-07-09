"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCodepen,
  FaInstagram,
} from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          ></motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="">Elvis Mutinda</a>
        </span>
        <br />
        <span className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Developer
        </span>
        <p className="mt-4 leading-normal text-slate-400 text-lg">
          I build accessible software applications on the web.
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in touch{" "}
          <FiMail className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer"
          href="/ELVIS MUTINDA CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
      </motion.div>

      <motion.ul
        className="mt-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <li className="mr-5">
          <a
            className="block text-slate-400 text-[1.75rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-200 active:scale-105 transition cursor-pointer"
            href="https://github.com/Elvismutinda/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="mr-5">
          <a
            className="block text-slate-400 text-[1.75rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-200 active:scale-105 transition cursor-pointer"
            href="https://linkedin.com/in/elvis-mutinda/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        {/* <li className="mr-5">
          <a
            className="block text-slate-400 text-[1.75rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-200 active:scale-105 transition cursor-pointer"
            href="https://twitter.com/Elvocool/"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </li> */}
      </motion.ul>
    </section>
  );
}
