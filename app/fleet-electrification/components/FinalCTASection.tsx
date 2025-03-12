import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const FinalCTASection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const waveOffset = useTransform(scrollYProgress, [0, 1], [0, 30]);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 bg-emerald-50 dark:bg-emerald-950/20 relative overflow-hidden"
            aria-labelledby="cta-heading"
        >
            {/* Bottom waves only */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute bottom-0 w-full"
                    style={{ y: waveOffset }}
                >
                    <svg
                        className="w-full text-emerald-100/90 dark:text-emerald-900/20"
                        viewBox="0 0 1440 320"
                        fill="currentColor"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,288L60,272C120,256,240,224,360,213.3C480,203,600,213,720,213.3C840,213,960,203,1080,192C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Centered badge */}
                    <div className="flex justify-center mb-6">
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Sparkles className="h-4 w-4" />
                            <span>Get in touch</span>
                        </motion.div>
                    </div>

                    <h2
                        id="cta-heading"
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-10 text-gray-900 dark:text-white"
                    >
                        We believe the future of driving is electric
                    </h2>

                    <div className="flex justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                size="lg"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-6 h-auto text-lg rounded-full group transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 dark:focus:ring-emerald-700"
                                aria-label="Start now"
                            >
                                Start now
                                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTASection;