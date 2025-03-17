"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";

const TeamCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef(null);

    // Resize handler to determine how many cards to show
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const teamMembers = [
        {
            name: "Mateusz Maj",
            role: "CEO",
            image: "/about/team/Mateusz.png",
            linkedin: "https://www.linkedin.com/in/matmaj/",
            isLeadership: true
        },
        {
            name: "Radek Czajka",
            role: "CTO",
            image: "/about/team/Radek.jpg",
            linkedin: "https://www.linkedin.com/in/rczajka/",
            isLeadership: true
        },
        {
            name: "Dinesh Kumar",
            role: "COO",
            image: "/about/team/Dinesh.jpg",
            linkedin: "https://www.linkedin.com/in/dkr27/",
            isLeadership: true
        },
        {
            name: "Piotr Ptaszyński",
            role: "Fleet Program Director",
            image: "/about/team/Piotr.png",
            linkedin: "https://www.linkedin.com/in/piotr-ptaszyński-82187415a/",
            isLeadership: true
        },
        {
            name: "Gautam Narayan",
            role: "Frontend Developer",
            image: "/about/team/Gautam.jpeg",
            linkedin: "https://www.linkedin.com/in/iamrraj/",
            isLeadership: false
        },
        {
            name: "Rahul Raj",
            role: "Full Stack Developer",
            image: "/about/team/Rahul.png",
            linkedin: "https://www.linkedin.com/in/iamrraj/",
            isLeadership: false
        }
    ];

    const itemsPerSlide = isMobile ? 1 : 3;
    const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-gray-50">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50 rounded-bl-full opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-50 rounded-tr-full opacity-70"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-200 rounded-full opacity-20 blur-md" />
                <div className="absolute top-1/2 -left-20 w-48 h-48 bg-emerald-300 rounded-full opacity-20 blur-md" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <motion.p className="text-emerald-500 text-lg font-medium mb-2" variants={fadeInUp}>
                        The people behind VivaDrive
                    </motion.p>

                    <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900" variants={fadeInUp}>
                        Our <span className="text-emerald-500">core team</span>
                    </motion.h2>

                    <motion.p
                        className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
                        variants={fadeInUp}
                    >
                        Meet the talented individuals who are driving innovation and excellence at VivaDrive
                    </motion.p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative px-4 sm:px-8 md:px-12">
                    {/* Carousel Navigation - Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg text-emerald-500 hover:bg-emerald-50 transition-colors duration-300"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Carousel Track */}
                    <div
                        ref={carouselRef}
                        className="overflow-hidden"
                    >
                        <motion.div
                            className="flex transition-all duration-500 ease-in-out"
                            initial={false}
                            animate={{ x: `-${currentSlide * 100}%` }}
                            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                        >
                            {/* Slides */}
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    className="flex-shrink-0 w-full flex flex-wrap justify-center gap-8"
                                    style={{ minWidth: "100%" }}
                                >
                                    {teamMembers
                                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                        .map((member, memberIndex) => (
                                            <motion.div
                                                key={`${slideIndex}-${memberIndex}`}
                                                className="w-full sm:w-80 max-w-xs mx-auto"
                                                whileHover={{ y: -10 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                                    {/* Image container with fixed aspect ratio */}
                                                    <div className="relative w-full pt-[100%]">
                                                        <Image
                                                            src={member.image}
                                                            alt={member.name}
                                                            fill
                                                            className="object-cover object-center"
                                                        />
                                                    </div>

                                                    {/* Content centered in card */}
                                                    <div className="p-6 text-center flex-grow flex flex-col justify-center">
                                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                                        <p className="text-emerald-600 font-medium mb-4">{member.role}</p>

                                                        {/* Social links centered */}
                                                        <div className="flex justify-center space-x-3 mt-auto">
                                                            <a
                                                                href={member.linkedin}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="p-2 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
                                                                aria-label={`LinkedIn profile of ${member.name}`}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 24 24"
                                                                    fill="currentColor"
                                                                    className="w-4 h-4"
                                                                >
                                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                                </svg>
                                                            </a>
                                                            <a
                                                                href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@vivadrive.io`}
                                                                className="p-2 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors"
                                                                aria-label={`Email ${member.name}`}
                                                            >
                                                                <Mail size={16} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Carousel Navigation - Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg text-emerald-500 hover:bg-emerald-50 transition-colors duration-300"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-10 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-emerald-500" : "w-2 bg-emerald-200"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Join Team Button */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        href="/about/careers"
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium transition-all shadow-lg shadow-emerald-500/20 group"
                    >
                        Join Our Team
                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamCarousel;