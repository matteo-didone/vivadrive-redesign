import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const FleetReportSection = () => {
    // Add the useLanguage hook to get translations
    const { t } = useLanguage();

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
            }
        },
        hover: {
            scale: 1.02,
            transition: { duration: 0.4 }
        }
    };

    return (
        <section className="py-16 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-8 gap-y-12 items-center">
                    {/* Text content - full width on mobile, 5 columns on desktop */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="md:col-span-5 text-center md:text-left"
                    >
                        <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-600 mb-5">
                            {t('fleetReport.badge')}
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-gray-900 leading-tight">
                            {/* Split the title for responsive display, if needed */}
                            {t('fleetReport.title').split(' ').length > 2 ? (
                                <>
                                    {t('fleetReport.title').split(' ').slice(0, 1).join(' ')}
                                    <span className="md:hidden"> {t('fleetReport.title').split(' ').slice(1).join(' ')}</span>
                                    <br className="hidden md:block" />
                                    <span className="hidden md:inline">{t('fleetReport.title').split(' ').slice(1, 2).join(' ')}</span>
                                    <br className="hidden md:block" />
                                    <span className="hidden md:inline">{t('fleetReport.title').split(' ').slice(2).join(' ')}</span>
                                </>
                            ) : (
                                t('fleetReport.title')
                            )}
                        </h2>

                        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto md:mx-0">
                            {t('fleetReport.description')}
                        </p>

                        <motion.a
                            href="/request-report"
                            className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 px-5 py-3 text-white font-medium transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('fleetReport.buttonText')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.a>
                    </motion.div>

                    {/* Report image - full width on mobile, 7 columns on desktop */}
                    <div className="md:col-span-7 relative">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            variants={imageVariants}
                            className="relative z-10 flex justify-center md:justify-start"
                        >
                            <Image
                                src="/steps/fleet-report.png"
                                width={1400}
                                height={1050}
                                alt={t('fleetReport.title')}
                                className="w-full h-auto max-w-2xl md:max-w-none"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FleetReportSection;