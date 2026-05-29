"use client";

import { useEffect } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { StatementBar } from "@/components/sections/StatementBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { SignatureMenu } from "@/components/sections/SignatureMenu";
import { WhereWeRoll } from "@/components/sections/WhereWeRoll";
import { Catering } from "@/components/sections/Catering";
import { OurStory } from "@/components/sections/OurStory";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyBurgerCity } from "@/components/sections/WhyBurgerCity";
import { FAQ } from "@/components/sections/FAQ";
import { LocationContact } from "@/components/sections/LocationContact";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { CursorFollower } from "@/components/primitives/CursorFollower";
import { SmoothScrollProvider } from "@/components/primitives/SmoothScrollProvider";

export default function Home() {
  useEffect(() => {
    // Suppress native cursor when CursorFollower is active (desktop only)
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      document.documentElement.style.cursor = "none";
      const style = document.createElement("style");
      style.textContent = `html, body, a, button { cursor: none !important; }`;
      style.id = "cursor-hide";
      document.head.appendChild(style);
      return () => {
        document.documentElement.style.cursor = "";
        const s = document.getElementById("cursor-hide");
        if (s) s.remove();
      };
    }
  }, []);

  return (
    <SmoothScrollProvider>
      <CursorFollower />
      <Header />
      <main>
        <Hero />
        <StatementBar />
        <ServicesGrid />
        <StatsBar />
        <SignatureMenu />
        <WhereWeRoll />
        <Catering />
        <OurStory />
        <Gallery />
        <Testimonials />
        <WhyBurgerCity />
        <FAQ />
        <LocationContact />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
