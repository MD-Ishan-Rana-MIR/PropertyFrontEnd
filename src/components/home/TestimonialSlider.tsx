'use client';

import React, { useState, useEffect } from 'react';

const testimonialsData = {
    testimonials: [
        {
            id: 1,
            name: "Steve Curtis",
            position: "AGENT",
            avatar: "👨‍💼",
            quote: "Ut vix primis tractatos. Ad est alterum epicuri accusamus. Duo per id his qualisque deseruisse reformidans ex, quo omnesque cotidieque. Dolor voluptua per, his in congue.",
            rating: 5
        },
        {
            id: 2,
            name: "Elia Smith",
            position: "HOME INSPECTOR",
            avatar: "👩‍🔧",
            quote: "Ut vix primis tractatos. Ad est alterum epicuri accusamus. Duo per id his qualisque deseruisse reformidans ex, quo omnesque cotidieque. Dolor voluptua per, his in congue.",
            rating: 5
        },
        {
            id: 3,
            name: "Joey Treblo",
            position: "MANAGER",
            avatar: "👨‍💼",
            quote: "Ut vix primis tractatos. Ad est alterum epicuri accusamus. Duo per id his qualisque deseruisse reformidans ex, quo omnesque cotidieque. Dolor voluptua per, his in congue.",
            rating: 5
        },
        {
            id: 4,
            name: "Mari Adams",
            position: "SALES ADVISOR",
            avatar: "👩‍💼",
            quote: "Ut vix primis tractatos. Ad est alterum epicuri accusamus. Duo per id his qualisque deseruisse reformidans ex, quo omnesque cotidieque. Dolor voluptua per, his in congue.",
            rating: 5
        }
    ]
};

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === testimonialsData.testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? testimonialsData.testimonials.length - 1 : prev - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Auto slide functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide, isAutoPlaying]);

    const StarRating = ({ rating }: { rating: number }) => {
        return (
            <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        See what others said about us
                    </h1>
                    <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
                </div>

                {/* Testimonial Slider */}
                <div
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Main Slider Container */}
                    <div className="overflow-hidden rounded-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonialsData.testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                                        {/* Quote Icon */}
                                        <div className="text-6xl text-gray-200 mb-6">&quot;</div>

                                        {/* Testimonial Text */}
                                        <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                                            {testimonial.quote}
                                        </blockquote>

                                        {/* Rating */}
                                        <div className="mb-6">
                                            <StarRating rating={testimonial.rating} />
                                        </div>

                                        {/* Author Info */}
                                        <div className="flex items-center space-x-4">
                                            <div className="text-4xl">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-gray-500 text-sm uppercase tracking-wider">
                                                    {testimonial.position}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {testimonialsData.testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-gray-800 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Grid Layout for Larger Screens */}
                <div className="hidden lg:grid grid-cols-2 gap-8 mt-12">
                    {testimonialsData.testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-4xl text-gray-200 mb-4">&quot;</div>
                            <blockquote className="text-gray-700 leading-relaxed mb-6">
                                {testimonial.quote}
                            </blockquote>
                            <div className="flex items-center space-x-4">
                                <div className="text-3xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm uppercase tracking-wider">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;