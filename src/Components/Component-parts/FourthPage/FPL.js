import React from "react";
import Arrow from "../../../Images/circledarrow.svg";
import styles from "./FPL.module.css";
const FPL = () => {
  return (
    <div className={styles.FPL}>
      <h1>Meet the saver of the month!</h1>
      <p>
        Every month, we shine a spotlight on one saver, asking them questions
        about their savings culture and how the product is specifically helping
        them shape how they spend and save for future responsibilities.
      </p>
      <p>
        {" "}
        <img src={Arrow} /> <a href="#">Meet Tito</a>
      </p>
    </div>
  );
};

export default FPL;
