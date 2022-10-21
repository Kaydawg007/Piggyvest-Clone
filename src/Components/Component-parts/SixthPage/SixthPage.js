import React from "react";
import styles from "./SixthPage.module.css";
import TechCrunchLogo from "../../../Images/TechCrunch.png";
import TechAfricaLogo from "../../../Images/TechpointAfrica.png";
import TheGuardianLogo from "../../../Images/guardian.png";

const SixthPage = () => {
  return (
    <div className={styles.SixthPage}>
      <h2>As featured in</h2>
      <div className={styles.pcLogo}>
        <img src={TechAfricaLogo} />
        <img src={TheGuardianLogo} />
        <img src={TechCrunchLogo} />
      </div>
    </div>
  );
};

export default SixthPage;
