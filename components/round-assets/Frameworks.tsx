'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
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
      <section className="mb-16">
        <div
          className={`text-center transition-all duration-700 ease-out ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Here's what real Data Champions use inside real orgs
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Use one or many, but make it count.
          </p>
        </div>
      </section>

      {/* Framework Cards */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-out ${
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {frameworks.map((framework) => (
          <div
            key={framework._id || framework.id}
            className={`bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${framework.gridClass || ''}`}
          >
            <div className={`h-48 relative ${framework.bgColor}`}>
              <Image
                src={framework.image}
                alt={framework.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-2">{framework.title}</h3>
              <p className="text-gray-700">{framework.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <div
        className={`max-w-3xl mx-auto text-center mt-16 transition-all duration-700 ease-out ${
          conclusionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-xl font-medium text-blue-700 p-6 rounded-lg bg-blue-50 border border-blue-100">
          You don't need to use all five. You need to choose bravely and clearly.
        </p>
      </div>

      {/* Action Buttons */}
      <div
        className={`max-w-xl mx-auto flex justify-center space-x-4 mt-12 transition-all duration-700 ease-out ${
          buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <button
          className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center transform hover:scale-105"
          onClick={() => console.log('Previous clicked')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </button>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center transform hover:scale-105"
          onClick={() => console.log('Apply Framework clicked')}
        >
          Apply Your Framework
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </main>
  );
}
