// components/Header.tsx
'use client';

import { Boxes } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  return (
    <header className=" px-[200px] w-full bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Boxes className="text-indigo-600 w-6 h-6" />
          <span className="text-xl font-bold tracking-tight text-indigo-700">DT Actualize</span>
        </div>
        <nav className="flex items-center gap-8 text-sm font-medium">
          {['Role Gallery', 'Stories', 'Tryouts', 'Help'].map((item) => (
            <motion.span
              key={item}
              whileHover={{ color: '#4f46e5' }}
              className="cursor-pointer transition"
            >
              {item}
            </motion.span>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Image
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full border border-indigo-100 shadow-sm"
          />
        </div>
      </div>
    </header>
  );
}
