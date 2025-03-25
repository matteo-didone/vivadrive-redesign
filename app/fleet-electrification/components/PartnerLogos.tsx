"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';

const PartnerLogos = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const partners = [
    { url: "https://www.geotab.com/", img: "https://res.cloudinary.com/efer/image/upload/v1684143976/geo_vxzoef.png", name: "Geotab" },
    { url: "https://www.nissanusa.com/", img: "https://res.cloudinary.com/efer/image/upload/v1656334858/VivaDrive/Logos/Partners/nissan2020_Black_qfjavj.png", name: "Nissan" },
    { url: "https://ekoenergetyka.com.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1684229430/ekoeene-removebg-preview_lgq6bv.png", name: "Ekoenergetyka" },
    { url: "https://www.pzu.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1684227825/m_1_el7cde.png", name: "PZU" },
    { url: "https://alfen.com/", img: "https://res.cloudinary.com/efer/image/upload/v1684228475/alfenn-removebg-preview_ncwtot.png", name: "Alfen" },
    { url: "https://www.pekaoleasing.com.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1684228296/poklo-removebg-preview_glcmbh.png", name: "Pekao Leasing" },
    { url: "https://www.tsg-solutions.com/", img: "https://res.cloudinary.com/efer/image/upload/v1684228135/TSGlogg-removebg-preview_mbapib.png", name: "TSG Solutions" },
    { url: "https://aliorleasing.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1684228930/Alior_Leasing_3_ut6gkg.jpg", name: "Alior Leasing" },
    { url: "https://www.ovhcloud.com/pl/", img: "https://res.cloudinary.com/efer/image/upload/v1657545987/VivaDrive/Logos/Partners/OVHblack_tvdfup.png", name: "OVH Cloud" },
    { url: "https://elo.city/", img: "https://res.cloudinary.com/efer/image/upload/v1684143479/eloc_cgx37a.png", name: "Elo.city" },
    { url: "https://eleport.ee/en/", img: "https://res.cloudinary.com/efer/image/upload/v1684143620/elep_letr90.png", name: "Eleport" },
    { url: "https://pspa.com.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1657545321/VivaDrive/Logos/Partners/LogoPSPABlack_nmbcpk.png", name: "PSPA" },
    { url: "https://www.lafarge.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1684228475/laff-removebg-preview_iyxsp1.png", name: "Lafarge" }
  ];

  // Detect if we're on a touch device
  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      );
    };

    detectTouch();
  }, []);

  // For non-touch devices only: set up automatic scrolling
  useEffect(() => {
    if (!scrollRef.current || isTouchDevice) return;

    // Only for desktop: Duplicate partners for continuous scrolling effect
    const allPartnersDiv = scrollRef.current;

    // Initial scroll position (for desktop only)
    if (partners.length > 5) {
      scrollRef.current.scrollLeft = 50; // Start with slight offset
    }

    // Animation function for smooth scrolling (desktop only)
    const animateScroll = () => {
      if (scrollRef.current && !isHovering) {
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 50)) {
          // Reset to beginning when we reach the end
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };

    // Start animation for desktop
    const animationId = setInterval(animateScroll, 30);

    return () => {
      clearInterval(animationId);
    };
  }, [isHovering, isTouchDevice, partners.length]);

  // Create mobile-friendly or desktop-friendly rendering
  return (
    <div className="w-full py-6 md:py-12 bg-white dark:bg-gray-950">
      <div className="text-center mb-6 md:mb-10">
        <h3 className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-4">
          {t('pages.fleet_electrification.partners.heading')}
        </h3>
      </div>

      <div className="w-full overflow-hidden relative">
        {/* Container with different behavior based on device type */}
        <div
          ref={scrollRef}
          className={`
            flex items-center gap-8 md:gap-12 whitespace-nowrap py-4 md:py-8 px-4
            ${isTouchDevice ? 'overflow-x-auto snap-x snap-mandatory' : 'overflow-x-hidden'}
          `}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
          onMouseEnter={isTouchDevice ? undefined : () => setIsHovering(true)}
          onMouseLeave={isTouchDevice ? undefined : () => setIsHovering(false)}
        >
          {/* Render differently based on device type */}
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              rel="noreferrer"
              target="_blank"
              className={`
                shrink-0 transition-all duration-300
                ${isTouchDevice ? 'snap-center opacity-90' : 'opacity-70 hover:opacity-100 hover:scale-110 grayscale hover:grayscale-0'}
                px-2
              `}
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label={t('pages.fleet_electrification.partners.visit_label', { name: partner.name })}
            >
              <Image
                src={partner.img}
                alt={partner.name}
                width={120}
                height={35}
                className="h-8 md:h-10 max-w-[100px] md:max-w-[160px] object-contain"
                priority={i < 6}
              />
            </a>
          ))}

          {/* Add extra copies for desktop continuous scrolling */}
          {!isTouchDevice && partners.map((partner, i) => (
            <a
              key={`copy-${i}`}
              href={partner.url}
              rel="noreferrer"
              target="_blank"
              className="shrink-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 grayscale hover:grayscale-0 px-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label={t('pages.fleet_electrification.partners.visit_label', { name: partner.name })}
            >
              <Image
                src={partner.img}
                alt={partner.name}
                width={120}
                height={35}
                className="h-8 md:h-10 max-w-[100px] md:max-w-[160px] object-contain"
              />
            </a>
          ))}
        </div>

        {/* Gradient fading effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent dark:from-gray-950 dark:to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent dark:from-gray-950 dark:to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default PartnerLogos;