"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [expandedSection, setExpandedSection] = useState(null);

    const footerLinks = {
        solutions: [
            { label: t('footer.solutions.items.fleet_electrification'), href: '/fleet-electrification' },
            { label: t('footer.solutions.items.fleet_management'), href: '/fleet-management' },
            { label: t('footer.solutions.items.charging_infrastructure'), href: '#' },
            { label: t('footer.solutions.items.sustainability_reporting'), href: '#' },
        ],
        resources: [
            { label: t('footer.resources.items.blog'), href: '#' },
            { label: t('footer.resources.items.case_studies'), href: '#' },
            { label: t('footer.resources.items.guides'), href: '#' },
            { label: t('footer.resources.items.webinars'), href: '#' },
        ],
        company: [
            { label: t('footer.company.items.about'), href: '/about' },
            { label: t('footer.company.items.careers'), href: '/careers' },
            { label: t('footer.company.items.internships'), href: '/internships' },
            { label: t('footer.company.items.newsroom'), href: '/newsroom' },
        ],
    };

    const toggleSection = (section) => {
        if (expandedSection === section) {
            setExpandedSection(null);
        } else {
            setExpandedSection(section);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribed with email:', email);
        // Reset form
        setEmail('');
        // Here you would typically show a success message
        alert(t('footer.newsletter.success_message'));
    };

    return (
        <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 border-t border-gray-100 dark:border-gray-800 relative">
            {/* Subtle pattern overlay for visual depth */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300b074' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '20px 20px'
                }}
                aria-hidden="true"
            ></div>

            {/* Main footer content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info Section */}
                    <div className="lg:col-span-1 flex flex-col items-center md:items-start">
                        <Link
                            href="/"
                            className="inline-block mb-6 transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md"
                        >
                            <div className="h-12 w-auto">
                                <img
                                    src="/vivadrive-logo-dark.png"
                                    alt="VivaDrive Logo"
                                    className="h-full w-auto dark:hidden"
                                />
                                <img
                                    src="/vivadrive-logo-light.png"
                                    alt="VivaDrive Logo"
                                    className="h-full w-auto hidden dark:block"
                                />
                            </div>
                        </Link>
                        <div className="text-gray-600 dark:text-gray-400 space-y-4 mb-8 max-w-md text-center md:text-left">
                            <p>
                                {t('footer.company_description')}
                            </p>
                            <div className="pt-2 text-sm space-y-1">
                                <p className="font-semibold text-gray-700 dark:text-gray-300">{t('footer.company_info.name')}</p>
                                <p>{t('footer.company_info.address1')}</p>
                                <p>{t('footer.company_info.address2')}</p>
                                <p>{t('footer.company_info.vat')}</p>
                            </div>
                        </div>

                        {/* Newsletter signup with improved width and positioning */}
                        <div className="mb-8 w-full max-w-md mx-auto md:mx-0">
                            <p className="font-semibold mb-3 text-center md:text-left">{t('footer.newsletter.title')}</p>
                            <form onSubmit={handleSubmit} className="flex w-full">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('footer.newsletter.placeholder')}
                                    className="flex-grow min-w-0 px-4 h-12 border border-gray-200 dark:border-gray-700 rounded-l-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm transition-all duration-300 focus:shadow-md"
                                    required
                                    aria-label="Email for newsletter"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 text-white font-medium h-12 px-4 sm:px-5 rounded-r-full transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                    aria-label="Subscribe to newsletter"
                                >
                                    <span className="hidden sm:inline">{t('footer.newsletter.subscribe')}</span>
                                    <ChevronRight className="h-4 w-4 sm:ml-2" />
                                </button>
                            </form>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center md:text-left">
                                {t('footer.newsletter.privacy_notice')}
                            </p>
                        </div>

                        <div className="flex space-x-5 mt-4 justify-center md:justify-start">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-full p-1"
                                aria-label="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-full p-1"
                                aria-label="Facebook"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Desktop Regular Links */}
                    <div className="hidden md:block">
                        <h4 className="font-semibold text-lg mb-6 pb-1 border-b-2 border-emerald-500 inline-block">
                            {t('footer.solutions.title')}
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 hover:translate-x-1 inline-block focus:outline-none focus:text-emerald-500 dark:focus:text-emerald-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <h4 className="font-semibold text-lg mb-6 pb-1 border-b-2 border-emerald-500 inline-block">
                            {t('footer.resources.title')}
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 hover:translate-x-1 inline-block focus:outline-none focus:text-emerald-500 dark:focus:text-emerald-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <h4 className="font-semibold text-lg mb-6 pb-1 border-b-2 border-emerald-500 inline-block">
                            {t('footer.company.title')}
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 hover:translate-x-1 inline-block focus:outline-none focus:text-emerald-500 dark:focus:text-emerald-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Accordion Menu */}
                    <div className="md:hidden col-span-full space-y-4 max-w-md mx-auto w-full">
                        {/* Solutions Section */}
                        <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
                            <button
                                onClick={() => toggleSection('solutions')}
                                className="flex justify-between items-center w-full text-left font-semibold text-lg pb-2"
                            >
                                <span>{t('footer.solutions.title')}</span>
                                <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'solutions' ? 'rotate-180' : ''}`} />
                            </button>
                            {expandedSection === 'solutions' && (
                                <ul className="mt-4 space-y-3 pl-2">
                                    {footerLinks.solutions.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 inline-block"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Resources Section */}
                        <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
                            <button
                                onClick={() => toggleSection('resources')}
                                className="flex justify-between items-center w-full text-left font-semibold text-lg pb-2"
                            >
                                <span>{t('footer.resources.title')}</span>
                                <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'resources' ? 'rotate-180' : ''}`} />
                            </button>
                            {expandedSection === 'resources' && (
                                <ul className="mt-4 space-y-3 pl-2">
                                    {footerLinks.resources.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 inline-block"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Company Section */}
                        <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
                            <button
                                onClick={() => toggleSection('company')}
                                className="flex justify-between items-center w-full text-left font-semibold text-lg pb-2"
                            >
                                <span>{t('footer.company.title')}</span>
                                <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'company' ? 'rotate-180' : ''}`} />
                            </button>
                            {expandedSection === 'company' && (
                                <ul className="mt-4 space-y-3 pl-2">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 inline-block"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                {/* Partners section with improved responsiveness */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <h4 className="font-semibold text-lg mb-8 text-center">{t('footer.partners.title')}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                        {[
                            { src: '/footer-logos/urban-mobility.png', alt: 'Urban Mobility', height: 16 },
                            { src: '/footer-logos/ncbr.png', alt: 'NCBR', height: 16 },
                            { src: '/footer-logos/space-bridge-fund.png', alt: 'Space Bridge Fund', height: 16 }
                        ].map((logo) => (
                            <div
                                key={logo.alt}
                                className="flex items-center justify-center h-12 sm:h-16 transform transition-transform duration-300 hover:scale-105 filter hover:brightness-110"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-full w-auto max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center mt-8">
                        {[
                            { src: '/footer-logos/eu-funds.svg', alt: 'European Funds', height: 12 },
                            { src: '/footer-logos/poland-republic-of.svg', alt: 'Republic of Poland', height: 12 },
                            { src: '/footer-logos/eu-structural-funds.svg', alt: 'EU Structural Funds', height: 12 }
                        ].map((logo) => (
                            <div
                                key={logo.alt}
                                className="flex items-center justify-center h-10 sm:h-12 transform transition-transform duration-300 hover:scale-105 filter hover:brightness-110"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-full w-auto max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom section with improved responsiveness */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
                        © {currentYear} VivaDrive Polska sp. z o.o. {t('footer.legal.copyright')}
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
                        {[
                            { label: t('footer.legal.terms'), href: '/terms-of-service' },
                            { label: t('footer.legal.privacy'), href: '/privacy-policy' },
                            { label: t('footer.legal.cookies'), href: '/cookie-policy' }
                        ].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:bg-emerald-500 after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:text-emerald-500 dark:focus:text-emerald-400"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;