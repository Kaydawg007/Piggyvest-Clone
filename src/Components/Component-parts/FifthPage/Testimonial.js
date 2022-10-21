import React from "react";
import styles from "./Testimonial.module.css";
import CustomerImageOne from "../../../Images/Blings.png";
import CustomerImageTwo from "../../../Images/Clerk.png";
import CustomerImageThree from "../../../Images/dave.jpg";
import CustomerImageFour from "../../../Images/hannah.jpg";
import CustomerImageFive from "../../../Images/Jones.png";
import CustomerImageSix from "../../../Images/steve.jpg";

const Testimonial = (props) => {
  const testimonies = [
    {
      Name: "Sharon Carter",
      DaMe: "Tuesday, 4th of October, 2022 by 12 PM",
      Testimony:
        "Thanks to piggyvest I've saved enough money to start up a really large business",
      CustomerImage: CustomerImageOne,
    },
    {
      Name: "Clark Johnson",
      DaMe: "Monday, 7th of October, 2022 by 11:08 AM",
      Testimony:
        "I just joined tho and I believe piggyVest won't disappoint me 😊❤️",
      CustomerImage: CustomerImageTwo,
    },
    {
      Name: "Dave",
      DaMe: "Tuesday, 7th of October, 2022 by 10:28 AM",
      Testimony:
        "PiggyVest was introduced to me some years back and I have been able to save multiple millions over the years. I look forward to more from Piggyvest.",
      CustomerImage: CustomerImageThree,
    },
    {
      Name: "Hannah",
      DaMe: "Tuesday, 4th of October, 2022 by 12 PM",
      Testimony:
        "Thanks to piggyvest I've saved enough money to start up a really large business",
      CustomerImage: CustomerImageFour,
    },
    {
      Name: "Jones",
      DaMe: "Monday, 7th of October, 2022 by 11:08 AM",
      Testimony:
        "Piggvest has helped me with buying my new iPhone and it is the most reliable app.",
      CustomerImage: CustomerImageFive,
    },
    {
      Name: "Steve",
      DaMe: "Tuesday, 7th of October, 2022 by 10:28 AM",
      Testimony: "Lorem Ipsum Dolor sadhisa juasoare yuesne",
      CustomerImage: CustomerImageSix,
    },
  ];

  return (
    <div className={props.className}>
      {testimonies.map((Testimone) => (
        <div>
          <span className={styles.span}>{Testimone.DaMe}</span>
          <div className={styles.cusDet}>
            <img className={styles.CusImg} src={Testimone.CustomerImage} />
            <div className={styles.text}>
              <h6>{Testimone.Name}</h6>
              <p>{Testimone.Testimony}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
