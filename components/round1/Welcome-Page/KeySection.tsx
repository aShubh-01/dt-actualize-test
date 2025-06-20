'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FC } from 'react';

type KeySection = {
  id: number;
  title: string;
  desc: string;
  img: string;
  action: string;
};

const keySections: KeySection[] = [
  {
    id: 1,
    title: 'We are not hiring you for an internship.',
    desc:
      "You are an expert who would help us. You're Reframing How employees grow. You're not here to complete tasks. You're here to design behavior — to choreograph how people reflect, grow, and change.",
    img: '/herocar1.png',
    action: 'Learn more',
  },
  {
    id: 2,
    title: 'Your education is your superpower',
    desc:
      "Whether you're trained in Fine Arts, Design, or Psychology — you have the potential inside you and you will discover it by the end of this round.",
    img: '/herocar1.1.png',
    action: 'Discover more',
  },
  {
    id: 3,
    title: "This round isn't a job test.",
    desc:
      "It's your first Behavioral Lab. Let's see how you blend empathy with design — and make systems feel human again.",
    img: '/herocar1.2.png',
    action: 'Explore more',
  },
];

const KeySections: FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {keySections.map((section, index) => (
            <motion.div
              key={section.id}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <img
                  src={section.img}
                  alt={section.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-700 mb-4">{section.desc}</p>
              <span className="inline-flex items-center text-[#0284c7] font-medium hover:cursor-pointer">
                {section.action}
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySections;
