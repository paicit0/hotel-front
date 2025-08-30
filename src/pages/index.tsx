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
            color: "blue",
            fontWeight: "500",
            fontSize: 30,
            flexFlow: "1",
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
              {/* Icon */}
              <img
                src="/searchIcon.png"
                alt="searchIcon"
                width={20}
                height={20}
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
              Icon
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
              Icon
            </div>
            <div>Car</div>
          </button>
        </div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Pattaya"
        />
        <div>
          <input
            className={styles.inputDate}
            onClick={(e) => e.currentTarget.showPicker()}
            type="date"
            id="startDate"
            name="startDate"
          />
          <input
            className={styles.inputDate}
            onClick={(e) => e.currentTarget.showPicker()}
            type="date"
            id="endDate"
            name="endDate"
            placeholder="Select a start date"
          />
        </div>
        <div> 2 adult, 1 children - 1 room</div>
        <div>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>Recent Searches</div>
        <div className={styles.hotelRecentSearchCard}>
          <div>hotel_img</div>
          <div>
            <div>Hotel AAA</div>
            <div>⭐⭐⭐⭐⭐</div>

            <div>
              <div>⭐0.0</div>
              <div>0000 Reviews</div>
            </div>
            <div>Amenities</div>
            <div>
              <div>Icons</div>
              <div>Icons</div>
              <div>Icons</div>
            </div>
            <div>0,000/night</div>
          </div>
          <div className={styles.bookNowButton}>
            <button>Book Now</button>
          </div>
        </div>
      </div>

      <img
        className={styles.imgContainer}
        src="/d1.png"
        alt="India"
        width="100%"
        height="100%"
      />
    </div>
  );
}
