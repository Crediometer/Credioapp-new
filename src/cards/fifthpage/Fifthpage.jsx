import React from "react";
import Input from "../secondpage/input/Input";
import Printreceipts from "./print receipts/Printreceipts";
import SideNavbar from "../../Navbars/SideNavbar/SideNavbar";
import TopNavbar from "../../Navbars/TopNavbar/TopNavbar";
import './Fifthpage.css'
export default function Fifthpage() {
  return (
    <div className="row bg-light">
      <div className="col-2">
        <SideNavbar />
      </div>
      <div className="col-10">
        <TopNavbar />
        <div>
          <h4>Receipts</h4>
          <Input />
        </div>
        <div>
          <p>TODAY | 19 NOV 2022</p>
        </div>
        <div>
          <div id="print-receipts1">
            <Printreceipts />
          </div>
          <div id="print-receipts2">
            <Printreceipts />
          </div>
          <div id="print-receipts3">
            <Printreceipts />
          </div>
        </div>
      </div>
    </div>
  );
}
