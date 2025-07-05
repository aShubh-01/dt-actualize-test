// components/MetaContextBlock.tsx
'use client';

import { Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MetaContextBlock() {
  return (
    <section className="px-[200px] mt-10 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Find Your Builder Role</h1>
        <p className="text-base text-gray-600 max-w-xl">
          Browse real-world roles and stories from current builders. No tests, no pressure—just explore and see what fits your journey.
        </p>
      </div>
    </section>
  );
}
