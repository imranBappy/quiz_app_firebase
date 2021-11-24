import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Videos.module.css";
const Video = ({ title, id, noq, thumbnail }) => {
  return (
    <Link to="quiz">
      <div className={classes.video}>
        <img
          src={
            thumbnail
              ? thumbnail
              : `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
          }
          alt={title}
        />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total points: {noq * 5}</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
