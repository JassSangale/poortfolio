"use client";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      className="hero-section min-h-screen flex flex-col justify-center items-center px-5"
      id="home"
    >
      {/* Main Heading */}
      <p className="hero-kicker">Cybersecurity · Development · Research</p>
      <h1 className="hero-title text-center">
        JASS SANGALE
      </h1>
      {/* Subheading */}
      <p className="hero-subtitle text-center max-w-xl">
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
          className="primary-button relative group px-7 py-3 rounded-full font-semibold transition-all focus:outline-none"
          style={{ overflow: "hidden" }}
        >
          <span className="block z-10 relative">View My Work</span>
        </motion.a>


        {/* Contact Me Button */}
        <motion.a
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 24px #00F0FF, 0 0 6px #fff"
          }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="secondary-button relative group px-7 py-3 rounded-full font-semibold transition-all focus:outline-none"
          style={{ overflow: "hidden" }}
        >
          <span className="block z-10 relative">Contact Me</span>
        </motion.a>
      </div>
    </section>
  );
}
