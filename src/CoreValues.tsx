import React, { useState, useEffect, useRef } from 'react';
import { Award, Lightbulb, Shield, Heart, Users, Lock, LucideIcon } from 'lucide-react';
import { useInView } from 'motion/react';

// Reusable ValueCard sub-component
const ValueCard = ({ icon: Icon, title, description, index, shouldAutoFlip, isDesktop }: { icon: LucideIcon, title: string, description: string, index: number, shouldAutoFlip: boolean, isDesktop: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isIntroFlipping, setIsIntroFlipping] = useState(false);
  const [isClickedFlipped, setIsClickedFlipped] = useState(false);
  const hasAutoFlipped = useRef(false);

  useEffect(() => {
    let timer1: ReturnType<typeof setTimeout>;
    let timer2: ReturnType<typeof setTimeout>;

    if (isInView && shouldAutoFlip && !hasAutoFlipped.current) {
      hasAutoFlipped.current = true;
      // Stagger the flip slightly so they don't all flip at the exact same millisecond
      const delay = isDesktop ? 200 : (index % 3) * 200; 
      timer1 = setTimeout(() => setIsIntroFlipping(true), delay);
      timer2 = setTimeout(() => setIsIntroFlipping(false), delay + 1200); // stay flipped for 1.2s
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isInView, shouldAutoFlip, index, isDesktop]);

  const handleCardClick = () => {
    if (isDesktop) return; // Hover handles desktop interaction
    
    if (isIntroFlipping) {
      setIsIntroFlipping(false);
      setIsClickedFlipped(true);
    } else {
      setIsClickedFlipped(!isClickedFlipped);
    }
  };

  const isProgrammaticallyFlipped = isIntroFlipping || (!isDesktop && isClickedFlipped);

  return (
    <div 
      ref={ref} 
      onClick={handleCardClick}
      className={`relative w-full h-72 rounded-[2rem] p-[2px] bg-gradient-to-r from-[#8B5CF6] via-[#F5A623] to-[#8B5CF6] animate-border-glow shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(245,166,35,0.3)] transition-shadow duration-500 ${!isDesktop ? 'cursor-pointer' : ''}`}
    >
      {/* Inner Flip Container */}
      <div className="group w-full h-full [perspective:1000px]">
        {/* The Flipper */}
        <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isDesktop ? 'lg:group-hover:[transform:rotateY(180deg)]' : ''} ${isProgrammaticallyFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
          
          {/* Front Face */}
          <div className="absolute inset-0 w-full h-full rounded-[calc(2rem-2px)] bg-white p-8 flex flex-col items-center justify-center [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
            <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center mb-6 border border-[#8B5CF6]/20">
              <Icon className="w-8 h-8 text-[#8B5CF6]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-[#1A1025] text-center">{title}</h3>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 w-full h-full rounded-[calc(2rem-2px)] bg-gray-50 p-8 flex flex-col items-center justify-center [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-[#F5A623]" strokeWidth={2} />
            </div>
            <p className="text-gray-600 leading-relaxed text-center text-[15px] font-medium">
              {description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

const CoreValues = () => {
  const [autoFlipIndices, setAutoFlipIndices] = useState<number[]>([]);
  const [isDesktop, setIsDesktop] = useState(true);

  const values = [
    {
      icon: Award,
      title: 'Commitment to excellence',
      description: 'We only deliver what we feel is the most effective solution for your needs.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation and learning',
      description: 'Finding the best ways to learn and develop the tools to your success.',
    },
    {
      icon: Shield,
      title: 'Integrity and transparency',
      description: 'We understand the importance of giving you a birds eye view of the implementation process.',
    },
    {
      icon: Heart,
      title: 'Customer-centricity',
      description: 'Keeping customer needs as the core outcomes of our internal processes.',
    },
    {
      icon: Users,
      title: 'Collaborative growth',
      description: 'We heavily imbibe "your step-ups are our step-ups" in our relationships, both internally and externally.',
    },
    {
      icon: Lock,
      title: 'Ethics above all',
      description: 'We conduct business with integrity, adhering to ethics, honesty, and legal compliance for a brighter future.',
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      const desktop = width >= 1024; // lg breakpoint in Tailwind
      setIsDesktop(desktop);

      if (desktop) {
        // 1 random card per row (assuming 2 rows of 3 cards)
        const row1 = Math.floor(Math.random() * 3); // 0, 1, 2
        const row2 = Math.floor(Math.random() * 3) + 3; // 3, 4, 5
        setAutoFlipIndices([row1, row2]);
      } else {
        // Mobile/Tablet: 1st 2 and last 2 cards auto-flip once
        setAutoFlipIndices([0, 1, 4, 5]);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1025] mb-6 tracking-tight uppercase">
            Our Values
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
            Purpose-built modules that address every dimension of A&D
            operations — from a single, integrated platform.
          </p>
        </div>

        {/* CSS Grid for Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              index={index}
              shouldAutoFlip={autoFlipIndices.includes(index)}
              isDesktop={isDesktop}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
