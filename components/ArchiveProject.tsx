import { archiveData } from "@/lib/data";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

type ArchiveProjectProps = (typeof archiveData)[number];

export default function ArchiveProject({
  year,
  title,
  madeAt,
  builtWith,
  link,
  linkDisplay,
}: ArchiveProjectProps) {
  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="text-slate-400 translate-y-px">{year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
        <div>
          <div className="block sm:hidden">
            {link ? (
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={title}
              >
                <span>
                  <span className="inline-block">
                    {title}
                    <FiArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none translate-y-px" />
                  </span>
                </span>
              </a>
            ) : (
              <span>{title}</span>
            )}
          </div>
          <div className="hidden sm:block">{title}</div>
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
        <div className="text-slate-400 translate-y-px whitespace-nowrap">
          {madeAt}
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {builtWith.map((tag, index) => (
            <li
              className="my-1 mr-1.5"
              key={index}
              aria-label="Technologies used"
            >
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            {link ? (
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={linkDisplay}
              >
                <span className="inline-block">
                  {linkDisplay.toLowerCase() === "github" ? (
                    <>
                      {linkDisplay}{" "}
                      <FaGithub className="inline-block ml-0.5 mb-0.5 h-3.5 w-3.5 shrink-0" />
                    </>
                  ) : (
                    <>
                      {linkDisplay}
                      <FiArrowUpRight className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" />
                    </>
                  )}
                </span>
              </a>
            ) : null}
          </li>
        </ul>
      </td>
    </tr>
  );
}
