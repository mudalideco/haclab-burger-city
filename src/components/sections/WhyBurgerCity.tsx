"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Beef, Heart, Users, PartyPopper } from "lucide-react";

const benefits = [
  {
    icon: Beef,
    title: "100% Fresh Canadian Beef",
    description: "Never frozen, never pre-made. Smashed fresh when you order.",
  },
  {
    icon: Heart,
    title: "Made to Order",
    description: "Your burger is cooked when you order it — not before.",
  },
  {
    icon: Users,
    title: "Community Roots",
    description: "Proudly serving the St. Clair West neighborhood since 2021.",
  },
  {
    icon: PartyPopper,
    title: "Full Catering",
    description: "We bring the whole food truck experience to your event.",
  },
];

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export function WhyBurgerCity() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Why Burger City
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">
              The Difference Is in Every Bite
            </h2>

            <div className="mt-8 space-y-6">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 font-body text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&q=80"
              alt="Delicious burger being prepared"
              width={800}
              height={500}
              className="h-[500px] w-full rounded-2xl object-cover shadow-xl"
            />
            {/* Overlay Badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-primary px-6 py-3 shadow-lg">
              <p className="font-heading text-lg font-bold text-white">
                Quality You Can Taste
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
