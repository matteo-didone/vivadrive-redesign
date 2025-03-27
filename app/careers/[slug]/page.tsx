"use client";

import React from "react";
import { getJobBySlug } from "@/app/data/jobs";
import JobPositionPage from "@/app/careers/components/JobPositionPage";
import { notFound } from "next/navigation";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface JobPositionPageProps {
  params: {
    slug: string;
  };
}

export default function JobPositionPageRoute({ params }: JobPositionPageProps) {
  const { slug } = params;
  const jobPosition = getJobBySlug(slug);

  if (!jobPosition) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <JobPositionPage jobPosition={jobPosition} />
      </main>
      <Footer />
    </div>
  );
}