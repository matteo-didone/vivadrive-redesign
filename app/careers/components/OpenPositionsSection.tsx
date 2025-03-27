"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Briefcase, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAllJobPositions } from '@/app/data/jobs';
import { formatDate } from "@/lib/utils";

const OpenPositionsSection = () => {
    const { t, currentLanguage } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    // Get all job positions
    const jobPositions = getAllJobPositions();

    // Get translated field
    const getTranslatedField = (job, fieldName: string, defaultValue: any): any => {
        // Try with different case variations of language code
        const languageVariations = [
            currentLanguage,
            currentLanguage.toLowerCase(),
            currentLanguage.toUpperCase()
        ];

        for (const langCode of languageVariations) {
            if (
                job.translations &&
                job.translations[langCode] &&
                job.translations[langCode][fieldName] !== undefined
            ) {
                return job.translations[langCode][fieldName];
            }
        }

        return defaultValue;
    };

    // Render icon based on category
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'ENGINEERING':
                return <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>;
            case 'DESIGN':
                return <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 18C8.48516 16.6842 10.2745 16 12 16C13.7255 16 15.5148 16.6842 17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>;
            case 'MARKETING':
                return <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V18.75C3 19.5784 3.67157 20.25 4.5 20.25H19.5C20.3284 20.25 21 19.5784 21 18.75V9.75C21 8.92157 20.3284 8.25 19.5 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 8.25V6.375C16 5.175 15.325 4.125 13.75 4.125C12.175 4.125 11.5 5.175 11.5 6.375V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>;
            case 'BUSINESS':
                return <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8.5 13.5L11 16L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20H7C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16V10Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>;
            case 'DATA':
                return <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V4M12 20V22M4 12H2M22 12H20M5.93 5.93L4.51 4.51M19.49 4.51L18.07 5.93M18.07 18.07L19.49 19.49M5.93 18.07L4.51 19.49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>;
            default:
                return <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6M12 22V18M6 12H2M22 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.92896 4.92896L7.75732 7.75732M19.0711 19.0711L16.2427 16.2427M4.92896 19.0711L7.75732 16.2427M19.0711 4.92896L16.2427 7.75732" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>;
        }
    };

    // Get color scheme based on category
    const getCategoryColorScheme = (category) => {
        switch (category) {
            case 'ENGINEERING':
                return {
                    bgFrom: 'from-blue-500',
                    bgTo: 'to-blue-600',
                    bgHoverFrom: 'hover:from-blue-600',
                    bgHoverTo: 'hover:to-blue-700',
                    shadowColor: 'shadow-blue-500/20',
                    hoverShadowColor: 'hover:shadow-blue-500/30',
                    bgLight: 'bg-blue-50'
                };
            case 'DESIGN':
                return {
                    bgFrom: 'from-purple-500',
                    bgTo: 'to-purple-600',
                    bgHoverFrom: 'hover:from-purple-600',
                    bgHoverTo: 'hover:to-purple-700',
                    shadowColor: 'shadow-purple-500/20',
                    hoverShadowColor: 'hover:shadow-purple-500/30',
                    bgLight: 'bg-purple-50'
                };
            case 'MARKETING':
                return {
                    bgFrom: 'from-amber-500',
                    bgTo: 'to-amber-600',
                    bgHoverFrom: 'hover:from-amber-600',
                    bgHoverTo: 'hover:to-amber-700',
                    shadowColor: 'shadow-amber-500/20',
                    hoverShadowColor: 'hover:shadow-amber-500/30',
                    bgLight: 'bg-amber-50'
                };
            case 'BUSINESS':
                return {
                    bgFrom: 'from-emerald-500',
                    bgTo: 'to-emerald-600',
                    bgHoverFrom: 'hover:from-emerald-600',
                    bgHoverTo: 'hover:to-emerald-700',
                    shadowColor: 'shadow-emerald-500/20',
                    hoverShadowColor: 'hover:shadow-emerald-500/30',
                    bgLight: 'bg-emerald-50'
                };
            case 'DATA':
                return {
                    bgFrom: 'from-cyan-500',
                    bgTo: 'to-cyan-600',
                    bgHoverFrom: 'hover:from-cyan-600',
                    bgHoverTo: 'hover:to-cyan-700',
                    shadowColor: 'shadow-cyan-500/20',
                    hoverShadowColor: 'hover:shadow-cyan-500/30',
                    bgLight: 'bg-cyan-50'
                };
            default:
                return {
                    bgFrom: 'from-indigo-500',
                    bgTo: 'to-indigo-600',
                    bgHoverFrom: 'hover:from-indigo-600',
                    bgHoverTo: 'hover:to-indigo-700',
                    shadowColor: 'shadow-indigo-500/20',
                    hoverShadowColor: 'hover:shadow-indigo-500/30',
                    bgLight: 'bg-indigo-50'
                };
        }
    };

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
<div className="space-y-6 md:space-y-8 max-w-5xl mx-auto px-4">
    {jobPositions.map((job, index) => {
        const title = getTranslatedField(job, 'title', job.title);
        const subtitle = getTranslatedField(job, 'subtitle', job.subtitle);
        const location = getTranslatedField(job, 'location', job.location);
        const colorScheme = getCategoryColorScheme(job.category);

        return (
            <motion.div
                key={job.id}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                <div className={`rounded-xl ${colorScheme.bgLight} backdrop-blur-sm p-5 md:p-6 shadow-md relative z-10 
                    border border-white/30 group-hover:shadow-xl group-hover:${colorScheme.hoverShadowColor} 
                    transition-all duration-300 overflow-hidden h-full`}
                >
                    {/* Background gradient animation on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-white via-transparent to-transparent transition-opacity duration-300" />

                    {/* MOBILE LAYOUT (centered, vertical) */}
                    <div className="flex flex-col md:hidden">
                        {/* Icon and Title - centered on mobile */}
                        <div className="flex flex-col items-center mb-4">
                            {/* Icon */}
                            <div className={`mb-3 flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl 
                                bg-gradient-to-br ${colorScheme.bgFrom} ${colorScheme.bgTo} shadow-md`}>
                                <div className="text-white">
                                    {getCategoryIcon(job.category)}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-center text-gray-800 mt-2">
                                {title}
                            </h3>
                            
                            {/* Subtitle */}
                            {subtitle && (
                                <div className="text-base text-gray-500 text-center mt-1">
                                    ({subtitle})
                                </div>
                            )}
                        </div>

                        {/* Job details */}
                        <div className="flex flex-wrap justify-center gap-4 my-3">
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-1.5 text-gray-500" />
                                <span>{location}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="h-4 w-4 mr-1.5 text-gray-500" />
                                <span>{formatDate(job.postedDate)}</span>
                            </div>
                        </div>

                        {/* Apply button */}
                        <div className="mt-4 flex justify-center">
                            <Link 
                                href={`/careers/${job.slug}`}
                                className={`inline-flex items-center px-6 py-3 
                                bg-gradient-to-r ${colorScheme.bgFrom} ${colorScheme.bgTo} text-white 
                                rounded-full shadow-sm hover:shadow-lg transition-all duration-300 
                                transform hover:scale-105 group/btn`}
                            >
                                {t('pages.careers.positions.view_job')}
                                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* DESKTOP LAYOUT (horizontal) */}
                    <div className="hidden md:flex md:flex-row md:items-center justify-between">
                        <div className="flex flex-row items-center">
                            {/* Icon - left aligned on desktop */}
                            <div className={`mr-5 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl 
                                bg-gradient-to-br ${colorScheme.bgFrom} ${colorScheme.bgTo} shadow-md`}>
                                <div className="text-white">
                                    {getCategoryIcon(job.category)}
                                </div>
                            </div>

                            {/* Content - left aligned on desktop */}
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-gray-800">
                                    {title}
                                    {subtitle && (
                                        <span className="text-sm font-medium ml-2 text-gray-500">
                                            ({subtitle})
                                        </span>
                                    )}
                                </h3>
                                <div className="flex flex-wrap gap-4 mt-2">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <MapPin className="h-4 w-4 mr-1.5 text-gray-500" />
                                        <span>{location}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Calendar className="h-4 w-4 mr-1.5 text-gray-500" />
                                        <span>{formatDate(job.postedDate)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Apply button - right aligned on desktop */}
                        <div className="flex-shrink-0">
                            <Link 
                                href={`/careers/${job.slug}`}
                                className={`inline-flex items-center px-5 py-2.5 
                                bg-gradient-to-r ${colorScheme.bgFrom} ${colorScheme.bgTo} text-white 
                                rounded-full shadow-sm hover:shadow-lg transition-all duration-300 
                                transform hover:scale-105 group/btn`}
                            >
                                {t('pages.careers.positions.view_job')}
                                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    })}
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
                    <Link
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
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default OpenPositionsSection;