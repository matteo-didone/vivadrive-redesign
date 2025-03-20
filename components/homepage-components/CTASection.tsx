import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
          <Link href="/contact-us">
  <Button
    size="lg"
    className="whitespace-nowrap shadow-lg shadow-emerald-500/20 bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-all hover:scale-105 rounded-full px-8 flex items-center gap-2"
  >
    Get Started
    <ArrowRight className="h-4 w-4" />
  </Button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;