'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Pause, Mic, MessageSquare } from 'lucide-react';

interface WatchSectionProps {
  className?: string;
}

interface WatchPoint {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const WatchSection: React.FC<WatchSectionProps> = ({ className = '' }) => {
  const watchPoints: WatchPoint[] = [
    {
      id: "watch-1",
      title: "Slow Down & Frame",
      description: "Slow down and frame the right problem",
      icon: <Pause className="w-5 h-5" />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: "watch-2", 
      title: "Narrate Assumptions",
      description: "Narrate your assumptions like you're guiding a founder",
      icon: <Mic className="w-5 h-5" />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      id: "watch-3",
      title: "Build Speaking Outputs", 
      description: "Build outputs that speak, not just look smart",
      icon: <MessageSquare className="w-5 h-5" />,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <motion.section 
      id="watch-section" 
      className={`py-20 bg-gray-50 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What to Watch in Round 2
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>
        
        {/* Watch Points Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {watchPoints.map((watchPoint, index) => (
            <motion.div
              key={watchPoint.id}
              id={watchPoint.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ 
                y: 50, 
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5 + (index * 0.2),
                ease: "easeOut",
                type: "spring",
                damping: 20,
                stiffness: 100
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon */}
              <motion.div 
                className={`w-12 h-12 ${watchPoint.iconBg} rounded-xl flex items-center justify-center mb-6`}
                initial={{ 
                  scale: 0,
                  rotate: -180
                }}
                whileInView={{
                  scale: 1,
                  rotate: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.7 + (index * 0.2),
                  type: "spring",
                  damping: 15,
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className={watchPoint.iconColor}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {watchPoint.icon}
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.h3 
                className="text-xl font-semibold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
              >
                {watchPoint.title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
              >
                {watchPoint.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WatchSection;