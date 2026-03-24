import React from 'react';
import { ChevronRight } from 'lucide-react';
import ShiningButton from './ShiningButton';

const CtaSection = () => {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1025] via-[#2D1B4E] to-[#1A1025] border border-[#A874FF]/20 p-12 md:p-20 flex flex-col items-center justify-center text-center shadow-2xl">
          
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#A874FF] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">
              Empower your digital transformation today
            </h2>
            
            <ShiningButton className="bg-[#F5A623] text-[#1A1025] border-none text-lg px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(245,166,35,0.5)]">
              Schedule a free consultation
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </ShiningButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
