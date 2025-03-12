"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
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

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#f2faf7]">
            {/* Background decorative elements */}
            <div
                ref={orbRef}
                className="absolute -right-64 top-0 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-emerald-400/10 to-emerald-600/5 blur-3xl"
            />
            <div className="absolute -left-64 bottom-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-400/10 to-emerald-300/5 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Navigation tabs and Learn more button */}
                <div className="flex justify-between items-center mb-10">
                    <div className="flex space-x-8">
                        <div className="relative">
                            <span className="text-lg font-medium text-gray-900 cursor-pointer">Benefits</span>
                            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 rounded-full" />
                        </div>
                        <div>
                            <span className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer">Features</span>
                        </div>
                    </div>

                    <button className="py-2 inline-flex items-center justify-center text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-emerald-600 h-10 gap-1 border border-emerald-500 hover:bg-emerald-50 font-medium px-5 transition-all hover:scale-105 rounded-full">
                        Learn more
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left content column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8">
                            Electrify your fleet
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-600 block">
                                with data
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            VivaDrive helps you select the best EV for your fleet, find the ideal charging
                            infrastructure and help you manage your sustainable EV fleet.
                        </p>

                        {/* Email and CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="px-5 h-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full sm:w-auto sm:min-w-[260px] shadow-sm"
                            />

                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-12 gap-2 shadow-lg shadow-emerald-500/20 bg-emerald-500 hover:bg-emerald-600 font-medium px-6 transition-all hover:scale-105 rounded-full">
                                Contact Sales
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right image column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="relative w-full h-[520px]">
                            <Image
                                src="/fleet-electrification/charging-station.png"
                                alt="Electric vehicle charging station"
                                fill
                                className="object-contain"
                                priority
                            />

                            {/* Floating info cards */}
                            <div
                                ref={cardRef1}
                                className="absolute top-4 right-0 bg-white p-4 rounded-xl shadow-xl z-20 transition-transform duration-300 ease-in-out"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col items-center justify-center w-14 h-14 bg-emerald-50 rounded-lg">
                                        <div className="text-emerald-500 text-xs font-medium">BMW</div>
                                        <div className="text-emerald-600 text-xl font-bold">i3</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">PRICE RANGE</div>
                                        <div className="text-sm font-medium">€73,000 - 98,000</div>
                                    </div>
                                </div>
                            </div>

                            <div
                                ref={cardRef2}
                                className="absolute top-1/2 -left-6 bg-white p-3 rounded-xl shadow-xl z-20 transition-transform duration-300 ease-in-out"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                                        158<span className="text-xs">h</span>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">USAGE</div>
                                        <div className="font-medium">Weekly average</div>
                                    </div>
                                </div>
                            </div>

                            <div
                                ref={cardRef3}
                                className="absolute bottom-10 right-12 bg-white p-3 rounded-xl shadow-xl z-20 transition-transform duration-300 ease-in-out"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">PUBLIC CHARGER</div>
                                        <div className="font-medium text-emerald-600 flex items-center gap-1">
                                            37% <span className="text-xs text-gray-500">suitability</span>
                                        </div>
                                    </div>
                                    <div className="h-12 w-12 flex items-center justify-center">
                                        <svg viewBox="0 0 36 36" className="h-12 w-12">
                                            <path
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#10b981"
                                                strokeWidth="3"
                                                strokeDasharray="37, 100"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;