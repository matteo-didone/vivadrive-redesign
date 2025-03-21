"use client"; // Marks this as a client-side component
import React, { useState, useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsroomHero from '@/app/newsroom/components/NewsroomHero';
import NewsGrid from '@/app/newsroom/components/NewsGrid';
import { getAllArticles } from '@/app/data/articles';

export default function NewsroomPage() {
  // Get all articles from your data file
  const allArticles = getAllArticles();
  
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <NewsroomHero />
        <NewsGrid articles={allArticles} />
      </main>
      <Footer />
    </div>
  );
}