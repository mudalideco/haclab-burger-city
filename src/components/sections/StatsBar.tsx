"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  decimals?: number;
}

function Counter({ end, suffix, label, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * end);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-5xl font-bold text-primary sm:text-6xl">
        {count.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-2 font-body text-lg font-medium text-foreground">
        {label}
      </div>
    </div>
  );
}

const stats = [
  { end: 5, suffix: "+", label: "Years Serving Toronto" },
  { end: 10000, suffix: "+", label: "Burgers Served" },
  { end: 200, suffix: "+", label: "Events Catered" },
  { end: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
} as const;

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export function StatsBar() {
  return (
    <section className="bg-muted py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Counter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.decimals || 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
