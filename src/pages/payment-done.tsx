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
          className={styles.imgDone}
          src="/payment_booking_success_art.png"
          alt="payment_done"
          width={809}
          height={480}
        />
        <div className={styles.bookingCompleteText}>
          Booking Successfully completed
        </div>
        <div className={styles.scheduleText}>Your trip schedule is ready, please check under profile.</div>
        <button onClick={() => handleHomeClick()} className={styles.homeButton}>
          Home
        </button>
      </div>
    </>
  );
}
