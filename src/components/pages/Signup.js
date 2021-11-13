import React from "react";
import classes from "../../styles/Signup.module.css";
import Illustration from "../Illustration";
import SignupFrom from "../SignupForm";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className={classes.column}>
        <Illustration className={classes.illustration} />
        <SignupFrom />
      </div>
    </>
  );
};

export default Signup;
