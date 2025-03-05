import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl">
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Ready to go electric?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get started with a free consultation to assess your fleet's
              electrification potential.
            </p>
          </div>
          <Button
            size="lg"
            className="whitespace-nowrap shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;