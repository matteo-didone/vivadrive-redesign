import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl border border-white/40 dark:border-gray-700/30 transition-all hover:shadow-2xl hover:shadow-primary/10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to go electric?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">
              Get started with a free consultation to assess your fleet's
              electrification potential and discover how much you could save.
            </p>
          </div>
          <Button
            size="lg"
            className="whitespace-nowrap shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all hover:scale-105 flex items-center gap-2"
          >
            Get Started
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;