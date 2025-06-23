'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FrameworksSection = () => {
  const [frameworks, setFrameworks] = useState<any[]>([]);

  useEffect(() => {
    const fetchFrameworks = async () => {
      try {
        const res = await fetch('/api/frameworks');
        const data = await res.json();
        setFrameworks(data.frameworks); // Ensure API returns { frameworks: [...] }
      } catch (error) {
        console.error('Error fetching frameworks:', error);
      }
    };

    fetchFrameworks();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold font-heading mb-10 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Here's what real Data Champions use inside real orgs:
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {frameworks.map((framework) => (
            <motion.div
              key={framework.id || framework._id}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 ${framework.gridClass || ''}`}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`h-48 ${framework.bgColor} relative overflow-hidden`}>
                <Image
                  src={framework.image}
                  alt={framework.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {framework.title}
                </h3>
                <p className="text-gray-700">
                  {framework.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-xl font-medium text-gray-800 max-w-2xl mx-auto">
            You don't need to use all five. You need to choose bravely and clearly.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.button 
            className="py-3 px-8 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition duration-200 text-lg mb-7"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Your Framework
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FrameworksSection;
