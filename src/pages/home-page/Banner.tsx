"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Image from "next/image";

const slides = [
  { img: "https://picsum.photos/id/1018/1600/600", heading: "Luxury Apartments in the City" },
  { img: "https://picsum.photos/id/1015/1600/600", heading: "Modern Villas with Pool" },
  { img: "https://picsum.photos/id/1016/1600/600", heading: "Office Spaces for Rent" },
  { img: "https://picsum.photos/id/1019/1600/600", heading: "Shops in Prime Locations" },
  { img: "https://picsum.photos/id/1020/1600/600", heading: "Open Land for Development" },
];

export default function BannerPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const locationRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);

  const locations = ["New York", "London", "Tokyo", "Paris", "Dhaka"];
  const propertyTypes = ["Apartment", "Villa", "Office", "Shop", "Land"];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setLocation(location);
      }
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) {
        setPropertyType(propertyType);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [location, propertyType]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="w-full flex-shrink-0 relative">
            <Image
              src={slide.img}
              alt={`slide-${idx}`}
              width={2000}
              height={2000}
              className="w-full h-[600px] object-cover"
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Heading Text at Top */}
            <div className="absolute top-28 left-1/2 -translate-x-1/2">
              <h2 className="text-4xl font-bold text-white text-center drop-shadow-lg">
                {slide.heading}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white cursor-pointer"
      >
        <ChevronLeft className=" cursor-pointer " size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white cursor-pointer"
      >
        <ChevronRight className=" cursor-pointer " size={28} />
      </button>

      {/* Search Box */}
      <div className="absolute inset-0 flex items-center top-1/6 justify-center">
        <div className="bg-white/90 p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-3 relative">
          {/* Location Input */}
          <div className="relative" ref={locationRef}>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none w-64"
            />
            {location && (
              <div className="absolute top-full z-50 left-0 w-full bg-white border rounded-lg mt-1 shadow-lg max-h-40 overflow-y-auto">
                {locations.filter((loc) =>
                  loc.toLowerCase().includes(location.toLowerCase())
                ).length > 0 ? (
                  locations
                    .filter((loc) =>
                      loc.toLowerCase().includes(location.toLowerCase())
                    )
                    .map((loc, i) => (
                      <div
                        key={i}
                        onClick={() => setLocation(loc)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {loc}
                      </div>
                    ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">Not Found</div>
                )}
              </div>
            )}
          </div>

          {/* Property Type Input */}
          <div className="relative" ref={typeRef}>
            <input
              type="text"
              placeholder="Property type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none w-64"
            />
            {propertyType && (
              <div className="absolute top-full z-50 left-0 w-full bg-white border rounded-lg mt-1 shadow-lg max-h-40 overflow-y-auto">
                {propertyTypes.filter((pt) =>
                  pt.toLowerCase().includes(propertyType.toLowerCase())
                ).length > 0 ? (
                  propertyTypes
                    .filter((pt) =>
                      pt.toLowerCase().includes(propertyType.toLowerCase())
                    )
                    .map((pt, i) => (
                      <div
                        key={i}
                        onClick={() => setPropertyType(pt)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {pt}
                      </div>
                    ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">Not Found</div>
                )}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="flex items-center gap-2 btnColor text-white px-5 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
            <Search size={18} /> Search
          </button>
        </div>
      </div>
    </div>
  );
}
