"use client";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-bgmodern bg-cybergrid" id="home">
      {/* Main Heading */}
      <h1 className="text-7xl font-tech font-bold text-accent drop-shadow-accent">
        JASS SANGALE
      </h1>
      {/* Subheading */}
      <p className="mt-4 text-xl text-textsecondary drop-shadow-accent/50 text-center max-w-lg">
        Cybersecurity Enthusiast | Developer | Innovator
      </p>
      {/* Call-to-Action Buttons */}
      <div className="flex gap-6 mt-8">
        <a
          href="#projects"
          className="relative px-8 py-3 bg-accent text-white font-tech rounded-full shadow-accent transition-all hover:shadow-accent hover:scale-105 before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-white before:via-white/60 before:to-white before:-z-10"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="relative px-8 py-3 border-2 border-accent text-accent font-tech rounded-full transition-all hover:bg-accent hover:text-black hover:shadow-accent hover:scale-105 before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-white before:via-white/60 before:to-white before:-z-10"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
