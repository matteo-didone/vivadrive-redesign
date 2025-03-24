import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

// Updated CSS variables using the green palette from Adobe Color
const cssVariables = `
:root {
  --primary-color: 18, 172, 108;      /* #12AC6C - Medium green */
  --secondary-color: 19, 166, 97;     /* #13A661 - Emerald green from the palette */
  --accent-color: 139, 217, 184;      /* #8BD9B8 - Light mint green */
  --dark-color: 17, 24, 38;           /* #111826 - Dark navy from the palette */
  --success-color: 34, 197, 94;       /* Same success color */
  --background-light: 242, 250, 247;  /* Very light mint green */
  --background-dark: 17, 24, 38;      /* Same as dark-color */
  --noise-opacity: 0.4;
}

.dark {
  --noise-opacity: 0.2;
}
`;

const BenefitsSection = () => {
  // Add language hook
  const { t } = useLanguage();

  // State for hover effects and animations
  const [hoveredCard, setHoveredCard] = useState(null);

  // Updated benefits data with color palette adjustments and translations
  const benefits = [
    {
      title: t('benefits.items.0.title'),
      description: t('benefits.items.0.description'),
      imageUrl: "/benefits-section/co2_cloud.png",
      iconOutlined: true,
      gradient: "from-[#13A661] to-[#12AC6C]", // Emerald to medium green
      stat: t('benefits.items.0.stat'),
      detailedStat: {
        before: t('benefits.items.0.detailedStat.before'),
        after: t('benefits.items.0.detailedStat.after'),
        unit: t('benefits.items.0.detailedStat.unit')
      },
      testimonial: t('benefits.items.0.testimonial'),
      learnMoreText: t('benefits.items.0.learnMore'),
      learnMoreUrl: "/benefits/emissions"
    },
    {
      title: t('benefits.items.1.title'),
      description: t('benefits.items.1.description'),
      imageUrl: "/benefits-section/coin.png",
      iconOutlined: false,
      gradient: "from-[#12AC6C] to-[#15BF70]", // Medium green to bright green
      stat: t('benefits.items.1.stat'),
      detailedStat: {
        before: t('benefits.items.1.detailedStat.before'),
        after: t('benefits.items.1.detailedStat.after'),
        unit: t('benefits.items.1.detailedStat.unit')
      },
      testimonial: t('benefits.items.1.testimonial'),
      learnMoreText: t('benefits.items.1.learnMore'),
      learnMoreUrl: "/benefits/costs"
    },
    {
      title: t('benefits.items.2.title'),
      description: t('benefits.items.2.description'),
      imageUrl: "/benefits-section/esg.png",
      iconOutlined: true,
      gradient: "from-[#15BF70] to-[#8BD9B8]", // Bright green to light mint
      stat: t('benefits.items.2.stat'),
      detailedStat: {
        before: t('benefits.items.2.detailedStat.before'),
        after: t('benefits.items.2.detailedStat.after'),
        unit: t('benefits.items.2.detailedStat.unit')
      },
      testimonial: t('benefits.items.2.testimonial'),
      learnMoreText: t('benefits.items.2.learnMore'),
      learnMoreUrl: "/benefits/compliance"
    },
    {
      title: t('benefits.items.3.title'),
      description: t('benefits.items.3.description'),
      imageUrl: "/benefits-section/opinions.png",
      iconOutlined: true,
      gradient: "from-[#13A661] to-[#8BD9B8]", // Emerald green to light mint
      stat: t('benefits.items.3.stat'),
      detailedStat: {
        before: t('benefits.items.3.detailedStat.before'),
        after: t('benefits.items.3.detailedStat.after'),
        unit: t('benefits.items.3.detailedStat.unit')
      },
      testimonial: t('benefits.items.3.testimonial'),
      learnMoreText: t('benefits.items.3.learnMore'),
      learnMoreUrl: "/benefits/brand-image"
    },
  ];

  // Animation variants with enhanced effects
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  // Parallax effect for decorative elements
  const parallaxEffect = {
    initial: { y: 0 },
    animate: (index) => ({
      y: [0, index % 2 === 0 ? -8 : 8],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4 + index,
        ease: "easeInOut"
      }
    })
  };

  // Function to render the mini comparison chart
  const renderComparisonChart = (data) => (
    <div className="w-full mt-3 mb-2 flex items-center justify-between text-xs">
      <div className="flex flex-col items-center">
        <span className="text-gray-500 dark:text-gray-400">{t('benefits.chartLabels.before')}</span>
        <span className="font-bold text-sm">{data.before}</span>
      </div>

      <div className="h-0.5 flex-1 mx-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700"></div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-gray-500 to-[#12AC6C]"
        ></motion.div>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-gray-500 dark:text-gray-400">{t('benefits.chartLabels.after')}</span>
        <span className="font-bold text-sm">{data.after}</span>
      </div>
    </div>
  );

  // SVG for Regulations icon
  const RegulationsIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12 text-white">
      <path fill="currentColor" d="M16,9H21.5L16,3.5V9M7,2H17L23,8V18A2,2 0 0,1 21,20H7C5.89,20 5,19.1 5,18V4A2,2 0 0,1 7,2M7,4V18H21V10H15V4H7M3,6V22H19V24H3A2,2 0 0,1 1,22V6H3Z" />
    </svg>
  );

  return (
    <>
      {/* Add CSS variables */}
      <style jsx global>{cssVariables}</style>

      <section
        id="benefits"
        className="py-20 md:py-28 bg-gradient-to-b from-[#F2FAF7] to-white dark:from-[#111826]/90 dark:to-[#111826] relative overflow-hidden"
      >
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Enhanced decorative elements with parallax using the new color palette */}
        <motion.div
          custom={1}
          variants={parallaxEffect}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-0 w-64 h-64 bg-[#12AC6C]/10 rounded-full blur-3xl -z-10"
        ></motion.div>
        <motion.div
          custom={2}
          variants={parallaxEffect}
          initial="initial"
          animate="animate"
          className="absolute bottom-20 right-0 w-80 h-80 bg-[#13A661]/10 rounded-full blur-3xl -z-10"
        ></motion.div>
        <motion.div
          custom={3}
          variants={parallaxEffect}
          initial="initial"
          animate="animate"
          className="absolute top-40 right-1/4 w-40 h-40 bg-[#8BD9B8]/15 rounded-full blur-2xl -z-10"
        ></motion.div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-[#12AC6C]/10 text-[#12AC6C] border-[#12AC6C]/20 hover:bg-[#12AC6C]/20 py-1.5 px-4 text-sm font-medium">
              {t('benefits.badge')}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#111826] to-[#12AC6C] dark:from-white dark:to-[#8BD9B8] bg-clip-text text-transparent">
              {t('benefits.heading')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
              {t('benefits.description')}
            </p>
          </motion.div>

          {/* CSS Grid layout for more flexible card positioning */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8"
            style={{
              gridTemplateRows: "masonry",
              gridAutoRows: "minmax(100px, auto)"
            }}
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={item}
                className={`${i === 0 || i === 3 ? "sm:translate-y-4" : ""}`}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card
                  className="bg-white/80 dark:bg-[#111826]/80 backdrop-blur-sm border-gray-100/80 dark:border-gray-800/80 overflow-hidden 
                  group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full
                  hover:border-opacity-80 hover:border-[#12AC6C]/30 dark:hover:border-[#12AC6C]/20"
                >
                  <div className={`h-2.5 w-full bg-gradient-to-r ${benefit.gradient}`}></div>
                  <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center">
                    {/* Icon container with updated colors */}
                    <div
                      className={`mb-6 mx-auto flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full 
                      ${i === 0 ? 'bg-[#13A661]' :
                          i === 1 ? 'bg-gradient-to-r from-[#12AC6C] to-[#15BF70]' :
                            i === 2 ? 'bg-[#15BF70]' :
                              'bg-[#13A661]'} 
                      shadow-lg
                      p-5 transition-all duration-300 group-hover:shadow-xl`}
                    >
                      {/* Use the RegulationsIcon SVG only for the Regulations card */}
                      {i === 2 ? (
                        <RegulationsIcon />
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={benefit.imageUrl}
                            alt={benefit.title}
                            fill
                            className="object-contain brightness-0 invert"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#12AC6C] transition-colors">
                      {benefit.title}
                    </h3>

                    <div className="mb-4">
                      <span className={`inline-block text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${benefit.gradient} text-white`}>
                        {benefit.stat}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>

                    {/* Mini comparison chart */}
                    {renderComparisonChart(benefit.detailedStat)}

                    {/* Testimonial quote */}
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <blockquote className="italic text-sm text-gray-500 dark:text-gray-400 relative px-4 py-3 bg-gray-50 dark:bg-[#111826]/50 rounded-lg">
                        "{benefit.testimonial}"
                      </blockquote>
                    </div>

                    {/* Learn more link */}
                    <motion.a
                      href={benefit.learnMoreUrl}
                      className={`mt-4 inline-flex items-center text-sm px-4 py-2 rounded-full bg-gradient-to-r ${benefit.gradient} text-white shadow-md`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {benefit.learnMoreText} <ChevronRight className="ml-1 h-4 w-4" />
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;