"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ExternalLink, FileText, Download, ArrowRight } from "lucide-react";

const NewsroomHero = () => {
  // Add subtle animation on load
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-white pt-6 pb-12 sm:pt-8 md:pt-12 md:pb-24 relative overflow-hidden">
      {/* Background decorative elements - adjusted for better mobile appearance */}
      <div className="absolute -right-32 sm:-right-40 top-10 sm:top-20 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-emerald-100/30 blur-3xl"></div>
      <div className="absolute -left-16 sm:-left-20 bottom-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-emerald-50/40 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main content area with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 mb-12 md:mb-20">
          {/* Left column - centered on mobile */}
          <div
            className={`space-y-6 sm:space-y-8 mx-auto md:mx-0 max-w-lg transform transition-all duration-700 delay-100 ease-out text-center md:text-left ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <div className="inline-flex items-center rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#0F7B4B] to-[#12AC6C] shadow-sm">
              Press Resources
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Latest
              <span className="bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] bg-clip-text text-transparent relative inline-block mx-1">
                News
              </span>
              &
              <span className="bg-gradient-to-r from-[#111826] to-[#12AC6C] bg-clip-text text-transparent ml-1">
                Announcements
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              Stay updated with the latest partnerships, innovations,
              and insights as we transform fleet management and
              sustainable mobility.
            </p>

            <div className="flex flex-col items-center md:items-start xs:flex-row gap-3 sm:gap-4 pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-[#108C57] via-[#12AC6C] to-[#15BF70] hover:from-[#0F7B4B] hover:to-[#14AD69] text-white font-medium px-5 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg rounded-full group transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
              >
                Media Inquiries
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right column - About VivaDrive with hover effect - centered on mobile */}
          <div
            className={`bg-gradient-to-br from-emerald-50/80 to-white rounded-xl border border-emerald-100 p-6 sm:p-8 md:p-10 shadow-lg shadow-emerald-100/10 hover:shadow-xl hover:shadow-emerald-100/20 transition-all duration-500 transform mt-6 md:mt-0 text-center md:text-left ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-gray-900 justify-center md:justify-start">
              <span className="w-1.5 h-5 sm:h-6 bg-emerald-500 rounded-full mr-2.5 inline-block"></span>
              About VivaDrive
            </h3>

            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              VivaDrive aims to accelerate the transition of car fleets towards sustainable
              energy. We help businesses manage their fleets efficiently, provide security to
              drivers, reduce CO2 emissions and many others. All this with a use of the
              advanced algorithms, AI and the team of fleet experts with 20+ years of experience.
            </p>

            <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8 divide-y divide-emerald-100/70">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 pb-4">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-emerald-100">
                    <Image
                      src="/newsroom/mateusz-maj.jpg"
                      alt="Mateusz Maj"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 p-1 bg-emerald-100 rounded-full border border-white">
                    <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">Press Contact</h4>
                  <p className="mb-1 text-gray-700 text-sm sm:text-base">Mateusz Maj</p>
                  <a
                    href="mailto:mat@vivadrive.io"
                    className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline inline-flex items-center gap-1 group text-sm sm:text-base justify-center md:justify-start"
                  >
                    mat@vivadrive.io
                    <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 pt-4 sm:pt-6">
                <div className="p-2 sm:p-2.5 rounded-full bg-emerald-100/80 text-emerald-600 mb-2 md:mb-0 md:mt-1 shadow-sm">
                  <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">Brand Assets</h4>
                  <p className="mb-1 text-gray-700 text-sm sm:text-base">Download our logo, product images, and brand guidelines</p>
                  <a
                    href="https://app.air.inc/a/bwv99q1PX/b/10c9de8d-d583-4a79-8514-1028897aab54"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline inline-flex items-center gap-1 group text-sm sm:text-base justify-center md:justify-start"
                  >
                    Get the logo
                    <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                  </a>
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