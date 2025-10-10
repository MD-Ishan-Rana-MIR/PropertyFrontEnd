import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

import Marker from "@/components/MapAllinfo/Marker";
import Card from "@/components/MapAllinfo/Card";

import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { drawStyles } from "@/lib/utils";

// Mapbox access token
export const accessToken = (mapboxgl.accessToken =
  "pk.eyJ1IjoibHYyNiIsImEiOiJjbWc1eDFyNngwOXFmMmpwcmVpaWVvMWZwIn0.vJImM-fjkMZWOjNwnVG5ew");

const Map = ({ data, onLoad, onFeatureClick, onDrawFilter }) => {
  const mapContainer = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const mapRef = useRef(null);
  const drawRef = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = (mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [-75.15654, 39.94596],
      zoom: 12,
      style: "mapbox://styles/mapbox/streets-v12",
      // style: "mapbox://styles/mapbox/standard",
      //
    }));

    // Navigation controls
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Initialize Mapbox Draw
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: { polygon: true, trash: true },
      defaultMode: "draw_polygon",
      styles: drawStyles,
    });
    map.addControl(draw, "top-left");
    drawRef.current = draw;

    console.log("------", drawRef.current);

    // Draw events: pass drawn features to parent via callback
    const handleDrawUpdate = () => {
      if (onDrawFilter) {
        const drawnFeatures = draw.getAll();
        onDrawFilter(drawnFeatures);
      }
    };

    map.on("draw.create", handleDrawUpdate);
    map.on("draw.update", handleDrawUpdate);
    map.on("draw.delete", handleDrawUpdate);

    // Map load event
    map.on("load", () => {
      onLoad && onLoad(map);
      setMapLoaded(true);
    });

    // Cleanup
    return () => {
      map.off("draw.create", handleDrawUpdate);
      map.off("draw.update", handleDrawUpdate);
      map.off("draw.delete", handleDrawUpdate);
      map.remove();
    };
  }, []);

  return (
    <>
      <div ref={mapContainer} className="h-full w-full" />
      {mapLoaded &&
        data &&
        data.map((d, i) => (
          <Marker key={i} feature={d} map={mapRef.current}>
            <Card feature={d} width={300} shortImage onClick={onFeatureClick} />
          </Marker>
        ))}
    </>
  );
};

Map.propTypes = {
  data: PropTypes.array,
  onFeatureClick: PropTypes.func,
  onLoad: PropTypes.func,
  onDrawFilter: PropTypes.func, // new prop for drawn features
};

export default Map;
