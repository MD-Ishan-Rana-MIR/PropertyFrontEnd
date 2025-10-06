"use client";
import DrawPolygonArea from "@/components/home/Map";
import { MapPin, LayoutDashboard, Globe, Database, FileText } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy-load Mapbox (only if you want interactive map)
// const Map = dynamic(() => import("@/components/MapSection"), { ssr: false });

export default function ServicesPage() {
    return (
        <main className="bg-gray-900 text-white min-h-screen">
            {/* ========= HERO SECTION ========= */}
            <section className="relative flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-16 bg-gray-900 text-white overflow-hidden">
                {/* Left Side Image */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden ">
                    <Image
                        src="/large-parcel-card.webp"
                        alt="Land visualization"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side Text */}
                <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Building the future of land intelligence — from marketing websites to
                        powerful user dashboards and backend CMS.
                        <br />
                        We integrate mapping tools, paywall systems, and SEO-optimized
                        interfaces for seamless experiences.
                    </p>
                </div>
            </section>

            {/* ========= SCOPE OF WORK ========= */}
            <section className="max-w-6xl mx-auto px-6 py-20 relative z-20">
                <h2 className="text-3xl font-bold text-center mb-12">Scope of Work</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-800 rounded-2xl p-6 hover:bg-green-800/40 transition">
                        <Globe className="text-green-400 mb-3" size={36} />
                        <h3 className="text-xl font-semibold mb-3">Main Site</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Marketing website with Home, Pricing, & Policy pages</li>
                            <li>• Paywall & subscription integration</li>
                            <li>• On-page SEO optimization</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 hover:bg-green-800/40 transition">
                        <LayoutDashboard className="text-green-400 mb-3" size={36} />
                        <h3 className="text-xl font-semibold mb-3">Primary User Dashboard</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Custom dashboard for primary users</li>
                            <li>• Multiple pages/subpages integration</li>
                            <li>• Secure API + backend connectivity</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 hover:bg-green-800/40 transition">
                        <LayoutDashboard className="text-green-400 mb-3" size={36} />
                        <h3 className="text-xl font-semibold mb-3">Secondary User Dashboard</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Tailored dashboard experience</li>
                            <li>• Independent role-based access</li>
                            <li>• Backend integration (if applicable)</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 hover:bg-green-800/40 transition">
                        <Database className="text-green-400 mb-3" size={36} />
                        <h3 className="text-xl font-semibold mb-3">Back End CMS</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>• CMS for content and user management</li>
                            <li>• CRUD functionality for data</li>
                            <li>• Integrated with front-end systems</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ========= DELIVERABLES ========= */}
            <section className="bg-green-900/30 py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Deliverables</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        <div className="bg-gray-800 p-6 rounded-2xl">
                            <FileText className="text-green-400 mb-3" size={32} />
                            <h3 className="text-lg font-semibold mb-2">Main Marketing Site</h3>
                            <p className="text-gray-300 text-sm">
                                Fully functional responsive marketing site with all key pages & SEO.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-2xl">
                            <LayoutDashboard className="text-green-400 mb-3" size={32} />
                            <h3 className="text-lg font-semibold mb-2">Primary Dashboard</h3>
                            <p className="text-gray-300 text-sm">
                                Complete dashboard with post-login pages & user flows.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-2xl">
                            <LayoutDashboard className="text-green-400 mb-3" size={32} />
                            <h3 className="text-lg font-semibold mb-2">Secondary Dashboard</h3>
                            <p className="text-gray-300 text-sm">
                                Secondary dashboard interface for partner or client users.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-2xl">
                            <Database className="text-green-400 mb-3" size={32} />
                            <h3 className="text-lg font-semibold mb-2">CMS System</h3>
                            <p className="text-gray-300 text-sm">
                                Back-end content and data management system integrated with APIs.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-2xl">
                            <FileText className="text-green-400 mb-3" size={32} />
                            <h3 className="text-lg font-semibold mb-2">Technical Documentation</h3>
                            <p className="text-gray-300 text-sm">
                                Detailed system architecture & developer handoff documentation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========= CTA ========= */}
            <section className="py-20 text-center bg-gradient-to-b from-gray-800 to-gray-900">
                <h2 className="text-3xl font-bold mb-4">Ready to Build Your Land SaaS Platform?</h2>
                <p className="text-gray-300 mb-6">
                    Partner with us to design, develop, and deliver your complete land intelligence system.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-xl">
                    Request Proposal
                </button>
            </section>
        </main>
    );
}
