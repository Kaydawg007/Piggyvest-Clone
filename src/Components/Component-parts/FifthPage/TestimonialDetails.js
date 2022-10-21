import React from "react";
import Button from "../../UI/Button";
import styles from "../FirstPageComponents/Part1.module.css";
import classes from "./TestimonialDetails.module.css";
import AppleLogo from "../../../Images/apple.svg";
import PlaystoreLogo from "../../../Images/playstore-logo.svg";

const TestimonialDetails = (props) => {
  return (
    <div className={props.className}>
      <h2>4 Million+ Customers</h2>
      <p>
        Since launching in 2016, over 4,000,000 people have used PiggyVest to
        manage their money better, avoid over-spending and be more accountable.
      </p>
      <Button>Create free account</Button>

      <div>
        <div className={classes.CTA}>
          <Button className={styles.CTA}>
            <img src={AppleLogo} alt="Apple Logo" /> Get On iPhone
          </Button>
          <Button className={styles.CTA}>
            <img src={PlaystoreLogo} alt="Apple Logo" /> Get On Android
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
