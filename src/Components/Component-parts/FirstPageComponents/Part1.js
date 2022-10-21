import React from "react";
import Button from "../../UI/Button";
import AppleLogo from "../../../Images/apple.svg";
import PlaystoreLogo from "../../../Images/playstore-logo.svg";
import styles from "./Part1.module.css";

const PartOne = () => {
  return (
    <div className={styles.PartOne}>
      <h1>The Better Way To Save & Invest</h1>
      <p>
        PiggyVest helps over 4 million customers achieve their financial goals
        by helping them save and invest with ease
      </p>
      <Button className={styles.cfa}>Create Free Account</Button>
      <div>
        <Button className={styles.CTA}>
          <img src={AppleLogo} alt="Apple Logo" /> Get On iPhone
        </Button>
        <Button className={styles.CTA}>
          <img src={PlaystoreLogo} alt="Apple Logo" /> Get On Android
        </Button>
      </div>
    </div>
  );
};

export default PartOne;
