import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Searchbar from "../components/Searchbar";
import styles from "../styles/hotels.module.css";
import router from "next/router";

export type Hotel = {
  hotel_id: number;
  hotel_name: string;
  hotel_location: string;
  hotel_review_stars: number;
  hotel_room_types: roomType[];
  hotel_images: string[];
};

type roomType = {
  room_name: string;
  room_price: number;
};

export default function Hotels() {
  const [hotelsData, setHotelsData] = useState<Hotel[]>([]);
  const searchParams = useSearchParams();
  const location: string = searchParams.get("location") ?? "";

  useEffect(() => {
    console.log("Location from query params:", location);
    const url = "http://localhost:8080/search";
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          `${url}?location=${encodeURIComponent(location)}`
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        setHotelsData(result);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchHotels();
  }, []);

  useEffect(() => {
    console.log("Updated state:", hotelsData);
  }, [hotelsData]);

  const handleHotelClick = (hotel_id: number) => {
    router.push(`/hotel/${hotel_id}/page`);
  };

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <>
      <div className={styles.hotelsContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.headerBackSearchContainer}>
            <button onClick={() => handleBackClick()} className={styles.backButton}>
              <img src="/back_button.png" alt="Back" width={56} height={56} />
            </button>
            <Searchbar marginLeft="20px" />
          </div>
          <div className={styles.headerSortFilter}>
            <div className={styles.headerTextContainer}>
              Best places to enjoy your stay
            </div>
            <div className={styles.sortButtonContainer}>
              <button className={styles.headerButton}>Sort By</button>
              <button className={styles.headerButton}>Filter</button>
            </div>
          </div>
          <div className={styles.hotelListContainer}>
            {hotelsData.length > 0 &&
              hotelsData.map((hotel) => (
                <div className={styles.eachHotelContainer} key={hotel.hotel_id}>
                  <img
                    src={hotel.hotel_images[0]}
                    alt="Back"
                    width={449}
                    height={280}
                  />
                  <div className={styles.eachHotelInfoContainer}>
                    <div>
                      <div className={styles.eachHotelNameText}>
                        {hotel.hotel_name}
                      </div>
                      <div>Price starts from {"1,000"}</div>
                    </div>

                    <button
                      className={styles.detailsButton}
                      onClick={() => handleHotelClick(hotel.hotel_id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className={styles.recommendedContainer}>
          <div>
            <div className={styles.recommendedHeaderText}>Recommended</div>
          </div>
          <div>
            {hotelsData.length > 0 &&
              hotelsData.map((hotel) => (
                <div
                  className={styles.eachRecommendedContainer}
                  key={hotel.hotel_id}
                >
                  <img
                    className={styles.recImg}
                    src={hotel.hotel_images[0]}
                    alt="Back"
                    width={256}
                    height={123}
                  />
                  <div className={styles.eachRecInfoContainer}>
                    <div>
                      <div>Trip to {hotel.hotel_name} &</div>
                      <div>Get 30% off on flight booking</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
