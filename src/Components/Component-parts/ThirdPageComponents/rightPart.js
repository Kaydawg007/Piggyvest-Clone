import React from "react";
import styles from "./rightPart.module.css";

const RightPart = () => {
  return (
    <div className={styles.rpt}>
      <p className={styles.perc}>Up To 25% Returns</p>
      <h2 className={styles.title}>Access Investment Opportunities</h2>
      <p className={styles.details}>
        Invest securely and confidently on the go. Grow your money confidently
        by investing in pre-vetted investment opportunities
      </p>
      <p className={styles.cta}>
        <a href="#">Learn more about investments &gt;</a>
      </p>
    </div>
  );
};

export default RightPart;
