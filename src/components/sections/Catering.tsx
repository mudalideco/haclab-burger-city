"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/primitives/MagneticButton";

const benefits = [
  "Customizable menu for any event",
  "Full-service setup and cleanup",
  "All dietary options available",
  "Serving Toronto & the GTA",
];

export function Catering() {
  return (
    <section id="catering" className="bg-[#FFF8F0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Image */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
              alt="Delicious food spread for catering"
              className="h-[400px] w-full object-cover lg:h-[550px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="rounded-xl bg-[#C41E2B] px-4 py-2 font-heading text-lg font-bold text-white shadow-lg">
                We Bring the Grill
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#C41E2B]">
              Food Truck Catering
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-[#1F1A17]">
              Let Us Bring The Grill To You
            </h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-[#6B5E54]">
              Corporate lunches, birthday parties, weddings, block parties, and
              more. We handle everything — custom menus, full setup, zero hassle.
              Just tell us where and when.
            </p>

            {/* Benefits */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C41E2B]/10">
                    <Check className="h-4 w-4 text-[#C41E2B]" />
                  </span>
                  <span className="font-body text-[#1F1A17]">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <MagneticButton
                href="https://wa.me/16472828467"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#C41E2B] px-8 py-4 font-heading text-lg font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-[#A31A24]"
              >
                Book Your Event
                <ArrowRight className="h-5 w-5" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
