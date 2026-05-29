"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink, Clock } from "lucide-react";

export function WhereWeRoll() {
  return (
    <section
      id="locations"
      className="bg-[#1F2937] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Schedule */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              Where We Roll
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
              Find Your Next Burger
            </h2>
            <p className="mt-4 font-body text-lg text-white/70">
              Follow us for daily locations! We rotate between St. Clair West
              hotspots.
            </p>

            {/* Schedule Cards */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#C41E2B]/20 text-[#C41E2B]">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    Monday – Friday
                  </h3>
                  <p className="font-body text-white/70">
                    1795 St Clair Ave W (base location)
                  </p>
                  <div className="mt-1 flex items-center gap-1 font-body text-sm text-[#F59E0B]">
                    <Clock className="h-3.5 w-3.5" />
                    11AM – 8PM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B]/20 text-[#F59E0B]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    Weekends
                  </h3>
                  <p className="font-body text-white/70">
                    Local events, markets, and private bookings
                  </p>
                </div>
              </div>
            </div>

            {/* Facebook CTA */}
            <a
              href="https://facebook.com/250105012041472"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#F59E0B] px-6 py-3 font-heading text-base font-bold uppercase tracking-wide text-[#1F2937] transition-all hover:bg-[#D97706]"
            >
              Follow on Facebook for Today&apos;s Location
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Right: Map / Photo */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=80"
              alt="Burger City food truck on the streets of Toronto"
              className="h-[400px] w-full object-cover lg:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 rounded-xl bg-white/20 p-4 backdrop-blur-md">
                <MapPin className="h-6 w-6 shrink-0 text-[#C41E2B]" />
                <div>
                  <p className="font-heading text-lg font-bold text-white">
                    1795 St Clair Ave W
                  </p>
                  <p className="font-body text-sm text-white/80">
                    Toronto, ON M6N 1J7
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
