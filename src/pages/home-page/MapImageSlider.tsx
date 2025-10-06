// "use client";
// import { useState, useRef } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//     {
//         id: 1,
//         title: "Elevate Your Maps in Stunning Hi-Resolution",
//         subtitle: "New in Premium & Pro. Hi Res Aerial Imagery",
//         image: "/caption-image1.jpg",
//     },
//     {
//         id: 2,
//         title: "The Most Extensive Parcel Data Info Available",
//         subtitle: "Private Property Info",
//         image: "/caption-image1.jpg",
//     },
//     {
//         id: 3,
//         title: "See Property Boundaries Nationwide",
//         subtitle: "Property Boundaries",
//         image: "/caption-image1.jpg",
//     },
//     {
//         id: 4,
//         title: "Overview Maps Across the Nation",
//         subtitle: "Map Layers",
//         image: "/caption-image1.jpg",
//     },
// ];

// export default function MapImageSlider() {
//     const [current, setCurrent] = useState(0);
//     const touchStartX = useRef(0);
//     const touchEndX = useRef(0);

//     const handlePrev = () => {
//         setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     };

//     const handleNext = () => {
//         setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     };

//     // Handle swipe gestures
//     const handleTouchStart = (e: React.TouchEvent) => {
//         touchStartX.current = e.touches[0].clientX;
//     };

//     const handleTouchEnd = (e: React.TouchEvent) => {
//         touchEndX.current = e.changedTouches[0].clientX;
//         if (touchStartX.current - touchEndX.current > 50) handleNext();
//         if (touchEndX.current - touchStartX.current > 50) handlePrev();
//     };

//     return (
//         <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl">
//             <div
//                 className="flex transition-transform duration-500"
//                 style={{ transform: `translateX(-${current * 100}%)` }}
//                 onTouchStart={handleTouchStart}
//                 onTouchEnd={handleTouchEnd}
//             >
//                 {slides.map((slide) => (
//                     <div
//                         key={slide.id}
//                         className="w-full flex-shrink-0 relative h-[400px] bg-black"
//                     >
//                         <Image
//                             src={slide.image}
//                             alt={slide.title}
//                             fill
//                             className="object-cover opacity-90"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                         <div className="absolute bottom-6 left-6 text-white">
//                             <p className="text-sm font-semibold">{slide.subtitle}</p>
//                             <h2 className="text-2xl font-bold">{slide.title}</h2>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Left Button */}
//             <button
//                 onClick={handlePrev}
//                 className="absolute top-1/2 -translate-y-1/2 left-3 bg-black/40 hover:bg-black/70 p-2 rounded-full"
//             >
//                 <ChevronLeft className="text-white" size={24} />
//             </button>

//             {/* Right Button */}
//             <button
//                 onClick={handleNext}
//                 className="absolute top-1/2 -translate-y-1/2 right-3 bg-black/40 hover:bg-black/70 p-2 rounded-full"
//             >
//                 <ChevronRight className="text-white" size={24} />
//             </button>
//         </div>
//     );
// }


"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Elevate Your Maps in Stunning Hi-Resolution",
        subtitle: "New in Premium & Pro. Hi Res Aerial Imagery",
        image: "/location-1.webp",
    },
    {
        id: 2,
        title: "The Most Extensive Parcel Data Info Available",
        subtitle: "Private Property Info",
        image: "/location-2x.jpg",
    },
    {
        id: 3,
        title: "See Property Boundaries Nationwide",
        subtitle: "Property Boundaries",
        image: "/location-3.webp",
    },
];

export default function ImageSlider() {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        if (touchStartX.current - touchEndX.current > 50) handleNext();
        if (touchEndX.current - touchStartX.current > 50) handlePrev();
    };

    return (

        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold mb-6">
                Discover More with Land
            </h1>
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-lg">
                {/* Slider Container */}

                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="w-full flex-shrink-0 relative h-[450px]"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                priority

                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-sm font-medium text-gray-200">
                                    {slide.subtitle}
                                </p>
                                <h2 className="text-2xl font-bold max-w-[70%] leading-snug">
                                    {slide.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Left Button */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 -translate-y-1/2 left-3 bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
                >
                    <ChevronLeft className="text-white" size={28} />
                </button>

                {/* Right Button */}
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 -translate-y-1/2 right-3 bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
                >
                    <ChevronRight className="text-white" size={28} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 w-full flex justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-110" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </main>


    );
}
