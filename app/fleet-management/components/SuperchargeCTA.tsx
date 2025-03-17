import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ChevronRight } from 'lucide-react';

const SuperchargeCTA = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Main background */}
            <div className="absolute inset-0 bg-emerald-500 z-0" />

            {/* Decorative elements */}
            <div className="absolute inset-0 z-[1] overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white opacity-5" />
                <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-white opacity-5" />
                <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-white opacity-5" />

                {/* Animated particles */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-white opacity-20"
                    animate={{
                        x: [0, 100, 50, 200],
                        y: [0, -50, -100, -150],
                        scale: [1, 1.2, 0.8, 0],
                        opacity: [0.2, 0.3, 0.2, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-white opacity-20"
                    animate={{
                        x: [-100, -50, -200, -250],
                        y: [50, 100, 150, 200],
                        scale: [1, 1.5, 1, 0],
                        opacity: [0.2, 0.4, 0.2, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-1/3 w-5 h-5 rounded-full bg-white opacity-20"
                    animate={{
                        x: [50, 100, 150, 200],
                        y: [100, 50, 0, -50],
                        scale: [1, 1.2, 0.8, 0],
                        opacity: [0.2, 0.3, 0.2, 0]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                />
            </div>

            {/* Content container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-4"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                        <Zap className="h-4 w-4" />
                        <span>Ready to get started?</span>
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 text-center"
                >
                    Supercharge your fleet
                    <span className="relative inline-block ml-2">
                        now!
                        <motion.span
                            className="absolute -bottom-1 left-0 right-0 h-1 bg-white opacity-60 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        />
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-full font-medium shadow-lg group"
                    >
                        Start now
                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        whileHover={{
                            scale: 1.03,
                            x: 5
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium backdrop-blur-sm hover:bg-white/10 transition-colors group"
                    >
                        Learn more
                        <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-24 z-[2]">
                <svg
                    viewBox="0 0 1440 100"
                    className="absolute bottom-0 w-full h-full"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#FFFFFF"
                        fillOpacity="1"
                        d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,16C840,11,960,21,1080,32C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
                    />
                </svg>
            </div>
        </section>
    );
};

export default SuperchargeCTA;