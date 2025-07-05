'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header 
      id="header" 
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-[0px] px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
              <Brain className="text-white" size={16} />
            </div>
            <span className="text-xl font-bold text-gray-900">DT Fellowship</span>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.span 
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Program
            </motion.span>
            <motion.span 
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fellows
            </motion.span>
            <motion.span 
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply
            </motion.span>
            <motion.button 
              className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-500/90 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Get Started
            </motion.button>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;