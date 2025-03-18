"use client"; // Marks this as a client-side component
import React, { useState } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsroomHero from '@/app/newsroom/components/NewsroomHero';

export default function NewsroomPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <NewsroomHero />
      </main>
      <Footer />
    </div>
  );
}