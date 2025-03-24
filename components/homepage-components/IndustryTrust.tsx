"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';

const IndustryTrust = () => {
  const { t } = useLanguage();
  const awards = [
    {
      name: "Central European Startup Awards",
      image: "/partner-logos/cesa.png",
      width: 200,
      height: 100,
    },
    {
      name: "Fleet Derby 2022 Award",
      image: "/partner-logos/fd22.png",
      width: 130,
      height: 130,
    },
    {
      name: "Fleet Derby 2023 Award",
      image: "/partner-logos/fd23.png",
      width: 130,
      height: 130,
    },
    {
      name: "MIT Enterprise Forum",
      image: "/partner-logos/mit-logo.png",
      width: 150,
      height: 150,
    },
    {
      name: "Polish Tech Day",
      image: "/partner-logos/polish-tech-day.png",
      width: 150,
      height: 90,
    },
  ];
  return (
    <section className="w-full py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <h3 className="text-center text-base font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-14">
          {t('awards.heading')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 place-items-center">
          {awards.map((award, index) => (
            <div key={index} className="group flex justify-center transition-all duration-300 hover:scale-105">
              <Image
                src={award.image}
                alt={award.name}
                width={award.width}
                height={award.height}
                className="h-28 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default IndustryTrust;