"use client";
import React from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InternshipsHeroSection from '@/app/internships/components/InternshipsHeroSection';
import UniversityPartners from '@/app/internships/components/UniversityPartners';
import InternTestimonials from '@/app/internships/components/InternTestimonials';
import WhatIsVivaDrive from '@/app/internships/components/WhatIsVivaDrive';
import WhyJoinVivaDrive from '@/app/internships/components/WhyJoinVivaDrive';
import AlumniGrid from '@/app/internships/components/AlumniGrid';

export default function InternshipsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <InternshipsHeroSection />
        <UniversityPartners />
        <InternTestimonials />
        <WhatIsVivaDrive />
        <WhyJoinVivaDrive />
        <AlumniGrid />
      </main>
      <Footer />
    </div>
  );
}