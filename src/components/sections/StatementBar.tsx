"use client";

import { motion } from "framer-motion";
import { Truck } from "lucide-react";

export function StatementBar() {
  return (
    <section className="relative overflow-hidden bg-[#C41E2B] py-6">
      <motion.div
        className="flex items-center justify-center gap-4 whitespace-nowrap px-4"
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <Truck className="h-6 w-6 text-white/80" />
            <span className="font-heading text-xl font-bold uppercase tracking-widest text-white sm:text-2xl">
              Fresh Burgers — Never Frozen — Served with Love on St. Clair West
            </span>
            <span className="mx-4 text-white/40">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
