import styles from "@/styles/payment-details.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
export default function PaymentDetails() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const router = useRouter();

  const handleConfirm = () => {
    router.push("/payment-done");
  };

  return (
    <>
      <div className={styles.paymentDetailsContainer}>
        <div className={styles.paymentDetailsHeader}>
          <button
            style={{
              marginLeft: "188px",
              marginBottom: "73px",
              marginTop: "43px",
            }}
          >
            GOBACK
          </button>
          <div style={{ marginLeft: "247px", marginBottom: "52px" }}>
            Payment Details
          </div>
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
              <img
                src="/payment_debitcard.png"
                alt="Debit Card"
                width={56}
                height={56}
              />
              <div>Debit Card</div>
              {selectedPaymentMethod === "debitcard" && (
                <button
                  onClick={() => handleConfirm()}
                  style={{ alignSelf: "flex-end" }}
                >
                  CONFIRM
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
              <img src="/payment_upi.png" alt="UPI" width={56} height={56} />
              <div>UPI</div>
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
              <img
                src="/payment_phonepay.png"
                alt="PhonePay"
                width={56}
                height={56}
              />
              <div>PhonePay</div>
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
              <img
                src="/payment_netbanking.png"
                alt="Net Banking"
                width={56}
                height={56}
              />
              <div>Net Banking</div>
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
              <img
                src="/payment_creditcard.png"
                alt="Credit Card"
                width={56}
                height={56}
              />
              <div>Credit Card</div>
            </button>
          </div>

          <div className={styles.paymentSummary}>
            <div className={styles.paymentSummaryTextContainer}>
              <div style={{ color: "#0000008C" }}>Base fare</div>
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
        </div>
      </div>
    </>
  );
}
