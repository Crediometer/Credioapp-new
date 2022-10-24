import React from "react";
import "./User.css";
import { RiArrowRightSLine } from "react-icons/ri";
export default function User() {
  return (
    <div>
      <div id="user">
        <div id="username">
          <div>
            <img src="images/profile.png" alt="" />
          </div>
          <div>
            <h5>Les Brown</h5>
            <p>+234505050</p>
          </div>
        </div>
        <div id="transfer">
          <h6>Transfer</h6>
          <RiArrowRightSLine />
        </div>
      </div>
    </div>
  );
}
