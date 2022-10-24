import React from "react";
import {TbCurrencyNaira} from 'react-icons/tb'
export default function YesterdayOperation() {
  return (
    <div style={{fontSize:'14px'}}>
      <div>
        <p>YESTERDAY| 18 NOV 2022</p>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img src="images/profile.png" alt="pix" />
          <div>
            <h5>Lee Alexander</h5>
            <p>incoming transaction</p>
          </div>
        </div>
        <h6>
          <TbCurrencyNaira />
          <span>458</span>
        </h6>
      </div>
    </div>
  );
}
