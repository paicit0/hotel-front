// yarn dev

import { useState } from "react";
import styles from "../styles/index.module.css";
import Searchbar from "../components/Searchbar";
import { useRouter } from "next/router";
export default function Home() {
  const [category, setCategory] = useState<string>("Hotel");
  const [location, setLocation] = useState<string>("");
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
            alignSelf: "flex-start",
            width: "505px",
            height: "57px",
            marginTop: "62px",
            marginBottom: "26px",
            color: "#2D3DDF",
            fontWeight: "600",
            fontSize: 38,
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

        <div className={styles.inputContainer}>
          <div className={styles.locationWrapper}>
            <img
              src="/location_icon.png"
              alt="Location"
              width={32}
              height={32}
            />
            <input
              className={styles.inputLocation}
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Pattaya"
            />
          </div>

          <button className={styles.inputDate}>
            <img
              src="/calender_icon.png"
              alt="Calendar"
              width={32}
              height={32}
            />
            <div className={styles.checkInPart}>Thu,20 Dec-2020</div>
            <div className={styles.checkOutPart}>Fri,21 Dec-2020</div>
          </button>

          <button className={styles.inputPeople}>
            <img src="/people_icon.png" alt="People" width={32} height={32} />
            <div>2 adult, 1 children - 1 room</div>
          </button>

          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className={styles.recentSearchContainer}>Recent Searches</div>

        <div className={styles.hotelRecentSearchCardContainer}>
          <img
            src="/hotel-pictures/1.png"
            alt="Parking"
            width={198}
            height={173}
          />
          <div className={styles.hotelRecentSearchCardMiddle}>
            <div style={{ fontSize: "18px", fontWeight: "500" }}>
              Hotel_Name
            </div>
            <img
              style={{ marginBottom: "6px" }}
              src="/recent_search_rating.png"
              alt="Parking"
              width={80}
              height={12}
            />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={styles.ratingIconWrapper}>
                <div className={styles.ratingIcon}>
                  <img
                    src="/ratingIcon.png"
                    alt="Rating"
                    width={10}
                    height={10}
                  />
                  <div>0.1</div>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#A8A8A8",
                    fontWeight: "200",
                  }}
                >
                  1566 Reviews
                </div>
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
            <img src="amenities.png" width={312} height={63} />
            <div style={{ color: "#2D3DDF", fontWeight: "600" }}>
              1,000/night
            </div>
          </div>

          <button className={styles.bookNowButton}>
            <div className={styles.bookNowButtonTextContainer}>Book Now</div>
          </button>
        </div>
        <div className={styles.hotelRecentSearchCardContainer}>
          <img
            src="/hotel-pictures/1.png"
            alt="Parking"
            width={198}
            height={173}
          />
          <div className={styles.hotelRecentSearchCardMiddle}>
            <div style={{ fontSize: "18px", fontWeight: "500" }}>
              Hotel_Name
            </div>
            <img
              style={{ marginBottom: "6px" }}
              src="/recent_search_rating.png"
              alt="Parking"
              width={80}
              height={12}
            />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={styles.ratingIconWrapper}>
                <div className={styles.ratingIcon}>
                  <img
                    src="/ratingIcon.png"
                    alt="Rating"
                    width={10}
                    height={10}
                  />
                  <div>0.1</div>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#A8A8A8",
                    fontWeight: "200",
                  }}
                >
                  1566 Reviews
                </div>
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
            <img src="amenities.png" width={312} height={63} />
            <div>0,000/night</div>
          </div>

          <button className={styles.bookNowButton}>
            <div className={styles.bookNowButtonTextContainer}>Book Now</div>
          </button>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <div className={styles.mainImage}></div>
        <img
          style={{ position: "absolute", top: 149.47, left: 436.56 }}
          src="plane.png"
          width={71.26}
          height={64.03}
        />
        <img
          style={{ position: "absolute", top: 517, left: 897.94 }}
          src="next_button.png"
          width={75}
          height={75}
        />

        <div className={styles.takeTourTextContainer}>
          <div
            style={{
              width: "492px",
              height: "95px",
              fontSize: "63px",
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
          >
            Incredible India
          </div>
          <div
            style={{
              fontSize: "33px",
              color: "#FFFFFF",
            }}
          >
            “For where thy treasure is, <br />
            there also will thy heart be.”
          </div>
        </div>

        {/* <button className={styles.takeTourButtonContainer}> */}
        <div className={styles.takeTourButton}>Take Tour</div>
        {/* </button> */}
      </div>
    </div>
  );
}
