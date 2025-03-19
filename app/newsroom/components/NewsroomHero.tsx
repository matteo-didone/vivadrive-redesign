"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, ExternalLink, FileText, Download, ArrowRight } from "lucide-react";

const NewsroomHero = () => {
  // Add subtle animation on load
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -right-40 top-20 w-80 h-80 rounded-full bg-emerald-100/30 blur-3xl"></div>
      <div className="absolute -left-20 bottom-10 w-64 h-64 rounded-full bg-emerald-50/40 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Removed redundant "Press center" heading */}

        {/* Main content area with staggered animation */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20 mb-20">
          {/* Left column */}
          <div
            className={`space-y-8 max-w-lg transform transition-all duration-700 delay-100 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <div className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#0F7B4B] to-[#12AC6C] shadow-sm">
              Press Resources
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Latest
              <span className="bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] bg-clip-text text-transparent relative inline-block mx-1">
                News
              </span>
              &
              <span className="bg-gradient-to-r from-[#111826] to-[#12AC6C] bg-clip-text text-transparent ml-1">
                Announcements
              </span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Stay updated with the latest partnerships, innovations,
              and insights as we transform fleet management and
              sustainable mobility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/press-center/media-contact"
                className="inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] hover:from-[#0F7B4B] hover:to-[#14AD69] text-white font-medium px-8 py-3.5 text-lg rounded-full group transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
              >
                Media Inquiries
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/press-center/press-kit"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium border bg-white px-8 py-3.5 border-[#12AC6C]/20 text-[#12AC6C] hover:bg-emerald-50 transition-all hover:scale-105 rounded-full text-lg"
              >
                Download Press Kit
              </Link>
            </div>
          </div>

          {/* Right column - About VivaDrive with hover effect */}
          <div
            className={`bg-gradient-to-br from-emerald-50/80 to-white rounded-xl border border-emerald-100 p-8 md:p-10 shadow-lg shadow-emerald-100/10 hover:shadow-xl hover:shadow-emerald-100/20 transition-all duration-500 transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full mr-2.5 inline-block"></span>
              About VivaDrive
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              VivaDrive aims to accelerate the transition of car fleets towards sustainable
              energy. We help businesses manage their fleets efficiently, provide security to
              drivers, reduce CO2 emissions and many others. All this with a use of the
              advanced algorithms, AI and the team of fleet experts with 20+ years of experience.
            </p>

            <div className="space-y-6 mt-8 divide-y divide-emerald-100/70">
              <div className="flex items-start gap-4 pb-2">
                <div className="p-2.5 rounded-full bg-emerald-100/80 text-emerald-600 mt-1 shadow-sm">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Press Contact</h4>
                  <p className="mb-1 text-gray-700">Fabian Rządkowski</p>
                  <a
                    href="mailto:fabian@vivadrive.io"
                    className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline inline-flex items-center gap-1 group"
                  >
                    fabian@vivadrive.io
                    <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6">
                <div className="p-2.5 rounded-full bg-emerald-100/80 text-emerald-600 mt-1 shadow-sm">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Brand Assets</h4>
                  <p className="mb-1 text-gray-700">Download our logo, product images, and brand guidelines</p>
                  <Link
                    href="/press-center/logo"
                    className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline inline-flex items-center gap-1 group"
                  >
                    Get the logo
                    <ExternalLink className="h-3.5 w-3.5 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsroomHero;