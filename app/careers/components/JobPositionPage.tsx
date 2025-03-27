"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Calendar,
  ChevronUp,
  ArrowRight,
  Briefcase,
  MapPin,
  Check,
  X,
  Globe,
  Target,
  Award,
  Clock,
  Users,
  Building,
  TrendingUp,
  DollarSign,
  Heart
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import { JobPosition } from "@/app/careers/components/JobTypes";
import { useLanguage } from '@/contexts/LanguageContext';

interface JobPositionPageProps {
  jobPosition: JobPosition;
}

const JobPositionPage: React.FC<JobPositionPageProps> = ({ jobPosition }) => {
  const { t, currentLanguage } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Get translated field function
  const getTranslatedField = (fieldName: string, defaultValue: any): any => {
    // Try with different case variations of language code
    const languageVariations = [
      currentLanguage,
      currentLanguage.toLowerCase(),
      currentLanguage.toUpperCase()
    ];

    for (const langCode of languageVariations) {
      if (
        jobPosition.translations &&
        jobPosition.translations[langCode] &&
        jobPosition.translations[langCode][fieldName] !== undefined
      ) {
        return jobPosition.translations[langCode][fieldName];
      }
    }

    return defaultValue;
  };

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;

      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);

      // Show back to top button after scrolling down 300px
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set loaded state after mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Format HTML content with enhanced presentation
  const processContent = () => {
    const contentToProcess = getTranslatedField('description', jobPosition.description);
    if (!contentToProcess) return '';

    // Get content
    let content = contentToProcess.trim();

    // Process HTML content and return
    return content;
  };

  // Get location, either from translation or default
  const location = getTranslatedField('location', jobPosition.location);
  const title = getTranslatedField('title', jobPosition.title);
  const subtitle = getTranslatedField('subtitle', jobPosition.subtitle);
  const department = getTranslatedField('department', jobPosition.department);
  const requirements = getTranslatedField('requirements', jobPosition.requirements);
  const responsibilities = getTranslatedField('responsibilities', jobPosition.responsibilities);
  const benefits = getTranslatedField('benefits', jobPosition.benefits);

  if (!jobPosition) {
    return <div className="container mx-auto px-4 py-16">Job position not found</div>;
  }

  // Function to render the icon for a section
  const getSectionIcon = (sectionType) => {
    switch (sectionType) {
      case 'description': return <Briefcase className="h-5 w-5" />;
      case 'responsibilities': return <Target className="h-5 w-5" />;
      case 'requirements': return <Check className="h-5 w-5" />;
      case 'benefits': return <Award className="h-5 w-5" />;
      default: return <Briefcase className="h-5 w-5" />;
    }
  };

  return (
    <>
      {/* Reading progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-emerald-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-6 bottom-6 bg-emerald-500 text-white p-3 rounded-full shadow-lg z-30 transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      <article className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Job position header */}
        <header className="bg-gradient-to-b from-emerald-50 to-white pt-8 pb-8">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Back to jobs link */}
            <Link
              href="/careers"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group transition-all mb-8"
            >
              <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform mr-1" />
              {t('pages.careers.job.back_to_jobs')}
            </Link>

            {/* Job position metadata with icons - improved for mobile */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-6">
              <div className="inline-flex items-center text-sm bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full">
                <Briefcase className="h-4 w-4 mr-1.5" />
                <span>{jobPosition.type}</span>
              </div>
              <div className="inline-flex items-center text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                <MapPin className="h-4 w-4 mr-1.5" />
                <span>{location}</span>
              </div>
              <div className="inline-flex items-center text-sm bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full">
                <Calendar className="h-4 w-4 mr-1.5" />
                <time dateTime={jobPosition.postedDate}>{formatDate(jobPosition.postedDate)}</time>
              </div>
              <div className="inline-flex items-center text-sm bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full">
                <Users className="h-4 w-4 mr-1.5" />
                <span>{department}</span>
              </div>
            </div>

            {/* Job title - centered on mobile */}
            <h1 className="text-3xl md:text-5xl font-bold mb-3 max-w-3xl text-gray-900 text-center sm:text-left">
              {title}
            </h1>

            {/* Job subtitle if available - centered on mobile */}
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl text-center sm:text-left">
                {subtitle}
              </p>
            )}

            {/* Apply button - centered on mobile */}
            <div className="mt-8 flex justify-center sm:justify-start">
              <Link
                href={`/apply/${jobPosition.id}`}
                className="inline-flex items-center justify-center whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full transition-colors duration-300"
              >
                {t('pages.careers.job.apply_now')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </header>

        {/* Job position main content */}
        <main className="container mx-auto px-4 py-8 md:py-12 max-w-6xl" ref={contentRef}>
          {/* Sidebar for mobile - show first on small screens */}
          <div className="lg:hidden mb-8">
            {/* Apply now card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 overflow-hidden mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-3 text-center">
                {t('pages.careers.job.apply_for_this_position')}
              </h3>

              {/* Job quick info */}
              <div className="space-y-3 mb-6 flex flex-col items-center">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{jobPosition.type}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">
                    {t('pages.careers.job.posted_on')} {formatDate(jobPosition.postedDate)}
                  </span>
                </div>
              </div>

              {/* Salary info if available */}
              {jobPosition.salary && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6 text-center">
                  <h4 className="font-medium text-gray-800 mb-1">
                    {t('pages.careers.job.salary_range')}
                  </h4>
                  <p className="text-lg font-semibold text-emerald-600">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: jobPosition.salary.currency })
                      .format(jobPosition.salary.min)} -
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: jobPosition.salary.currency })
                      .format(jobPosition.salary.max)}
                  </p>
                </div>
              )}

              {/* Apply button */}
              <div className="flex justify-center">
                <Link
                  href={`/apply/${jobPosition.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 text-base rounded-full transition-colors duration-300"
                >
                  {t('pages.careers.job.apply_now')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content area - job description (left side) */}
            <div className="lg:col-span-2">
              {/* Job Description */}
              <section className="mb-12">
                <div className="flex items-center mb-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    {getSectionIcon('description')}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t('pages.careers.job.job_description')}
                  </h2>
                </div>
                <div className="border-t-2 border-emerald-500 w-16 mb-6 mx-auto lg:mx-0"></div>
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-emerald-600"
                  dangerouslySetInnerHTML={{ __html: processContent() }}
                />
              </section>

              {/* Responsibilities */}
              <section className="mb-12">
                <div className="flex items-center mb-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    {getSectionIcon('responsibilities')}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t('pages.careers.job.responsibilities')}
                  </h2>
                </div>
                <div className="border-t-2 border-emerald-500 w-16 mb-6 mx-auto lg:mx-0"></div>
                <ul className="space-y-4">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <span className="flex-shrink-0 h-6 w-6 text-emerald-500 mr-3">
                        <Check className="h-6 w-6" />
                      </span>
                      <span className="text-gray-700">{responsibility.text}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section className="mb-12">
                <div className="flex items-center mb-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    {getSectionIcon('requirements')}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t('pages.careers.job.requirements')}
                  </h2>
                </div>
                <div className="border-t-2 border-emerald-500 w-16 mb-6 mx-auto lg:mx-0"></div>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <span className={`flex-shrink-0 h-6 w-6 mr-3 ${requirement.required ? 'text-emerald-500' : 'text-gray-400'}`}>
                        <Check className="h-6 w-6" />
                      </span>
                      <div>
                        <span className={`${requirement.required ? 'text-gray-700 font-medium' : 'text-gray-600'}`}>
                          {requirement.text}
                        </span>
                        {!requirement.required && (
                          <span className="ml-2 text-sm text-gray-500 italic">
                            ({t('pages.careers.job.preferred')})
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-12">
                <div className="flex items-center mb-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t('pages.careers.job.benefits')}
                  </h2>
                </div>
                <div className="border-t-2 border-emerald-500 w-16 mb-6 mx-auto lg:mx-0"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="text-emerald-600">
                          {benefit.text.includes("office") ? (
                            <Building className="h-5 w-5" />
                          ) : benefit.text.includes("International") ? (
                            <Globe className="h-5 w-5" />
                          ) : benefit.text.includes("projects") ? (
                            <Briefcase className="h-5 w-5" />
                          ) : benefit.text.includes("growth") ? (
                            <TrendingUp className="h-5 w-5" />
                          ) : benefit.text.includes("Flexible") || benefit.text.includes("work-life") ? (
                            <Clock className="h-5 w-5" />
                          ) : benefit.text.includes("team") ? (
                            <Users className="h-5 w-5" />
                          ) : benefit.text.includes("salary") ? (
                            <DollarSign className="h-5 w-5" />
                          ) : benefit.text.includes("healthcare") ? (
                            <Heart className="h-5 w-5" />
                          ) : (
                            <Award className="h-5 w-5" />
                          )}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-700">{benefit.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right sidebar - hidden on mobile (we show it at the top) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Apply now card */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 overflow-hidden">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-3">
                    {t('pages.careers.job.apply_for_this_position')}
                  </h3>

                  {/* Job quick info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">{location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">{jobPosition.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">
                        {t('pages.careers.job.posted_on')} {formatDate(jobPosition.postedDate)}
                      </span>
                    </div>
                  </div>

                  {/* Salary info if available */}
                  {jobPosition.salary && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-medium text-gray-800 mb-1">
                        {t('pages.careers.job.salary_range')}
                      </h4>
                      <p className="text-lg font-semibold text-emerald-600">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: jobPosition.salary.currency })
                          .format(jobPosition.salary.min)} -
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: jobPosition.salary.currency })
                          .format(jobPosition.salary.max)}
                      </p>
                    </div>
                  )}

                  {/* Apply button */}
                  <Link
                    href={`/apply/${jobPosition.id}`}
                    className="w-full inline-flex items-center justify-center whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 text-base rounded-full transition-colors duration-300"
                  >
                    {t('pages.careers.job.apply_now')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>

                {/* Our Values card */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-3">
                    {t('pages.careers.job.our_values')}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-emerald-600" />
                      </div>
                      <p className="text-gray-700">{t('pages.careers.job.values.sustainable')}</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-emerald-600" />
                      </div>
                      <p className="text-gray-700">{t('pages.careers.job.values.collaborative')}</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <Globe className="h-4 w-4 text-emerald-600" />
                      </div>
                      <p className="text-gray-700">{t('pages.careers.job.values.global')}</p>
                    </div>
                  </div>
                </div>

                {/* Company info card */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-3">
                    {t('pages.careers.job.about_company')}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {t('pages.careers.job.company_description')}
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-800">{t('pages.careers.job.our_main_office')}</h4>
                    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.041112300377!2d21.024688599999998!3d52.24263690000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf26f285e7b%3A0xd78a9cca21dd3cf4!2sVivadrive%20Polska!5e0!3m2!1spl!2spl!4v1743094025756!5m2!1spl!2spl"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 text-sm text-emerald-600 flex items-center justify-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <a
                        href="https://maps.app.goo.gl/FWQ98RDhkWFdpQPr9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {t('pages.careers.job.view_on_maps')}
                      </a>
                    </div>
                    <p className="text-gray-700 text-sm">
                      VivaDrive Poland Sp. z o.o.<br />
                      ul. Złota 59<br />
                      00-120 Warsaw, Poland
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional mobile-only cards */}
          <div className="lg:hidden mt-8 space-y-8">
            {/* Our Values card for mobile */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-3 text-center">
                {t('pages.careers.job.our_values')}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-gray-700">{t('pages.careers.job.values.sustainable')}</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-gray-700">{t('pages.careers.job.values.collaborative')}</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <Globe className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-gray-700">{t('pages.careers.job.values.global')}</p>
                </div>
              </div>
            </div>

            {/* Company info card for mobile */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-3 text-center">
                {t('pages.careers.job.about_company')}
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                {t('pages.careers.job.company_description')}
              </p>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800 text-center">{t('pages.careers.job.our_main_office')}</h4>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.041112300377!2d21.024688599999998!3d52.24263690000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf26f285e7b%3A0xd78a9cca21dd3cf4!2sVivadrive%20Polska!5e0!3m2!1spl!2spl!4v1743094025756!5m2!1spl!2spl"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="bg-gray-50 px-4 py-2 text-sm text-emerald-600 flex items-center justify-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <a
                    href="https://maps.app.goo.gl/FWQ98RDhkWFdpQPr9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {t('pages.careers.job.view_on_maps')}
                  </a>
                </div>
                <p className="text-gray-700 text-sm text-center">
                  VivaDrive Poland Sp. z o.o.<br />
                  ul. Złota 59<br />
                  00-120 Warsaw, Poland
                </p>
              </div>
            </div>
          </div>

          {/* Navigation footer */}
          <div className="flex justify-center sm:justify-between items-center my-12 pt-8 border-t border-gray-200">
            <Link
              href="/careers"
              className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              {t('pages.careers.job.back_to_all_positions')}
            </Link>

            {/* Mobile apply button at bottom for easy access */}
            <div className="hidden sm:block">
              <Link
                href={`/apply/${jobPosition.id}`}
                className="inline-flex items-center justify-center whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 text-base rounded-full transition-colors duration-300"
              >
                {t('pages.careers.job.apply_now')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Fixed apply button for mobile (always visible when scrolling) */}
          <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg z-20">
            <Link
              href={`/apply/${jobPosition.id}`}
              className="w-full inline-flex items-center justify-center whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 text-base rounded-full transition-colors duration-300"
            >
              {t('pages.careers.job.apply_now')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </main>
      </article>
    </>
  );
};

export default JobPositionPage;