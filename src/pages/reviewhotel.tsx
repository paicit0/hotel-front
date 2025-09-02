import { useRouter } from "next/router";
import Searchbar from "../components/Searchbar";
import styles from "../styles/reviewhotel.module.css";
import { useEffect, useState } from "react";

export type PriceDataType = {
  baseCost: number;
  discount: number;
  priceAfterDiscount: number;
  taxesAndServices: number;
  totalCost: number;
};

type FormData = {
  fname: string;
  lname: string;
  email: string;
  mobile: string;
};

type Errors = {
  fname?: string;
  lname?: string;
  email?: string;
  mobile?: string;
};

type FormErrors = {
  fname?: string;
  lname?: string;
  email?: string;
  mobile?: string;
};

export default function ReviewHotel() {
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [priceData, setPriceData] = useState<PriceDataType>({
    baseCost: 0,
    discount: 0,
    priceAfterDiscount: 0,
    taxesAndServices: 0,
    totalCost: 0,
  });

  const router = useRouter();
  const hotelIdQuery = router.query.hotel_id;
  const hotelNameQuery = router.query.hotel_name;
  const hotelLocationQuery = router.query.hotel_location;
  const hotelRoomTypeQuery = router.query.room_type;
  const hotelCheckInQuery = router.query.check_in;
  const hotelCheckOutQuery = router.query.check_out;
  const hotelAdultQuery = router.query.adult;
  const hotelChildQuery = router.query.child;

  const params = new URLSearchParams({
    id: hotelIdQuery as string,
    room_type: hotelRoomTypeQuery as string,
    checkInDate: hotelCheckInQuery as string,
    checkOutDate: hotelCheckOutQuery as string,
    adult: hotelAdultQuery as string,
    child: hotelChildQuery as string,
  });

  useEffect(() => {
    const fetchCostCalculator = async () => {
      const url = "http://localhost:8080/costCalculator";
      try {
        const response = await fetch(`${url}?${params.toString()}`);
        const result = await response.json();
        console.log(result);
        setPriceData(result);
      } catch (error) {}
    };
    fetchCostCalculator();
  }, [router.isReady]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.fname) newErrors.fname = "error";
    if (!formData.lname) newErrors.lname = "error";
    if (!formData.email) newErrors.email = "error";
    if (!formData.mobile) newErrors.mobile = "error";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      console.log("Form data:", formData);
      router.push(
        `/payment-details?hotel_id=${hotelIdQuery}&hotel_name=${hotelNameQuery}&hotel_location=${hotelLocationQuery}&room_type=${hotelRoomTypeQuery}&check_in=${hotelCheckInQuery}&check_out=${hotelCheckOutQuery}&adult=${hotelAdultQuery}&child=${hotelChildQuery}`
      );
    }
  };

  const formatDate = (dateStr: string) => {
    const day = dateStr.slice(0, 2);
    const month = parseInt(dateStr.slice(2, 4), 10) - 1;
    const year = parseInt(dateStr.slice(4), 10);

    const monthName = new Date(year, month)
      .toLocaleString("en-US", {
        month: "short",
      })
      .toUpperCase();

    return `${day} ${monthName},${year}`;
  };

  if (!priceData || !priceData.baseCost) {
    return <div>Loading cost data...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.headerBackSearchContainer}>
            <img src="/back_button.png" alt="Back" width={56} height={56} />
            <Searchbar marginLeft="20px" marginRight="67px" />
          </div>
          <div className={styles.headerButtonContainer}>
            <button className={styles.whereButton}>Where are you going?</button>
            <button className={styles.dateButton}>
              <div className={styles.checkInPart}>
                {formatDate(hotelCheckInQuery?.toString() ?? "")}
              </div>
              <div className={styles.checkOutPart}>
                {formatDate(hotelCheckOutQuery?.toString() ?? "")}
              </div>
            </button>
            <button className={styles.peopleButton}>
              {hotelAdultQuery} adult, {hotelChildQuery} children - 1 room
            </button>
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.checkDateContainer}>
              <div className={styles.reviewBookingContainer}>
                <div>
                  <div className={styles.reviewText}>Review your booking</div>
                  <div className={styles.nameRatingContainer}>
                    <div className={styles.hotelNameText}>{hotelNameQuery}</div>
                    <img
                      src={"/reviewhotel_rating.png"}
                      width={155}
                      height={31}
                    />
                  </div>
                  <div className={styles.hotelLocationText}>
                    {hotelLocationQuery}
                  </div>
                  <div className={styles.hotelLocationText}>
                    This hotel is reviewed by global firm
                  </div>
                </div>
                <div className={styles.hotelImgContainer}>
                  <img src={"/hotel-pictures/2.png"} width={231} height={105} />
                </div>
              </div>

              <div className={styles.checkContainer}>
                <div>
                  <div className={styles.checkText}>Check-in</div>
                  {/* <div>{hotelCheckInQuery}</div> */}
                  <div className={styles.checkInfoText}>Sunday 21, Dec</div>
                  <div className={styles.timeText}>10am</div>
                </div>
                <div className={styles.nightBox}>1 night</div>
                <div>
                  <div className={styles.checkText}>Check-out</div>
                  {/* <div>{hotelCheckOutQuery}</div> */}
                  <div className={styles.checkInfoText}>Monday 22, Dec</div>
                  <div className={styles.timeText}>10am</div>
                </div>
                <div className={styles.checkInfoText}>
                  {hotelAdultQuery} Adult - 1 room
                </div>
              </div>
            </div>

            <div className={styles.guestDetailsText}>Guest Details</div>

            <div className={styles.guestInputContainer}>
              <div className={styles.guestInput}>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="First Name"
                  value={formData.fname}
                  onChange={handleChange}
                  className={`${styles.guestInputField} ${
                    errors.fname ? styles.errorBorder : ""
                  }`}
                />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Last Name"
                  value={formData.lname}
                  onChange={handleChange}
                  className={`${styles.guestInputField} ${
                    errors.lname ? styles.errorBorder : ""
                  }`}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-mail address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.guestInputField} ${
                    errors.email ? styles.errorBorder : ""
                  }`}
                />
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`${styles.guestInputField} ${
                    errors.mobile ? styles.errorBorder : ""
                  }`}
                />
              </div>
            </div>

            <button className={styles.addGuestButton}>Add Guest +</button>
            <div className={styles.requestText}>Special Request(optional)</div>

            <input className={styles.requestInput} type="text" />
            <div>
              <button
                onClick={() => handleContinue()}
                className={styles.continueButton}
              >
                Continue
              </button>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.paymentSummary}>
              <div className={styles.paymentSummaryTextContainer}>
                <div style={{ color: "#0000008C" }}>1 room x 1 night</div>
                <div style={{ fontWeight: "500", color: "#B7BCF3" }}>
                  {priceData.baseCost.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
              <div className={styles.paymentSummaryTextContainer}>
                <div style={{ color: "#0000008C" }}>Total discount</div>
                <div style={{ fontWeight: "500", color: "#B7BCF3" }}>
                  {priceData.discount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
              <div className={styles.paymentSummaryTextContainer}>
                <div style={{ color: "#0000008C" }}>Price after discount</div>
                <div style={{ fontWeight: "500", color: "#B7BCF3" }}>
                  {(priceData.baseCost - priceData.discount).toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                </div>
              </div>
              <div className={styles.paymentSummaryTextContainer}>
                <div style={{ color: "#0000008C" }}>Taxes & service fees</div>
                <div style={{ fontWeight: "500", color: "#B7BCF3" }}>
                  {priceData.taxesAndServices.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
              <div className={styles.paymentSummaryTextContainer}>
                <div className={styles.totalCostText}>Total Amount</div>
                <div style={{ color: "#2D3DDF" }}>
                  {priceData.totalCost.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
            </div>
            <div className={styles.paymentPolicy}>
              <div className={styles.paymentPolicyTextContainer}>
                <div className={styles.cancelText}>Cancellation Charges</div>
                <div className={styles.refundText}>Non Refundable</div>
                <div className={styles.ruleText}>
                  Penalty may be charged by the airline & by MMT
                </div>
                <div className={styles.ruleText}>
                  based on how close to departure date you cancel.
                </div>
                <div className={styles.viewPolicyText}>
                  View fare rules to know more.
                </div>
                <button className={styles.viewPolicyButton}>VIEW POLICY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
