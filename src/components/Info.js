import React from "react";
import { Link } from "react-router-dom";

const Info = ({ message, name, text, path }) => {
  return (
    <div className="info">
      {message} <Link to={path}>{name}</Link> {text}
    </div>
  );
};

export default Info;
