import React from "react";
import { FaChartBar, FaComment, FaTag, FaWallet } from "react-icons/fa";
import "./Icons.css";
export default function Icons() {
  return (
    <div className="d-flex justify-content-between mx-2" style={{fontSize:'13px'}}>
      <div className="text-center">
        <div id="cards">
          <FaWallet  style={{color:'#861f41'}}/>
        </div>
        <p>Cards</p>
      </div>
      <div className="text-center">
        <div id="reports">
          <FaChartBar style={{color:'#861f41'}}/>
        </div>
        <p>Reports</p>
      </div>
      <div className="text-center d-flexbox">
        <div id="transaction">
          <FaTag style={{color:'#861f41'}}/>
        </div>
        <p className="text-center">Transaction</p>
      </div>
      <div className="text-center">
        <div id="chats">
          <FaComment style={{color:'#861f41'}}/>
        </div>
        <p>Chats</p>
      </div>
    </div>
  );
}
