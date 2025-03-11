import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FleetReportSection = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="grid gap-16 md:grid-cols-2 items-center">
                    {/* Left column with report image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Subtle glow effect for the card */}
                            <div className="absolute inset-0 rounded-3xl bg-emerald-100/20 blur-xl"></div>

                            {/* Report image */}
                            <div className="relative">
                                <Image
                                    src="/steps/fleet-report.png"
                                    width={500}
                                    height={580}
                                    alt="Fleet electrification report"
                                    className="w-full h-auto max-w-md mx-auto"
                                />

                                {/* Green circular icon overlay */}
                                <div className="absolute -bottom-6 -right-6">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                            <polyline points="2 17 12 22 22 17"></polyline>
                                            <polyline points="2 12 12 17 22 12"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column with text content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-600 mb-6">
                            Comprehensive Analysis
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Fleet<br />
                            Electrification<br />
                            Report
                        </h2>

                        <p className="text-gray-600 text-lg mb-8 max-w-lg">
                            Access a detailed report on your fleet's electrification journey. Benefit from valuable insights, including cost analysis, potential savings, and tailored recommendations, enabling you to make informed decisions and accelerate your sustainability goals.
                        </p>

                        <motion.a
                            href="/request-report"
                            className="inline-flex items-center rounded-full bg-emerald-500 hover:bg-emerald-600 px-5 py-3 text-white font-medium transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Request Your Report
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FleetReportSection;