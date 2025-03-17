"use client";
import React from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/careers/components/HeroSection';
import CultureAndPerksSection from '@/app/careers/components/CultureAndPerksSection';
import OpenPositionsSection from '@/app/careers/components/OpenPositionsSection';

export default function FleetElectrificationPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
            <Header />
            <main className="flex-1">
                <HeroSection />
                <CultureAndPerksSection />
                <OpenPositionsSection />
            </main>
            <Footer />
        </div>
    );
}