"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.5,
      }}
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="uppercase tracking-widest text-gray-500 text-4xl">
            About Me
          </h3>
          <p className="py-4">
            Hello, My name is Elvis and I enjoy building accessible software
            applications. My interest in the computing world started at a very
            young age and later grew on me as I began investing in the{" "}
            <span className="text-[#64ffda]">Software Development</span> field.
            I am currently a student at the University of Nairobi studying
            Computer Science. I've had the privilege of working with skilled
            developers in building{" "}
            <span className="text-[#64ffda]">health systems</span> for major
            organizations in the world.
          </p>
          <p>
            When I'm not on the computer, I'm usually playing board/video games
            or reading fictional books.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <motion.img
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
            }}
            className="rounded-xl"
            src="https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
