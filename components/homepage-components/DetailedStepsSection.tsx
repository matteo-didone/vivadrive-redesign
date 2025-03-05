import React from 'react';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const DetailedStepsSection = () => {
    const steps = [
        {
            number: 1,
            title: "Fleet Analysis",
            description: "We conduct a comprehensive analysis of your current fleet operations, including vehicle usage patterns, mileage, routes, and energy requirements. This data-driven approach allows us to identify the optimal vehicles for electrification and create a tailored transition plan.",
            features: [
                "Vehicle usage analysis",
                "Route pattern identification",
                "Energy requirement calculation",
            ],
            image: "/placeholder.svg?height=500&width=700",
            imageAlt: "Fleet analysis dashboard showing vehicle usage patterns",
        },
        {
            number: 2,
            title: "Charging Infrastructure",
            description: "We design and implement the optimal charging infrastructure for your fleet, considering your operational needs, facility constraints, and budget. Our solution includes hardware selection, installation planning, and integration with your energy management systems.",
            features: [
                "Site assessment and planning",
                "Charger selection and installation",
                "Energy management integration",
            ],
            image: "/placeholder.svg?height=500&width=700",
            imageAlt: "Map showing charging infrastructure planning",
        },
        // Steps 3 and 4 would be added in the same format
    ];

    return (
        <section className="py-20 md:py-28 bg-white dark:bg-gray-950">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                        Getting Started
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        Start Electrifying Your Fleet Today
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Our proven 4-step process ensures a smooth transition to
                        electric vehicles.
                    </p>
                </div>

                <div className="space-y-32">
                    {steps.map((step, index) => (
                        <div key={index} className="grid gap-12 md:grid-cols-2 items-center">
                            <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-6">
                                    Step {step.number}
                                </div>
                                <h3 className="text-2xl font-bold mb-6 relative inline-block">
                                    {step.title}
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/20 rounded-full"></div>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                                    {step.description}
                                </p>
                                <ul className="space-y-4">
                                    {step.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 group">
                                            <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-primary/10 transition-all">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <Image
                                        src={step.image}
                                        width={700}
                                        height={500}
                                        alt={step.imageAlt}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DetailedStepsSection;