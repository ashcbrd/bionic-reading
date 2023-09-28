"use client";

import AboutSection from "./(sections)/about";
import GuideSection from "./(sections)/guide";
import HeroSection from "./(sections)/hero";

export default function Home() {
  return (
    <div className="h-hax w-screen relative py-24">
      <HeroSection />
      <AboutSection />
      <GuideSection />
    </div>
  );
}
