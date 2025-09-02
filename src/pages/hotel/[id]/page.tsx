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

   const handleBackClick = () => {
    router.push("/hotels?location=");
  };

  const handleBookNow = (room: string) => {
    const hotelId = hotelData[0].hotel_id;
    const hotelName = hotelData[0].hotel_name;
    const hotelLocation = hotelData[0].hotel_location;
    const roomType = room;
    const checkIn = "20122020";
    const checkOut = "21122020";
    const child = "1";
    const adult = "2";

    router.push(
      `/reviewhotel?hotel_id=${hotelId}&hotel_name=${hotelName}&hotel_location=${hotelLocation}&room_type=${roomType}&check_in=${checkIn}&check_out=${checkOut}&adult=${adult}&child=${child}`
    );
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
          <button
            onClick={() => handleBackClick()}
            className={styles.backButton}
          >
            <img src="/back_button.png" alt="Back" width={56} height={56} />
          </button>
          <Searchbar marginRight="67px"/>
        </div>

        <div className={styles.headerButtonContainer}>
          <button className={styles.headerLocationButton}>
            <div className={styles.headerLocationButtonText}>
              Where are you going?
            </div>
          </button>

          <button className={styles.dateButton}>
            <div className={styles.checkInPart}>20 Dec,2020</div>
            <div className={styles.checkOutPart}>21 Dec,2020</div>
          </button>

          <button className={styles.peopleButton}>
            <div className={styles.peopleButtonText}>
              2 adult, 0 children - 1 room
            </div>
          </button>
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentLeft}>
            <div className={styles.hotelInfoContainer}>
              <div className={styles.hotelInfoImgContainer}>
                <img
                  src="/explore1.png"
                  alt={"Explore"}
                  width={680}
                  height={448}
                />
                <div className={styles.rightImgContainer}>
                  <img
                    src="/explore2.png"
                    alt={"Explore"}
                    width={408}
                    height={285}
                    style={{ marginBottom: "12px" }}
                  />
                  <div className={styles.thirdFourthImgContainer}>
                    <img
                      src="/explore3.png"
                      alt={"Explore"}
                      width={199}
                      height={151}
                    />
                    <img
                      src="/explore4.png"
                      alt={"Explore"}
                      width={197}
                      height={151}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.hotelInfo}>
                <div className={styles.hotelInfoText}>
                  <div className={styles.hotelName}>
                    {hotelData.length > 0 && hotelData[0].hotel_name}
                  </div>
                  <div className={styles.hotelLocation}>
                    {hotelData.length > 0 && hotelData[0].hotel_location}
                  </div>
                </div>

                <div className={styles.hotelPriceBox}>
                  Price Starting from 1,000 BAHT
                </div>
              </div>
            </div>

            {hotelData.length > 0 && (
              <div className={styles.roomCardsContainer}>
                {hotelData[0].hotel_room_types.map((room, index) => (
                  <div key={index} className={styles.roomTypeContainer}>
                    <img src="/roomtype.png" alt={room.room_name} />
                    <div className={styles.roomInfoContainer}>
                      <div className={styles.roomNameText}>
                        {room.room_name}
                      </div>
                      <div className={styles.roomPriceText}>
                        {room.room_price} BAHT/night
                      </div>
                    </div>
                    <button
                      onClick={() => handleBookNow(room.room_name)}
                      className={styles.bookNowButton}
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.contentRight}>
            <div className={styles.reviewContainer}>
              <div className={styles.reviewHeaderContainer}>
                <div className={styles.ratingBox}>
                  <img
                    src="/ratingscore_background.png"
                    alt="Score"
                    width={75.38}
                    height={59}
                  />
                  <div className={styles.ratingText}>8.4</div>
                </div>

                <div className={styles.reviewTextContainer}>
                  <div className={styles.excellentText}>Excellent</div>
                  <div className={styles.reviewText}>6879 Reviews</div>
                </div>
              </div>

              <div className={styles.ratingContainer}>
                <div className={styles.ratingCategoryText}>Housekeeping</div>
                <img
                  src="/review_rating.png"
                  alt="Star"
                  width={95.96}
                  height={19.19}
                  className={styles.ratingStarImg}
                />
              </div>
              <div className={styles.ratingContainer}>
                <div className={styles.ratingCategoryText}>Food</div>
                <img
                  src="/review_rating.png"
                  alt="Star"
                  width={95.96}
                  height={19.19}
                  className={styles.ratingStarImg}
                />
              </div>
              <div className={styles.ratingContainer}>
                <div className={styles.ratingCategoryText}>Service</div>
                <img
                  src="/review_rating.png"
                  alt="Star"
                  width={95.96}
                  height={19.19}
                  className={styles.ratingStarImg}
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

              <div className={styles.servicesText}>Services</div>

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
              <div className={styles.demandContainer}>
                <img src="/highdemand.png" alt="Star" width={40} height={40} />
                <div className={styles.demandText}>
                  This property is in highly demand today.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
