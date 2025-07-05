'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const footerSections = [
    {
      title: "Data Champions",
      content: "Equipping data professionals with mental models for real-world impact.",
      isDescription: true
    },
    {
      title: "Resources",
      content: [
        "Framework Guide",
        "Case Studies", 
        "Applications"
      ],
      isDescription: false
    },
    {
      title: "Connect",
      content: [
        "Contact",
        "Newsletter",
        "Events"
      ],
      isDescription: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              {section.isDescription ? (
                <p className="text-gray-400">{section.content as string}</p>
              ) : (
                <ul className="space-y-2">
                  {(section.content as string[]).map((item, itemIndex) => (
                    <motion.li 
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.6 + index * 0.2 + itemIndex * 0.1,
                        ease: "easeOut" as const
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="text-gray-400 hover:text-white transition cursor-pointer"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p>© 2023 Data Champions. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;