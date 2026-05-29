"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

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

const quickLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
  { label: "Catering", href: "#catering" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Column 1: Brand */}
          <div>
            <a
              href="#"
              className="font-heading text-2xl font-bold tracking-tight text-white"
            >
              Burger<span className="text-primary"> City</span>
            </a>
            <p className="mt-3 font-body text-gray-400 leading-relaxed">
              Fresh Burgers on St. Clair West. Serving Toronto since 2021.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://facebook.com/250105012041472"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-[#1877F2]/20 hover:text-[#1877F2]"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/16472828467"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-[#25D366]/20 hover:text-[#25D366]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://facebook.com/250105012041472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-gray-400 transition-colors hover:text-white"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Follow on Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/16472828467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-gray-400 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="tel:+16472828467"
                  className="flex items-center gap-2 font-body text-gray-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  (647) 282-8467
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-body text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Burger City. All rights reserved.
            </p>
            <p className="font-body text-sm text-gray-500">
              Powered by{" "}
              <a
                href="https://haclab.net"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/60 underline-offset-2 hover:text-white hover:underline"
              >
                Haclab Co Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
