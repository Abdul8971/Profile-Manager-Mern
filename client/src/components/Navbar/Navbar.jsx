import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ProfileContext } from "../../contexts/ProfileContext";

function Navbar() {
  const { setSearchInput, searchInput } = useContext(ProfileContext);
  // const[search,setSearch]=useState("")

  function handleInput(e) {
    setSearchInput(e.target.value);
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <input
          type="text"
          name="search"
          value={searchInput}
          className={styles.search}
          onChange={handleInput}
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
