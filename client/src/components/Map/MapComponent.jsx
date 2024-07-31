// src/components/Map.js
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";

mapboxgl.accessToken = add_mapbox_token_here;

const MapComponent = ({ longitude = 77.209, latitude = 28.6139 }) => {
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 9,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    markerRef.current = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);

    return () => map.remove();
  }, []);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLngLat([longitude, latitude]);
    }
  }, [longitude, latitude]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default MapComponent;
