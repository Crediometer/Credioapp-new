import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import './Userdata1.css';

export default function Userdata1() {
  return (
    <div id="userdata1">
        <div>
        <img src="images/profile.png" alt="" id="userdata-image"/>
        </div>

      <div>
        <h5>Les Brown</h5>
        <p>
          <TbCurrencyNaira />
          2000 incoming transactions
        </p>
      </div>
    </div>
  );
}
