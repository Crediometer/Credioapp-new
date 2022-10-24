import React from "react";
import './Overview.css'
import SideNavbar from "../Navbars/SideNavbar/SideNavbar";
import TopNavbar from "../Navbars/TopNavbar/TopNavbar";
import FirstCol from "./FirstCol/FirstCol";
import SecondCol from "./SecondCol/SecondCol";
import OverviewMobile from "./OverviewMobile";
export default function Overview() {
  return (
    <div>
      <div className="row" id="entire-overview-page">
        <div className="col-md-2">
          <SideNavbar />
        </div>
        <div className="col-md-10">
          <TopNavbar />
          <h3 style={{color:'#861f41'}}>Your Finance Overview, Michael!</h3>
          <div className="row">
            <div className="col-md-6"><FirstCol/></div>
            <div className="col-md-4"><SecondCol/></div>
          </div>
        </div>
      </div>
      <div id="mobile-view">
      <OverviewMobile/>
      </div>
    </div>
  );
}
