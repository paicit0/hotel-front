// yarn dev

import { useState } from "react";
import styles from "../styles/index.module.css";
import Searchbar from "../components/Searchbar";
import { useRouter } from "next/router";
export default function Home() {
  const [category, setCategory] = useState("Hotel");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push({
      pathname: "/hotels",
      query: { location: location },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div className={styles.searchbarContainer}>
          <Searchbar />
        </div>
        <div
          style={{
            width: "505px",
            height: "57px",
            marginBottom: "26px",
            color: "blue",
            fontWeight: "500",
            fontSize: 38,
            flexFlow: "1",
            fontFamily: "Poppins",
          }}
        >
          What Are You Looking For?
        </div>
        <div className={styles.categoryButtonContainer}>
          <button
            className={
              category === "Hotel"
                ? styles.categoryButtonSelected
                : styles.categoryButton
            }
            onClick={() => setCategory("Hotel")}
          >
            <div
              className={
                category === "Hotel"
                  ? styles.categoryButtonIconWrapper
                  : undefined
              }
            >
              <img
                src="/hotel_icon.png"
                alt="hotel_icon"
                width={36}
                height={24}
              />
            </div>
            <div>Hotel</div>
          </button>

          <button
            className={
              category === "Flight"
                ? styles.categoryButtonSelected
                : styles.categoryButton
            }
            onClick={() => setCategory("Flight")}
          >
            <div
              className={
                category === "Flight"
                  ? styles.categoryButtonIconWrapper
                  : undefined
              }
            >
              <img
                src="/flight_icon.png"
                alt="flight_icon"
                width={36}
                height={36}
              />
            </div>
            <div>Flight</div>
          </button>

          <button
            className={
              category === "Car"
                ? styles.categoryButtonSelected
                : styles.categoryButton
            }
            onClick={() => setCategory("Car")}
          >
            <div
              className={
                category === "Car"
                  ? styles.categoryButtonIconWrapper
                  : undefined
              }
            >
              <img src="/car_icon.png" alt="car_icon" width={36} height={36} />
            </div>
            <div>Car</div>
          </button>
        </div>
        <input
          className={styles.inputLocation}
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Pattaya"
        />
        <div>
          <input
            className={styles.inputStartDate}
            onClick={(e) => e.currentTarget.showPicker()}
            type="date"
            id="startDate"
            name="startDate"
          />
          <input
            className={styles.inputEndDate}
            onClick={(e) => e.currentTarget.showPicker()}
            type="date"
            id="endDate"
            name="endDate"
            placeholder="Select a start date"
          />
        </div>
        <div className={styles.inputPeople}> 2 adult, 1 children - 1 room</div>
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
        <div>Recent Searches</div>
        <div className={styles.hotelRecentSearchCard}>
          <div>hotel_img</div>
          <div style={{ marginLeft: "32px", marginRight: "121.39px" }}>
            <div style={{ fontFamily: "Poppins" }}>Hotel_Name</div>
            <div>⭐⭐⭐⭐⭐</div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>⭐0.0</div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#A8A8A8",
                  fontFamily: "Poppins",
                  fontWeight: "200",
                }}
              >
                0000 Reviews
              </div>
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#A8A8A8",
                fontFamily: "Poppins",
                fontWeight: "200",
              }}
            >
              Amenities
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <div className={styles.armeIconWrapper}>
                <img
                  src="/arme_parking.png"
                  alt="Parking"
                  width={16.43}
                  height={11.64}
                />
              </div>
              <div className={styles.armeIconWrapper}>
                <img src="/arme_bath.png" alt="Bath" width={17.6} height={16} />
              </div>
              <div className={styles.armeIconWrapper}>
                <img
                  src="/arme_bar.png"
                  alt="Bar"
                  width={12.22}
                  height={16.16}
                />
              </div>
              <div className={styles.armeIconWrapper}>
                <img
                  src="/arme_wifi.png"
                  alt="Wifi"
                  width={13.16}
                  height={9.93}
                />
              </div>
              <div className={styles.armeIconWrapper}>
                <img
                  src="/arme_gym.png"
                  alt="Gym"
                  width={16.65}
                  height={9.36}
                />
              </div>
            </div>
            <div>0,000/night</div>
          </div>
          <div className={styles.bookNowButton}>
            <button>Book Now</button>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <img
          src="/explore_india.png"
          alt="India"
          width="982.58px"
          height="100%"
        />
        <div
          style={{ fontFamily: "Poppins", fontSize: "63px", color: "black" }}
        >
          Incredible India
        </div>
        <div
          style={{ fontFamily: "Poppins", fontSize: "33px", color: "black" }}
        >
          “For where thy treasure is, <br />
          there also will thy heart be.”
        </div>
        <button className={styles.takeTourButton}>
          <div
            style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "20px" }}
          >
            Take Tour
          </div>
        </button>
      </div>
    </div>
  );
}
