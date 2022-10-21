import React from "react";
import styles from "./Footer.module.css";
import LogoPart from "./LogoPart";
import HyperLinks from "./HyperLinks";
import ContactDetails from "./ContactDetails";

const Footer = () => {
  return (
    <div>
      <div className={styles.main}>
        <LogoPart />
        <HyperLinks />
        <ContactDetails />
      </div>

      <div className={styles.cpam}>
        <p>
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 6 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p className={styles.fp}>
          2016 - 2022 PiggyTech Global Limited - RC 1405222
        </p>
      </div>
    </div>
  );
};

export default Footer;
