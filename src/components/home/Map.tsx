// "use client";

// import { useEffect, useRef, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// // Types for better TypeScript support
// interface MapBoxProps {
//     center?: [number, number];
//     zoom?: number;
//     style?: string;
//     className?: string;
//     height?: number | string;
// }

// const MapBox = ({
//     center = [90.4125, 23.8103], // Dhaka, Bangladesh as default
//     zoom = 10,
//     style = "mapbox://styles/mapbox/satellite-streets-v12",
//     className = "w-full h-[500px] rounded-2xl overflow-hidden shadow-md",
//     height = 500,
// }: MapBoxProps) => {
//     const mapContainerRef = useRef<HTMLDivElement>(null);
//     const mapRef = useRef<mapboxgl.Map | null>(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // Mapbox configuration
//     mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.eyJ1IjoibHYyNiIsImEiOiJjbWc1eDFyNngwOXFmMmpwcmVpaWVvMWZwIn0.vJImM-fjkMZWOjNwnVG5ew";

//     useEffect(() => {
//         // Validate container ref
//         if (!mapContainerRef.current) {
//             setError("Map container not found");
//             return;
//         }

//         // Validate access token
//         if (!mapboxgl.accessToken) {
//             setError("Mapbox access token is missing");
//             return;
//         }

//         // Initialize map
//         try {
//             const map = new mapboxgl.Map({
//                 container: mapContainerRef.current,
//                 style,
//                 center,
//                 zoom,
//                 attributionControl: false, // We'll add it manually with better positioning
//             });

//             mapRef.current = map;

//             // Wait for map to load
//             map.on("load", () => {
//                 setIsLoading(false);
//                 console.log("Map loaded successfully");
//             });

//             // Handle map errors
//             map.on("error", (e) => {
//                 console.error("Map error:", e);
//                 setError("Failed to load map");
//                 setIsLoading(false);
//             });

//             // Add controls
//             map.addControl(new mapboxgl.NavigationControl(), "top-right");
//             map.addControl(new mapboxgl.AttributionControl(), "bottom-right");
//             map.addControl(new mapboxgl.ScaleControl(), "bottom-left");

//             // Cleanup function
//             return () => {
//                 if (mapRef.current) {
//                     mapRef.current.remove();
//                     mapRef.current = null;
//                 }
//             };
//         } catch (err) {
//             console.error("Error initializing map:", err);
//             setError("Failed to initialize map");
//             setIsLoading(false);
//         }
//     }, [center, zoom, style]);

//     // Handle dynamic height
//     const containerStyle = {
//         height: typeof height === "number" ? `${height}px` : height,
//     };

//     return (
//         <div className={className} style={containerStyle}>
//             {/* Loading state */}
//             {isLoading && (
//                 <div className="w-full h-full flex items-center justify-center bg-gray-100">
//                     <div className="text-center">
//                         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
//                         <p className="mt-2 text-gray-600">Loading map...</p>
//                     </div>
//                 </div>
//             )}

//             {/* Error state */}
//             {error && (
//                 <div className="w-full h-full flex items-center justify-center bg-red-50">
//                     <div className="text-center text-red-600">
//                         <p className="font-semibold">Map Error</p>
//                         <p className="text-sm">{error}</p>
//                     </div>
//                 </div>
//             )}

//             {/* Map container */}
//             <div
//                 ref={mapContainerRef}
//                 className="w-full h-full"
//                 style={{ display: error || isLoading ? "none" : "block" }}
//             />
//         </div>
//     );
// };

// export default MapBox;




"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { drawStyles } from "@/lib/utils";

