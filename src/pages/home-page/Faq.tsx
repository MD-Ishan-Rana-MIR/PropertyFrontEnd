"use client"; // if using Next.js 13 app directory
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // optional: for dropdown icon
import { faqData } from "@/lib/data";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-3xl mx-auto py-20 px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>

            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-xl shadow-md overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left flex justify-between items-center px-6 py-4 focus:outline-none"
                        >
                            <span className="text-lg font-medium text-gray-100">
                                {item.question}
                            </span>
                            <ChevronDown
                                size={20}
                                className={`text-gray-300 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-4 text-gray-300 text-sm transition-all duration-300">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
