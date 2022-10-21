import React, { useState } from "react";
import PiggyVestLogo from "../../../Images/piggyvest-logo.svg";
import Hamburger from "../../../Images/menu-outline.svg";
import CloseHamburger from "../../../Images/close.png";
import List from "./List";
import Button from "../../UI/Button";
import styles from "./NavBar.module.css";
import "./NavBar.css";

const NavBar = () => {
  const [displayHandler, setDisplayHandler] = useState("none");
  const [displayToggle, setDisplayToggle] = useState("block");
  const [animationame, setAnimationName] = useState("");

  const mobileNavToggleHandler = () => {
    if (displayHandler === "none") {
      setDisplayHandler("block");
    } else {
      setDisplayHandler("none");
    }

    if (animationame === "" || animationame === "slideOut") {
      setAnimationName("slideIn");
    } else if (animationame === "slideIn") {
      setAnimationName("slideOut");
    }

    if (displayToggle === "block") {
      setDisplayToggle("none");
    } else {
      setDisplayToggle("block");
    }
  };

  // const divClickOutHandler = () => {
  //   if (animationame === "slideIn") {
  //     setAnimationName("slideOut");
  //   }
  // };
  return (
    <div>
      <div className={styles.NavBar}>
        <img src={PiggyVestLogo} alt="Piggy Vest Logo" />
        <div onClick={mobileNavToggleHandler} className={styles.Hamburger}>
          <img
            style={{ display: displayToggle }}
            className={styles.open}
            src={Hamburger}
          />
          <img
            style={{ display: displayHandler }}
            className={styles.close}
            src={CloseHamburger}
          />
        </div>
        <List className={styles.displayOff} />
        <div className={styles.displayOff}>
          <Button className={styles.CTA}>
            {" "}
            <a href="#">Sign In</a>{" "}
          </Button>
          <Button>Create Free Account</Button>
        </div>
      </div>

      <div className={`${styles.mobileNav} ${animationame}`}>
        <List className={styles.mobileMenuItems} />
        <div className={styles.mobileMenuCta}>
          <Button className={styles.CTA}>
            {" "}
            <a href="#">Sign In</a>{" "}
          </Button>
          <Button className={styles.Button}>Create Free Account</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
