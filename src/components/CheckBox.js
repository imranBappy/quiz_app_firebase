import React from "react";

const CheckBox = ({ className, text, ...rest }) => {
  return (
    <label className={className}>
      <input {...rest} /> &nbsp;
      <span>{text}</span>
    </label>
  );
};

export default CheckBox;
