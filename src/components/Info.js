import React from "react";

const Info = ({ message, name, text }) => {
  return (
    <div className="info">
      {message} <a href="login.html">{name}</a> {text}
    </div>
  );
};

export default Info;
