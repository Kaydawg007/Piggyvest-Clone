import React from "react";
import styles from "./Part2.module.css";
import P2Image from "../../../Images/MainImg.png";

const PartTwo = () => {
  return (
    <div className={styles.PartTwo}>
      <img className={styles.MainImg} src={P2Image} />
    </div>
  );
};

export default PartTwo;
