"use client";
import React from "react";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Elvis Mutinda
        </h1>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] mt-5">
          Software Engineer
        </h2>

        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
        <div className="mt-12">
          <a
            href=""
            className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Resume
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
