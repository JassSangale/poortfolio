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
          <h2 className="text-4xl font-tech text-accent font-bold mb-6">About Me</h2>
          <p className="text-lg text-textsecondary mb-4">
            I'm a Cyber Security student passionate about ethical hacking, AI in security, and network defense. I've participated in the Smart India Hackathon and Cyber Suraksha Nukkad Natak through the CyberPeace Centre of Excellence, promoting digital safety awareness.
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
          <a
            href="/resume.pdf"
            download
            className="relative inline-flex items-center gap-2 px-6 py-2 bg-accent text-white font-bold rounded-full hover-glow transition-all before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-white before:via-white/60 before:to-white before:-z-10"
          >
            <Download className="w-5 h-5" /> Download resume
          </a>
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
