// NewsCard.tsx - with complete internationalization
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { ChevronRight, Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import { Article } from "@/app/newsroom/components/NewsTypes";
import { useLanguage } from '@/contexts/LanguageContext';

interface NewsCardProps {
  article: Article;
  index: number;
  isLoaded: boolean;
  viewMode: "grid" | "list";
}

const NewsCard: React.FC<NewsCardProps> = ({ article, index, isLoaded, viewMode }) => {
  const { t, currentLanguage } = useLanguage();

  // Calculate animation delay based on index for staggered appearance
  const animationDelay = 100 + (index * 100);

  // Get translated fields from article
  const getTranslatedField = (fieldName: string, defaultValue: any): any => {
    // Try with different case variations of language code
    const languageVariations = [
      currentLanguage,
      currentLanguage.toLowerCase(),
      currentLanguage.toUpperCase()
    ];

    for (const langCode of languageVariations) {
      if (
        article.translations &&
        article.translations[langCode] &&
        article.translations[langCode][fieldName] !== undefined
      ) {
        return article.translations[langCode][fieldName];
      }
    }

    return defaultValue;
  };

  // Common category badge rendering function to ensure consistency
  const renderCategoryBadge = () => {
    // Define icon and color based on category
    let color = "bg-gray-700";
    let icon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
    );

    // Get translated category
    const category = getTranslatedField('category', article.category);

    if (category === "AWARD" || category === "NAGRODA") {
      color = "bg-yellow-500";
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </svg>
      );
    } else if (category === "PARTNERSHIP ANNOUNCEMENT" || category === "PARTNERSTWO") {
      color = "bg-emerald-500";
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34"></path>
          <path d="M14 3v4a2 2 0 0 0 2 2h4"></path>
          <path d="M18 15v6"></path>
          <path d="M15 18h6"></path>
        </svg>
      );
    } else if (category === "WEBINAR") {
      color = "bg-blue-500";
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <circle cx="12" cy="10" r="1" />
          <path d="M9 10a3 3 0 0 1 3-3a3 3 0 0 1 3 3" />
        </svg>
      );
    } else if (category === "EV REVIEW" || category === "RECENZJA EV") {
      color = "bg-purple-500";
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path>
          <circle cx="7" cy="17" r="2"></circle>
          <path d="M9 17h6"></path>
          <circle cx="17" cy="17" r="2"></circle>
        </svg>
      );
    }

    // For consistency, choose ONE badge style for both views
    // Using the grid view style since it appears more polished
    const badge = (
      <div className="absolute top-4 left-4 transform transition-transform duration-500 group-hover:-translate-y-1">
        <div className={`${color} text-white flex items-center gap-1.5 text-xs font-medium py-1.5 px-3 rounded-full shadow-md`}>
          {icon}
          {category}
        </div>
      </div>
    );

    return badge;
  };

  // Get translated title, excerpt, and other fields
  const title = getTranslatedField('title', article.title);
  const excerpt = getTranslatedField('excerpt', article.excerpt);
  const type = getTranslatedField('type', article.type || "PRESS");
  const readTime = getTranslatedField('readTime', article.readTime);
  const tags = getTranslatedField('tags', article.tags);

  // Grid view rendering
  if (viewMode === "grid") {
    return (
      <div
        className={`group h-full transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
                  alt={title}
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            {/* Category badge */}
            {article.category && renderCategoryBadge()}
          </div>

          {/* Article metadata and title */}
          <div className="p-5 relative z-10">
            <div className="flex items-center text-sm text-gray-500 mb-3 font-medium">
              <span>{formatDate(article.date)}</span>
              <span className="mx-2 text-emerald-500">•</span>
              <span>{readTime} {t('pages.newsroom.article.minute_read')}</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
              {title}
            </h3>

            {/* Optional article excerpt with line clamp */}
            {excerpt && (
              <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                {excerpt}
              </p>
            )}

            {/* Article type indicator and read more button */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
              <div className="text-xs font-medium uppercase tracking-wider text-gray-500">
                {type}
              </div>
              <span className="text-emerald-600 text-sm font-medium flex items-center opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                {t('pages.newsroom.grid.read_more')}
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // List view rendering
  return (
    <div
      className={`transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:border-emerald-200 group">
        <Link href={`/newsroom/${article.slug}`} className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-1/3 h-56 md:h-auto">
            <Image
              src={article.image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Category badge */}
            {article.category && renderCategoryBadge()}
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
                <span>{readTime} {t('pages.newsroom.article.minute_read')}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1.5 text-emerald-500" />
                <span>{type}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
              {title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
              {excerpt}
            </p>

            {/* Tags and read more */}
            <div className="flex flex-wrap items-center justify-between mt-2">
              <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                {tags && tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                    #{tag}
                  </span>
                ))}
                {tags && tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                    +{tags.length - 3}
                  </span>
                )}
              </div>
              <span className="inline-flex items-center text-emerald-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                {t('pages.newsroom.grid.read_article')}
                <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;