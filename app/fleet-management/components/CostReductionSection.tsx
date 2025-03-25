"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingDown,
  Wrench,
  Shield,
  Droplet,
  FileCheck
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CostReductionSection = () => {
  const { t } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const costItems = [
    {
      id: 'maintenance',
      percentage: t('pages.fleet_management.cost_reduction.items.maintenance.percentage'),
      label: t('pages.fleet_management.cost_reduction.items.maintenance.label'),
      icon: <Wrench className="h-6 w-6" />,
      color: "from-emerald-400 to-emerald-500"
    },
    {
      id: 'insurance',
      percentage: t('pages.fleet_management.cost_reduction.items.insurance.percentage'),
      label: t('pages.fleet_management.cost_reduction.items.insurance.label'),
      icon: <Shield className="h-6 w-6" />,
      color: "from-emerald-400 to-emerald-500"
    },
    {
      id: 'fuel',
      percentage: t('pages.fleet_management.cost_reduction.items.fuel.percentage'),
      label: t('pages.fleet_management.cost_reduction.items.fuel.label'),
      icon: <Droplet className="h-6 w-6" />,
      color: "from-emerald-400 to-emerald-500"
    },
    {
      id: 'claims',
      percentage: t('pages.fleet_management.cost_reduction.items.claims.percentage'),
      label: t('pages.fleet_management.cost_reduction.items.claims.label'),
      icon: <FileCheck className="h-6 w-6" />,
      color: "from-emerald-400 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-200 rounded-full opacity-20 blur-md" />
        <div className="absolute top-1/2 -right-20 w-48 h-48 bg-emerald-300 rounded-full opacity-20 blur-md" />
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-emerald-400 rounded-full opacity-10 blur-md" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h3
            className="text-emerald-500 text-xl font-medium mb-3"
            variants={fadeInUp}
          >
            {t('pages.fleet_management.cost_reduction.subtitle')}
          </motion.h3>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            variants={fadeInUp}
          >
            {t('pages.fleet_management.cost_reduction.heading_pre')}
            <span className="relative text-emerald-500 ml-2">
              {t('pages.fleet_management.cost_reduction.highlight')}
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-emerald-300 opacity-60 rounded-full"></span>
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {costItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-emerald-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md shadow-emerald-200/50 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white">
                    {item.icon}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="text-4xl font-bold text-emerald-500 mb-1 flex items-center">
                    <TrendingDown className="h-6 w-6 mr-1" />
                    {item.percentage}
                  </div>
                  <div className="text-gray-700 font-medium">{item.label}</div>
                </div>
              </div>

              <div className="mt-4 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${parseInt(item.percentage)}%` }}
                  transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium transition-all shadow-lg shadow-emerald-500/20 group"
          >
            {t('pages.fleet_management.cost_reduction.cta')}
            <svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CostReductionSection;