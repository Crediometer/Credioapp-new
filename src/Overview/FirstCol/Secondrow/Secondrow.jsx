import React from "react";
import "./Secondrow.css";
import { FaMinus, FaSortNumericDown } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import Yesterday from "./yesterday/Yesterday";

export default function Secondrow() {
  return (
    <div id="recent-transactions-comp">
      <div id="recent-transactions">
        <p>Recent Transactions</p>
        <div className="nav-item dropdown">
          <p>
            sort by <FaSortNumericDown />
          </p>
        </div>
      </div>

      <div>
        <p>TODAY | 19 NOV 2021</p>
      </div>

      <div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center'}}>
            <div style={{ boxShadow: "1px 1px 2px black", marginTop:'-15px', padding:'5px', marginRight:'5px'}}>
              <FaMinus />
            </div>

            <div style={{ lineHeight: "5px" }}>
              <p style={{}}>Transfer to Mikey</p>
              <p>10:07am</p>
            </div>
          </div>
          <div style={{lineHeight:'0'}}>
            <p>
              <TbCurrencyNaira />
              <span>100</span>
            </p>
            <p>Online Food order</p>
          </div>
        </div>
      </div>
      <Yesterday/>
    </div>
  );
}
