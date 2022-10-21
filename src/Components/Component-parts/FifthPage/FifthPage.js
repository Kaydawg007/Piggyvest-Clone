import React from "react";
import styles from "./FifthPage.module.css";
import Testimonial from "./Testimonial";
import TestimonialDetails from "./TestimonialDetails";

const FifthPage = () => {
  return (
    <div className={styles.FifthPage}>
      <Testimonial className={styles.Testimonial} />
      <TestimonialDetails className={styles.TestimonialDetails} />
    </div>
  );
};

export default FifthPage;
