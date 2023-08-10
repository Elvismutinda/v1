import React from "react";

export default function Footer() {
  return (
    <footer className="pb-16 px-4 text-center text-slate-500">
      <p className="text-xs">
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-bold text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-bold text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href=""
          className="font-bold text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
        >
          TypeScript
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-bold text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
        >
          Tailwind CSS
        </a>
        ,{" "}
        <a
          href="https://framer.com/motion/"
          className="font-bold text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
        >
          Framer Motion
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-bold text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          target="_blank"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
}
