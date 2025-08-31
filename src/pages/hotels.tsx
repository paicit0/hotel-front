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
};

type roomType = {
  room_name: string;
  room_price: number;
}

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

  return (
    <>
      <div className={styles.hotelsContainer}>
        <div style={{ marginLeft: "200px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img src="/back_button.png" alt="Back" width={56} height={56} />
            <Searchbar />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>Best places to enjoy your stay</div>
            <button>Sort By</button>
            <button>Filter</button>
          </div>
          <div>
            {hotelsData.length > 0 &&
              hotelsData.map((hotel) => (
                <div key={hotel.hotel_id}>
                  <div>{hotel.hotel_name}</div>
                  <div>Price starts from {}</div>
                  <button onClick={() => handleHotelClick(hotel.hotel_id)}>
                    View Details
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div>
          <div>Recommended</div>
        </div>
      </div>
    </>
  );
}
