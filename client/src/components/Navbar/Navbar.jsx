import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <input
          type="text"
          name="search"
          className={styles.search}
          placeholder="Search..."
        />
        <nav className={styles.nav}>
          <div className={styles.homeRoute}>
            <Link to="/">Home</Link>
          </div>
          <Link to="/admin" className={styles.button}>
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
