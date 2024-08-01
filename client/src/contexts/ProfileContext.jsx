import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api";
const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const fetchProfiles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/Profile`, {});
      setProfiles(response.data);
    } catch (error) {
      console.error("Error fetching Profile:", error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const addProfile = async (newProfile) => {
    try {
      await axios.post(`${BASE_URL}/Profile`, newProfile, {});
      fetchProfiles();
    } catch (error) {
      console.error("Error adding Profile:", error);
    }
  };

  const editProfile = async (id, updatedProfile) => {
    try {
      await axios.put(`${BASE_URL}/Profile/${id}`, updatedProfile, {});
      fetchProfiles();
    } catch (error) {
      console.error("Error editing Profile:", error);
    }
  };

  const deleteProfile = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/Profile/${id}`, {});
      fetchProfiles();
    } catch (error) {
      console.error("Error deleting Profile:", error);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        addProfile,
        editProfile,
        deleteProfile,
        setSearchInput,
        searchInput,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
