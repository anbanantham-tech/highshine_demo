import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600"
];

const InteractiveGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getRelativePosition = (index: number) => {
    const total = images.length;
    const half = Math.floor(total / 2);
    let diff = (index - currentIndex) % total;
    if (diff > half) diff -= total;
    if (diff < -half) diff += total;
    return diff;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto scroll every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-24 bg-[#1A1025] overflow-hidden relative">
      <div className="container mx-auto px-4 text-center mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Inside the World of Highshine
        </h2>
        <p className="text-xl text-gray-400">
          Our People, Our Story
        </p>
      </div>
      
      <div className="relative w-full max-w-6xl mx-auto h-[450px] md:h-[550px] flex items-center justify-center">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-12 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors border border-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-12 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors border border-white/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
          {images.map((src, i) => {
            const diff = getRelativePosition(i);
            const absDiff = Math.abs(diff);
            
            // Fish eye effect calculations
            const x = `${diff * 70}%`;
            const scale = Math.max(1 - absDiff * 0.2, 0.4);
            const zIndex = 10 - absDiff;
            const opacity = absDiff > 2 ? 0 : 1 - absDiff * 0.15;
            const rotateY = diff * -15;

            return (
              <motion.div 
                key={i}
                className="absolute w-[260px] h-[360px] md:w-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                initial={false}
                animate={{ 
                  x, 
                  scale, 
                  zIndex, 
                  opacity,
                  rotateY
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20 
                }}
                style={{
                  transformOrigin: "center center",
                }}
              >
                <img 
                  src={src} 
                  className="w-full h-full object-cover" 
                  alt={`Gallery item ${i + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay to darken side items */}
                <motion.div 
                  className="absolute inset-0 bg-black"
                  initial={false}
                  animate={{ opacity: absDiff === 0 ? 0 : 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveGallery;
