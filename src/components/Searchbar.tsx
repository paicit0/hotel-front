import styles from "../styles/Searchbar.module.css";

type searchbarPropType = {
  marginLeft?: string;
  marginRight?: string;
};

export default function Searchbar({
  marginLeft = "0px",
  marginRight = "0px",
}: searchbarPropType) {
  return (
    <>
      <input
        className={styles.searchBar}
        style={{ marginLeft: marginLeft, marginRight: marginRight }}
        placeholder="Search city, Country, Place for Travel advisory"
      ></input>
    </>
  );
}
