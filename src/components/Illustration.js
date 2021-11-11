import React from "react";
import signupImg from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";
const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={signupImg} alt="Signup" />
    </div>
  );
};

export default Illustration;
