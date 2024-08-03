// src/components/Map/Geocoder.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import MapComponent from "./MapComponent";

const Geocoder = ({ location = "Pune" }) => {
  const [coordinates, setCoordinates] = useState({
    longitude: 73.8567,
    latitude: 18.5204,
  });

  useEffect(() => {
    const geocodeAddress = async () => {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            location
          )}.json?access_token=${"add_mapBox_token_here"}`
        );
        const { features } = response.data;
        if (features.length > 0) {
          const [longitude, latitude] = features[0].center;
          setCoordinates({ longitude, latitude });
        } else {
          alert("Location not found. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching the geocode data:", error);
        alert("An error occurred. Please try again.");
      }
    };

    geocodeAddress();
  }, [location]);

  return (
    <MapComponent
      longitude={coordinates.longitude}
      latitude={coordinates.latitude}
    />
  );
};

export default Geocoder;
