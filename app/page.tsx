/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import AboutSection from "./(sections)/about";
import GuideSection from "./(sections)/guide";
import HeroSection from "./(sections)/hero";

export default function Home() {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const imageTheme = currentTheme || theme;

  const getImageUrl = () => {
    if (imageTheme === "dark") {
      return "/bg_dark.jpeg";
    } else if (imageTheme === "light") {
      return "/bg.jpeg";
    }
    return ""; // Handle other theme cases if needed
  };

  const imageUrl = getImageUrl();

  return (
    <div className="h-max w-screen relative py-24">
      <div>
        <HeroSection />
        <AboutSection />
        <GuideSection />
      </div>

      {imageTheme && (
        <img
          className="absolute h-screen w-screen opacity-5 top-0 object-cover z-0 pointer-events-none"
          src={imageUrl}
          alt="Background Image"
        />
      )}
    </div>
  );
}
