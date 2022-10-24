import React from "react";
import { FaSearch } from "react-icons/fa";
import './Input.css'
export default function Input() {
  return (
    <div id="input">
      <form action="" id="user-search">
        <FaSearch />
        <input type="text" placeholder="Search" id="cardpage-input" />
      </form>
      <br />
    </div>
  );
}
