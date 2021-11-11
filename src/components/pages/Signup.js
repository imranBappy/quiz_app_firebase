import React from "react";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Form from "../Form.js";
import Illustration from "../Illustration";
import Info from "../Info";
import TextInput from "../TextInput";
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className={classes.column}>
        <Illustration className={classes.illustration} />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <CheckBox text="I agree to the Terms & Conditions" type="checkbox" />
          <Button>Submit now</Button>
          <Info
            message="Already have an account?"
            name="Login"
            text="instead."
          />
        </Form>
      </div>
    </>
  );
};

export default Signup;
