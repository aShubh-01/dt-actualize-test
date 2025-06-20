'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';

const HeroPanel: FC = () => {
  return (
    <section
      className="text-white py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #075985, #701a75)', // primary-800 to secondary-900
      }}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="w-full h-full bg-gradient-to-r from-blue-300 to-purple-400 rounded-full blur-3xl transform -translate-y-1/4" />
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full">
          <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-300 rounded-full blur-3xl transform translate-y-1/4" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-2 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            You're Not Applying.
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-5xl font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            You are an expert being called
          </motion.h2>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <img
              className="w-full h-64 object-cover rounded-xl mx-auto"
              src="/Picture5.png"
              alt="futuristic AI lab with diverse experts collaborating"
            />
          </motion.div>

          <motion.p
            className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Join a fellowship of visionaries who blend AI, empathy, and expertise to design human-like behaviors and systems for impactful change.
          </motion.p>

          <Link href="#cta" passHref>
          
          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="bg-white text-[#075985] hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg inline-block transition duration-300 cursor-pointer">
              Begin Your Journey
            </span>
          </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default HeroPanel;
