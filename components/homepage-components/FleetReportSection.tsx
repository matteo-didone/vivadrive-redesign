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
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">

                <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-8 gap-y-12 items-center">
                    {/* Left column with text content - 5 columns */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="md:col-span-5"
                    >
                        <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-600 mb-6">
                            Comprehensive Analysis
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Fleet <br className="hidden sm:block" />
                            Electrification <br className="hidden sm:block" />
                            Report
                        </h2>

                        <p className="text-gray-600 text-lg mb-8">
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

                    {/* Right column with report image - 7 columns for larger image */}
                    <div className="md:col-span-7 relative">
                        {/* Direct image without card container */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            variants={imageVariants}
                            className="relative z-10"
                        >
                            <Image
                                src="/steps/fleet-report.png"
                                width={1400}
                                height={1050}
                                alt="Fleet electrification report"
                                className="w-full h-auto"
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