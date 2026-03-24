import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full flex flex-col justify-center bg-[#1A1025] text-white overflow-hidden pt-0 m-0 min-h-screen -mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Team collaborating"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient overlay to blend into the deep purple theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1025] via-[#1A1025]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[#3b1c6b]/30 mix-blend-multiply"></div>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#3b1c6b] border border-[#5B2EAA] mb-8 shadow-lg relative overflow-hidden">
            <span className="relative z-10 text-sm font-medium text-white">About Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 leading-tight text-white">
            Our Journey
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-[#F5A623]">
            Highshine IT Solutions
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl">
            Traditionally, many organizations have approached ERP implementation as just another
            project, where service providers focus mainly on completing the setup and moving on.
            But in reality, ERP is far more than a system installation. It has the potential to reshape
            how a business operates, how teams collaborate, and how decisions are made.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
