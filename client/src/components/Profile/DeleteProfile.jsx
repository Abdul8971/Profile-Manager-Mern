import React, { useContext } from "react";
import styles from "./DeleteProfile.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileContext";

function DeleteProfile() {
  const { id } = useParams();
  const { deleteProfile } = useContext(ProfileContext);

  return (
    <div className={styles.deleteContainer}>
      <div className={styles.deleteInnerContainer}>
        <div className={styles.deleteImg}>
          <img src="/warning.png" alt="delete" />
          <h2>Delete</h2>
        </div>
        <p>Are you sure you want to delete?</p>
        <div className={styles.deleteCancelContainer}>
          <Link to={`/admin`}>
            <button className={styles.cancel}>Cancel</button>
          </Link>
          <Link to="/admin">
            <button className={styles.delete} onClick={() => deleteProfile(id)}>
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeleteProfile;
