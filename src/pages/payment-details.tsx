import styles from "@/styles/payment-details.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PriceDataType } from "./reviewhotel";
export default function PaymentDetails() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
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

  const handleConfirm = () => {
    router.push("/payment-done");
  };

  if (!priceData || !priceData.baseCost) {
    return <div>Loading cost data...</div>;
  }

  return (
    <>
      <div className={styles.paymentDetailsContainer}>
        <div className={styles.paymentDetailsHeader}>
          <button className={styles.backButton}>
            <img src="/back_button.png" alt="Back" width={56} height={56} />
          </button>
          <div className={styles.paymentDetailsText}>Payment Details</div>
        </div>

        <div className={styles.paymentDetailsContent}>
          <div className={styles.paymentDetailsButtonsContainer}>
            <button
              className={
                selectedPaymentMethod === "debitcard"
                  ? styles.paymentDetailsButtonSelected
                  : styles.paymentDetailsButton
              }
              onClick={() => {
                setSelectedPaymentMethod("debitcard");
              }}
            >
              <div
                className={
                  selectedPaymentMethod === "debitcard"
                    ? styles.iconWayWrapperSelected
                    : styles.iconWayWrapper
                }
              >
                <img
                  src="/payment_debitcard.png"
                  alt="Debit Card"
                  width={56}
                  height={56}
                />
                <div>Debit Card</div>
              </div>

              {selectedPaymentMethod === "debitcard" && (
                <button
                  onClick={() => handleConfirm()}
                  className={styles.confirmButton}
                >
                  <img src="/payment_next.png" />
                </button>
              )}
            </button>
            <button
              className={
                selectedPaymentMethod === "upi"
                  ? styles.paymentDetailsButtonSelected
                  : styles.paymentDetailsButton
              }
              onClick={() => {
                setSelectedPaymentMethod("upi");
              }}
            >
              <div
                className={
                  selectedPaymentMethod === "upi"
                    ? styles.iconWayWrapperSelected
                    : styles.iconWayWrapper
                }
              >
                <img src="/payment_upi.png" alt="UPI" width={56} height={56} />
                <div>UPI</div>
              </div>
              {selectedPaymentMethod === "upi" && (
                <button
                  onClick={() => handleConfirm()}
                  className={styles.confirmButton}
                >
                  <img src="/payment_next.png" />
                </button>
              )}
            </button>
            <button
              className={
                selectedPaymentMethod === "phonepay"
                  ? styles.paymentDetailsButtonSelected
                  : styles.paymentDetailsButton
              }
              onClick={() => {
                setSelectedPaymentMethod("phonepay");
              }}
            >
              <div
                className={
                  selectedPaymentMethod === "phonepay"
                    ? styles.iconWayWrapperSelected
                    : styles.iconWayWrapper
                }
              >
                <img
                  src="/payment_phonepay.png"
                  alt="PhonePay"
                  width={56}
                  height={56}
                />
                <div>PhonePay</div>
              </div>
              {selectedPaymentMethod === "phonepay" && (
                <button
                  onClick={() => handleConfirm()}
                  className={styles.confirmButton}
                >
                  <img src="/payment_next.png" />
                </button>
              )}
            </button>
            <button
              className={
                selectedPaymentMethod === "netbanking"
                  ? styles.paymentDetailsButtonSelected
                  : styles.paymentDetailsButton
              }
              onClick={() => {
                setSelectedPaymentMethod("netbanking");
              }}
            >
              <div
                className={
                  selectedPaymentMethod === "netbanking"
                    ? styles.iconWayWrapperSelected
                    : styles.iconWayWrapper
                }
              >
                <img
                  src="/payment_netbanking.png"
                  alt="Net Banking"
                  width={56}
                  height={56}
                />
                <div>Net Banking</div>
              </div>
              {selectedPaymentMethod === "netbanking" && (
                <button
                  onClick={() => handleConfirm()}
                  className={styles.confirmButton}
                >
                  <img src="/payment_next.png" />
                </button>
              )}
            </button>
            <button
              className={
                selectedPaymentMethod === "creditcard"
                  ? styles.paymentDetailsButtonSelected
                  : styles.paymentDetailsButton
              }
              onClick={() => {
                setSelectedPaymentMethod("creditcard");
              }}
            >
              <div
                className={
                  selectedPaymentMethod === "creditcard"
                    ? styles.iconWayWrapperSelected
                    : styles.iconWayWrapper
                }
              >
                <img
                  src="/payment_creditcard.png"
                  alt="Credit Card"
                  width={56}
                  height={56}
                />
                <div>Credit Card</div>
              </div>
              {selectedPaymentMethod === "creditcard" && (
                <button
                  onClick={() => handleConfirm()}
                  className={styles.confirmButton}
                >
                  <img src="/payment_next.png" />
                </button>
              )}
            </button>
          </div>

          <div className={styles.paymentSummary}>
            <div className={styles.paymentSummaryTextContainer}>
              <div style={{ color: "#0000008C" }}>Base fare</div>
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
                {priceData.priceAfterDiscount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
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
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#2D3DDF",
                }}
              >
                Total Amount
              </div>
              <div style={{ color: "#2D3DDF" }}>
                {priceData.totalCost.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
