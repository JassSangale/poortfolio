"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Malware Detection using SVM",
    desc: "ML project using SVM to detect and classify malware.",
    tags: ["Python", "Machine Learning", "SVM"],
    github: "https://github.com/JassSangale/malware-detection",
    demo: "#",
  },
  {
    name: "Advanced Weather Dashboard (Python)",
    desc: "Real-time weather monitoring, predictive analytics, Python.",
    tags: ["Python", "Flask", "API"],
    github: "https://github.com/JassSangale/weather-dashboard",
    demo: "#",
  },
  {
    name: "VPN & Routing Simulation (Cisco Packet Tracer)",
    desc: "Network simulation with VPN configs and routing, Cisco.",
    tags: ["Cisco", "Networking", "VPN"],
    github: "https://github.com/JassSangale/network-simulation",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-16" id="projects">
      <h2 className="font-tech text-accent text-4xl font-bold text-center mb-12 drop-shadow-accent">
        Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #A64BFF" }}  // soft purple glow
            className="glass article-card bg-overlaymodern/70 rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300 hover-glow"
          >
            <h3 className="font-tech text-xl text-accent font-bold mb-3">
              {p.name}
            </h3>
            <p className="text-textsecondary mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover-glow transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={p.demo}
                className="text-accent hover-glow transition-all"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
