import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GitHub, Link2 } from "react-feather";

import { Project } from "../shared/interfaces";

interface ProjectItemProps {
  project: Project;
  isOdd: boolean;
}

export default function ProjectItem({ project, isOdd }: ProjectItemProps) {
  return (
    <div className="grid grid-cols-12 gap-2.5">
      <div
        className={`z-30 row-span-full col-span-full ${
          isOdd ? "lg:col-start-1 lg:col-span-8" : "lg:col-span-8 lg:col-end-12"
        } self-center lg:mix-blend-normal mix-blend-overlay h-96 w-full`}
      >
        <Link href={project.liveUrl} target="_blank" className="cursor-pointer">
          <Image
            alt="Project_something"
            src={project.imageUrl}
            width={500}
            height={500}
            sizes="100vw"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </Link>
      </div>

      <div
        className={`z-30 row-span-full col-span-full h-full lg:h-auto ${
          isOdd
            ? "lg:col-span-8 lg:col-end-12 text-right"
            : "lg:col-start-1 lg:col-span-8 text-left lg:ml-0"
        } self-center flex p-4 lg:justify-end justify-center flex-col flex-1`}
      >
        <h1 className="text-sm mb-4 text-white font-black text-2xl lg:text-lg">
          {project.name}
        </h1>

        <div className="z-30 lg:shadow-lg lg:shadow-cyan-400/30 lg:bg-[#181818] lg:py-4 lg:px-8 rounded-lg">
          <p className="my-4 text-md font-medium text-white italic">
            {project.description}
          </p>
        </div>

        <div
          className={`z-30 flex flex-col justify-between ${
            isOdd ? "items-end" : "items-start"
          }`}
        >
          <ul className="flex justify-between my-8">
            {project.techStack.map((tech, idx2) => (
              <li className={`${isOdd ? "ml-4" : "mr-4"}`} key={idx2}>
                <Image
                  alt={tech.name}
                  src={tech.path}
                  width={32}
                  height={32}
                  sizes="100vw"
                  style={{
                    height: "auto",
                  }}
                />
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <Link
              href={project.sourceUrl}
              target="_blank"
              className={`${isOdd ? "ml-4" : "mr-4"}`}
            >
              <GitHub size={28} color="#ffffff" />
            </Link>

            <Link
              href={project.liveUrl}
              target="_blank"
              className={`${isOdd ? "ml-4" : "mr-4"}`}
            >
              <Link2 size={28} color="#ffffff" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
