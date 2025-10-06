import Image from "next/image";
import React from "react";

const LandMap = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 md:px-0 py-10">
      {/* Text Section */}
      <div className="text-center space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Extensive Parcel Data, Smart Search & Map Creation
        </h1>
        <p className="text-lg text-gray-500">
          Parcel data & map layers just a swipe away. Tab through detailed
          parcel info and rich map overlays to access the property data you
          need.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src="/map-view-image.webp"
          alt="Parcel Map View"
          width={600}
          height={700}
          className="object-cover  max-w-full h-auto "
        />
      </div>
    </div>
  );
};

export default LandMap;
