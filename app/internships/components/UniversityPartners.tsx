"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const UniversityPartners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
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

  // Duplicate universities for continuous scrolling effect
  const allUniversities = [...universities, ...universities, ...universities];

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
            UNIVERSITY PARTNERS
          </h3>
        </div>

        <div
          className="w-full overflow-hidden relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            ref={scrollRef}
            className="flex items-center gap-10 overflow-x-scroll whitespace-nowrap py-12"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              "::-webkit-scrollbar": { display: "none" }
            }}
          >
            {allUniversities.map((university, i) => (
              <a
                key={i}
                href={university.url}
                rel="noreferrer"
                target="_blank"
                className="shrink-0 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110 px-2"
              >
                <Image
                  src={university.img}
                  alt={university.name}
                  width={220}
                  height={90}
                  className="h-20 max-w-[220px] object-contain"
                  style={{ margin: "0 2vw" }}
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

export default UniversityPartners;