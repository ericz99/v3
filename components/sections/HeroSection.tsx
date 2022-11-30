import Hero from "../Hero";
import NavBar from "../NavBar";

export default function HeroSection() {
  return (
    <div className={`relative h-full w-full bg-gradient-gray`}>
      <NavBar />
      <div className="h-full relative container mx-auto">
        <Hero />
      </div>
    </div>
  );
}
