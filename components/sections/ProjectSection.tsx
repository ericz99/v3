import Link from "next/link";
import React from "react";

import { projects } from "../../shared/data";
import ProjectItem from "../ProjectItem";

export default function ProjectSection() {
  return (
    <div className="relative bg-gradient-gray w-full">
      <div className="lg:max-w-[800px] mx-auto pt-24 pb-24 p-4 px-8">
        <h1 className="flex items-center font-extrabold text-white lg:font-black text-4xl w-full h-full after:relative after:top-0 after:w-[575px] after:h-0.5 after:ml-8 after:bg-white">
          Projects
        </h1>
        <p className="my-4 font-xs italic text-white">
          A collection of some side projects that I shipped recently!
        </p>

        <div className="flex flex-col my-12">
          {projects.map((project, idx) => (
            <div
              className="flex mb-8 items-start bg-white py-4 px-6 lg:p-8 rounded-lg"
              key={idx}
            >
              <ProjectItem project={project} />
            </div>
          ))}
        </div>

        <h1 className="flex items-center font-extrabold text-white lg:font-black text-4xl w-full h-full after:relative after:top-0 after:w-[575px] after:h-0.5 after:ml-8 after:bg-white">
          Other Projects
        </h1>
        <p className="my-4 font-xs italic text-white">
          <span>More projects can be found on my</span>
          <Link
            href="https://github.com/ericz99"
            target="__blank"
            className="ml-2 font-black before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block"
          >
            <span className="relative text-white hover:text-blue-700">
              GitHub
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
