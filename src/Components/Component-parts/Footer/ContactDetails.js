import React from "react";
import styles from "./ContactDetails.module.css";
import FBLogo from "../../../Images/facebook.svg";
import TwitterLogo from "../../../Images/twitter.svg";
import IGLogo from "../../../Images/square-instagram.svg";

const ContactDetails = () => {
  return (
    <div className={styles.cds}>
      <div className={styles.smL}>
        <img src={FBLogo} />
        <img src={TwitterLogo} />
        <img src={IGLogo} />
      </div>

      <div className={styles.ContactDetails}>
        <p>Tesmot House,AbdulRahman Okene Close, Victoria Island, Lagos.</p>
        <p>Contact@piggyvest.com</p>
        <p>+234 700 933 933 444</p>
      </div>
    </div>
  );
};

export default ContactDetails;
