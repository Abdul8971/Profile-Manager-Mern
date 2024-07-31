import React, { useState, useContext } from "react";
import styles from "./AddProfile.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";

function AddProfile() {
  const { addProfile } = useContext(ProfileContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    imageURL: "",
    description: "",
    location: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    // addBudget(formData);
    console.log(formData);
    addProfile(formData);
    setFormData({
      userName: "",
      imageURL: "",
      description: "",
      location: "",
    });
    navigate("/admin");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Add Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="userName"
            placeholder="Name"
            className={styles.inputField}
            value={formData.category}
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
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <textarea
            type="text"
            name="description"
            rows="5"
            placeholder="Description"
            className={styles.inputField}
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            required
            className={styles.inputField}
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/admin">
            <button type="submit" className={styles.button}>
              Cancel
            </button>
          </Link>
          <button type="submit" className={styles.button}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProfile;
