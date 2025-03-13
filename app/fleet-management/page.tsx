"use client";
import React from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/fleet-electrification/components/HeroSection';
import PartnerLogos from '@/app/fleet-electrification/components/PartnerLogos';
import FinalCTASection from '@/app/fleet-electrification/components/FinalCTASection';
import FeaturesSection from '@/app/fleet-electrification/components/FeaturesSection';
import FleetManagementSection from '@/app/fleet-electrification/components/FleetManagementSection';
import FleetPotentialShowcase from '@/app/fleet-electrification/components/FleetPotentialShowcase';

export default function FleetElectrificationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PartnerLogos />
        <FleetPotentialShowcase />
        <FeaturesSection />
        <FleetManagementSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}