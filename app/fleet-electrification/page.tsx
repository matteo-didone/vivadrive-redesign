"use client";

import React from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/fleet-electrification/components/HeroSection';
import PartnerLogos from '@/app/fleet-electrification/components/PartnerLogos';
import ProcessSection from '@/app/fleet-electrification/components/ProcessSection';
import CTASection from '@/app/fleet-electrification/components/CTASection';
import SolutionsSection from '@/app/fleet-electrification/components/SolutionsSection';
import BenefitsSection from '@/app/fleet-electrification/components/BenefitsSection';
import FinalCTASection from '@/app/fleet-electrification/components/FinalCTASection';

export default function FleetElectrificationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PartnerLogos />
        <ProcessSection />
        <CTASection />
        <SolutionsSection />
        <BenefitsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}