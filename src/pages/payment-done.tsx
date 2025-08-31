import { useRouter } from "next/router";
import styles from "../styles/payment-done.module.css";
export default function PaymentDone() {
  const router = useRouter();
  const handleHomeClick = () => {
    router.push("/");
  };
  return (
    <>
      <div className={styles.container}>
        <img
          style={{ marginTop: "167px", marginBottom: "48px" }}
          src="/payment_booking_success_art.png"
          alt="payment_done"
          width={809}
          height={480}
        />
        <div style={{ marginBottom: "6px" }}>
          Booking Successfully completed
        </div>
        <div style={{ marginBottom: "49px" }}>
          Your trip schedule is ready, please check under profile.
        </div>
        <button onClick={() => handleHomeClick()} className={styles.homeButton}>
          Home
        </button>
      </div>
    </>
  );
}
