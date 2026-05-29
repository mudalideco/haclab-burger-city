"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    alt: "Fresh burger with lettuce and tomato",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=80",
    alt: "Juicy burger with cheese",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
    alt: "Classic burger with fries",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
    alt: "Hand-cut fries in a basket",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80",
    alt: "Bacon cheeseburger",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600&q=80",
    alt: "Food truck serving customers",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=600&q=80",
    alt: "Fast food meal spread",
    span: "col-span-1 row-span-1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
} as const;

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export function Gallery() {
  return (
    <section className="bg-[#FFF8F0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#C41E2B]">
            Gallery
          </span>
          <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-[#1F1A17]">
            Taste the Vibe
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-[#6B5E54]">
            A glimpse of what we serve and where we roll.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {images.slice(0, 6).map((image, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${image.span}`}
              variants={imageVariants}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ minHeight: index === 1 ? "400px" : "200px" }}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
