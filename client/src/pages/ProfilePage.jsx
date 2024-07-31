import React from "react";
import ProfileDetails from "../components/ProfileDetails";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <div className="profile-page">
      <ProfileDetails id={id} />
    </div>
  );
};

export default ProfilePage;
