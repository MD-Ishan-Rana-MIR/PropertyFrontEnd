'use client';

import React from 'react';

const properties = [
    {
        property: {
            title: "Modern Villa in Barcelona",
            address: "15 Rambla Street, Barcelona 08001",
            price: 2750000,
            area: 48000,
            area_unit: "m2",
            bedrooms: 5,
            bathrooms: 4,
            floors: 2,
            image: "barcelona_villa.jpg"
        }
    },
    {
        property: {
            title: "Seaside Retreat in Malaga",
            address: "8 Costa del Sol, Malaga 29001",
            price: 1850000,
            area: 35000,
            area_unit: "m2",
            bedrooms: 3,
            bathrooms: 3,
            floors: 1,
            image: "malaga_retreat.jpg"
        }
    },
    {
        property: {
            title: "Seaside Retreat in Malaga",
            address: "8 Costa del Sol, Malaga 29001",
            price: 1850000,
            area: 35000,
            area_unit: "m2",
            bedrooms: 3,
            bathrooms: 3,
            floors: 1,
            image: "malaga_retreat.jpg"
        }
    },
    {
        property: {
            title: "Seaside Retreat in Malaga",
            address: "8 Costa del Sol, Malaga 29001",
            price: 1850000,
            area: 35000,
            area_unit: "m2",
            bedrooms: 3,
            bathrooms: 3,
            floors: 1,
            image: "malaga_retreat.jpg"
        }
    },
    {
        property: {
            title: "Seaside Retreat in Malaga",
            address: "8 Costa del Sol, Malaga 29001",
            price: 1850000,
            area: 35000,
            area_unit: "m2",
            bedrooms: 3,
            bathrooms: 3,
            floors: 1,
            image: "malaga_retreat.jpg"
        }
    },
    {
        property: {
            title: "Seaside Retreat in Malaga",
            address: "8 Costa del Sol, Malaga 29001",
            price: 1850000,
            area: 35000,
            area_unit: "m2",
            bedrooms: 3,
            bathrooms: 3,
            floors: 1,
            image: "malaga_retreat.jpg"
        }
    },
    {
        property: {
            title: "Seaside Retreat in Malaga",
            address: "8 Costa del Sol, Malaga 29001",
            price: 1850000,
            area: 35000,
            area_unit: "m2",
            bedrooms: 3,
            bathrooms: 3,
            floors: 1,
            image: "malaga_retreat.jpg"
        }
    },
    {
        property: {
            title: "Seaside Retreat in Malaga",
            address: "8 Costa del Sol, Malaga 29001",
            price: 1850000,
            area: 35000,
            area_unit: "m2",
            bedrooms: 3,
            bathrooms: 3,
            floors: 1,
            image: "malaga_retreat.jpg"
        }
    },
    // Add the rest of your 8 properties here...
];

const PropertyTable = () => {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(price);
    };

    const formatArea = (area: number, unit: string) => {
        return `${area.toLocaleString()} ${unit}`;
    };

    return (
        <div className="min-h-screen bg-gray-50 ">
            <div className="max-w-7xl mx-auto ">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-6 py-4">
                        <h1 className="text-2xl font-bold text-white">Premium Properties</h1>
                        <p className="text-blue-100 mt-1">Luxury real estate listings</p>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                                        Property
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                                        Location
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                                        Area
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                                        Beds
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                                        Baths
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                                        Floors
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {properties.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-12 w-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                                    <span className="text-gray-500 text-xs">🏠</span>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {item.property.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{item.property.address}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-semibold text-green-600">
                                                {formatPrice(item.property.price)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {formatArea(item.property.area, item.property.area_unit)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                {item.property.bedrooms}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {item.property.bathrooms}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {item.property.floors}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">
                                Showing {properties.length} properties
                            </p>
                            <div className="flex space-x-2">
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                    Previous
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyTable;