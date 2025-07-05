'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Pause, Mic, MessageSquare } from 'lucide-react';

interface WatchSectionProps {
  className?: string;
  watchPoints: WatchPoint[];
}

interface WatchPoint {
  _id: string;
  title: string;
  description: string;
  iconType: 'pause' | 'mic' | 'message';
}

const iconMap = {
  pause: <Pause className="w-5 h-5" />,
  mic: <Mic className="w-5 h-5" />,
  message: <MessageSquare className="w-5 h-5" />,
};

const styleMap = {
  pause: {
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  mic: {
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  message: {
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  }
};

const WatchSection: React.FC<WatchSectionProps> = ({ className = '', watchPoints }) => {
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
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What to Watch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {watchPoints.map((point, index) => {
            const iconType = point.iconType;
            if (!iconType || !(iconType in styleMap)) return null;

            const styles = styleMap[iconType];

            return (
              <motion.div
                key={point._id}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
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
                <motion.div 
                  className={`w-12 h-12 ${styles.iconBg} rounded-xl flex items-center justify-center mb-6`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7 + (index * 0.2),
                    type: "spring",
                    damping: 15,
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <motion.div className={styles.iconColor}>
                    {iconMap[iconType]}
                  </motion.div>
                </motion.div>

                <motion.h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {point.title}
                </motion.h3>
                <motion.p className="text-gray-700 leading-relaxed">
                  {point.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WatchSection;
