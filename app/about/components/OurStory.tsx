"use client";

import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { ChevronRight, Calendar } from 'lucide-react';

const OurStory = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-200 rounded-full opacity-20 blur-md" />
        <div className="absolute top-1/2 -right-20 w-48 h-48 bg-blue-300 rounded-full opacity-20 blur-md" />
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-emerald-400 rounded-full opacity-10 blur-md" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Content Column */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
            <motion.div variants={fadeInUp}>
              <motion.span className="text-emerald-500 font-semibold inline-flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Since 2019
              </motion.span>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 leading-tight"
                variants={fadeInUp}
              >
                Our <span className="relative text-emerald-500">
                  story
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-emerald-300 opacity-60 rounded-full"></span>
                </span>
              </motion.h2>
            </motion.div>

            <motion.div className="space-y-4 text-gray-700" variants={fadeInUp}>
              <motion.p className="text-xl font-medium" variants={fadeInUp}>
                VivaDrive was founded in 2019 in Warsaw with a vision to revolutionize fleet management.
              </motion.p>

              <motion.p className="text-lg" variants={fadeInUp}>
                Our main idea behind VivaDrive was to make fleet management as simple as possible and to reduce time and money one has to spend on it.
              </motion.p>

              <motion.div
                className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow overflow-hidden group my-8"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-emerald-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                  <p className="text-lg italic text-gray-700">
                    With years of experience in the field and cutting edge technology, we were able to create a unique product that has taken the market by storm from day one!
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="pt-4 flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <motion.a
                  href="/about/technology"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-emerald-500 text-emerald-500 rounded-full hover:bg-emerald-50 transition-all shadow-md hover:shadow-lg group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Technology
                  <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/about/team"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium transition-all shadow-lg shadow-emerald-500/20 group"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Meet Our Team
                  <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Column with overlapping design */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/about/office-building.png"
                alt="VivaDrive Headquarters"
                width={600}
                height={450}
                className="w-full h-auto"
                priority
              />

              {/* Progress bars overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/10 flex flex-col justify-end p-6">
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-white drop-shadow-md">Growth since 2019</span>
                    <span className="text-xs font-medium text-white drop-shadow-md">85%</span>
                  </div>
                  <motion.div
                    className="w-full h-2 bg-white/30 rounded-full overflow-hidden"
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

            {/* Decorative elements */}
            <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-lg bg-blue-500 -z-10"></div>
            <div className="absolute -top-5 -right-5 w-36 h-36 rounded-lg bg-emerald-500 -z-10"></div>

            {/* Floating stats badge */}
            <motion.div
              className="absolute -bottom-6 right-12 bg-white shadow-lg rounded-xl px-6 py-4 flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="block text-sm text-gray-500">Established</span>
                <span className="font-bold text-gray-800">2019</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;