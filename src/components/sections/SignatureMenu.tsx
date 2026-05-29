"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const menuItems = [
  {
    name: "The Classic Burger",
    description: "Single or double, lettuce, tomato, onion, pickles, secret sauce.",
    price: "$9",
    featured: false,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
  },
  {
    name: "The St. Clair Smash",
    description: "Double smashed patty, American cheese, caramelized onions, special sauce.",
    price: "$14",
    featured: true,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80",
  },
  {
    name: "Bacon City Burger",
    description: "Thick-cut bacon, aged cheddar, BBQ sauce, crispy onions.",
    price: "$16",
    featured: false,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80",
  },
  {
    name: "Poutine",
    description: "Hand-cut fries, cheese curds, rich gravy.",
    price: "$10",
    featured: false,
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
  },
  {
    name: "Veggie Burger",
    description: "Plant-based patty, fresh toppings, vegan option.",
    price: "$13",
    featured: false,
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&q=80",
  },
  {
    name: "Kids Meal",
    description: "Mini burger or chicken strips, fries, drink.",
    price: "$8",
    featured: false,
    image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=600&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const;

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export function SignatureMenu() {
  return (
    <section id="menu" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Our Menu
          </span>
          <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">
            The Signature Lineup
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
            Every burger is smashed to order. Every fry is cut fresh. Every meal
            is served with a side of good vibes.
          </p>
        </div>

        {/* Menu Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              className={`group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                item.featured ? "ring-2 ring-primary" : ""
              }`}
              variants={cardVariants}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-accent px-3 py-1 font-heading text-xs font-bold uppercase text-white">
                    <Star className="h-3 w-3 fill-white" />
                    Best Seller
                  </div>
                )}
                {/* Price Badge */}
                <div className="absolute bottom-3 left-3 rounded-lg bg-primary px-3 py-1.5 font-heading text-lg font-bold text-white shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {item.name}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
