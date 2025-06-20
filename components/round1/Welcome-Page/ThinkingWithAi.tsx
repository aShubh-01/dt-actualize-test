'use client';

import { motion, Variants } from 'framer-motion';
import { FC } from 'react';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } },
};

const ThinkWithAI: FC = () => {
  return (
    <section className="container mx-auto px-6 mb-16">
      <motion.div
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row items-stretch min-h-[28rem]">
          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
              variants={fadeUpVariant}
            >
              Think With AI, Reflect Like a Builder
            </motion.h2>

            <motion.div
              className="h-1 w-20 bg-[#6366F1] mb-6"
              variants={fadeUpVariant}
            />

            <motion.div
              className="prose max-w-none text-gray-700"
              variants={fadeUpVariant}
            >
              <p className="text-lg font-medium mb-4">
                What This Round Is About:
              </p>
              <p className="mb-4">
                This round doesn't test your UX software or counseling technique. It tests:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>How you think like a system architect of behavior</li>
                <li>
                  How you design not just screens, but decisions, emotions, and rituals
                </li>
                <li>
                  How you blend AI, empathy, and psychological insight to move people — gently, yet powerfully
                </li>
              </ul>
              <p>
                Your materials aren't wireframes or diagnoses. They're more invisible, more potent:
              </p>
              <p className="italic">
                Attention. Reflection. Micro-habits. Story triggers. Interface rituals. Identity shifts.
              </p>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8"
            variants={imageVariant}
          >
            <img
              className="rounded-2xl shadow-lg object-cover max-h-[22rem] w-full"
              src="/Image1HeroSection.png"
              alt="person working with AI visualization"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ThinkWithAI;
