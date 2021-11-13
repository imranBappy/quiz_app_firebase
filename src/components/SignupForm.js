import React, { useState } from "react";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Form from "../components/Form.js";
import Info from "../components/Info";
import TextInput from "../components/TextInput";
import { useAuth } from "../context/AuthContext";
const SignupFrom = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  //   const { signup } = useAuth();
  const aa = useAuth();
  console.log(aa);

  return (
    <>
      <Form style={{ height: 500 }}>
        <TextInput
          type="text"
          placeholder="Enter Name"
          icon="person"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          type="email"
          placeholder="Enter Email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Enter Password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Confirm Password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CheckBox
          text="I agree to the Terms & Conditions"
          type="checkbox"
          value={agree}
          onChange={(e) => setAgree(false)}
        />
        <Button>
          <span>Submit now</span>
        </Button>
        <Info
          path="/login"
          message="Already have an account?"
          name="Login"
          text="instead."
        />
      </Form>
    </>
  );
};

export default SignupFrom;
