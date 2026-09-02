import React from 'react';

export default function ImagesSection() {
  return (
    <section id="images" className="py-20 px-4 flex flex-col items-center justify-center min-h-[50vh]">
      <h2 className="text-3xl font-bold tracking-wider mb-8 font-tech text-accent">
        Gallery
      </h2>
      
      {/* Vertical Stack Container */}
      <div className="flex flex-col gap-8 max-w-4xl w-full">
        
        {/* Card 1: Your Original GIF */}
        <div className="gallery-card rounded-2xl overflow-hidden">
          <img 
            src="/img/22.gif" 
            alt="Featured Animation" 
            className="w-full h-auto block object-cover" 
          />
        </div>

        {/* Card 2: Your New Image (Stacked Below) */}
        <div className="gallery-card rounded-2xl overflow-hidden">
          <img 
            src="/img/23.png" 
            alt="Gallery Display" 
            className="w-full h-auto block object-cover" 
          />
        </div>

      </div>
    </section>
  );
}
