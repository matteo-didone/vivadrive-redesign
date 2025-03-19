"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, Tag, ChevronUp } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Article } from "@/app/newsroom/components/NewsTypes";

// Social media icons as components
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
    </svg>
);

const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
);

interface ArticlePageProps {
    article: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showShareTooltip, setShowShareTooltip] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

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

    // Share functionality
    const handleShare = async (platform: string) => {
        const url = window.location.href;
        const title = article.title;

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'whatsapp':
                window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
                break;
            case 'copy':
                await navigator.clipboard.writeText(url);
                setShowShareTooltip(true);
                setTimeout(() => setShowShareTooltip(false), 2000);
                break;
            default:
                break;
        }
    };

    // Format HTML content with enhanced presentation
    const processContent = () => {
        if (!article.content) return '';

        // Get content
        let content = article.content.trim();

        // Enhance hashtags with styled spans
        content = content.replace(/#([a-zA-Z0-9]+)/g, '<span class="text-emerald-600 font-medium">#$1</span>');

        // Enhance blockquotes with better styling
        content = content.replace(
            /<blockquote>(.*?)<\/blockquote>/gs,
            '<div class="my-8 border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50/50 rounded-r"><blockquote class="italic text-gray-800">$1</blockquote></div>'
        );

        // Process YouTube Links - FIXED: Better handling of YouTube links
        content = content.replace(
            /<p><a href="(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:[^\s"]*))"\s+([^>]*)>(.*?)<\/a><\/p>/g,
            (match, url, videoId, attributes, linkText) => {
                // Only replace if videoId is valid (at least 11 chars for YouTube)
                if (videoId && videoId.length >= 11) {
                    return `
                    <div class="my-8 youtube-embed">
                        <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                            <iframe 
                                src="https://www.youtube.com/embed/${videoId}" 
                                class="absolute top-0 left-0 w-full h-full"
                                title="YouTube video" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div class="mt-2 text-center text-sm text-gray-600">
                            <a href="${url}" ${attributes} class="text-emerald-600 hover:underline">${linkText}</a>
                        </div>
                    </div>`;
                }
                // If invalid or incomplete, just keep the original link
                return match;
            }
        );

        // Enhance figure styling
        content = content.replace(
            /<figure class="article-image">(.*?)<\/figure>/gs,
            '<figure class="my-8 text-center">$1</figure>'
        );

        // Enhance image styling - FIXED: Properly handle existing classes
        content = content.replace(
            /<img([^>]*)>/g,
            (match, attributes) => {
                // Check if class attribute already exists
                if (attributes.includes('class="')) {
                    // Add additional classes without removing existing ones
                    return match.replace(/class="([^"]*)"/, 'class="$1 w-full rounded-lg shadow-md"');
                } else {
                    // Add class attribute if it doesn't exist
                    return `<img${attributes} class="w-full rounded-lg shadow-md">`;
                }
            }
        );

        // Enhance figcaption styling - FIXED: Properly handle existing classes
        content = content.replace(
            /<figcaption([^>]*)>(.*?)<\/figcaption>/g,
            (match, attributes, caption) => {
                // Check if class attribute already exists
                if (attributes.includes('class="')) {
                    // Add additional classes without removing existing ones
                    return match.replace(/class="([^"]*)"/, 'class="$1 text-sm text-gray-500 mt-2 italic text-center"');
                } else {
                    // Add class attribute if it doesn't exist
                    return `<figcaption${attributes} class="text-sm text-gray-500 mt-2 italic text-center">${caption}</figcaption>`;
                }
            }
        );

        return content;
    };

    if (!article) {
        return <div className="container mx-auto px-4 py-16">Article not found</div>;
    }

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
                className={`fixed right-6 bottom-6 bg-emerald-500 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Back to top"
            >
                <ChevronUp className="h-5 w-5" />
            </button>

            <article
                className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-20 -z-10">
                    <div className="absolute inset-0 bg-emerald-100 rounded-full filter blur-3xl" />
                </div>
                <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-20 -z-10">
                    <div className="absolute inset-0 bg-emerald-100 rounded-full filter blur-3xl" />
                </div>

                {/* Fixed social sharing sidebar */}
                <div className="hidden md:block">
                    <div className="fixed left-4 top-1/3 flex flex-col gap-3 z-20">
                        <div className="bg-white shadow-md rounded-full p-2">
                            <button
                                onClick={() => handleShare('facebook')}
                                className="p-1.5 text-gray-500 hover:text-emerald-600 transition-colors block"
                                aria-label="Share on Facebook"
                            >
                                <FacebookIcon />
                            </button>
                        </div>
                        <div className="bg-white shadow-md rounded-full p-2">
                            <button
                                onClick={() => handleShare('twitter')}
                                className="p-1.5 text-gray-500 hover:text-emerald-600 transition-colors block"
                                aria-label="Share on X (Twitter)"
                            >
                                <XIcon />
                            </button>
                        </div>
                        <div className="bg-white shadow-md rounded-full p-2">
                            <button
                                onClick={() => handleShare('linkedin')}
                                className="p-1.5 text-gray-500 hover:text-emerald-600 transition-colors block"
                                aria-label="Share on LinkedIn"
                            >
                                <LinkedInIcon />
                            </button>
                        </div>
                        <div className="bg-white shadow-md rounded-full p-2">
                            <button
                                onClick={() => handleShare('whatsapp')}
                                className="p-1.5 text-gray-500 hover:text-emerald-600 transition-colors block"
                                aria-label="Share on WhatsApp"
                            >
                                <WhatsAppIcon />
                            </button>
                        </div>
                        <div className="bg-white shadow-md rounded-full p-2">
                            <button
                                onClick={() => handleShare('copy')}
                                className="p-1.5 text-gray-500 hover:text-emerald-600 transition-colors block relative"
                                aria-label="Copy link"
                            >
                                <CopyIcon />
                                {showShareTooltip && (
                                    <div className="absolute left-full ml-3 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                                        Link copied!
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Article header */}
                <header className="bg-emerald-50/40 pt-4 pb-8">
                    <div className="container mx-auto px-4">
                        {/* Back to news link */}
                        <Link
                            href="/newsroom"
                            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group transition-all mb-6"
                        >
                            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform mr-1" />
                            Back to news
                        </Link>

                        {/* VivaDrive logo/name with animated glow */}
                        <div className="text-center mb-4 relative">
                            <div className="absolute inset-0 mx-auto w-32 h-10 bg-emerald-300 opacity-30 filter blur-xl rounded-full"></div>
                            <h2 className="text-2xl font-bold relative z-10">VivaDrive</h2>
                            <div className="w-32 h-[2px] bg-emerald-500 mx-auto mt-1 relative z-10"></div>
                        </div>

                        {/* Category badge */}
                        {article.category && (
                            <div className="flex justify-center mb-4 animate-fadeIn">
                                <div className={`py-1 px-3 rounded-full text-sm font-medium ${article.category === "AWARD" ? "bg-yellow-100 text-yellow-800" :
                                    article.category === "PARTNERSHIP ANNOUNCEMENT" ? "bg-blue-100 text-blue-800" :
                                        article.category === "EVENT" ? "bg-purple-100 text-purple-800" :
                                            "bg-gray-100 text-gray-800"
                                    }`}>
                                    {article.category}
                                </div>
                            </div>
                        )}

                        {/* Partner logos with animation */}
                        {article.partners && article.partners.length > 0 && (
                            <div className="flex justify-center items-center gap-6 my-6 animate-fadeIn">
                                {Array.isArray(article.partners[0]) || typeof article.partners[0] === 'string' ? (
                                    // Handle case where partners is an array of strings (like in the Sagenso article)
                                    <div className="text-center">
                                        {article.partners.join(' & ')} Partnership
                                    </div>
                                ) : (
                                    // Handle case where partners is an array of partner objects with logo and name
                                    article.partners.map((partner, index) => (
                                        <div key={index} className="flex items-center transform transition-transform hover:scale-105">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={220}
                                                height={80}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        )}

                        {/* Main article image with shadow and animation */}
                        {article.image && (
                            <div className="mt-8 mb-8 max-w-4xl mx-auto transform transition-all duration-700 hover:shadow-xl animate-fadeIn">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={800}
                                    height={400}
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                            </div>
                        )}

                        {/* Article metadata with icons */}
                        <div className="flex flex-wrap justify-center gap-x-4 mb-6 animate-fadeIn">
                            <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="h-4 w-4 mr-1 text-emerald-600" />
                                <time dateTime={article.date}>{formatDate(article.date)}</time>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <span className="text-emerald-500 mx-1">•</span>
                                <Clock className="h-4 w-4 mr-1 text-emerald-600" />
                                <span>{article.readTime} minute read</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <span className="text-emerald-500 mx-1">•</span>
                                <Tag className="h-4 w-4 mr-1 text-emerald-600" />
                                <span className="uppercase text-xs font-medium">{article.type}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Article title and excerpt */}
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-4xl text-center font-bold mb-6 max-w-4xl mx-auto animate-fadeIn">
                        {article.title}
                    </h1>

                    {/* Article excerpt with stylized border */}
                    {article.excerpt && (
                        <div className="max-w-3xl mx-auto mb-10 relative animate-fadeIn">
                            <div className="absolute top-0 left-0 w-20 h-1 bg-emerald-500"></div>
                            <div className="absolute bottom-0 right-0 w-20 h-1 bg-emerald-500"></div>
                            <p className="text-lg text-gray-600 text-center mx-auto px-6 py-4 italic">
                                {article.excerpt}
                            </p>
                        </div>
                    )}
                </div>

                {/* Article main content */}
                <main className="container mx-auto px-4 pb-12" ref={contentRef}>
                    <div className="max-w-3xl mx-auto animate-fadeIn">
                        {/* Processed article content */}
                        <div
                            className="prose prose-lg max-w-none mb-12
                                prose-headings:text-gray-800 prose-headings:font-bold 
                                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                                prose-a:text-emerald-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-emerald-700 hover:prose-a:underline 
                                prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50/50 
                                prose-blockquote:p-4 prose-blockquote:rounded-r prose-blockquote:my-8
                                prose-blockquote:text-gray-700 prose-blockquote:italic
                                prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
                                prose-figure:my-8 prose-figure:text-center
                                prose-figcaption:text-sm prose-figcaption:text-gray-500 prose-figcaption:mt-2 prose-figcaption:italic"
                            dangerouslySetInnerHTML={{ __html: processContent() }}
                        />

                        {/* Tags section with animation */}
                        {article.tags && article.tags.length > 0 && (
                            <div className="mb-10 animate-fadeIn">
                                <h4 className="text-gray-500 text-sm uppercase tracking-wider font-medium mb-3">TAGS</h4>
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map((tag) => (
                                        <Link
                                            key={tag}
                                            href={`/newsroom/tag/${tag}`}
                                            className="bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 px-3 py-1 rounded-full text-sm transition-colors"
                                        >
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Mobile social sharing */}
                        <div className="md:hidden border-t border-gray-200 pt-6 pb-6 animate-fadeIn">
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => handleShare('facebook')}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-emerald-50 text-gray-500 hover:text-emerald-600 transition-colors"
                                    aria-label="Share on Facebook"
                                >
                                    <FacebookIcon />
                                </button>
                                <button
                                    onClick={() => handleShare('twitter')}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-emerald-50 text-gray-500 hover:text-emerald-600 transition-colors"
                                    aria-label="Share on X (Twitter)"
                                >
                                    <XIcon />
                                </button>
                                <button
                                    onClick={() => handleShare('linkedin')}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-emerald-50 text-gray-500 hover:text-emerald-600 transition-colors"
                                    aria-label="Share on LinkedIn"
                                >
                                    <LinkedInIcon />
                                </button>
                                <button
                                    onClick={() => handleShare('whatsapp')}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-emerald-50 text-gray-500 hover:text-emerald-600 transition-colors"
                                    aria-label="Share on WhatsApp"
                                >
                                    <WhatsAppIcon />
                                </button>
                                <button
                                    onClick={() => handleShare('copy')}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-emerald-50 text-gray-500 hover:text-emerald-600 transition-colors relative"
                                    aria-label="Copy link"
                                >
                                    <CopyIcon />
                                    {showShareTooltip && (
                                        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                                            Link copied!
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Navigation footer */}
                        <div className="flex justify-between items-center mb-10 border-t border-gray-200 pt-6 animate-fadeIn">
                            <Link
                                href="/newsroom"
                                className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                            >
                                <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform mr-1" />
                                All articles
                            </Link>
                        </div>
                    </div>
                </main>
            </article>

            {/* Add custom animation keyframes */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default ArticlePage;