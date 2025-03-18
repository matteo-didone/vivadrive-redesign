"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const NewsroomHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-500 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-pattern" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">VivaDrive Newsroom</h1>
          <p className="text-emerald-50 text-xl mb-8">
            Stay updated with the latest news, partnerships, and insights from VivaDrive as we transform fleet management and sustainable mobility.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-emerald-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300 inline-flex items-center"
            >
              Media Inquiries
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent text-white border border-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition duration-300"
            >
              About VivaDrive
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-gradient-to-t from-emerald-400 to-transparent opacity-20 rounded-tl-full"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/4"></div>
    </section>
  );
};

export default NewsroomHero;