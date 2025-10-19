"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    slug: "finite-automata-text-search",
    title: "Applications of Finite Automata in Text Search and Pattern Matching",
    author: "Jass Sangale",
    subject: "Data Warehousing & Mining",
    desc: "Exploring how finite automata theory applies to text processing and pattern matching.",
  },
  {
    slug: "google-sites-data-portfolio",
    title: "Creating a Personalized Google Website Portfolio",
    author: "Jass Sangale",
    subject: "Data Warehousing & Mining",
    desc: "Learn how to create an impactful digital portfolio using Google Sites and relate it to core data warehousing and mining concepts.",
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
            className="glass p-6 rounded-xl transition-all hover-glow hover-scale"
          >
            <h3 className="font-tech text-xl text-accent mb-2">{a.title}</h3>
            <p className="text-textsecondary mb-2">{a.desc}</p>
            <div className="text-sm mb-2">
              <span className="font-tech text-accent">{a.subject}</span> | {a.author}
            </div>
            <Link href={`/articles/${a.slug}`} className="text-accent font-bold hover:underline">
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
