"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

// ✅ Define a clear type for property objects
type Property = {
  id: number;
  status: "RENT" | "SALE";
  type: string;
  price: string;
  title: string;
  address: string;
  images: string[];
  area: string;
  beds: number;
  baths: number;
  floors: number;
};

// ✅ Sample property data (typed)
const properties: Property[] = [
  {
    id: 1,
    status: "RENT",
    type: "Condo",
    price: "$350.00",
    title: "Majestic Residence in Valencia",
    address: "22 Laurence Street, Dover Gardens SA 5048",
    images: ["/caption-image1.jpg", "/caption-image2.jpg", "/caption-image3.jpg"],
    area: "55000/m²",
    beds: 4,
    baths: 5,
    floors: 1,
  },
  {
    id: 2,
    status: "RENT",
    type: "Shopping Mall",
    price: "$358.00",
    title: "Splendid Country House",
    address: "6 Station Lane, North Haven SA 5018, Australia",
    images: ["/caption-image1.jpg", "/caption-image2.jpg"],
    area: "55000/m²",
    beds: 2,
    baths: 3,
    floors: 2,
  },
  {
    id: 3,
    status: "SALE",
    type: "Villa",
    price: "$250.00",
    title: "Unique Villa With Private Beach",
    address: "5 Grove Avenue, Everard Park SA 5035, Australia",
    images: ["/caption-image1.jpg", "/caption-image2.jpg", "/caption-image3.jpg"],
    area: "5400/m²",
    beds: 3,
    baths: 4,
    floors: 2,
  },
];

const FeaturedProperties: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* 🔹 Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
          <span className="bg-blue-600 text-white px-6 py-2 rounded-t-md">
            FEATURED PROPERTIES
          </span>
        </h2>
      </div>

      {/* 🔹 Property Cards Grid */}
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {properties.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* 🔹 Image Slider */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={10}
                className="h-56"
              >
                {item.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={img}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* 🔹 Status Tag */}
              <span
                className={`absolute top-3 left-0 text-white text-sm font-semibold px-3 py-1 ${
                  item.status === "SALE" ? "bg-green-500" : "bg-orange-500"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* 🔹 Property Info */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.type}
                </h3>
                <span className="bg-blue-600 text-white px-3 py-1 text-sm rounded">
                  {item.price}
                </span>
              </div>

              <h4 className="text-xl font-medium text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm mt-1">{item.address}</p>

              {/* 🔹 Property Stats */}
              <div className="grid grid-cols-4 text-center mt-5 border-t border-gray-200 pt-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">{item.area}</p>
                  <span className="text-gray-500">Area</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.beds}</p>
                  <span className="text-gray-500">Beds</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.baths}</p>
                  <span className="text-gray-500">Baths</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.floors}</p>
                  <span className="text-gray-500">Floors</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
