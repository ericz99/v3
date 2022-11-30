import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function FooterSection() {
  return (
    <footer className="relative bg-white w-full">
      <div className="lg:max-w-[800px] mx-auto pt-24 pb-24 p-4 px-8">
        <div className="flex justify-around items-center">
          <div className="flex-1">
            <h1 className="text-black text-4xl mb-4 font-semibold">
              Eric Zhang
            </h1>
            <p className="text-black font-md font-medium italic">
              Software Engineer • 2022
            </p>
          </div>

          <div className="flex flex-1 justify-end">
            <div className="mx-2">
              <Link href="https://github.com/ericz99" target="__blank">
                <AiFillGithub size={32} color="#000000" />
              </Link>
            </div>

            <div className="mx-2">
              <Link
                href="https://www.linkedin.com/in/eric-zhang-241684155/"
                target="__blank"
              >
                <AiFillLinkedin size={32} color="#000000" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
