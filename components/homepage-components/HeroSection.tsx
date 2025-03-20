"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);
    const floatingElement1Ref = useRef(null);
    const floatingElement2Ref = useRef(null);
    const macbookRef = useRef(null);

    useEffect(() => {
        // Enhanced parallax effect on scroll
        const handleScroll = () => {
            if (orb1Ref.current && orb2Ref.current) {
                const scrollY = window.scrollY;
                orb1Ref.current.style.transform = `translate(${scrollY * 0.05}px, ${scrollY * -0.05}px) scale(${1 + scrollY * 0.0005})`;
                orb2Ref.current.style.transform = `translate(${scrollY * -0.05}px, ${scrollY * 0.05}px) scale(${1 + scrollY * 0.0003})`;
            }
        };

        // Advanced floating animation for the macbook
        const macbookAnimation = () => {
            if (macbookRef.current) {
                const time = Date.now() * 0.0005;
                // Create a more dynamic floating effect with multiple sine waves
                const yOffset = Math.sin(time) * 15 + Math.sin(time * 1.5) * 7;
                const xOffset = Math.sin(time * 0.7) * 8;
                const rotation = Math.sin(time * 0.3) * 2;
                macbookRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`;
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
        const macbookInterval = setInterval(macbookAnimation, 20); // Smoother animation with higher frequency
        const animationInterval = setInterval(floatAnimation, 50);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(macbookInterval);
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
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F2FAF7] via-white to-[#F2FAF7] dark:from-gray-900/50 dark:to-gray-950 py-12 md:py-24 min-h-[90vh] flex items-center text-center md:text-left">
            {/* Enhanced background elements with green palette */}
            <div
                ref={orb1Ref}
                className="absolute right-0 top-0 -mt-16 -mr-16 h-96 w-96 rounded-full bg-gradient-to-br from-[#108C57]/15 to-[#8BD9B8]/10 blur-3xl transition-transform duration-200"
            ></div>
            
            <div className="absolute left-0 bottom-0 -ml-32 -mb-32 h-96 w-96 rounded-full bg-gradient-to-tr from-[#108C57]/10 to-[#8BD9B8]/5 blur-3xl transition-transform duration-200"></div>

            <div className="container relative z-10 grid gap-12 md:grid-cols-2 md:gap-16 items-center px-4 sm:px-6">
                <motion.div
                    className="space-y-8 max-w-lg mx-auto md:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-white bg-[#12AC6C] hover:bg-[#108C57] transition-all mx-auto md:mx-0">
                        Fleet Management
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Deploy and Manage{" "}
                        <span className="bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] dark:from-white dark:via-[#8BD9B8] dark:to-[#15BF70] bg-clip-text text-transparent relative inline-block">
                            Electric Vehicles
                        </span>{" "}
                        <br className="md:hidden" />
                        <span className="bg-gradient-to-r from-[#111826] to-[#12AC6C] dark:from-white dark:to-[#8BD9B8] bg-clip-text text-transparent">in your Fleet</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                        Drive your fleet's electrification seamlessly, reduce costs &
                        CO₂ emissions, and optimize your operation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="/contact-us">
                            <Button
                                size="lg"
                                className="gap-2 bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] hover:from-[#0F7B4B] hover:to-[#14AD69] font-medium px-8 py-6 text-lg rounded-full group transition-all duration-300"
                            >
                                Explore Now
                                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href="/contact-us">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-[#12AC6C]/20 text-[#12AC6C] hover:bg-[#12AC6C]/10 transition-all hover:scale-105 rounded-full py-6 text-lg"
                            >
                                Book a Demo
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Enhanced flying image section */}
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 sm:mt-6 md:mt-0">
                    {/* Animated MacBook Image - Now larger and with floating effect */}
                    <motion.div
                        ref={macbookRef}
                        className="absolute z-20 w-[150%] md:w-[150%] lg:w-[180%] xl:w-[200%] max-w-none transition-all duration-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.3,
                            ease: [0.19, 1.0, 0.22, 1.0] // Ease out expo for more dramatic effect
                        }}
                    >
                        <Image
                            src="/macbook-floating.png"
                            width={1200}
                            height={800}
                            alt="Fleet management dashboard showing electric vehicle statistics"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            style={{ transform: "perspective(1000px) rotateX(5deg)" }}
                            priority
                        />
                    </motion.div>

                    {/* Light beams radiating from behind */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full max-w-md max-h-md">
                            <div className="absolute inset-0 bg-gradient-radial from-[#12AC6C]/30 via-[#12AC6C]/5 to-transparent opacity-60 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
                        </div>
                    </div>

                    {/* Floating UI elements */}
                    <motion.div
                        className="absolute z-30 -bottom-10 left-0 md:-left-16 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 transition-all duration-300 hover:shadow-[#12AC6C]/20 border border-gray-100 dark:border-gray-800 backdrop-blur-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-[#12AC6C]/10 dark:bg-[#12AC6C]/30 p-3 rounded-full">
                                <Check className="h-5 w-5 text-[#12AC6C] dark:text-[#8BD9B8]" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Average CO₂ reduction</p>
                                <p className="text-lg font-bold text-gray-800 dark:text-gray-200">48% per vehicle</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute z-30 top-0 right-0 md:-right-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-3 transition-all duration-300 hover:shadow-[#12AC6C]/20 border border-gray-100 dark:border-gray-800 backdrop-blur-md"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="bg-[#12AC6C]/10 dark:bg-[#12AC6C]/30 p-2 rounded-full">
                                <Star className="h-4 w-4 text-[#12AC6C] dark:text-[#8BD9B8]" />
                            </div>
                            <p className="text-sm font-bold text-gray-800 dark:text-gray-200">4.9/5 <span className="text-xs font-normal text-gray-500">rating</span></p>
                        </div>
                    </motion.div>

                    {/* Additional floating element */}
                    <motion.div
                        className="absolute z-30 top-1/4 right-0 md:-right-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-2.5 transition-all duration-300 hover:shadow-[#12AC6C]/20 border border-gray-100 dark:border-gray-800 backdrop-blur-md"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="bg-[#12AC6C]/10 dark:bg-[#12AC6C]/30 p-1.5 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#12AC6C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <p className="text-xs font-bold text-gray-800 dark:text-gray-200">Fast setup</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced subtle background elements */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.015] dark:opacity-[0.03] pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F2FAF7]/30 dark:from-transparent dark:to-[#108C57]/5 pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;