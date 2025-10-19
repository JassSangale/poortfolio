"use client";
import { motion } from "framer-motion";
import { Code, Shield, Globe, Database } from "lucide-react";

const skills = [
  { name: "Python", percent: 95, icon: <Code /> },
  { name: "Node.js", percent: 90, icon: <Code /> },
  { name: "Ethical Hacking", percent: 85, icon: <Shield /> },
  { name: "Networking (Cisco)", percent: 80, icon: <Globe /> },
  { name: "HTML, CSS, JavaScript", percent: 90, icon: <Database /> },
];

export default function Skills() {
  return (
    <section className="container mx-auto px-4" id="skills">
      <h2 className="font-tech text-accent text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <motion.div key={skill.name} className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              {skill.icon}
              <span className="font-tech text-accent text-lg">{skill.name}</span>
              <span className="text-accent ml-auto">{skill.percent}%</span>
            </div>
            {/* Visual progress bar */}
            <div className="w-full h-2 bg-secondary rounded-full mt-2">
              <div
                className="h-2 bg-accent rounded-full"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
