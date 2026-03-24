import React from 'react';

const IndustryGap = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-[#6B46C1] font-semibold text-lg mb-3">The Problem</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1025] mb-8 leading-tight">
              The Industry Gap
            </h2>
            
            <div className="space-y-6 text-[#4A5568] text-lg md:text-xl leading-relaxed font-light">
              <p>
                While most ERP providers emphasize the implementation
                as the key phase, we see the real work beginning after
                that. When a business starts using the software day-to-
                day, that's when the transformation truly unfolds.
              </p>
              <p>
                This is the moment Highshine steps in as a committed
                partner, ensuring that our clients realize the full value of
                their ERP investment.
              </p>
            </div>

            {/* Blockquote */}
            <div className="mt-10 bg-[#F5F3FF] border-l-[6px] border-[#7C3AED] rounded-r-xl p-8">
              <p className="text-[#3730A3] text-xl md:text-2xl italic font-medium">
                "The real transformation begins after go-live."
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Team collaborating around a large interactive display" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryGap;
