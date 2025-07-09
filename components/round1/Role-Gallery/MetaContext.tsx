// components/MetaContextBlock.tsx
'use client';

import { Wand2 } from 'lucide-react'; // Icon not used currently
import { motion } from 'framer-motion';

export default function MetaContextBlock() {
  return (
    <section className="flex justify-center w-full mt-10 mb-8">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 flex flex-col items-center text-center gap-4">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
      Find Your Builder Role
    </h1>
    <p className="text-sm sm:text-base text-gray-600 max-w-xl">
      Browse real-world roles and stories from current builders. No tests, no pressure just explore and see what fits your journey.
    </p>
  </div>
</section>

  );
}
