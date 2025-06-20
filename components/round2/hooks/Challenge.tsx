'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
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

const ChallengeSection = () => {
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

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-10 lg:gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <Image
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fffd210913-76a7dad5a639183eb9b7.png"
              alt="Person climbing a challenging mountain, reaching for new heights, determination, potential, sunrise, inspirational"
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
            variants={fadeInLeft}
          >
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-100 shadow-md">
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight"
                variants={fadeInUp}
              >
                Embrace the challenge
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6"
                variants={fadeInUp}
              >
                The pressure you're feeling?<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>That's not fear. That's your potential asking for more.
              </motion.p>
              
              <motion.div 
                className="p-3 sm:p-4 rounded-lg sm:rounded-xl border"
                style={{ 
                  backgroundColor: colors.primary[50], 
                  borderColor: colors.primary[100] 
                }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: colors.primary[400] }} />
                  <p className="font-medium text-sm sm:text-base" style={{ color: colors.primary[800] }}>
                    From our alumni:
                  </p>
                </div>
                <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                  "The moment I stopped trying to meet expectations and started creating solutions no one had asked for yet — that's when doors really opened."
                </p>
              </motion.div>
              
              <motion.div 
                className="mt-6 sm:mt-8"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <div 
                    className="w-6 sm:w-8 h-1 rounded-full"
                    style={{ backgroundColor: colors.primary[600] }}
                  ></div>
                  <div 
                    className="w-1.5 sm:w-2 h-1 rounded-full"
                    style={{ backgroundColor: colors.primary[300] }}
                  ></div>
                  <div 
                    className="w-1.5 sm:w-2 h-1 rounded-full"
                    style={{ backgroundColor: colors.primary[300] }}
                  ></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;