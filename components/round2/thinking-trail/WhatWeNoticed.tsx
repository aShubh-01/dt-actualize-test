'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, HelpCircle, RotateCcw } from 'lucide-react';

interface NoticedSectionProps {
  className?: string;
  observations: ObservationCard[];
}

interface ObservationCard {
  _id: string;
  title: string;
  description: string;
  iconType: 'zap' | 'question' | 'revision';
}

const iconMap = {
  zap: <Zap className="w-5 h-5" />,
  question: <HelpCircle className="w-5 h-5" />,
  revision: <RotateCcw className="w-5 h-5" />,
};

const styleMap = {
  zap: {
    bgGradient: "bg-gradient-to-br from-red-50 to-orange-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    borderColor: "border-red-100"
  },
  question: {
    bgGradient: "bg-gradient-to-br from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    borderColor: "border-green-100"
  },
  revision: {
    bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderColor: "border-blue-100"
  }
};

const NoticedSection: React.FC<NoticedSectionProps> = ({ className = '', observations }) => {
  return (
    <motion.section 
      id="noticed-section" 
      className={`py-20 bg-white ${className}`}
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
            What We Noticed
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {observations.map((observation, index) => {
            const iconType = observation.iconType || 'zap';
            const styles = styleMap[iconType];

            return (
              <motion.div
                key={observation._id}
                className={`${styles.bgGradient} p-8 rounded-2xl border ${styles.borderColor}`}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
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
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className={`w-12 h-12 ${styles.iconBg} rounded-xl flex items-center justify-center mb-6`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
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
                  {observation.title}
                </motion.h3>
                <motion.p className="text-gray-700 leading-relaxed">
                  {observation.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NoticedSection;
