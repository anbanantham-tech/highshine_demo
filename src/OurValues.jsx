import React from 'react';
import { Award, Lightbulb, ShieldCheck, Heart, Users, Lock } from 'lucide-react';

const values = [
  { title: 'Commitment to excellence', icon: Award },
  { title: 'Innovation and learning', icon: Lightbulb },
  { title: 'Integrity and transparency', icon: ShieldCheck },
  { title: 'Customer-centricity', icon: Heart },
  { title: 'Collaborative growth', icon: Users },
  { title: 'Ethics above all', icon: Lock },
];

const OurValues = () => {
  return (
    <section className="py-24 bg-[#0B0514]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="relative p-[2px] rounded-2xl overflow-hidden group">
              {/* Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A874FF] via-[#F5A623] to-[#A874FF] animate-border-glow opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Inner Card */}
              <div className="relative h-full bg-[#1A1025] rounded-2xl p-8 flex flex-col items-center text-center z-10">
                <value.icon className="w-12 h-12 text-[#F5A623] mb-6" />
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
