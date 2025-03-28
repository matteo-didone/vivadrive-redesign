"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, Search, Calendar, ChevronDown, Grid, List, Menu } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

interface NewsFiltersProps {
    categories: string[];
    types: string[];
    tags: string[];
    selectedCategory: string;
    selectedType: string;
    selectedTag: string;
    searchQuery: string;
    sortOrder: "newest" | "oldest";
    viewMode: "grid" | "list";
    onCategoryChange: (category: string) => void;
    onTypeChange: (type: string) => void;
    onTagChange: (tag: string) => void;
    onSearchChange: (query: string) => void;
    onSortOrderChange: (order: "newest" | "oldest") => void;
    onViewModeChange: (mode: "grid" | "list") => void;
    onResetFilters: () => void;
    totalArticles: number;
    filteredCount: number;
}

const NewsFilters: React.FC<NewsFiltersProps> = ({
    categories,
    types,
    tags,
    selectedCategory,
    selectedType,
    selectedTag,
    searchQuery,
    sortOrder,
    viewMode,
    onCategoryChange,
    onTypeChange,
    onTagChange,
    onSearchChange,
    onSortOrderChange,
    onViewModeChange,
    onResetFilters,
    totalArticles,
    filteredCount,
}) => {
    const { t } = useLanguage();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [showAllTags, setShowAllTags] = useState(false);
    const [showMobileSearchOverlay, setShowMobileSearchOverlay] = useState(false);
    const [isDesktopSearchVisible, setIsDesktopSearchVisible] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const desktopSearchInputRef = useRef<HTMLInputElement>(null);

    // Animation variants
    const filterDrawerVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    const mobileFilterDrawerVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            x: "100%",
            transition: { duration: 0.2, ease: "easeIn" }
        }
    };

    const searchOverlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.2 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const desktopSearchVariants = {
        hidden: { width: "48px", opacity: 0.9 },
        visible: {
            width: "320px",
            opacity: 1,
            transition: { duration: 0.2 }
        }
    };

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (showMobileSearchOverlay && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [showMobileSearchOverlay]);

    useEffect(() => {
        if (isDesktopSearchVisible && desktopSearchInputRef.current) {
            desktopSearchInputRef.current.focus();
        }
    }, [isDesktopSearchVisible]);

    const anyFilterActive = selectedCategory !== "all" || selectedType !== "all" || selectedTag !== "all" || searchQuery !== "";

    // Close mobile filter drawer when clicking outside on small screens
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (showMobileFilters && !target.closest('.mobile-filter-drawer') && !target.closest('.mobile-filter-toggle')) {
                setShowMobileFilters(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMobileFilters]);

    // Close mobile filters on window resize to prevent UI issues
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && showMobileFilters) {
                setShowMobileFilters(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showMobileFilters]);

    // Handle click outside for desktop search
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isDesktopSearchVisible && !target.closest('.desktop-search-container') && !searchQuery) {
                setIsDesktopSearchVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDesktopSearchVisible, searchQuery]);

    return (
        <div className="mb-10">
            {/* Main filter bar - Matching the screenshot design */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 transition-all duration-300 mb-8">
                <div className="flex items-center gap-4">
                    {/* Desktop Search Field */}
                    <div className="hidden md:block desktop-search-container relative z-10">
                        <motion.div
                            className="flex items-center"
                            initial="hidden"
                            animate={isDesktopSearchVisible ? "visible" : "hidden"}
                            variants={desktopSearchVariants}
                        >
                            {isDesktopSearchVisible ? (
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        ref={desktopSearchInputRef}
                                        type="text"
                                        placeholder={t('pages.newsroom.filters.search_placeholder')}
                                        value={searchQuery}
                                        onChange={(e) => onSearchChange(e.target.value)}
                                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#10b981] focus:border-[#10b981] focus:outline-none transition-colors"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => onSearchChange("")}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsDesktopSearchVisible(true)}
                                    className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600"
                                    aria-label={t('pages.newsroom.filters.search_placeholder')}
                                >
                                    <Search className="h-5 w-5" />
                                </button>
                            )}
                        </motion.div>
                    </div>

                    {/* Mobile Search button */}
                    <div className="md:hidden w-16 sm:w-auto">
                        <button
                            onClick={() => setShowMobileSearchOverlay(true)}
                            className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600"
                            aria-label={t('pages.newsroom.filters.search_placeholder')}
                        >
                            <Search className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Filters button */}
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700"
                    >
                        <Filter className="h-5 w-5" />
                        <span className="font-medium">{t('pages.newsroom.filters.filters_button')}</span>
                    </button>

                    {/* Date picker button - Desktop */}
                    <button
                        onClick={() => onSortOrderChange(sortOrder === "newest" ? "oldest" : "newest")}
                        className="hidden md:flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 ml-auto"
                    >
                        <Calendar className="h-5 w-5" />
                        <ChevronDown className="h-5 w-5" />
                    </button>

                    {/* Date picker button - Mobile (replaces grid/list view) */}
                    <button
                        onClick={() => onSortOrderChange(sortOrder === "newest" ? "oldest" : "newest")}
                        className="md:hidden flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 ml-auto"
                    >
                        <Calendar className="h-5 w-5" />
                        <ChevronDown className="h-5 w-5" />
                    </button>

                    {/* View mode toggles - Desktop only */}
                    <div className="hidden md:flex rounded-xl overflow-hidden border border-gray-200">
                        <button
                            onClick={() => onViewModeChange("grid")}
                            className={`p-3 ${viewMode === "grid"
                                ? "bg-emerald-500 text-white"
                                : "bg-white text-gray-500 hover:bg-gray-50"
                                }`}
                            aria-label={t('pages.newsroom.filters.view_mode.grid')}
                        >
                            <Grid className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => onViewModeChange("list")}
                            className={`p-3 ${viewMode === "list"
                                ? "bg-emerald-500 text-white"
                                : "bg-white text-gray-500 hover:bg-gray-50"
                                }`}
                            aria-label={t('pages.newsroom.filters.view_mode.list')}
                        >
                            <List className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Active filters display */}
                {anyFilterActive && (
                    <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">{t('pages.newsroom.filters.active')}</span>
                        {selectedCategory !== "all" && (
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                {selectedCategory}
                                <button
                                    onClick={() => onCategoryChange("all")}
                                    className="ml-1 hover:text-emerald-900"
                                    aria-label={`Remove ${selectedCategory} filter`}
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        {selectedType !== "all" && (
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                {selectedType}
                                <button
                                    onClick={() => onTypeChange("all")}
                                    className="ml-1 hover:text-emerald-900"
                                    aria-label={`Remove ${selectedType} filter`}
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        {selectedTag !== "all" && (
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                #{selectedTag}
                                <button
                                    onClick={() => onTagChange("all")}
                                    className="ml-1 hover:text-emerald-900"
                                    aria-label={`Remove ${selectedTag} filter`}
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        {searchQuery && (
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                "{searchQuery}"
                                <button
                                    onClick={() => onSearchChange("")}
                                    className="ml-1 hover:text-emerald-900"
                                    aria-label="Clear search"
                                >
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        <button
                            onClick={onResetFilters}
                            className="ml-auto text-xs font-medium text-emerald-600 hover:text-emerald-800 transition-colors"
                        >
                            {t('pages.newsroom.filters.clear_all')}
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Search Overlay */}
            <AnimatePresence>
                {showMobileSearchOverlay && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-start justify-center pt-16 md:hidden"
                        variants={searchOverlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setShowMobileSearchOverlay(false)}
                    >
                        <motion.div
                            className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-4 mx-4"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                        >
                            <div className="flex items-center">
                                <div className="relative flex-grow">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder={t('pages.newsroom.filters.mobile.search')}
                                        value={searchQuery}
                                        onChange={(e) => onSearchChange(e.target.value)}
                                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#10b981] focus:border-[#10b981] focus:outline-none transition-colors"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => onSearchChange("")}
                                            className="absolute inset-y-0 right-12 flex items-center text-gray-400 hover:text-gray-600"
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    )}
                                </div>
                                <button
                                    onClick={() => setShowMobileSearchOverlay(false)}
                                    className="ml-2 p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl"
                                >
                                    {t('pages.newsroom.filters.mobile.cancel')}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Expandable filter panel */}
            <AnimatePresence>
                {isFilterOpen && (
                    <motion.div
                        variants={filterDrawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="bg-white rounded-3xl shadow-md p-6 mb-8 border border-gray-100"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Category filter */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    {t('pages.newsroom.filters.categories')}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => onCategoryChange("all")}
                                        className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedCategory === "all"
                                            ? "bg-emerald-500 text-white shadow-sm"
                                            : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                            }`}
                                    >
                                        {t('pages.newsroom.filters.all_categories')}
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => onCategoryChange(category === selectedCategory ? "all" : category)}
                                            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                                ? "bg-emerald-500 text-white shadow-sm"
                                                : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Type filter */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    {t('pages.newsroom.filters.types')}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => onTypeChange("all")}
                                        className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedType === "all"
                                            ? "bg-emerald-500 text-white shadow-sm"
                                            : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                            }`}
                                    >
                                        {t('pages.newsroom.filters.all_types')}
                                    </button>
                                    {types.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => onTypeChange(type === selectedType ? "all" : type)}
                                            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedType === type
                                                ? "bg-emerald-500 text-white shadow-sm"
                                                : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tag filter */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    {t('pages.newsroom.filters.tags')}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => onTagChange("all")}
                                        className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedTag === "all"
                                            ? "bg-emerald-500 text-white shadow-sm"
                                            : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                            }`}
                                    >
                                        {t('pages.newsroom.filters.all_tags')}
                                    </button>

                                    {/* Show first 15 tags or all if showAllTags is true */}
                                    {(showAllTags ? tags : tags.slice(0, 15)).map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => onTagChange(tag === selectedTag ? "all" : tag)}
                                            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedTag === tag
                                                ? "bg-emerald-500 text-white shadow-sm"
                                                : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                                }`}
                                        >
                                            #{tag}
                                        </button>
                                    ))}

                                    {/* Button to see more tags */}
                                    {!showAllTags && tags.length > 15 && (
                                        <button
                                            onClick={() => setShowAllTags(true)}
                                            className="px-3 py-1.5 rounded-xl text-sm font-medium border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                                        >
                                            {t('pages.newsroom.filters.more_tags', { count: tags.length - 15 })}
                                        </button>
                                    )}

                                    {/* Button to see fewer tags */}
                                    {showAllTags && tags.length > 15 && (
                                        <button
                                            onClick={() => setShowAllTags(false)}
                                            className="px-3 py-1.5 rounded-xl text-sm font-medium border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                                        >
                                            {t('pages.newsroom.filters.show_less')}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Filter Drawer */}
            <AnimatePresence>
                {showMobileFilters && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" aria-hidden="true">
                        <motion.div
                            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 mobile-filter-drawer overflow-y-auto"
                            variants={mobileFilterDrawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {/* Mobile filter header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <h2 className="text-lg font-semibold text-gray-900">{t('pages.newsroom.filters.mobile.filters')}</h2>
                                <button
                                    onClick={() => setShowMobileFilters(false)}
                                    className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                                    aria-label={t('pages.newsroom.filters.mobile.close_filters')}
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Filter sections */}
                            <div className="p-4 space-y-6">
                                {/* Mobile Results counter */}
                                <div className="bg-gray-50 p-3 rounded-lg text-center mb-4">
                                    <span className="text-sm text-gray-600">
                                        {t('pages.newsroom.filters.mobile.showing_results', { filtered: filteredCount, total: totalArticles })}
                                    </span>
                                </div>

                                {/* Search field in mobile drawer */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('pages.newsroom.filters.search_placeholder')}</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Search className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder={t('pages.newsroom.filters.search_placeholder')}
                                            value={searchQuery}
                                            onChange={(e) => onSearchChange(e.target.value)}
                                            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#10b981] focus:border-[#10b981] focus:outline-none transition-colors"
                                        />
                                        {searchQuery && (
                                            <button
                                                onClick={() => onSearchChange("")}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Category filter */}
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        {t('pages.newsroom.filters.categories')}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => onCategoryChange("all")}
                                            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedCategory === "all"
                                                ? "bg-emerald-500 text-white shadow-sm"
                                                : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                                }`}
                                        >
                                            {t('pages.newsroom.filters.all_categories')}
                                        </button>
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => onCategoryChange(category === selectedCategory ? "all" : category)}
                                                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                                    ? "bg-emerald-500 text-white shadow-sm"
                                                    : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Type filter */}
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        {t('pages.newsroom.filters.types')}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => onTypeChange("all")}
                                            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedType === "all"
                                                ? "bg-emerald-500 text-white shadow-sm"
                                                : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                                }`}
                                        >
                                            {t('pages.newsroom.filters.all_types')}
                                        </button>
                                        {types.map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => onTypeChange(type === selectedType ? "all" : type)}
                                                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedType === type
                                                    ? "bg-emerald-500 text-white shadow-sm"
                                                    : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Tag filter */}
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        {t('pages.newsroom.filters.tags')}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => onTagChange("all")}
                                            className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedTag === "all"
                                                ? "bg-emerald-500 text-white shadow-sm"
                                                : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                                }`}
                                        >
                                            {t('pages.newsroom.filters.all_tags')}
                                        </button>

                                        {/* Show first 10 tags or all if showAllTags is true */}
                                        {(showAllTags ? tags : tags.slice(0, 10)).map((tag) => (
                                            <button
                                                key={tag}
                                                onClick={() => onTagChange(tag === selectedTag ? "all" : tag)}
                                                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${selectedTag === tag
                                                    ? "bg-emerald-500 text-white shadow-sm"
                                                    : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                                                    }`}
                                            >
                                                #{tag}
                                            </button>
                                        ))}

                                        {/* Button to see more tags */}
                                        {!showAllTags && tags.length > 10 && (
                                            <button
                                                onClick={() => setShowAllTags(true)}
                                                className="px-3 py-1.5 rounded-xl text-sm font-medium border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                                            >
                                                {t('pages.newsroom.filters.more_tags', { count: tags.length - 10 })}
                                            </button>
                                        )}

                                        {/* Button to see fewer tags */}
                                        {showAllTags && tags.length > 10 && (
                                            <button
                                                onClick={() => setShowAllTags(false)}
                                                className="px-3 py-1.5 rounded-xl text-sm font-medium border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                                            >
                                                {t('pages.newsroom.filters.show_less')}
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Sort options in mobile */}
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        {t('pages.newsroom.filters.sort.newest')}
                                    </h3>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => onSortOrderChange("newest")}
                                            className={`px-3 py-2 rounded-xl text-sm font-medium flex-1 ${sortOrder === "newest"
                                                ? "bg-emerald-500 text-white"
                                                : "bg-gray-50 text-gray-700 border border-gray-200"
                                                }`}
                                        >
                                            {t('pages.newsroom.filters.sort.newest')}
                                        </button>
                                        <button
                                            onClick={() => onSortOrderChange("oldest")}
                                            className={`px-3 py-2 rounded-xl text-sm font-medium flex-1 ${sortOrder === "oldest"
                                                ? "bg-emerald-500 text-white"
                                                : "bg-gray-50 text-gray-700 border border-gray-200"
                                                }`}
                                        >
                                            {t('pages.newsroom.filters.sort.oldest')}
                                        </button>
                                    </div>
                                </div>

                                {/* View mode options in mobile */}
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        {t('pages.newsroom.filters.view_mode.grid')}
                                    </h3>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => onViewModeChange("grid")}
                                            className={`px-3 py-2 rounded-xl text-sm font-medium flex-1 flex items-center justify-center gap-2 ${viewMode === "grid"
                                                ? "bg-emerald-500 text-white"
                                                : "bg-gray-50 text-gray-700 border border-gray-200"
                                                }`}
                                        >
                                            <Grid className="h-4 w-4" />
                                            {t('pages.newsroom.filters.view_mode.grid')}
                                        </button>
                                        <button
                                            onClick={() => onViewModeChange("list")}
                                            className={`px-3 py-2 rounded-xl text-sm font-medium flex-1 flex items-center justify-center gap-2 ${viewMode === "list"
                                                ? "bg-emerald-500 text-white"
                                                : "bg-gray-50 text-gray-700 border border-gray-200"
                                                }`}
                                        >
                                            <List className="h-4 w-4" />
                                            {t('pages.newsroom.filters.view_mode.list')}
                                        </button>
                                    </div>
                                </div>

                            </div>

                            {/* Mobile filter footer with actions */}
                            <div className="p-4 border-t border-gray-200 sticky bottom-0 bg-white">
                                <div className="flex gap-3">
                                    <button
                                        onClick={onResetFilters}
                                        className="flex-1 py-2.5 px-3 border border-gray-300 rounded-xl text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
                                    >
                                        {t('pages.newsroom.filters.mobile.reset_all')}
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowMobileFilters(false);
                                        }}
                                        className="flex-1 py-2.5 px-3 bg-emerald-500 rounded-xl text-white font-medium text-sm hover:bg-emerald-600 transition-colors"
                                    >
                                        {t('pages.newsroom.filters.mobile.apply_filters')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Mobile filter toggle - Fixed button at bottom */}
            <div className="md:hidden fixed bottom-6 right-6 z-30">
                <button
                    onClick={() => setShowMobileFilters(true)}
                    className="mobile-filter-toggle p-4 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 transition-colors"
                    aria-label={t('pages.newsroom.filters.filters_button')}
                >
                    <Filter className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default NewsFilters;