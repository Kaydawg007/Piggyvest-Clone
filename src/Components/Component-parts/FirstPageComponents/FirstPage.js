import React from "react";
import styles from "./FirstPage.module.css";
import PartOne from "./Part1";
import PartTwo from "./Part2";

const FirstPage = () => {
  return (
    <div className={styles.FirstPage}>
      <PartOne />
      <PartTwo />
    </div>
  );
};

export default FirstPage;
