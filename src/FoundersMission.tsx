import React from 'react';

const FoundersMission = () => {
  return (
    <section className="py-24 bg-[#1A1025]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Images Content (Placeholders) */}
          <div className="order-2 lg:order-1 flex flex-col gap-8 items-center">
            <div className="relative bg-[#2D1F43] rounded-[2rem] w-3/4 md:w-1/2 aspect-[4/3] shadow-lg overflow-hidden flex items-center justify-center border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1025] to-transparent opacity-80 z-10"></div>
              <img src="https://highshine.in/assets/images/hari_gautham.jpg" alt="Mr. Hari Gautham Somasundaram" className="w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-lg font-bold text-white leading-tight mb-1">Mr. Hari Gautham Somasundaram</h3>
                <p className="text-[#F5A623] text-sm font-medium">Founder</p>
              </div>
            </div>
            <div className="relative bg-[#2D1F43] rounded-[2rem] w-3/4 md:w-1/2 aspect-[4/3] shadow-lg overflow-hidden flex items-center justify-center border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1025] to-transparent opacity-80 z-10"></div>
              <img src="https://highshine.in/assets/images/surendar.jpg" alt="Mr. Surendar Subramani" className="w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-lg font-bold text-white leading-tight mb-1">Mr. Surendar Subramani</h3>
                <p className="text-[#F5A623] text-sm font-medium">Co-Founder</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Highshine
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              <p>
                Our founder, Mr. Hari Gautham, is creating a community of
                experts dedicated to viewing each implementation as a
                lifelong commitment to our clients' success.
              </p>
              <p>
                Our co-founder, Mr. Surendar, identified this gap repeatedly
                during his extensive global experience in ERP
                transformations. From Asia to the Americas, he recognized
                the need for a provider who remains committed to clients
                long after go-live, ensuring they unlock the full potential of
                ERP.
              </p>
              <p>
                This unwavering approach has driven Highshine to achieve an
                extraordinary 300% year-over-year growth since its
                inception. However, our success isn't just about numbers; it
                reflects our steadfast dedication to our clients and our team.
              </p>
            </div>

            {/* Blockquote */}
            <div className="mt-10 bg-[#2D1F43] border-l-[6px] border-[#F5A623] rounded-r-xl p-8">
              <p className="text-[#F5A623] text-xl italic font-medium mb-3">
                "Efficient Odoo Implementation Services for Businesses."
              </p>
              <p className="text-gray-400 text-sm">
                — Highshine
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundersMission;
