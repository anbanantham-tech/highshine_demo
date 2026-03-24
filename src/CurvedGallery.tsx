import React, { useEffect, useState } from 'react';

const CurvedGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400"
  ];

  const [radius, setRadius] = useState(300);
  const [itemWidth, setItemWidth] = useState(200);
  const [itemHeight, setItemHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(160);
        setItemWidth(130);
        setItemHeight(180);
      } else if (window.innerWidth < 1024) {
        setRadius(250);
        setItemWidth(180);
        setItemHeight(260);
      } else {
        setRadius(350);
        setItemWidth(240);
        setItemHeight(340);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-24 bg-[#130b21] overflow-hidden relative">
      <div className="container mx-auto px-4 text-center mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Inside the World of Highshine
        </h2>
        <p className="text-xl text-gray-400">
          Our People, Our Story
        </p>
      </div>

      <div 
        className="relative w-full flex justify-center items-center py-10" 
        style={{ perspective: '1200px', height: `${itemHeight + 100}px` }}
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#130b21] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#130b21] to-transparent z-10 pointer-events-none"></div>

        <div 
          className="relative"
          style={{ 
            width: `${itemWidth}px`, 
            height: `${itemHeight}px`, 
            transformStyle: 'preserve-3d',
            animation: 'rotateCarousel 25s linear infinite'
          }}
        >
          {images.map((src, index) => {
            const angle = (360 / images.length) * index;
            return (
              <div 
                key={index}
                className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <img 
                  src={src} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes rotateCarousel {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default CurvedGallery;
