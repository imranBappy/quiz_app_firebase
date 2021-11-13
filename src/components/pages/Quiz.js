import React from "react";
import Answers from "../Answers.js";
import MiniPlayer from "../MiniPlayer.js";
import ProgressEvent from "../ProgressEvent.js";

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressEvent />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
