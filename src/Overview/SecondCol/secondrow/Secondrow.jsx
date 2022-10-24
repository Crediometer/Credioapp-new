import React from "react";
import { NavLink } from "react-router-dom";
import "./Secondrow.css";

export default function Secondrow() {
  return (
    <div>
      <h5>Your Chats</h5>
      <div id="chat-profile-row-1">
        <div id="profile-name">
          <div>
            <img src="images/profile.png" alt="profile" id="profile-png" />
          </div>
          <div>
            <NavLink to='/OverviewProfile'>
            <h6>Les Alexandar</h6>
            <p>2000 incoming transactions</p>
            </NavLink>
          </div>
        </div>
        <div>
          <p>10:07am</p>
        </div>
      </div>
    </div>
  );
}
