import React, { useState } from "react";
import styles from "./AdminSidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faUsers, faBook, faComments, faUsersCog, faLifeRing, faBars } from "@fortawesome/free-solid-svg-icons";

function AdminSidebar() {
    const [isSidebarHidden, setSidebarHidden] = useState(false);
      const [isSubmenuVisible, setSubmenuVisible] = useState(false);
    
      const toggleSidebar = () => {
        setSidebarHidden(!isSidebarHidden);
      };
    
      const toggleSubmenu = (e) => {
        e.preventDefault();
        setSubmenuVisible((prev) => !prev);
      };
    return(
        <div className={styles.sidebarContainer}>
            <div className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ""}`}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>P3L</h1>
        <a href="#" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
        </a>
        <a href="#" onClick={toggleSubmenu}>
          <FontAwesomeIcon icon={faUsers} /> Manage account
        </a>
        <div className={`${styles.submenu} ${isSubmenuVisible ? styles.visible : ""}`}>
          <a href="#">User account</a>
          <a href="#">Instructor account</a>
        </div>
        <a href="#">
          <FontAwesomeIcon icon={faBook} /> Manage course
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faComments} /> Manage feedback
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faUsersCog} /> Manage community
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLifeRing} /> Support
        </a>
      </div>
      <div className={`${styles.mainContent} ${isSidebarHidden ? styles.fullWidth : ""}`}>
        <div className={styles.header}>
          <h2>
            <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} /> Dashboard
          </h2>
          <div className={styles.userInfo}>
            <img
              src={require("../../images/logo.png")}
              alt="Logo"
              height="100"
              width="100"
            />
            <span>
              P3L<br />Admin
            </span>
          </div>
        </div>
        </div>
        </div>
    );
}
export default AdminSidebar;