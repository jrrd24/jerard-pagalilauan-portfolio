import { Metadata } from "next";
import { BottomNav } from "@/components/BottomNav";
import React from "react";
import AchievementsSection from "./sections/Achievements";
import Hero from "./sections/Hero";
import WhoAmI from "./sections/WhoAmI";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jerard Pagalilauan | Home",
};

export default function Home() {
  return (
    <main
      className="select-text  bg-base-100 scroll-smooth relative "
      style={{
        backgroundImage: `
        radial-gradient(at 40% 20%, hsla(183,56%,51%,1) 0px, transparent 50%),
        radial-gradient(at 98% 0%, hsla(189,0%,96%,1) 0px, transparent 50%),
        radial-gradient(at 18% 92%, hsla(341,96%,65%,1) 0px, transparent 50%)
      `,
      }}
    >
      <Hero />
      <WhoAmI />
      <Experience />
      <AchievementsSection />
      <Skills />
      <Projects />
      <BottomNav />
      <Footer />
    </main>
  );
}
