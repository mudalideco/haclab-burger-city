"use client";

import { motion } from "framer-motion";

export function OurStory() {
  return (
    <section className="bg-[#F5EDE0] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#C41E2B]">
              Our Story
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-[#1F1A17]">
              Born on St. Clair West
            </h2>

            <div className="mt-6 space-y-4 font-body text-lg leading-relaxed text-[#6B5E54]">
              <p>
                Burger City was born from a simple belief — great burgers don&apos;t
                need to be complicated. Just fresh beef, quality ingredients, and
                a grill that&apos;s always hot.
              </p>
              <p>
                We started as a small food truck with big ambitions: serve the
                best smash burgers on St. Clair West. No freezers. No shortcuts.
                Just real food made by real people who care.
              </p>
              <p>
                Today, we&apos;re proud to serve our community — one delicious burger
                at a time. Whether you catch us on the street or book us for your
                next event, we bring the same energy, quality, and love every
                single time.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="relative mt-8 border-l-4 border-[#C41E2B] bg-white/60 pl-6 py-4 italic">
              <p className="font-heading text-2xl font-bold text-[#1F1A17]">
                &ldquo;Fresh beef. Hot grill. No shortcuts. That&apos;s the deal.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80"
                alt="Burger City food truck preparing fresh burgers"
                className="h-[450px] w-full object-cover lg:h-[550px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-[#C41E2B]/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
