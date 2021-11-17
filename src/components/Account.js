import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import classes from "../styles/Account.module.css";
const Account = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>

      {currentUser && (
        <Link to={`/${currentUser.uid}`}>
          <strong>{currentUser.displayName}</strong>{" "}
        </Link>
      )}

      {currentUser ? (
        <>
          <Link to={`/dashboard`}>Dashboard</Link>
          <span
            onClick={logout}
            className="material-icons-outlined"
            title="Logout"
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to={`/signup`}>Signup</Link>
          <Link to={`/login`}>Login</Link>
        </>
      )}
    </div>
  );
};

export default Account;
