"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Project from "./Project";
import SectionHeading from "./SectionHeading";
import { FiArrowRight } from "react-icons/fi";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <div className="mt-12">
          <a
            href="/archive"
            aria-label="View all projects"
            className="text-slate-200 inline-flex items-center leading-tight font-semibold group"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View All Projects
            </span>
            <span className="whitespace-nowrap">
              <FiArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
