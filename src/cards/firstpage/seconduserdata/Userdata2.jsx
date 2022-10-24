import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import './Userdata2.css'
export default function Userdata2() {
  return (
    <div id="userdata2">
      <div>
        <img src="images/profile.png" alt="" />
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
