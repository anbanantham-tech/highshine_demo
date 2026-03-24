import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ShiningButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

const ShiningButton: React.FC<ShiningButtonProps> = ({ children, className = '', ...props }) => {
  // Extract base classes that might be overridden
  const baseClasses = "group relative overflow-hidden rounded-lg px-6 py-2.5 font-semibold transition-all flex items-center shadow-[0_0_15px_rgba(245,166,35,0.1)] hover:shadow-[0_0_25px_rgba(245,166,35,0.3)]";
  
  // Default colors if not provided in className
  const defaultColors = className.includes('bg-') ? '' : 'bg-[#130922]';
  const defaultText = className.includes('text-') ? '' : 'text-[#F5A623]';
  const defaultBorder = className.includes('border') ? '' : 'border border-[#F5A623]/40 hover:border-[#F5A623]';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${defaultColors} ${defaultText} ${defaultBorder} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      {/* Shine effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2.5s_infinite_linear]" />
      </div>
    </motion.button>
  );
};

export default ShiningButton;
