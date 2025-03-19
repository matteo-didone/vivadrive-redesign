"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Article } from "@/app/newsroom/components/NewsTypes";

interface NewsCardProps {
  article: Article;
  index: number;
  isLoaded: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, index, isLoaded }) => {
  // Calculate animation delay based on index for staggered appearance
  const animationDelay = 100 + (index * 100);

  return (
    <div 
      className={`group h-full transition-all duration-700 transform ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <Link
        href={`/newsroom/${article.slug}`}
        className="block h-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative"
      >
        {/* Decorative elements */}
        <div className="absolute -right-6 -top-6 w-12 h-12 bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[6] z-0"></div>
        
        <div className="relative">
          {/* Feature image with zoom effect */}
          <div className="relative h-52 w-full overflow-hidden">
            {article.image && (
              <Image
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>

          {/* Category tag with floating animation */}
          {article.category && (
            <div className="absolute top-4 left-4 transform transition-transform duration-500 group-hover:-translate-y-1">
              {article.category === "AWARD" && (
                <div className="bg-yellow-500 text-white text-xs font-medium py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                  {article.category}
                </div>
              )}
              {article.category === "PARTNERSHIP ANNOUNCEMENT" && (
                <div className="bg-emerald-500 text-white text-xs font-medium py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34"></path>
                    <path d="M14 3v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M18 15v6"></path>
                    <path d="M15 18h6"></path>
                  </svg>
                  {article.category}
                </div>
              )}
              {article.category === "WEBINAR" && (
                <div className="bg-blue-500 text-white text-xs font-medium py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 10.34l1.96 1.97L15 16.25" />
                    <path d="M9 10.34l-1.96 1.97L9 16.25" />
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M12 17v4" />
                    <path d="M8 21h8" />
                  </svg>
                  {article.category}
                </div>
              )}
              {article.category === "EV Review" && (
                <div className="bg-purple-500 text-white text-xs font-medium py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path>
                    <circle cx="7" cy="17" r="2"></circle>
                    <path d="M9 17h6"></path>
                    <circle cx="17" cy="17" r="2"></circle>
                  </svg>
                  {article.category}
                </div>
              )}
              {!["AWARD", "PARTNERSHIP ANNOUNCEMENT", "WEBINAR", "EV Review"].includes(article.category) && (
                <div className="bg-gray-700 text-white text-xs font-medium py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  {article.category}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Article metadata and title */}
        <div className="p-5 relative z-10">
          <div className="flex items-center text-sm text-gray-500 mb-3 font-medium">
            <span>{formatDate(article.date)}</span>
            <span className="mx-2 text-emerald-500">•</span>
            <span>{article.readTime} minute read</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          {/* Optional article excerpt with line clamp */}
          {article.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
              {article.excerpt}
            </p>
          )}

          {/* Article type indicator and read more button */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
            <div className="text-xs font-medium uppercase tracking-wider text-gray-500">
              {article.type || "PRESS"}
            </div>
            <span className="text-emerald-600 text-sm font-medium flex items-center opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Read more 
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;