"use client";

import React from "react";
import { getArticleBySlug } from "@/app/data/articles";
import ArticlePage from "@/app/newsroom/components/ArticlePage";
import { notFound } from "next/navigation";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ArticlePageProps {
    params: {
        slug: string;
    };
}

export default function ArticlePageRoute({ params }: ArticlePageProps) {
    const { slug } = params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <main className="flex-1">
                <ArticlePage article={article} />
            </main>
            <Footer />
        </div>
    );
}