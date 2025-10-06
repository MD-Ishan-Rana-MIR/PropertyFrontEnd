'use client';

import React, { useState } from 'react';

const DiscoverSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                Discover a new way of living
                            </h1>

                            {/* Description Text */}
                            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                                I forgot so late em at sea qdc acimodum eloquentiam sui to mais longue cum. No magna esum event.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                            Make an enquiry
                        </button>

                        {/* Feature Card */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 max-w-md">
                            <h3 className="text-xl font-semibold mb-3">
                                Save your time and easily rent or sell your property with the lowest commission on the real estate market.
                            </h3>
                            <div className="w-12 h-1 bg-white rounded-full mb-4"></div>
                            <p className="text-gray-300 text-sm">
                                Experience seamless property transactions with our innovative platform designed for modern real estate needs.
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Form */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                    Your name*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                                    Your email*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                                    Your phone number*
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-white text-black py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                            >
                                Make an enquiry
                            </button>
                        </form>

                        {/* Additional Info */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-400 text-sm">
                                By submitting this form, you agree to our privacy policy and terms of service.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Elements */}
                <div className="mt-16 flex justify-center space-x-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="w-3 h-3 bg-gray-600 rounded-full opacity-50"
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;