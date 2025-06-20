'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const HeroSection = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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
    <section className="h-[500px] sm:h-[550px] lg:h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 text-white relative overflow-hidden" 
             style={{ backgroundImage: `linear-gradient(to bottom right, #111827, #1f2937, ${colors.primary[900]})` }}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ 
               background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 60%)'
             }}></div>
        <div className="absolute bottom-0 right-0 w-full h-full" 
             style={{ 
               background: `radial-gradient(circle at 70% 80%, rgba(14,165,233,0.3) 0%, transparent 60%)`
             }}></div>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative z-10 flex flex-col items-center justify-center h-full text-center"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Moment You've Been Waiting For
        </motion.h1>
        
        <motion.div 
          className="max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-0"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
            variants={fadeInUp}
          >
            You've done assignments. You've followed instructions.
            But somewhere deep down, you've asked yourself —
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed"
            style={{ color: colors.primary[300] }}
            variants={fadeInUp}
          >
            "When do I start solving real problems?"<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>"When does someone take me seriously?"
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed"
            variants={fadeInUp}
          >
            Round 2 begins there.
          </motion.p>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;