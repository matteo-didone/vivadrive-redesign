"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, ArrowRight, Code, Layout, Database, TrendingUp, Building, Palette, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OpenPositionsSection = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    // Job positions data with icons - now using translation keys
    const positions = [
        {
            key: "python_django",
            icon: <Code className="h-5 w-5 md:h-6 md:w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            key: "frontend",
            icon: <Layout className="h-5 w-5 md:h-6 md:w-6" />,
            color: "from-emerald-500 to-emerald-400",
            textColor: "text-emerald-600",
            bgColor: "bg-emerald-50"
        },
        {
            key: "data_scientist",
            icon: <Database className="h-5 w-5 md:h-6 md:w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            key: "digital_marketer",
            icon: <TrendingUp className="h-5 w-5 md:h-6 md:w-6" />,
            color: "from-emerald-500 to-emerald-400",
            textColor: "text-emerald-600",
            bgColor: "bg-emerald-50"
        },
        {
            key: "business_developer",
            icon: <Building className="h-5 w-5 md:h-6 md:w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            key: "ux_ui",
            icon: <Palette className="h-5 w-5 md:h-6 md:w-6" />,
            color: "from-emerald-500 to-emerald-400",
            textColor: "text-emerald-600",
            bgColor: "bg-emerald-50"
        },
        {
            key: "different",
            icon: <Sparkles className="h-5 w-5 md:h-6 md:w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50"
        }
    ];

    return (
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-gray-50">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-16 md:-top-24 -left-16 md:-left-24 w-64 md:w-96 h-64 md:h-96 bg-blue-100 rounded-full opacity-30 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-emerald-100 rounded-full opacity-30 blur-3xl" />

                {/* Dotted grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header with animated underline */}
                <motion.div
                    className="mb-12 md:mb-20 max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center justify-center mb-3 md:mb-4">
                        <Briefcase className="w-6 md:w-8 h-6 md:h-8 text-emerald-500 mr-2" />
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                            {t('pages.careers.positions.badge')}
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 text-gray-900 relative inline-block">
                        {t('pages.careers.positions.heading')}
                        <motion.span
                            className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 to-emerald-500 rounded-full"
                            initial={{ width: 0, left: "50%" }}
                            animate={isInView ? { width: "100%", left: 0 } : { width: 0, left: "50%" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </h2>

                    <motion.p
                        className="text-base md:text-xl text-gray-700 leading-relaxed mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        {t('pages.careers.positions.description')}
                    </motion.p>
                </motion.div>

                {/* Job Cards */}
                <div className="space-y-5 md:space-y-6 max-w-5xl mx-auto">
                    {positions.map((position, index) => (
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
                            <div className={`rounded-xl ${position.bgColor} backdrop-blur-sm p-5 md:p-6 shadow-md relative z-10 
                                border border-white/30 group-hover:shadow-xl group-hover:shadow-${position.color.split('-')[1]}-200/20 
                                transition-all duration-300 overflow-hidden`}
                            >
                                {/* Background gradient animation on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-white via-transparent to-transparent transition-opacity duration-300" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between">
                                    <div className="flex flex-col items-center md:items-start md:flex-row mb-5 md:mb-0">
                                        {/* Icon - centered on mobile */}
                                        <div className={`mb-3 md:mb-0 md:mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl 
                                            bg-gradient-to-br ${position.color} shadow-md`}>
                                            <div className="text-white">
                                                {position.icon}
                                            </div>
                                        </div>

                                        {/* Content - centered on mobile */}
                                        <div className="text-center md:text-left">
                                            <h3 className="text-lg md:text-xl font-bold text-gray-800">
                                                {t(`pages.careers.positions.jobs.${position.key}.title`)}
                                                {t(`pages.careers.positions.jobs.${position.key}.subtitle`) && (
                                                    <span className="text-xs md:text-sm font-medium ml-2 text-gray-500">
                                                        ({t(`pages.careers.positions.jobs.${position.key}.subtitle`)})
                                                    </span>
                                                )}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-600 mt-1 max-w-md mx-auto md:mx-0">
                                                {t(`pages.careers.positions.jobs.${position.key}.description`)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Apply button - centered on mobile */}
                                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                                        <a href={`/apply/${t(`pages.careers.positions.jobs.${position.key}.title`).toLowerCase().replace(/\s+/g, '-')}`}
                                            className={`inline-flex items-center px-5 py-2.5 
                                            bg-gradient-to-r ${position.color} text-white 
                                            rounded-full shadow-sm hover:shadow-lg transition-all duration-300 
                                            transform hover:scale-105 group/btn`}>
                                            {t('pages.careers.positions.apply_button')}
                                            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call To Action */}
                <motion.div
                    className="mt-12 md:mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <p className="text-base md:text-lg text-gray-600 mb-5 md:mb-6">
                        {t('pages.careers.positions.cta_question')}
                    </p>
                    <a
                        href="/contact"
                        className="relative inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-white 
                        bg-gradient-to-r from-blue-500 to-blue-600 rounded-full 
                        shadow-lg shadow-blue-500/20 overflow-hidden
                        transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30
                        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {/* Subtle background animation */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent 
                        -translate-x-full animate-shimmer opacity-0 hover:opacity-100" />

                        {t('pages.careers.positions.cta_button')}
                        <ArrowRight className="h-4 md:h-5 w-4 md:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default OpenPositionsSection;