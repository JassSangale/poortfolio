"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="container mx-auto px-4" id="contact">
      <h2 className="font-tech text-accent text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>
      <form className="max-w-lg mx-auto glass p-7 rounded-2xl flex flex-col gap-4">
        <input
          type="text"
          required
          name="name"
          placeholder="Your Name"
          className="p-2 rounded bg-bg-secondary text-white placeholder-secondary border-b-2 border-accent focus:outline-none"
        />
        <input
          type="email"
          required
          name="email"
          placeholder="Your Email"
          className="p-2 rounded bg-bg-secondary text-white placeholder-secondary border-b-2 border-accent focus:outline-none"
        />
        <textarea
          required
          name="message"
          placeholder="Message"
          className="p-2 rounded bg-bg-secondary text-white placeholder-secondary border-b-2 border-accent focus:outline-none"
          rows={5}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-accent text-black rounded-full font-bold transition-all hover:bg-accent-dark hover:scale-105 hover-glow"
        >
          Send Message
        </button>
      </form>
      <div className="flex gap-6 justify-center mt-8">
        <a href="https://linkedin.com/in/jasssangale" className="text-accent hover-glow"><Linkedin size={32} /></a>
        <a href="https://github.com/JassSangale" className="text-accent hover-glow"><Github size={32} /></a>
        <a href="mailto:jasssangale@gmail.com" className="text-accent hover-glow"><Mail size={32} /></a>
      </div>
    </section>
  );
}
