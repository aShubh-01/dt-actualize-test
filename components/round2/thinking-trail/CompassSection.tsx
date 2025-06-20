'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight } from 'lucide-react';

interface CompassSectionProps {
  className?: string;
  onContinue?: () => void;
}

const CompassSection: React.FC<CompassSectionProps> = ({ 
  className = '',
  onContinue 
}) => {
  const handleContinueClick = () => {
    if (onContinue) {
      onContinue();
    }
    // Default behavior if no callback provided
    console.log('Continue to Round 2 clicked');
  };

  return (
    <motion.section 
      id="compass-section" 
      className={`py-20 bg-gradient-to-r from-blue-600 to-purple-600 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
            type: "spring",
            damping: 20,
            stiffness: 100
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Compass Icon */}
          <motion.div 
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8"
            initial={{ 
              scale: 0,
              rotate: -180
            }}
            whileInView={{
              scale: 1,
              rotate: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              type: "spring",
              damping: 15,
              stiffness: 150
            }}
            whileHover={{
              scale: 1.1,
              rotate: 15,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
            >
              <Compass className="text-white w-8 h-8" />
            </motion.div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            This isn't feedback. It's foresight.
          </motion.h2>
          
          {/* Subtitle */}
          <motion.div 
            className="space-y-4 text-white/90 text-lg leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <p>Read it like you would read a compass — not a grade.</p>
          </motion.div>
          
          {/* Continue Button */}
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            <motion.button 
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg flex items-center"
              onClick={handleContinueClick}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 1.2,
                type: "spring",
                damping: 20,
                stiffness: 200
              }}
            >
              <span>Continue to Round 2</span>
              <motion.div
                className="ml-2"
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 }
                }}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompassSection;