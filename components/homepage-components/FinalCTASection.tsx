import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const FinalCTASection = () => {
    const { t } = useLanguage();
    
    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-blue-500/5 to-primary/10 dark:from-primary/20 dark:via-blue-500/10 dark:to-primary/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
            {/* Floating animated elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-primary/5 rounded-full"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            left: `${Math.random() * 90 + 5}%`,
                            top: `${Math.random() * 90 + 5}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 10 - 5, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
            <div className="container relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Sparkles className="h-4 w-4" />
                        <span>{t('finalCTA.badge')}</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {t('finalCTA.heading')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        {t('finalCTA.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Link href="/contact-us">
                            <Button
                                size="lg"
                                className="gap-2 bg-emerald-500 hover:bg-emerald-600 font-medium px-8 py-6 text-lg rounded-full group transition-all duration-300"
                            >
                                {t('finalCTA.getStartedButton')}
                                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Link href="/contact-us">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary/20 text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
                            >
                                {t('finalCTA.demoButton')}
                            </Button>
                            </Link>
                        </motion.div>
                    </div>
                    {/* Trust signals */}
                    <div className="mt-14 flex flex-col items-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t('finalCTA.trustSignal')}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                            {/* Replace with actual logo components or images */}
                            <div className="h-8 bg-gray-300/20 rounded"></div>
                            <div className="h-8 bg-gray-300/20 rounded"></div>
                            <div className="h-8 bg-gray-300/20 rounded"></div>
                            <div className="h-8 bg-gray-300/20 rounded"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default FinalCTASection;