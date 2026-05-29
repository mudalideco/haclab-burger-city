"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { MagneticButton } from "@/components/primitives/MagneticButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#C41E2B] py-20 md:py-28">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, white 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight text-white">
            Craving a Fresh Burger?
            <br />
            Want Us at Your Next Event?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-xl text-white/80">
            We&apos;re just a message away. Tap below and let&apos;s make it happen.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              href="https://wa.me/16472828467"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-heading text-lg font-bold uppercase tracking-wide text-[#C41E2B] shadow-lg transition-all hover:bg-white/90"
            >
              <MessageCircle className="h-5 w-5" />
              Message Us on WhatsApp
            </MagneticButton>
            <a
              href="tel:+16472828467"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 font-heading text-lg font-bold uppercase tracking-wide text-white transition-all hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              Call (647) 282-8467
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
