'use client'

import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Testimonials } from '@/components/round2/social-proof/Testimonials';
import { useToast } from '../Toast';
import axios from 'axios';

export default function SocialProof({ round }: { round: number }) {
  const { showToast } = useToast();
  const [testimonials, setTestimonials] = useState([]);

  // Animation states
  const [heroVisible, setHeroVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [conclusionVisible, setConclusionVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    async function getTestimonials(round: number) {
      const response = await axios({
        url: `/api/v1/round/asset/social-proof?round=${round}`,
        method: 'GET',
        headers: {
          'Content-Type': "application/json"
        }
      });
      if(response.status != 200) {
        showToast('error', 'Unable to fetch Testimonials', 3000);
      } else {
        setTestimonials(response.data.testimonials)
      }
    }
    getTestimonials(round);

    // Stagger the animations with gentle timing
    const animationSequence = [
      { setter: setHeroVisible, delay: 100 },
      { setter: setImageVisible, delay: 400 },
      { setter: setTestimonialsVisible, delay: 700 },
      { setter: setConclusionVisible, delay: 1000 },
      { setter: setButtonsVisible, delay: 1200 }
    ];

    animationSequence.forEach(({ setter, delay }) => {
      setTimeout(() => setter(true), delay);
    });
  }, [])

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${heroVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What Others Felt in This Round
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            You're not alone in feeling the heat.
          </p>

          <div
            className={`mt-10 flex justify-center transition-all duration-700 ease-out delay-300 ${imageVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-4 scale-95'
              }`}
          >
            <div className="relative w-64 h-64">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/78e1578dcd-a862d7731ac35566ebc2.png"
                alt="illustration of diverse group of people working on laptops"
                fill
                className="rounded-lg shadow-md object-cover"
                sizes="256px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div
        className={`transition-all duration-700 ease-out ${testimonialsVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
          }`}
      >
        <Testimonials testimonials={testimonials} />
      </div>

      {/* Conclusion Section */}
      <div
        className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out ${conclusionVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
          }`}
      >
        <p className="text-xl font-medium text-blue-700 p-6 rounded-lg bg-blue-50 border border-blue-100">
          That tension you're feeling? It's what growing feels like — from task-doer to system builder.
        </p>
      </div>

      {/* Action Buttons */}
      <div
        className={`max-w-xl mx-auto flex justify-center space-x-4 transition-all duration-700 ease-out ${buttonsVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
          }`}
      >
        <button
          className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center transform hover:scale-105 transition-transform"
          onClick={() => console.log('Previous clicked')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </button>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center transform hover:scale-105 transition-transform"
          onClick={() => console.log('Continue clicked')}
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </main>
  );
}