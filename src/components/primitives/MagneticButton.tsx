"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";

const MAGNET_STRENGTH = 0.35;
const SNAP_DURATION = 0.6;
const SNAP_EASE = "elastic.out(1, 0.3)";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className,
  as: Tag = "a",
  href,
  target,
  rel,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * MAGNET_STRENGTH;
    const y = (e.clientY - rect.top - rect.height / 2) * MAGNET_STRENGTH;
    gsap.to(el, { x, y, duration: 0.3, ease: "power2.out" });
  };

  const handleLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: SNAP_DURATION,
      ease: SNAP_EASE,
    });
  };

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </div>
  );

  if (Tag === "a" && href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  );
}
