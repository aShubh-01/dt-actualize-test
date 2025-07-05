'use client';

import { motion, Variants } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function HowToApproach() {
  const points: string[] = [
    "Read each scene as a real-world challenge. Imagine you're already on the team — how would you respond?",
    "Use AI to explore, not answer. Ask GPT to simulate founder feedback, user frustration, or alternate tones.",
    "Keep a second tab open for reflection. This round is not timed. Pause. Prompt. Think. Then write.",
  ];

  const listVariants: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="container mx-auto px-6 mb-16">
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          How to Approach This Round
        </h2>
        <div className="h-1 w-20 bg-indigo-500 mb-8" />

        <motion.ul
          className="space-y-6 text-gray-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={listVariants}
        >
          {points.map((point, idx) => (
            <motion.li
              key={idx}
              className="flex items-start"
              variants={itemVariants}
            >
              <CheckCircle className="text-indigo-500 mt-1 mr-3 w-6 h-6 flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </motion.ul>

        <p className="text-gray-700 font-medium mt-8">
          Your GrowthOS journey starts here. The tools are in front of you. Let's see how you use them.
        </p>
      </motion.div>
    </section>
  );
}
