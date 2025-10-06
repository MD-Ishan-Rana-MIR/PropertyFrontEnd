'use client';

import React from 'react';

const newsData = {
    articles: [
        {
            id: 1,
            date: "13. MARCH 2023",
            category: "PROPERTY",
            author: "By Julie Coleman",
            title: "How to Find a Good Real Estate Agent",
            excerpt: "Ea cibo choro eos, in duo ludico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persegueris contentiones nec, ex sit modus",
            icon: "🔍"
        },
        {
            id: 2,
            date: "13. MARCH 2023",
            category: "PROPERTY",
            author: "By Julie Coleman",
            title: "15 Ways to Negotiate Your Lease Price",
            excerpt: "Ea cibo choro eos, in duo ludico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persegueris contentiones nec, ex sit modus",
            icon: "💼"
        },
        {
            id: 3,
            date: "13. MARCH 2023",
            category: "PROPERTY",
            author: "By Julie Coleman",
            title: "Houses Designed by Interior Experts",
            excerpt: "Ea cibo choro eos, in duo ludico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persegueris contentiones nec, ex sit modus",
            icon: "🏡"
        }
    ]
};

const RealEstateNewsModern = () => {
    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Read our real estate recent news
                    </h1>
                    <div className="w-20 h-0.5 bg-gray-400 mx-auto"></div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {newsData.articles.map((article) => (
                        <article
                            key={article.id}
                            className="group cursor-pointer"
                        >
                            {/* Article Card */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 group-hover:shadow-md transition-all duration-300 h-full flex flex-col">
                                {/* Date */}
                                <div className="mb-6">
                                    <span className="text-sm text-gray-500 font-medium tracking-wide">
                                        {article.date}
                                    </span>
                                </div>

                                {/* Icon and Category */}
                                <div className="flex items-center mb-4">
                                    <div className="text-2xl mr-3">
                                        {article.icon}
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                                        <span>{article.category}</span>
                                        <span className="mx-2">•</span>
                                        <span>{article.author}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                    {article.excerpt}
                                </p>

                                {/* Read More Button */}
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <button className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-blue-700 transition-colors duration-300 group/btn">
                                        Read More
                                        <svg
                                            className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Articles Button */}
                <div className="text-center mt-12">
                    <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 uppercase tracking-wide">
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RealEstateNewsModern;