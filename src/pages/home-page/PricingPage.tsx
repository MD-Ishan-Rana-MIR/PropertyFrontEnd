'use client';

import { Check } from "lucide-react";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 via-green-950 to-gray-900 text-white">
            {/* ======= CHOOSE YOUR PLAN ======= */}
            <section className="max-w-6xl mx-auto py-20 px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
                <p className="text-gray-300 mb-10">
                    All plans include access on desktop and the mobile app available for Android and Apple.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {/* Acres Plus */}
                    <div className="bg-gray-800 rounded-2xl p-8 flex-1 shadow-lg">
                        <h3 className="text-lg font-semibold text-green-400 mb-2">Acres Plus</h3>
                        <p className="text-3xl font-bold mb-4">
                            $7.49<span className="text-base font-normal">/mo</span>
                        </p>
                        <ul className="text-gray-300 text-sm text-left space-y-2 mb-6 max-h-80 overflow-y-auto">
                            {[
                                "Location Search",
                                "Landowner Names",
                                "Parcel Maps",
                                "Parcel Boundaries",
                                "Property History",
                                "Zoning Info",
                                "Tax Records",
                                "Nearby Amenities",
                                "Ownership Details",
                                "GIS Layers",
                                "Satellite Imagery",
                                "Property Photos",
                                "Recent Sales Data",
                                "Custom Reports",
                                "Alerts & Notifications",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <Check className="text-green-400" size={16} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl">
                            Start Free Trial
                        </button>
                    </div>

                    {/* Acres Pro */}
                    <div className="bg-green-700 rounded-2xl p-8 flex-1 shadow-lg border border-green-400">
                        <h3 className="text-lg font-semibold mb-2">Acres Pro</h3>
                        <p className="text-3xl font-bold mb-4">
                            $9.49<span className="text-base font-normal">/mo</span>
                        </p>
                        <ul className="text-gray-100 text-sm text-left space-y-2 mb-6 max-h-80 overflow-y-auto">
                            {[
                                "Everything in Acres Plus",
                                "Data Layers",
                                "Advanced Search",
                                "Unlimited Exports",
                                "Market Trends",
                                "Custom Maps",
                                "Collaboration Tools",
                                "Priority Support",
                                "Property Alerts",
                                "PDF Reports",
                                "Ownership History",
                                "Parcel Analytics",
                                "Neighborhood Insights",
                                "Property Valuation",
                                "API Access",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <Check className="text-white" size={16} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-white text-green-700 font-semibold py-2 px-6 rounded-xl">
                            Choose Plan
                        </button>
                    </div>

                    {/* Acres Enterprise */}
                    <div className="bg-gray-800 rounded-2xl p-8 flex-1 shadow-lg">
                        <h3 className="text-lg font-semibold text-green-400 mb-2">Acres Enterprise</h3>
                        <p className="text-3xl font-bold mb-4">Custom</p>
                        <ul className="text-gray-300 text-sm text-left space-y-2 mb-6 max-h-80 overflow-y-auto">
                            {[
                                "Everything in Acres Pro",
                                "API Integration",
                                "Team Accounts",
                                "Private Data Hosting",
                                "Dedicated Account Manager",
                                "Custom Branding",
                                "Advanced Analytics",
                                "Bulk Data Upload",
                                "Automated Reports",
                                "Priority SLA Support",
                                "Custom Workflows",
                                "Third-Party Integrations",
                                "Extended Export Options",
                                "Training & Onboarding",
                                "Data Security Controls",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <Check className="text-green-400" size={16} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl">
                            Request Demo
                        </button>
                    </div>
                </div>
            </section>


            {/* ======= GET STARTED FOR FREE ======= */}
            <section className="bg-green-800 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Get Started for Free</h2>
                <p className="text-gray-200 mb-6">
                    Try Acres for free with a free account to search land and view basic property insights.
                </p>
                <button className="bg-white text-green-800 font-semibold py-2 px-6 rounded-xl hover:bg-gray-100">
                    Sign Up
                </button>
            </section>

            {/* ======= WHAT PEOPLE ARE SAYING ======= */}
            <section className="max-w-6xl mx-auto py-20 px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">What People Are Saying</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-800 rounded-2xl p-8 text-gray-200">
                        <p className="italic mb-4">
                            “Acres is outstanding. The visualization of land data is unmatched
                            and saves me countless hours of property research.”
                        </p>
                        <p className="font-semibold text-green-400">— Fortune 500 Financial Institution</p>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-8 text-gray-200">
                        <p className="italic mb-4">
                            “As a land investor and agent, I use Acres daily. The data layers and
                            boundary mapping have completely changed how I assess properties.”
                        </p>
                        <p className="font-semibold text-green-400">— President, Pearson Realty</p>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-8 text-gray-200">
                        <p className="italic mb-4">
                            “It makes land data simple to access and visualize, giving us a huge advantage
                            in finding new properties for our clients.”
                        </p>
                        <p className="font-semibold text-green-400">— Debbie G.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
