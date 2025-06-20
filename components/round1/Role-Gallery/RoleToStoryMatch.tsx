// components/RoleToStoryMatch.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart } from 'lucide-react';

export default function RoleToStoryMatch() {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Showing matches for: ${input}`);
  };

  return (
    <section className="px-[200px] mb-14">
      <div className="bg-gradient-to-r from-indigo-50 to-white rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex-1">
          <div className="text-lg font-semibold text-gray-900 mb-1">Not sure where you fit in?</div>
          <div className="text-base text-gray-600 mb-2">
            Enter your background or interest. See real builders who started from the same place.
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mt-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Your college, major, or interest..."
              className="px-4 py-2 rounded-full border border-gray-200 text-sm w-72 focus:outline-none focus:border-indigo-400 transition"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow transition"
            >
              <Heart className="w-4 h-4" />
              Show my story matches
            </motion.button>
          </form>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-end">
          <span className="text-xs text-gray-400 italic mb-1">
            “This person had your same background.”
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold shadow transition"
          >
            <Brain className="w-4 h-4" />
            Try Mindset On
          </motion.button>
          <span className="text-xs text-gray-400 italic mt-1">No grades. Just guidance.</span>
        </div>
      </div>
    </section>
  );
}
