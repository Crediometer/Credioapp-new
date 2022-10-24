import React from "react";
import OfirstCol from "./firstcol/OfirstCol";
import SideNavbar from "../../src/Navbars/SideNavbar/SideNavbar";
import TopNavbar from "../../src/Navbars/TopNavbar/TopNavbar";
import SecondCol from "./secondcol/SecondCol";
import "./OverviewProfile.css";
export default function OverviewProfile() {
  return (
    <div className="row">
      <div className="col-md-2">
        <SideNavbar />
      </div>
      <div className="col-md-10">
        <TopNavbar />
        <div className="row container">
          <div className="col-md-5">
            <OfirstCol />
          </div>
          <div className="col-md-5">
            <SecondCol />
          </div>
        </div>
        <div className="container">
          <button id="add-account">Add Another Account</button><br/>
          <button id="delete-account">Delete Account</button>
        </div>
      </div>
    </div>
  );
}
