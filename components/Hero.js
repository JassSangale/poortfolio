"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-bgmodern bg-cybergrid"
      id="home"
    >
      {/* Main Heading */}
      <h1 className="text-7xl font-tech font-bold text-accent drop-shadow-accent">
        JASS SANGALE
      </h1>
      {/* Subheading */}
      <p className="mt-4 text-xl text-textsecondary drop-shadow-accent/50 text-center max-w-lg">
        Cybersecurity Enthusiast | Developer | Innovator
      </p>
      {/* Call-to-Action Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {/* View My Work Button */}
        <motion.a
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 24px #00F0FF, 0 0 6px #fff"
          }}
          whileTap={{ scale: 0.98 }}
          href="#projects"
          className="relative group font-tech px-8 py-3 rounded-full bg-gradient-to-r from-accent via-accent/70 to-accent/30 text-white font-bold transition-all shadow-[0_0_12px_#00F0FF] focus:outline-none"
          style={{ overflow: "hidden" }}
        >
          <span className="block z-10 relative">View My Work</span>
          {/* Dynamic Neon Border */}
          <span className="absolute inset-0 rounded-full border-2 border-accent opacity-60 group-hover:opacity-100 animate-pulse pointer-events-none"></span>
        </motion.a>

        {/* Contact Me Button */}
        <motion.a
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 24px #00F0FF, 0 0 6px #fff"
          }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="relative group font-tech px-8 py-3 rounded-full border-2 border-accent text-accent font-bold bg-gradient-to-r from-transparent via-accent/10 to-transparent transition-all hover:bg-accent hover:text-black shadow-[0_0_12px_#00F0FF] focus:outline-none"
          style={{ overflow: "hidden" }}
        >
          <span className="block z-10 relative">Contact Me</span>
          {/* Animated Glow Border */}
          <span className="absolute inset-0 rounded-full border-2 border-accent opacity-60 group-hover:opacity-100 animate-pulse pointer-events-none"></span>
        </motion.a>
      </div>
    </section>
  );
}
