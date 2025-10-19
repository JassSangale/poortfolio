"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Articles", href: "#articles" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section
      const positions = navItems.map((item) => {
        const el = document.getElementById(item.href.slice(1));
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const idx = positions.findIndex((top) => top > -100 && top < 400);
      setActive(idx !== -1 ? navItems[idx].href.slice(1) : "");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed w-full z-50 top-0 left-0 transition-all ${
        scrolled ? "backdrop-blur-xl glass-strong shadow-glass" : "bg-overlaymodern/50"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-tech text-accent text-xl font-bold cursor-pointer drop-shadow-accent"
        >
          JASS SANGALE
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative py-1 px-3 text-sm font-medium transition-all ${
                active === item.href.slice(1)
                  ? "text-accent"
                  : "text-textsecondary hover:text-accent"
              } hover-glow`}
            >
              {item.name}
              {active === item.href.slice(1) && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-accent text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bgmodern/95 border-t border-accent/30">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 px-6 text-textsecondary hover:text-accent transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
