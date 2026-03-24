import React from 'react';

const TeamGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section className="py-24 bg-[#130b21] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Inside the World of Highshine
        </h2>
        <p className="text-xl text-gray-400">
          Our People, Our Story
        </p>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4">
        <div className="flex justify-center items-center gap-2 md:gap-4" style={{ perspective: '1200px' }}>
          {/* Image 1 */}
          <div 
            className="relative w-1/5 aspect-[3/4] z-10 transition-transform duration-200 hover:scale-90"
            style={{ transform: 'rotateY(25deg) scale(0.85)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#130b21] via-[#130b21]/60 to-transparent z-10 pointer-events-none"></div>
            <img src={images[0]} alt="Team 1" className="w-full h-full object-cover rounded shadow-2xl" />
          </div>
          
          {/* Image 2 */}
          <div 
            className="relative w-1/5 aspect-[3/4] z-20 transition-transform duration-500 hover:scale-100"
            style={{ transform: 'rotateY(15deg) scale(0.95)' }}
          >
            <img src={images[1]} alt="Team 2" className="w-full h-full object-cover rounded shadow-2xl" />
          </div>

          {/* Image 3 (Center) */}
          <div 
            className="relative w-1/5 aspect-[3/4] z-30 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-110"
            style={{ transform: 'scale(1.05)' }}
          >
            <img src={images[2]} alt="Team 3" className="w-full h-full object-cover rounded shadow-2xl" />
          </div>

          {/* Image 4 */}
          <div 
            className="relative w-1/5 aspect-[3/4] z-20 transition-transform duration-500 hover:scale-100"
            style={{ transform: 'rotateY(-15deg) scale(0.95)' }}
          >
            <img src={images[3]} alt="Team 4" className="w-full h-full object-cover rounded shadow-2xl" />
          </div>

          {/* Image 5 */}
          <div 
            className="relative w-1/5 aspect-[3/4] z-10 transition-transform duration-500 hover:scale-90"
            style={{ transform: 'rotateY(-25deg) scale(0.85)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-[#130b21] via-[#130b21]/60 to-transparent z-10 pointer-events-none"></div>
            <img src={images[4]} alt="Team 5" className="w-full h-full object-cover rounded shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
