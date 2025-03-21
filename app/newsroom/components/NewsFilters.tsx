"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, Search, Calendar, ChevronDown, Grid, List } from "lucide-react";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);

  // Animation variants
  const filterDrawerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const searchbarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "100%", 
      opacity: 1,
      transition: { 
        width: { duration: 0.3 },
        opacity: { duration: 0.2, delay: 0.1 }
      }
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const anyFilterActive = selectedCategory !== "all" || selectedType !== "all" || selectedTag !== "all" || searchQuery !== "";

  return (
    <div className="mb-10 overflow-hidden">
      {/* Main filter bar */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 transition-all duration-300 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Left side - Search toggle and filters */}
          <div className="flex flex-wrap items-center gap-3 flex-grow w-full md:w-auto">
            {/* Search toggle and input */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setShowSearchbar(!showSearchbar)}
                className={`p-2.5 rounded-full flex-shrink-0 ${
                  showSearchbar || searchQuery
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                } transition-colors`}
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </button>
              
              <AnimatePresence>
                {(showSearchbar || searchQuery) && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={searchbarVariants}
                    className="relative flex-grow"
                  >
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      autoFocus={showSearchbar}
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => onSearchChange("")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Filter toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl md:ml-2 ${
                anyFilterActive 
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                  : "bg-gray-50 hover:bg-gray-100 text-gray-700"
              } transition-all duration-200`}
            >
              <Filter className="h-4 w-4" />
              <span className="font-medium text-sm">Filters</span>
              {anyFilterActive && (
                <span className="flex items-center justify-center h-5 w-5 bg-emerald-500 text-white text-xs font-bold rounded-full ml-1">
                  {(selectedCategory !== "all" ? 1 : 0) + (selectedType !== "all" ? 1 : 0) + (selectedTag !== "all" ? 1 : 0)}
                </span>
              )}
            </button>
          </div>

          {/* Right side - Sort and view options */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Sort order toggle */}
            <div className="flex items-center">
              <button
                onClick={() => onSortOrderChange(sortOrder === "newest" ? "oldest" : "newest")}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium hidden sm:inline">{sortOrder === "newest" ? "Newest first" : "Oldest first"}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${sortOrder === "oldest" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* View mode toggle */}
            <div className="flex rounded-xl overflow-hidden border border-gray-200">
              <button
                onClick={() => onViewModeChange("grid")}
                className={`p-2.5 ${
                  viewMode === "grid" 
                    ? "bg-emerald-500 text-white" 
                    : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => onViewModeChange("list")}
                className={`p-2.5 ${
                  viewMode === "list" 
                    ? "bg-emerald-500 text-white" 
                    : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Results counter - desktop only */}
            <div className="hidden md:block text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-xl">
              <span className="font-medium">{filteredCount}</span> of <span className="font-medium">{totalArticles}</span>
            </div>
          </div>
        </div>

        {/* Active filters display */}
        {anyFilterActive && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">Active:</span>
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
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Expandable filter panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            variants={filterDrawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onCategoryChange("all")}
                    className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedCategory === "all"
                        ? "bg-emerald-500 text-white shadow-sm"
                        : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => onCategoryChange(category === selectedCategory ? "all" : category)}
                      className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
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
                  Types
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onTypeChange("all")}
                    className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedType === "all"
                        ? "bg-emerald-500 text-white shadow-sm"
                        : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    All Types
                  </button>
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => onTypeChange(type === selectedType ? "all" : type)}
                      className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedType === type
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
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onTagChange("all")}
                    className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedTag === "all"
                        ? "bg-emerald-500 text-white shadow-sm"
                        : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    All Tags
                  </button>
                  {tags.slice(0, 15).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => onTagChange(tag === selectedTag ? "all" : tag)}
                      className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedTag === tag
                          ? "bg-emerald-500 text-white shadow-sm"
                          : "border border-gray-200 hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                  {tags.length > 15 && (
                    <button 
                      className="px-3 py-1.5 rounded-xl text-sm font-medium border border-gray-200 hover:bg-gray-50 text-gray-700"
                      title="More tags available"
                    >
                      +{tags.length - 15} more
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsFilters;