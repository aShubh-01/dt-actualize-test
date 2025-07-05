"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Beaker, Users, Rocket, ArrowRight, Building } from 'lucide-react';
import { useToast } from '@/components/Toast';

// UI configuration based on case study tags/types
const getUIConfig = (tag: string) => {
  const configs: Record<string, {
    icon: React.ComponentType<any>;
    iconBg: string;
    iconColor: string;
  }> = {
    'Data-Driven Architecture': {
      icon: TrendingUp,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    'Predictive Systems': {
      icon: Beaker,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    'Behavioral Metrics': {
      icon: Users,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    'Impact Correlation': {
      icon: Rocket,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    }
  };

  // Fallback configuration for unknown tags
  return configs[tag] || {
    icon: Building,
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-600'
  };
};

interface CaseStudy {
  _id: string;
  company: string;
  description: string;
  tag: string;
}

type CaseStudyProps = {
  caseStudies?: CaseStudy[]
}

const CaseStudies: React.FC<CaseStudyProps> = ({ caseStudies }) => {

  return (
    <motion.section 
      id="case-studies" 
      className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies?.map((study, index) => {
            const uiConfig = getUIConfig(study.tag);
            const IconComponent = uiConfig.icon;
            
            return (
              <motion.div
                key={study._id}
                id={study._id}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Header with Icon and Company Name */}
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.2) + 0.2, duration: 0.5 }}
                >
                  <motion.div 
                    className={`w-12 h-12 ${uiConfig.iconBg} rounded-xl flex items-center justify-center mr-4`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <IconComponent className={uiConfig.iconColor} size={24} />
                  </motion.div>
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold text-gray-900"
                    whileHover={{ scale: 1.02 }}
                  >
                    {study.company}
                  </motion.h3>
                </motion.div>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.2) + 0.4, duration: 0.6 }}
                >
                  {study.description}
                </motion.p>

                {/* Tag with Arrow */}
                <motion.div 
                  className="mt-6 pt-6 border-t border-gray-100"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.2) + 0.6, duration: 0.5 }}
                >
                  <motion.span 
                    className="inline-flex items-center text-indigo-500 font-medium cursor-pointer"
                    whileHover={{ 
                      x: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <ArrowRight className="mr-2" size={16} />
                    {study.tag}
                  </motion.span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;