"use client";

import React, { useState } from "react";
import Header from '@/components/Header';
import HeroSection from '@/components/homepage-components/HeroSection';
import MainContent from '@/components/homepage-components/MainContent';
import Footer from '@/components/Footer';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <MainContent />
      <Footer />
    </div>
  );
}