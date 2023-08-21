"use client";

import ArchiveProject from "@/components/ArchiveProject";
import { archiveData } from "@/lib/data";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ArchivePage() {
  return (
    <motion.div
      className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
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
      <div className="lg:py-24">
        <a
          href="/"
          className="text-teal-300 group mb-2 inline-flex items-center font-semibold leading-tight"
        >
          <FiArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Elvis Mutinda
        </a>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <table className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-90/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                Year
              </th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                Project
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Made at
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {archiveData.map((project, index) => (
              <React.Fragment key={index}>
                <ArchiveProject {...project} />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
