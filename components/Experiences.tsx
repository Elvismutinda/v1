"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Experience from "./Experience";
import SectionHeading from "./SectionHeading";
import { FiArrowRight } from "react-icons/fi";

export default function Experiences() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
      <SectionHeading>Experiences</SectionHeading>
      <div>
        {experiencesData.map((experience, index) => (
            <Experience key={index} {...experience} />
        ))}
        <div className="mt-12">
          <a
            href="/Elvis Mutinda CV.pdf"
            download
            className="text-slate-200 inline-flex items-center leading-tight font-semibold group"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Resume
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
