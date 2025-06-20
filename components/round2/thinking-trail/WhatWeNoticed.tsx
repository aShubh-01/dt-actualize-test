'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, HelpCircle, RotateCcw } from 'lucide-react';

interface NoticedSectionProps {
  className?: string;
}

interface ObservationCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
}

const NoticedSection: React.FC<NoticedSectionProps> = ({ className = '' }) => {
  const observations: ObservationCard[] = [
    {
      id: "observation-1",
      title: "Tension Spotter",
      description: "You're good at spotting tension — but sometimes solve too fast",
      icon: <Zap className="w-5 h-5" />,
      bgGradient: "bg-gradient-to-br from-red-50 to-orange-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      borderColor: "border-red-100"
    },
    {
      id: "observation-2", 
      title: "Strong Questioner",
      description: "You ask strong questions — and you don't mind being wrong",
      icon: <HelpCircle className="w-5 h-5" />,
      bgGradient: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-100"
    },
    {
      id: "observation-3",
      title: "Learning Through Revision", 
      description: "Your revisions show you're not just listening — you're learning",
      icon: <RotateCcw className="w-5 h-5" />,
      bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100"
    }
  ];



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
        
        {/* Observations Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {observations.map((observation, index) => (
            <motion.div
              key={observation.id}
              id={observation.id}
              className={`${observation.bgGradient} p-8 rounded-2xl border ${observation.borderColor}`}
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
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon */}
              <motion.div 
                className={`w-12 h-12 ${observation.iconBg} rounded-xl flex items-center justify-center mb-6`}
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
                  className={observation.iconColor}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {observation.icon}
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
                {observation.title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
              >
                {observation.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NoticedSection;