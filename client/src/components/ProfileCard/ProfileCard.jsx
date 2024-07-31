import React from "react";
import styles from "./ProfileCard.module.css";
import { Link } from "react-router-dom";

const ProfileCard = ({ image, userName, description, id }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
          src={image}
          alt={`${userName}'s profile`}
          className={styles.image}
        />
      </div>
      <div className={styles.profileInf}>
        <h2 className={styles.name}>{userName}</h2>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <Link to={`ProfileDetails/${id}`}>
          <button className={styles.SummaryBtn}>Summary</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
