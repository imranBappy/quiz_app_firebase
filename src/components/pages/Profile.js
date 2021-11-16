import React from "react";
import profile from "../../assets/images/user-avater.png";
import classes from "../../styles/profile.module.css";
const Profile = ({ user: { displayName, email, emailVerified } }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__pic}>
        <img src={profile} alt="profile" />
      </div>
      <div className={classes.profile__name}>
        <h2 className={"user__name"}>
          {displayName}
          {emailVerified && (
            <span className="material-icons-outlined">verified</span>
          )}
        </h2>
      </div>
      <div className={classes.profile__info}>
        <p>
          <b>Email</b>: {email}
        </p>
        <p>
          You Accout is
          {!emailVerified ? <b> Not verified </b> : <b>verified</b>}
        </p>
      </div>
    </div>
  );
};

export default Profile;
