import React from 'react';
import { motion } from 'motion/react';

const timelineData = [
  { year: '2022', title: 'Company Started', employees: '5 employees' },
  { year: '2023', title: 'Team Expansion', employees: '15 employees' },
  { year: '2024', title: 'Growth Phase', employees: '23 employees' },
  { year: '2025', title: 'Scaling Operations', employees: '34 employees' },
  { year: '2026', title: 'Future Vision', employees: '45+ employees' },
];

const GrowthTimeline = () => {
  return (
    <section className="py-24 md:py-32 bg-[#130922] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-3"
          >
            Milestones
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Our Growth Journey
          </motion.h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto mt-12">
          {/* Desktop/Tablet Horizontal Timeline */}
          <div className="hidden md:block relative px-4">
            {/* Horizontal Line */}
            <div className="absolute top-[11px] left-4 right-4 h-[2px] bg-gray-800" />
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-[11px] left-4 right-4 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#F5A623] origin-left"
            />

            {/* Timeline Nodes */}
            <div className="relative z-10 flex justify-between w-full">
              {timelineData.map((item, index) => {
                const isLast = index === timelineData.length - 1;
                
                return (
                  <motion.div 
                    key={item.year} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                    className="flex flex-col items-center relative group w-32"
                  >
                    {/* Node */}
                    <div 
                      className={`w-6 h-6 rounded-full border-4 border-[#130922] relative z-20 mb-6 transition-transform duration-300 group-hover:scale-125 ${
                        isLast ? 'bg-[#F5A623]' : 'bg-[#8B5CF6]'
                      }`}
                    />

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.year}
                      </h3>
                      <h4 className="font-medium text-sm text-gray-200 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {item.employees}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="md:hidden relative px-4 py-4">
            {/* Vertical Line */}
            <div className="absolute top-4 bottom-4 left-[27px] w-[2px] bg-gray-800" />
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-4 bottom-4 left-[27px] w-[2px] bg-gradient-to-b from-[#8B5CF6] to-[#F5A623] origin-top"
            />

            {/* Timeline Nodes */}
            <div className="relative z-10 flex flex-col gap-10 w-full">
              {timelineData.map((item, index) => {
                const isLast = index === timelineData.length - 1;
                
                return (
                  <motion.div 
                    key={item.year} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.2) }}
                    className="flex flex-row items-center relative group"
                  >
                    {/* Node */}
                    <div 
                      className={`w-6 h-6 rounded-full border-4 border-[#130922] relative z-20 mr-6 shrink-0 transition-transform duration-300 group-hover:scale-125 ${
                        isLast ? 'bg-[#F5A623]' : 'bg-[#8B5CF6]'
                      }`}
                    />

                    {/* Content */}
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {item.year}
                      </h3>
                      <h4 className="font-medium text-sm text-gray-200 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {item.employees}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthTimeline;
