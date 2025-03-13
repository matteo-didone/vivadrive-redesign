"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PartnerLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
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
    <div className="w-full py-12 bg-white dark:bg-gray-950">
      <div className="text-center mb-10">
        <h3 className="text-base font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          OUR PARTNERS & INTEGRATIONS
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
            msOverflowStyle: "none"
          }}
        >
          {allPartners.map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              rel="noreferrer"
              target="_blank"
              className="shrink-0 transition-all duration-300 hover:opacity-100 opacity-70 grayscale hover:grayscale-0 hover:scale-110 px-2"
            >
              <Image
                src={partner.img}
                alt={partner.name}
                width={140}
                height={40}
                className="h-12 max-w-[180px] object-contain"
              />
            </a>
          ))}
        </div>

        {/* Gradient fading effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent dark:from-gray-950 dark:to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent dark:from-gray-950 dark:to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default PartnerLogos;