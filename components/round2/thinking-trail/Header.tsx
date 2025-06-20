'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Menu } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Application', href: '#application' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      id="header" 
      className={`bg-white border-b border-gray-200 ${className}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-3 pr-[100px]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Brain className="text-white w-5 h-5" />
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-gray-900"
              whileHover={{ color: '#3F20FB' }}
              transition={{ duration: 0.2 }}
            >
              AI Fellowship
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5 + (index * 0.1),
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  y: -2,
                  color: '#3F20FB',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="text-gray-600 w-6 h-6" />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0 
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut" 
          }}
        >
          <motion.nav 
            className="py-4 space-y-2"
            initial={false}
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={{
              open: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              },
              closed: {
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1
                }
              }
            }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block py-2 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                variants={{
                  open: { 
                    y: 0, 
                    opacity: 1,
                    transition: { duration: 0.2 }
                  },
                  closed: { 
                    y: -10, 
                    opacity: 0,
                    transition: { duration: 0.2 }
                  }
                }}
                whileHover={{ 
                  x: 4,
                  color: '#3F20FB',
                  transition: { duration: 0.2 }
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;