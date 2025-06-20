'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

const AIThinkingPartner: FC = () => {
  return (
    <section className="container mx-auto px-6 mb-16">
      <motion.div
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              AI is Your Thinking Partner
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mb-6"></div>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                You can — and should — use tools like UX Pilot to:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
                <li>Simulate user frustration</li>
                <li>Explore psychological friction</li>
                <li>Prototype tones, transitions, and story arcs</li>
              </ul>
              <p className="text-gray-600 mb-4">
                If something feels off, don't just fix it. Feel it. Explore it. Ask it.
              </p>
              <p className="text-lg font-medium text-gray-700 mb-2">
                What We're Observing Isn't What You Know.
              </p>
              <p className="text-gray-600 mb-2">We're watching:</p>
              <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
                <li>How you structure ambiguity</li>
                <li>How you reframe a dull moment into an emotional one</li>
                <li>How you hold space for the user's journey — and move them, without force</li>
              </ul>
              <p className="text-gray-600 italic">
                In short, we're not hiring a tool user. We're looking for a Behavioral Composer — someone who knows when to spark reflection and when to stay silent.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/Img2HeroSection.png"
                alt="human and AI collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AIThinkingPartner;
