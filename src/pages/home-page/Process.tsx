// app/components/SetupProcess.tsx
"use client";
import MaxWidth from "@/components/max-width/MaxWidth";
import { FaHeadset, FaUserTie, FaDollarSign, FaLandmark } from "react-icons/fa";

export default function SetupProcess() {
    return (
        <MaxWidth>
            <section className="bg-white py-16">
                {/* Top Section */}
                <div className=" mx-auto ">
                    <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
                        The hassle-free setup process
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        {/* Effective Support */}
                        <div className="bg-violet-50 rounded-xl p-6 shadow-sm">
                            <FaHeadset className="mx-auto text-3xl text-violet-600 mb-3" />
                            <h3 className="font-semibold text-gray-900">Effective Support</h3>
                            <p className="text-gray-500 text-sm mt-2">
                                Suspendisse vestibulum eu erat ac scelerisque.
                            </p>
                        </div>

                        {/* Expert Advisor */}
                        <div className="bg-rose-50 rounded-xl p-6 shadow-sm">
                            <FaUserTie className="mx-auto text-3xl text-rose-600 mb-3" />
                            <h3 className="font-semibold text-gray-900">Expert Advisor</h3>
                            <p className="text-gray-500 text-sm mt-2">
                                Suspendisse vestibulum eu erat ac scelerisque.
                            </p>
                        </div>

                        {/* Low Fees */}
                        <div className="bg-cyan-50 rounded-xl p-6 shadow-sm">
                            <FaDollarSign className="mx-auto text-3xl text-cyan-600 mb-3" />
                            <h3 className="font-semibold text-gray-900">Low Fees</h3>
                            <p className="text-gray-500 text-sm mt-2">
                                Suspendisse vestibulum eu erat ac scelerisque.
                            </p>
                        </div>

                        {/* Loan Facility */}
                        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                            <FaLandmark className="mx-auto text-3xl text-gray-600 mb-3" />
                            <h3 className="font-semibold text-gray-900">Loan Facility</h3>
                            <p className="text-gray-500 text-sm mt-2">
                                Suspendisse vestibulum eu erat ac scelerisque.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t mt-16 pt-12">
                    <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 text-center gap-10">
                        <div>
                            <h4 className="text-lg font-medium text-gray-800 mb-2">
                                A unique story in every number
                            </h4>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-indigo-600">2019</p>
                            <p className="text-gray-500 text-sm mt-1">
                                When we founded Modernize
                            </p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-indigo-600">300k+</p>
                            <p className="text-gray-500 text-sm mt-1">Customers on Modernize</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-indigo-600">25k+</p>
                            <p className="text-gray-500 text-sm mt-1">
                                Dashboards built using MetDash
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </MaxWidth>
    );
}
