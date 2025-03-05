"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { ChevronRight, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);
    const floatingElement1Ref = useRef(null);
    const floatingElement2Ref = useRef(null);

    useEffect(() => {
        // Parallax effect on scroll
        const handleScroll = () => {
            if (orb1Ref.current && orb2Ref.current) {
                const scrollY = window.scrollY;
                orb1Ref.current.style.transform = `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px)`;
                orb2Ref.current.style.transform = `translate(${scrollY * -0.05}px, ${scrollY * 0.05}px)`;
            }
        };

        // Basic floating animation for decorative elements
        const floatAnimation = () => {
            if (floatingElement1Ref.current && floatingElement2Ref.current) {
                const time = Date.now() * 0.001;
                floatingElement1Ref.current.style.transform = `translateY(${Math.sin(time) * 10}px) rotate(12deg)`;
                floatingElement2Ref.current.style.transform = `translateY(${Math.sin(time + 1) * 8}px) rotate(-12deg)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        const animationInterval = setInterval(floatAnimation, 50);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(animationInterval);
        };
    }, []);

    // Trusted by companies
    const trustedCompanies = [
        "BMW Group", "DHL", "Siemens", "IKEA", "Lafarge"
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-gray-900/50 dark:via-gray-950 dark:to-gray-950 py-20 md:py-28">
            {/* Animated background elements */}
            <div
                ref={orb1Ref}
                className="absolute right-0 top-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition-transform duration-200"
            ></div>
            <div
                ref={orb2Ref}
                className="absolute left-0 bottom-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-transform duration-200"
            ></div>

            <div className="container grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <motion.div
                    className="space-y-8 max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all">
                        Fleet Management
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Deploy and Manage{" "}
                        <span className="text-primary relative">
                            Electric Vehicles
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                                viewBox="0 0 100 15"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,5 Q30,12 50,5 T100,5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                        </span>{" "}
                        in your Fleet
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                        Drive your fleet's electrification seamlessly, reduce costs &
                        CO₂ emissions, and optimize your operation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="gap-2 shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary font-medium px-6 transition-all hover:scale-105"
                        >
                            Explore Now
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/20 text-primary hover:bg-primary/10 transition-all hover:scale-105"
                        >
                            Book a Demo
                        </Button>
                    </div>

                    {/* Social proof section */}
                    <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            TRUSTED BY LEADING COMPANIES
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            {trustedCompanies.map((company, index) => (
                                <span key={index} className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-1">
                        <div className="relative bg-gradient-to-br from-blue-100 to-gray-100 dark:from-blue-900/30 dark:to-gray-800/30 p-1">
                            <Image
                                src="/fleet-dashboard.png"
                                width={800}
                                height={600}
                                alt="Fleet management dashboard showing electric vehicle statistics"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
                    </div>

                    <div className="absolute -z-10 top-1/2 right-1/2 w-[200%] aspect-square -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-radial from-primary/5 via-primary/2 to-transparent"></div>

                    {/* Floating elements with animations */}
                    <div
                        ref={floatingElement1Ref}
                        className="absolute -top-4 -right-4 h-24 w-24 bg-blue-100 dark:bg-blue-900/20 rounded-xl rotate-12 blur opacity-60 transition-transform duration-1000"
                    ></div>
                    <div
                        ref={floatingElement2Ref}
                        className="absolute -bottom-6 left-8 h-16 w-16 bg-primary/20 rounded-xl -rotate-12 blur opacity-60 transition-transform duration-1000"
                    ></div>

                    {/* Data metrics floating card */}
                    <div className="absolute -bottom-8 -left-10 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-3 transition-all duration-300 hover:shadow-primary/20 border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2">
                            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Average CO₂ reduction</p>
                                <p className="text-sm font-bold text-gray-800 dark:text-gray-200">48% per vehicle</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/20 opacity-10 [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
        </section>
    );
};

export default HeroSection;