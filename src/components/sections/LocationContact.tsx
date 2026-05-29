"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function LocationContact() {
  return (
    <section id="contact" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center rounded-2xl bg-white p-8 shadow-sm md:p-10"
          >
            <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Get In Touch
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-foreground">
              Find Us. Message Us. Eat Well.
            </h2>

            <div className="mt-8 space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Address
                  </h3>
                  <p className="font-body text-muted-foreground">
                    1795 St Clair Ave W
                    <br />
                    Toronto, ON M6N 1J7
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Phone
                  </h3>
                  <a
                    href="tel:+16472828467"
                    className="font-body text-primary underline-offset-2 hover:underline"
                  >
                    (647) 282-8467
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/16472828467"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-primary underline-offset-2 hover:underline"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1877F2]/10">
                  <FacebookIcon className="h-5 w-5 text-[#1877F2]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Facebook
                  </h3>
                  <a
                    href="https://facebook.com/250105012041472"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-primary underline-offset-2 hover:underline"
                  >
                    Follow for daily locations
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    Hours
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Mon–Fri: 11AM – 8PM
                    <br />
                    Weekends: Follow on Facebook
                  </p>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <a
              href="https://wa.me/16472828467"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-heading text-lg font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-primary-hover"
            >
              <MessageCircle className="h-5 w-5" />
              Message Us on WhatsApp
            </a>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-2xl shadow-sm"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.7!2d-79.474!3d43.675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b340c5e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2s1795+St+Clair+Ave+W%2C+Toronto%2C+ON+M6N+1J7!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="100%"
              style={{ minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Burger City location on St. Clair Ave W"
              className="border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
