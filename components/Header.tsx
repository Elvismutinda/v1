"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/Elvismutinda"
          fgColor="currentColor"
          bgColor="transparent"
          target="_blank"
          className="text-gray-400 hover:text-[#fff] hover:scale-125 transition duration-300 ease-in-out"
        />
        <SocialIcon
          url="https://www.instagram.com/elvocool/"
          fgColor="currentColor"
          bgColor="transparent"
          target="_blank"
          className="text-gray-400 hover:text-[#fff] hover:scale-125 transition duration-300 ease-in-out"
        />
        <SocialIcon
          url="https://twitter.com/Elvocool"
          fgColor="currentColor"
          bgColor="transparent"
          target="_blank"
          className="text-gray-400 hover:text-[#fff] hover:scale-125 transition duration-300 ease-in-out"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/elvis-mutinda/"
          fgColor="currentColor"
          bgColor="transparent"
          target="_blank"
          className="text-gray-400 hover:text-[#fff] hover:scale-125 transition duration-300 ease-in-out"
        />
        <SocialIcon
          url="https://codepen.io/elvocool"
          fgColor="currentColor"
          bgColor="transparent"
          target="_blank"
          className="text-gray-400 hover:text-[#fff] hover:scale-125 transition duration-300 ease-in-out"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer text-gray-400 hover:text-[#fff] hover:scale-125 transition duration-300 ease-in-out"
          network="email"
          fgColor="currentColor"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
