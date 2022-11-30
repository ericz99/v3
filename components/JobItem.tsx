import Link from "next/link";
import React from "react";
import { Job } from "../shared/interfaces";

interface JobItemProps {
  job: Job;
}

export default function JobItem({ job }: JobItemProps) {
  return (
    <>
      <p className="text-sm font-black my-4">
        {job.title} -{" "}
        <Link
          href={job.url}
          target="_blank"
          rel="noreferrer"
          aria-label="Company Website"
          className="font-black"
        >
          @ {job.company}
        </Link>
      </p>
      <span className="text-sm font-bold opacity-70 font-medium">
        {job.range}
      </span>

      <ul className="flex flex-col">
        {job.descriptions.map((desc, idx2) => (
          <li
            className="font-semibold my-2 pl-8 text-sm leading-relaxed relative before:content-['▹'] before:absolute before:left-0"
            key={idx2}
          >
            {desc}
          </li>
        ))}
      </ul>
    </>
  );
}
