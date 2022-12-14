import { useState, useEffect } from "react";
import Link from "next/link";
import { GitHub, Linkedin } from "react-feather";
// import Hamburger from "hamburger-react";
import { useSpring, animated, config } from "react-spring";
import { Link as ReactScrollLink } from "react-scroll";

import GlobalContext from "../shared/context/GlobalContext";

export default function NavBar() {
  const [shouldChange, setChange] = useState<boolean>(false);
  // const { setMenuToggle, menuToggle: toggle } = useContext(GlobalContext);

  // const mobileStyles = useSpring({
  //   from: { transform: "translateX(-100%)" },
  //   to: [{ transform: toggle ? "translateX(0%)" : "translateX(-100%)" }],
  //   config: config.stiff,
  // });

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
      {/* <div className={`${toggle && "relative w-full h-full z-30"}`}>
        <div
          className={`w-full p-4 text-white fixed right-0 z-20 lg:hidden ${
            shouldChange && "bg-slate-900"
          }`}
        >
          <div
            className={`relative flex justify-end lg:hidden" z-35 text-white`}
          >
            <Hamburger direction="right" rounded onToggle={setMenuToggle} />
          </div>
        </div>

        <animated.div
          style={mobileStyles}
          className="h-full w-full fixed top-0 bottom-0 right-0 bg-slate-900 flex flex-col items-center justify-center"
        >
          <ul className="h-full flex flex-col justify-center items-center text-white">
            <li className="capitalize text-3xl text-gray-300 font-light my-6">
              <ReactScrollLink smooth spy to="home">
                Home
              </ReactScrollLink>
            </li>
            <li className="capitalize text-3xl text-gray-300 font-light my-6">
              <ReactScrollLink smooth spy to="experience">
                Experience
              </ReactScrollLink>
            </li>
            <li className="capitalize text-3xl text-gray-300 font-light my-6">
              <ReactScrollLink smooth spy to="project">
                Project
              </ReactScrollLink>
            </li>
          </ul>
        </animated.div>
      </div> */}

      <animated.div
        style={desktopStyles}
        className={`z-50 hidden lg:flex lg:fixed lg:h-28 lg:top-0 lg:right-0 lg:w-full lg:py-4 lg:px-8 items-center justify-around ${
          shouldChange && "bg-gradient shadow-2xl"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-4 w-4 p-6 rounded-full bg-white">
          E
        </div>
        <ul className="flex justify-between">
          <li className="capitalize text-lg text-gray-300 font-light mx-4 cursor-pointer">
            <ReactScrollLink smooth spy to="home">
              Home
            </ReactScrollLink>
          </li>
          <li className="capitalize text-lg text-gray-300 font-light mx-4 cursor-pointer">
            <ReactScrollLink smooth spy to="experience">
              Experience
            </ReactScrollLink>
          </li>
          <li className="capitalize text-lg text-gray-300 font-light mx-4 cursor-pointer">
            <ReactScrollLink smooth spy to="project">
              Project
            </ReactScrollLink>
          </li>
        </ul>

        <div className="flex justify-between">
          <div className="mx-2">
            <Link href="https://github.com/ericz99" target="__blank">
              <GitHub size={28} color="#ffffff" />
            </Link>
          </div>

          <div className="mx-2">
            <Link
              href="https://www.linkedin.com/in/eric-zhang-241684155/"
              target="__blank"
            >
              <Linkedin size={28} color="#ffffff" />
            </Link>
          </div>
        </div>
      </animated.div>
    </>
  );
}
