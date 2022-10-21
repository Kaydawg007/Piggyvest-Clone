import React from "react";
import styles from "./HyperLink.module.css";

const HyperLinks = () => {
  return (
    <div className={styles.HyperLinks}>
      <ul>
        <p>Products</p>
        <li>Piggybank</li>
        <li>Invest</li>
        <li>Safe Lock</li>
        <li>Target Savings</li>
        <li>Flex Naira</li>
      </ul>
      <ul>
        <p>Company</p>
        <li>About</li>
        <li>FAQs</li>
        <li>Blog</li>
      </ul>
      <ul>
        <p>Legal</p>
        <li>Terms</li>
        <li>Privacy</li>
        <li>Security</li>
      </ul>
    </div>
  );
};

export default HyperLinks;
