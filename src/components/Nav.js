import React from "react";
import logo from "../assets/images/login.svg";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
const Nav = () => {
  return (
    <nav class={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Imran</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
