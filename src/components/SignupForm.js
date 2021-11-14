import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  //   const { signup } = useAuth();
  const { signup } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password don't match!");
    }
    try {
      setError("");
      setLoading(true);
      signup(email, password, username);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to create an account!");
    }
  };

  return (
    <>
      <Form style={{ height: 500 }} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter Name"
          icon="person"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextInput
          type="email"
          placeholder="Enter Email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          type="password"
          placeholder="Enter Password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextInput
          type="password"
          placeholder="Confirm Password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <CheckBox
          text="I agree to the Terms & Conditions"
          type="checkbox"
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
          required
        />
        <Button disabled={loading} type="submit" onClick={handleSubmit}>
          <span>Submit now</span>
        </Button>
        {error && <p className="error"> {error}</p>}
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
