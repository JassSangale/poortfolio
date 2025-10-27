"use client";
import { motion } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";
import Image from "next/image";


export default function Videos() {
  // Array of videos with their details matching your article subjects
  const videos = [
    {
      id: 1,
      title: "Finite Automata in Text Search and Pattern Matching",
      subject: "Theory of Computation and Compiler Design",
      thumbnail: "/img/video-thumb-1.jpg", // Add your thumbnail images to public/img/
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1", // Replace with actual URL
      author: "Jass Sangale"
    },
    
    {
      id: 3,
      title: "Dark Web Investigations: Tools and Techniques",
      subject: "Cyber Crime Investigation & Digital Forensics",
      thumbnail: "/img/video-thumb-3.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
      author: "Jass Sangale"
    },
    {
      id: 4,
      title: "OOAD in Data Warehousing and Mining",
      subject: "Software Engineering and Project Management",
      thumbnail: "/img/video-thumb-4.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_4",
      author: "Jass Sangale"
    },
    {
      id: 5,
      title: "Future of Cloud Security in Enterprises",
      subject: "Cybersecurity Principles and Practices",
      thumbnail: "/img/video-thumb-5.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_5",
      author: "Jass Sangale"
    },
    {
      id: 6,
      title: "Ethical Issues and Privacy Concerns in Data Mining",
      subject: "Data Warehousing & Mining",
      thumbnail: "/img/video-thumb-6.jpg",
      youtubeUrl: "https://youtu.be/QckuZhU6H7s",
      author: "Jass Sangale"
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
