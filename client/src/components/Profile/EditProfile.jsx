import React, { useState, useContext, useEffect } from "react";
import styles from "./AddProfile.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";

function EditProfile() {
  const { profiles, editProfile } = useContext(ProfileContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    imageURL: "",
    description: "",
    location: "",
  });

  useEffect(() => {
    const profile = profiles.find((pro) => pro._id === id);
    if (profile) {
      setFormData(profile);
    }
  }, [id, profiles]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    editProfile(id, formData);
    navigate("/admin");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="userName"
            placeholder="Name"
            className={styles.inputField}
            value={formData.userName}
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="imageURL"
            placeholder="Image URL"
            className={styles.inputField}
            value={formData.imageURL}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <textarea
            name="description"
            rows="5"
            placeholder="Description"
            className={styles.inputField}
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className={styles.inputField}
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/admin">
            <button type="button" className={styles.button}>
              Cancel
            </button>
          </Link>
          <button type="submit" className={styles.button}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
