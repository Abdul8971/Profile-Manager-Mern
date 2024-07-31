import { React, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./AdminPage.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ProfileContext } from "../../contexts/ProfileContext";

function AdminPage() {
  const { profiles } = useContext(ProfileContext);

  return (
    <>
      <div className={styles.adminContainer}>
        <Link to="/admin/addProfile" className={styles.createUser}>
          <div>
            <div className={styles.createNewUser}>
              <span>+</span>
              <p>Add New User</p>
            </div>
          </div>
        </Link>
        <div className={styles.allUsers}>
          {profiles.map((profile, index) => {
            return (
              <div key={index} className={styles.profileCard}>
                <VisibilityIcon className={styles.eyeIcon} />
                <img
                  src={profile.imageURL}
                  alt={`${profile.userName}'s profile`}
                  className={styles.profileImage}
                />
                <h3 className={styles.userName}>{profile.userName}</h3>
                <div>
                  <Link to={`/admin/editProfile/${profile._id}`}>
                    <EditIcon className={styles.edit} />
                  </Link>
                  <Link to={`/admin/deleteProfile/${profile._id}`}>
                    <DeleteIcon className={styles.delete} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AdminPage;
