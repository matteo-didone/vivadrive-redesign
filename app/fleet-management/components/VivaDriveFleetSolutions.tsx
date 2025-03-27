"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRightCircle,
    Zap,
    CheckSquare,
    Settings,
    ChevronRight,
    BarChart3,
    Smartphone,
    Car,
    Battery,
    Clock,
    TrendingUp,
    Shield
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VivaDriveFleetSolutions = () => {
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

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className="bg-white overflow-hidden">

            {/* Section 1: Improve your drivers' experience - Text Left, Image Right */}
            <section className="pt-16 sm:pt-20 pb-0 overflow-hidden border-b border-gray-100 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-0 items-center">
                        {/* Content Column - With proper spacing at bottom - Takes 7 columns */}
                        <motion.div
                            className="lg:col-span-7 space-y-5 pr-4 sm:pr-6 lg:pr-12 mx-auto lg:mx-0 max-w-lg lg:max-w-none pb-16 text-center lg:text-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-600 text-sm font-medium mb-2"
                                variants={itemVariant}
                            >
                                <Smartphone className="h-4 w-4" />
                                <span>{t('pages.fleet_management.solutions.section1.badge')}</span>
                            </motion.div>

                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_management.solutions.section1.heading_pre')}
                                <span className="relative text-emerald-500 ml-2">
                                    {t('pages.fleet_management.solutions.section1.heading_highlight')}
                                </span>
                                <span className="ml-2">{t('pages.fleet_management.solutions.section1.heading_post')}</span>
                            </motion.h2>

                            <motion.p
                                className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_management.solutions.section1.description')}
                            </motion.p>

                            <motion.div
                                className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 shadow-sm max-w-md mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                <p className="text-gray-700 font-medium text-sm sm:text-base">
                                    {t('pages.fleet_management.solutions.section1.note')}
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start"
                                variants={itemVariant}
                            >
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                                    <Shield className="h-4 w-4 text-emerald-500" />
                                    <span className="text-sm font-medium text-emerald-700">{t('pages.fleet_management.solutions.section1.tags.safety')}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                                    <span className="text-sm font-medium text-emerald-700">{t('pages.fleet_management.solutions.section1.tags.efficiency')}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                                    <Zap className="h-4 w-4 text-emerald-500" />
                                    <span className="text-sm font-medium text-emerald-700">{t('pages.fleet_management.solutions.section1.tags.engagement')}</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Image Column - Takes 5 columns */}
                        <div className="lg:col-span-5 hidden lg:block relative" style={{ height: "480px" }}>
                            <motion.div
                                className="absolute inset-0 overflow-visible"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleIn}
                            >
                                <div className="h-full w-full relative">
                                    <img
                                        src="/fleet-management/iphone-mockup.png"
                                        alt={t('pages.fleet_management.solutions.section1.image_alt')}
                                        className="absolute h-full object-contain object-left-top transform scale-[1.6] origin-left"
                                        style={{
                                            left: "0",
                                            top: "0"
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Mobile-only image */}
                        <div className="lg:hidden w-full mt-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={scaleIn}
                            >
                                <img
                                    src="/fleet-management/iphone-mockup.png"
                                    alt={t('pages.fleet_management.solutions.section1.image_alt')}
                                    className="w-full h-auto"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Switch to EV easily - Text Right, Image Left */}
            <section className="pt-16 sm:pt-20 pb-16 sm:pb-24 overflow-hidden bg-gray-50 border-b border-gray-100 relative">
                {/* Background elements */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-200 rounded-full opacity-20" />
                <div className="absolute bottom-16 left-0 w-32 h-32 bg-yellow-100 rounded-full opacity-30" />

                {/* Decorative dots pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.05
                }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* Image Column - On the left for desktop, but appears second on mobile */}
                        <motion.div
                            className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="relative max-w-md w-full">
                                {/* Main image with pseudo-3D effect */}
                                <motion.div
                                    className="bg-gradient-to-br from-white to-emerald-50 p-4 sm:p-6 rounded-xl shadow-2xl transform perspective-md"
                                    whileHover={{ y: -5, rotateY: -5, rotateX: 2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src="/fleet-management/recommended-ev.png"
                                        alt={t('pages.fleet_management.solutions.section2.image_alt')}
                                        className="w-full h-auto rounded-lg"
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />

                                    {/* Decorative elements */}
                                    <div className="absolute -top-3 -left-3 w-24 h-24 bg-emerald-500 rounded-full opacity-20 blur-xl" />
                                </motion.div>

                                {/* Floating elements with responsive positioning */}
                                <motion.div
                                    className="absolute -bottom-4 sm:-bottom-8 right-4 sm:right-8 p-2 sm:p-3 bg-white rounded-lg shadow-xl"
                                    initial={{ opacity: 0, x: 20, y: 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500" />
                                        <div className="text-xs sm:text-sm font-medium text-gray-800">
                                            {t('pages.fleet_management.solutions.section2.stats.savings')}
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute top-6 sm:top-10 -left-4 sm:-left-6 p-2 sm:p-3 bg-white rounded-lg shadow-xl"
                                    initial={{ opacity: 0, x: -20, y: 0 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.9, duration: 0.8 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <Battery className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500" />
                                        <div className="text-xs sm:text-sm font-medium text-gray-800">
                                            {t('pages.fleet_management.solutions.section2.stats.battery')}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Content Column - On the right for desktop, but appears first on mobile */}
                        <motion.div
                            className="space-y-5 sm:space-y-6 mx-auto lg:mx-0 max-w-lg lg:max-w-none order-1 lg:order-2 text-center lg:text-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-600 text-sm font-medium mb-2"
                                variants={itemVariant}
                            >
                                <Car className="h-4 w-4" />
                                <span>{t('pages.fleet_management.solutions.section2.badge')}</span>
                            </motion.div>

                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_management.solutions.section2.heading_pre')}
                                <span className="relative text-emerald-500 ml-2">
                                    {t('pages.fleet_management.solutions.section2.heading_highlight')}
                                </span>
                                <span className="ml-2">{t('pages.fleet_management.solutions.section2.heading_post')}</span>
                            </motion.h2>

                            <motion.p
                                className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_management.solutions.section2.description')}
                            </motion.p>

                            <motion.div
                                className="space-y-3 sm:space-y-4 pt-2 max-w-md mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                {['analysis', 'infrastructure', 'optimization'].map((key, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start sm:items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                                            <CheckSquare className="text-white h-5 w-5 flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 font-medium text-left">
                                            {t(`pages.fleet_management.solutions.section2.features.${key}`)}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Control your costs - Text Left, Image Right */}
            <section className="py-16 sm:py-24 overflow-hidden relative">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-16 left-16 w-64 h-64 bg-emerald-100 rounded-full opacity-20 blur-xl" />
                    <div className="absolute bottom-32 right-32 w-48 h-48 bg-yellow-200 rounded-full opacity-15 blur-xl" />
                </div>

                {/* Decorative wave pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" className="absolute inset-0">
                        <pattern id="wave-pattern" width="100" height="20" patternUnits="userSpaceOnUse">
                            <path d="M0 10 Q25 20, 50 10 T100 10" stroke="#10b981" fill="none" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#wave-pattern)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* Content Column */}
                        <motion.div
                            className="space-y-5 sm:space-y-6 mx-auto lg:mx-0 max-w-lg lg:max-w-none text-center lg:text-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-600 text-sm font-medium mb-2"
                                variants={itemVariant}
                            >
                                <BarChart3 className="h-4 w-4" />
                                <span>{t('pages.fleet_management.solutions.section3.badge')}</span>
                            </motion.div>

                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_management.solutions.section3.heading_pre')}
                                <span className="relative text-emerald-500 ml-2">
                                    {t('pages.fleet_management.solutions.section3.heading_highlight')}
                                </span>
                                <span className="ml-2">{t('pages.fleet_management.solutions.section3.heading_post')}</span>
                            </motion.h2>

                            <motion.p
                                className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                {t('pages.fleet_management.solutions.section3.description')}
                            </motion.p>

                            <motion.div
                                className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100 shadow-sm max-w-md mx-auto lg:mx-0"
                                variants={itemVariant}
                            >
                                <p className="text-gray-700 font-medium text-sm sm:text-base">
                                    {t('pages.fleet_management.solutions.section3.note')}
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start"
                                variants={itemVariant}
                            >
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                                    <span className="text-sm font-medium text-emerald-700">{t('pages.fleet_management.solutions.section3.tags.cost')}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                                    <Clock className="h-4 w-4 text-emerald-500" />
                                    <span className="text-sm font-medium text-emerald-700">{t('pages.fleet_management.solutions.section3.tags.time')}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                                    <Settings className="h-4 w-4 text-emerald-500" />
                                    <span className="text-sm font-medium text-emerald-700">{t('pages.fleet_management.solutions.section3.tags.automated')}</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Image Column */}
                        <motion.div
                            className="relative flex justify-center lg:justify-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                        >
                            <div className="relative max-w-md w-full">
                                {/* Main image with pseudo-3D effect */}
                                <motion.div
                                    className="bg-gradient-to-br from-white to-emerald-50 p-4 sm:p-6 rounded-xl shadow-2xl transform perspective-md"
                                    whileHover={{ y: -5, rotateY: 5, rotateX: -2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src="/fleet-management/charging-stations.png"
                                        alt={t('pages.fleet_management.solutions.section3.image_alt')}
                                        className="w-full h-auto rounded-lg"
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />

                                    {/* Decorative elements */}
                                    <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-emerald-500 rounded-full opacity-20 blur-xl" />
                                </motion.div>

                                {/* Floating stats card - responsive positioning */}
                                <motion.div
                                    className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 p-3 sm:p-4 bg-white rounded-lg shadow-xl"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                >
                                    <div className="flex flex-col">
                                        <div className="text-xs text-gray-500 mb-1">{t('pages.fleet_management.solutions.section3.stats.availability.label')}</div>
                                        <div className="text-xl sm:text-2xl font-bold text-emerald-500">{t('pages.fleet_management.solutions.section3.stats.availability.value')}</div>
                                        <div className="w-20 sm:w-24 h-2 bg-gray-100 rounded-full mt-2">
                                            <div className="w-[87%] h-full bg-emerald-500 rounded-full" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating notification - responsive positioning */}
                                <motion.div
                                    className="absolute -top-2 sm:-top-4 right-4 sm:right-8 p-2 sm:p-3 bg-white rounded-lg shadow-xl flex items-center gap-2"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                >
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full" />
                                    <div className="text-xs sm:text-sm font-medium text-gray-800">{t('pages.fleet_management.solutions.section3.stats.updates')}</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VivaDriveFleetSolutions;