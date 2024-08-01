import { React, useState, useContext, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import "./HomePage.css";
import axios from "axios";
import { ProfileContext } from "../../contexts/ProfileContext";

function HomePage() {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setSearchInput, searchInput } = useContext(ProfileContext);

  const fetchProfiles = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/Profile`);
      setProfiles(response.data);
      setIsLoading(false);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching Profile:", error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.userName.toLowerCase().includes(searchInput.toLowerCase()) ||
      profile.location.toLowerCase().includes(searchInput.toLowerCase())
  );
  if (isLoading) {
    return (
      <>
        <p className="loading">Loading...</p>
      </>
    );
  }
  return (
    <>
      <div className="home-container">
        {filteredProfiles.map((profile) => {
          return (
            <ProfileCard
              key={profile._id}
              image={profile.imageURL}
              userName={profile.userName}
              description={profile.description}
              id={profile._id}
            />
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
