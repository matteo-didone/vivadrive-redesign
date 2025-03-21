"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WhatWeDoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const imageContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageContainerRef.current) {
        // This creates a subtle parallax effect as you scroll
        const scrollY = window.scrollY;
        const boundingRect = imageContainerRef.current.getBoundingClientRect();
        const offsetY = window.innerHeight - boundingRect.top;

        if (offsetY > 0) {
          const translateY = Math.min(30, offsetY * 0.05);
          imageContainerRef.current.style.transform = `translateY(${translateY}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-40 md:w-64 h-40 md:h-64 bg-emerald-500/10 rounded-full -translate-y-1/4 translate-x-1/4 blur-2xl" />
      <div className="absolute left-0 top-0 w-32 md:w-40 h-32 md:h-40 bg-emerald-500/5 rounded-full -translate-y-1/4 -translate-x-1/4 blur-xl" />

      <div className="max-w-7xl mx-auto">
        {/* Title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="relative mb-10 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-500 relative z-10 inline-block">
            What do we do?
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-3 bg-emerald-200/50 w-20 md:w-32 rounded-full blur-sm"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-center"
            >
              We provide innovative solutions for fleets and managers
            </motion.h3>

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-center">
              <div className="flex items-start space-x-3 md:space-x-4 justify-center">
                <div className="mt-1 w-5 md:w-6 h-5 md:h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  We work everyday with passion to provide tools that make
                  work of fleet managers easy and enjoyable.
                </p>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 justify-center">
                <div className="mt-1 w-5 md:w-6 h-5 md:h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Every single day we save precious time and money on
                  daunting fleet management tasks.
                </p>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 justify-center">
                <div className="mt-1 w-5 md:w-6 h-5 md:h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  We are one among the first ones in the world who
                  developed a system that saves your money, time and
                  environment at the same time.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-6 md:pt-8 flex justify-center"
            >
              <button className="w-full sm:w-auto px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 flex items-center justify-center">
                <span className="flex items-center">
                  Learn More About Our Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            ref={imageContainerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/about/humans.jpg"
                alt="Fleet managers discussing solutions"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Subtle overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-70"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-emerald-500 rounded-2xl transform translate-x-3 md:translate-x-4 translate-y-3 md:translate-y-4 -z-10" />

            {/* Stats Card - Enhanced design */}
            <div className="absolute -bottom-4 md:-bottom-6 -left-2 md:-left-6 bg-white p-4 md:p-6 rounded-xl shadow-lg z-20 max-w-[65%] sm:max-w-[55%] md:max-w-[60%] border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">
                <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-1 sm:mb-0 group transition-all duration-300 relative">
                  30%
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-1 bg-emerald-200 transition-all duration-500 rounded-full"></span>
                </div>
                <div className="text-sm md:text-base text-gray-700">Average cost reduction for our clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;