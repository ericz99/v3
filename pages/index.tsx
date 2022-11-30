import { useContext } from "react";
import {
  HeroSection,
  ExperienceSection,
  ProjectSection,
  FooterSection,
} from "../components";
import GlobalContext from "../shared/context/GlobalContext";

export default function Home() {
  const { menuToggle } = useContext(GlobalContext);

  return (
    <div
      className={`h-full w-full relative ${
        menuToggle ? "overflow-hidden" : ""
      }`}
    >
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
}
