"use client";

import { motion } from "framer-motion";
import { Beef, ChefHat, UtensilsCrossed, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Beef,
    title: "Gourmet Burgers",
    description:
      "100% fresh Canadian beef, never frozen. Smashed, stacked, and loaded with fresh toppings.",
  },
  {
    icon: ChefHat,
    title: "Hand-Cut Fries",
    description:
      "Crispy golden fries, poutine, and loaded sides made to order.",
  },
  {
    icon: UtensilsCrossed,
    title: "Comfort Food",
    description:
      "Classic Canadian comfort food that hits the spot every time.",
  },
  {
    icon: PartyPopper,
    title: "Food Truck Catering",
    description:
      "We bring the grill to you. Corporate events, parties, weddings, and more.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export function ServicesGrid() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-primary">
            What We Serve
          </span>
          <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">
            Made Fresh. Made Right.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
            Every item on our menu starts with quality ingredients and a whole
            lot of flavor.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              variants={cardVariants}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
