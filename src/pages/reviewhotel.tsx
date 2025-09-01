import Searchbar from "../components/Searchbar";
import styles from "../styles/reviewhotel.module.css";
export default function ReviewHotel() {
  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            <img src="/back_button.png" alt="Back" width={56} height={56} />
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
        </div>

        <div className={styles.leftContainer}>
          <div className={styles.checkDateContainer}>
            <div>
              <div>Review your booking</div>
              <div>
                <div>{"hotel_name"}</div>
                <div>{"stars"}</div>
              </div>
              <div>{"hotel_location"}</div>
              <div>This hotel is reviewed by global firm</div>
            </div>
            <div>{"hotel_image[0]"}</div>

            <div>
              <div>
                <div>CHECK-IN</div>
                <div>{"checkin_date"}</div>
                <div>10am</div>
              </div>
              <div>1 night</div>
              <div>
                <div>CHECK-OUT</div>
                <div>{"checkout_date"}</div>
                <div>10am</div>
              </div>
              <div>2 Adult - 1 room</div>
            </div>
          </div>

          <div>Guest Details</div>

          <div className={styles.guestInputContainer}>
            <div>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
              />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="E-mail address"
              />
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Mobile Number"
              />
            </div>
          </div>

          <button>Add Guest +</button>
          <div>Special Request(optional)</div>
          <textarea
            id="specialrequest"
            name="specialrequest"
            rows={4}
            cols={50}
          ></textarea>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.paymentSummary}>
            <div className={styles.paymentSummaryTextContainer}>
              <div style={{ color: "#0000008C" }}>1 room x 1 night</div>
              <div style={{ fontWeight: "500", color: "#B7BCF3" }}>{"0"}</div>
            </div>
            <div className={styles.paymentSummaryTextContainer}>
              <div style={{ color: "#0000008C" }}>Total discount</div>
              <div style={{ fontWeight: "500", color: "#B7BCF3" }}>{"0"}</div>
            </div>
            <div className={styles.paymentSummaryTextContainer}>
              <div style={{ color: "#0000008C" }}>Price after discount</div>
              <div style={{ fontWeight: "500", color: "#B7BCF3" }}>{"0"}</div>
            </div>
            <div className={styles.paymentSummaryTextContainer}>
              <div style={{ color: "#0000008C" }}>Taxes & service fees</div>
              <div style={{ fontWeight: "500", color: "#B7BCF3" }}>{"0"}</div>
            </div>
            <div className={styles.paymentSummaryTextContainer}>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#2D3DDF",
                }}
              >
                Total Amount
              </div>
              <div style={{ color: "#2D3DDF" }}>{"0"}</div>
            </div>
          </div>
          <div className={styles.paymentPolicy}>
            <div>Cancellation Charges</div>
            <div>Non Refundable</div>
            <div>Penalty may be charged by the airline & by MMT</div>
            <div>based on how close to departure date you cancel.</div>
            <div>View fare rules to know more.</div>
            <button>VIEW POLICY</button>
          </div>
        </div>
      </div>
    </>
  );
}
