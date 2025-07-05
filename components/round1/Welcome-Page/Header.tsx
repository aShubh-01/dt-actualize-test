'use client';

import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, FC } from 'react';

const Header: FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const fadeInVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const mobileMenuVariant = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header
      className="bg-white shadow-sm"
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.span
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div className="text-primary-700 font-bold text-2xl">
            AI Fellowship
          </motion.div>
        </motion.span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {['About', 'Program', 'Fellows', 'Resources'].map((item: string) => (
            <motion.span
              whileHover={{ scale: 1.05, color: '#0ea5e9' }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={item}
              className="text-gray-800 font-medium cursor-pointer"
            >
              {item}
            </motion.span>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.span
            whileHover={{ scale: 1.05, color: '#0ea5e9' }}
            className="text-gray-800 font-medium cursor-pointer transition"
          >
            Login
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-full transition duration-300 cursor-pointer"
          >
            Apply Now
          </motion.span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <Menu
            className="w-6 h-6 text-gray-800 cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white shadow px-4 py-2 space-y-2 overflow-hidden"
          >
            {['About', 'Program', 'Fellows', 'Resources', 'Login', 'Apply Now'].map(
              (item: string) => (
                <div
                  key={item}
                  className={`block px-2 py-2 text-gray-800 font-medium ${
                    item === 'Apply Now'
                      ? 'bg-primary-600 text-white rounded-full text-center'
                      : ''
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
