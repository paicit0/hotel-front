// yarn dev

import React from "react";
import styles from "../styles/index.module.css";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>

      <div className={styles.searchContainer}>
        <div className={styles.searchbarContainer}>
          <Searchbar />
        </div>
        <div>
          <button>
            <div>Icon</div>
            <div>Hotel</div>
          </button>
          <button>
            <div>Icon</div>
            <div>Flight</div>
          </button>
          <button>
            <div>Icon</div>
            <div>Car</div>
          </button>
        </div>
        <select name="locations" id="locations">
          <option value="Pattaya">Pattaya</option>
          <option value="Khon Kaen">Khon Kaen</option>
          <option value="Bangkok">Bangkok</option>
        </select>
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
        <button>Search</button>
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

      <div className={styles.imgContainer}>IMG</div>
    </div>
  );
}
