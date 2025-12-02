"use client";

import React from "react";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";
import SectionHeading from "./SectionHeading";
import { MdOutlineEmail, MdLocationPin } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-3xl mx-auto scroll-mt-28"
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
      <SectionHeading>Get in Touch</SectionHeading>

      <p className="text-slate-200 text-center -mt-6 mb-6">
        Have a project in mind or just want to chat? Feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-700/30 p-8 rounded-3xl ">
        <div className="space-y-8">
          <h3 className="text-lg font-semibold text-slate-200">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                <MdOutlineEmail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-base text-slate-400">Email</p>
                <p className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                  <a href="mailto:elvismutinda2@gmail.com">
                    elvismutinda2@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <FiPhone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-base text-slate-400">Phone</p>
                <p className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                  <a href="tel:+254112463368">
                    +254 112 463 368
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400">
                <MdLocationPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-base text-slate-400">Location</p>
                <p className="text-slate-200">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4" action={async (formData) => {
            // console.log(formData.get("senderEmail"));
            // console.log(formData.get("message"));

            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <div>
            <label className="block text-base font-medium text-slate-300 mb-1">Email</label>
            <input
              className="h-12 px-4 w-full rounded-lg borderBlack bg-slate-800 bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-slate-300 mb-1">Message</label>
            <textarea
              className="h-52 mb-2 w-full rounded-lg borderBlack p-4 bg-slate-800 bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
          </div>
          <SubmitBtn />
        </form>
      </div>

    </motion.section>
  );
}
