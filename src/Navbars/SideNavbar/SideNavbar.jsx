import React from "react";
import { FaChartLine, FaHome, FaTag, FaWallet } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import "./SideNavbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function SideNavbar() {
    const [style, setStyle] = useState("");
    const changeStyle = () => {
        setStyle("active");
      };

  return (
    <div id="side-nav">
      <NavLink to="./" onClick={changeStyle} className='inactive'>
        <img src="images/crediologo.png" alt="credio-logo" id="credio-logo" />
      </NavLink>
      <NavLink to="./Overview" onClick={changeStyle} id="one" className='inactive'>
        <div>
          <FaHome />
        </div>
        <p>Overview</p>
      </NavLink>
      <NavLink to="./Cardpage" id="two" className='inactive'>
        <div>
          <FaWallet />
        </div>
        <p>Cards</p>
      </NavLink>
      <NavLink to="/tr" id="three" className='inactive'>
        <div>
          <FaTag />
        </div>
        <p>Transactions</p>
      </NavLink>
      <NavLink to="/ca" id="four" className='inactive'>
        <div>
          <FaChartLine />
        </div>
        <p>Report</p>
      </NavLink>
      <NavLink to="/cha" id="five" className='inactive'>
        <div>
          <BsFillChatFill />
        </div>
        <p>Chat</p>
      </NavLink>
    </div>
  );
}
