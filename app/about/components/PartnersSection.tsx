"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const partnerLogos = [
    {
      src: '/footer-logos/eu-funds.svg',
      alt: t('pages.about.partners_section.logos.eu_funds'),
      width: 180,
      height: 80
    },
    {
      src: '/footer-logos/poland-republic-of.svg',
      alt: t('pages.about.partners_section.logos.republic_of_poland'),
      width: 160,
      height: 70
    },
    {
      src: '/footer-logos/urban-mobility.png',
      alt: t('pages.about.partners_section.logos.eit_urban_mobility'),
      width: 200,
      height: 70
    },
    {
      src: '/footer-logos/eu-structural-funds.svg',
      alt: t('pages.about.partners_section.logos.eu_structural_funds'),
      width: 200,
      height: 80
    },
    {
      src: '/footer-logos/ncbr.png',
      alt: t('pages.about.partners_section.logos.ncbr'),
      width: 170,
      height: 70
    },
    {
      src: '/footer-logos/space-bridge-fund.png',
      alt: t('pages.about.partners_section.logos.space_bridge_fund'),
      width: 180,
      height: 70
    }
  ];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-700"
            variants={fadeIn}
          >
            {t('pages.about.partners_section.heading')}
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {partnerLogos.map((logo) => (
            <motion.div
              key={logo.alt}
              className="w-full flex justify-center items-center px-4"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-16 md:h-20 w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;