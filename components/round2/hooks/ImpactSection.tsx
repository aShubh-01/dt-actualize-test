'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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

const ImpactSection = () => {
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <Image
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4156dd0e33-783c42444a5b49dab887.png"
              alt="Founder and AI specialist in deep conversation, impressed expression, modern office, professional setting, tech environment"
              width={600}
              height={400}
              priority
            />
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-100 shadow-md">
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight"
                variants={fadeInUp}
              >
                Make an impact that matters
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8"
                variants={fadeInUp}
              >
                Let's build something that makes a founder pause and say,<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>'I hadn't thought of it that way.'
              </motion.p>
              
              <motion.div 
                className="flex flex-col gap-4 sm:gap-6"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-center gap-3 sm:gap-4"
                  variants={fadeInUp}
                >
                  <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <p className="font-medium text-sm sm:text-base">Challenge established thinking</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 sm:gap-4"
                  variants={fadeInUp}
                >
                  <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <p className="font-medium text-sm sm:text-base">Create novel solutions to complex problems</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 sm:gap-4"
                  variants={fadeInUp}
                >
                  <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <p className="font-medium text-sm sm:text-base">Earn respect through insight, not just execution</p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mt-8 sm:mt-10"
                variants={fadeInUp}
              >
                <motion.span 
                  className="inline-block text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition shadow-lg cursor-pointer text-sm sm:text-base w-full sm:w-auto text-center"
                  style={{ backgroundColor: colors.primary[600] }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = colors.primary[700]}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = colors.primary[600]}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Begin Your Application
                  <ArrowRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;