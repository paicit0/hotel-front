import { useState } from "react";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  const [selected, setSelected] = useState("Explore");
  return (
    <>
      <div className={styles.sidebar}>
        <button
          onClick={() => setSelected("Home")}
          className={
            selected === "Home"
              ? styles.sidebarButtonSelected
              : styles.sidebarButton
          }
        >
          {selected === "Home" ? <div>iconS</div> : <div>icon</div>}
          <div>Home</div>
        </button>
        <button
          onClick={() => setSelected("Explore")}
          className={
            selected === "Explore"
              ? styles.sidebarButtonSelected
              : styles.sidebarButton
          }
        >
          <img src="/searchIcon.png" alt="searchIcon" width={17} height={17} />
          <div>Explore</div>
        </button>
        <button
          onClick={() => setSelected("Trips")}
          className={
            selected === "Trips"
              ? styles.sidebarButtonSelected
              : styles.sidebarButton
          }
        >
          <div>icon</div>
          <div>Trips</div>
        </button>
        <button
          onClick={() => setSelected("Profile")}
          className={
            selected === "Profile"
              ? styles.sidebarButtonSelected
              : styles.sidebarButton
          }
        >
          <div>icon</div>
          <div>Profile</div>
        </button>
      </div>
    </>
  );
}
