import React from "react";
import { useSpring, animated, config } from "react-spring";
import Link from "next/link";
import { AiFillCaretUp } from "react-icons/ai";

export default function Hero() {
  const fadeHero = useSpring({
    from: { opacity: 0 },
    to: [{ opacity: 1 }],
    delay: 1000,
    config: config.stiff,
  });

  return (
    <animated.div
      style={fadeHero}
      className="relative px-6 pt-14 pb-28 h-full w-full flex flex-col items-center container mx-auto text-white lg:justify-center"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold lg:font-black text-5xl lg:text-6xl">
          Hi, I&apos;m Eric
        </h1>
        <span className="font-medium text-md lg:text-lg text-gray-600 my-4">
          Software Engineer @ ???
        </span>

        <p className="font-extrabold text-5xl lg:text-6xl my-4 text-center lg:font-black lg:mx-6 lg:w-[50%] lg:leading-normal lg:my-0">
          Passionate to craft amazing software application
        </p>

        <p className="font-medium text-sm mt-8 leading-relaxed text-gray-600 text-center lg:text-md lg:text-lg lg:w-[50%]">
          My name is Eric, I&apos;m a software engineer based in Brooklyn, NY. I
          am also a technology enthusiast because I love learning new things.
          Feel free to poke around my portfolio website. ✌️
        </p>

        <Link
          href="https://www.linkedin.com/in/eric-zhang-241684155/"
          target="_blank"
          className="cursor-pointer my-8 py-4 p-6 bg-white rounded-md text-black font-semibold text-sm"
        >
          Connect with me
        </Link>
      </div>

      <div className="hidden lg:block absolute top-96 right-24">
        <span className="flex justify-center mb-4">
          <AiFillCaretUp size={24} color="#ffffff" />
        </span>
        <span className="py-2 px-4 bg-gray-600 text-sm text-white rounded-full">
          Software Engineer
        </span>
      </div>

      <div className="hidden lg:block absolute top-[12rem] left-52">
        <span className="flex justify-center mb-4">
          <AiFillCaretUp size={24} color="#ffffff" />
        </span>
        <span className="py-2 px-4 bg-gray-600 text-sm text-white rounded-full">
          Backend Engineer
        </span>
      </div>

      <div className="hidden lg:block absolute top-[40rem] left-32">
        <span className="flex justify-center mb-4">
          <AiFillCaretUp size={24} color="#ffffff" />
        </span>
        <span className="py-2 px-4 bg-gray-600 text-sm text-white rounded-full">
          Frontend Engineer
        </span>
      </div>
    </animated.div>
  );
}
