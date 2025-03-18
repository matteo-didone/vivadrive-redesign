"use client";
import React from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InternshipsHeroSection from '@/app/internships/components/InternshipsHeroSection';
import UniversityPartners from '@/app/internships/components/UniversityPartners';
import InternTestimonials from '@/app/internships/components/InternTestimonials';

export default function InternshipsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <InternshipsHeroSection />
        <UniversityPartners />
        <InternTestimonials />
      </main>
      <Footer />
    </div>
  );
}