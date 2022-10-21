import React from "react";
import styles from "./leftPart.module.css";
import MainImage2 from "../../../Images/MainImg2.png";

const LeftPart = () => {
  return (
    <div className={styles.leftPart}>
      <img src={MainImage2} />
    </div>
  );
};

export default LeftPart;
