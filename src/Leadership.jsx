import React from 'react';

const Leadership = () => {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-12">
            <blockquote className="text-xl md:text-2xl font-serif italic text-gray-700 border-l-4 border-[#A874FF] pl-6">
              "Highshine wasn't started to be just another agency. It began as a mission to prove that when you treat your team like family and your clients like partners, excellence follows naturally. We are personally invested in every project that walks through our doors."
              <footer className="mt-6 text-lg font-sans font-semibold text-[#130922] not-italic">— The Founders</footer>
            </blockquote>
            
            <div>
              <h2 className="text-3xl font-bold text-[#130922] mb-4">The Leadership</h2>
              <h3 className="text-xl font-semibold text-[#8B5CF6]">The Heart of Highshine: A legacy built on trust, not just transactions.</h3>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-10">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/leadership/800/500" 
                alt="Leadership Team" 
                className="w-full h-auto object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#130922]">Cultivating Growth</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-[#1A1025] mb-2">The Family Model</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We believe the welfare of our employees is the ultimate metric of our success. A happy team is a high-performing team.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-[#1A1025] mb-2">The Innovation Loop</h4>
                  <p className="text-gray-600 leading-relaxed">
                    By investing in continuous training, we ensure our "family" is always equipped with the newest tools to solve your oldest problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
