"use client";
import React from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/about/components/HeroSection';
import WhatWeDoSection from '@/app/about/components/WhatWeDoSection';
import PhilosophySection from '@/app/about/components/PhilosophySection';
import PartnerLogos from '@/app/about/components/PartnerLogos';
import OurStory from '@/app/about/components/OurStory';
import TeamSection from '@/app/about/components/TeamSection';
import JoinOurTeamSection from '@/app/about/components/JoinOurTeamSection';

export default function FleetElectrificationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatWeDoSection />
        <PhilosophySection />
        <PartnerLogos />
        <OurStory />
        <TeamSection />
        <JoinOurTeamSection />
      </main>
      <Footer />
    </div>
  );
}