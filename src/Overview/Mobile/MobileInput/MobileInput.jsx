import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";

export default function MobileInput() {
  return (
    <div>
      <div className="mx-4 shadow-sm" style={{fontSize:'13px'}}>
        <form
          action=""
          className="bg-white d-flex justify-content-between p-3 mb-1 bg-white rounded border-10"
        >
          <div className="d-flex align-items-center">
            <FaSearch />
            <input type="text" placeholder="Search" className="border-0" />
          </div>
          <div>
            <FaBell />
          </div>
        </form>
      </div>
    </div>
  );
}
