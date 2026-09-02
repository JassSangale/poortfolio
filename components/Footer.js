"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-7 text-center glass-strong text-secondary flex flex-col items-center gap-2">
      <div>© 2026 Jass Sangale | Designed with 💙 in CyberSpace</div>
      <div className="flex gap-4 justify-center mt-2">
        <a href="https://linkedin.com/in/jasssangale" className="text-accent hover-glow"><Linkedin size={22} /></a>
        <a href="https://github.com/JassSangale" className="text-accent hover-glow"><Github size={22} /></a>
        <a href="mailto:jass04sangle@gmail.com" className="text-accent hover-glow"><Mail size={22} /></a>
      </div>
    </footer>
  );
}
