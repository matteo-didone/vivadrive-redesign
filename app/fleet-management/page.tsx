"use client";
import React from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/fleet-management/components/HeroSection';
import PartnerLogos from '@/app/fleet-electrification/components/PartnerLogos';
import FleetPotentialShowcase from '@/app/fleet-management/components/FleetPotentialShowcase';
import FeatureSection from '@/app/fleet-management/components/FeatureSection';
import VivaDriveFleetSolutions from '@/app/fleet-management/components/VivaDriveFleetSolutions';
import CostReductionSection from '@/app/fleet-management/components/CostReductionSection';
import SuperchargeCTA from '@/app/fleet-management/components/SuperchargeCTA';


export default function FleetElectrificationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PartnerLogos />
        <FleetPotentialShowcase />
        <FeatureSection />
        <VivaDriveFleetSolutions />
        <CostReductionSection />
        <SuperchargeCTA />
      </main>
      <Footer />
    </div>
  );
}