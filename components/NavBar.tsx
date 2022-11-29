import { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Hamburger from "hamburger-react";
import { useSpring, animated, config } from "react-spring";

interface NavBarProps {
  onToggle: () => void;
  toggle: boolean;
}

export default function NavBar({ onToggle, toggle }: NavBarProps) {
  const [shouldChange, setChange] = useState<boolean>(false);

  const mobileStyles = useSpring({
    from: { transform: "translateX(-100%)" },
    to: [{ transform: toggle ? "translateX(0%)" : "translateX(-100%)" }],
    config: config.stiff,
  });

  const desktopStyles = useSpring({
    from: { opacity: 0 },
    to: [{ opacity: 1 }],
    delay: 500,
    config: config.stiff,
  });

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <>
      <div className={`${toggle && "relative w-full h-full z-30"}`}>
        <div
          className={`w-full p-4 text-white fixed right-0 z-20 lg:hidden ${
            shouldChange && "bg-slate-900"
          }`}
        >
          <div
            className={`relative flex justify-end lg:hidden" z-35 text-white`}
          >
            <Hamburger direction="right" rounded onToggle={onToggle} />
          </div>
        </div>

        <animated.div
          style={mobileStyles}
          className="h-full w-full fixed top-0 bottom-0 right-0 bg-slate-900 flex flex-col items-center justify-center"
        >
          <ul className="h-full flex flex-col justify-center items-center text-white">
            <li className="capitalize text-3xl text-gray-300 font-light my-6">
              Home
            </li>
            <li className="capitalize text-3xl text-gray-300 font-light my-6">
              About
            </li>
            <li className="capitalize text-3xl text-gray-300 font-light my-6">
              Explorer
            </li>
            <li className="capitalize text-3xl text-gray-300 font-light my-6">
              Resume
            </li>
          </ul>
        </animated.div>
      </div>

      <animated.div
        style={desktopStyles}
        className="z-10 hidden lg:flex lg:absolute lg:h-28 lg:top-0 lg:right-0 lg:w-full lg:py-4 lg:px-8 items-center justify-around"
      >
        <div className="flex flex-col justify-center items-center h-4 w-4 p-6 rounded-full bg-white">
          E
        </div>
        <ul className="flex justify-between">
          <li className="capitalize text-lg text-gray-300 font-light mx-4 cursor-pointer">
            Home
          </li>
          <li className="capitalize text-lg text-gray-300 font-light mx-4 cursor-pointer">
            About
          </li>
          <li className="capitalize text-lg text-gray-300 font-light mx-4 cursor-pointer">
            Explorer
          </li>
          <li className="capitalize text-lg text-gray-300 font-light mx-4 cursor-pointer">
            Resume
          </li>
        </ul>

        <div className="flex justify-between">
          <div className="mx-2">
            <Link href="https://github.com/ericz99" target="__blank">
              <AiFillGithub size={32} color="#ffffff" />
            </Link>
          </div>

          <div className="mx-2">
            <Link
              href="https://www.linkedin.com/in/eric-zhang-241684155/"
              target="__blank"
            >
              <AiFillLinkedin size={32} color="#ffffff" />
            </Link>
          </div>
        </div>
      </animated.div>
    </>
  );
}
