"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import NewsCard from "./NewsCard";
import NewsFilters from "./NewsFilters";
import { motion, AnimatePresence } from "framer-motion";
import { formatDate } from "@/lib/utils";

const NewsGrid = ({ articles = [] }) => { // Set default empty array
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = viewMode === "grid" ? 9 : 6;

  // Extract unique categories, types, and tags from articles
  const categories = useMemo(() => {
    return [...new Set(articles.map(article => article.category))].sort();
  }, [articles]);

  const types = useMemo(() => {
    return [...new Set(articles.map(article => article.type))].sort();
  }, [articles]);

  const tags = useMemo(() => {
    const allTags = articles.flatMap(article => article.tags || []);
    return [...new Set(allTags)].sort();
  }, [articles]);

  // Filter and sort articles based on selected filters
  const filteredArticles = useMemo(() => {
    // First filter the articles
    const filtered = articles.filter(article => {
      // Category filter
      if (selectedCategory !== "all" && article.category !== selectedCategory) {
        return false;
      }
      
      // Type filter
      if (selectedType !== "all" && article.type !== selectedType) {
        return false;
      }
      
      // Tag filter
      if (selectedTag !== "all" && !(article.tags || []).includes(selectedTag)) {
        return false;
      }
      
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const titleMatch = article.title.toLowerCase().includes(query);
        const excerptMatch = article.excerpt.toLowerCase().includes(query);
        const contentMatch = article.content.toLowerCase().includes(query);
        const tagsMatch = (article.tags || []).some(tag => tag.toLowerCase().includes(query));
        
        if (!(titleMatch || excerptMatch || contentMatch || tagsMatch)) {
          return false;
        }
      }
      
      return true;
    });

    // Then sort the filtered articles
    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [articles, selectedCategory, selectedType, selectedTag, searchQuery, sortOrder]);

  // Paginate articles
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return filteredArticles.slice(startIndex, startIndex + articlesPerPage);
  }, [filteredArticles, currentPage, articlesPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Reset to page 1 when filters change or view mode changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedType, selectedTag, searchQuery, sortOrder, viewMode]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle filter changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedType("all");
    setSelectedTag("all");
    setSearchQuery("");
  };

  // Animation variants
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
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const emptyStateVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page heading */}
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Press Releases</h1>
        <div className="w-24 h-1.5 bg-emerald-500 rounded-full"></div>
      </div>

      {/* Filters */}
      <NewsFilters
        categories={categories}
        types={types}
        tags={tags}
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        selectedTag={selectedTag}
        searchQuery={searchQuery}
        sortOrder={sortOrder}
        viewMode={viewMode}
        onCategoryChange={handleCategoryChange}
        onTypeChange={handleTypeChange}
        onTagChange={handleTagChange}
        onSearchChange={handleSearchChange}
        onSortOrderChange={handleSortOrderChange}
        onViewModeChange={handleViewModeChange}
        onResetFilters={handleResetFilters}
        totalArticles={articles.length}
        filteredCount={filteredArticles.length}
      />

      {/* Articles grid or list */}
      <AnimatePresence mode="wait">
        {paginatedArticles.length > 0 ? (
          viewMode === "grid" ? (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              key={`grid-${selectedCategory}-${selectedType}-${selectedTag}-${searchQuery}-${currentPage}-${sortOrder}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {paginatedArticles.map((article, index) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  index={index}
                  isLoaded={isLoaded}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="space-y-6"
              key={`list-${selectedCategory}-${selectedType}-${selectedTag}-${searchQuery}-${currentPage}-${sortOrder}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {paginatedArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={listItemVariants}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:border-emerald-200 group"
                >
                  <Link href={`/newsroom/${article.slug}`} className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative w-full md:w-1/3 h-56 md:h-auto">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                          article.category === "AWARD" ? "bg-yellow-500 text-white" :
                          article.category === "PARTNERSHIP ANNOUNCEMENT" ? "bg-blue-500 text-white" :
                          article.category === "EVENT" ? "bg-purple-500 text-white" :
                          "bg-emerald-500 text-white"
                        }`}>
                          {article.category}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      {/* Meta info */}
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1.5 text-emerald-500" />
                          <time dateTime={article.date}>{formatDate(article.date)}</time>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1.5 text-emerald-500" />
                          <span>{article.readTime} min read</span>
                        </div>
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-1.5 text-emerald-500" />
                          <span>{article.type}</span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                        {article.excerpt}
                      </p>
                      
                      {/* Tags and read more */}
                      <div className="flex flex-wrap items-center justify-between mt-2">
                        <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                          {article.tags && article.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                              #{tag}
                            </span>
                          ))}
                          {article.tags && article.tags.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                              +{article.tags.length - 3}
                            </span>
                          )}
                        </div>
                        <span className="inline-flex items-center text-emerald-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                          Read article
                          <ArrowUpRight className="h-4 w-4 ml-1.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )
        ) : (
          <motion.div 
            className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 text-center"
            key="empty-state"
            variants={emptyStateVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 mb-6">
          <div className="inline-flex items-center rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
            {/* Previous page button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex items-center justify-center h-10 px-4 ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            {/* Page numbers */}
            <div className="hidden sm:flex items-center border-l border-r border-gray-200">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNumber;
                if (totalPages <= 5) {
                  // Show all pages if 5 or fewer
                  pageNumber = i + 1;
                } else if (currentPage <= 3) {
                  // Near the start
                  if (i < 4) {
                    pageNumber = i + 1;
                  } else {
                    pageNumber = totalPages;
                  }
                } else if (currentPage >= totalPages - 2) {
                  // Near the end
                  if (i === 0) {
                    pageNumber = 1;
                  } else {
                    pageNumber = totalPages - (4 - i);
                  }
                } else {
                  // In the middle
                  if (i === 0) {
                    pageNumber = 1;
                  } else if (i === 4) {
                    pageNumber = totalPages;
                  } else {
                    pageNumber = currentPage + (i - 2);
                  }
                }
                
                // Show ellipsis instead of page number in certain cases
                if ((totalPages > 5) && 
                    ((i === 1 && pageNumber !== 2) || 
                     (i === 3 && pageNumber !== totalPages - 1))) {
                  return (
                    <span key={`ellipsis-${i}`} className="w-10 h-10 flex items-center justify-center text-gray-500">
                      •••
                    </span>
                  );
                }
                
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`w-10 h-10 flex items-center justify-center text-sm font-medium ${
                      currentPage === pageNumber
                        ? "bg-emerald-500 text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
            
            {/* Current page indicator for mobile */}
            <div className="flex sm:hidden items-center px-4 h-10 text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </div>
            
            {/* Next page button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center h-10 px-4 ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsGrid;