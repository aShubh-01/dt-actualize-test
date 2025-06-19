'use client'

import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Testimonials } from '@/components/round2/social-proof/Testimonials';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'jhansi',
    name: 'Jhansi',
    role: 'Product Manager at Fintech',
    quote: "I realized data isn't about showing intelligence. It's about unlocking action.",
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'soubhik',
    name: 'Soubhik',
    role: 'Engineering Lead at SaaS',
    quote: 'I submitted too early. Reading it again, I saw my logic had gaps. But fixing that gave me my biggest growth.',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
    bgColor: 'bg-green-50',
  },
  {
    id: 'omkar',
    name: 'Omkar',
    role: 'Data Scientist at Healthcare',
    quote: 'The hardest part wasn’t the framework. It was explaining it clearly enough for a non-tech founder to act.',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg',
    bgColor: 'bg-purple-50',
  },
];

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What Others Felt in This Round
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            You're not alone in feeling the heat.
          </p>

          <div className="mt-10 flex justify-center">
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
      <Testimonials testimonials={testimonials}/>

      {/* Conclusion Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-xl font-medium text-blue-700 p-6 rounded-lg bg-blue-50 border border-blue-100">
          That tension you're feeling? It's what growing feels like — from task-doer to system builder.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="max-w-xl mx-auto flex justify-center space-x-4">
        <button
          className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center"
          onClick={() => console.log('Previous clicked')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </button>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
          onClick={() => console.log('Continue clicked')}
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </main>
  );
}
