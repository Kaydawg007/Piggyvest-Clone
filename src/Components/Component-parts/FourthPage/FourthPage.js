import React from "react";
import FPL from "./FPL";
import FPR from "./FPR";
import styles from "./FP.module.css";

const FourthPage = () => {
  return (
    <div className={styles.FourthPage}>
      <FPL />
      <FPR />
    </div>
  );
};

export default FourthPage;
