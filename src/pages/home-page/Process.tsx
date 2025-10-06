// app/components/SetupProcess.tsx
"use client";
import MaxWidth from "@/components/max-width/MaxWidth";
import { FaHeadset, FaUserTie, FaDollarSign, FaLandmark } from "react-icons/fa";
import AnimatedCounter from '../../../node_modules/react-animated-counter/dist/esm/AnimatedCounter';

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
                    <div className="max-w-5xl mx-auto item-center px-6 grid grid-cols-1 md:grid-cols-3 text-center gap-10">

                        {/* Founded */}
                        <div className="flex flex-col items-center text-center">
                            <p className="text-5xl font-extrabold text-indigo-600 flex items-baseline">
                                <AnimatedCounter value={2019} color="#635AFC" fontSize="36px" />
                            </p>
                            <p className="text-gray-600 text-base mt-2">
                                When we founded Modernize
                            </p>
                        </div>

                        {/* Customers */}
                        <div className="flex flex-col items-center text-center">
                            <p className="text-5xl font-extrabold text-indigo-600 flex items-baseline">
                                <AnimatedCounter value={300} color="#635AFC" fontSize="36px" />
                                <span className="ml-1 text-2xl text-indigo-500">k+</span>
                            </p>
                            <p className="text-gray-600 text-base mt-2">
                                Customers on Modernize
                            </p>
                        </div>

                        {/* Dashboards */}
                        <div className="flex flex-col items-center text-center">
                            <p className="text-5xl font-extrabold text-indigo-600 flex items-baseline">
                                <AnimatedCounter value={25} color="#635AFC" fontSize="36px" />
                                <span className="ml-1 text-2xl text-indigo-500">k+</span>
                            </p>
                            <p className="text-gray-600 text-base mt-2">
                                Dashboards built using{" "}
                                <span className="font-semibold text-indigo-600">MetDash</span>
                            </p>
                        </div>

                    </div>

                </div>
                <div className="border-t mt-16 pt-12">
                    <div>
                        {/* <div>
                            <button onClick={() => handleCounterUpdate(false)}>Decrement</button>
                            <button onClick={() => handleCounterUpdate(true)}>Increment</button>
                        </div> */}
                    </div>
                </div>
            </section>
        </MaxWidth >
    );
}
