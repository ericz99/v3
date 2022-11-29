import { useState } from "react";

import Hero from "../Hero";
import NavBar from "../NavBar";

export default function HeroSection() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div
      className={`relative h-full w-full bg-gradient-gray ${
        toggle && "overflow-hidden"
      }`}
    >
      <NavBar onToggle={() => setToggle((prev) => !prev)} toggle={toggle} />
      <div className="h-full relative container mx-auto">
        <Hero />
      </div>
    </div>
  );
}
