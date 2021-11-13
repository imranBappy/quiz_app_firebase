import React from "react";
import classes from "../styles/Analysis.module.css";
import Question from "./Question";
const Analysis = () => {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Question />
    </div>
  );
};

export default Analysis;
