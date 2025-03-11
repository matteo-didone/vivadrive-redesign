import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

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
        <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
            <div className="container">
                <div className="grid gap-12 md:grid-cols-2 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="relative"
                    >
                        {/* Fleet Report with pen illustration */}
                        <Image
                            src="/images/fleet-report-illustration.png"
                            width={600}
                            height={500}
                            alt="Fleet electrification report with green pen"
                            className="w-full h-auto max-w-lg mx-auto"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Fleet<br />
                            Electrification<br />
                            Report
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                            Access a detailed report on your fleet's electrification journey.
                            Benefit from valuable insights, including cost analysis, potential
                            savings, and tailored recommendations, enabling you to make
                            informed decisions and accelerate your sustainability goals.
                        </p>
                        <motion.a
                            href="/request-report"
                            className="inline-flex items-center rounded-md bg-emerald-500 px-5 py-3 text-white hover:bg-emerald-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Request Your Report
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FleetReportSection;