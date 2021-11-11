import React from "react";

const CheckBox = ({ text, ...rest }) => {
  return (
    <label>
      <input {...rest} /> &nbsp;
      <span>{text}</span>
    </label>
  );
};

export default CheckBox;
