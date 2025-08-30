import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Searchbar from "../components/Searchbar";
import styles from "../styles/hotels.module.css";

export default function Hotels() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  useEffect(() => {}, []);

  return (
    <>
      <div className={styles.hotelsContainerStyles}>
        <div style={{ marginLeft: "200px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <button style={{marginRight:'20px'}}>BACKICON</button>
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
        </div>

        <div>
          <div>Recommended</div>
        </div>
      </div>
    </>
  );
}
