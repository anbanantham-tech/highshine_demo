import React from 'react';

const LeadershipCulture = () => {
  return (
    <section className="py-24 bg-[#1A1025]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Content */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[400px] w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Highshine team gathered together outdoors" 
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay to blend with dark theme */}
              <div className="absolute inset-0 bg-[#1A1025]/10 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-16">
              <h3 className="text-[#A874FF] font-medium text-lg mb-3">Leadership & Culture</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The Leadership
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                Highshine is a labor of love for the founders, and we
                envision building it more like a family than an organization.
                To the leadership, the welfare of employees is of utmost
                importance.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Cultivating Growth
              </h2>
              <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  At Highshine, we believe that a thriving team creates
                  exceptional results for clients. We've built an employee-first
                  culture where every voice matters and ideas shape our
                  policies.
                </p>
                <p>
                  Our commitment to learning and development ensures that
                  our team stays ahead of industry trends, equipped with the
                  latest skills and knowledge to serve you better.
                </p>
                <p>
                  Guided by our Board Members and Advisory, including Mr. Mohit Jagtap, 
                  we invest in our people because we know their growth is your success.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadershipCulture;