const DrawPolygonArea = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<Map | null>(null);
    const drawRef = useRef<MapboxDraw | null>(null);

    const [area, setArea] = useState<number | null>(null);



    useEffect(() => {
        if (!mapContainerRef.current) return;

        mapboxgl.accessToken =
            "pk.eyJ1IjoibHYyNiIsImEiOiJjbWc1eDFyNngwOXFmMmpwcmVpaWVvMWZwIn0.vJImM-fjkMZWOjNwnVG5ew";

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/satellite-streets-v12",
            center: [90.4125, 23.8103], // Dhaka
            zoom: 11,
        });

        mapRef.current = map;

        // Initialize Mapbox Draw with custom styles
        const draw = new MapboxDraw({
            displayControlsDefault: false,
            controls: { polygon: true, trash: true },
            defaultMode: "draw_polygon",
            styles: drawStyles,
        });

        map.addControl(new mapboxgl.NavigationControl(), "top-right");
        map.addControl(draw, "top-left");
        drawRef.current = draw;

        // Event handler: update area
        const updateArea = () => {
            const data = draw.getAll();
            if (data.features.length > 0) {
                const areaCalc = turf.area(data);
                setArea(Math.round(areaCalc * 100) / 100); // in m²
            } else {
                setArea(null);
            }
        };

        map.on("draw.create", updateArea);
        map.on("draw.update", updateArea);
        map.on("draw.delete", updateArea);

        // Cleanup on unmount
        return () => {
            map.off("draw.create", updateArea);
            map.off("draw.update", updateArea);
            map.off("draw.delete", updateArea);
            map.remove();
        };
    }, []);

    return (
        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <div ref={mapContainerRef} className="w-full h-full" />

            {/* Area Display Panel */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-md">
                {area ? (
                    <div className="text-gray-800 text-sm">
                        <p>
                            🧭 <strong>{area.toLocaleString()}</strong> m²
                        </p>
                        <p className="text-xs text-gray-500">
                            ({(area / 1000000).toFixed(3)} km²)
                        </p>
                    </div>
                ) : (
                    <p className="text-gray-600 text-sm">Click & draw a polygon 🖊️</p>
                )}
            </div>
        </div>
    );
};

export default DrawPolygonArea;








// 3D working 

// "use client";

// import { useEffect, useRef } from "react";
// import "mapbox-gl/dist/mapbox-gl.css";

// const FlyTo3DMap = () => {
//     const mapContainerRef = useRef<HTMLDivElement>(null);

//     const locations = {
//         dhaka: {
//             center: [90.4125, 23.8103] as [number, number],
//             zoom: 15,
//             pitch: 60,
//             bearing: 0,
//         },
//         coxsBazar: {
//             center: [91.9882, 21.4272] as [number, number],
//             zoom: 14,
//             pitch: 45,
//             bearing: 45,
//         },
//         sundarbans: {
//             center: [89.5333, 21.9497] as [number, number],
//             zoom: 12,
//             pitch: 75,
//             bearing: -45,
//         },
//     };

//     useEffect(() => {
//         if (!mapContainerRef.current) return;

//         // Dynamic import for Next.js SSR safety
//         (async () => {
//             const mapboxgl = (await import("mapbox-gl")).default;
//             mapboxgl.accessToken =
//                 "pk.eyJ1IjoibHYyNiIsImEiOiJjbWc1eDFyNngwOXFmMmpwcmVpaWVvMWZwIn0.vJImM-fjkMZWOjNwnVG5ew";

//             const map = new mapboxgl.Map({
//                 container: mapContainerRef.current,
//                 style: "mapbox://styles/mapbox/satellite-streets-v12",
//                 ...locations.dhaka,
//             });

//             // Add navigation control (zoom, rotate)
//             map.addControl(new mapboxgl.NavigationControl(), "top-right");

//             // Load 3D terrain and buildings when style is ready
//             map.on("style.load", () => {
//                 if (!map.getSource("mapbox-dem")) {
//                     map.addSource("mapbox-dem", {
//                         type: "raster-dem",
//                         url: "mapbox://mapbox.mapbox-terrain-dem-v1",
//                     });
//                 }

//                 map.setTerrain({ source: "mapbox-dem", exaggeration: 2 });

//                 if (!map.getLayer("3d-buildings")) {
//                     map.addLayer({
//                         id: "3d-buildings",
//                         source: "composite",
//                         "source-layer": "building",
//                         type: "fill-extrusion",
//                         paint: {
//                             "fill-extrusion-color": "#aaa",
//                             "fill-extrusion-height": ["get", "height"],
//                             "fill-extrusion-base": ["get", "min_height"],
//                             "fill-extrusion-opacity": 0.7,
//                         },
//                     });
//                 }
//             });

