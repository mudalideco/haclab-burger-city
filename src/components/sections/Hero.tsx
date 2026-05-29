"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { MagneticButton } from "@/components/primitives/MagneticButton";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      const chars = headlineRef.current.querySelectorAll(".hero-char");
      gsap.from(chars, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.04,
        duration: 0.7,
        ease: "power4.out",
        delay: 0.2,
      });
    }

    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div ref={bgRef} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80"
          alt="Delicious burger with fresh ingredients"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Split-Reveal Headline */}
        <h1
          ref={headlineRef}
          className="font-heading text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight text-white"
        >
          {"Fresh Burgers. Right on St. Clair West.".split("").map(
            (char, i) => (
              <span
                key={i}
                className="hero-char inline-block"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            )
          )}
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/80 sm:text-xl">
          Toronto&apos;s favorite food truck serving never-frozen burgers,
          hand-cut fries, and honest comfort food to the neighborhood since
          2021.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton
            href="#locations"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-heading text-lg font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-primary-hover"
          >
            Find Us Today
          </MagneticButton>
          <MagneticButton
            href="https://wa.me/16472828467"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-heading text-lg font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Book Catering
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
