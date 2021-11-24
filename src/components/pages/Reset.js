import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "../Button";
import Form from "../Form";
import TextInput from "../TextInput";

const Reset = () => {
  const [email, setEmail] = useState("");
  const { forgetPassword } = useAuth();
  const handleForget = async (e) => {
    e.preventDefault();
    const result = await forgetPassword(email);
    console.log(result);
  };
  return (
    <div>
      <h2>Reset you password</h2>
      <Form>
        <TextInput
          type="email"
          placeholder="Enter Email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <Button type="submit" onClick={handleForget}>
          <span>Reset Password</span>
        </Button>
      </Form>
    </div>
  );
};

export default Reset;
