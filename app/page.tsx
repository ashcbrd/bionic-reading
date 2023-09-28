"use client";

import { useTheme } from "next-themes";
import AboutSection from "./(sections)/about";
import GuideSection from "./(sections)/guide";
import HeroSection from "./(sections)/hero";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="h-max w-screen relative py-24">
      <div>
        <HeroSection />
        <AboutSection />
        <GuideSection />
      </div>
      <img
        className="absolute h-screen w-screen opacity-5 top-0 object-cover z-0 pointer-events-none"
        src={`/bg${
          theme === "dark" ? "_dark.jpeg" : theme === "light" ? ".jpeg" : ""
        }`}
      />
    </div>
  );
}
