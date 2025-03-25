"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRightCircle,
    Zap,
    CheckSquare,
    TrendingUp,
    Sparkles,
    BarChart3
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeatureSection = () => {
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

    return (
        <div className="bg-white">
            {/* Features Header Section */}
            <section className="py-16 overflow-hidden relative">
                {/* Decorative grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5" style={{
                    backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerChildren}
                    >
                        <motion.h3
                            className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400 mb-4"
                            variants={itemVariant}
                        >
                            {t('pages.fleet_management.features.badge')}
                        </motion.h3>
                        
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative"
                            variants={itemVariant}
                        >
                            {t('pages.fleet_management.features.heading')}
                        </motion.h2>
                        
                        <motion.p
                            className="text-lg text-gray-600 max-w-4xl mx-auto"
                            variants={itemVariant}
                        >
                            {t('pages.fleet_management.features.description')}
                        </motion.p>
                    </motion.div>
                    
                    {/* Animated badge */}
                    <motion.div 
                        className="flex justify-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200">
                            <Sparkles className="h-4 w-4 text-emerald-500" />
                            <span className="text-sm font-medium text-emerald-700">{t('pages.fleet_management.features.badge_roi')}</span>
                        </div>
                    </motion.div>
                    
                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-6 shadow-md shadow-emerald-200 group-hover:scale-110 transition-transform duration-300 mx-auto">
                                <Zap className="text-white h-7 w-7" />
                            </div>
                            <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-emerald-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors text-center">{t('pages.fleet_management.features.cards.1.title')}</h3>
                            <p className="text-gray-600 text-center">{t('pages.fleet_management.features.cards.1.description')}</p>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </motion.div>
                        
                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                            whileHover={{ y: -5 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-6 shadow-md shadow-emerald-200 group-hover:scale-110 transition-transform duration-300 mx-auto">
                                <CheckSquare className="text-white h-7 w-7" />
                            </div>
                            <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-emerald-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors text-center">{t('pages.fleet_management.features.cards.2.title')}</h3>
                            <p className="text-gray-600 text-center">{t('pages.fleet_management.features.cards.2.description')}</p>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </motion.div>
                        
                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                            whileHover={{ y: -5 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-6 shadow-md shadow-emerald-200 group-hover:scale-110 transition-transform duration-300 mx-auto">
                                <TrendingUp className="text-white h-7 w-7" />
                            </div>
                            <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-emerald-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors text-center">{t('pages.fleet_management.features.cards.3.title')}</h3>
                            <p className="text-gray-600 text-center">{t('pages.fleet_management.features.cards.3.description')}</p>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </motion.div>
                    </div>
                    
                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-12">
                        <motion.div 
                            className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-md text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <BarChart3 className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                            <h4 className="text-3xl font-bold text-emerald-600 mb-1">{t('pages.fleet_management.features.stats.cost_reduction.value')}</h4>
                            <p className="text-gray-600 text-sm">{t('pages.fleet_management.features.stats.cost_reduction.label')}</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-md text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Zap className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                            <h4 className="text-3xl font-bold text-emerald-600 mb-1">{t('pages.fleet_management.features.stats.first_results.value')}</h4>
                            <p className="text-gray-600 text-sm">{t('pages.fleet_management.features.stats.first_results.label')}</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-md text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <TrendingUp className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                            <h4 className="text-3xl font-bold text-emerald-600 mb-1">{t('pages.fleet_management.features.stats.roi.value')}</h4>
                            <p className="text-gray-600 text-sm">{t('pages.fleet_management.features.stats.roi.label')}</p>
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div 
                        className="mt-10 text-center relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                    >
                        <motion.button
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium transition-all shadow-lg shadow-emerald-500/20 relative overflow-hidden group"
                        >
                            <span className="relative z-10">{t('pages.fleet_management.features.cta')}</span>
                            <ArrowRightCircle className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </motion.button>
                        
                        {/* Decorative elements */}
                        <div className="absolute -z-10 -left-6 -bottom-6 w-12 h-12 bg-emerald-100 rounded-full opacity-70"></div>
                        <div className="absolute -z-10 right-1/4 -top-6 w-8 h-8 bg-yellow-200 rounded-full opacity-50"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;