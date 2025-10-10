"use client";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import StaticMapImage from "./StaticMap";
import { PropertyData } from "./Card";
import React, { useEffect } from "react";

const Modal = ({ feature, onClose }) => {
  if (!feature) return null;

  const [lng, lat] = feature?.geometry?.coordinates || [];
  const { imageUrl } = feature?.properties || {};

  // Optional: Close on ESC key
  // useEffect(() => {
  //   const handleEsc = (e) => e.key === "Escape" && onClose();
  //   window.addEventListener("keydown", handleEsc);
  //   return () => window.removeEventListener("keydown", handleEsc);
  // }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 py-8"
      >
        <div className="relative w-full max-w-[550px] bg-white rounded-2xl shadow-lg">
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-50 h-9 w-9 bg-gray-100 hover:bg-gray-200 flex justify-center items-center rounded-md"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" className="text-gray-600" />
          </button>

          {/* Image Header */}
          <div
            className="h-64 bg-cover bg-center rounded-t-2xl"
            style={{
              backgroundImage: `url(${imageUrl ? `http://localhost:3000/${imageUrl}` : "/fallback.jpg"})`,
            }}
          ></div>

          {/* Content Section */}
          <div className="p-6 space-y-4">
            <PropertyData feature={feature} large />

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              sed erat rutrum, eleifend sem eu, blandit nisi. Nullam finibus
              aliquet nisi nec pharetra.
            </p>

            {/* Static Map */}
            <div className="relative">
              {lng && lat ? (
                <StaticMapImage lng={lng} lat={lat} />
              ) : (
                <p className="text-gray-500 text-sm">Map unavailable</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  feature: PropTypes.shape({
    geometry: PropTypes.shape({
      coordinates: PropTypes.array,
    }),
    properties: PropTypes.shape({
      imageUrl: PropTypes.string,
    }),
  }),
  onClose: PropTypes.func.isRequired,
};

export default Modal;
