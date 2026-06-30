"use client";
import { motion } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";
import Image from "next/image";


export default function Videos() {
  // Array of videos with their details matching your article subjects
  const videos = [
    {
    id: 1,
    title: "Cloud Load Balancing: Enhancing Performance, Scalability & Availability",
    subject: "Cloud Infrastructure",
    thumbnail: "/img/video-thumb-6.jpg",
    youtubeUrl: "https://drive.google.com/file/d/1Uq6ouQWjfeIEsKCeTbDEZqBnKZPQygyK/view?usp=sharing",
    },
     {
      id: 2,
      title: "Finite Automata in Text Search and Pattern Matching",
      subject: "Theory of Computation and Compiler Design",
      thumbnail: "/img/video-thumb-1.jpg",
      youtubeUrl: "https://youtu.be/Jor-4AE0QXo",
      author: "Jass Sangale"
    },
    {
      id: 3,
      title: "Ethical Issues and Privacy Concerns in Data Mining",
      subject: "Data Warehousing & Mining",
      thumbnail: "/img/video-thumb-6.jpg",
      youtubeUrl: "https://youtu.be/QckuZhU6H7s",
      author: "Jass Sangale"
    },
    {
      id: 4,
      title: "Object-Oriented Analysis and Design",
      subject: "Software Engineering and Project Management",
      thumbnail: "/img/video-thumb-4.jpg",
      youtubeUrl: "https://drive.google.com/file/d/19iAz77iTs14u6mSv5KJr-ggncvSpDnvd/view?usp=drivesdk",
      author: "Jass Sangale"
    },
    {
      id: 5,
      title: "Future of Cloud Security in Enterprises",
      subject: "Cybersecurity Principles and Practices",
      thumbnail: "/img/video-thumb-5.jpg",
      youtubeUrl: "https://drive.google.com/file/d/1MDVDwIp_94uh4yG4j7BnRfT3UtWh9r_N/view?usp=drivesdk",
      author: "Jass Sangale"
    },
    {
      id: 6,
      title: "Dark Web Investigations: Tools and Techniques",
      subject: "Cyber Crime Investigation & Digital Forensics",
      thumbnail: "/img/video-thumb-3.jpg",
      youtubeUrl: "https://drive.google.com/file/d/1EcTJmlFHbzjvXWq0uuAg8Wrg2usp4QnF/view?usp=drivesdk",
      author: "Jass Sangale"
    },
    {
      id: 7,
      title: "Post-Quantum Cryptography: Concepts and Research Gaps",
      subject: "Cryptography and Network Security",
      thumbnail: "/img/video-thumb-5.jpg",
      youtubeUrl: "https://drive.google.com/file/d/1bNP-ouoMX4axYS3ogy_Ikk297r1Hq_wE/view?usp=sharing",
      author: "Jass Sangale"
    },
    {
      id: 8,
      title: "Introduction to Cyber Security",
      subject: "Cryptography and Network Security",
      thumbnail: "/img/video-thumb-1.jpg",
      youtubeUrl: "https://drive.google.com/file/d/1Lv5SNEpw3VXt5FfDjxf2QAVCgwQcfPUt/view?usp=sharing",
      author: "Jass Sangale"
    },
    {
      id: 9,
      title: "Role of Blockchain in Data Protection",
      subject: "Penetration Testing: Technique, Tools, And Compliance",
      thumbnail: "/img/video-thumb-6.jpg",
      youtubeUrl: "https://drive.google.com/file/d/1zm7o6NV1OOEpA-uR7SdZnenMeqaf7kbX/view?usp=sharing",
    },
    {
      id: 10,
      title: "Full Ethical Hacking & Penetration Testing Course",
      subject: "Penetration Testing: Technique, Tools, And Compliance",
      thumbnail: "/img/video-thumb-4.jpg",
      youtubeUrl: "https://drive.google.com/file/d/1vKoQ9Bo1RWspHM5svR6PQf8OBjqXe2kN/view?usp=sharing",
    },
    {
      id: 11,
      title: "SIEM Tools & Techniques in Security Operations Centers",
      subject: " Cloud & Multi Cloud Security",
      thumbnail: "/img/video-thumb-3.jpg",
      youtubeUrl: "https://drive.google.com/file/d/1IvraSgPYxxelrF2ZvQZYp4Sw-ub3uBJd/view?usp=sharing",
    },
    {
      id: 12,
      title: " AWS Certified Solutions Architect Associate-Infosys Springboard",
      subject: " Cloud & Multi Cloud Security",
      thumbnail: "/img/video-thumb-5.jpg",
      youtubeUrl: "https://drive.google.com/file/d/1vKoQ9Bo1RWspHM5svR6PQf8OBjqXe2kN/view?usp=sharing",
    },
    {
      id: 13,
      title: "SIEM: The Brain of a Security Operations Center",
      subject: "Security Operations Center: Tools & Techniques",
      thumbnail: "/img/video-thumb-1.jpg",
      youtubeUrl: "https://drive.google.com/file/d/1hJ2yT2dzpxS2CE1hxW47UQZmetWAUDH0/view?usp=sharing",
    },
    {
      id: 14,
      title: "531 Incident Response KSAT Intermediate-NCWF Journey",
       subject: "Security Operations Center: Tools & Techniques",
      thumbnail: "/img/video-thumb-6.jpg",
      youtubeUrl: "https://drive.google.com/file/d/1AYr0HPGgv4T40bI04Gk_qhEsI4ncFIPa/view?usp=sharing",
    }
    

    
  ];




  return (
    <section className="container mx-auto px-4 py-16" id="videos">
      <h2 className="font-tech text-accent text-4xl font-bold text-center mb-10">
        Videos
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <motion.a
            key={video.id}
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="glass article-card rounded-xl transition-all hover-glow hover-scale cursor-pointer overflow-hidden block"
          >
            {/* Thumbnail Image - Medium Size with aspect-video */}
            <div className="relative w-full aspect-video overflow-hidden max-h-64">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                <div className="bg-accent rounded-full p-4 transition-transform hover:scale-110">
                  <Youtube className="w-8 h-8 text-black" />
                </div>
              </div>
            </div>


            {/* Video Details */}
            <div className="p-6">
              <h3 className="font-tech text-xl text-accent mb-2">{video.title}</h3>
              <div className="text-sm mb-2">
                <span className="font-tech text-accent">{video.subject}</span> | {video.author}
              </div>
              <div className="flex items-center text-accent font-bold hover:underline">
                <span>Watch Video</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
