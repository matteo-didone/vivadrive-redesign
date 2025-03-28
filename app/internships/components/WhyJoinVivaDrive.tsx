"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Briefcase, GraduationCap, PieChart, Globe, ArrowRight, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyJoinVivaDrive = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    // Benefits data with icons in alternating blue and green pattern
    const benefits = [
        {
            title: t('pages.internships.why_join_vivadrive.benefits.real_world_projects.title'),
            description: t('pages.internships.why_join_vivadrive.benefits.real_world_projects.description'),
            icon: <Code className="h-6 w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50",
            indicatorColor: "bg-blue-500"
        },
        {
            title: t('pages.internships.why_join_vivadrive.benefits.get_a_job.title'),
            description: t('pages.internships.why_join_vivadrive.benefits.get_a_job.description'),
            icon: <Briefcase className="h-6 w-6" />,
            color: "from-emerald-500 to-emerald-400",
            textColor: "text-emerald-600",
            bgColor: "bg-emerald-50",
            indicatorColor: "bg-emerald-500"
        },
        {
            title: t('pages.internships.why_join_vivadrive.benefits.learn_from_the_best.title'),
            description: t('pages.internships.why_join_vivadrive.benefits.learn_from_the_best.description'),
            icon: <GraduationCap className="h-6 w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50",
            indicatorColor: "bg-blue-500"
        },
        {
            title: t('pages.internships.why_join_vivadrive.benefits.boost_your_skills.title'),
            description: t('pages.internships.why_join_vivadrive.benefits.boost_your_skills.description'),
            icon: <PieChart className="h-6 w-6" />,
            color: "from-emerald-500 to-emerald-400",
            textColor: "text-emerald-600",
            bgColor: "bg-emerald-50",
            indicatorColor: "bg-emerald-500"
        },
        {
            title: t('pages.internships.why_join_vivadrive.benefits.try_before_you_buy.title'),
            description: t('pages.internships.why_join_vivadrive.benefits.try_before_you_buy.description'),
            icon: <Lightbulb className="h-6 w-6" />,
            color: "from-blue-500 to-blue-400",
            textColor: "text-blue-600",
            bgColor: "bg-blue-50",
            indicatorColor: "bg-blue-500"
        },
        {
            title: t('pages.internships.why_join_vivadrive.benefits.enjoy_international_workplace.title'),
            description: t('pages.internships.why_join_vivadrive.benefits.enjoy_international_workplace.description'),
            icon: <Globe className="h-6 w-6" />,
            color: "from-emerald-500 to-emerald-400",
            textColor: "text-emerald-600",
            bgColor: "bg-emerald-50",
            indicatorColor: "bg-emerald-500"
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
                    className="mb-16 max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-5xl sm:text-6xl font-bold mb-10 text-gray-900 relative inline-block">
                        {t('pages.internships.why_join_vivadrive.title')}
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
                        {t('pages.internships.why_join_vivadrive.description')}
                    </motion.p>
                </motion.div>

                {/* Benefits Grid - Staggered grid with hover effects */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
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
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className={`rounded-2xl ${benefit.bgColor} backdrop-blur-sm p-8 shadow-md relative z-10 h-full 
                              border border-white/30 group-hover:shadow-xl group-hover:shadow-${benefit.color.split('-')[1]}-200/30 
                              transition-all duration-300 overflow-hidden`}
                            >
                                {/* Top indicator bar */}
                                <div className={`absolute top-0 left-0 right-0 h-2 ${benefit.indicatorColor} rounded-t-lg`}></div>

                                {/* Background gradient animation on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-white via-transparent to-transparent transition-opacity duration-300" />

                                {/* Floating gradient circle */}
                                <div className={`absolute -right-10 -top-10 w-24 h-24 rounded-full bg-gradient-to-br ${benefit.color} opacity-10 
                                group-hover:animate-pulse blur-xl group-hover:scale-150 transition-transform duration-700`} />

                                {/* Centered icon */}
                                <div className="flex flex-col items-center text-center mb-6">
                                    <div className={`mb-4 flex items-center justify-center p-3 rounded-xl 
                                    bg-gradient-to-br ${benefit.color} shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="text-white">
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors mb-4">
                                        {benefit.title}
                                    </h3>
                                </div>

                                {/* Centered description */}
                                <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-center">
                                    {benefit.description}
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
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-emerald-600 dark:from-white dark:to-emerald-400 bg-clip-text text-transparent">
                            {t('pages.internships.why_join_vivadrive.cta.heading')}
                        </h3>
                        <p className="text-gray-600 mb-8">
                            {t('pages.internships.why_join_vivadrive.cta.description')}
                        </p>

                        {/* Adding a flex container with gap for the buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/internship-opportunities"
                                className="relative inline-flex items-center gap-2 px-10 py-4 text-lg font-medium text-white
                                bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full
                                shadow-lg shadow-emerald-500/20 overflow-hidden
                                transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30
                                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 group"
                            >
                                {/* Subtle background animation */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent
                                -translate-x-full animate-shimmer opacity-0 group-hover:opacity-100" />
                                {t('pages.internships.why_join_vivadrive.cta.apply_button')}
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <a
                                href="/internship-opportunities"
                                className="relative inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-medium text-emerald-600
                                bg-transparent border-2 border-emerald-500 rounded-full w-full sm:w-auto mx-auto sm:mx-0
                                shadow-sm overflow-hidden
                                transition-all duration-300 hover:shadow-md hover:bg-emerald-50
                                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 group"
                            >
                                {t('pages.internships.why_join_vivadrive.cta.view_button')}
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyJoinVivaDrive;