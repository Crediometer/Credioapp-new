import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import './Secondrow.css';

export default function Secondrow() {
  return (
    <div id="second-row">
      <div>
        <h5>Payment to you</h5>
        <p>Food</p>
        <h3>
          <TbCurrencyNaira />
          544
        </h3>
      </div>
      <div id="second-row2">
        <p>Paid on Nov 12</p>
      </div>
    </div>
  );
}
