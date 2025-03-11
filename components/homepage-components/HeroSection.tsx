"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { ChevronRight, Star, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);
    const floatingElement1Ref = useRef(null);
    const floatingElement2Ref = useRef(null);

    useEffect(() => {
        // Enhanced parallax effect on scroll
        const handleScroll = () => {
            if (orb1Ref.current && orb2Ref.current) {
                const scrollY = window.scrollY;
                orb1Ref.current.style.transform = `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px) scale(${1 + scrollY * 0.0005})`;
                orb2Ref.current.style.transform = `translate(${scrollY * -0.05}px, ${scrollY * 0.05}px) scale(${1 + scrollY * 0.0003})`;
            }
        };

        // Improved floating animation for decorative elements
        const floatAnimation = () => {
            if (floatingElement1Ref.current && floatingElement2Ref.current) {
                const time = Date.now() * 0.001;
                floatingElement1Ref.current.style.transform = `translateY(${Math.sin(time) * 10}px) rotate(${Math.sin(time * 0.5) * 5 + 12}deg)`;
                floatingElement2Ref.current.style.transform = `translateY(${Math.sin(time + 1) * 8}px) rotate(${Math.sin(time * 0.5 + 1) * 5 - 12}deg)`;
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
        { name: "BMW Group", logo: "/logos/bmw.svg" },
        { name: "DHL", logo: "/logos/dhl.svg" },
        { name: "Siemens", logo: "/logos/siemens.svg" },
        { name: "IKEA", logo: "/logos/ikea.svg" },
        { name: "Lafarge", logo: "/logos/lafarge.svg" }
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900/50 dark:to-gray-950 py-12 md:py-16">
            {/* Enhanced background elements */}
            <div
                ref={orb1Ref}
                className="absolute right-0 top-0 -mt-16 -mr-16 h-80 w-80 rounded-full bg-gradient-to-br from-primary/15 to-blue-400/10 blur-3xl transition-transform duration-200"
            ></div>

            <div className="container grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <motion.div
                    className="space-y-8 max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all backdrop-blur-sm">
                        Fleet Management
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Deploy and Manage{" "}
                        <span className="text-primary relative inline-block">
                            Electric Vehicles
                        </span>{" "}
                        <br className="md:hidden" />in your Fleet
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                        Drive your fleet's electrification seamlessly, reduce costs &
                        CO₂ emissions, and optimize your operation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="gap-2 bg-emerald-500 hover:bg-emerald-600 font-medium px-8 py-6 text-lg rounded-full group transition-all duration-300"
                        >
                            Explore Now
                            <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/20 text-primary hover:bg-primary/10 transition-all hover:scale-105 rounded-full py-6 text-lg"
                        >
                            Book a Demo
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-1">
                        <div className="relative bg-gradient-to-br from-blue-100 to-gray-100 dark:from-blue-900/30 dark:to-gray-800/30 p-2 backdrop-blur-sm">
                            <Image
                                src="/fleet-dashboard.png"
                                width={800}
                                height={600}
                                alt="Fleet management dashboard showing electric vehicle statistics"
                                className="w-full h-auto object-cover rounded-2xl"
                            />

                            {/* Add a subtle overlay gradient */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
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

                    {/* Enhanced data metrics floating card */}
                    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 transition-all duration-300 hover:shadow-primary/20 border border-gray-100 dark:border-gray-800 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                                <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Average CO₂ reduction</p>
                                <p className="text-lg font-bold text-gray-800 dark:text-gray-200">48% per vehicle</p>
                            </div>
                        </div>
                    </div>

                    {/* Added metrics card on the right side - Changed star color to primary */}
                    <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-3 transition-all duration-300 hover:shadow-primary/20 border border-gray-100 dark:border-gray-800 backdrop-blur-md">
                        <div className="flex items-center space-x-2">
                            <div className="bg-primary/10 dark:bg-primary/30 p-2 rounded-full">
                                <Star className="h-4 w-4 text-primary dark:text-primary" />
                            </div>
                            <p className="text-sm font-bold text-gray-800 dark:text-gray-200">4.9/5 <span className="text-xs font-normal text-gray-500">rating</span></p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Add a subtle, clean background without grid patterns */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30 dark:from-transparent dark:to-blue-900/5 pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;