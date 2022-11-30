import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import { Project } from "../shared/interfaces";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <>
      <div className="hidden lg:block rounded-md w-[75px] h-[75px]">
        <Image
          alt={project.name}
          src={project.imageUrl}
          width={75}
          height={75}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <div className="flex justify-between lg:flex-col flex-1 lg:ml-8">
        <h1 className="text-sm font-black lg:text-lg">{project.name}</h1>

        <p className="hidden lg:block my-4 text-md font-medium text-black italic">
          {project.description}
        </p>

        <div className="flex justify-between items-center lg:items-start">
          <ul className="hidden lg:flex justify-between">
            {project.techStack.map((tech, idx2) => (
              <li className="mr-2" key={idx2}>
                <Image
                  alt={tech.name}
                  src={tech.path}
                  width={50}
                  height={50}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </li>
            ))}
          </ul>

          <div className="flex">
            <Button
              type="button"
              className="cursor-pointer uppercase py-1 px-4 text-sm lg:text-md text-white ml-4 lg:py-3 lg:p-6 bg-yellow-500 rounded-md font-semibold"
            >
              View
            </Button>

            <Link
              href={project.sourceUrl}
              className="cursor-pointer uppercase py-1 px-4 text-sm lg:text-md text-white ml-4 lg:py-3 lg:p-6 bg-green-500 rounded-md font-semibold"
            >
              Source
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
