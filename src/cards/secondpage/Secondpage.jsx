import React from "react";
import SideNavbar from "../../Navbars/SideNavbar/SideNavbar";
import TopNavbar from "../../Navbars/TopNavbar/TopNavbar";
import Input from "./input/Input";
import User from "./user/User";
import './Secondpage.css'
export default function Secondpage() {
  return (
    <div className="row">
      <div className="col-2">
        <SideNavbar />
      </div>
      <div className="col-10">
        <TopNavbar />
        <div className="container secondpage-body">
          <Input />
          <User />
        </div>
      </div>
    </div>
  );
}
