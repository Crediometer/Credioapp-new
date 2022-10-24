import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import './Firstrow.css'
export default function Firstrow() {
  return (
    <div id="firstrow">
      <div>
        <RiArrowLeftSLine />
      </div>
      <div>
        <img src="images/profile.png" alt="" />
      </div>
      <div>
        <h5>Lee Alexandar</h5>
        <p>+234509913</p>
      </div>
    </div>
  );
}
