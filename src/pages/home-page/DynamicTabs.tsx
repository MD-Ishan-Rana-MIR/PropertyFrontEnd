// components/DynamicTabs.tsx
'use client';

import React, { useState } from 'react';

// Import your content components
import { TABS_CONFIG } from '@/utils/utils';
import { TabData } from '@/lib/type';
import PropertyTable from '@/components/home/PropertyTable';


const TAB_CONTENT_MAP: Record<TabData['key'], React.ReactNode> = {
    property_type: <PropertyTable />,
    contract_type: <PropertyTable />,
    by_location: <PropertyTable />,
};

const DynamicTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabData['key']>(TABS_CONFIG[0].key);

    const buttonClass = (tabKey: TabData['key']) =>
        `px-6 py-3 text-sm font-medium transition-all duration-300 ${activeTab === tabKey
            ? 'text-white bg-indigo-600 border-b-2 border-indigo-600 rounded-t-lg'
            : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
        }`;

    return (
        <div className="w-full max-w-4xl mx-auto my-10">

            <div className="text-center space-y-4 my-16 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    View a list of Featured Properties.

                </h1>
                <p className="text-lg text-gray-500">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua.
                </p>
            </div>

            {/* Tab Headers */}
            <div className="flex border-b border-gray-200">
                {TABS_CONFIG.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={buttonClass(tab.key)}
                        role="tab"
                        aria-selected={activeTab === tab.key}
                        aria-controls={`panel-${tab.key}`}
                        id={`tab-${tab.key}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content Panel */}
            <div
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                tabIndex={0}
            >
                {TAB_CONTENT_MAP[activeTab]}
            </div>
        </div>
    );
};

export default DynamicTabs;