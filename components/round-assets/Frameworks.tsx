'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getFrameworks } from '@/lib/roundAssets';

export default function Frameworks({ round }: { round: number }) {
  const [frameworks, setFrameworks] = useState<any[]>([]);

  const [heroVisible, setHeroVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [conclusionVisible, setConclusionVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await getFrameworks(round);
      if (response.status === 200) {
        console.log(frameworks);
        
        setFrameworks(response.data.frameworks);
      } else {
        console.error('Unable to fetch frameworks');
      }
    }

    fetchData();

    const animationSequence = [
      { setter: setHeroVisible, delay: 100 },
      { setter: setCardsVisible, delay: 400 },
      { setter: setConclusionVisible, delay: 800 },
      { setter: setButtonsVisible, delay: 1000 },
    ];

    animationSequence.forEach(({ setter, delay }) => {
      setTimeout(() => setter(true), delay);
    });
  }, [round]);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section
        className="mb-16 text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={heroVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-10 text-gray-800">
          Here's what real Data Champions use inside real orgs:
        </h2>
      </motion.section>

      {/* Framework Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cardsVisible &&
          frameworks.map((framework, index) => (
            <motion.div
              key={framework._id || framework.id}
              className={`bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${framework.gridClass || ''}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <div className={`h-48 relative ${framework.bgColor}`}>
                <Image
                  src={framework.image}
                  alt={framework.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{framework.title}</h3>
                <p className="text-gray-700">{framework.description}</p>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Conclusion */}
      <motion.div
        className="max-w-2xl mx-auto text-center mt-16"
        initial={{ y: 30, opacity: 0 }}
        animate={conclusionVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-xl font-medium text-gray-800">
          You don't need to use all five. You need to choose bravely and clearly.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="mt-12 text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={buttonsVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex justify-center space-x-4">
          <motion.button
            className="py-3 px-6 bg-white border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log('Previous clicked')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </motion.button>
          <motion.button
            className="py-3 px-8 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition duration-200 text-lg flex items-center transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log('Apply Framework clicked')}
          >
            Apply Your Framework
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
}
