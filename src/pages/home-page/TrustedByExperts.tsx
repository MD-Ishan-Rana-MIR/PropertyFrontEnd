"use client";
import { logos } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function TrustedByExperts() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);
    const scrollPosition = useRef(0); // store last scroll position

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const speed = 0.7; // scroll speed
        let animationFrame: number;

        const scrollLogos = () => {
            if (!container) return;

            if (!paused) {
                scrollPosition.current += speed;
                if (scrollPosition.current >= container.scrollWidth / 2) {
                    scrollPosition.current = 0; // seamless loop
                }
                container.scrollLeft = scrollPosition.current;
            }

            animationFrame = requestAnimationFrame(scrollLogos);
        };

        animationFrame = requestAnimationFrame(scrollLogos);
        return () => cancelAnimationFrame(animationFrame);
    }, [paused]);



    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-12 overflow-hidden">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    TRUSTED BY INDUSTRY EXPERTS
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Our platform is trusted by leading organizations and professionals
                    across the globe for precision, scalability, and innovation.
                </p>
            </div>

            {/* Scrolling Logos */}
            <div
                ref={scrollRef}
                className="flex gap-12 overflow-x-hidden whitespace-nowrap select-none no-scrollbar"
                onMouseEnter={() => setPaused(true)} // pause scroll
                onMouseLeave={() => setPaused(false)} // resume from same place
            >
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-12">
                        {logos.map((logo, index) => (
                            <div
                                key={`${i}-${index}`}
                                className="flex-shrink-0 w-28 h-14 md:w-32 md:h-16 relative opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out"
                            >
                                <Image
                                    src={logo}
                                    alt={`Logo ${index}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
