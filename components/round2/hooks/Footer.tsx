'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';

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

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const footerLinks = {
    program: [
      'Application Process',
      'Curriculum', 
      'Mentorship',
      'Projects'
    ],
    resources: [
      'Blog',
      'Research Papers',
      'Case Studies',
      'FAQ'
    ],
    connect: [
      'Contact Us',
      'Alumni Network',
      'Partner Companies',
      'Events'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8 sm:mb-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 mr-3" style={{ color: colors.primary[400] }} />
              <span className="font-bold text-lg sm:text-xl">AI Fellowship</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Empowering the next generation of AI leaders to build solutions that matter.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Program</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.program.map((link, index) => (
                <li key={index}>
                  <span 
                    className="text-gray-400 text-sm sm:text-base transition cursor-pointer block py-1"
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#9ca3af'}
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <span 
                    className="text-gray-400 text-sm sm:text-base transition cursor-pointer block py-1"
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#9ca3af'}
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Connect</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.connect.map((link, index) => (
                <li key={index}>
                  <span 
                    className="text-gray-400 text-sm sm:text-base transition cursor-pointer block py-1"
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#9ca3af'}
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2023 AI Fellowship. All rights reserved.
          </p>
          
          <div className="flex space-x-4 sm:space-x-6">
            {[
              { icon: Twitter, label: 'Twitter' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Github, label: 'GitHub' },
              { icon: MessageCircle, label: 'Discord' }
            ].map(({ icon: Icon, label }) => (
              <motion.span
                key={label}
                className="text-gray-400 transition cursor-pointer p-2 sm:p-0"
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#9ca3af'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;