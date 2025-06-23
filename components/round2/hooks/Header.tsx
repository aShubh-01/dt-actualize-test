'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

// Color variables
const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  }
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`relative top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Brain className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" style={{ color: colors.primary[600] }} />
          <span className="font-bold text-lg sm:text-xl">AI Fellowship</span>
        </motion.div>
        
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {['About', 'Program', 'FAQ', 'Alumni'].map((item, index) => (
            <motion.span
              key={item}
              className="font-medium transition cursor-pointer text-sm lg:text-base"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = colors.primary[600]}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'inherit'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.span>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button
            className="p-2 rounded-lg"
            style={{ color: colors.primary[600] }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
        
        <motion.button 
          className="hidden md:inline-block text-white px-4 sm:px-5 py-2 rounded-xl font-medium transition shadow-md text-sm lg:text-base"
          style={{ backgroundColor: colors.primary[600] }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = colors.primary[700]}
          onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = colors.primary[600]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now
        </motion.button>
      </div>
    </header>
  );
};

export default Header;