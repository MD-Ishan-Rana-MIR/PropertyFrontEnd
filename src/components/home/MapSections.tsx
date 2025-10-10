'use client';

import { useState } from 'react';
import Head from 'next/head';
import Map from './Map';

export default function RealEstateSearch() {
    const [searchParams, setSearchParams] = useState({
        county: 'New Castle County, DE',
        address: '',
        city: '',
        leadTypes: '',
        propertyTypes: '',
        price: ''
    });

    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);


    const properties = [
        {
            id: 1,
            address: '205 5th Ave',
            location: 'Wilmington, DE 19805',
            sqft: '871 sq. Ft.',
            type: 'Single Family',
            ownership: 'Individual Owned',
            tags: ['Absence Owners', '3+'],
            value: '$159,400',
            equity: '100%',
            pricePerSqft: null
        },
        {
            id: 2,
            address: '108 Ruth St',
            location: 'Wilmington, DE 19805',
            sqft: '871 sq. Ft.',
            type: 'Single Family',
            ownership: 'Individual Owned',
            tags: ['Failed Listing', 'Absence Owners', '4+'],
            value: '$150,250',
            equity: null,
            pricePerSqft: '$140'
        },
        {
            id: 3,
            address: '124 N Rodney St',
            location: 'Wilmington, DE 19805',
            sqft: '871 sq. Ft.',
            type: 'Single Family',
            ownership: 'Individual Owned',
            tags: ['More (1)'],
            value: null,
            equity: null,
            pricePerSqft: null
        }
    ]

    const [counties] = useState([
        'New Castle County, DE',
        'Kent County, DE',
        'Sussex County, DE'
    ]);


    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setSearchParams(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSaveSearch = () => {
        alert('Search saved!');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Real Estate Search</title>
                <meta name="description" content="Real estate property search" />
            </Head>

            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold text-gray-800">Real Estate Search</h1>
                        <div className="text-sm text-gray-600">
                            <span className="font-medium">42,601</span> of 42,601 Results
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-6">
                {/* Filters Row */}
                <div className="bg-white rounded-lg shadow p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                        {/* County */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                County
                            </label>
                            <div className="relative">
                                <select
                                    name="county"
                                    value={searchParams.county}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                                >
                                    {counties.map(county => (
                                        <option key={county} value={county}>{county}</option>
                                    ))}
                                </select>

                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={searchParams.address}
                                onChange={handleInputChange}
                                placeholder="Address"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={searchParams.city}
                                onChange={handleInputChange}
                                placeholder="City"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                            />
                        </div>


                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Price
                            </label>
                            <input
                                type="text"
                                name="price"
                                value={searchParams.price}
                                onChange={handleInputChange}
                                placeholder="Price"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>




                </div>

                <div className="flex flex-col  lg:flex-row gap-6">
                    {/* Sidebar - Cities List */}

                    <div className="lg:w-[70%]">
                        <Map />
                    </div>


                    {/* Main Content - Property Listings */}
                    <div className="lg:w-1/2">
                        {/* Sort and Results Info */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-sm text-gray-600">
                                Page <span className="font-medium">1</span> of 171
                            </div>
                            <div>
                                <select className="border border-gray-300 rounded-md py-1 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                                    <option>Sort by</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest</option>
                                </select>
                            </div>
                        </div>

                        {/* Property Listings */}
                        <div className="space-y-4">
                            {properties.map(property => (
                                <div key={property.id} className="bg-white rounded-lg shadow p-4">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-2/3">
                                            <h3 className="font-bold text-lg text-gray-800">{property.address}</h3>
                                            <p className="text-gray-600">{property.location}</p>
                                            <div className="mt-2 text-sm text-gray-500">
                                                <span>{property.sqft}</span> • <span>{property.type}</span> • <span>{property.ownership}</span>
                                            </div>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {property.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className={`inline-block px-2 py-1 text-xs rounded ${tag.includes('Absence')
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : tag.includes('Failed')
                                                                ? 'bg-red-100 text-red-800'
                                                                : 'bg-blue-100 text-blue-800'
                                                            }`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 mt-4 md:mt-0 md:text-right">
                                            {property.value && (
                                                <div className="mb-2">
                                                    <div className="font-bold text-lg text-gray-800">{property.value}</div>
                                                    <div className="text-sm text-gray-600">Est. Value</div>
                                                </div>
                                            )}
                                            {property.equity && (
                                                <div className="mb-2">
                                                    <div className="font-bold text-lg text-green-600">{property.equity}</div>
                                                    <div className="text-sm text-gray-600">Equity</div>
                                                </div>
                                            )}
                                            {property.pricePerSqft && (
                                                <div>
                                                    <div className="font-bold text-lg text-gray-800">{property.pricePerSqft}</div>
                                                    <div className="text-sm text-gray-600">Price/SqFt</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </main>
        </div>
    );
}