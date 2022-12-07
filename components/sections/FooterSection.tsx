import Link from "next/link";
import React from "react";

import { GitHub, Linkedin } from "react-feather";

export default function FooterSection() {
  return (
    <footer className="relative bg-white w-full">
      <div className="lg:max-w-[1400px] mx-auto p-8 lg:pt-24 lg:pb-24 lg:p-4 lg:px-8">
        <div className="flex justify-around items-center">
          <div className="hidden lg:block flex-1">
            <h1 className="text-black text-4xl mb-4 font-semibold">
              Eric Zhang
            </h1>
            <p className="text-black font-md font-medium italic">
              Software Engineer • 2022
            </p>
          </div>

          <div className="flex flex-1 justify-center lg:justify-end lg:items-center">
            <div className="mx-2">
              <div className="p-2 rounded-lg hover:border-2 hover:border-solid hover:border-gray-400">
                <Link href="https://github.com/ericz99" target="__blank">
                  <GitHub size={32} />
                </Link>
              </div>
            </div>

            <div className="mx-2">
              <div className="p-2 rounded-lg hover:border-2 hover:border-solid hover:border-gray-400">
                <Link
                  href="https://www.linkedin.com/in/eric-zhang-241684155/"
                  target="__blank"
                >
                  <Linkedin size={32} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
