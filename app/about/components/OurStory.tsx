"use client";

import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { ChevronRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OurStory = () => {
  const { t } = useLanguage();
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50">
      {/* Background decorative elements - adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 md:-top-24 -left-16 md:-left-24 w-48 md:w-64 h-48 md:h-64 bg-emerald-200 rounded-full opacity-20 blur-md" />
        <div className="absolute top-1/2 -right-12 md:-right-20 w-32 md:w-48 h-32 md:h-48 bg-blue-300 rounded-full opacity-20 blur-md" />
        <div className="absolute bottom-0 left-1/4 w-24 md:w-32 h-24 md:h-32 bg-emerald-400 rounded-full opacity-10 blur-md" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12">
          {/* Content Column */}
          <motion.div
            className="w-full lg:w-1/2 space-y-4 md:space-y-6 pt-8 md:pt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div variants={fadeInUp} className="text-center lg:text-left">
              <motion.span className="text-emerald-500 font-semibold inline-flex items-center gap-2 justify-center lg:justify-start">
                <Calendar className="h-4 md:h-5 w-4 md:w-5" />
                {t('pages.about.our_story.since')}
              </motion.span>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 leading-tight"
                variants={fadeInUp}
              >
                {t('pages.about.our_story.heading_pre')} <span className="relative text-emerald-500">
                  {t('pages.about.our_story.heading_highlight')}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-emerald-300 opacity-60 rounded-full"></span>
                </span>
              </motion.h2>
            </motion.div>

            <motion.div className="space-y-4 text-gray-700 text-center lg:text-left" variants={fadeInUp}>
              <motion.p className="text-lg md:text-xl font-medium" variants={fadeInUp}>
                {t('pages.about.our_story.paragraph1')}
              </motion.p>

              <motion.p className="text-base md:text-lg" variants={fadeInUp}>
                {t('pages.about.our_story.paragraph2')}
              </motion.p>

              <motion.div
                className="relative bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow overflow-hidden group my-6 md:my-8"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 -mr-6 md:-mr-8 -mt-6 md:-mt-8 bg-emerald-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="border-l-4 border-emerald-500 pl-3 md:pl-4 py-2">
                  <p className="text-base md:text-lg italic text-gray-700">
                    {t('pages.about.our_story.quote')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="pt-4 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4"
                variants={fadeInUp}
              >
                <motion.a
                  href="/about/technology"
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white border border-emerald-500 text-emerald-500 rounded-full hover:bg-emerald-50 transition-all shadow-md hover:shadow-lg group text-sm md:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('pages.about.our_story.technology_button')}
                  <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/about/team"
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium transition-all shadow-lg shadow-emerald-500/20 group text-sm md:text-base"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('pages.about.our_story.team_button')}
                  <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Column with overlapping design - Optimized for mobile */}
          <motion.div
            className="w-full lg:w-1/2 relative mx-auto max-w-md lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/about/office-building.png"
                alt={t('pages.about.our_story.image_alt')}
                width={600}
                height={450}
                className="w-full h-auto"
                priority
              />

              {/* Progress bars overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/10 flex flex-col justify-end p-4 md:p-6">
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-white drop-shadow-md">{t('pages.about.our_story.growth_label')}</span>
                    <span className="text-xs font-medium text-white drop-shadow-md">{t('pages.about.our_story.growth_value')}</span>
                  </div>
                  <motion.div
                    className="w-full h-1.5 md:h-2 bg-white/30 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Decorative elements - adjusted for mobile */}
            <div className="absolute -bottom-4 md:-bottom-5 -left-4 md:-left-5 w-16 md:w-24 h-16 md:h-24 rounded-lg bg-blue-500 -z-10"></div>
            <div className="absolute -top-4 md:-top-5 -right-4 md:-right-5 w-24 md:w-36 h-24 md:h-36 rounded-lg bg-emerald-500 -z-10"></div>

            {/* Floating stats badge - adjusted for mobile */}
            <motion.div
              className="absolute -bottom-5 md:-bottom-6 right-6 md:right-12 bg-white shadow-lg rounded-xl px-4 md:px-6 py-3 md:py-4 flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                <Calendar className="h-4 md:h-5 w-4 md:w-5 text-white" />
              </div>
              <div>
                <span className="block text-xs md:text-sm text-gray-500">{t('pages.about.our_story.established_label')}</span>
                <span className="font-bold text-sm md:text-base text-gray-800">{t('pages.about.our_story.established_year')}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;