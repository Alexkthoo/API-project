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
      <NavLink exact to="/" className="home-icon">
        <img className="wowbnb-icon" src={wowicon} alt="logo"></img>
        <h2 className="wowbnb-logo">WoWBnB</h2>
      </NavLink>
      <div className="nav-right-side">
        <div className="nav-right-side-create-spot">
          <NavLink exact to="/spots/new">
            {sessionUser && <h2>Create a New Spot</h2>}
          </NavLink>
        </div>
        <div className="nav-right-side-profile-button">
          {isLoaded && <ProfileButton user={sessionUser} />}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
