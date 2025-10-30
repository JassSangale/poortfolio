"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    slug: "finite-automata-text-search",
    title: "Applications of Finite Automata in Text Search and Pattern Matching",
    author: "Jass Sangale",
    subject: "Theory of Computation and compiler design",
    desc: "Exploring how finite automata theory applies to text processing and pattern matching.",
  },
  {
    slug: "ethical-privacy-data-mining",
    title: "Ethical Issues and Privacy Concerns in Data Mining",
    author: "Jass Sangale",
    subject: "Data Warehousing & Mining",
    desc: "Balancing data mining benefits with ethical responsibility and privacy protection in today's digital era.",
  },
  {
    slug: "vedic-maths-algebraic-expressions",
    title: "Solving Algebraic Expressions using Vedic Sutras",
    author: "Jass Sangale",
    subject: "Vedic Mathematics",
    desc: "Exploring ancient Indian mathematical techniques to simplify and solve algebraic expressions faster than traditional methods.",
  },
  {
    slug: "dark-web-investigations",
    title: "Dark Web Investigations: Tools, Techniques, and Challenges",
    author: "Jass Sangale",
    subject: "Cyber Crime Investigation & Digital Forensics",
    desc: "Comprehensive insights into dark web investigations—including key tools, forensic techniques, and investigator challenges in cyberspace.",
  },
  {
    slug: "ooad-data-warehousing-mining",
    title: "Object-Oriented Analysis and Design",
    author: "Jass Sangale",
    subject: "Software Engineering and Project Management",
    desc: "Explore how OOAD principles streamline the design, modular, and scalable.",
  },
  {
    slug: "future-cloud-security-enterprises",
    title: "Future of Cloud Security in Enterprises",
    author: "Jass Sangale",
    subject: "Cyber Security Principles and Practices",
    desc: "Exploring the future of cloud security with Zero Trust, AI-driven monitoring, confidential computing, and blockchain innovations for enterprise environments.",
  }
];

export default function Articles() {
  return (
    <section className="container mx-auto px-4 py-16" id="articles">
      <h2 className="font-tech text-accent text-4xl font-bold text-center mb-10">
        Articles
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((a) => (
          <motion.div
            key={a.slug}
            whileHover={{ scale: 1.03 }}
            className="glass article-card p-6 rounded-xl transition-all hover-glow hover-scale"
          >
            <h3 className="font-tech text-xl text-accent mb-2">{a.title}</h3>
            <p className="text-textsecondary mb-2">{a.desc}</p>
            <div className="text-sm mb-2">
              <span className="font-tech text-accent">{a.subject}</span> | {a.author}
            </div>
            <Link
              href={`/articles/${a.slug}`}
              className="text-accent font-bold hover:underline"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
