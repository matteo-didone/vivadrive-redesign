"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, ArrowUpRight, Filter, X } from 'lucide-react';

const AlumniGrid = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [membersList, setMembersList] = useState<any[]>([]);

    // Team members data with LinkedIn URLs, roles, and country flags
    const teamMembers = [
        {
            name: "Alessandro Montanari",
            role: "Head of Data Science",
            image: "/internships/previous-interns/alessandro-montanari.jpg",
            linkedin: "https://www.linkedin.com/in/a-montanari/",
            country: "Italy",
            flag: "🇮🇹"
        },
        {
            name: "Maja Kolczyńska",
            role: "Data Analyst",
            image: "/internships/previous-interns/maja-kolczyńska.jpg",
            linkedin: "https://www.linkedin.com/in/maja-kolczynska/",
            country: "Poland",
            flag: "🇵🇱"
        },
        {
            name: "Firmino Coutinho",
            role: "UX/CX Lead",
            image: "/internships/previous-interns/firmino-coutinho.jpg",
            linkedin: "https://www.linkedin.com/in/firmino-coutinho/",
            country: "Portugal",
            flag: "🇵🇹"
        },
        {
            name: "Stefanos Kypritidis",
            role: "Data Scientist",
            image: "/internships/previous-interns/stefanos-kypritidis.jpg",
            linkedin: "https://www.linkedin.com/in/stefanos-kypritidis-3700bb173/",
            country: "Greece",
            flag: "🇬🇷"
        },
        {
            name: "Giulia Ciaramella",
            role: "Data Scientist",
            image: "/internships/previous-interns/giulia-ciaramella.jpg",
            linkedin: "https://www.linkedin.com/in/giulia-ciaramella-ab01341b4/",
            country: "Italy",
            flag: "🇮🇹"
        },
        {
            name: "Estelle Duhem",
            role: "Marketing Growth Hacker",
            image: "/internships/previous-interns/estelle-duhem.jpg",
            linkedin: "https://www.linkedin.com/in/estelle-duhem-imt-student/",
            country: "France",
            flag: "🇫🇷"
        },
        {
            name: "Jan Lennartz",
            role: "Data Scientist",
            image: "/internships/previous-interns/jan-lennartz.jpg",
            linkedin: "https://www.linkedin.com/in/jan-lennartz/",
            country: "Germany",
            flag: "🇩🇪"
        },
        {
            name: "Farshad Zare",
            role: "Civil engineer",
            image: "/internships/previous-interns/farshad-zare.jpg",
            linkedin: "https://www.linkedin.com/in/farshad-zare-81592a18a/",
            country: "Iran",
            flag: "🇮🇷"
        },
        {
            name: "David Melo",
            role: "Data Scientist",
            image: "/internships/previous-interns/david-melo.jpg",
            linkedin: "https://www.linkedin.com/in/davidqmelo/",
            country: "Portugal",
            flag: "🇵🇹"
        },
        {
            name: "Fabian Rządkowski",
            role: "Head of Marketing & PR",
            image: "/internships/previous-interns/fabian-rządkowski.jpg",
            linkedin: "https://www.linkedin.com/in/-fabian-/",
            country: "Poland",
            flag: "🇵🇱"
        },
        {
            name: "João Duarte",
            role: "Game developer, Full stack",
            image: "/internships/previous-interns/joão-duarte.jpg",
            linkedin: "https://www.linkedin.com/in/joaoavduarte/",
            country: "Portugal",
            flag: "🇵🇹"
        },
        {
            name: "Panagiotis Stavropoulos",
            role: "Front end developer",
            image: "/internships/previous-interns/panagiotis-stavropoulos.jpg",
            linkedin: "https://www.linkedin.com/in/panagiotisstavropoulos/",
            country: "Greece",
            flag: "🇬🇷"
        },
        {
            name: "Khanh Dung Dao",
            role: "Data Engineer",
            image: "/internships/previous-interns/khanh-dung-dao.jpg",
            linkedin: "https://www.linkedin.com/in/khanh-dung-dao/",
            country: "Vietnam",
            flag: "🇻🇳"
        },
        {
            name: "Narjisse Lasri",
            role: "Business Growth Hacker",
            image: "/internships/previous-interns/narjisse-lasri.jpg",
            linkedin: "https://www.linkedin.com/in/narjisse-lasri-65a457151/",
            country: "Morocco",
            flag: "🇲🇦"
        },
        {
            name: "Adrien Schoen",
            role: "Data Scientist",
            image: "/internships/previous-interns/adrien-schoen.jpg",
            linkedin: "https://www.linkedin.com/in/adrien-schoen-5b2a9a180/",
            country: "France",
            flag: "🇫🇷"
        },
        {
            name: "Daniel Turoczy",
            role: "Data Scientist",
            image: "/internships/previous-interns/daniel-turoczy.jpg",
            linkedin: "https://www.linkedin.com/in/d%C3%A1niel-tur%C3%B3czy-a36096168/",
            country: "Hungary",
            flag: "🇭🇺"
        },
        {
            name: "Josipa Rendulić",
            role: "Data Scientist",
            image: "/internships/previous-interns/josipa-rendulić.jpg",
            linkedin: "https://www.linkedin.com/in/josipa-renduli%C4%87/",
            country: "Croatia",
            flag: "🇭🇷"
        },
        {
            name: "Samuel Cucchi",
            role: "Data Scientist",
            image: "/internships/previous-interns/samuel-cucchi.jpg",
            linkedin: "https://www.linkedin.com/in/samuele-cucchi-68724311a/",
            country: "Italy",
            flag: "🇮🇹"
        },
        {
            name: "Alessandro Galeano",
            role: "Investment Analist",
            image: "/internships/previous-interns/alessandro-galeano.jpg",
            linkedin: "https://www.linkedin.com/in/alessandro-galeano-990bb9199/",
            country: "Italy",
            flag: "🇮🇹"
        }
    ];

    // Extract unique roles and countries for filter options
    const roles = useMemo(() => {
        return [...new Set(teamMembers.map(member => member.role))].sort();
    }, []);

    const countries = useMemo(() => {
        return [...new Set(teamMembers.map(member => member.country))].sort();
    }, []);

    // Initialize members list
    useEffect(() => {
        setMembersList([...teamMembers]);
    }, []);

    // Handle filters effect
    useEffect(() => {
        let filtered = [...teamMembers];

        if (selectedRole) {
            filtered = filtered.filter(member => member.role === selectedRole);
        }

        if (selectedCountry) {
            filtered = filtered.filter(member => member.country === selectedCountry);
        }

        setMembersList(filtered);
    }, [selectedRole, selectedCountry]);

    // Reset filters function
    const resetFilters = () => {
        setSelectedRole(null);
        setSelectedCountry(null);
        setMembersList([...teamMembers]);
    };

    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    // Filter drawer animation variants
    const filterDrawerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-white to-emerald-50/50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100 rounded-full opacity-30 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl" />

                {/* Dotted grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-emerald-600/10 text-emerald-600 border-emerald-600/20 hover:bg-emerald-600/20 py-1.5 px-4 text-sm font-medium">
                        Our People
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-emerald-600 dark:from-white dark:to-emerald-400 bg-clip-text text-transparent">
                        Meet Our Alumni
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Our team is made up of talented individuals who have grown from interns to professionals, shaping the future of sustainable transportation.
                    </p>

                    {/* Filter toggle button */}
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200 mb-6"
                    >
                        <Filter className="h-4 w-4" />
                        {isFilterOpen ? 'Hide Filters' : 'Filter Alumni'}
                    </button>

                    {/* Filter drawer */}
                    <AnimatePresence>
                        {isFilterOpen && (
                            <motion.div
                                variants={filterDrawerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Role filter */}
                                    <div>
                                        <h3 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                            Filter by Role
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                onClick={() => setSelectedRole(null)}
                                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${!selectedRole
                                                        ? 'bg-emerald-100 text-emerald-800 border-emerald-200 shadow-sm'
                                                        : 'border border-gray-200 hover:bg-gray-50'
                                                    }`}
                                            >
                                                All Roles
                                            </button>
                                            {roles.map((role) => (
                                                <button
                                                    key={role}
                                                    onClick={() => setSelectedRole(role === selectedRole ? null : role)}
                                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${selectedRole === role
                                                            ? 'bg-emerald-100 text-emerald-800 border-emerald-200 shadow-sm'
                                                            : 'border border-gray-200 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {role}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Country filter */}
                                    <div>
                                        <h3 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                            Filter by Country
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                onClick={() => setSelectedCountry(null)}
                                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${!selectedCountry
                                                        ? 'bg-emerald-100 text-emerald-800 border-emerald-200 shadow-sm'
                                                        : 'border border-gray-200 hover:bg-gray-50'
                                                    }`}
                                            >
                                                All Countries
                                            </button>
                                            {countries.map((country) => {
                                                const flagEmoji = teamMembers.find(m => m.country === country)?.flag || '';
                                                return (
                                                    <button
                                                        key={country}
                                                        onClick={() => setSelectedCountry(country === selectedCountry ? null : country)}
                                                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1 ${selectedCountry === country
                                                                ? 'bg-emerald-100 text-emerald-800 border-emerald-200 shadow-sm'
                                                                : 'border border-gray-200 hover:bg-gray-50'
                                                            }`}
                                                    >
                                                        <span>{flagEmoji}</span>
                                                        {country}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Active filters and reset */}
                                {(selectedRole || selectedCountry) && (
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-sm text-gray-500">Active filters:</span>
                                                {selectedRole && (
                                                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                        {selectedRole}
                                                        <button
                                                            onClick={() => setSelectedRole(null)}
                                                            className="ml-1 hover:text-emerald-900"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </button>
                                                    </span>
                                                )}
                                                {selectedCountry && (
                                                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                        {teamMembers.find(m => m.country === selectedCountry)?.flag} {selectedCountry}
                                                        <button
                                                            onClick={() => setSelectedCountry(null)}
                                                            className="ml-1 hover:text-emerald-900"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </button>
                                                    </span>
                                                )}
                                            </div>
                                            <button
                                                onClick={resetFilters}
                                                className="text-sm text-gray-500 hover:text-emerald-600 transition-colors"
                                            >
                                                Clear all filters
                                            </button>
                                        </div>
                                        <div className="mt-3 text-sm text-gray-500">
                                            Showing {membersList.length} of {teamMembers.length} alumni
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Results count when filters are active but drawer is closed */}
                {!isFilterOpen && (selectedRole || selectedCountry) && (
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-3 text-sm bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                            <span>
                                Showing {membersList.length} of {teamMembers.length} alumni
                            </span>
                            <button
                                onClick={resetFilters}
                                className="text-emerald-600 hover:text-emerald-800 font-medium"
                            >
                                Clear filters
                            </button>
                        </div>
                    </div>
                )}

                {/* Empty state when no results */}
                {membersList.length === 0 && (
                    <div className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm mb-8">
                        <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <Filter className="h-10 w-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No matching alumni found</h3>
                        <p className="text-gray-500 mb-6 max-w-md mx-auto">
                            Try adjusting your filters to find what you're looking for.
                        </p>
                        <button
                            onClick={resetFilters}
                            className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
                        >
                            Reset filters
                        </button>
                    </div>
                )}

                {/* Team Grid with Framer Motion animations */}
                {membersList.length > 0 && (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                        key={`grid-${selectedRole}-${selectedCountry}`} // Key to force re-render
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {membersList.map((member, index) => (
                            <motion.div
                                key={`${member.name}-${index}`}
                                className="group relative"
                                variants={itemVariants}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="block h-full"
                                >
                                    <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-3 border border-gray-100/80 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-emerald-600/20">
                                        {/* Card header line */}
                                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

                                        {/* Image container with hover effect */}
                                        <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover object-center transform duration-700 group-hover:scale-110"
                                                priority={index < 8}
                                            />

                                            {/* Country flag badge */}
                                            <div
                                                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md p-1.5 transform rotate-3 z-10 border border-white transition-all duration-300 group-hover:shadow-lg group-hover:scale-110"
                                                title={member.country}
                                            >
                                                <span className="text-xl block" aria-label={`Flag of ${member.country}`}>
                                                    {member.flag}
                                                </span>
                                            </div>

                                            {/* Gradient overlay on hover - centered */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    <div className="flex items-center space-x-2">
                                                        <Linkedin className="h-5 w-5" />
                                                        <span className="font-medium">View profile</span>
                                                        <ArrowUpRight className="h-4 w-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Member info */}
                                        <div className="px-2 pb-3 text-center">
                                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                                                {member.name}
                                            </h3>
                                            <div className="flex items-center justify-center gap-2">
                                                <p className="text-emerald-600 font-medium text-sm">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default AlumniGrid;