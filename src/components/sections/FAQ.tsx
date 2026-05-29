"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Where are you located?",
    answer:
      "Our base location is 1795 St Clair Ave W, Toronto, ON M6N 1J7. We're a food truck so we move around! Follow us on Facebook for our daily locations and pop-up spots.",
  },
  {
    question: "Do you deliver?",
    answer:
      "We don't deliver individually, but we cater events! Book us for your next party, corporate event, or gathering and we'll bring the whole experience to you.",
  },
  {
    question: "Do you have vegetarian/vegan options?",
    answer:
      "Yes! Our veggie burger is plant-based and absolutely delicious. Just let us know about dietary requirements when you order and we'll make it work.",
  },
  {
    question: "How do I book catering?",
    answer:
      "Easy! Just message us on WhatsApp and we'll take it from there. Tell us the date, guest count, and location, and we'll handle the rest — menu planning, setup, cooking, and cleanup.",
  },
  {
    question: "What are your hours?",
    answer:
      "We're typically open Monday to Friday from 11AM to 8PM at our base location. On weekends, you can find us at local events, markets, and private bookings. Check our Facebook for the latest schedule!",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-primary">
            FAQ
          </span>
          <h2 className="mt-3 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">
            Got Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
            Everything you need to know before you take a bite.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-white overflow-hidden"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-muted"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-lg font-bold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border px-6 py-4">
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
