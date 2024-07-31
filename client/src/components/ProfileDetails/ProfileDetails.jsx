import { React, useContext, useState, useEffect } from "react";
import styles from "./ProfileDetails.module.css";
import MapComponent from "../Map/MapComponent";
import Geocoder from "../Map/Geocoder";
import { ProfileContext } from "../../contexts/ProfileContext";
import { useParams } from "react-router-dom";

const ProfileDetails = () => {
  const [singleProfile, setSingleProfile] = useState("");
  const { profiles } = useContext(ProfileContext);
  const { id } = useParams();

  useEffect(() => {
    const profile = profiles.find((pro) => pro._id === id);
    if (profile) {
      setSingleProfile(profile);
    }
  }, [id, profiles]);
  return (
    <>
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <img
            src={singleProfile.imageURL}
            alt={singleProfile.userName}
            className={styles.profileImage}
          />
          <div className={styles.profileDetails}>
            <h2 className={styles.profileUsername}>{singleProfile.userName}</h2>
            <div className={styles.profileDescription}>
              <p>{singleProfile.description}</p>
            </div>
            <p className={styles.profileLocation}>
              <b>Location</b>:{singleProfile.location}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mapComponent}>
        <MapComponent />
      </div>
    </>
  );
};

export default ProfileDetails;
