"use client";

import { useState } from "react";

export default function VideoPlayer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
 
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white text-xl shadow-lg hover:scale-110 transition-transform duration-300"
      >
        ▶
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-[90%] md:w-[60%] aspect-video bg-black rounded-xl shadow-2xl">
    
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl hover:scale-110 transition-transform"
            >
              ✕
            </button>

          
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
