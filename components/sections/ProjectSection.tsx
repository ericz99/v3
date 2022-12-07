import Link from "next/link";
import React from "react";

import { projects } from "../../shared/data";
import ProjectItem from "../ProjectItem";

export default function ProjectSection() {
  return (
    <div id="project" className="relative bg-gradient-gray w-full">
      <div className="lg:max-w-[1200px] mx-auto pt-24 pb-24 p-4 lg:px-8">
        <h1 className="flex items-center font-extrabold text-white lg:font-black text-4xl w-full h-full after:relative after:top-0 after:w-[850px] after:h-0.5 after:ml-8 after:bg-white">
          Projects
        </h1>
        <p className="my-4 font-xs italic text-white">
          A collection of some side projects that I shipped recently!
        </p>

        <div className="flex flex-col my-12">
          {projects.map((project, idx) => (
            <div className="mb-32 items-start rounded-lg" key={idx}>
              <ProjectItem project={project} isOdd={idx % 2 == 1} />
            </div>
          ))}
        </div>

        <h1 className="flex items-center font-extrabold text-white lg:font-black text-4xl w-full h-full after:relative after:top-0 after:w-[725px] after:h-0.5 after:ml-8 after:bg-white">
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
