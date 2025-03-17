"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const WhatWeDoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
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
      className="py-24 px-4 md:px-8 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-60 h-60 bg-emerald-500/10 rounded-full -translate-y-1/4 translate-x-1/4 blur-2xl" />
      <div className="absolute left-0 top-0 w-40 h-40 bg-emerald-500/5 rounded-full -translate-y-1/4 -translate-x-1/4 blur-xl" />
      
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-4xl md:text-5xl font-bold text-emerald-500 mb-16"
        >
          What do we do?
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            >
              We provide innovative solutions for fleets and managers
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We work everyday with passion to provide tools that make
                  work of fleet managers easy and enjoyable.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every single day we save precious time and money on
                  daunting fleet management tasks.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are one among the first ones in the world who
                  developed a system that saves your money, time and
                  environment at the same time.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="pt-6"
            >
              <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                <span className="flex items-center">
                  Learn More About Our Solutions
                  <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <Image 
                src="/about/humans.jpg" 
                alt="Fleet managers discussing solutions"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-emerald-500 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold text-emerald-500">30%</div>
                <div className="text-gray-700">Average cost reduction for our clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;