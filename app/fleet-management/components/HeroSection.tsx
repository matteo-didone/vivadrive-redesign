"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
    const { t, locale } = useLanguage();
    const orbRef = useRef(null);
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);
    const cardRef3 = useRef(null);

    useEffect(() => {
        // Parallax effect for background elements on scroll
        const handleScroll = () => {
            if (orbRef.current) {
                const scrollY = window.scrollY;
                orbRef.current.style.transform = `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px)`;
            }
        };

        // Floating animation for cards
        const animateCards = () => {
            if (cardRef1.current && cardRef2.current && cardRef3.current) {
                const time = Date.now() * 0.001;
                cardRef1.current.style.transform = `translateY(${Math.sin(time) * 5}px)`;
                cardRef2.current.style.transform = `translateY(${Math.sin(time + 1) * 6}px)`;
                cardRef3.current.style.transform = `translateY(${Math.sin(time + 2) * 4}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        const animationInterval = setInterval(animateCards, 16);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(animationInterval);
        };
    }, []);

    // Different title structure based on language
    const renderTitle = () => {
        if (locale === 'pl') {
            return (
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 md:mb-8">
                    {t('pages.fleet_management.hero.title')}
                    <br className="hidden sm:block" />
                    <span className="inline-block">{t('pages.fleet_management.hero.title_price')}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600 block">
                        {t('pages.fleet_management.hero.title_highlight')}
                    </span>
                </h1>
            );
        } else {
            return (
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 md:mb-8">
                    {t('pages.fleet_management.hero.title')}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600 block">
                        {t('pages.fleet_management.hero.title_highlight')}
                    </span>
                </h1>
            );
        }
    };

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-[#f2faf7]">
            {/* Background decorative elements */}
            <div
                ref={orbRef}
                className="absolute -right-64 top-0 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-emerald-400/10 to-emerald-600/5 blur-3xl"
            />
            <div className="absolute -left-64 bottom-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-400/10 to-emerald-300/5 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Navigation tabs and Learn more button */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-10">
                    <div className="flex space-x-8 mb-4 sm:mb-0">
                        <div className="relative">
                            <span className="text-lg font-medium text-gray-900 cursor-pointer">{t('pages.fleet_management.hero.tabs.benefits')}</span>
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 rounded-full" />
                        </div>
                        <div>
                            <span className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer">{t('pages.fleet_management.hero.tabs.features')}</span>
                        </div>
                    </div>

                    <button className="py-2 inline-flex items-center justify-center text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-emerald-600 h-10 gap-1 border border-emerald-500 hover:bg-emerald-50 font-medium px-5 transition-all hover:scale-105 rounded-full">
                        {t('pages.fleet_management.hero.learn_more')}
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Left content column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:text-left"
                    >
                        {renderTitle()}

                        <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
                            {t('pages.fleet_management.hero.description')}
                        </p>

                        {/* Email and CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <input
                                type="email"
                                placeholder={t('pages.fleet_management.hero.email_placeholder')}
                                className="px-5 h-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full sm:w-auto sm:min-w-[260px] shadow-sm"
                            />

                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-12 gap-2 shadow-lg shadow-emerald-500/20 bg-emerald-500 hover:bg-emerald-600 font-medium px-6 transition-all hover:scale-105 rounded-full">
                                {t('pages.fleet_management.hero.contact_sales')}
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right image column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative flex justify-center md:justify-start"
                    >
                        <div className="relative w-full max-w-md md:max-w-none h-[300px] sm:h-[400px] md:h-[520px]">
                            <Image
                                src="/fleet-electrification/laptop.png"
                                alt={t('pages.fleet_management.hero.image_alt')}
                                fill
                                className="object-contain"
                                priority
                            />

                            {/* Optional floating cards */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;