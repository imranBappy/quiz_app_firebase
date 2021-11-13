import React from "react";
import image from "../assets/images/3.jpg";
import classes from "../styles/MiniPlayer.module.css";
const MiniPlayer = () => {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`${classes.open} material-icons-outlined`}>
        play_circle_filled
      </span>
      <span className={`${classes.close} material-icons-outlined`}>close</span>
      <img src={image} alt="Player" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
