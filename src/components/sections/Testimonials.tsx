"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Best burger truck in Toronto! The St. Clair Smash is unreal. I make sure to grab one every time I see them on St. Clair.",
    author: "James M.",
    rating: 5,
    role: "Regular Customer",
  },
  {
    quote:
      "They catered our office party and everyone raved about the burgers. Best decision we made. Professional, fast, and the food was incredible.",
    author: "Sarah K.",
    rating: 5,
    role: "Event Organizer",
  },
  {
    quote:
      "Finally, a food truck that uses REAL beef. You can taste the difference. The poutine is also top-notch. Highly recommend!",
    author: "Marcus T.",
    rating: 5,
    role: "Local Foodie",
  },
  {
    quote:
      "Booked them for my son's birthday party. The kids loved the mini burgers and the adults couldn't get enough of the smash burgers. 10/10!",
    author: "Lisa R.",
    rating: 5,
    role: "Happy Parent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

export function Testimonials() {
  return (
    <section className="bg-[#F5EDE0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#C41E2B]">
            What They Say
          </span>
          <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-[#1F1A17]">
            Rave Reviews
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-[#6B5E54]">
            Don&apos;t take our word for it. Here&apos;s what our community says.
          </p>
        </div>

        {/* Testimonial Cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm"
              variants={cardVariants}
            >
              {/* Stars */}
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 font-body text-[#6B5E54] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-4 border-t border-[#E8DCC8] pt-4">
                <p className="font-heading text-lg font-bold text-[#1F1A17]">
                  {t.author}
                </p>
                <p className="font-body text-sm text-[#6B5E54]">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
