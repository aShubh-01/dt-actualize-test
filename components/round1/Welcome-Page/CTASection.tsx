'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section id='cta' className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to design the future of human-AI interaction?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join a community of visionaries who are redefining how technology serves humanity.
          </p>
          <Link href="/login" passHref>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-full text-lg transition duration-300 hover:cursor-pointer"
          >
            Start Answering Questions
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
