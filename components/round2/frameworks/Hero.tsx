'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="mb-16 px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-heading mb-8 text-gray-900"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Frameworks – Tools for Serious Thinking
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 mb-4 font-medium"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Most data roles stop at reporting what happened.
        </motion.p>
        
        <motion.p 
          className="text-xl md:text-2xl text-blue-600 font-semibold mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          You're here to build the system behind what happens next.
        </motion.p>
        
        <motion.div 
          className="h-1 w-24 bg-purple-500 mx-auto my-10 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;