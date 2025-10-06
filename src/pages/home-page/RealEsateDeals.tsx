"use client";

import React from 'react'
import Image from "next/image";


const RealEsateDeals = () => {
    return (
        <div className="flex flex-col items-center gap-16 py-20 bg-gray-50">


            {/* Cards Section */}




            <div className="flex flex-col items-center gap-16 py-20 bg-gray-50">
                {/* Title Section */}
                <div className="text-center space-y-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        We are Providing the Best Real Estate Deals
                    </h1>
                    <p className="text-lg text-gray-500">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[85%]">
                    {/* Card 1 */}
                    <div className="group bg-white rounded-xl hover:bg-[#635AFC] px-4 shadow-lg py-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/caption-image1.jpg"
                                alt="Buy Property"
                                width={500}
                                height={500}
                                className="object-cover rounded"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white">
                            Search Home
                        </h3>
                        <p className="text-gray-500 transition-colors duration-300 group-hover:text-gray-100">
                            Looking to buy your new dream home? Explore thousands of verified listings.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white rounded-xl hover:bg-[#635AFC] px-4 shadow-lg py-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/caption-image1.jpg"
                                alt="Sell Property"
                                width={500}
                                height={500}
                                className="object-cover rounded"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white">
                            Sell Property
                        </h3>
                        <p className="text-gray-500 transition-colors duration-300 group-hover:text-gray-100">
                            Get the best price for your property with our expert marketing team.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white rounded-xl hover:bg-[#635AFC] px-4 shadow-lg py-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/caption-image1.jpg"
                                alt="Rent Property"
                                width={500}
                                height={500}
                                className="object-cover rounded"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white">
                            Rent Property
                        </h3>
                        <p className="text-gray-500 transition-colors duration-300 group-hover:text-gray-100">
                            Find affordable rental homes with flexible terms and verified landlords.
                        </p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default RealEsateDeals