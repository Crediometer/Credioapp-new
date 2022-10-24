import React from "react";
import './FirstCol.css'
import Secondrow from './Secondrow/Secondrow'
import FirstrowComp1 from "./Firstrow/FirstrowComp1";
export default function FirstCol() {
  return (
    <div id="firstcol">
      <div>
        <FirstrowComp1/>
        <Secondrow />
      </div>
      

      {/**second row */}

    </div>
  );
}
