import React from 'react';

export default function ImagesSection() {
  return (
    <section id="images" className="py-20 px-4 bg-black flex flex-col items-center justify-center min-h-[50vh]">
      <h2 className="text-white text-3xl font-bold tracking-wider mb-8 font-tech drop-shadow-accent">
        Gallery
      </h2>
      <div className="max-w-4xl w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_25px_rgba(0,212,255,0.15)]">
        <img 
          src="/img/22.gif" 
          alt="Featured Animation" 
          className="w-full h-auto block object-cover" 
        />
      </div>
    </section>
  );
}