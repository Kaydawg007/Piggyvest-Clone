import React from "react";
import styles from "./FirstPart.module.css";
import Button from "../../UI/Button";
import classes from "./SecondPart.module.css";
import TrustWallet from "../../../Images/shield2.png";
import TA from "../../../Images/ShieldArrow.svg";
import Padlock from "../../../Images/Padlock.png";
import PA from "../../../Images/PadlockArrow.svg";
import mCircles from "../../../Images/mCircles.png";
import MA from "../../../Images/mCarrows.svg";
import fS from "../../../Images/fS.png";
import FA from "../../../Images/fsArrow.svg";

const SecondPart = () => {
  const Steps = [
    {
      Image: TrustWallet,
      Title: "Automated Savings",
      Details:
        "Build a dedicated savings faster on your terms automatically or manually.",
      Arrow: TA,
      id: 0,
      ART: "PiggyBank",
    },
    {
      Image: Padlock,
      Title: "Fixed Savings",
      Details:
        "Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit",
      Arrow: PA,
      id: 1,
      ART: "Safelock",
    },
    {
      Image: mCircles,
      Title: "Goal-Oriented Savings",
      Details:
        "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      Arrow: MA,
      id: 2,
      ART: "Target Savings",
    },
    {
      Image: fS,
      Title: "Flexible Savings",
      Details:
        "Save, transfer, withdraw, manage and organise your money for free at any time.",
      Arrow: FA,
      id: 3,
      ART: "Flex Naira",
    },
  ];
  return (
    <div className={classes.Steps}>
      <div className={`${styles.shieldText} ${classes.shieldText}`}>
        <h4>4 ways to build your savings</h4>
        <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
        <Button>Start Saving</Button>
      </div>
      <div className={classes.stepsDiv}>
        {Steps.map((items) => (
          <div className={classes.eachStep} key={items.id}>
            <img className={classes.stepImage} src={items.Image} />

            <h4>{items.Title}</h4>
            <p>{items.Details}</p>
            <p className={classes.arrCta}>
              <img className={classes.arrow} src={items.Arrow} />{" "}
              <span>{items.ART}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPart;
