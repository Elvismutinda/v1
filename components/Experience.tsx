"use client";
import React, { useState } from "react";
import Intellisoft from "./workExperience/Intellisoft";
import AmazonTest from "./workExperience/AmazonTest";
import GoogleTest from "./workExperience/GoogleTest";
import { motion } from "framer-motion";

type Props = {};

function ExperienceTest({}: Props) {
  const [workIntellisoft, setWorkIntellisoft] = useState(true);
  const [workAmazonTest, setWorkAmazonTest] = useState(false);
  const [workGoogleTest, setWorkGoogleTest] = useState(false);

  const handleIntellisoft = () => {
    setWorkIntellisoft(true);
    setWorkAmazonTest(false);
    setWorkGoogleTest(false);
  };

  const handleAmazon = () => {
    setWorkIntellisoft(false);
    setWorkAmazonTest(true);
    setWorkGoogleTest(false);
  };

  const handleGoogle = () => {
    setWorkIntellisoft(false);
    setWorkAmazonTest(false);
    setWorkGoogleTest(true);
  };

  return (
    <motion.div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto  gap-8">
        <h3 className="uppercase tracking-widest text-gray-500 text-4xl">
          Work Experience
        </h3>
        <div className="items-center justify-center mt-10 flex flex-row overflow-hidden">
          <div>
            <ul className="md:w-32 flex flex-col">
              <li
                onClick={handleIntellisoft}
                className={`${
                  workIntellisoft
                    ? "border-2 border-[#64ffda] text-[#64ffda]"
                    : "border-2 hover:border-gray-700 text-gray-700 hover:text-[#64ffda]"
                }  border-y-0 border-r-0 border-l-4 border-gray-700 bg-transparent hover:bg-gray-800 py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              >
                IntelliSOFT Consulting Limited
              </li>
              <li
                onClick={handleAmazon}
                className={`${
                  workAmazonTest
                    ? "border-2 border-[#64ffda] text-[#64ffda]"
                    : "border-2 hover:border-gray-700 text-gray-700 hover:text-[#64ffda]"
                } border-y-0 border-r-0 border-l-4 border-gray-700 bg-transparent hover:bg-gray-800 py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              >
                Amazon test
              </li>
              <li
                onClick={handleGoogle}
                className={`${
                  workGoogleTest
                    ? "border-2 border-[#64ffda] text-[#64ffda]"
                    : "border-2 hover:border-gray-700 text-gray-700 hover:text-[#64ffda]"
                } border-y-0 border-r-0 border-l-4 border-gray-700 bg-transparent hover:bg-gray-800 py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              >
                Google test
              </li>
            </ul>
          </div>
          {workIntellisoft && <Intellisoft />}
          {workAmazonTest && <AmazonTest />}
          {workGoogleTest && <GoogleTest />}
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceTest;
