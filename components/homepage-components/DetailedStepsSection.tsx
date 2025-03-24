import React from 'react';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const DetailedStepsSection = () => {
    const { t } = useLanguage();

    // Define steps using the new translation structure
    const steps = [
        {
            number: 1,
            title: t('steps.step1.title'),
            description: t('steps.step1.description'),
            features: t('steps.step1.features'),
            image: "/steps/step1.png",
            imageAlt: t('steps.step1.title'),
            bgColor: "from-emerald-500/5 to-sky-500/5"
        },
        {
            number: 2,
            title: t('steps.step2.title'),
            description: t('steps.step2.description'),
            features: t('steps.step2.features'),
            image: "/steps/step2.png",
            imageAlt: t('steps.step2.title'),
            bgColor: "from-blue-500/5 to-emerald-500/5"
        },
        {
            number: 3,
            title: t('steps.step3.title'),
            description: t('steps.step3.description'),
            features: t('steps.step3.features'),
            image: "/steps/step3.png",
            imageAlt: t('steps.step3.title'),
            bgColor: "from-amber-500/5 to-emerald-500/5"
        },
        {
            number: 4,
            title: t('steps.step4.title'),
            description: t('steps.step4.description'),
            features: t('steps.step4.features'),
            image: "/steps/step4.png",
            imageAlt: t('steps.step4.title'),
            bgColor: "from-purple-500/5 to-emerald-500/5"
        }
    ];

    // Animations for scrolling elements
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
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                >
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 py-1.5 px-4 text-sm font-medium">
                        {t('steps.badge')}
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        {t('steps.heading')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        {t('steps.subheading')}
                    </p>
                </motion.div>

                {/* Process progress tracker (shown on larger screens) */}
                <div className="hidden md:flex justify-center mb-20">
                    <div className="flex items-center">
                        {steps.map((step, index) => (
                            <React.Fragment key={`tracker-${index}`}>
                                <motion.div
                                    className="flex flex-col items-center"
                                    initial="uncompleted"
                                    whileInView={index < 3 ? "completed" : "uncompleted"}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <div
                                        className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 text-lg font-bold z-10"
                                        style={index < 3 ?
                                            { borderColor: "#10b981", backgroundColor: "#10b981" } :
                                            { borderColor: "#e5e7eb", backgroundColor: "transparent" }}
                                    >
                                        {index < 3 && (
                                            <CheckCircle className="absolute h-6 w-6 text-white" />
                                        )}
                                        <span className={index < 3 ? "opacity-0" : "text-gray-700"}>
                                            {step.number}
                                        </span>
                                    </div>
                                    <span className="mt-2 font-medium text-sm">
                                        {step.title}
                                    </span>
                                </motion.div>

                                {index < steps.length - 1 && (
                                    <div className="w-24 h-0.5 bg-gray-200 mx-2">
                                        <motion.div
                                            className="h-full bg-emerald-500"
                                            initial={{ width: 0 }}
                                            whileInView={index < 2 ? { width: "100%" } : { width: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="space-y-32">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="grid gap-12 md:grid-cols-2 items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeIn}
                        >
                            <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                                <div className="mb-8">
                                    <div className="flex items-center">
                                        <div className="mr-4">
                                            <div className={`inline-flex h-10 min-w-[80px] items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-emerald-500 px-3 py-1 text-sm font-semibold whitespace-nowrap`}>
                                                {t('steps.step_label')} {step.number}
                                            </div>
                                        </div>
                                        <h3 className={`text-2xl md:text-4xl font-bold relative inline-block text-gray-900 dark:text-white`}>
                                            {step.title}
                                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-emerald-500/20 rounded-full"></div>
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                                    {step.description}
                                </p>
                                <ul className="space-y-4">
                                    {Array.isArray(step.features) && step.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 group">
                                            <CheckCircle className={`h-6 w-6 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-primary/10 transition-all">
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    <Image
                                        src={step.image}
                                        width={700}
                                        height={500}
                                        alt={step.imageAlt}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DetailedStepsSection;