//             // FlyTo animation
//             const flyTo = (location: keyof typeof locations) => {
//                 map.flyTo({
//                     ...locations[location],
//                     duration: 3000,
//                     essential: true,
//                 });
//             };

//             // Create overlay buttons
//             const buttonContainer = document.createElement("div");
//             buttonContainer.className = "map-overlay";

//             Object.keys(locations).forEach((location) => {
//                 const button = document.createElement("button");
//                 button.textContent =
//                     location.charAt(0).toUpperCase() + location.slice(1);
//                 button.className = "fly-to-btn";
//                 button.onclick = () => flyTo(location as keyof typeof locations);
//                 buttonContainer.appendChild(button);
//             });

//             map.getContainer().appendChild(buttonContainer);

//             return () => map.remove();
//         })();
//     }, []);

//     return (
//         <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-lg">
//             <div ref={mapContainerRef} className="w-full h-full" />
//         </div>
//     );
// };

// export default FlyTo3DMap;





// "use client";

// import { useEffect, useRef } from "react";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { Map } from "mapbox-gl";



// const MapBox = () => {
//     const mapContainerRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         (async () => {
//             const mapboxgl = (await import("mapbox-gl")).default;
//             mapboxgl.accessToken =
//                 "pk.eyJ1IjoibHYyNiIsImEiOiJjbWc1eDFyNngwOXFmMmpwcmVpaWVvMWZwIn0.vJImM-fjkMZWOjNwnVG5ew";

//             const map = new mapboxgl.Map({
//                 container: mapContainerRef.current!,
//                 style: "mapbox://styles/mapbox/streets-v11",
//                 center: [90.4125, 23.8103],
//                 zoom: 10,
//             });

//             console.log(map);


//             map.addControl(new mapboxgl.NavigationControl(), "top-right");

//             return () => map.remove();
//         })();
//     }, []);



//     return (
//         <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-md">
//             {/* <div ref={mapContainerRef} className="w-full h-full" /> */}
//             <Map
//       initialViewState={{
//         longitude: -100,
//         latitude: 40,
//         zoom: 3.5
//       }}
//       style={{ width: 800, height: 600 }}
//       mapStyle="mapbox://styles/mapbox/streets-v12" // Or a Maplibre style
//       mapboxAccessToken="pk.eyJ1IjoibHYyNiIsImEiOiJjbWc1eDFyNngwOXFmMmpwcmVpaWVvMWZwIn0.vJImM-fjkMZWOjNwnVG5ew" // If using Mapbox
//     />

//         </div>
//     );
// };

// export default MapBox;
// "use client";

// import { useEffect, useRef } from "react";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { Map } from "mapbox-gl";



// const MapBox = () => {
//     const mapContainerRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         (async () => {
//             const mapboxgl = (await import("mapbox-gl")).default;
//             mapboxgl.accessToken =
//                 "pk.eyJ1IjoibHYyNiIsImEiOiJjbWc1eDFyNngwOXFmMmpwcmVpaWVvMWZwIn0.vJImM-fjkMZWOjNwnVG5ew";

//             const map = new mapboxgl.Map({
//                 container: mapContainerRef.current!,
//                 style: "mapbox://styles/mapbox/streets-v11",
//                 center: [90.4125, 23.8103],
//                 zoom: 10,
//             });

//             console.log(map);


//             map.addControl(new mapboxgl.NavigationControl(), "top-right");

//             return () => map.remove();
//         })();
//     }, []);



//     return (
//         <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-md">
//             {/* <div ref={mapContainerRef} className="w-full h-full" /> */}
//             <Map
//       initialViewState={{
//         longitude: -100,
//         latitude: 40,
//         zoom: 3.5
//       }}
//       style={{ width: 800, height: 600 }}
//       mapStyle="mapbox://styles/mapbox/streets-v12" // Or a Maplibre style
//       mapboxAccessToken="pk.eyJ1IjoibHYyNiIsImEiOiJjbWc1eDFyNngwOXFmMmpwcmVpaWVvMWZwIn0.vJImM-fjkMZWOjNwnVG5ew" // If using Mapbox
//     />

//         </div>
//     );
// };

// export default MapBox;
