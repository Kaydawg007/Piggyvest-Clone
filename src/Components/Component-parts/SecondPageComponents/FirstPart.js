import React from "react";
import ShieldImage from "../../../Images/shield.png";
import styles from "./FirstPart.module.css";

const FirstPart = () => {
  return (
    <div className={styles.security}>
      <div className={styles.shield}>
        <img src={ShieldImage} alt="Shield" />
      </div>

      <div className={styles.shieldText}>
        <h4>Your security is our priority</h4>
        <p>
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is comepletely protected from fraud.
        </p>
        <a href="#">Learn More &gt;</a>
      </div>
    </div>
  );
};

export default FirstPart;
