import { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  const [selected, setSelected] = useState("Explore");
  const handleRoute = (route: string) => {
    router.push({
      pathname: `/${route}`,
    });
  };

  return (
    <>
      <div className={styles.sidebar}>
        <img
        style={{position:'absolute', top:'43px'}}
          src={"/sidebar_dots_icon.png"}
          alt="home_icon"
          width={30}
          height={34}
        />
        <button
          onClick={() => setSelected("Home")}
          className={
            selected === "Home"
              ? styles.sidebarButtonSelected
              : styles.sidebarButton
          }
        >
          <img
            src={selected === "Explore" ? "/home_icon.png" : "/home_icon.png"}
            alt="home_icon"
            width={16}
            height={16}
          />
          <div>Home</div>
        </button>
        <button
          onClick={() => {
            handleRoute("");
            setSelected("Explore");
          }}
          className={
            selected === "Explore"
              ? styles.sidebarButtonSelected
              : styles.sidebarButton
          }
        >
          <img
            src={
              selected === "Explore" ? "/search_icon.png" : "/search_icon.png"
            }
            alt="search_icon"
            width={16}
            height={16}
          />
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
          <img
            src={selected === "Explore" ? "/trips_icon.png" : "/trips_icon.png"}
            alt="trips_icon"
            width={16}
            height={16}
          />
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
          <img
            src={
              selected === "Explore" ? "/profile_icon.png" : "/profile_icon.png"
            }
            alt="profile_icon"
            width={16}
            height={16}
          />
          <div>Profile</div>
        </button>
      </div>
    </>
  );
}
