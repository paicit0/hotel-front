import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Hotel } from "../../hotels";
import Searchbar from "../../../components/Searchbar";
import styles from "../../../styles/hotel[id].module.css";

export default function HotelPage() {
  const router = useRouter();
  const { id } = router.query;
  const [hotelData, setHotelData] = useState<Hotel[]>([]);
  const [error, setError] = useState<string | null>("");

  const handleBookNow = () => {
    router.push('/reviewhotel');
  };

  useEffect(() => {
    const url = "http://localhost:8080/getHotelById";
    const fetchHotelById = async () => {
      if (!id) {
        console.error("id is undefined");
        return;
      }
      try {
        const response = await fetch(
          `${url}?id=${encodeURIComponent(id as string)}`
        );
        if (!response.ok) {
          setError("notfound");
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        setHotelData(result);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchHotelById();
  }, [id]);

  useEffect(() => {
    console.log("hotelData:", hotelData);
  }, [hotelData]);

  if (error === "notfound") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Page Not Found
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <img
            style={{ marginRight: "20px" }}
            src="/back_button.png"
            alt="Back"
            width={56}
            height={56}
          />
          <Searchbar />
        </div>

        <div className={styles.headerButtonContainer}>
          <button>Where are you going?</button>
          <div>
            <button className={styles.dateButton}>20 Dec,2020</button>
            <button className={styles.dateButton}>21 Dec,2020</button>
          </div>

          <button>2 adult, 0 children - 1 room</button>
          <button className={styles.searchButton}>Search</button>
        </div>

        <div className={styles.reviewContainer}>
          <div className={styles.reviewHeaderContainer}>
            <img
              src="/ratingscore_background.png"
              alt="Score"
              width={75.38}
              height={59}
            />
            <div>8.4</div>
            <div>
              <div>Excellent</div>
              <div>6879 Reviews</div>
            </div>
          </div>

          <div className={styles.ratingContainer}>
            <div>Housekeeping</div>
            <img
              src="/review_rating.png"
              alt="Star"
              width={95.96}
              height={19.19}
            />
          </div>
          <div className={styles.ratingContainer}>
            <div>Food</div>
            <img
              src="/review_rating.png"
              alt="Star"
              width={95.96}
              height={19.19}
            />
          </div>
          <div className={styles.ratingContainer}>
            <div>Service</div>
            <img
              src="/review_rating.png"
              alt="Star"
              width={95.96}
              height={19.19}
            />
          </div>
          <div className={styles.ratingContainer}>
            <div>Staff</div>
            <img
              src="/review_rating.png"
              alt="Star"
              width={95.96}
              height={19.19}
            />
          </div>
          <div>Services</div>

          <div className={styles.reviewIconContainer}>
            <div className={styles.iconWrapper}>
              <img
                src="/review_parking.png"
                alt="Parking"
                width={27.71}
                height={19.61}
              />
            </div>
            <div className={styles.iconWrapper}>
              <img
                src="/review_bath.png"
                alt="Bath"
                width={29.7}
                height={26.98}
              />
            </div>
            <div className={styles.iconWrapper}>
              <img
                src="/review_bar.png"
                alt="Bar"
                width={20.6}
                height={27.25}
              />
            </div>
            <div className={styles.iconWrapper}>
              <img
                src="/review_wifi.png"
                alt="Wifi"
                width={22.19}
                height={16.33}
              />
            </div>
            <div className={styles.iconWrapper}>
              <img
                src="/review_gym.png"
                alt="Gym"
                width={28.07}
                height={15.78}
              />
            </div>
          </div>
        </div>

        <div className={styles.hotelInfoContainer}>
          <div>
            <div>{hotelData.length > 0 && hotelData[0].hotel_name}</div>
            <div>{hotelData.length > 0 && hotelData[0].hotel_location}</div>
          </div>

          <div className={styles.hotelPriceBox}>
            Price Starting from 1,000 BAHT
          </div>
        </div>

        <div className={styles.hotelTypeCardContainer}>
          {hotelData.length > 0 &&
            hotelData[0].hotel_room_types.map((room, index) => (
              <div key={index} className={styles.roomTypeContainer}>
                <img
                  src="/roomtype.png"
                  alt={room.room_name}
                  width={174}
                  height={145}
                />
                <div className={styles.roomInfoContainer}>
                  <div>{room.room_name}</div>
                  <div>{room.room_price} BAHT/night</div>
                  <button
                    onClick={() => handleBookNow()}
                    className={styles.bookNowButton}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
