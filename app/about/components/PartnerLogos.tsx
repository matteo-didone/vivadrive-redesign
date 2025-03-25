"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import Image from "next/image";

const PartnerLogos = () => {
  const { t } = useLanguage();

  const scrollRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Partners with white logos for green background
  const partners = [
    { url: "https://scaleup.kpt.krakow.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1657546628/VivaDrive/Logos/Partners/KPTwhite_h0kgio.png", name: "KPT ScaleUP" },
    { url: "https://www.xeurope.eu/", img: "https://res.cloudinary.com/efer/image/upload/v1657546374/VivaDrive/Logos/Partners/XEuropeWhite_r6tv9w.png", name: "X Europe" },
    { url: "http://www.esa.int/", img: "https://res.cloudinary.com/efer/image/upload/v1657548543/VivaDrive/Logos/Partners/ESAwhite_oev27d.png", name: "ESA" },
    { url: "https://www.imec-int.com/en", img: "https://res.cloudinary.com/efer/image/upload/v1657548126/VivaDrive/Logos/Partners/IMECwhite_tzs560.png", name: "IMEC" },
    { url: "https://www.uhasselt.be/", img: "https://res.cloudinary.com/efer/image/upload/v1657547738/VivaDrive/Logos/Partners/UHASSELTwhite_l8yzep.png", name: "UHASSELT" },
    { url: "https://www.tauron.pl/tauron/tauron-innowacje/wspolpraca-ze-startupami/pilot-maker", img: "https://res.cloudinary.com/efer/image/upload/v1657547320/VivaDrive/Logos/Partners/PILOTMAKERwhite_e75gdw.png", name: "PILOT MAKER" },
    { url: "https://www.gov.pl/web/ncbr", img: "/about/ncbr.png", name: "NCBR" },
    { url: "https://mitefcee.org/", img: "/about/mit-logo.png", name: "MIT" },
    { url: "https://www.nissanusa.com/", img: "/about/nissan.png", name: "Nissan" },
    { url: "https://www.freshworks.com/", img: "https://res.cloudinary.com/efer/image/upload/v1657547052/VivaDrive/Logos/Partners/FRESHWORKSwhite_udar1k.png", name: "Freshworks" },
    { url: "https://www.ovhcloud.com/pl/", img: "https://res.cloudinary.com/efer/image/upload/v1657545987/VivaDrive/Logos/Partners/OVHwhite_acf6ah.png", name: "OVH Cloud" },
    { url: "https://pspa.com.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1657545321/VivaDrive/Logos/Partners/logoPSPAWHITE_fezgaa.png", name: "PSPA" },
    { url: "https://www.geotab.com/", img: "https://res.cloudinary.com/efer/image/upload/v1684143976/geo_vxzoef.png", name: "Geotab" },
    { url: "https://ekoenergetyka.com.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1684229430/ekoeene-removebg-preview_lgq6bv.png", name: "Ekoenergetyka" }
  ];

  // Detect if we're on a touch device
  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };

    detectTouch();

    // Fallback for server-side rendering
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsTouchDevice(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set up automatic scrolling
  useEffect(() => {
    if (!scrollRef.current) return;

    // For non-touch devices or when not hovering
    if (isTouchDevice) {
      // On mobile, just set initial scroll position
      scrollRef.current.scrollLeft = 0;
    } else {
      // On desktop, set initial scroll position
      scrollRef.current.scrollLeft = 50;

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
    }
  }, [isHovering, isTouchDevice]);

  return (
    <div className="w-full py-6 md:py-12 bg-emerald-500">
      <div className="container mx-auto">
        <div className="text-center mb-6 md:mb-10">
        <h3 className="text-sm md:text-base font-medium text-white uppercase tracking-wider px-4">
  {t('pages.about.partners.heading')}
</h3>
        </div>

        <div className="w-full overflow-hidden relative">
          {/* Container with different behavior based on device type */}
          <div
            ref={scrollRef}
            className={`
              flex items-center gap-6 md:gap-12 whitespace-nowrap py-4 md:py-8 px-4
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
            {/* Render partners with appropriate mobile styling */}
            {partners.map((partner, i) => (
              <a
                key={i}
                href={partner.url}
                rel="noreferrer"
                target="_blank"
                className={`
                  shrink-0 transition-all duration-300
                  ${isTouchDevice ? 'snap-center opacity-90' : 'opacity-80 hover:opacity-100 hover:scale-110'}
                  px-2
                `}
                style={{ WebkitTapHighlightColor: "transparent" }}
                aria-label={t('pages.about.partners.visit_label', { name: partner.name })}
              >
                <Image
                  src={partner.img}
                  alt={partner.name}
                  width={120}
                  height={35}
                  className="h-7 md:h-10 max-w-[90px] md:max-w-[140px] object-contain"
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
                className="shrink-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 px-2"
                style={{ WebkitTapHighlightColor: "transparent" }}
                aria-label={`Visit ${partner.name} website`}
              >
                <Image
                  src={partner.img}
                  alt={partner.name}
                  width={120}
                  height={35}
                  className="h-7 md:h-10 max-w-[90px] md:max-w-[140px] object-contain"
                />
              </a>
            ))}
          </div>

          {/* Gradient fading effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-emerald-500 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-emerald-500 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;