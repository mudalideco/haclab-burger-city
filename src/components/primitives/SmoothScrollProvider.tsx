"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LERP = 0.08;

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: LERP, smoothWheel: true });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((t) => {
      lenis.raf(t * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
