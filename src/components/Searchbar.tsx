import styles from "../styles/Searchbar.module.css";
export default function Searchbar() {
  return (
    <>
      {/* <form> */}
      <input
        className={styles.searchBar}
        placeholder="Search city, Country, Place for Travel advisory"
      ></input>
      {/* </form */}
    </>
  );
}
