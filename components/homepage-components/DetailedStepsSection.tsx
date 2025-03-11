import React from 'react';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const DetailedStepsSection = () => {
    const steps = [
        {
            number: 1,
            title: "Fleet Analysis",
            description: "The AI-driven system creates a digital twin of your fleet. Then it conducts detailed analysis and simulations of various scenarios taking into account the company's transportation tasks, vehicles and drivers.",
            features: [
                "Vehicle usage analysis",
                "Route pattern identification",
                "Energy requirement calculation",
                "Fleet composition assessment"
            ],
            image: "/steps/step1.png",
            reportImage: "/steps/fleet-report.png",
            imageAlt: "Fleet analysis dashboard showing vehicle usage patterns"
        },
        {
            number: 2,
            title: "Charging Infrastructure",
            description: "Based on advanced data analysis and AI we design a perfectly optimized EV charging infrastructure plan for your EV fleet by assessing charging site suitability and estimating the cost of infrastructure installation.",
            features: [
                "Site assessment and planning",
                "Charger selection and installation",
                "Energy management integration",
                "Cost optimization strategies"
            ],
            image: "/steps/step2.png",
            imageAlt: "Map showing charging infrastructure planning"
        },
        {
            number: 3,
            title: "Deployment Plan",
            description: "Efficiently transition your fleet to electric vehicles while minimizing disruptions. Our data-driven approach, based on thorough analysis, enables us to create a realistic and practical deployment plan tailored to your specific requirements, ensuring a smooth and successful transition.",
            features: [
                "Phased implementation strategy",
                "Driver training programs",
                "Operational adaptation planning",
                "Budget allocation guidance"
            ],
            image: "/steps/step3.png",
            imageAlt: "Deployment plan visualization with electric vehicles"
        },
        {
            number: 4,
            title: "EV Management",
            description: "Streamline your fleet management and optimize operations. Our comprehensive EV management system empowers you to track every aspect of your electric fleet in real-time, from charging status and energy consumption to maintenance needs and performance metrics.",
            features: [
                "Real-time fleet monitoring",
                "Charging optimization",
                "Performance analytics",
                "Maintenance scheduling"
            ],
            image: "/steps/step4.png",
            imageAlt: "EV management dashboard showing fleet statistics"
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

    // Animation for the progress tracking
    const progressVariants = {
        uncompleted: { borderColor: "#e5e7eb", backgroundColor: "transparent" },
        completed: {
            borderColor: "#10b981",
            backgroundColor: "#10b981",
            transition: { duration: 0.3 }
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
                        Our Process
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        Start Electrifying Your Fleet Today
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Our proven 4-step process ensures a smooth transition to
                        electric vehicles.
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
                                    <motion.div
                                        className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 text-lg font-bold z-10"
                                        variants={{
                                            uncompleted: { borderColor: "#e5e7eb", backgroundColor: "transparent" },
                                            completed: {
                                                borderColor: "#10b981",
                                                backgroundColor: "#10b981",
                                                transition: { duration: 0.3 }
                                            }
                                        }}
                                    >
                                        {index < 3 && (
                                            <CheckCircle className="absolute h-6 w-6 text-white" />
                                        )}
                                        <span className={index < 3 ? "opacity-0" : "text-gray-700"}>
                                            {step.number}
                                        </span>
                                    </motion.div>
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
                                            <div className={`inline-flex h-10 min-w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-emerald-500 px-3 py-1 text-sm font-semibold`}>
                                                Step {step.number}
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
                                    {step.features.map((feature, i) => (
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

                                    {/* Additional report image for first step */}
                                    {step.reportImage && (
                                        <div className="absolute bottom-0 right-0 w-1/2 transform translate-y-1/4 translate-x-1/4 shadow-2xl rounded-lg overflow-hidden border-4 border-white dark:border-gray-800">
                                            <Image
                                                src={step.reportImage}
                                                width={350}
                                                height={250}
                                                alt="Fleet report detail"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    )}
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