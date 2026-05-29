"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CursorFollower() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dot.current) {
        gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0 });
      }
      if (ring.current) {
        gsap.to(ring.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.18,
          ease: "power2.out",
        });
      }
    };

    const onHoverEnter = () => {
      if (ring.current) {
        gsap.to(ring.current, { scale: 2.5, duration: 0.3 });
      }
    };

    const onHoverLeave = () => {
      if (ring.current) {
        gsap.to(ring.current, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", onMove);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onHoverEnter);
      el.addEventListener("mouseleave", onHoverLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ backgroundColor: "var(--primary)" }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border mix-blend-difference"
        style={{
          borderColor: "var(--primary)",
        }}
      />
    </>
  );
}
