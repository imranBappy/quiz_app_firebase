import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import Info from "../components/Info";
import TextInput from "../components/TextInput";
import { useAuth } from "../context/AuthContext";
import classes from "../styles/Login.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to login!");
    }
  };
  return (
    <Form className={`${classes.login}`} onSubmit={handleLogin}>
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
      <Button disabled={loading} type="submit" onClick={handleLogin}>
        <span>Submit Now</span>
      </Button>
      {error && <p className="error"> {error}</p>}

      <Info
        path="/signup"
        message="Don't have an account?"
        name="Signup"
        text="instead."
      />
    </Form>
  );
}
