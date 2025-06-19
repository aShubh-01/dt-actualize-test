// components/MainPage.tsx
'use client';

import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  bgColor: string;
}

interface MainPageProps {
  onPreviousClick?: () => void;
  onContinueClick?: () => void;
}

const MainPage: React.FC<MainPageProps> = ({
  onPreviousClick,
  onContinueClick
}) => {
  const testimonials: Testimonial[] = [
    {
      id: 'jhansi',
      name: 'Jhansi',
      role: 'Product Manager at Fintech',
      quote: 'I realized data isn\'t about showing intelligence. It\'s about unlocking action.',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'soubhik',
      name: 'Soubhik',
      role: 'Engineering Lead at SaaS',
      quote: 'I submitted too early. Reading it again, I saw my logic had gaps. But fixing that gave me my biggest growth.',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
      bgColor: 'bg-green-50'
    },
    {
      id: 'omkar',
      name: 'Omkar',
      role: 'Data Scientist at Healthcare',
      quote: 'The hardest part wasn\'t the framework. It was explaining it clearly enough for a non-tech founder to act.',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg',
      bgColor: 'bg-purple-50'
    }
  ];

  const handlePrevious = () => {
    if (onPreviousClick) {
      onPreviousClick();
    } else {
      console.log('Previous clicked');
    }
  };

  const handleContinue = () => {
    if (onContinueClick) {
      onContinueClick();
    } else {
      console.log('Continue clicked');
    }
  };

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
                alt="illustration of diverse group of people working on laptops with thought bubbles showing their struggle and growth, minimalist style"
                fill
                className="rounded-lg shadow-md object-cover"
                sizes="256px"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Here's what others said after facing this round:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">
                        <span>
                            {testimonial.name}
                        </span>
                        <span className="text-xs text-gray-500">
                            {testimonial.role}
                        </span>
                    </h3>
                  </div>
                  <div className={`${testimonial.bgColor} p-4 rounded-lg`}>
                    <p className="text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Conclusion Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-xl font-medium text-blue-700 p-6 rounded-lg bg-blue-50 border border-blue-100">
          That tension you're feeling? It's what growing feels like — from task-doer to system builder.
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="max-w-xl mx-auto flex justify-center space-x-4">
        <button
          onClick={handlePrevious}
          className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </button>
        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </main>
  );
};

export default MainPage;