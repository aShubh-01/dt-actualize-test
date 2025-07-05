"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <motion.section 
      id="cta" 
      className="w-full py-16 md:py-20 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        
        {/* Main Heading */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Your Round 2 sprint isn't hypothetical.
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          If it's sharp — it could go live inside a company.
        </motion.p>

        {/* Buttons Container */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Primary Button */}
          <motion.button 
            className="bg-indigo-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-indigo-500/90 transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(99, 102, 241, 0.4)",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Apply for Fellowship
          </motion.button>

          {/* Secondary Button */}
          <motion.button 
            className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            Learn More
          </motion.button>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default CallToAction;