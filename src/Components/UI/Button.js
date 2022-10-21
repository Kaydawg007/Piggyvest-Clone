import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      style={props.style}
      className={`${props.className} ${styles.Button}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
