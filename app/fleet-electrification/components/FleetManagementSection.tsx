"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRightCircle,
    Zap,
    CheckCircle,
    Settings,
    ChevronRight,
    Battery,
    MapPin,
    TrendingUp
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FleetElectrificationSections = () => {
    const { t } = useLanguage();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // Custom SVG checkmark icon that matches your design
    const CheckIcon = () => (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );

    return (
        <div className="bg-white">
            {/* Section 1: Find out the best EV options for you */}
            <section className="py-16 md:py-24 overflow-hidden border-b border-gray-100 relative">
                {/* Background elements - simplified for mobile */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 opacity-50 rounded-l-full transform -translate-x-1/4 hidden md:block" />
                <div className="absolute -top-16 -left-16 w-40 h-40 bg-emerald-100 rounded-full opacity-20 hidden md:block" />
                <div className="absolute bottom-24 right-0 w-24 h-24 bg-yellow-300 rounded-full opacity-20 hidden md:block" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* Content Column */}
                        <motion.div
                            className="space-y-5 md:space-y-6 text-center lg:text-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerChildren}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-2"
                                variants={itemVariant}
                            >
                                <Zap className="h-4 w-4" />
                                <span>{t('pages.fleet_electrification.sections.section1.badge')}</span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_electrification.sections.section1.title.pre')}
                                <span className="text-emerald-500"> {t('pages.fleet_electrification.sections.section1.title.highlight')} </span>
                                {t('pages.fleet_electrification.sections.section1.title.post')}
                            </motion.h2>

                            <motion.p
                                className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_electrification.sections.section1.description')}
                            </motion.p>

                            <motion.div
                                className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 max-w-lg mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                <p className="text-gray-700 font-medium text-sm md:text-base">
                                    {t('pages.fleet_electrification.sections.section1.result')}
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariant} className="flex justify-center lg:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-md"
                                >
                                    {t('pages.fleet_electrification.sections.learn_more')}
                                    <ChevronRight className="h-5 w-5" />
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Image Column with Device Mockup - Mobile Optimized */}
                        <motion.div
                            className="relative lg:flex lg:justify-end"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                        >
                            <div className="relative w-full max-w-xl mx-auto lg:mr-0">
                                {/* Main device image */}
                                <motion.div
                                    className="bg-white p-3 md:p-5 rounded-xl shadow-xl"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src="/fleet-electrification/ev-recommended.png"
                                        alt={t('pages.fleet_electrification.sections.section1.image_alt')}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </motion.div>

                                {/* Mobile-friendly floating stats - simplified for smaller screens */}
                                {/* Only visible on larger screens */}
                                <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 p-2 bg-white rounded-lg shadow-lg hidden md:block">
                                    <div className="flex items-center gap-2 p-2">
                                        <Battery className="h-7 w-7 md:h-9 md:w-9 text-emerald-500" />
                                        <div>
                                            <div className="font-bold text-emerald-500">95%</div>
                                            <div className="text-xs text-gray-500">{t('pages.fleet_electrification.sections.section1.stats.reliability')}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* CO2 stat - simplified badge */}
                                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 py-1 px-2 md:p-2 bg-white rounded-lg shadow-lg">
                                    <div className="text-sm font-medium text-gray-800">
                                        <span className="text-emerald-500">17% </span>
                                        {t('pages.fleet_electrification.sections.section1.stats.co2')}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Deploy the ideal EV infrastructure */}
            <section className="py-16 md:py-24 overflow-hidden bg-gray-50 border-b border-gray-100 relative">
                {/* Background elements - hidden on mobile */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-200 rounded-full opacity-20 hidden md:block" />
                <div className="absolute bottom-16 left-0 w-32 h-32 bg-yellow-100 rounded-full opacity-30 hidden md:block" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* Image Column - On the left for desktop, but second on mobile */}
                        <motion.div
                            className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-md max-w-md w-full">
                                <img
                                    src="/fleet-electrification/map.png"
                                    alt={t('pages.fleet_electrification.sections.section2.image_alt')}
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>

                        {/* Content Column - First on mobile */}
                        <motion.div
                            className="space-y-5 md:space-y-6 order-1 lg:order-2 text-center lg:text-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerChildren}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-2"
                                variants={itemVariant}
                            >
                                <MapPin className="h-4 w-4" />
                                <span>{t('pages.fleet_electrification.sections.section2.badge')}</span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_electrification.sections.section2.title.pre')}
                                <span className="text-emerald-500"> {t('pages.fleet_electrification.sections.section2.title.highlight')} </span>
                                {t('pages.fleet_electrification.sections.section2.title.post')}
                            </motion.h2>

                            <motion.p
                                className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_electrification.sections.section2.description')}
                            </motion.p>

                            {/* Cleaner checklist items with green checkmark */}
                            <motion.div
                                className="space-y-4 pt-2 max-w-lg mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                {['home', 'office', 'public', 'stop'].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0">
                                            <CheckCircle className="h-5 w-5 text-emerald-500" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700 font-medium">
                                            {t(`pages.fleet_electrification.sections.section2.checklist.${item}`)}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div variants={itemVariant} className="flex justify-center lg:justify-start pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-md"
                                >
                                    {t('pages.fleet_electrification.sections.learn_more')}
                                    <ChevronRight className="h-5 w-5" />
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Manage everything in one place */}
            <section className="py-16 md:py-24 overflow-hidden relative">
                {/* Background elements - hidden on mobile */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-16 left-16 w-64 h-64 bg-emerald-100 rounded-full opacity-20 blur-xl hidden md:block" />
                    <div className="absolute bottom-32 right-32 w-48 h-48 bg-yellow-200 rounded-full opacity-15 blur-xl hidden md:block" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* Content Column */}
                        <motion.div
                            className="space-y-5 md:space-y-6 text-center lg:text-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerChildren}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-2"
                                variants={itemVariant}
                            >
                                <Settings className="h-4 w-4" />
                                <span>{t('pages.fleet_electrification.sections.section3.badge')}</span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_electrification.sections.section3.title.pre')}
                                <span className="text-emerald-500"> {t('pages.fleet_electrification.sections.section3.title.highlight')} </span>
                                {t('pages.fleet_electrification.sections.section3.title.post')}
                            </motion.h2>

                            <motion.p
                                className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_electrification.sections.section3.description')}
                            </motion.p>

                            <motion.div
                                className="p-4 bg-emerald-50 rounded-lg border border-emerald-100 max-w-lg mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                <p className="text-gray-700 font-medium text-sm md:text-base">
                                    {t('pages.fleet_electrification.sections.section3.info')}
                                </p>
                            </motion.div>

                            {/* Feature items - simplified for mobile, with NO colored circles */}
                            <motion.div
                                className="space-y-6 pt-2 max-w-lg mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
                                    <div className="flex items-center gap-2">
                                        <Settings className="h-5 w-5 text-emerald-500" />
                                        <span className="text-gray-700 font-medium">{t('pages.fleet_electrification.sections.section3.features.fleet')}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Zap className="h-5 w-5 text-emerald-500" />
                                        <span className="text-gray-700 font-medium">{t('pages.fleet_electrification.sections.section3.features.charging')}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
                                    <div className="flex items-center gap-2">
                                        <ArrowRightCircle className="h-5 w-5 text-emerald-500" />
                                        <span className="text-gray-700 font-medium">{t('pages.fleet_electrification.sections.section3.features.route')}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                                        <span className="text-gray-700 font-medium">{t('pages.fleet_electrification.sections.section3.features.cost')}</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariant} className="flex justify-center lg:justify-start pt-4">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-md"
                                >
                                    {t('pages.fleet_electrification.sections.learn_more')}
                                    <ChevronRight className="h-5 w-5" />
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Image Column - Laptop with clean floating elements */}
                        <motion.div
                            className="relative flex justify-center lg:justify-end"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                        >
                            <div className="relative max-w-xl w-full">
                                {/* Clean laptop image */}
                                <motion.div
                                    className="bg-white p-3 md:p-4 rounded-xl shadow-xl"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src="/fleet-electrification/laptop.png"
                                        alt={t('pages.fleet_electrification.sections.section3.image_alt')}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </motion.div>

                                {/* Cost reduction stat */}
                                <div className="absolute -bottom-4 -left-2 md:-left-4 p-2 md:p-3 bg-white rounded-md shadow-lg">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-gray-500">{t('pages.fleet_electrification.sections.section3.stats.cost.label')}</div>
                                        <div className="text-lg md:text-xl font-bold text-emerald-500">27%</div>
                                        <div className="w-20 md:w-24 h-2 bg-gray-100 rounded-full mt-1">
                                            <div className="w-3/4 h-full bg-emerald-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Real-time updates badge */}
                                <div className="absolute -top-2 right-2 md:-top-4 md:right-4 p-2 bg-white rounded-md shadow-lg flex items-center gap-2">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-500 rounded-full" />
                                    <div className="text-xs md:text-sm font-medium text-gray-800">{t('pages.fleet_electrification.sections.section3.stats.realtime')}</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FleetElectrificationSections;