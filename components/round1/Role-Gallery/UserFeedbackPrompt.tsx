// components/UserFeedbackPrompt.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function UserFeedbackPrompt() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback}`);
    setFeedback('');
  };

  return (
    <section className="px-[200px] mb-16">
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1">
          <div className="text-base font-semibold text-gray-800 mb-1">
            Which builder story resonated the most with you?
          </div>
          <div className="text-sm text-gray-600 mb-2">
            Let us know so we can suggest even better matches.
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-3 flex-1">
          <input
            type="text"
            placeholder="Type the name or role..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-200 text-sm w-64 focus:outline-none focus:border-indigo-400 transition"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow transition"
          >
            <Send className="w-4 h-4" />
            Submit
          </motion.button>
        </form>
      </div>
    </section>
  );
}
