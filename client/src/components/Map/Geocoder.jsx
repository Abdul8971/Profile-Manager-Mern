// src/App.js
import React, { useState } from "react";
import axios from "axios";

const Geocoder = () => {
  const [coordinates, setCoordinates] = useState({
    longitude: -74.5,
    latitude: 40,
  });
  const [address, setAddress] = useState("");

  const updateCoordinates = (newLongitude, newLatitude) => {
    setCoordinates({ longitude: newLongitude, latitude: newLatitude });
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const geocodeAddress = async () => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          address
        )}.json?access_token=pk.eyJ1IjoiYWJkdWw4OTcxIiwiYSI6ImNsejlpdGdoMjA1a3QycnM4bWZxd3J1NG0ifQ.2ytGDy9McgoM68Bt0-ZB1g`
      );
      const { features } = response.data;
      console.log(features[0].center);
      if (features.length > 0) {
        const [longitude, latitude] = features[0].center;
        updateCoordinates(longitude, latitude);
      } else {
        alert("Location not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching the geocode data:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter an address"
      />
      <button onClick={geocodeAddress}>Geocode Address</button>
    </div>
  );
};

export default Geocoder;
