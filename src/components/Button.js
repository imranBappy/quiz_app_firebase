import React from "react";
import classes from "../styles/Button.module.css";
const Button = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
