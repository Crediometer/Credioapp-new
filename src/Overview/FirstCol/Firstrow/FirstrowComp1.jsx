import React from "react";
import { FaSortNumericDown } from "react-icons/fa";
import "./FirstrowComp1.css";
export default function FirstrowComp1() {
  return (
    <div id="FirstrowComp1">
      <div id="finance-report">
        <p>Finance Report</p>
        <div className="nav-item dropdown">
          <p>
            sort by <FaSortNumericDown style={{rotate:'90deg'}}/>
          </p>
        </div>
      </div>
      <div>Wave</div>
    </div>
  );
}
