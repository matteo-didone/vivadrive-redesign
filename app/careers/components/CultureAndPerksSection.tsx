"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, BookOpen, Lightbulb, SmilePlus, Users, Globe, Users2, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CultureAndPerksSection = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    // Perks data with icons - now using translation keys
    const perks = [
        {
            key: "flexible",
            icon: <Clock className="h-6 w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            key: "learning",
            icon: <BookOpen className="h-6 w-6" />,
            color: "from-emerald-500 to-emerald-400",
            textColor: "text-emerald-600",
            bgColor: "bg-emerald-50"
        },
        {
            key: "think_big",
            icon: <Lightbulb className="h-6 w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            key: "fun",
            icon: <SmilePlus className="h-6 w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            key: "diverse",
            icon: <Users className="h-6 w-6" />,
            color: "from-emerald-500 to-emerald-400",
            textColor: "text-emerald-600",
            bgColor: "bg-emerald-50"
        },
        {
            key: "international",
            icon: <Globe className="h-6 w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            key: "empowering",
            icon: <Award className="h-6 w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            key: "collaborative",
            icon: <Users2 className="h-6 w-6" />,
            color: "from-emerald-500 to-emerald-400",
            textColor: "text-emerald-600",
            bgColor: "bg-emerald-50"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100 rounded-full opacity-30 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl" />

                {/* Dotted grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header with animated underline */}
                <motion.div
                    className="mb-20 max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-5xl sm:text-6xl font-bold mb-10 text-gray-900 relative inline-block">
                        {t('pages.careers.culture.heading')}
                        <motion.span
                            className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"
                            initial={{ width: 0, left: "50%" }}
                            animate={isInView ? { width: "100%", left: 0 } : { width: 0, left: "50%" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </h2>

                    <motion.p
                        className="text-xl text-gray-700 leading-relaxed mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        {t('pages.careers.culture.description')}
                    </motion.p>
                </motion.div>

                {/* Perks Section - Staggered grid with hover effects */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {perks.map((perk, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2 + index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <div className={`rounded-2xl ${perk.bgColor} backdrop-blur-sm p-8 shadow-md relative z-10 h-full 
                              border border-white/30 group-hover:shadow-xl group-hover:shadow-${perk.color.split('-')[1]}-200/20 
                              transition-all duration-300 overflow-hidden text-center`}
                            >
                                {/* Background gradient animation on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-white via-transparent to-transparent transition-opacity duration-300" />

                                {/* Floating gradient circle */}
                                <div className={`absolute -right-10 -top-10 w-24 h-24 rounded-full bg-gradient-to-br ${perk.color} opacity-10 
                                group-hover:animate-pulse blur-xl group-hover:scale-150 transition-transform duration-700`} />

                                {/* Icon - centered */}
                                <div className={`mb-6 inline-flex items-center justify-center p-3 rounded-xl 
                                bg-gradient-to-br ${perk.color} ${perk.textColor.replace('text', 'text')} shadow-md mx-auto`}>
                                    <div className="text-white">
                                        {perk.icon}
                                    </div>
                                </div>

                                {/* Title - centered */}
                                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors">
                                    {t(`pages.careers.culture.perks.${perk.key}.title`)}
                                </h3>

                                {/* Description - centered */}
                                <p className="text-gray-600 group-hover:text-gray-700 transition-colors mx-auto">
                                    {t(`pages.careers.culture.perks.${perk.key}.description`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Apply Button with floating effect */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <a
                        href="/apply"
                        className="relative inline-flex items-center gap-2 px-10 py-5 text-lg font-medium text-white 
                     bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full 
                     shadow-lg shadow-emerald-500/20 overflow-hidden
                     transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30
                     hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                        {/* Subtle background animation */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent 
                          -translate-x-full animate-shimmer opacity-0 hover:opacity-100" />

                        {t('pages.careers.culture.apply_button')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CultureAndPerksSection;