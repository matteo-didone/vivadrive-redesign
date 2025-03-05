"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    const navLinks = [
        { href: '#solutions', label: 'nav.solutions' },
        { href: '#benefits', label: 'nav.benefits' },
        { href: '#how-it-works', label: 'nav.how-it-works' },
        { href: '#resources', label: 'nav.resources' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 transition-all duration-300 ${scrolled ? 'h-14 shadow-md' : 'h-16'
                }`}
        >
            <div className="container flex h-full items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 z-20 ml-1">
                        <Image
                            src="/vivadrive-logo-dark.png"
                            alt="VivaDrive Logo"
                            width={scrolled ? 130 : 150}
                            height={scrolled ? 35 : 40}
                            priority
                            className="dark:hidden transition-all duration-300"
                        />
                        <Image
                            src="/vivadrive-logo-light.png"
                            alt="VivaDrive Logo"
                            width={scrolled ? 130 : 150}
                            height={scrolled ? 35 : 40}
                            priority
                            className="hidden dark:block transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium hover:text-primary relative group"
                            >
                                {t(link.label)}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Language Switcher Component */}
                    <div className="hidden md:block">
                        <LanguageSwitcher />
                    </div>

                    <Button
                        variant="ghost"
                        className="hidden md:flex hover:bg-primary/10 dark:hover:bg-primary/20"
                    >
                        {t('button.login')}
                    </Button>

                    <Button
                        className={`shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300 ${scrolled ? 'text-sm px-4 py-1' : 'px-5 py-2'
                            }`}
                    >
                        {t('button.contact')}
                    </Button>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-md"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-white dark:bg-gray-950 z-10 pt-16 px-4">
                    <nav className="flex flex-col space-y-6 text-lg font-medium mt-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="p-2 border-b border-gray-100 dark:border-gray-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t(link.label)}
                            </Link>
                        ))}

                        <div className="p-2 border-b border-gray-100 dark:border-gray-800">
                            <LanguageSwitcher variant="mobile" />
                        </div>

                        <div className="pt-4 flex flex-col space-y-3">
                            <Button
                                variant="outline"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('button.login')}
                            </Button>
                            <Button onClick={() => setMobileMenuOpen(false)}>
                                {t('button.contact')}
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;