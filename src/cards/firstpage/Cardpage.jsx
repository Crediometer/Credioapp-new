import React from "react";
import { FaSearch } from "react-icons/fa";
import Userdata1 from "./firstuserdata/Userdata1";
import Userdata2 from "./seconduserdata/Userdata2";
import TopNavbar from "../../Navbars/TopNavbar/TopNavbar";
import SideNavbar from "../../Navbars/SideNavbar/SideNavbar";
import "./Cardpage.css";
import Mobile from "./Mobile/Mobile";
export default function Cardpage() {
  return (
    <div>
      <div className="row cardpage-entire-page">
        <div className="col-2">
          <SideNavbar />
        </div>

        <div className="col-10">
          <TopNavbar />
          <div id="cardpage-body">
            <h4>Operation History</h4>
            <form action="" id="user-search">
              <FaSearch />
              <input type="text" placeholder="Search" id="cardpage-input" />
            </form>
            <br />
            <div>
              <p>TODAY | 19 NOV 2022</p>
              <Userdata1 />
            </div>
            <br />
            <div>
              <p>YESTERDAY | 18 NOV 2022</p>
              <Userdata2 />
            </div>
          </div>
        </div>
      </div>
      <Mobile/>
    </div>
  );
}
