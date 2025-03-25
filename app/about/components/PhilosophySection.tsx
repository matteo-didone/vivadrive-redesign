"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PhilosophySection = () => {
  const { t } = useLanguage();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  // Philosophy cards data from translations
  const philosophyCards = [
    {
      id: 'sustainable',
      imageSrc: '/about/sustainable.png',
      titleKey: 'pages.about.philosophy.cards.sustainable.title',
      descriptionKey: 'pages.about.philosophy.cards.sustainable.description',
    },
    {
      id: 'modern',
      imageSrc: '/about/modern.png',
      titleKey: 'pages.about.philosophy.cards.modern.title',
      descriptionKey: 'pages.about.philosophy.cards.modern.description',
    },
    {
      id: 'human',
      imageSrc: '/about/human.png',
      titleKey: 'pages.about.philosophy.cards.human.title',
      descriptionKey: 'pages.about.philosophy.cards.human.description',
    },
    {
      id: 'simple',
      imageSrc: '/about/simple.png',
      titleKey: 'pages.about.philosophy.cards.simple.title',
      descriptionKey: 'pages.about.philosophy.cards.simple.description',
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-40 -top-40 w-80 h-80 bg-emerald-100 rounded-full opacity-50 blur-3xl" />
      <div className="absolute right-0 top-1/2 w-64 h-64 bg-emerald-50 rounded-full opacity-50 blur-2xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-emerald-500 mb-16 text-center"
        >
          {t('pages.about.philosophy.heading')}
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {philosophyCards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              <div className="p-6 space-y-4 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <Image
                    src={card.imageSrc}
                    alt={t(card.titleKey)}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">{t(card.titleKey)}</h3>
                
                <p className="text-gray-600">
                  {t(card.descriptionKey)}
                </p>
                
                <div className="pt-4 mt-auto">
                  <div className="text-emerald-500 font-medium flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                    {t('pages.about.philosophy.learn_more')} <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;