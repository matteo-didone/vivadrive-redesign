"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PartnerLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Partners con loghi bianchi per sfondo verde
  const partners = [
    { url: "https://scaleup.kpt.krakow.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1657546628/VivaDrive/Logos/Partners/KPTwhite_h0kgio.png", name: "KPT ScaleUP" },
    { url: "https://www.xeurope.eu/", img: "https://res.cloudinary.com/efer/image/upload/v1657546374/VivaDrive/Logos/Partners/XEuropeWhite_r6tv9w.png", name: "X Europe" },
    { url: "http://www.esa.int/", img: "https://res.cloudinary.com/efer/image/upload/v1657548543/VivaDrive/Logos/Partners/ESAwhite_oev27d.png", name: "ESA" },
    { url: "https://www.imec-int.com/en", img: "https://res.cloudinary.com/efer/image/upload/v1657548126/VivaDrive/Logos/Partners/IMECwhite_tzs560.png", name: "IMEC" },
    { url: "https://www.uhasselt.be/", img: "https://res.cloudinary.com/efer/image/upload/v1657547738/VivaDrive/Logos/Partners/UHASSELTwhite_l8yzep.png", name: "UHASSELT" },
    { url: "https://www.tauron.pl/tauron/tauron-innowacje/wspolpraca-ze-startupami/pilot-maker", img: "https://res.cloudinary.com/efer/image/upload/v1657547320/VivaDrive/Logos/Partners/PILOTMAKERwhite_e75gdw.png", name: "PILOT MAKER" },
    { url: "https://www.gov.pl/web/ncbr", img: "/about/ncbr.png", name: "NCBR" }, // Logo locale
    { url: "https://mitefcee.org/", img: "/about/mit-logo.png", name: "MIT" }, // Logo locale
    { url: "https://www.nissanusa.com/", img: "/about/nissan.png", name: "Nissan" }, // Logo locale
    { url: "https://www.freshworks.com/", img: "https://res.cloudinary.com/efer/image/upload/v1657547052/VivaDrive/Logos/Partners/FRESHWORKSwhite_udar1k.png", name: "Freshworks" },
    { url: "https://www.ovhcloud.com/pl/", img: "https://res.cloudinary.com/efer/image/upload/v1657545987/VivaDrive/Logos/Partners/OVHwhite_acf6ah.png", name: "OVH Cloud" },
    { url: "https://pspa.com.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1657545321/VivaDrive/Logos/Partners/logoPSPAWHITE_fezgaa.png", name: "PSPA" },
    { url: "https://www.geotab.com/", img: "https://res.cloudinary.com/efer/image/upload/v1684143976/geo_vxzoef.png", name: "Geotab" },
    { url: "https://ekoenergetyka.com.pl/", img: "https://res.cloudinary.com/efer/image/upload/v1684229430/ekoeene-removebg-preview_lgq6bv.png", name: "Ekoenergetyka" }
  ];

  // Duplicate partners for continuous scrolling effect
  const allPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initial scroll position - start from the second set of partners
    scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;

    // Animation function for smooth scrolling
    const animateScroll = () => {
      if (scrollRef.current && !isHovering) {
        // If we reach the third set, jump back to the first set (invisible transition)
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth * 2 / 3)) {
          scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3 - 100;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };

    // Start animation
    const animationId = setInterval(animateScroll, 30);

    return () => {
      clearInterval(animationId);
    };
  }, [isHovering]);

  return (
    <div className="w-full py-12 bg-emerald-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-base font-medium text-white uppercase tracking-wider">
            OUR PARTNERS
          </h3>
        </div>

        <div
          className="w-full overflow-hidden relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            ref={scrollRef}
            className="flex items-center gap-16 overflow-x-scroll whitespace-nowrap py-8"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              "::-webkit-scrollbar": { display: "none" }
            }}
          >
            {allPartners.map((partner, i) => (
              <a
                key={i}
                href={partner.url}
                rel="noreferrer"
                target="_blank"
                className="shrink-0 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110 px-2"
              >
                <Image
                  src={partner.img}
                  alt={partner.name}
                  width={140}
                  height={40}
                  className="h-10 max-w-[140px] object-contain"
                />
              </a>
            ))}
          </div>

          {/* Gradient fading effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-emerald-500 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-emerald-500 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;