import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom styles for MapboxDraw
export const drawStyles = [
  {
    id: "gl-draw-polygon-fill-active",
    type: "fill",
    filter: ["all", ["==", "active", "true"], ["==", "$type", "Polygon"]],
    paint: { "fill-color": "#fbb03b", "fill-opacity": 0.5 }, // active fill
  },
  {
    id: "gl-draw-polygon-fill-inactive",
    type: "fill",
    filter: ["all", ["==", "active", "false"], ["==", "$type", "Polygon"]],
    paint: { "fill-color": "#00ff00", "fill-opacity": 0.3 }, // inactive fill
  },
  {
    id: "gl-draw-polygon-stroke-active",
    type: "line",
    filter: ["all", ["==", "active", "true"], ["==", "$type", "Polygon"]],
    paint: { "line-color": "#0000ff", "line-width": 2 }, // active stroke
  },
  {
    id: "gl-draw-polygon-vertex-active",
    type: "circle",
    filter: ["all", ["==", "meta", "vertex"], ["==", "active", "true"]],
    paint: { "circle-radius": 6, "circle-color": "#0000ff" }, // vertex
  },
];

export const logos = [
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
  "/caption-image1.jpg",
];
