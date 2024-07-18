"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLink } from "react-icons/fa";

type ExperienceProps = (typeof experiencesData)[number];

export default function Experience({
  org,
  title,
  description,
  techs,
  date,
  links,
  linkName,
  site,
}: ExperienceProps) {
  const { ref } = useSectionInView("Experience");

  return (
    <motion.div
      ref={ref}
      className="mb-3 sm:mb-8"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
          <motion.div className="max-w-[42rem]">
            <ol className="group/list">
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    {date}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          href={site}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            {title} ·{" "}
                            <span className="inline-block">
                              {org}{" "}
                              <FiArrowUpRight className="inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{description}</p>
                    <ul
                      className="flex flex-wrap mt-4 gap-2"
                      aria-label="Related links"
                    >
                      {links.map((link, index) => (
                        <li className="mr-4" key={index}>
                          <a
                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaLink className="mr-1 h-3 w-3" />
                            {linkName[index]}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <ul
                      className="flex flex-wrap mt-4 gap-2"
                      aria-label="Technologies used"
                    >
                      {techs.map((tech, index) => (
                        <li
                          className="text-teal-300 bg-teal-400/10 px-3 py-1 text-[0.7rem] tracking-wider rounded-full"
                          key={index}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
          </motion.div>
    </motion.div>
  );
}
