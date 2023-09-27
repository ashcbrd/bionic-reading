"use client";

import AboutPage from "./(sections)/about";
import Hero from "./(sections)/hero";

export default function Home() {
  return (
    <div className="h-hax w-screen relative">
      <Hero />
      <AboutPage />
    </div>
  );
}
