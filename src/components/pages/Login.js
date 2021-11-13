import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import Info from "../Info";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>
            <span>Submit Now</span>
          </Button>
          <Info
            path="/signup"
            message="Don't have an account?"
            name="Signup"
            text="instead."
          />
        </Form>
      </div>
    </>
  );
}
