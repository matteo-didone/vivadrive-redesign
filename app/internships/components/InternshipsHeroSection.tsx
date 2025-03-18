"use client";

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const InternshipsHeroSection = () => {
    // Refs for animated elements
    const imageRef = useRef(null);
    const highlightRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Subtle parallax effect for the background image and fade content
        const handleScroll = () => {
            if (imageRef.current) {
                const scrollY = window.scrollY;
                const translateY = scrollY * 0.15; // Subtle movement
                imageRef.current.style.transform = `translateY(${translateY}px)`;
            }

            if (contentRef.current) {
                const scrollY = window.scrollY;
                const opacity = Math.max(0, 1 - (scrollY / 500));
                contentRef.current.style.opacity = opacity.toString();
            }
        };

        // Subtle floating animation for the highlighted text
        const animateHighlight = () => {
            if (highlightRef.current) {
                const time = Date.now() * 0.0005;
                highlightRef.current.style.filter = `brightness(${1 + Math.sin(time) * 0.05})`;
                highlightRef.current.style.textShadow = `0 0 ${5 + Math.sin(time) * 3}px rgba(16, 185, 129, 0.3)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        const animationInterval = setInterval(animateHighlight, 16);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(animationInterval);
        };
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background image with parallax effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    ref={imageRef}
                    className="w-full h-[120%] relative" // Make taller for parallax
                >
                    <Image
                        src="/internships/teamwork.png"
                        alt="VivaDrive internship team collaborating"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-filter backdrop-blur-[2px]"></div>
                </div>
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-[1]"></div>

            {/* Light particle effect */}
            <div className="absolute inset-0 z-[2] opacity-30 mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%2310b981\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1.5\'/%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: '20px 20px'
                }}>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
                <motion.div
                    ref={contentRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1.0] // Cubic bezier for smooth motion
                    }}
                    className="text-center max-w-5xl"
                >
                    {/* Main heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5">
                        Internships
                        <div ref={highlightRef} className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                            Build your career with VivaDrive
                        </div>
                    </h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-xl text-gray-100 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        At VivaDrive we believe that collaboration is the best way to learn and do something 
                        meaningful. Start your career in technology, Data Science, and Business/Communication 
                        in a international environment.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black/50">
                            <span className="flex items-center">
                                View internships
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default InternshipsHeroSection;