import React from "react";
import LeftPart from "./leftPart";
import RightPart from "./rightPart";
import styles from "./ThirdPage.module.css";

const ThirdPage = () => {
  return (
    <div className={styles.thirdPage}>
      <LeftPart />
      <RightPart />
    </div>
  );
};

export default ThirdPage;
