'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

interface HeroProps {
  className?: string;
  round: string | number; // round prop added
}

const Hero: React.FC<HeroProps> = ({ className = '', round }) => {
  return (
    <motion.section 
      id="hero" 
      className={`bg-gradient-to-br from-blue-50 via-white to-purple-50 h-[400px] flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6"
            initial={{ y: 30, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2, 
              ease: "easeOut",
              type: "spring",
              damping: 20,
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              className="mr-2"
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                damping: 15
              }}
            >
              <Compass className="w-4 h-4" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Strategic Debrief - Round {round}
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3, 
              ease: "easeOut" 
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Your Thinking Trail{' '}
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.7,
                type: "spring",
                damping: 20
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              So Far
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8, 
              ease: "easeOut" 
            }}
          >
            Before you dive in, let's look at how you've thought so far.
          </motion.p>

          {/* Placeholder */}
          <motion.div 
            className="mt-8 flex items-center justify-center space-x-2 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <span className="text-sm">
              <br />
            </span>
            <span className="font-semibold text-gray-700">
              <br />
            </span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
