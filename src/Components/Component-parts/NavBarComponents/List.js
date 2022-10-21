import React from "react";
import styles from "./List.module.css";
import TrustWallet from "../../../Images/shield2.png";
import Padlock from "../../../Images/Padlock.png";
import mCircles from "../../../Images/mCircles.png";
import fS from "../../../Images/fS.png";

const List = (props) => {
  return (
    <ul className={`${props.className} ${styles.MenuList} `}>
      <li className={styles.save}>
        <span>Save</span>
        <div className={styles.pstfB}>
          <span>
            <img className={styles.pstf} src={TrustWallet} /> Piggybank
          </span>
          <span>
            <img className={styles.pstf} src={Padlock} /> Safelock
          </span>
          <span>
            <img className={styles.pstf} src={mCircles} /> Target Savings
          </span>
          <span>
            <img className={styles.pstf} src={fS} /> Flex Naira
          </span>
        </div>
      </li>
      <li>Invest</li>
      <li>Stories</li>
      <li>FAQs</li>
      <li>Blog</li>
    </ul>
  );
};

export default List;
