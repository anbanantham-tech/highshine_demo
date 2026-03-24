import React from 'react';

const ImageMarquee = () => {
  // 6 placeholder images to create a dynamic gallery look
  const images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=400"
  ];

  // Duplicate the array to create a seamless infinite loop
  const marqueeImages = [...images, ...images];

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

      <div className="relative w-full overflow-hidden flex py-10">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#130b21] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#130b21] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeImages.map((src, index) => {
            // Create a dynamic look with alternating tilts and vertical offsets
            const isEven = index % 2 === 0;
            const tiltClass = isEven ? 'rotate-2 translate-y-4' : '-rotate-2 -translate-y-4';
            
            return (
              <div 
                key={index} 
                className={`flex-shrink-0 w-64 md:w-80 mx-4 transition-transform duration-500 hover:scale-105 hover:z-30 ${tiltClass}`}
              >
                <img 
                  src={src} 
                  alt={`Team Gallery ${index}`} 
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-2xl border border-white/10"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageMarquee;
