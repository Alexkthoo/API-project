import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import wowicon from "../../images/wow.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="nav-container">
      <NavLink exact to="/">
        <img className="wowbnb-icon" src={wowicon} alt="logo"></img>
      </NavLink>

      {isLoaded && <ProfileButton user={sessionUser} />}
    </div>
  );
}

export default Navigation;
