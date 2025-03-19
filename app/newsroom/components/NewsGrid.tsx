"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import NewsCard from "./NewsCard";

const NewsGrid = ({ articles = [] }) => {  // Set default empty array
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Recent Press Releases heading with line animation */}
            <div
                className={`flex items-center justify-between border-b border-gray-200 pb-4 mb-10 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <h2 className="text-2xl font-bold flex items-center">
                    <span className="w-1 h-6 bg-emerald-500 rounded-full mr-2 inline-block"></span>
                    Recent Press Releases
                </h2>
                <Link
                    href="/press-center/all-news"
                    className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center group bg-emerald-50/50 px-4 py-1.5 rounded-full hover:bg-emerald-50 transition-all"
                >
                    View all
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform ml-0.5" />
                </Link>
            </div>

            {/* Articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles && articles.length > 0 ? (
                    articles.map((article, index) => (
                        <NewsCard
                            key={article.id}
                            article={article}
                            index={index}
                            isLoaded={isLoaded}
                        />
                    ))
                ) : (
                    <div className="col-span-3 text-center py-10">
                        <p className="text-gray-500">No articles found</p>
                    </div>
                )}
            </div>

            {/* Only show pagination if there are articles */}
            {articles && articles.length > 0 && (
                <div className="flex justify-between items-center mt-16 mb-8">
                    <Link
                        href="/press-center/page/1"
                        className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center group"
                    >
                        <ChevronRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform mr-1" />
                        Previous
                    </Link>
                    <Link
                        href="/press-center/page/2"
                        className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center group"
                    >
                        Next
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform ml-0.5" />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NewsGrid;