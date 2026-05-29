"use client";

import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitRevealProps {
  children: string;
  as?: React.ElementType;
  type?: "chars" | "words" | "lines";
  stagger?: number;
  duration?: number;
  ease?: string;
  className?: string;
  once?: boolean;
}

export function SplitReveal({
  children,
  as: Tag = "span",
  type = "chars",
  stagger = 0.08,
  duration = 0.5,
  ease = "power4.out",
  className,
  once = true,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, { types: type });
    const items =
      type === "chars"
        ? split.chars
        : type === "words"
          ? split.words
          : split.lines;

    if (!items) return;

    gsap.from(items, {
      yPercent: 110,
      opacity: 0,
      stagger,
      duration,
      ease,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 88%",
        once,
      },
    });

    return () => split.revert();
  }, [type, stagger, duration, ease, once]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- ref needs cast for dynamic element type
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}
