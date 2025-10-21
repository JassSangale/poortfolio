"use client";
import { motion } from "framer-motion";
import { Download, Shield, Award, Code } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-16 bg-bgmodern" id="about">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-tech text-accent font-bold mb-6">
            About Me
          </h2>
          <p className="text-lg text-textsecondary mb-4">
            I&apos;m a Cyber Security student passionate about ethical hacking, AI in security, and network defense. I&apos;ve participated in the Smart India Hackathon and Cyber Suraksha Nukkad Natak through the CyberPeace Centre of Excellence, promoting digital safety awareness.
          </p>
          <ul className="mb-5">
            <li className="font-tech text-accent mb-2">
              <Shield className="inline w-4 h-4 mr-1" /> CyberPeace Centre member
            </li>
            <li className="font-tech text-accent mb-2">
              <Award className="inline w-4 h-4 mr-1" /> Smart India Hackathon participant
            </li>
            <li className="font-tech text-accent mb-2">
              <Code className="inline w-4 h-4 mr-1" /> AI-based Malware Detection Project
            </li>
          </ul>
          {/* Download Resume Button in "Contact Me" style */}
          <motion.a
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 18px #00F0FF, 0 0 4px #fff"
            }}
            whileTap={{ scale: 0.98 }}
            href="/resume.pdf"
            download
            className="relative group font-tech px-8 py-3 rounded-full border-2 border-accent text-accent font-bold bg-gradient-to-r from-transparent via-accent/10 to-transparent transition-all hover:bg-accent hover:text-black shadow-[0_0_10px_#00F0FF] focus:outline-none inline-flex items-center gap-2"
            style={{ overflow: "hidden" }}
          >
            <Download className="w-5 h-5" />
            <span className="z-10 relative">Download Resume</span>
            {/* Animated Glow Border */}
            <span className="absolute inset-0 rounded-full border-2 border-accent opacity-60 group-hover:opacity-100 animate-pulse pointer-events-none"></span>
          </motion.a>
        </motion.div>
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <div className="glass bg-overlaymodern/60 rounded-2xl shadow-glass p-4 w-48">
            <Image
              src="/img/image.jpg"
              alt="Jass Sangale"
              width={192}
              height={192}
              className="rounded-xl object-cover shadow-accent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
