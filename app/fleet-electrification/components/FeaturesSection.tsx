"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Battery, BarChart3, PieChart, Car, Calendar, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection = () => {
    const { t } = useLanguage();

    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-950 dark:to-emerald-950/20 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium shadow-sm"
                    >
                        <Zap className="h-4 w-4" />
                        <span>{t('pages.fleet_electrification.features.badge')}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white"
                    >
                        {t('pages.fleet_electrification.features.heading')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
                    >
                        {t('pages.fleet_electrification.features.description')}
                    </motion.p>
                </div>

                {/* Features Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Feature
                        icon={<Car className="h-8 w-8" />}
                        title={t('pages.fleet_electrification.features.items.1.title')}
                        description={t('pages.fleet_electrification.features.items.1.description')}
                    />

                    <Feature
                        icon={<Battery className="h-8 w-8" />}
                        title={t('pages.fleet_electrification.features.items.2.title')}
                        description={t('pages.fleet_electrification.features.items.2.description')}
                    />

                    <Feature
                        icon={<BarChart3 className="h-8 w-8" />}
                        title={t('pages.fleet_electrification.features.items.3.title')}
                        description={t('pages.fleet_electrification.features.items.3.description')}
                    />

                    <Feature
                        icon={<PieChart className="h-8 w-8" />}
                        title={t('pages.fleet_electrification.features.items.4.title')}
                        description={t('pages.fleet_electrification.features.items.4.description')}
                    />

                    <Feature
                        icon={<Calendar className="h-8 w-8" />}
                        title={t('pages.fleet_electrification.features.items.5.title')}
                        description={t('pages.fleet_electrification.features.items.5.description')}
                    />

                    <Feature
                        icon={<Zap className="h-8 w-8" />}
                        title={t('pages.fleet_electrification.features.items.6.title')}
                        description={t('pages.fleet_electrification.features.items.6.description')}
                    />
                </motion.div>
            </div>
        </section>
    );
};

// Enhanced Feature component with centered elements and consistent green color
const Feature = ({ icon, title, description }) => {
    return (
        <motion.div
            className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-800 overflow-hidden text-center"
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                }
            }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
        >
            {/* Gradient background that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-20 transition-opacity duration-300"></div>

            {/* Centered icon container */}
            <div className="flex justify-center mb-6">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 p-0.5 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                        <div className="text-emerald-500">
                            {icon}
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">{title}</h3>

            <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">{description}</p>

            {/* Bottom decorator line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-green-400 to-emerald-600 group-hover:w-full transition-all duration-300 ease-in-out"></div>
        </motion.div>
    );
};

export default FeaturesSection;