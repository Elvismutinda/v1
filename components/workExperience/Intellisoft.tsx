"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Intellisoft({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.1,
      }}
      className="w-full h-full -mt-10"
    >
      <h3 className="flex gap-1 font-medium text-xl ">
        Software Engineer Intern <span className="text-[#64ffda]">@</span>{" "} <span className="text-[#64ffda]">IntelliSOFT Consulting Limited</span>
      </h3>
      <p className="text-sm mt-1 font-medium">
        July 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2">
            <span className="text-textGreen mt-1"></span>
            Build and maintain web applications using ReactJS, NextJS, and TailwindCSS.
        </li>
        <li className="text-base flex gap-2">
            <span className="text-textGreen mt-1"></span>
            Build and maintain web applications using ReactJS, NextJS, and TailwindCSS.
            Fix bugs and add new features to existing web applications.
        </li>
        <li className="text-base flex gap-2">
            <span className="text-textGreen mt-1"></span>
            Build and maintain web applications using ReactJS, NextJS, and TailwindCSS.
        </li>
      </ul>
    </motion.div>
  );
}

export default Intellisoft;
