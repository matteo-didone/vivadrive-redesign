"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const JoinOurTeamSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50"
    >
      {/* Background decorative elements - adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 md:-top-24 -right-16 md:-right-24 w-48 md:w-64 h-48 md:h-64 bg-emerald-200 rounded-full opacity-20 blur-md" />
        <div className="absolute top-1/2 -left-12 md:-left-20 w-32 md:w-48 h-32 md:h-48 bg-emerald-300 rounded-full opacity-20 blur-md" />
        <div className="absolute bottom-0 right-1/4 w-24 md:w-32 h-24 md:h-32 bg-emerald-400 rounded-full opacity-10 blur-md" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          {/* Image Column with overlapping design */}
          <motion.div
            className="w-full lg:w-1/2 relative max-w-md lg:max-w-none mx-auto"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/about/group.jpg"
                alt={t('pages.about.join_team.image_alt')}
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/10"></div>
            </div>

            {/* Decorative elements - adjusted for mobile */}
            <div className="absolute -bottom-4 md:-bottom-5 -left-4 md:-left-5 w-16 md:w-24 h-16 md:h-24 rounded-lg bg-emerald-500 -z-10"></div>
            <div className="absolute -top-4 md:-top-5 -right-4 md:-right-5 w-24 md:w-36 h-24 md:h-36 rounded-lg bg-blue-500 -z-10"></div>

            {/* Floating stats badge - adjusted for mobile */}
            <motion.div
              className="absolute -bottom-5 md:-bottom-6 right-8 md:right-12 bg-white shadow-lg rounded-xl px-4 md:px-6 py-3 md:py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full">
                  <Briefcase className="h-4 md:h-5 w-4 md:w-5" />
                </div>
                <div>
                  <span className="block text-xs md:text-sm text-gray-500">{t('pages.about.join_team.badge_label')}</span>
                  <span className="font-bold text-sm md:text-base text-gray-800">{t('pages.about.join_team.badge_value')}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 md:space-y-8 pt-6 md:pt-0"
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
              <motion.span className="text-emerald-500 font-semibold text-base md:text-lg">
                {t('pages.about.join_team.subtitle')}
              </motion.span>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 leading-tight"
                variants={fadeInUp}
              >
                {t('pages.about.join_team.heading_pre')} <span className="relative text-emerald-500">
                  {t('pages.about.join_team.heading_highlight')}
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-emerald-300 opacity-60 rounded-full"></span>
                </span> {t('pages.about.join_team.heading_post')}
              </motion.h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl font-medium text-gray-700 text-center lg:text-left"
            >
              {t('pages.about.join_team.description')}
            </motion.p>

            <motion.div className="space-y-5 md:space-y-6 text-center lg:text-left" variants={fadeInUp}>
              <div className="flex items-start space-x-3 md:space-x-4 justify-center lg:justify-start">
                <div className="mt-1 flex-shrink-0 text-emerald-500">
                  <CheckCircle className="h-5 md:h-6 w-5 md:w-6" />
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {t('pages.about.join_team.point1')}
                </p>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 justify-center lg:justify-start">
                <div className="mt-1 flex-shrink-0 text-emerald-500">
                  <CheckCircle className="h-5 md:h-6 w-5 md:w-6" />
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {t('pages.about.join_team.point2')}
                </p>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 justify-center lg:justify-start">
                <div className="mt-1 flex-shrink-0 text-emerald-500">
                  <CheckCircle className="h-5 md:h-6 w-5 md:w-6" />
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {t('pages.about.join_team.point3')}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow overflow-hidden group my-6 md:my-8 text-center lg:text-left"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 -mr-6 md:-mr-8 -mt-6 md:-mt-8 bg-emerald-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="border-l-4 border-emerald-500 pl-3 md:pl-4 py-2">
                <p className="text-base md:text-lg italic text-gray-700">
                  {t('pages.about.join_team.quote')}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <a
                href="/about/careers"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-full transition-all shadow-lg shadow-emerald-500/20 group hover:scale-105 hover:shadow-xl"
              >
                {t('pages.about.join_team.cta_button')}
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeamSection;