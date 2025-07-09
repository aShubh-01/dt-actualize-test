// components/MetaContextBlock.tsx
'use client';

import { Wand2 } from 'lucide-react'; // Icon not used currently
import { motion } from 'framer-motion';

export default function MetaContextBlock() {
  return (
    <section className="w-full mt-10 mb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
            Find Your Builder Role
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl">
            Browse real-world roles and stories from current builders. No tests, no pressure—just explore and see what fits your journey.
          </p>
        </div>
      </div>
    </section>
  );
}
