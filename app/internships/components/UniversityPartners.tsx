"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';

const UniversityPartners = () => {
  const { t } = useLanguage();
  const scrollRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // University partners with logos
  const universities = [
    { url: "https://en.uw.edu.pl/", img: "/internships/univeristy-logos/warsaw-university.png", name: "Uniwersytet Warszawski" },
    { url: "https://www.ulusofona.pt/", img: "/internships/univeristy-logos/universidade-lusofona.svg", name: "Universidade Lusófona" },
    { url: "https://www.vistula.edu.pl/en", img: "https://res.cloudinary.com/joaocostajs/image/upload/v1624531498/vivadrive/images/Akademia_Finans%C3%B3w_i_Biznesu_Vistula.png", name: "Akademia Finansów i Biznesu Vistula" },
    { url: "https://www.uma.pt/", img: "https://www.uma.pt/wp-content/themes/uma/images/Logo_UMa_site-01.png", name: "Universidade da Madeira" },
    { url: "https://www.ubi.pt/", img: "/internships/univeristy-logos/universidade-beira.svg", name: "Universidade da Beira Interior" },
    { url: "https://www.polito.it/", img: "/internships/univeristy-logos/politecnico-torino.png", name: "Politecnico di Torino" },
    { url: "https://kedge.edu/", img: "/internships/univeristy-logos/kedge-business-school.png", name: "KEDGE Business School" },
    { url: "https://en.uoa.gr/", img: "/internships/univeristy-logos/university-of-athens.png", name: "National and Kapodistrian University of Athens" },
    { url: "https://www.bme.hu/?language=en", img: "/internships/univeristy-logos/muegyetem.png", name: "Budapest University of Technology and Economics" },
    { url: "https://www.esiee.fr/", img: "/internships/univeristy-logos/esiee.png", name: "ESIEE Paris" },
    { url: "https://www.uniroma1.it/en/", img: "/internships/univeristy-logos/sapienza.png", name: "Sapienza University of Rome" },
    { url: "https://www.tu-dortmund.de/en/", img: "/internships/univeristy-logos/dortmund-university.png", name: "TU Dortmund University" },
    { url: "http://www.unizg.hr/homepage/", img: "/internships/univeristy-logos/university-zagreb.png", name: "University of Zagreb" },
    { url: "https://www.telecom-sudparis.eu/en/", img: "/internships/univeristy-logos/telecom-sudparis.png", name: "Télécom SudParis" }
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
            {t('pages.internships.partners.heading')}
          </h3>
        </div>

        <div className="w-full overflow-hidden relative">
          {/* Container with different behavior based on device type */}
          <div
            ref={scrollRef}
            className={`
              flex items-center gap-6 md:gap-10 whitespace-nowrap py-6 md:py-12 px-4
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
            {/* Render universities with appropriate mobile styling */}
            {universities.map((university, i) => (
              <a
                key={i}
                href={university.url}
                rel="noreferrer"
                target="_blank"
                className={`
                  shrink-0 transition-all duration-300
                  ${isTouchDevice ? 'snap-center opacity-90' : 'opacity-80 hover:opacity-100 hover:scale-110'}
                  px-2
                `}
                style={{ WebkitTapHighlightColor: "transparent" }}
                aria-label={t('pages.internships.partners.visit_label', { name: university.name })}
              >
                <Image
                  src={university.img}
                  alt={university.name}
                  width={180}
                  height={70}
                  className="h-12 md:h-20 max-w-[150px] md:max-w-[220px] object-contain"
                  priority={i < 6}
                />
              </a>
            ))}

            {/* Add extra copies for desktop continuous scrolling */}
            {!isTouchDevice && universities.map((university, i) => (
              <a
                key={`copy-${i}`}
                href={university.url}
                rel="noreferrer"
                target="_blank"
                className="shrink-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 px-2"
                style={{ WebkitTapHighlightColor: "transparent" }}
                aria-label={t('pages.internships.partners.visit_label', { name: university.name })}
              >
                <Image
                  src={university.img}
                  alt={university.name}
                  width={180}
                  height={70}
                  className="h-12 md:h-20 max-w-[150px] md:max-w-[220px] object-contain"
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

export default UniversityPartners;