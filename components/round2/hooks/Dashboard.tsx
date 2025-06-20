'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, GitBranch, Users } from 'lucide-react';

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

const DashboardSection = () => {
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <img
              className="w-full h-auto rounded-2xl shadow-xl"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fb0f822c55-9cc7d450e2d3ab87ea3d.png"
              alt="A person looking at complex data visualization dashboard with AI insights, professional office setting, blue tones"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-md">
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-900"
                variants={fadeInUp}
              >
                This isn't about building a dashboard.
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed"
                variants={fadeInUp}
              >
                This is about shaping how companies make decisions — in real time.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex flex-col gap-4"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <div className="p-2 rounded-full mt-1" style={{ backgroundColor: colors.primary[100] }}>
                    <Lightbulb className="w-5 h-5" style={{ color: colors.primary[600] }} />
                  </div>
                  <p className="text-gray-700">Transform raw data into strategic insights that drive business outcomes</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <div className="p-2 rounded-full mt-1" style={{ backgroundColor: colors.primary[100] }}>
                    <GitBranch className="w-5 h-5" style={{ color: colors.primary[600] }} />
                  </div>
                  <p className="text-gray-700">Build systems that scale from prototype to production-ready solutions</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <div className="p-2 rounded-full mt-1" style={{ backgroundColor: colors.primary[100] }}>
                    <Users className="w-5 h-5" style={{ color: colors.primary[600] }} />
                  </div>
                  <p className="text-gray-700">Collaborate with stakeholders to align AI capabilities with business goals</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;