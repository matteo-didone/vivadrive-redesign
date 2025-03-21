"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ChevronRight,
    ArrowRight,
    Globe,
    Menu,
    X,
    ChevronDown,
    User,
    Users,
    GraduationCap,
    Newspaper,
    CarFront,
    Zap,
    BatteryCharging
} from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

// Define the cn utility function if you don't have it
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("EN");
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };
        
        // Initial calculation
        updateHeaderHeight();
        
        // Set up event listeners
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateHeaderHeight);
        
        // Re-calculate when scroll state changes
        updateHeaderHeight();
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateHeaderHeight);
        };
    }, [scrolled]);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    // Main navigation structure
    const mainNav = [
        {
            title: "Fleet Electrification",
            href: "/fleet-electrification",
            description: "Transform your fleet with AI-driven electrification solutions",
            icon: <Zap className="h-5 w-5 text-emerald-500" />
        },
        {
            title: "Fleet Management",
            href: "/fleet-management",
            description: "Comprehensive tools for managing your electric vehicle fleet",
            icon: <CarFront className="h-5 w-5 text-emerald-500" />
        }
    ];

    // Company submenu structure
    const companyItems = [
        {
            title: "About",
            href: "/about",
            description: "Learn about our mission and vision",
            icon: <User className="h-5 w-5 text-emerald-500" />
        },
        {
            title: "Careers",
            href: "/careers",
            description: "Join our growing team",
            icon: <Users className="h-5 w-5 text-emerald-500" />
        },
        {
            title: "Internships",
            href: "/internships",
            description: "Opportunities for students",
            icon: <GraduationCap className="h-5 w-5 text-emerald-500" />
        },
        {
            title: "Newsroom",
            href: "/newsroom",
            description: "Latest updates and press releases",
            icon: <Newspaper className="h-5 w-5 text-emerald-500" />
        },
    ];

    // Map all navigation items for mobile menu
    const allNavItems = [
        ...mainNav,
        {
            title: "Company",
            items: companyItems
        }
    ];

    // Custom class for the underline hover effect
    const underlineHoverClass = "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-4/5";

    return (
        <>
            <header
                ref={headerRef}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
                    scrolled
                        ? "border-b border-gray-200 shadow-sm bg-white/70 backdrop-blur-xl"
                        : "bg-white",
                    "supports-backdrop-blur:bg-white/80 supports-backdrop-blur:backdrop-blur-xl"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <div className={cn(
                        "flex items-center justify-between transition-all duration-300",
                        scrolled ? "h-16" : "h-20"
                    )}>
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/vivadrive-logo-dark.png"
                                    alt="VivaDrive Logo"
                                    width={scrolled ? 140 : 160}
                                    height={scrolled ? 35 : 40}
                                    className="transition-all duration-300"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:items-center md:justify-between md:flex-1 md:ml-10">
                            <NavigationMenu>
                                <NavigationMenuList className="gap-4">
                                    {mainNav.map((item) => (
                                        <NavigationMenuItem key={item.title}>
                                            <Link href={item.href} legacyBehavior passHref>
                                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), underlineHoverClass)}>
                                                    {item.title}
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    ))}

                                    {/* Company dropdown - improved styling */}
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className={underlineHoverClass}>Company</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-[550px] lg:w-[600px] p-6 rounded-lg">
                                                <div className="grid grid-cols-2 gap-6">
                                                    {companyItems.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href}
                                                            className="group flex flex-col gap-2 rounded-md p-3 hover:bg-gray-50 transition-colors duration-200"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors duration-200">
                                                                    {item.icon}
                                                                </div>
                                                                <div className="font-medium">{item.title}</div>
                                                            </div>
                                                            <div className="text-sm text-gray-500">{item.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="mt-6 pt-6 border-t border-gray-100">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm text-gray-500">Need help or have questions?</p>
                                                        <Button variant="link" className="text-emerald-600 p-0 h-auto font-medium text-sm">
                                                            Contact Support
                                                            <ChevronRight className="ml-1 h-3 w-3" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                            <div className="flex items-center gap-3">
                                {/* Language Switcher */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm" className={cn("h-8 gap-1 px-2", underlineHoverClass)}>
                                            <Globe className="h-4 w-4 text-emerald-500" />
                                            <span className="text-sm font-medium">{currentLanguage}</span>
                                            <ChevronDown className="h-3 w-3 opacity-50" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-32 rounded-xl border-0 shadow-xl">
                                        <DropdownMenuItem
                                            className={cn(
                                                "flex items-center gap-2 text-sm cursor-pointer",
                                                currentLanguage === "EN" && "bg-gray-50"
                                            )}
                                            onClick={() => setCurrentLanguage("EN")}
                                        >
                                            <span className={currentLanguage === "EN" ? "font-medium text-emerald-600" : ""}>
                                                English
                                            </span>
                                            {currentLanguage === "EN" && (
                                                <ChevronRight className="ml-auto h-4 w-4 text-emerald-500" />
                                            )}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className={cn(
                                                "flex items-center gap-2 text-sm cursor-pointer",
                                                currentLanguage === "PL" && "bg-gray-50"
                                            )}
                                            onClick={() => setCurrentLanguage("PL")}
                                        >
                                            <span className={currentLanguage === "PL" ? "font-medium text-emerald-600" : ""}>
                                                Polski
                                            </span>
                                            {currentLanguage === "PL" && (
                                                <ChevronRight className="ml-auto h-4 w-4 text-emerald-500" />
                                            )}
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <div className="h-5 w-px bg-gray-200"></div>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={cn("h-8 px-3 text-sm font-medium", underlineHoverClass)}
                                >
                                    Log In
                                </Button>

                                <Link href="/contact-us">
                                    <Button
                                        className="inline-flex items-center text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-10 gap-2 shadow-lg shadow-emerald-500/20 bg-gradient-to-r from-emerald-500 to-emerald-500/90 hover:from-emerald-500/90 hover:to-emerald-500 font-medium transition-all hover:scale-105 rounded-full"
                                    >
                                        Contact Sales
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Invisible spacer to prevent content from being hidden behind fixed header */}
            <div className={cn("w-full", scrolled ? "h-16" : "h-20")}></div>

            {/* Mobile Menu - Using exact header height for positioning */}
            {mobileMenuOpen && (
                <div 
                    style={{ top: `${headerHeight}px` }}
                    className="fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur-sm overflow-y-auto transition-all duration-300 animate-in slide-in-from-top"
                >
                    <div className="container mx-auto px-4 py-6 space-y-6">
                        <nav className="space-y-6">
                            {allNavItems.map((section, idx) =>
                                section.items ? (
                                    <div key={idx} className="space-y-3">
                                        <h3 className="font-semibold text-sm text-emerald-600 uppercase tracking-wider">
                                            {section.title}
                                        </h3>
                                        <div className="grid grid-cols-1 gap-2 pl-1">
                                            {section.items.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-200 relative group"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors duration-200">
                                                        {item.icon}
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm font-medium group-hover:text-emerald-600 transition-colors duration-200">{item.title}</p>
                                                        <p className="text-xs text-gray-500">{item.description}</p>
                                                    </div>
                                                    <div className="absolute bottom-0 left-12 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-1/2"></div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={section.title}
                                        href={section.href}
                                        className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-200 relative group"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors duration-200">
                                            {section.icon}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium group-hover:text-emerald-600 transition-colors duration-200">{section.title}</p>
                                            <p className="text-xs text-gray-500">{section.description}</p>
                                        </div>
                                        <div className="absolute bottom-0 left-12 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-1/2"></div>
                                    </Link>
                                )
                            )}
                        </nav>

                        <div className="border-t border-gray-200 pt-5 space-y-4">
                            <div className="flex items-center gap-4">
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "flex-1 justify-center",
                                        currentLanguage === "EN" && "border-emerald-500 text-emerald-600 bg-emerald-50"
                                    )}
                                    onClick={() => setCurrentLanguage("EN")}
                                >
                                    English
                                </Button>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "flex-1 justify-center",
                                        currentLanguage === "PL" && "border-emerald-500 text-emerald-600 bg-emerald-50"
                                    )}
                                    onClick={() => setCurrentLanguage("PL")}
                                >
                                    Polski
                                </Button>
                            </div>

                            <div className="flex flex-col space-y-3">
                                <Button variant="outline" className="w-full justify-center">
                                    Log In
                                </Button>

                                <Link href="/contact-us">
                                    <Button
                                        className="w-full justify-center inline-flex items-center text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-10 gap-2 shadow-lg shadow-emerald-500/20 bg-gradient-to-r from-emerald-500 to-emerald-500/90 hover:from-emerald-500/90 hover:to-emerald-500 font-medium transition-all hover:scale-105 rounded-full"
                                    >
                                        Contact Sales
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;