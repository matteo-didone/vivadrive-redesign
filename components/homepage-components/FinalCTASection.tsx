import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const FinalCTASection = () => {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-blue-500/5 to-primary/10 dark:from-primary/20 dark:via-blue-500/10 dark:to-primary/20">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        Take Action Today
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-8">
                        Ready to go electric?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        Join the growing number of businesses transforming their fleets
                        with VivaDrive. Our experts are ready to guide you through every
                        step of the electrification journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="gap-2 shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary font-medium px-8 py-6 text-lg"
                        >
                            Get Started
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/20 text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                        >
                            Book a Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;