'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Color variables
const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  }
};

const CTASection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 text-white"
      style={{ 
        background: `linear-gradient(to bottom right, ${colors.primary[600]}, ${colors.primary[800]})` 
      }}
    >
      <motion.div 
        className="container mx-auto px-4 sm:px-6 text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight"
          variants={fadeInUp}
        >
          Ready to Transform Your Potential?
        </motion.h2>
        
        <motion.p 
          className="text-base sm:text-lg lg:text-xl max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0"
          variants={fadeInUp}
        >
          Join a community of forward-thinking AI practitioners who are shaping the future of technology and business.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto"
          variants={fadeInUp}
        >
          <motion.button 
            className="w-full sm:w-auto bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition shadow-lg text-sm sm:text-base"
            style={{ color: colors.primary[700] }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#ffffff'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Apply to Round 2
          </motion.button>
          
          <motion.button 
            className="w-full sm:w-auto text-white border border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition shadow-lg text-sm sm:text-base"
            style={{ backgroundColor: colors.primary[700] }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = colors.primary[800]}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = colors.primary[700]}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;