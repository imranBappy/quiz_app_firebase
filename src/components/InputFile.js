import React from "react";
import classes from "../styles/InputFIle.module.css";
const InputFile = ({
  label,
  name,
  title,
  accept = "image/png, image/jpeg",
  ...rest
}) => {
  console.log({ accept });
  return (
    <div className={classes.input__file}>
      <label className={classes.input__file_label} htmlFor={name}>
        <span className="material-icons-outlined">upload_file</span>
      </label>
      <input
        required
        {...rest}
        type="file"
        id={name}
        name={name}
        accept={accept}
      />
      <h5>{label ? label : title}</h5>
    </div>
  );
};

export default InputFile;
