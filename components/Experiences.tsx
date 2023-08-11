"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Experience from "./Experience";
import SectionHeading from "./SectionHeading";

export default function Experiences() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
      <SectionHeading>Experiences</SectionHeading>
      <div>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <Experience {...experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
