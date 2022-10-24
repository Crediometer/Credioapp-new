import React from "react";
import Firstrow from "./firstcolumn/firstrow/Firstrow";
import Secondrow from "./firstcolumn/secondrow/Secondrow";
import "./Thirdpage.css";

import SideNavbar from "../../Navbars/SideNavbar/SideNavbar";
import TopNavbar from "../../Navbars/TopNavbar/TopNavbar";
import MessageSection from "./firstcolumn/Messagesection/MessageSection";
export default function Thirdpage() {
  return (
    <div className="Thirdpage row">
      <div className="col-2">
        <SideNavbar />
      </div>
      <div className="col-10">
        <TopNavbar />
        <div className="container">
          <h4>Transferring Between Accounts</h4>
          <Firstrow />
          <Secondrow />
          <div id="second-row-chat">
            <Secondrow />
          </div>
          <div>
            <MessageSection />
          </div>
        </div>
      </div>
    </div>
  );
}
