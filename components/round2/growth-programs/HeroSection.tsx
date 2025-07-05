'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <motion.section 
      id="hero" 
      className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center bg-indigo-500/10 text-indigo-500 px-4 py-2 rounded-full text-sm font-medium mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="mr-2" size={16} />
            Growth Programs
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Where This{' '}
            <motion.span 
              className="text-indigo-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            >
              Thinking
            </motion.span>{' '}
            Goes
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-xl text-gray-600 mb-12 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            Challenge applicants to think like system architects, blending AI, empathy, and their individual skills to design human-like behaviors and systems for impactful change.
          </motion.p>
          
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;