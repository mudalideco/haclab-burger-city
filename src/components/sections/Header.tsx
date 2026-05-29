"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
  { label: "Catering", href: "#catering" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1F2937]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-heading text-2xl font-bold tracking-tight text-white"
          >
            Burger<span className="text-[#C41E2B]"> City</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/16472828467"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-[#C41E2B] px-5 py-2.5 font-body text-sm font-bold text-white transition-all hover:bg-[#A31A24] md:inline-block"
          >
            Order Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#1F2937] md:hidden">
          <div className="space-y-2 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 font-body text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/16472828467"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-lg bg-[#C41E2B] px-4 py-3 text-center font-body text-base font-bold text-white transition-colors hover:bg-[#A31A24]"
              onClick={() => setMobileOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
